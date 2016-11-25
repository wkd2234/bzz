<?php
namespace app\index\controller;

use app\index\model\iPadmodel\IpadBizhi;
use app\index\model\iPadmodel\IpadCollection;
use app\index\model\iPadmodel\IpadWenjian;
use think\Controller;
use app\index\model\pcmodel\PCbizhi;
use app\index\model\pcmodel\PCwenjian;
use app\index\model\pcmodel\PCcollection;
use app\index\model\mobilemodel\MobileBizhi;
use app\index\model\mobilemodel\MobileCollection;
use app\index\model\mobilemodel\MobileWenjian;
use think\Db;
use think\Request;

class Picture extends Controller
{
    private function replaceImgPath($arr)
    {
        foreach ($arr as $key=>$item) {
            if (isset($item['cutpic1'])) {
                if(preg_match('/http/',$item['cutpic1'])){
                    return $arr;
                }
                $url1 = '';
                $url2 = '';
                preg_match('/bizhizhan.*/', $item['cutpic1'], $url1);
                preg_match('/bizhizhan.*/', $item['cutpic2'], $url2);
                $item['cutpic1'] = config('IMG_PATH') . $url1[0];
                $item['cutpic2'] = config('IMG_PATH') . $url2[0];

            } else if (isset($item['pic'])) {
                if(preg_match('/http/',$item['pic'])){
                    return $arr;
                }
                $url = '';
                preg_match('/bizhizhan.*/', $item['pic'], $url);
                $item['pic'] = config('IMG_PATH') . $url[0];
            } else if (isset($item['url'])) {
                if(preg_match('/http/',$item['url'])){
                    return $arr;
                }
                $url = '';
                preg_match('/bizhizhan.*/', $item['url'], $url);
                $item['url'] = config('IMG_PATH') . $url[0];
            }else if (isset($item['cut_pic1'])) {

                $url = '';
                preg_match('/bizhizhan.*/', $item['cut_pic1'], $url);
                $item['cut_pic1'] = config('IMG_PATH').$url[0];
            }
            $arr[$key] = $item;
        }

        return $arr;
    }

    private function common($client)
    {
        $json_string = file_get_contents('../public/static/json/prime.json');
        $datas       = json_decode($json_string, true);
        $primeList = null;

        switch ($client) {
            case "pc":
                $collection = new PCcollection();
                $bizhi      = new PCbizhi();
                $wenjian    = new PCwenjian();

                $primeList = $collection->selectPrime();
                break;
            case "mobile":
                $collection = new MobileCollection();
                $bizhi      = new MobileBizhi();
                $wenjian    = new MobileWenjian();

                $primeList = $collection->selectPrime();
                break;
            case "ipad":
                $collection = new IpadCollection();
                $bizhi      = new IpadBizhi();
                $wenjian    = new IpadWenjian();

                $primeList = $collection->selectPrime();
                break;
            default:
                break;
        }
        if (!isset($collection))
            return;

        $id = Request::instance()->param('id');

        $collection->where('id',$id)->setInc('sort',10);

        $adjacent = $this->replaceImgPath($collection->getAdjacent($id));

        $pics     = $wenjian->selGroupBy($id);
        $pics     = $this->replaceImgPath($pics);

        $this->assign([
            'count'     => sizeof($pics),
            'picList'   => $pics,
            'pre'       => $adjacent[0],
            'next'      => $adjacent[1],
            'primeList' => $this->replaceImgPath($primeList),
            'sizeList'  => [],
            'hotList'   => Db::table('t_hot')->order('sort desc')->limit(6)->select()
        ]);
    }

    /**
     * 电脑内页
     * @return mixed
     */
    public function pc()
    {
        $this->common("pc");

        return $this->fetch('pc');
    }

    /**
     * 手机内页
     * @return mixed
     */
    public function mobile()
    {
        $this->common("mobile");

        return $this->fetch('mobile');
    }

    public function ipad()
    {
        $this->common('ipad');

        return $this->fetch('ipad');
    }
}