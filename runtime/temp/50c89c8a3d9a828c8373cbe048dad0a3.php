<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:73:"D:\Apache24\htdocs\bzz\public/../application/index\view\index\search.html";i:1479975856;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>搜索页</title>
    <link href="__PUBLIC____CSS__/index.css" rel="stylesheet" type="text/css">
    <script src="__PUBLIC____JS__/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="__PUBLIC____JS__/minigrid.js" type="text/javascript"></script>
</head>
<body style="min-width:1000px">
<script>
//
    var URL = "/Api/ajaxrefresh/mousewheelprime/sinput/<?php echo \think\Request::instance()->param('sInput'); ?>/limit/";
</script>
<div class="container"><!--外界边框big-->
    <div class="head">
        <div class="head-too">
            <div class="head-top">
                <div class="logo"></div>
                <div class="searchInput">
                    <form method="get" action="/index/search" target="_blank">
                        <input name="sInput" type="text" placeholder="请输入壁纸名称" class="sInput"/>
                        <input name="tijiao" type="submit" value="" class="tijiao" id="tijiao"/>
                    </form>
                    <span>热门关键词:</span>
                    <?php if(is_array($hotList) || $hotList instanceof \think\Collection): if( count($hotList)==0 ) : echo "" ;else: foreach($hotList as $i=>$vo): ?>
                    <a href="<?php echo url('/index/search/sInput/'.$vo['cont']); ?>" class="<?php echo !empty($i)?'':'sIa'; ?>"><?php echo $vo['cont']; ?></a>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </div>
            </div>
        </div>
        <div class="nav">
            <div class="nav1">
                <ul>
                    <li><a href="/">首页</a></li>
                    <li class="nav1-bian"><a href="/index/prime">精选推荐</a></li>
                    <li><a href="/index/pc">电脑壁纸</a></li>
                    <li><a href="/index/mobile">手机壁纸</a></li>
                    <li><a href="/index/ipad">iPad壁纸</a></li>
                </ul>
            </div>
        </div>
    </div>


    <?php if(empty($has)): ?>
    <div class="prompt">
        <div class="search-box2">对不起，没有找到包含关键词"<span id="search2"><?php echo \think\Request::instance()->param('sInput'); ?></span>"的壁纸。</div>
    </div>
    <?php endif; ?>
    <div class="demo" style="margin-top:0px;">
        <div class="grid">
        </div>
    </div>

    <div class="main-bottom-logo">
        <span><a href="javascript:">关于我们</a> | <a href="javascript:">诚聘英才</a> | <a href="javascript:">商务合作</a> | <a
                href="javascript:">联系我们</a></span>

        <div class="main-b-l1"></div>
        <h5>CopyRight <span class="csp">&copy;</span> 2008-2018 杭州某某某某有限公司 版权所有</h5>
    </div>
    <div class="up"></div>
</div>
<script src="__PUBLIC____JS__/waterpull.js"></script>
</body>
</html>
