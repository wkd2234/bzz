<?php
namespace app\index\model\pcmodel;

use app\index\model\common\BaseWenjianClass;
class PCwenjian extends BaseWenjianClass
{
    protected $table = "pc_wj_gj";

    /**
     * 获取某个bzid下的一张图片;
     * @param $id
     * @return array(1)
     */
    public function selectByBzId($id)
    {
        return $this->where('bzid',$id)->order('fbl desc')->limit(1)->field('id,fbl,pic,bzid')->find();
    }

}