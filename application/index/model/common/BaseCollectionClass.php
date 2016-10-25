<?php
namespace app\index\model\common;

use think\Model;
class BaseCollectionClass extends Model
{

    /**
     * 下载排行
     * @return array
     */
    public function selectSortList()
    {
        return $this->order('sort desc')->limit(20)->select();
    }

    /**
     * 壁纸总数
     * @return int
     */
    public function getCount(){
        return $this->count();
    }

    /**
     * 相邻壁纸
     * @param $id
     * @return array
     */
    public function getAdjacent($id)
    {
        $arr = [];
        array_push($arr,$this->where('id','<',$id)->order('id desc')->limit(1)->field('id,cutpic1')->find());
        array_push($arr,$this->where('id','>',$id)->order('id')->limit(1)->field('id,cutpic1')->find());

        return $arr;
    }

}