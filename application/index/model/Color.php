<?php
namespace app\index\model;

use think\Model;

class Color extends Model
{
    protected $table = 't_sex';

    /**
     * 所有色系
     * @return array null
     */
    public function selectAllColor()
    {
        return $this->field('id,color,example')->order('sort desc')->select();
    }
}