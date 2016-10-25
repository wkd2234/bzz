<?php
namespace app\index\model;

use think\Model;

class Slide extends Model
{
    protected $table = 't_ppt';

    /**
     * 查询首页幻灯片
     * @return array null
     */
    public function selectIndexSlide()
    {
        return $this->where('position','首页')->order('sort desc')->limit(10)->select();
    }

    /**
     * 查询电脑首页幻灯片
     * @return array null
     */
    public function selectPCSlide()
    {
        return $this->where('position','电脑二级首页')->order('sort desc')->limit(10)->select();
    }

    /**
     * 查询手机首页幻灯片
     * @return array null
     */
    public function selectMobileSlide()
    {
        return $this->where('position','手机二级首页')->order('sort desc')->limit(16)->select();
    }

    /**
     * 查询iPad首页幻灯片
     * @return array null
     */
    public function selectIpadSlide()
    {
        return $this->where('position','iPad二级首页')->order('sort desc')->limit(10)->select();
    }
}