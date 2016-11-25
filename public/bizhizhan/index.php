<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>壁纸站后台管理系统</title>
    <link rel="stylesheet" href="dist/exam.build.css">
    <script src="./jquery.js"></script>
    <link rel="stylesheet" href="common/style.css">
</head>
<?php
session_start();
if(!isset($_SESSION["user"])){
    echo "<script>location.href= 'http://10.0.10.221:8080/bizhizhan/login.html'</script>";
};
session_unset();
session_destroy();
?>
<body>
<div id="tabs">
    <div id="logo"><img src="./images/logo.png"></div>
    <ul>
        <li>
            <a v-link="{ path: '/PCbizhi',activeClass: 'active'}" style="text-decoration: none;">电脑壁纸</a>
        </li>
        <li><a v-link="{ path: '/MOBILEbizhi',activeClass: 'active' }" style="text-decoration: none;">手机壁纸</a></li>
        <li><a v-link="{ path: '/iPadbizhi',activeClass: 'active'}" style="text-decoration: none;">iPad壁纸</a></li>
        <li><a v-link="{ path: '/CommonSetting',activeClass: 'active'}" style="text-decoration: none;">通用设置</a></li>
    </ul>
    <div style="float: right;margin-right: 40px">
        <span>欢迎你,超级管理员!</span>
        <a href="/bizhizhan/login.html">退出</a>
    </div>
</div>
<div id="main">
    <router-view></router-view>
</div>


</body>
<script src="dist/exam.build.js"></script>
</html>