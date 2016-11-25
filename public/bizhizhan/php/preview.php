<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/10/16 0016
 * Time: 16:10
 */

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');

$table = $_GET['custer'].'_wj_gj';
$id = $_GET['id'];

$sql = "select * from `{$table}` where `id` = {$id}";

$query = $mysqli->query($sql);

$rs = $query->fetch_array(MYSQLI_ASSOC);

$url ='';
preg_match('/bizhizhan.*/',$rs['pic'],$url);

echo $url[0];