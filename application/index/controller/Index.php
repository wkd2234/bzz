<?php
namespace app\index\controller;

use app\index\model\cls\SubCls;
use app\index\model\Size;
use think\Db;
use think\Request;
use think\Controller;
use app\index\model\iPadmodel\IpadCollection;
use app\index\model\pcmodel\PCcollection;
use app\index\model\mobilemodel\MobileCollection;
use app\index\model\Slide;
use app\index\model\cls\ParentCls;
use app\index\model\Color;

class Index extends Controller
{
    private function replaceImgPathReference(&$arr)
    {
        foreach ($arr as &$item) {
            if (isset($item['cutpic1'])) {
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

    private function replaceImgPath($arr){
        foreach ($arr as $item) {
            if(isset($item['cutpic1'])){
                if(preg_match('/http/',$item['cutpic1'])){
                    return $arr;
                }
                $url1 = '';
                $url2 = '';
                preg_match('/bizhizhan.*/',$item['cutpic1'],$url1);
                preg_match('/bizhizhan.*/',$item['cutpic2'],$url2);
                $item['cutpic1'] = config('IMG_PATH').$url1[0];
                $item['cutpic2'] = config('IMG_PATH').$url2[0];
            }else if(isset($item['pic'])){
                $url = '';
                preg_match('/bizhizhan.*/',$item['pic'],$url1);
                $item['pic'] = config('IMG_PATH').$url[0];
            }else{
                $url = '';
                preg_match('/bizhizhan.*/',$item['url'],$url);
                $item['url'] = config('IMG_PATH').$url[0];
            }
        }
        return $arr;
    }

    private function common()
    {
        $hotList = Db::table('t_hot')->order('sort desc')->limit(6)->select();
        return $hotList;
    }

    private function attachWhere($cls,$sub)
    {
        $where = '';
        $fbl   = '';

        if (Request::instance()->param('class')) {
            $clsnm = Request::instance()->param('class');

            if(is_numeric($clsnm))
                $clsnm = $cls->selectOneItem(Request::instance()->param('class'))['clsnm'];

            if (!empty($where))
                $where .= " and ";

            $where .= "cls='{$clsnm}'";
            if (Request::instance()->param('subclass')) {

                $subCls = Request::instance()->param('subclass');

                if($subCls != "all") {

                    if (is_numeric($subCls))
                        $subCls = $sub->selectOntItem($subCls)['c_clsnm'];

                    if (!empty($where))
                        $where .= " and ";
                    $where .= "c_cls='{$subCls}'";
                }
            }
        }

        if (Request::instance()->param('color')) {
            $where .= "color='".Request::instance()->param('color')."'";
        }

        if (Request::instance()->param('fbl')) {
            $fbl .= "fbl='" . str_replace('x', '*', Request::instance()->param('fbl')) . "'";
        }

        return [
            'where' => $where,
            'fbl'   => $fbl
        ];
    }

    /**
     * 首页
     * @return mixed
     */
    public function index()
    {
        $client = 0;

        $ipCollection     = new IpadCollection();
        $pcCollection     = new PCcollection();
        $mobileCollection = new MobileCollection();
        $slides           = new Slide();
        $parentCls        = new ParentCls();
        $colors           = new Color();
        $sizes            = new Size();

        $pcList     = $this->replaceImgPath($pcCollection->selectIndexPC());
        $mobileList = $this->replaceImgPath($mobileCollection->selectIndex());
        $ipList     = $this->replaceImgPath($ipCollection->selectIndex());
        $recentList = $pcList;
        $slideList  = $this->replaceImgPath($slides->selectIndexSlide());
        $clsList    = $parentCls->selectAllCls();
        $colorList  = $colors->selectAllColor();
        $sizeList   = $sizes->selectAllSize($client);
        $count      = $pcCollection->getCount() + $mobileCollection->getCount() + $ipCollection->getCount();

        $this->assign([
            'pcList'     => $pcList,
            'mobileList' => $mobileList,
            'ipList'     => $ipList,
            'recentList' => $recentList,
            'slideList'  => $slideList,
            'clsList'    => $clsList,
            'colorList'  => $colorList,
            'sizeList'   => $sizeList,
            'count'      => $count,
            'hotList'    => $this->common()
        ]);

        return $this->fetch('index');
    }

    /**
     * pc壁纸二级页面
     * @param Request $request
     * @return mixed
     */
    public function pc(Request $request)
    {
        $client = 0;

        $pcCollection = new PCcollection();
        $cls          = new ParentCls();
        $subcls       = new SubCls();
        $colors       = new Color();
        $size         = new Size();
        $slide        = new Slide();

        $query = $this->attachWhere($cls,$subcls);
        $where = $query['where'];
        $fbl   = $query['fbl'];

        $sort       = 'sort';
        $subclsList = null;

        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }
        if($request->has('class') && $request->has('subclass') && $sub = $request->param('class')){
            if($sub != 'all') {
                if (is_numeric($sub))
                    $subclsList = $subcls->selectAllByClsId($sub);
                else
                    $subclsList = $subcls->selectAllByClsnm($sub);
            }
        }


        $list      = $this->replaceImgPath($pcCollection->selectIndexSearch('pc',$where, $fbl, $sort));
        $clsList   = $cls->selectAllCls();
        $colorList = $colors->selectAllColor();
        $sizeList  = $size->selectAllSize($client);
        $sortList  = $pcCollection->selectSortList();
        $slideList = $this->replaceImgPath($slide->selectPCSlide());
        $count     = $pcCollection->count();

        $this->assign([
            'list'      => $list,
            'clsList'   => $clsList,
            'subClsList'=> $subclsList,
            'colorList' => $colorList,
            'sizeList'  => $sizeList,
            'sortList'  => $sortList,
            'slideList' => $slideList,
            'count'     => $count,
            'hotList'    => $this->common()
        ]);

        return $this->fetch('pc');
    }

    /**
     * 手机二级首页
     * @param Request $request
     * @return mixed
     */
    public function mobile(Request $request)
    {
        $client = 1;

        $mobile    = new MobileCollection();
        $slides    = new Slide();
        $parentCls = new ParentCls();
        $colors    = new Color();
        $size      = new Size();

        $sort = 'sort';
        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }

        $slideList    = $this->replaceImgPath($slides->selectMobileSlide());
        $recentList   = $this->replaceImgPath($mobile->selectBySortIndex($sort));
        $sizeList     = $size->selectAllSize($client);
        $colorList    = $colors->selectAllColor();
        $clsList      = $parentCls->selectAllCls();
        $sightList    = $this->replaceImgPath($mobile->selectByWhereIndex("cls='风景'"));
        $creativeList = $this->replaceImgPath($mobile->selectByWhereIndex("cls='创意'"));
        $cuteList     = $this->replaceImgPath($mobile->selectByWhereIndex("cls='可爱'"));
        $cartoon      = $this->replaceImgPath($mobile->selectByWhereIndex("cls='动漫'"));

        $this->assign([
            'slideList'    => $slideList,
            'recentList'   => $recentList,
            'sightList'    => $sightList,
            'creativeList' => $creativeList,
            'cuteList'     => $cuteList,
            'cartoonList'  => $cartoon,
            'sizeList'     => $sizeList,
            'colorList'    => $colorList,
            'clsList'      => $clsList,
            'hotList'    => $this->common()
        ]);

        return $this->fetch('mobile');
    }

    /**
     * iPad二级首页
     * @param Request $request
     * @return mixed
     */
    public function iPad(Request $request)
    {
        $client = 2;

        $iPad   = new IpadCollection();
        $slides = new Slide();
        $subcls = new SubCls();
        $cls    = new ParentCls();
        $size   = new Size();
        $color  = new Color();

        $query = $this->attachWhere($cls,$subcls);
        $where = $query['where'];
        $fbl   = $query['fbl'];

        $sort       = 'sort';
        $subclsList = null;

        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }
        if($request->has('class') && $request->has('subclass') && $sub = $request->param('class')){
            if($sub != 'all') {
                if (is_numeric($sub))
                    $subclsList = $subcls->selectAllByClsId($sub);
                else
                    $subclsList = $subcls->selectAllByClsnm($sub);
            }
        }

        $slideList = $this->replaceImgPath($slides->selectIpadSlide());
        $clsList   = $cls->selectAllCls();
        $iPadList  = $this->replaceImgPath($iPad->selectIndexSearch('ip',$where, $fbl, $sort));
        $sortList  = $this->replaceImgPath($iPad->selectSortList());
        $sizeList  = $size->selectAllSize($client);
        $colorList = $color->selectAllColor();

        $this->assign([
            'slideList' => $slideList,
            'iPadList'  => $iPadList,
            'clsList'   => $clsList,
            'sortList'  => $sortList,
            'sizeList'  => $sizeList,
            'colorList' => $colorList,
            'subClsList'=> $subclsList,
            'hotList'    => $this->common()
        ]);

        return $this->fetch('ipad');
    }

    /**
     * 手机列表页
     * @param Request $request
     * @return mixed
     */
    public function mobileList(Request $request)
    {
        $client = 1;

        $mobile = new MobileCollection();
        $cls    = new ParentCls();
        $subcls = new SubCls();
        $size   = new Size();
        $color  = new Color();

        $query = $this->attachWhere($cls,$subcls);
        $where = $query['where'];
        $fbl   = $query['fbl'];

        $sort       = 'sort';
        $subclsList = null;

        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }
        if($request->has('class') && $request->has('subclass') && $sub = $request->param('class')){
            if($sub != 'all') {
                if (is_numeric($sub))
                    $subclsList = $subcls->selectAllByClsId($sub);
                else
                    $subclsList = $subcls->selectAllByClsnm($sub);
            }
        }

        $clsList    = $cls->selectAllCls();
        $colorList  = $color->selectAllColor();
        $mobileList = $this->replaceImgPath($mobile->selectIndexSearch('sj',$where, $fbl, $sort));
        $sortList   = $this->replaceImgPath($mobile->selectSortList());
        $sizeList   = $size->selectAllSize($client);

        $this->assign([
            'mobileList' => $mobileList,
            'sortList'   => $sortList,
            'sizeList'   => $sizeList,
            'clsList'    => $clsList,
            'colorList'  => $colorList,
            'subClsList' => $subclsList,
            'hotList'    => $this->common()
        ]);

        return $this->fetch('mobilelist');
    }

    public function search(Request $request)
    {
        // $sInput = $request->param('sInput');

        // if(empty($sInput)) {
        //     $res = Db::query("(select id,nm,cutpic1,cutpic2,client from pc_bz_zj)
        //                     union all (select id,nm,cutpic1,cutpic2,client from sj_bz_zj)
        //                     union all (select id,nm,cutpic1,cutpic2,client from ip_bz_zj)
        //                     limit 24");
        //     // $count = Db::query("select sum(c) from ((select count(*) as c from pc_bz_zj)
        //     //                 union all (select count(*) as c from sj_bz_zj)
        //     //                 union all (select count(*) as c from ip_bz_zj)) a");
        // }else{
        //     $res = Db::query("(select id,nm,cutpic1,cutpic2,client from pc_bz_zj where nm like '%{$sInput}%')
        //                     union all (select id,nm,cutpic1,cutpic2,client from sj_bz_zj where nm like '%{$sInput}%')
        //                     union all (select id,nm,cutpic1,cutpic2,client from ip_bz_zj where nm like '%{$sInput}%')
        //                     limit 24");
            
        //     // $count = Db::query("select sum(c) from ((select count(*) as c from pc_bz_zj where nm like '%{$sInput}%')
        //     //                 union all (select count(*) as c from sj_bz_zj where nm like '%{$sInput}%')
        //     //                 union all (select count(*) as c from ip_bz_zj where nm like '%{$sInput}%')) a");
        // }

        // $this->assign([
        //     'hi'=>json_encode($res),
        //     'count'=>11
        // ]);
        $sInput = trim($request->param('sInput'));
        if (!empty($sInput)) {
            if (!empty(Db::table('t_hot')->where('cont', $sInput)->find())) {
                Db::table('t_hot')->where('cont', $sInput)->setInc('sort');
            } else {
                Db::table('t_hot')->insert(['cont' => $sInput,'sort'=>1]);
            }
        }
        $hasQueryed = Db::query("(select 1 from pc_bz_zj where nm like '%{$sInput}%')
                            union all (select 1 from sj_bz_zj where nm like '%{$sInput}%')
                            union all (select 1 from ip_bz_zj where nm like '%{$sInput}%')
                            limit 1");
        $this->assign([
            'hotList'=>$this->common(),
            'has'    =>$hasQueryed
        ]);

        return $this->fetch('search');
    }

    public function prime()
    {
        $this->assign([
            'hotList'=>$this->common()
        ]);

        return $this->fetch('prime');
    }

}
