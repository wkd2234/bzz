<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/28 0028
 * Time: 13:01
 */
header('Content-type: application/json');

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');

$rss = array();

//$table = $_POST['table'];
$col = $_POST['col'];
$content = $_POST['content'];



$sql = "select * from `bz_cls` where `" . $col . "`like'%" . $content . "%';";
$query = $mysqli->query($sql);

while ($rs = $query->fetch_array(MYSQLI_ASSOC)) {

    $lrs = array(
        'id'=>$rs['id'],
        'classes'=>$rs['clsnm'],
        'childClassNum'=>$rs['count'],
        'sort'=>$rs['sort'],
        'date'=>$rs['date'],
        'status'=>$rs['status']
    );
    array_push($rss, $lrs);
}

$mysqli->close();

echo json_encode($rss);

?>