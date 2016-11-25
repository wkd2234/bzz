<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/27 0027
 * Time: 14:11
 */
header('Content-type: application/json');

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');

$zj = $_POST['custer'].'_bz_zj';
$bz = $_POST['custer'].'_bz_gl';

//todo  需要添加校验
$zjid = intval($_POST['zjid']);
$bznm = $_POST['bznm'];
$cls = $_POST['cls'];
$sort = $_POST['sort'];
$date = date("Y-m-d H:i:s");
$status = $_POST['status'];

$sql = "select `nm`,`c_cls` from `".$zj."` WHERE `id`=".$zjid.";";

//todo 需要进行异常处理
$query = $mysqli->query($sql);
$rs = $query->fetch_array(MYSQLI_ASSOC);

$zjnm = $rs['nm'];
$c_cls = $rs['c_cls'];

//todo count计数实现
$sql = "insert into `".$bz."` (`zjid`,`zjnm`,`cls`,`c_cls`,`bznm`,`sort`,`date`,`status`) VALUES (".$zjid.",'".$zjnm."','".$cls."','".$c_cls."','".$bznm."',".$sort.",'".$date."',".$status.");";
$query = $mysqli->query($sql);

$out = array();
$sql = "select * from `{$bz}` where `zjid`={$zjid}";
$query = $mysqli->query($sql);
while($rs = $query->fetch_array(MYSQLI_ASSOC)){
    $lrs = array(
        'id' => $rs['id'],
        'ZhuanJi' => $rs['zjnm'],
        'classes' => $rs['cls'],
        'childClass' => $rs['c_cls'],
        'BiZhi' => $rs['bznm'],
        'count' => $rs['count'],
        'sort' => $rs['sort'],
        'date' => $rs['date'],
        'status' => $rs['status']);

    array_push($out,$lrs);
};

$mysqli->close();

echo json_encode($out);
?>