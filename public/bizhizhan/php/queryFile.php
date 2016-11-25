<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/26 0026
 * Time: 16:48
 */
header('Content-type: application/json');

$bzid = $_POST['id'];

$wj = $_POST['custer'].'_wj_gj';
$bz = $_POST['custer'].'_bz_gl';

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$mysqli->set_charset('utf-8');

$sql = "select * from `".$wj."` where `bzid` ='".$bzid."'";
$query = $mysqli->query($sql);

$rss = array();

while($rs=$query->fetch_array(MYSQLI_ASSOC)){

    $lrs = array('id'=>$rs['id'],'FenBianLu'=>$rs['fbl'],'sorts'=>$rs['sort'],'date'=>$rs['date'],'status'=>$rs['status']);
    array_push($rss,$lrs);
}

$sql = "select * from `".$bz."` where `id` = '".$bzid."'";

$query = $mysqli->query($sql);

while($rs=$query->fetch_array(MYSQLI_ASSOC)){

   for($i = 0;$i < sizeof($rss);$i++){
           $rss[$i]['ZhuanJi'] = $rs['zjnm'];
           $rss[$i]['classes'] = $rs['cls'];
           $rss[$i]['childClass'] = $rs['c_cls'];
           $rss[$i]['BiZhi'] = $rs['bznm'];

   }
}
$mysqli->close();

echo json_encode($rss);


