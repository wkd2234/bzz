<?php
namespace app\index\model;

use think\Model;

class Size extends Model
{
    protected $table = "t_size";

    /**
     * 某种终端下的所有分辨率
     * @param $client int 客户端类型 0为PC 1为手机 2为iPad
     * @return array
     */
    public function selectAllSize($client)
    {
        return $this->where('custer',$client)->order('width desc')->field('width,height')->select();
    }
}