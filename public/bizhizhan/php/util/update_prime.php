<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/10/16 0016
 * Time: 13:56
 */
require_once(__DIR__."/PrintJson.php");

define('IMG_PATH','http://localhost:8080/');

$_json = new PrintJson('D:\Apache24\htdocs\bzz\public\static\json\prime.json');

$prime_custer = array('pc','sj','ip');
$prime_tables = array('pc_bz_zj','sj_bz_zj','ip_bz_zj');

$_json->init_object();

for($i=0;$i<sizeof($prime_tables);$i++){
    $sql = "select * from `{$prime_tables[$i]}` order by `sort` desc limit 0,10";

    $query = $mysqli->query($sql);

    while($rs = $query->fetch_array(MYSQLI_ASSOC)){
        $url = '';
        $cut_url1 = '';
        $cut_url2 = '';
        preg_match('/bizhizhan.*/',$rs['zjpic'],$url);
        preg_match('/bizhizhan.*/',$rs['cutpic1'],$cut_url1);
        preg_match('/bizhizhan.*/',$rs['cutpic2'],$cut_url2);

        $lrs = array('id'=>$rs['id'],
            'nm'=>$rs['nm'],
            'cls'=>$rs['cls'],
            'sub_cls'=>$rs['c_cls'],
            'sort'=>$rs['sort'],
            'date'=>$rs['date'],
            'zj_pic'=>IMG_PATH.$url[0],
            'cut_pic1'=>IMG_PATH.$cut_url1[0],
            'cut_pic2'=>IMG_PATH.$cut_url2[0],);
        print_r($lrs);

        $_json->insert($prime_custer[$i],$lrs);
    }
}

?>