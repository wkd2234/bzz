<?php
namespace app\index\model\cls;

use think\Model;

class ParentCls extends Model
{
    protected $table = 'bz_cls';

    /**
     * 所有一级分类
     * @return array null
     */
    public function selectAllCls()
    {
        return $this->field('id,clsnm')->order('sort desc')->select();
    }

    /**
     * 查询一个一级分类
     * @param $id
     * @return array null
     */
    public function selectOneItem($id)
    {
        return $this->where('id',$id)->field('clsnm')->find();
    }
}