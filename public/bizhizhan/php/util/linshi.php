<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/10/12 0012
 * Time: 14:03
 */
require_once(__DIR__.'/PrintJson.php');

$_json = new PrintJson('D:\Apache24\htdocs\bizhizhanqianduan\package\json.json');

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$mysqli->set_charset('utf-8');


$sql = "select * from `t_size` where `custer` = 2 order by `width` desc";

$query = $mysqli->query($sql);

while($rs = $query->fetch_array(MYSQLI_ASSOC)){
    $val = $rs['width'].'x'.$rs['height'];

    $_json->insert_size('ip',$val);
}

$mysqli->close();
?>