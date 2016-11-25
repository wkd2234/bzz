<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/30 0030
 * Time: 17:34
 */
header('Content-type: application/json');

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$mysqli->set_charset('utf-8');

$sql = "select * from `bz_c_cls` order by `id` asc;";
$query = $mysqli->query($sql);

$rss = array('2'=>array(),'3'=>array());

while ($rs = $query->fetch_array(MYSQLI_ASSOC)) {
    $rss['3'][$rs['c_clsnm']]=$rs['id'];
}


$sql = "select * from `bz_cls` order by `id` asc;";
$query = $mysqli->query($sql);

while($rs=$query->fetch_array(MYSQLI_ASSOC)){
    $rss['2'][$rs['clsnm']]=$rs['id'];
}

$mysqli->close();

echo json_encode($rss);

