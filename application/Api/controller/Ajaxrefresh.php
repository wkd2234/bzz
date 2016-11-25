<?php
namespace app\Api\controller;

use app\index\model\cls\SubCls;
use app\index\model\iPadmodel\IpadCollection;
use app\index\model\iPadmodel\IpadWenjian;
use app\index\model\mobilemodel\MobileCollection;
use app\index\model\mobilemodel\MobileWenjian;
use app\index\model\pcmodel\PCcollection;
use app\index\model\pcmodel\PCwenjian;
use think\Controller;
use think\Db;
use think\Request;

class Ajaxrefresh extends Controller
{
    private function replaceImgPath($arr)
    {
        foreach ($arr as $item) {
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
                $url = '';
                preg_match('/bizhizhan.*/', $item['pic'], $url1);
                $item['pic'] = config('IMG_PATH') . $url[0];
            } else {
                $url = '';
                preg_match('/bizhizhan.*/', $item['url'], $url);
                $item['url'] = config('IMG_PATH') . $url[0];
            }
        }

        return $arr;
    }

    private function replaceImgPathReference(&$arr)
    {
        foreach ($arr as &$item) {
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
                $url = '';
                preg_match('/bizhizhan.*/', $item['pic'], $url1);
                $item['pic'] = config('IMG_PATH') . $url[0];
            } else {
                $url = '';
                preg_match('/bizhizhan.*/', $item['url'], $url);
                $item['url'] = config('IMG_PATH') . $url[0];
            }
        }

        return $arr;
    }

    /**
     * 响应当前端点击 '壁纸子类' '壁纸尺寸' '壁纸色系'时的 ajax 请求
     * 重新渲染前端壁纸列表页
     *
     * @param Request $request
     * @return array
     */
    public function refresh(Request $request)
    {
        $client     = $request->param('client');
        $collection = null;
        $pages      = 15;

        switch ($client) {
            case 'pc':
                $collection = new PCcollection();
                break;
            case 'mobile':
                $collection = new MobileCollection();
                $client     = 'sj';
                break;
            case 'mobilelist' :
                $collection = new MobileCollection();
                $client     = 'sj';
                break;
            case 'ipad':
                $collection = new IpadCollection();
                $client     = 'ip';
                break;
            default:
                break;
        }

        $fbl      = $request->param('fbl');
        $class    = $request->param('class');
        $subclass = $request->param('subclass');
        $color    = $request->param('color');

//        $isPage  = $request->param('isPage');

        $sort = $request->has('sort') ? $request->param('sort') : 'sort';

        if (!empty($class)) {
            $where = "cls='{$class}'";

            if (!empty($subclass)) {
                $where .= " and c_cls='{$subclass}'";
            }
            if (!empty($color)){
                $where .= " and color='{$color}'";
            } 
            if (!empty($fbl)) {
                if (preg_match('/x/', $fbl)) {
                    $fbl = str_replace('x', '*', $fbl);
                }
                $fbl = "fbl='{$fbl}'";

                $res = $collection->selectFilter($client, $where, $fbl, $sort);

                $data  = $this->replaceImgPath($res['data']);
                $count = $res['count'] /  $pages ;
                if (is_float($count))
                    $count = ceil($count);

                echo json_encode(['data' => $data, 'count' => $count]);

            }else {
                $res = $collection->selectWhere($where, $sort);

                $data  = $this->replaceImgPath($res['data']);
                $count = $res['count'] /  $pages ;
                if (is_float($count))
                    $count = ceil($count);

                echo json_encode(['data' => $data, 'count' => $count]);
            }
        } else if (!empty($fbl)) {
            if (preg_match('/x/', $fbl)) {
                $fbl = str_replace('x', '*', $fbl);
            }
            $fbl = "fbl='{$fbl}'";

            $res = $collection->selectFBL($client, $fbl, $sort);

            $data  = $this->replaceImgPath($res['data']);
            $count = $res['count'] /  $pages ;
            if (is_float($count))
                $count = ceil($count);

            echo json_encode(['data' => $data, 'count' => $count]);

        }else if (!empty($color)){
            $where = "color = '{$color}'";
            $res = $collection->selectWhere($where,$sort);

            $data = $this->replaceImgPath($res['data']);

            $count = $res['count']/$pages;
            if (is_float($count))
                $count = ceil($count);

            echo json_encode(['data' => $data, 'count' => $count]);
        }else {
            $res = $collection->selectOnlyBySort($sort);
            $data  = $this->replaceImgPath($res['data']);
            $count = $res['count'] /  $pages ;
            if (is_float($count))
                $count = ceil($count);
                

            echo json_encode(['data' => $data, 'count' => $count]);
        }
//        if ($item == 'color') {
//            //todo
//        }

    }

    /**
     * 响应当前端点击 '壁纸分类' 时的 ajax 请求
     * 重新渲染 '壁纸子类'
     *
     * @param Request $request
     * @return array
     */
    public function getsubclass(Request $request)
    {
        $id  = $request->param('id');
        $sub = new SubCls();

        echo json_encode($sub->selectAllByClsId($id));
    }

    /**
     * 单张图片切换是动态更新其所有的分辨率
     *
     * @param Request $request
     */
    public function getonepagesize(Request $request)
    {
        $wenjian = null;
        $client  = $request->param('client');
        $id      = $request->param('id');

        switch($client){
            case 'pc':
                $wenjian = new PCwenjian();
                break;
            case 'mobile':
                $wenjian = new MobileWenjian();
                break;
            case 'ipad':
                $wenjian = new IpadWenjian();
                break;
            default:
                break;
        }

        echo json_encode($wenjian->selectSizeByBzId($id));
    }

    /**
     * @param Request $request
     */
    public function mousewheelprime(Request $request)
    {
        $limit = empty($request->param('limit'))?0:$request->param('limit');
        $sInput = $request->param('sinput');

        if(empty($sInput)) {
            $res = Db::query("(select id,nm,cutpic1,cutpic2,client,sort from pc_bz_zj) 
                            union all (select id,nm,cutpic1,cutpic2,client,sort from sj_bz_zj) 
                            union all (select id,nm,cutpic1,cutpic2,client,sort from ip_bz_zj) 
                            order by sort desc limit {$limit},24");
        }else{
            $res = Db::query("(select id,nm,cutpic1,cutpic2,client,sort from pc_bz_zj where nm like '%{$sInput}%')
                            union all (select id,nm,cutpic1,cutpic2,client,sort from sj_bz_zj where nm like '%{$sInput}%')
                            union all (select id,nm,cutpic1,cutpic2,client,sort from ip_bz_zj where nm like '%{$sInput}%')
                            order by sort desc limit {$limit},24");
        }
        echo json_encode($this->replaceImgPathReference($res));
    }


}