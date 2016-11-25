<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/10/8 0008
 * Time: 8:45
 */
header('Content-type: application/json');


$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$mysqli->set_charset('utf-8');

$sql = "select * from `t_ppt` ;";

$query = $mysqli->query($sql);

$rss = array();

while($rs=$query->fetch_array(MYSQLI_ASSOC)){

    $lrs = array(
        'id'=>$rs['id'],
        'PPT'=>$rs['nm'],
        'weizhi'=>$rs['position'],
        'sort'=>$rs['sort'],
        'date'=>$rs['date'],
        'status'=>$rs['status']
    );

    array_push($rss,$lrs);
}

$mysqli->close();

echo json_encode($rss);

