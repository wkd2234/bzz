<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/28 0028
 * Time: 15:14
 *
 *
 *  custer:type,
width:width,
height:height,
sort:sort,
status:status
 */

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');



$custer = intval($_POST['custer']);
$width = intval($_POST['width']);
$height = intval($_POST['height']);
$sort = intval($_POST['sort']);
$status = intval($_POST['status']);
$date = $date = date("Y-m-d H:i:s");

$sql = "insert into `t_size` (`width`,`height`,`custer`,`sort`,`date`,`status`) VALUES (".$width.",".$height.",".$custer.",".$sort.",'".$date."',".$status.");";
$query = $mysqli->query($sql);

echo $sql;



$mysqli->close();


