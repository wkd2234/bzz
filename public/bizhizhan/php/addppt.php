<html>
<head>
    <meta charset="utf-8">
</head>
<?php


$type=array("jpg","gif","bmp","jpeg","png");//设置允许上传文件的类型

//获取文件后缀名函数
$file = $_FILES['ppt'];//得到传输的数据
//得到文件名称
$name = $file['name'][0];
$type = strtolower(substr($name,strrpos($name,'.')+1)); //得到文件类型，并且都转化成小写
$allow_type = array('jpg','jpeg','gif','png'); //定义允许上传的类型
//判断文件类型是否被允许上传
if(!in_array($type, $allow_type)){
    //如果不被允许，则直接停止程序运行
    return ;
}
//判断是否是通过HTTP POST上传的
if(!is_uploaded_file($file['tmp_name'][0])){
    //如果不是通过HTTP POST上传的
    return ;
}
$upload_path = "../images/huandengpian/"; //上传文件的存放路径
//开始移动文件到相应的文件夹

if(move_uploaded_file($file['tmp_name'][0],$upload_path.$file['name'][0])){
    echo "Successfully!";
    $name=iconv("UTF-8","gb2312", $name);
    $filepath = "bizhizhan/images/huandengpian/".$name;
}else{
    echo "Failed!";
    $filepath = "fail upload";
}




$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

$mysqli->set_charset('utf-8');


$id = empty($_POST['pptid']) ? null : $_POST['pptid'];

var_dump($id);

$editorcreate = ($id=="null" || is_null($id)) ? 'create' : 'edit';

$nm = ($editorcreate == 'create')?$_POST['pptnm']:'';

$position = $_POST['position'];
$sort = $_POST['sort'];
$skipurl = $_POST['skipurl'];
$date = date("Y-m-d H:i:s");
$status = $_POST['radio-group'];

echo $id.$editorcreate.$nm.$position.$sort.$date.$status;

if($editorcreate == 'create')
    $sql = "insert into `t_ppt` (`nm`,`position`,`sort`,`date`,`status`,`url`,`skipurl`) values ('" . $nm . "','" . $position . "'," . $sort . ",'" . "$date" . "'," . $status . ",'"."$filepath"."','".$skipurl."');";
else
    $sql = "update `t_ppt` set `nm`= `nm` ,`sort`=".$sort.",`date`='".$date."',`status`=".$status.",`url`='".$filepath."',`skipurl`='".$skipurl."' where `id`='".$id."';";

$query = $mysqli->query($sql);
echo $mysqli->error;

$mysqli->close()

?>
</html>
