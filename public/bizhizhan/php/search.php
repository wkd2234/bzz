<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/27 0027
 * Time: 12:59
 */
header('Content-type: application/json');

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');

$rss = array();

$level = $_POST['table'];
$col = $_POST['col'];
$content = $_POST['content'];

$table = array(
    "zhuanji"=>"`".$_POST['custer']."_bz_zj`",
    "bizhi"=>"`".$_POST['custer']."_bz_gl`",
    "wenjian"=>"`".$_POST['custer']."_wj_gj`"
);


if($level == 'zhuanji') {
    $sql = "select * from ".$table['zhuanji']." where `" . $col . "`like'%" . $content . "%';";
    $query = $mysqli->query($sql);

    while ($rs = $query->fetch_array(MYSQLI_ASSOC)) {

        $lrs = array('id' => $rs['id'],
            'ZhuanJi' => $rs['nm'],
            'classes' => $rs['cls'],
            'childClass' => $rs['c_cls'],
            'sort' => $rs['sort'],
            'date' => $rs['date'],
            'status' => $rs['status']
        );
        array_push($rss, $lrs);
    }

}else if($level == 'bizhi'){
    $zjid = $_POST['id'];

    $sql = "select * from ".$table['bizhi']." where `" . $col . "`like'%" . $content . "%'and `zjid` = '".$zjid."';";
    $query = $mysqli->query($sql);

    while ($rs = $query->fetch_array(MYSQLI_ASSOC)) {

        $lrs = array(
            'id' => $rs['id'],
            'ZhuanJi' => $rs['zjnm'],
            'classes' => $rs['cls'],
            'childClass' => $rs['c_cls'],
            'BiZhi' => $rs['bznm'],
            'count' => $rs['count'],
            'sort' => $rs['sort'],
            'date' => $rs['date'],
            'status' => $rs['status']
        );
        array_push($rss, $lrs);
    }
}else if($level == 'wenjian'){
    $bzid = $_POST['id'];

    $sql = "select * from ".$table['wenjian']." where `" . $col . "`like'%" . $content . "%' and `bzid` = '".$bzid."';";


    $query = $mysqli->query($sql);

    while($rs=$query->fetch_array(MYSQLI_ASSOC)){
        $lrs = array('id'=>$rs['id'],
            'FenBianLu'=>$rs['fbl'],
            'sorts'=>$rs['sort'],
            'date'=>$rs['date'],
            'status'=>$rs['status']
        );
        array_push($rss,$lrs);
    }

    $sql = "select * from ".$table['bizhi']." where `id` = '".$bzid."'";

    $query = $mysqli->query($sql);

    $rs=$query->fetch_array(MYSQLI_ASSOC);

    for($i = 0;$i < sizeof($rss);$i++) {
        $rss[$i]['ZhuanJi'] = $rs['zjnm'];
        $rss[$i]['classes'] = $rs['cls'];
        $rss[$i]['childClass'] = $rs['c_cls'];
        $rss[$i]['BiZhi'] = $rs['bznm'];
    }
}

$mysqli->close();

echo json_encode($rss);

?>