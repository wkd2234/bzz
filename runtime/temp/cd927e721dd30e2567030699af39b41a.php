<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:71:"D:\Apache24\htdocs\bzz\public/../application/index\view\index\ipad.html";i:1479967229;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>ipad首页</title>
    <link href="__PUBLIC____CSS__/index.css" rel="stylesheet" type="text/css">
    <script src="__PUBLIC____JS__/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="__PUBLIC____JS__/js.js" type="text/javascript"></script>
    <script src="__PUBLIC____JS__/asyncConnect.js"></script>
    <style type="text/css">
        .ipad-box-1,
        .ipad-box{
            width:208px;
            height:250px;
            padding: 6px
        }
        .ipad-box1,
        .ipad-box1>img{
            width:208px;
            height:208px;
        }
    </style>
</head>

<body>
<div class="container"><!--外界边框big-->
    <div class="head">
        <div class="head-too">
            <div class="head-top">
                <div class="logo"></div>
                <div class="searchInput">
                    <form method="get" action="/index/search" target="_blank">
                        <input name="sInput" type="text" placeholder="请输入壁纸名称" class="sInput"/>
                        <input name="tijiao" type="button" class="tijiao" id="tijiao"/>
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
                    <li><a href="/index/prime">精选推荐</a></li>
                    <li><a href="/index/pc">电脑壁纸</a></li>
                    <li><a href="/index/mobile">手机壁纸</a></li>
                    <li class="nav1-bian"><a href="/index/ipad">iPad壁纸</a></li>
                </ul>
            </div>
        </div>
        <div class="main-btop" style="margin-top:20px;">
            <div class="lo" style="background-position:-4px -180px;"></div>
            <span>iPad壁纸</span>
        </div>
        <div class="head-bottom">
            <div class="head-bottom-img">
                <ul>
                    <?php if(is_array($slideList) || $slideList instanceof \think\Collection): if( count($slideList)==0 ) : echo "" ;else: foreach($slideList as $i=>$vo): ?>
                    <li><a href="/picture/ipad/id/<?php echo $vo['skipurl']; ?>"><img src="<?php echo $vo['url']; ?>"></a></li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div>
            <div class="smallimg">
                <div class="head-3"></div>
                <ul>
                    <?php if(is_array($slideList) || $slideList instanceof \think\Collection): if( count($slideList)==0 ) : echo "" ;else: foreach($slideList as $i=>$vo): ?>
                    <li style="<?php echo !empty($i+1) && $i+1<=9?'margin-right:9px':''; ?>"><a href="/picture/ipad/id/<?php echo $vo['skipurl']; ?>"><img src="<?php echo $vo['url']; ?>"></a></li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div>

        </div><!--幻灯片区域-->


    </div>


    <div class="wrap" style="margin-top:0px;"><!--外界边框-->

        <div class="menu"><!--分类部分-->
            <div class="menu-size" style="border-bottom:1px solid #e5e5e5;">
                <span>壁纸尺寸：</span>

                <div class="menu-size-l">
                    <?php if(empty(\think\Request::instance()->param('fbl'))): ?>
                    <a href="/index/ipad" class="current">全部</a>
                    <?php else: ?>
                    <a href="/index/ipad">全部</a>
                    <?php endif; if(is_array($sizeList) || $sizeList instanceof \think\Collection): if( count($sizeList)==0 ) : echo "" ;else: foreach($sizeList as $key=>$vo): ?>
                    <a href="javascript:asyncOpreate.refresh('fbl','<?php echo $vo['width']; ?>x<?php echo $vo['height']; ?>','sort','ipad')"
                       class="<?php echo !empty($vo['width'].'x'.$vo['height']) && $vo['width'].'x'.$vo['height']==\think\Request::instance()->param('fbl')?'current':''; ?>"><?php echo $vo['width']; ?>x<?php echo $vo['height']; ?></a>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </div>
            </div>
            <div class="menu-classify">

                <span>壁纸分类：</span>

                <div class="menu-classify-l">
                    <?php if(empty(\think\Request::instance()->param('class'))): ?>
                    <a href="/index/ipad" class="current">全部</a>
                    <?php else: ?>
                    <a href="/index/ipad">全部</a>
                    <?php endif; if(is_array($clsList) || $clsList instanceof \think\Collection): if( count($clsList)==0 ) : echo "" ;else: foreach($clsList as $i=>$vo): ?>
                    <a href="javascript:asyncOpreate.getSubclass(<?php echo $vo['id']; ?>,'ipad')"
                       class="<?php echo !empty($vo['id']) && $vo['id']==\think\Request::instance()->param('class') || $vo['clsnm'] == \think\Request::instance()->param('class')?'current':''; ?>"><?php echo $vo['clsnm']; ?></a>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </div>
            </div>

            <?php if(empty($subClsList)): ?>
            <div class="menu-sub" style="display: none">
                <?php else: ?>
                <div class="menu-sub">
                    <?php endif; ?>
                    <span>壁纸分类：</span>

                    <div class="menu-sub-l">
                        <a href="javascript:asyncOpreate.refresh('class','all')">全部</a>
                        <?php if(is_array($subClsList) || $subClsList instanceof \think\Collection): if( count($subClsList)==0 ) : echo "" ;else: foreach($subClsList as $i=>$vo): ?>
                        <a href="javascript:asyncOpreate.refresh('class','<?php echo $vo['c_clsnm']; ?>','sort','ipad')"
                           class="<?php echo !empty($vo['id']) && $vo['id']==\think\Request::instance()->param('subclass') || $vo['c_clsnm'] == \think\Request::instance()->param('subclass')?'current':''; ?>"><?php echo $vo['c_clsnm']; ?></a>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </div>
                    <span class="menu-sub-r"><span id="casd">收起</span><div class="menu-sub-rimg"></div></span>
                </div>

                <div class="menu-color" style="border-bottom:1px solid #e5e5e5;">
                    <span>壁纸色系：</span>

                    <div class="menu-color-l">
                        <div class="Bbox">
                            <a href="javascript:asyncOpreate.refresh('color','all','sort','ipad')">全部</a>
                        </div>
                        <?php if(is_array($colorList) || $colorList instanceof \think\Collection): if( count($colorList)==0 ) : echo "" ;else: foreach($colorList as $i=>$vo): ?>
                        <div class="Bbox">
                            <div class="Bbox-1" style="background-color: <?php echo $vo['example']; ?>"></div>
                            <a href="javascript:asyncOpreate.refresh('color','<?php echo $vo['color']; ?>','sort','ipad')"><?php echo $vo['color']; ?></a>
                        </div>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </div>
                </div>
                <div class="menu-size" style="position:relative;">
                    <span class="paixu">排序</span>
                    <span class="paixui">:</span>

                    <div class="menu-size-l" style="position:absolute; left:70px;">
                        <a href="javascript:asyncOpreate.refresh('sort','date',null,'ipad')" class="<?php echo \think\Request::instance()->param('sort')=='date'?'current':''; ?>">最近更新</a>
                        <a href="javascript:asyncOpreate.refresh('sort','sort',null,'ipad')" class="<?php echo \think\Request::instance()->param('sort')!='date'?'current':''; ?>">最多下载</a>
                    </div>
                </div>
            </div><!--上标题-->

            <div class="ipad-main-con">
                <div class="cell-main1-left">
                    <div class="IPad">
                        <?php if(is_array($iPadList) || $iPadList instanceof \think\Collection): if( count($iPadList)==0 ) : echo "" ;else: foreach($iPadList as $i=>$vo): ?>
                        <div class="<?php echo !empty($i%3) && $i%3!=0?'ipad-box':'ipad-box-1'; ?>">
                            <a href="<?php echo url('/picture/ipad/id/'.$vo['id']); ?>">
                                <div class="ipad-box1">
                                    <img src="<?php echo $vo['cutpic1']; ?>">
                                </div>
                                <div class="leth-newBox2"><?php echo $vo['nm']; ?></div>
                            </a>
                        </div>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </div>
                    <div style="clear: both"></div>

                    <div class="pagination pagination-centered">
                        <?php echo $iPadList->render(); ?>
                    </div>
                    <!--页码-->
                </div>

                <div class="cell-main1-right">
                    <div class="right-top">
                        <a href="http://taobao.com/">
                            <div class="lo" style=" background-position:-4px -52px;"></div>
                        </a>
                        <span>下载排行</span>
                    </div>
                    <div class="left-and">             <!--壁纸开始-->
                        <ul>
                            <?php if(is_array($iPadList) || $iPadList instanceof \think\Collection): if( count($iPadList)==0 ) : echo "" ;else: foreach($iPadList as $i=>$vo): ?>
                            <li>
                                <a href="<?php echo url('/picture/ipad/id/'.$vo['id']); ?>">
                                    <div class="<?php echo !empty($i+1) && $i+1<=3?'biaoqian2':'biaoqian'; ?>"
                                         style="background-color:<?php echo !empty($i+1) && $i+1==1?'#e60012':($i+1==2?'#f39800':($i+1==3?'#8fc31f':'')); ?>">
                                        <?php echo $i+1; ?>
                                    </div>
                                    <span class="R1"><?php echo $vo['nm']; ?></span><span class="R2"><?php echo $vo['sort']; ?></span>
                                    <ul>
                                        <li><img style="width:140px;height:104px;" src="<?php echo $vo['cutpic2']; ?>"></li>
                                    </ul>
                                </a>
                            </li>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                        </ul>
                    </div>
                </div>


            </div><!--ipad-main-con-->
            <div class="main-bottom-logo" style="margin-top:20px;">
                <span><a href="javascript:">关于我们</a> | <a href="javascript:">诚聘英才</a> | <a href="javascript:">商务合作</a> | <a
                        href="javascript:">联系我们</a></span>

                <div class="main-b-l1"></div>
                <h5>CopyRight <span class="csp">&copy;</span> 2008-2018 杭州某某某某有限公司 版权所有</h5>
            </div>

            <div class="up"></div>


        </div><!--wrap-->
    </div>
</div>
</body>
</html>
