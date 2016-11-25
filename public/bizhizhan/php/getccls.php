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

$sql = "select * from `bz_c_cls` order by `clsid` asc;";
$query = $mysqli->query($sql);

$rss = array();
$hash = 0;
$comhash = '';
$parenthash = 0;
$lrs = array();

while ($rs = $query->fetch_array(MYSQLI_ASSOC)) {
    if ($parenthash == 0)
        $parenthash = $rs['clsid'];
    if ($rs['clsid'] == $parenthash){
        $comhash = $parenthash."-".$hash;
        $lrs[$rs['c_clsnm']] = $comhash;
        ++$hash;
    }else{
        $rss[$parenthash] = $lrs;
        $parenthash = $rs['clsid'];
        $hash = 0;
        $comhash = $parenthash."-".$hash;
        $lrs = array();
        $lrs[$rs['c_clsnm']] = $comhash;
        ++$hash;
    }
}
$rss[$parenthash] = $lrs;

$mysqli->close();

echo json_encode($rss);

