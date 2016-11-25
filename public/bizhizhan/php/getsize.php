<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/29 0029
 * Time: 12:21
 */
header('Content-type: application/json');


$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$custer = $_GET['custer'];

$mysqli->set_charset('utf-8');

$sql = "select * from `t_size` where `custer` = ".$custer.";";

$query = $mysqli->query($sql);

$rss = array();

while($rs=$query->fetch_array(MYSQLI_ASSOC)){

    $size = $rs['width']."*".$rs['height'];
    $lrs = array($size=>$rs['id']);

    array_push($rss,$lrs);
}

$mysqli->close();

echo json_encode($rss);

