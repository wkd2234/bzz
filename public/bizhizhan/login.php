<html>
<?php
Session_Start();
if(isset($_POST['submit'])){
    $user = $_POST['user'];
    $psw  = $_POST['psw'];

    $mysqli = new mysqli('localhost:3306', 'root', 'asd58585', 't_bizhizhan') or die("数据库连接失败".mysqli_error());

    $mysqli->set_charset('utf-8');

    $sql = "select `psw` from `t_admin` where `user` = '{$user}'";
    $rs = $mysqli->query($sql)->fetch_array(MYSQLI_ASSOC);

    if($rs['psw'] == $psw){
        $_SESSION["user"] = $psw;
        echo "<script>location.href= 'http://10.0.10.221:8080/bizhizhan/#!'</script>";
    }else{
        echo "<script>window.history.go(-1)</script>";
    }
}
?>
</html>