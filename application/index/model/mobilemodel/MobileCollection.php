<?php
namespace app\index\model\mobilemodel;

use app\index\model\common\BaseCollectionClass;

class MobileCollection extends BaseCollectionClass
{
    protected $table = 'sj_bz_zj';

    /**
     * 查询显示在首页的手机壁纸
     *
     * @return Array Or NULL
     */
    public function selectIndex()
    {
        return $this->order('sort desc')->limit(10)->select();
    }

    /**
     * 手机首页最新壁纸
     * @param $sort
     * @return array
     */
    public function selectBySortIndex($sort){
        return $this->order($sort." desc")->limit(10)->select();
    }

    /**
     * 手机首页壁纸查询
     * @param $where
     * @return array
     */
    public function selectByWhereIndex($where){
        return $this->where($where)->order('sort desc')->limit(10)->select();
    }


}