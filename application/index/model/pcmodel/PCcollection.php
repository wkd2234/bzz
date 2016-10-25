<?php
namespace app\index\model\pcmodel;

use app\index\model\common\BaseCollectionClass;
use think\Db;

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
     * @param $fbl
     * @param $sort
     * @return array
     */
    public function selectPCByPage($where,$fbl,$sort)
    {
        if(!empty($fbl)){

            return $this->where('id','IN',function($query) use ($fbl){
                $query->table('pc_wj_gj')->where($fbl)->field('zjid');
            })->where($where)->order($sort." desc")->paginate(15);
        }

        return !empty($where)?$this->where($where)->order($sort." desc")->paginate(15):$this->order($sort." desc")->paginate(15);
    }


}