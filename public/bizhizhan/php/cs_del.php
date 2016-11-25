
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

$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');

$isAllDel = ($_POST['isAllDel'] == 'isAllDel') ;

$_selected = $isAllDel? $_POST['del']:'';

if($isAllDel)
    $delList = json_decode($_selected,true);
else
    $id = $_POST['id'];

print_r($delList);

$table = $_POST['custer'];

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

    $sql = "delete from `" . $table. "` where `id` in(" . getList($delList) .");";

    $query = $mysqli->query($sql);
    echo $mysqli->error;
}
echo $sql;

$mysqli->close();


