<?php
namespace app\index\controller;

use app\index\model\Size;
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
    private function attachWhere($cls)
    {
        $where = '';
        $fbl   = '';

        if (Request::instance()->param('class')) {
            $clsnm = $cls->selectOneItem(Request::instance()->param('class'))['clsnm'];

            if (!empty($where))
                $where .= " and ";

            $where .= "cls='{$clsnm}'";
            if (Request::instance()->param('subclass')) {
                //todo
            }
        }

        if (Request::instance()->param('color')) {
            //todo
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

        $pcList     = $pcCollection->selectIndexPC();
        $mobileList = $mobileCollection->selectIndex();
        $ipList     = $ipCollection->selectIndex();
        $recentList = $pcCollection->selectIndexRecent();
        $slideList  = $slides->selectIndexSlide();
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
        $client = 0;

        $pcCollection = new PCcollection();
        $cls          = new ParentCls();
        $colors       = new Color();
        $size         = new Size();

        $query = $this->attachWhere($cls);
        $where = $query['where'];
        $fbl   = $query['fbl'];

        $sort = 'sort';

        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }

        $list      = $pcCollection->selectIndexSearch('pc',$where, $fbl, $sort);
        $clsList   = $cls->selectAllCls();
        $colorList = $colors->selectAllColor();
        $sizeList  = $size->selectAllSize($client);
        $sortList  = $pcCollection->selectSortList();

        $this->assign([
            'list'      => $list,
            'clsList'   => $clsList,
            'colorList' => $colorList,
            'sizeList'  => $sizeList,
            'sortList'  => $sortList
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

        $slideList    = $slides->selectMobileSlide();
        $recentList   = $mobile->selectBySortIndex($sort);
        $sizeList     = $size->selectAllSize($client);
        $colorList    = $colors->selectAllColor();
        $clsList      = $parentCls->selectAllCls();
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
            'cartoonList'  => $cartoon,
            'sizeList'     => $sizeList,
            'colorList'    => $colorList,
            'clsList'      => $clsList
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
        $cls    = new ParentCls();
        $size   = new Size();
        $color  = new Color();

        $query = $this->attachWhere($cls);
        $where = $query['where'];
        $fbl   = $query['fbl'];

        $sort = 'sort';
        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }

        $slideList = $slides->selectIpadSlide();
        $clsList   = $cls->selectAllCls();
        $iPadList  = $iPad->selectIndexSearch('ip',$where, $fbl, $sort);
        $sortList  = $iPad->selectSortList();
        $sizeList  = $size->selectAllSize($client);
        $colorList = $color->selectAllColor();

        $this->assign([
            'slideList' => $slideList,
            'iPadList'  => $iPadList,
            'clsList'   => $clsList,
            'sortList'  => $sortList,
            'sizeList'  => $sizeList,
            'colorList' => $colorList
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
        $size   = new Size();
        $color  = new Color();

        $query = $this->attachWhere($cls);
        $where = $query['where'];
        $fbl   = $query['fbl'];

        $sort = 'sort';
        if ($request->has('sort')) {
            $sort = $request->param('sort');
        }

        $clsList    = $cls->selectAllCls();
        $colorList  = $color->selectAllColor();
        $mobileList = $mobile->selectIndexSearch('sj',$where, $fbl, $sort);
        $sortList   = $mobile->selectSortList();
        $sizeList   = $size->selectAllSize($client);

        $this->assign([
            'mobileList' => $mobileList,
            'sortList'   => $sortList,
            'sizeList'   => $sizeList,
            'clsList'    => $clsList,
            'colorList'  => $colorList
        ]);

        return $this->fetch('mobilelist');
    }

}
