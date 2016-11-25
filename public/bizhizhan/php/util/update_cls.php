<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/10/19 0019
 * Time: 10:18
 */
require_once(__DIR__."/PrintJson.php");

define('IMG_PATH','http://localhost:8080/');

$_json = new PrintJson('D:\Apache24\htdocs\bizhizhanqianduan\package\cls.json');

$_json->init();

$cls_arr = array();
$sql1= "select * from `bz_cls`";
$query1 = $mysqli->query($sql1);
while($rs = $query1->fetch_array(MYSQLI_ASSOC)){
    $lrs = array('id'=>$rs['id'],'nm'=>$rs['clsnm']);
    array_push($cls_arr,$lrs);
}

foreach($cls_arr as $key=>$value){
    $sql = "select * from `bz_c_cls` where `clsid`={$value['id']}";
    $query = $mysqli->query($sql);

    $out = array();
    while($rs = $query->fetch_array(MYSQLI_ASSOC)){
        $lrs = array('id'=>$rs['id'],'name'=>$rs['c_clsnm']);
        array_push($out,$lrs);
    }

    $_json->insert_object($value['nm'],$value['id'],$out);
    unset($out);
}