<?php
namespace app\index\model\cls;

use think\Db;
use think\Model;

class SubCls extends Model
{

    protected $table = 'bz_c_cls';

    /**
     * 某父类下所有子类
     * @param $id
     * @return false|\PDOStatement|string|\think\Collection
     */
    public function selectAllByClsId($id)
    {
        return $this->where('clsid',$id)->order('sort desc')->field('id,c_clsnm')->select();
    }

    /**
     * 查询某个子类
     * @param $id
     * @return array|false|\PDOStatement|string|Model
     */
    public function selectOntItem($id)
    {
        return $this->where('id',$id)->field('c_clsnm')->find();
    }

    /**
     * 根据父类名称查询某个父类下的所有子类
     * @param $nm
     * @return false|\PDOStatement|string|\think\Collection
     */
    public function selectAllByClsnm($nm)
    {
        $id = Db::table('bz_cls')->where('clsnm',$nm)->field('id')->find()['id'];
        return $this->selectAllByClsId($id);
    }
}