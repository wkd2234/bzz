<?php
namespace app\index\model\iPadmodel;

use app\index\model\common\BaseCollectionClass;

class IpadCollection extends BaseCollectionClass
{
    protected $table = 'ip_bz_zj';

    /**
     * 查询要在首页显示的ipad壁纸6张
     * @return array null
     */
    public function selectIndex()
    {
        return $this->order('sort desc')->limit(10)->select();
    }

}