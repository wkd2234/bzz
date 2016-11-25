<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/28 0028
 * Time: 16:05
 */
$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');

$table = $_POST['table'];
$id = $_POST['id'];


$sql = "delete from ".$table." where `id` =" . $id . ";";
$query = $mysqli->query($sql);
echo $mysqli->error;
