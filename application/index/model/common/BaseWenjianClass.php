<?php
namespace app\index\model\common;

use think\Model;

class BaseWenjianClass extends Model
{
    /**
     * 获取某个bzid下的一张图片;
     * @param $id
     * @return array(1)
     */
    public function selectByBzId($id)
    {
        return $this->where('bzid',$id)->order('fbl desc')->limit(1)->field('id,fbl,pic,bzid')->find();
    }

    public function selectSizeByBzId($id)
    {
        return $this->where('bzid',$id)->order('fbl desc')->field('id,fbl,pic')->select();
    }

    public function selGroupBy($id)
    {
        return $this->where('zjid',$id)->group('bzid')->select();
    }
}