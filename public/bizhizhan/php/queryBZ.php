<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/26 0026
 * Time: 15:13
 */
header('Content-type: application/json');

$zjid =  $_POST['id'];

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$mysqli->set_charset('utf-8');

$zj = $_POST['custer'].'_bz_zj';
$bz = $_POST['custer'].'_bz_gl';


$sql = "select * from `".$bz."` where `zjid` = '".$zjid."'";

$query = $mysqli->query($sql);

$rss = array();


if($query->num_rows > 0) {
    while ($rs = $query->fetch_array(MYSQLI_ASSOC)) {

        $lrs = array('id' => $rs['id'], 'ZhuanJi' => $rs['zjnm'], 'classes' => $rs['cls'], 'childClass' => $rs['c_cls'], 'BiZhi' => $rs['bznm'], 'count' => $rs['count'], 'sort' => $rs['sort'], 'date' => $rs['date'], 'status' => $rs['status']);
        array_push($rss, $lrs);
    }

    echo json_encode($rss);
}
else{

    $sql = "select `nm` from `".$zj."` where `id` = '".$zjid."'";
    $query = $mysqli->query($sql);
    $rs = $query->fetch_array(MYSQLI_ASSOC);

    echo json_encode($rs['nm']);
}

$mysqli->close();



?>