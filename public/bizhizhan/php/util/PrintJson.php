<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/10/12 0012
 * Time: 9:33
 */
class PrintJson
{
    private $file;
    private $datas;

    /**
     * @file 文件路径
     */
    function __construct($file){
        $this->file = $file;
        $json_string = file_get_contents($file);

        $this->datas = json_decode($json_string, true);
    }

    /**
     * 在json插入一个值,
     * @key   被插入的键名,
     *        所对应的值应为数组才可以插入,
     *        若不存在,则新建
     * @value 值
     */
    public function insert($key,$value){
        if($this->has_key($key)){

            if(!is_array($this->datas[$key])) {
                throw new Exception('需要插值的位置不是数组,请使用update()');
                return $this;
            }
            array_push($this->datas[$key],$value);
        }else{
            $this->datas[$key] = array();
            array_push($this->datas[$key],$value);
        }

        $this->refresh();

        return $this;
    }

    /**
     * 在json中更新一个键值对,
     * @key   键名
     * @value 更新的值
     *        若原值为整型或整数字符串
     *        可以输入 '++','--' 来进行自增自减的操作
     */
    public function update($key,$value){
        if(!$this->has_key($key)){
            throw new Exception('需要更新的值不存在,请使用insert()插值');
            return $this;
        }

        $is_num = intval($this->datas[$key]);

        if($value == '++') {
            if(is_numeric($is_num)) {
                $this->datas[$key]++;
            }
            else
                throw new Exception('自增需要原值为整型');
        }else if($value == '--'){
            if(is_numeric($is_num)) {
                if ($this->datas[$key] > 0) {
                    $this->datas[$key]--;
                }
            }else
                throw new Exception('自减需要原值为整型且大于0');
        }else
            $this->datas[$key] = $value;

        $this->refresh();

        return $this;
    }

    /**
     * 在json新插入一个object
     * @key_1为object名
     * @key_2为object的id
     * @key_3为内容,数据类型为array
     */
    public function insert_object($key_1,$key_2,$key_3){
        $arr = array('name'=>$key_1,'id'=>$key_2,'cls'=>$key_3);

        array_push($this->datas,$arr);

        $this->refresh();

        return $this;
    }

    /**
     * 在json中的object中插入一个obj,
     * @arr    插入的obj
     * @parent 被插入的obj的键 **被插入的obj只能有一个array
     */
    public function insert_object_in_object($arr,$parent){
        if(!is_array($this->datas[$parent])){
            throw new Exception;
            return $this;
        }
        foreach($this->datas[$parent] as $key=>$sub){
            if(is_array($this->datas[$parent][$key])){
                array_push($this->datas[$parent][$key],$arr);
            }
        }

        $this->refresh();
        return $this;

    }


    public function insert_size($arr,$val){
        $array =& $this->datas['px'][$arr];

        array_push($array,$val);

        $this->refresh();
        return $this;
    }

    public function init_object(){
        foreach($this->datas as $key=>$data){
            unset($data);
            $this->datas[$key] = array();
        }
        return $this;
    }

    public function init(){
        unset($this->datas);
        $this->datas = array();
    }

    /**
     * 判断json中是否已经含有key
     * @key 要搜索的key
     */
    private function has_key($key){
        foreach($this->datas as $_key=>$data){
            if($_key == $key)
                return true;
        }
        return false;
    }

    /**
     * 刷新json,完成数据更新
     */
    private function refresh(){
        print_r($this->datas);

        $json_string = json_encode($this->datas);

        file_put_contents($this->file, $json_string);
    }
}
