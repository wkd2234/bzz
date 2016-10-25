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

    /**
     * 查询显示在pc首页的壁纸
     * @param $where
     * @param $sort
     * @return array
     */
    public function selectIPadPage($where,$sort)
    {
        return !empty($where)?$this->where($where)->order($sort." desc")->paginate(15):$this->order($sort." desc")->paginate(15);
    }

}