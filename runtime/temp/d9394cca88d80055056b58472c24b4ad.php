<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:72:"D:\Apache24\htdocs\bzz\public/../application/index\view\index\index.html";i:1479965267;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>首页</title>
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
                        <input name="tijiao" type="button"  class="tijiao" id="tijiao"/>
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
                    <li class="nav1-bian"><a href="/">首页</a></li>
                    <li><a href="/index/prime" >精选推荐</a></li>
                    <li><a href="/index/pc">电脑壁纸</a></li>
                    <li><a href="/index/mobile">手机壁纸</a></li>
                    <li><a href="/index/ipad">iPad壁纸</a></li>
                </ul>

            </div>
        </div>
        <div class="head-bottom">
            <div class="head-bottom-img">
                <ul>
                    <?php if(is_array($slideList) || $slideList instanceof \think\Collection): if( count($slideList)==0 ) : echo "" ;else: foreach($slideList as $i=>$vo): ?>
                    <li><a href="/picture/pc/id/<?php echo $vo['skipurl']; ?>"><img src="<?php echo $vo['url']; ?>"></a></li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div>
            <div class="smallimg">
                <div class="head-3"></div>
                <ul>
                    <?php if(is_array($slideList) || $slideList instanceof \think\Collection): if( count($slideList)==0 ) : echo "" ;else: foreach($slideList as $i=>$vo): ?>
                    <li style="<?php echo !empty($i+1) && $i+1<=9?'margin-right:9px':''; ?>"><a href="/picture/pc/id/<?php echo $vo['skipurl']; ?>"><img src="<?php echo $vo['url']; ?>"></a></li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div>

        </div><!--幻灯片区域-->


    </div>


    <div class="wrap"><!--外界边框-->

        <div class="menu"><!--分类部分-->
            <div class="menu-top">
                <div class="lo"style="background-position:-5px -335px; margin-top:5px;"></div>
                <span id="top" class="menu-t">您当前的屏幕分辨率是：<span id="Id">6546464</span></span>
                <span id="bottom" class="menu-b">我们为您准备了<span id="cc"><?php echo $count; ?></span>套壁纸供您挑选~</span>
            </div>
            <div class="menu-size"style="border-bottom:1px solid #e5e5e5;height:60px">
                <span>壁纸尺寸：</span>
                <div class="menu-size-l">
                    <a href="/index/pc">全部</a>
                    <?php if(is_array($sizeList) || $sizeList instanceof \think\Collection): if( count($sizeList)==0 ) : echo "" ;else: foreach($sizeList as $key=>$vo): ?>
                    <a href="<?php echo url('/index/pc/fbl/'.$vo['width'].'x'.$vo['height']); ?>"><?php echo $vo['width']; ?>x<?php echo $vo['height']; ?></a>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </div>
            </div>
            <div class="menu-classify">

                <span>壁纸分类：</span>
                <div class="menu-classify-l">
                    <a href="<?php echo url('pc'); ?>">全部</a>
                    <?php if(is_array($clsList) || $clsList instanceof \think\Collection): if( count($clsList)==0 ) : echo "" ;else: foreach($clsList as $i=>$vo): ?>
                    <a href="javascript:asyncOpreate.getSubclass(<?php echo $vo['id']; ?>,'index')"><?php echo $vo['clsnm']; ?></a>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </div>
            </div>
            <div class="menu-sub" style="display: none">
                <span>壁纸分类：</span>
                <div class="menu-sub-l">

                </div>
                <span class="menu-sub-r"><span id="casd">收起</span><div class="menu-sub-rimg"></div></span>
            </div>

            <div class="menu-color">
                <span>壁纸色系：</span>
                <div class="menu-color-l">
                    <div class="Bbox">
                        <a href="/index/pc">全部</a>
                    </div>
                    <?php if(is_array($colorList) || $colorList instanceof \think\Collection): if( count($colorList)==0 ) : echo "" ;else: foreach($colorList as $i=>$vo): ?>
                    <div class="Bbox">
                        <div class="Bbox-1" style="background-color: <?php echo $vo['example']; ?>"></div>
                        <a href="<?php echo url('/index/pc/color/'.$vo['color']); ?>"><?php echo $vo['color']; ?></a>
                    </div>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </div>
            </div>
        </div>

        <div class="main">
            <div class="main-left">
                <div class="left-new">
                    <div class="lo" style=" background-position:-4px 4px;"></div>
                    <span>最新壁纸</span>
                    <a href="<?php echo url('/index/pc'); ?>">更多</a>
                </div>
                <div class="left-newCont">
                    <?php if(is_array($recentList) || $recentList instanceof \think\Collection): if( count($recentList)==0 ) : echo "" ;else: foreach($recentList as $i=>$vo): if($i<6): ?>
                    <div class=<?php echo !empty($i%3) && $i%3!=0?'leth-newBox':'leth-newBox-1'; ?>>
                        <a href="<?php echo url('/picture/pc/id/'.$vo['id']); ?>">
                            <div class="leth-newBox1">
                                <img src="<?php echo $vo['cutpic1']; ?>">
                            </div>
                            <div class="leth-newBox2"><?php echo $vo['nm']; ?></div>
                        </a>
                    </div>
                    <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                </div>
                <div class="left-new">
                    <div class="lo" style="background-position:-4px -110px;"></div>
                    <span>电脑壁纸</span>
                    <a href="<?php echo url('/index/pc'); ?>">更多</a>
                </div>
                <div class="left-newCont"><!--电脑壁纸一栏-->
                    <?php if(is_array($pcList) || $pcList instanceof \think\Collection): if( count($pcList)==0 ) : echo "" ;else: foreach($pcList as $i=>$vo): if($i<6): ?>
                    <div class=<?php echo !empty($i%3) && $i%3!=0?'leth-newBox':'leth-newBox-1'; ?>>
                        <a href="<?php echo url('/picture/pc/id/'.$vo['id']); ?>">
                            <div class="leth-newBox1">
                                <img src="<?php echo $vo['cutpic1']; ?>">
                            </div>
                            <div class="leth-newBox2"><?php echo $vo['nm']; ?></div>
                        </a>
                    </div>
                    <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                </div>

                <div class="left-new">
                    <div class="lo"style="background-position:-5px -260px;"></div>
                    <span>手机壁纸</span>
                    <a href="<?php echo url('/index/mobile'); ?>">更多</a>
                </div>
                <div class="cell">
                    <?php if(is_array($mobileList) || $mobileList instanceof \think\Collection): if( count($mobileList)==0 ) : echo "" ;else: foreach($mobileList as $i=>$vo): if($i<3): ?>
                    <div class=<?php echo !empty($i%3) && $i%3!=0?'cell-box':'cell-box-1'; ?>>
                        <a href="<?php echo url('/picture/mobile/id/'.$vo['id']); ?>">
                            <div class="cell-box1">
                                <img src="<?php echo $vo['cutpic1']; ?>">
                            </div>
                            <div class="leth-newBox2"><?php echo $vo['nm']; ?></div>
                        </a>
                    </div>
                    <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                </div>

                <div class="left-new">
                    <div class="lo" style="background-position:-4px -180px;"></div>
                    <span>iPad壁纸</span>
                    <a href="<?php echo url('/index/ipad'); ?>">更多</a>
                </div>
                <div class="ipad"><!--ipad一栏-->
                    <?php if(is_array($ipList) || $ipList instanceof \think\Collection): if( count($ipList)==0 ) : echo "" ;else: foreach($ipList as $i=>$vo): if($i<6): ?>
                    <div class="<?php echo !empty($i%3) && $i%3!=0?'ipad-box':'ipad-box-1'; ?>">
                        <a href="<?php echo url('/picture/ipad/id/'.$vo['id']); ?>">
                            <div class="ipad-box1">
                                <img src="<?php echo $vo['cutpic1']; ?>">
                            </div>
                            <div class="leth-newBox2"><?php echo $vo['nm']; ?></div>
                        </a>
                    </div>
                    <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                </div>



            </div>
            <div class="main-right">						<!--下载排行-->
                <div class="right-top">
                    <a href="#"><div class="lo" style=" background-position:-4px -52px;"></div></a>
                    <span>下载排行</span>
                </div>
                <div class="Rbox">
                    <ul>
                        <?php if(is_array($pcList) || $pcList instanceof \think\Collection): if( count($pcList)==0 ) : echo "" ;else: foreach($pcList as $i=>$vo): ?>
                        <li>
                            <a href="<?php echo url('/picture/pc/id/'.$vo['id']); ?>">
                                <div class="<?php echo !empty($i+1) && $i+1<=3?'biaoqian2':'biaoqian'; ?>" style="background-color:<?php echo !empty($i+1) && $i+1==1?'#e60012':($i+1==2?'#f39800':($i+1==3?'#8fc31f':'')); ?>"><?php echo $i+1; ?></div>
                                <span class="R1"><?php echo $vo['nm']; ?></span><span class="R2"><?php echo $vo['sort']; ?></span>
                                <ul>
                                    <li><img style="width:176px;height:104px;" src="<?php echo $vo['cutpic2']; ?>"></li>
                                </ul>
                            </a>
                        </li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                </div>							<!--下载结束行-->


                <div class="right-top" style="margin-top:20px;">     <!--电脑壁纸排行-->
                    <a href="#"><div class="lo" style=" background-position:-4px -52px;"></div></a>
                    <span>电脑壁纸排行</span>
                </div>
                <div class="Rbox">
                    <ul>
                        <?php if(is_array($pcList) || $pcList instanceof \think\Collection): if( count($pcList)==0 ) : echo "" ;else: foreach($pcList as $i=>$vo): ?>
                        <li>
                            <a href="<?php echo url('/picture/pc/id/'.$vo['id']); ?>">
                                <div class="<?php echo !empty($i+1) && $i+1<=3?'biaoqian2':'biaoqian'; ?>" style="background-color:<?php echo !empty($i+1) && $i+1==1?'#e60012':($i+1==2?'#f39800':($i+1==3?'#8fc31f':'')); ?>"><?php echo $i+1; ?></div>
                                <span class="R1"><?php echo $vo['nm']; ?></span><span class="R2"><?php echo $vo['sort']; ?></span>
                                <ul>
                                    <li><img style="width:176px;height:104px;" src="<?php echo $vo['cutpic2']; ?>"></li>
                                </ul>
                            </a>
                        </li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                </div>						<!--电脑壁纸结束行-->

                <div class="right-top" style="margin-top:20px;">        <!--手机壁纸排行-->
                    <a href="#"><div class="lo" style=" background-position:-4px -52px;"></div></a>
                    <span>手机壁纸排行</span>
                </div>
                <div class="Rbox2-cell">
                    <ul>
                        <?php if(is_array($mobileList) || $mobileList instanceof \think\Collection): if( count($mobileList)==0 ) : echo "" ;else: foreach($mobileList as $i=>$vo): ?>
                        <li>
                            <a href="<?php echo url('/picture/mobile/id/'.$vo['id']); ?>">
                                <div class="<?php echo !empty($i+1) && $i+1<=3?'biaoqian2':'biaoqian'; ?>" style="background-color:<?php echo !empty($i+1) && $i+1==1?'#e60012':($i+1==2?'#f39800':($i+1==3?'#8fc31f':'')); ?>"><?php echo $i+1; ?></div>
                                <span class="R1"><?php echo $vo['nm']; ?></span><span class="R2"><?php echo $vo['sort']; ?></span>
                                <ul>
                                    <li><img style="width:60px;height:108px;" src="<?php echo $vo['cutpic2']; ?>"></li>
                                </ul>
                            </a>
                        </li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                </div><!--手机壁纸结束行-->

                <div class="right-top" style="margin-top:20px;">        <!--iPad壁纸排行-->
                    <a href="#"><div class="lo" style=" background-position:-4px -52px;"></div></a>
                    <span>iPad壁纸排行</span>
                </div>
                <div class="Rbox3-ipad">
                    <ul>
                        <?php if(is_array($ipList) || $ipList instanceof \think\Collection): if( count($ipList)==0 ) : echo "" ;else: foreach($ipList as $i=>$vo): ?>
                        <li>
                            <a href="<?php echo url('/picture/ipad/id/'.$vo['id']); ?>">
                                <div class="<?php echo !empty($i+1) && $i+1<=3?'biaoqian2':'biaoqian'; ?>" style="background-color:<?php echo !empty($i+1) && $i+1==1?'#e60012':($i+1==2?'#f39800':($i+1==3?'#8fc31f':'')); ?>"><?php echo $i+1; ?></div>
                                <span class="R1"><?php echo $vo['nm']; ?></span><span class="R2"><?php echo $vo['sort']; ?></span>
                                <ul>
                                    <li><img style="width:140px;height:108px;" src="<?php echo $vo['cutpic2']; ?>"></li>
                                </ul>
                            </a>
                        </li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                </div><!--iPad壁纸结束行-->
            </div>
        </div>


    </div><!--外界边框-->
    <div class="main-bottom"><!--最后-->
        <div class="main-btop">
            <div class="lo" style="background-position:0px -410px;"></div>
            <span>友情链接</span>
        </div>
        <div class="main-bottombox">
            <a href="javascript:">彼岸壁纸</a><a href="javascript:">桌面天空</a><a href="javascript:">字体下载</a><a href="javascript:">桌面壁纸</a><a href="javascript:">户外美女</a><a href="javascript:">简笔画图片</a><a href="javascript:">电脑桌面壁纸</a><a href="javascript:">高清桌面壁纸</a><a href="javascript:">唯美图片</a><a href="javascript:">好桌道桌面主题</a><a href="javascript:">手机壁纸大全</a><a href="javascript:">图片大全</a><a href="javascript:">视线图片素材</a><a href="javascript:">装修效果图</a><a href="javascript:">明星图库</a><a href="javascript:">搞笑图片</a><a href="javascript:">安卓壁纸</a><a href="javascript:">美女图片</a><a href="javascript:">PPT模板</a><a href="javascript:">婚纱摄影图库</a><a href="javascript:">天堂图片网</a><a href="javascript:">日本漫画</a><a href="javascript:">6188桌面</a><a href="javascript:">美女图片</a><a href="javascript:">素材公社</a><a href="javascript:">电脑桌面壁纸</a><a href="javascript:">桌面壁纸</a><a href="javascript:">3d模型下载</a><a href="javascript:">桌面主题</a><a href="javascript:">微利图片</a><a href="javascript:">电脑桌面壁纸</a><a href="javascript:">爱美网图库</a><a href="javascript:">xp主体下载</a><a href="javascript:"></a><a href="javascript:"></a>
        </div>

        <div class="main-bottom-logo">
            <span><a href="javascript:">关于我们</a> | <a href="javascript:">诚聘英才</a> | <a href="javascript:">商务合作</a> | <a href="javascript:">联系我们</a></span>
            <div class="main-b-l1"></div>
            <h5>CopyRight <span class="csp">&copy;</span> 2008-2018 杭州某某某某有限公司 版权所有</h5>
        </div>

    </div>
    <div class="up"></div>
</div><!--外界边框big-->
</body>
</html>
