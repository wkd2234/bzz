<?php
namespace app\index\model\common;

use think\Model;

class BaseCollectionClass extends Model
{

    /**
     * 条件查询
     * @param $where
     * @param $sort
     * @return array
     */
    public function selectWhere($where, $sort)
    {
        return [
            'data'  => $this->where($where)->order($sort . ' desc')->limit(15)->select(),
            'count' => $this->where($where)->count('id')
        ];
    }

    public function selectOnlyBySort($sort)
    {
        return [
            'data'  => $this->order($sort . ' desc')->limit(15)->select(),
            'count' => $this->count('id')
        ];
    }

    /**
     * 下载排行
     * @return array
     */
    public function selectSortList()
    {
        $data = $this->order('sort desc')->limit(20)->select();

        foreach ($data as $key => $value) {
            $cut_url2 = '';
            if(preg_match('/http/', $value['cutpic2'])){
                break;
            }
            preg_match('/bizhizhan.*/', $value['cutpic2'], $cut_url2);
            $value['cutpic2'] = config('IMG_PATH') . $cut_url2[0];
        }

        return $data;
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
        array_push($arr, $this->where('id', '<', $id)->order('id desc')->limit(1)->field('id,cutpic1,cutpic2')->find());
        array_push($arr, $this->where('id', '>', $id)->order('id')->limit(1)->field('id,cutpic1,cutpic2')->find());

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

    /**
     * 分辨率查询
     * @param $client
     * @param $fbl
     * @param $sort
     * @return array
     */
    public function selectFBL($client, $fbl, $sort)
    {
        $wjTable = $client . '_wj_gj';

        return [
            'data'  => $this->where('id', 'IN', function ($query) use ($fbl, $wjTable) {
                $query->table($wjTable)->where($fbl)->field('zjid');
            })->order($sort . ' desc')->limit(15)->select(),
            'count' => $this->where('id', 'IN', function ($query) use ($fbl, $wjTable) {
                $query->table($wjTable)->where($fbl)->field('zjid');
            })->count('id')
        ];
    }

    public function selectFilter($client, $where, $fbl, $sort)
    {
        $wjTable = $client . '_wj_gj';

        return [
            'data'  => $this->where('id', 'IN', function ($query) use ($fbl, $wjTable) {
                $query->table($wjTable)->where($fbl)->field('zjid');
            })->where($where)->order($sort . " desc")->limit(15)->select(),

            'count' => $this->where('id', 'IN', function ($query) use ($fbl, $wjTable) {
                $query->table($wjTable)->where($fbl)->field('zjid');
            })->where($where)->count('id')
        ];
    }

    public function selectSearch($content)
    {
        return $this->where('nm','LIKE','%'.$content.'%')->select();
    }

    public function selectPrime()
    {
        return $this->order('sort desc')->field('id, nm, cutpic1')->limit(4)->select();
    }


}