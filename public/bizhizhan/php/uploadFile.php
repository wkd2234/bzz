<head>
    <meta charset="UTF-8">
</head>
<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/27 0027
 * Time: 16:02
 *  os:'pc',
*/

switch($_POST['client']){
    case 'pc':
        $client = 'pc';
        break;
    case 'mobile':
        $client = 'sj';
        break;
    case 'ipad':
        $client = 'ip';
        break;
    default:
        throw new ErrorException('set client!');
}

$type=array("jpg","gif","bmp","jpeg","png");//设置允许上传文件的类型

//获取文件后缀名函数
$file = $_FILES['picture'];//得到传输的数据
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
$upload_path = "../images/".$client."files/"; //上传文件的存放路径
//开始移动文件到相应的文件夹

if(move_uploaded_file($file['tmp_name'][0],$upload_path.$file['name'][0])){
    echo "Successfully!";
    $name=iconv("UTF-8","gb2312", $name);
    $filepath = "bizhizhan/images/".$client."files/".$name;
}else{
    echo "Failed!";
    $filepath = "fail upload";
}


$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan');

$mysqli->set_charset('utf-8');

$bzid =  intval($_POST['bzid']);
$fenbianlv = $_POST['fbl'];
$sort = intval($_POST['sort']);
$status = intval($_POST['radio-group']);
$date = date("Y-m-d H:i:s");

$sql = "select `zjid` from `".$client."_bz_gl` where `id` = '".$bzid."'";
$query = $mysqli->query($sql);
$rs = $query->fetch_array(MYSQLI_ASSOC);

$zjid = $rs['zjid'];



$sql = "insert into `".$client."_wj_gj` (`zjid`,`bzid`,`fbl`,`sort`,`date`,`status`,`pic`) values (".$zjid.",".$bzid.",'".$fenbianlv."',".$sort.",'".$date."',".$status.",'".$filepath."')";

$query = $mysqli->query($sql);

$sql = "update `".$client."_bz_gl` set `count` = `count`+1 WHERE `id` =".$bzid.";";
$query = $mysqli->query($sql);

echo $sql;

$mysqli->close();

?>
?>

