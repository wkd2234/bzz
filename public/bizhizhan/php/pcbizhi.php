<html>
<head>
   <meta charset="utf-8">
</head>
<?php

try{require_once(__DIR__.'/util/ImgOperation.php');
}catch (Exception $e){
   throw new Exception;
}
require_once(__DIR__.'/util/PrintJson.php');

$_json = new PrintJson('D:\Apache24\htdocs\bizhizhanqianduan\package\json.json');

switch($_POST['client']){
   case 'pc':
        $client = 'pc';
        $img_width1 = 200;
        $img_height1 = 120;
        $img_width2 = 172;
        $img_height2 = 104;
        break;
   case 'mobile':
        $client = 'sj';
      $img_width1 = 200;
      $img_height1 = 356;
      $img_width2 = 58;
      $img_height2 = 104;
        break;
   case 'ipad':
        $client = 'ip';
      $img_width1 = 200;
       $img_height1 = 150;
      $img_width2 = 139;
      $img_height2 = 104;
        break;
   default:
        throw new ErrorException('set client!');
}


$type=array("jpg","gif","bmp","jpeg","png");//设置允许上传文件的类型

//获取文件后缀名函数

$file = empty($_FILES['picture']['name'][0])?0:$_FILES['picture'];//得到传输的数据


if($file) {
//得到文件名称
   $isPicUpdate = true;

   $name = $file['name'][0];
   $type = strtolower(substr($name, strrpos($name, '.') + 1)); //得到文件类型，并且都转化成小写
   $allow_type = array('jpg', 'jpeg', 'gif', 'png'); //定义允许上传的类型
//判断文件类型是否被允许上传
   if (!in_array($type, $allow_type)) {
      //如果不被允许，则直接停止程序运行
      return;
   }
//判断是否是通过HTTP POST上传的
   if (!is_uploaded_file($file['tmp_name'][0])) {
      //如果不是通过HTTP POST上传的
      return;
   }
   $upload_path = "../images/" . $client . "zjfiles/"; //上传文件的存放路径
//开始移动文件到相应的文件夹

   if (move_uploaded_file($file['tmp_name'][0], $upload_path . $file['name'][0])) {
      echo "Successfully!";
      $name = iconv("UTF-8", "gb2312", $name);
      $filepath = "D:/Apache24/htdocs/bizhizhan/images/" . $client . "zjfiles/" . $name;

      new ImgOperation("D:\\Apache24\\htdocs\\bizhizhan\\images\\{$client}zjfiles\\".$name,$img_width1,$img_height1,"D:\\Apache24\\htdocs\\bzz\\bizhizhan\\cutImages\\{$client}zj1");
      new ImgOperation("D:\\Apache24\\htdocs\\bizhizhan\\images\\{$client}zjfiles\\".$name,$img_width2,$img_height2,"D:\\Apache24\\htdocs\\bzz\\bizhizhan\\cutImages\\{$client}zj2");

      $cutfile1 = "bizhizhan/cutImages/{$client}zj1/".$name;
      $cutfile2 = "bizhizhan/cutImages/{$client}zj2/".$name;


   } else {
      echo "Failed!";
      $filepath = "fail upload";
      $cutfile1 = "fail upload";
      $cutfile2 = "fail upload";
   }
}else {
   $isPicUpdate = false;
}




$mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

   $mysqli->set_charset('utf-8');


   $id = empty($_POST['zjid']) ? null : $_POST['zjid'];

   $editorcreate = ($id=="null" || is_null($id)) ? 'create' : 'edit';
   $zjnm = ($editorcreate == 'create')?$_POST['zjnm']:'';

   $cls = $_POST['cls'];
   $c_cls = $_POST['c_cls'];
   $sort = $_POST['sort'];
   $date = date("Y-m-d H:i:s");
   $status = $_POST['radio-group'];

   if($editorcreate == 'create'){
      $sql = "insert into `" . $client . "_bz_zj` (`nm`,`cls`,`c_cls`,`sort`,`date`,`status`,`zjpic`,`cutpic1`,`cutpic2`) values ('" . $zjnm . "','" . $cls . "','" . $c_cls . "'," . $sort . ",'" . "$date" . "'," . $status . ",'" . "$filepath" . "','".$cutfile1."','".$cutfile2."');";
      $_json->update('count','++')->update($client.'Count','++');
   }
   else{
      if($isPicUpdate)
         $sql = "update `".$client."_bz_zj` set `cls`= '".$cls."',`c_cls`='".$c_cls."',`sort`=".$sort.",`date`='".$date."',`status`=".$status.",`zjpic`='".$filepath."',`cutpic1`='".$cutfile1."',`cutpic2`='".$cutfile2."' where `id`='".$id."';";
      else
         $sql = "update `".$client."_bz_zj` set `cls`= '".$cls."',`c_cls`='".$c_cls."',`sort`=".$sort.",`date`='".$date."',`status`=".$status.",`zjpic`=`zjpic`,`cutpic1`=`cutpic1`,`cutpic2`=`cutpic2` where `id`='".$id."';";
   }



   $query = $mysqli->query($sql);
   echo $mysqli->error;

   require_once(__DIR__.'./util/update_prime.php');

   $mysqli->close();


?>
</html>
