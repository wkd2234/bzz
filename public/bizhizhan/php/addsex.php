<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/28 0028
 * Time: 15:51
 */

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');

$flag = empty($_POST['id']);

$example = $_POST['example'];
$sort = intval($_POST['sort']);
$color = $_POST['color'];
$date = date("Y-m-d H:i:s");
$status = $_POST['status'];

if($flag){
    $sql = "insert into `t_sex` (`color`,`example`,`sort`,`date`,`status`) VALUES ('".$color."','".$example."',".$sort.",'".$date."',".$status.");";
}else {
    $sql = "update `t_sex` set `color`= '".$color."',`example`='".$example."',`sort`=".$sort.",`date`='".$date."',`status`=".$status." where `id`=".intval($_POST['id']).";";
}

$query = $mysqli->query($sql);
echo $mysqli->error;


$mysqli->close()

?>