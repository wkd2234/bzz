<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/28 0028
 * Time: 13:15
 */
$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');

$id = $_POST['id'];

switch($_POST['level']){
    case 'cls':
        $table = array('bz_cls','bz_c_cls');
        break;
    case 'ccls':
        $table = array('bz_c_cls');
        break;
    default:
        throw new Exception('please set level');
        break;
}


for ($i =0 ;$i<sizeof($table);$i++) {
    if(sizeof($table) == 2) {
        if ($i==0) {
            $sql = "delete from `" . $table[$i] . "` where `id` =" . $id . ";";
        }else{
            $sql = "delete from `" . $table[$i] . "` where `clsid` =" . $id . ";";
        }
    }else {
        $sql = "select * from `".$table[$i]."` where `id` =".$id.";";
        $query = $mysqli->query($sql);

        $rs = $query->fetch_array(MYSQLI_ASSOC);
        $clsid = $rs['clsid'];

        $sql = "delete from `" . $table[$i] . "` where `id` =" . $id . ";";
        $query = $mysqli->query($sql);

        $sql = "update `bz_cls` set `count` = `count`-1 WHERE `id` =".$clsid.";";
    }
    $query = $mysqli->query($sql);
    echo $mysqli->error;
}

$mysqli->close();

