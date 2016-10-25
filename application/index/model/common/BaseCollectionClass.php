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
    public function getCount()
    {
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
        array_push($arr, $this->where('id', '<', $id)->order('id desc')->limit(1)->field('id,cutpic1')->find());
        array_push($arr, $this->where('id', '>', $id)->order('id')->limit(1)->field('id,cutpic1')->find());

        return $arr;
    }

    /**
     * 查询显示在首页的翻页壁纸
     * @param $where
     * @param $fbl //分辨率
     * @param $sort
     * @return array
     */

    public function selectIndexSearch($client, $where, $fbl, $sort)
    {
        $wjTable = $client . '_wj_gj';

        if (!empty($where)) {
            if (!empty($fbl)) {

                return $this->where('id', 'IN', function ($query) use ($fbl, $wjTable) {
                    $query->table($wjTable)->where($fbl)->field('zjid');
                })->where($where)->order($sort . " desc")->paginate(15);
            }

            return $this->where($where)->order($sort . " desc")->paginate(15);
        } else {
            if (!empty($fbl)) {

                return $this->where('id', 'IN', function ($query) use ($fbl, $wjTable) {
                    $query->table($wjTable)->where($fbl)->field('zjid');
                })->order($sort . " desc")->paginate(15);
            }

            return $this->order($sort . " desc")->paginate(15);
        }
    }
}