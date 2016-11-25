<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/28 0028
 * Time: 14:23
 */

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');

$clsid = $_POST['clsid'];
$c_clsnm = $_POST['c_clsnm'];
$sort = $_POST['sort'];
$date = date("Y-m-d H:i:s");

$sql = "insert into `bz_c_cls` (`clsid`,`c_clsnm`,`sort`,`date`) values ('" . $clsid . "','" . $c_clsnm . "','" . $sort . "','" . $date . "')";

$query = $mysqli->query($sql);

if(empty($mysqli->error)){
    $sql = "select `count` from `bz_cls` where `id`=".$clsid.";";
    $query = $mysqli->query($sql);
    $rs = $query->fetch_array(MYSQLI_ASSOC);
    $count = ++$rs['count'];

    $sql ="update `bz_cls` set `count` = `count`+1 where `id`=".$clsid.";";
    $query = $mysqli->query($sql);
    echo $mysqli->error;
};

require_once(__DIR__.'./util/update_cls.php');

$mysqli->close()

?>