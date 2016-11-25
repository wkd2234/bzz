
<head>
    <meta charset="utf-8">
</head>
<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/27 0027
 * Time: 9:55
 */

require_once(__DIR__.'/util/PrintJson.php');

$_json = new PrintJson('D:\Apache24\htdocs\bizhizhanqianduan\package\json.json');


$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');

$isAllDel = ($_POST['isAllDel'] == 'isAllDel') ;

$_selected = $isAllDel? $_POST['del']:'';

if($isAllDel)
    $delList = json_decode($_selected,true);
else
    $id = $_POST['id'];

print_r($delList);

$zj = $_POST['custer'].'_bz_zj';
$bz = $_POST['custer'].'_bz_gl';
$wj = $_POST['custer'].'_wj_gj';

switch($_POST['level']){
    case 'zhuanji':
        $table = array($zj,$bz,$wj);
        break;
    case 'bizhi':
        $table = array($bz,$wj);
        break;
    case 'wenjian':
        $table = array($wj);
        break;
    default:
        throw new Exception('please set level');
        break;
}

function getList($arr)
{
    $str = '';
    for ($i = 0;$i<sizeof($arr);$i++){
        if($i == sizeof($arr)-1)
            $str .= $arr[$i];
        else
            $str .= $arr[$i].",";
    }
    return $str;
}



if($isAllDel) {
    for ($i = 0; $i < sizeof($table); $i++) {
        if (sizeof($table) == 3) {
            if ($i == 0) {
                $sql = "delete from `" . $table[$i] . "` where `id` in (" . getList($delList) . ");";
                for($i=0;$i<sizeof($delList);$i++) {
                    $_json->update("count", "-")->update($_POST['custer'] . "Count", "--");
                }
            } else {
                $sql = "delete from `" . $table[$i] . "` where `zjid` in(" . getList($delList) .");";
            }

        } else if (sizeof($table) == 2) {
            if ($i == 0) {
                $sql = "delete from `" . $table[$i] . "` where `id` in (" . getList($delList) . ");";
            } else {
                $sql = "delete from `" . $table[$i] . "` where `bzid` in (" . getList($delList) . ");";
            }
        } else {
            $sql = "select * from `" . $table[$i] . "` where `id` in (" . getList($delList) . ");";
            $query = $mysqli->query($sql);
            $bzidArr = array();
            while($rs = $query->fetch_array(MYSQLI_ASSOC)){
                array_push($bzidArr,$rs['bzid']);
            };

            $sql = "delete from `" . $table[$i] . "` where `id` in(" . getList($bzidArr) . ");";
            $query = $mysqli->query($sql);

            $sql = "update `" . $bz . "` set `count` = `count`-1 WHERE `id` in(" . getList($bzidArr) . ");";

        }
        $query = $mysqli->query($sql);
        echo $mysqli->error;
    }
}else {
    for ($i = 0; $i < sizeof($table); $i++) {
        if (sizeof($table) == 3) {
            if ($i == 0) {
                $sql = "delete from `" . $table[$i] . "` where `id` =" . $id . ";";
                $_json->update("count","--")->update($_POST['custer']."Count","--");
            } else {
                $sql = "delete from `" . $table[$i] . "` where `zjid` =" . $id . ";";
            }
        } else if (sizeof($table) == 2) {
            if ($i == 0) {
                $sql = "delete from `" . $table[$i] . "` where `id` =" . $id . ";";
            } else {
                $sql = "delete from `" . $table[$i] . "` where `bzid` =" . $id . ";";
            }
        } else {
            $sql = "select * from `" . $table[$i] . "` where `id` =" . $id . ";";
            $query = $mysqli->query($sql);
            $rs = $query->fetch_array(MYSQLI_ASSOC);
            $bzid = $rs['bzid'];

            $sql = "delete from `" . $table[$i] . "` where `id` =" . $id . ";";
            $query = $mysqli->query($sql);

            $sql = "update `" . $bz . "` set `count` = `count`-1 WHERE `id` =" . $bzid . ";";

        }
        $query = $mysqli->query($sql);
        echo $mysqli->error;
    }
}
echo $sql;

$mysqli->close();


