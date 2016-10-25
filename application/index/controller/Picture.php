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
use think\Request;

class Picture extends Controller
{
    private function common($client)
    {
        $json_string = file_get_contents('../public/static/json/prime.json');
        $datas = json_decode($json_string, true);


        switch($client){
            case "pc":
                $collection = new PCcollection();
                $bizhi      = new PCbizhi();
                $wenjian    = new PCwenjian();

                $primeList     = $datas['pc'];
                break;
            case "mobile":
                $collection = new MobileCollection();
                $bizhi      = new MobileBizhi();
                $wenjian    = new MobileWenjian();

                $primeList     = $datas['sj'];
                break;
            case "ipad":
                $collection = new IpadCollection();
                $bizhi      = new IpadBizhi();
                $wenjian    = new IpadWenjian();

                $primeList     = $datas['ip'];
                break;
            default:
                break;
        }
        if(!isset($collection))
            return;

        $id = Request::instance()->param('id');

        $item     = $bizhi->selectOneItemByZjId($id);
        $pics     = [];
        $len      = sizeof($item);
        $adjacent = $collection->getAdjacent($id);

        for ($i = 0; $i < $len; $i++) {
            array_push($pics, $wenjian->selectByBzId($item[$i]['id']));
        }

        $this->assign([
            'count'   => $len,
            'picList' => $pics,
            'pre'     => $adjacent[0],
            'next'    => $adjacent[1],
            'primeList'  => $primeList
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