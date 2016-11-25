<?php

header('Content-type: application/json');


$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$mysqli->set_charset('utf-8');

$table = $_GET['custer'].'_bz_zj';
$id = $_GET['id'];

$sql = "select * from `".$table."` where `id` = ".$id.";";
$query = $mysqli->query($sql);

$rss = array();

while($rs=$query->fetch_array(MYSQLI_ASSOC)){

	$lrs = array();

    $lrs['class'] = $rs['cls'];
    $lrs['childClass'] = $rs['c_cls'];
    $lrs['sort'] = $rs['sort'];
    $lrs['status'] = $rs['status'];
    $lrs['imgUrl'] = $rs['zjpic'];

    array_push($rss,$lrs);

}

$mysqli->close();

echo json_encode($rss);



