<?php
namespace app\index\controller;

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
    /**
     * 首页
     * @return mixed
     */
    public function index()
    {
        $ipCollection     = new IpadCollection();
        $pcCollection     = new PCcollection();
        $mobileCollection = new MobileCollection();
        $slides           = new Slide();
        $parentCls        = new ParentCls();
        $colors           = new Color();

        $pcList     = $pcCollection->selectIndexPC();
        $mobileList = $mobileCollection->selectIndex();
        $ipList     = $ipCollection->selectIndex();
        $recentList = $pcCollection->selectIndexRecent();
        $slideList  = $slides->selectIndexSlide();
        $clsList    = $parentCls->selectAllCls();
        $colorList  = $colors->selectAllColor();
        $count      = $pcCollection->getCount() + $mobileCollection->getCount() + $ipCollection->getCount();

        $this->assign([
            'pcList'     => $pcList,
            'mobileList' => $mobileList,
            'ipList'     => $ipList,
            'recentList' => $recentList,
            'slideList'  => $slideList,
            'clsList'    => $clsList,
            'colorList'  => $colorList,
            'count'      => $count
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
        $pcCollection = new PCcollection();
        $cls          = new ParentCls();
        $colors       = new Color();

        $where = '';
        $sort  = 'sort';

        if ($request->has('class')) {
            $clsnm = $cls->selectOneItem($request->param('class'))['clsnm'];
            if (!empty($where))
                $where .= " and ";
            $where .= "cls={$clsnm}";
        }
        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }

        $list = $pcCollection->selectPCByPage($where, $sort);

        $clsList   = $cls->selectAllCls();
        $colorList = $colors->selectAllColor();

        $this->assign([
            'list'      => $list,
            'clsList'   => $clsList,
            'colorList' => $colorList
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
        $mobile    = new MobileCollection();
        $slides    = new Slide();
        $parentCls = new ParentCls();
        $colors    = new Color();

        $sort = 'sort';
        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }

        $slideList    = $slides->selectMobileSlide();
        $recentList   = $mobile->selectBySortIndex($sort);
        $sightList    = $mobile->selectByWhereIndex("cls='风景'");
        $creativeList = $mobile->selectByWhereIndex("cls='创意'");
        $cuteList     = $mobile->selectByWhereIndex("cls='可爱'");
        $cartoon      = $mobile->selectByWhereIndex("cls='动漫卡通'");

        $this->assign([
            'slideList'    => $slideList,
            'recentList'   => $recentList,
            'sightList'    => $sightList,
            'creativeList' => $creativeList,
            'cuteList'     => $cuteList,
            'cartoonList'  => $cartoon
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
        $iPad   = new IpadCollection();
        $slides = new Slide();
        $cls    = new ParentCls();

        $where = '';
        $sort  = 'sort';
        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }
        if ($request->has('class')) {
            $clsnm = $cls->selectOneItem($request->param('class'))['clsnm'];
            if (!empty($where))
                $where .= " and ";
            $where .= "cls={$clsnm}";
        }

        $slideList = $slides->selectIpadSlide();
        $iPadList  = $iPad->selectIPadPage($where, $sort);
        $sortList  = $iPad->selectSortList();

        $this->assign([
            'slideList' => $slideList,
            'iPadList'  => $iPadList,
            'sortList'  => $sortList
        ]);

        return $this->fetch('iPad');
    }

    /**
     * 手机列表页
     * @param Request $request
     * @return mixed
     */
    public function mobileList(Request $request)
    {
        $mobile = new MobileCollection();
        $cls    = new ParentCls();

        $where = '';
        $sort  = 'sort';
        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }
        if ($request->has('class')) {
            $clsnm = $cls->selectOneItem($request->param('class'))['clsnm'];
            if (!empty($where))
                $where .= " and ";
            $where .= "cls={$clsnm}";
        }

        $mobileList = $mobile->selectMobileList($where, $sort);
        $sortList   = $mobile->selectSortList();

        $this->assign([
            'mobileList' => $mobileList,
            'sortList'   => $sortList
        ]);

        return $this->fetch('mobilelist');
    }

}
