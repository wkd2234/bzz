<?php
namespace app\index\model\common;

use think\Model;

class BaseBizhiClass extends Model
{
    /**
     * 查询某个专辑下所有壁纸
     * @param $id
     * @return array
     */
    public function selectOneItemByZjId($id)
    {
        return $this->where('zjid',$id)->order('sort desc')->field('id,bznm')->select();
    }
}