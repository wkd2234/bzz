<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/29 0029
 * Time: 12:21
 */
header('Content-type: application/json');


$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$mysqli->set_charset('utf-8');

$sql = "select * from `bz_cls`;";
$query = $mysqli->query($sql);

$rss = array();

while($rs=$query->fetch_array(MYSQLI_ASSOC)){

    $lrs = array($rs['clsnm']=>$rs['id']);

    array_push($rss,$lrs);
}

$mysqli->close();

echo json_encode($rss);

