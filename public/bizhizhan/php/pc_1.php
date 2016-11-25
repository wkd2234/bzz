

<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/23 0023
 * Time: 17:06
 */
header('Content-type: application/json');

$table = "`".$_POST['custer']."_bz_zj`";

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$mysqli->set_charset('utf-8');

$sql = "select * from ".$table.";";

$query = $mysqli->query($sql);

$rss = array();


while($rs=$query->fetch_array(MYSQLI_ASSOC)){

    $lrs = array('id'=>$rs['id'],'ZhuanJi'=>$rs['nm'],'classes'=>$rs['cls'],'childClass'=>$rs['c_cls'],'sort'=>$rs['sort'],'date'=>$rs['date'],'status'=>$rs['status']);
    array_push($rss,$lrs);
}

$mysqli->close();

echo json_encode($rss);



