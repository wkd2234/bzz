<?php
namespace app\index\model\pcmodel;

use think\Model;
class PCbizhi extends Model
{
    protected $table = "pc_bz_gl";

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