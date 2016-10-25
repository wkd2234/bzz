<?php
namespace app\index\model\pcmodel;

use app\index\model\common\BaseCollectionClass;

class PCcollection extends BaseCollectionClass
{
    protected $table = 'pc_bz_zj';

    /**
     * 查询显示在首页的pc壁纸
     * @return Array Or NULL
     */
    public function selectIndexPC()
    {
        return $this->order('sort desc')->limit(10)->select();
    }

    /**
     * 查询显示在首页的最新壁纸
     * @return Array Or NULL
     */
    public function selectIndexRecent()
    {
        return $this->order('date desc')->limit(6)->select();
    }

    /**
     * 查询显示在pc首页的壁纸
     * @param $where
     * @param $sort
     * @return array
     */
    public function selectPCByPage($where,$sort)
    {
        return !empty($where)?$this->where($where)->order($sort." desc")->paginate(15):$this->order($sort." desc")->paginate(15);
    }


}