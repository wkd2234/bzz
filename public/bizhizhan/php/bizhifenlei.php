<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/28 0028
 * Time: 11:57
 */
header('Content-type: application/json');

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$mysqli->set_charset('utf-8');

$flag = ($_POST['table'] == 'fulei');
$sql = $flag?"select * from `bz_cls`;":"select `clsnm` from `bz_cls` where `id`=".$_POST['clsid'].";";

$query = $mysqli->query($sql);

$rss = array();

if ($flag) {
    while ($rs = $query->fetch_array(MYSQLI_ASSOC)) {
        $lrs = array(
            'id' => $rs['id'],
            'classes' => $rs['clsnm'],
            'childClassNum' => $rs['count'],
            'sort' => $rs['sort'],
            'date' => $rs['date'],
            'status' => $rs['status']
        );
        array_push($rss, $lrs);
    }
}else {
    $rs = $query->fetch_array(MYSQLI_ASSOC);
    $clsnm = $rs['clsnm'];

    $sql = "select * from `bz_c_cls` where `clsid` =".$_POST['clsid'].";";
    $query = $mysqli->query($sql);

    while($rs=$query->fetch_array(MYSQLI_ASSOC)){
        $lrs = array(
            'id' => $rs['id'],
            'parent' => $clsnm,
            'child' => $rs['c_clsnm'],
            'sort' => $rs['sort'],
            'date' => $rs['date'],
            'status' => $rs['status']
        );
        array_push($rss,$lrs);
    }
}

$mysqli->close();

echo json_encode($rss);

