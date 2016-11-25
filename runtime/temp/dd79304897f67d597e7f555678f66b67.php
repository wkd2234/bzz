<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:73:"D:\Apache24\htdocs\bzz\public/../application/index\view\index\mobile.html";i:1479977345;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>手机二级首页</title>
    <link href="__PUBLIC____CSS__/index.css" rel="stylesheet" type="text/css">
    <script src="__PUBLIC____JS__/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="__PUBLIC____JS__/js.js" type="text/javascript"></script>
    <script src="__PUBLIC____JS__/asyncConnect.js"></script>
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
                    <li><a href="/">首页</a></li>
                    <li><a href="/index/prime" >精选推荐</a></li>
                    <li><a href="/index/pc">电脑壁纸</a></li>
                    <li class="nav1-bian"><a href="/index/mobile">手机壁纸</a></li>
                    <li><a href="/index/ipad">iPad壁纸</a></li>
                </ul>
            </div>
        </div>
        <div class="head-bottom-cell">
            <div class="main-btop">
                <div class="lo" style="background-position:-2px -260px"></div>
                <span>手机壁纸</span>
            </div>

            <div class="cell-img">
                <ul>
                    <?php if(is_array($slideList) || $slideList instanceof \think\Collection): if( count($slideList)==0 ) : echo "" ;else: foreach($slideList as $i=>$vo): ?>
                    <li>
                        <a href="/picture/mobile/id/<?php echo $vo['skipurl']; ?>">
                            <div class="cell-img1">
                                <img src="<?php echo $vo['url']; ?>">
                                <div class="cell-img3"><?php echo $vo['nm']; ?></div>
                            </div>
                        </a>
                    </li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div>


        </div><!--幻灯片区域-->
        <div class="cell-img-biaoqian">
            <ul>
                <li style="margin-left:28px; background:#eb6877"></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    </div>


    <div class="wrap" style="margin-top:10px;"><!--外界边框-->

        <div class="menu"><!--分类部分-->
            <div class="menu-size" style="border-bottom:1px solid #e5e5e5;">

                <span>壁纸尺寸：</span>
                <div class="menu-size-l">
                    <a href="/index/mobilelist">全部</a>
                    <?php if(is_array($sizeList) || $sizeList instanceof \think\Collection): if( count($sizeList)==0 ) : echo "" ;else: foreach($sizeList as $key=>$vo): ?>
                    <a href="<?php echo url('/index/mobilelist/fbl/'.$vo['width'].'x'.$vo['height']); ?>"><?php echo $vo['width']; ?>x<?php echo $vo['height']; ?></a>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </div>
            </div>
            <div class="menu-classify">

                <span>壁纸分类：</span>
                <div class="menu-classify-l">
                    <a href="/index/mobilelist">全部</a>
                    <?php if(is_array($clsList) || $clsList instanceof \think\Collection): if( count($clsList)==0 ) : echo "" ;else: foreach($clsList as $key=>$vo): ?>
                    <a href="javascript:asyncOpreate.getSubclass(<?php echo $vo['id']; ?>,'mobile')"><?php echo $vo['clsnm']; ?></a>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </div>
            </div>
            <div class="menu-sub" style="display: none">
                <span>壁纸分类：</span>
                <div class="menu-sub-l">
                </div>
                <span class="menu-sub-r"><span id="casd">收起</span><div class="menu-sub-rimg"></div></span>
            </div>

            <div class="menu-color" style="border-bottom:1px solid #e5e5e5;">
                <span>壁纸色系：</span>
                <div class="menu-color-l">
                    <div class="Bbox">
                        <a href="javascript:">全部</a>
                    </div>
                    <?php if(is_array($colorList) || $colorList instanceof \think\Collection): if( count($colorList)==0 ) : echo "" ;else: foreach($colorList as $key=>$vo): ?>
                    <div class="Bbox">
                        <div class="Bbox-1" style="background-color: <?php echo $vo['example']; ?>"></div>
                        <a href="<?php echo url('/index/mobilelist/color/'.$vo['color']); ?>"><?php echo $vo['color']; ?></a>
                    </div>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </div>
            </div>
            <div class="menu-size" style="position:relative;">
                <span class="paixu">排序</span>
                <span class="paixui">:</span>
                <div class="menu-size-l" style="position:absolute; left:70px;">
                    <a href="/index/mobilelist/sort/date">最近更新</a>
                    <a href="/index/mobilelist/sort/sort">最多下载</a>
                </div>
            </div>
        </div><!--上标题-->
    </div>
    <div class="cell-main1">
        <div class="cell-main1-left">
            <div class="left-new">
                <div class="lo" style=" background-position:-5px -260px;">
                </div>
                <span>最新手机壁纸</span>
                <a href="/index/mobilelist/sort/date">更多</a>
            </div>
            <div class="cell-left-con">
                <?php if(is_array($recentList) || $recentList instanceof \think\Collection): if( count($recentList)==0 ) : echo "" ;else: foreach($recentList as $i=>$vo): if($i+1<4): ?>
                <div class="<?php echo !empty($i%3) && $i%3!=0?'cell-box':'cell-box-1'; ?>">
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
                <div class="lo" style=" background-position:-5px -260px;">
                </div>
                <span>风景手机壁纸</span>
                <a href="/index/mobilelist/class/风景">更多</a>
            </div>
            <div class="cell-left-con">
                <?php if(is_array($sightList) || $sightList instanceof \think\Collection): if( count($sightList)==0 ) : echo "" ;else: foreach($sightList as $i=>$vo): if($i+1<4): ?>
                <div class="<?php echo !empty($i%3) && $i%3!=0?'cell-box':'cell-box-1'; ?>">
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
                <div class="lo" style=" background-position:-5px -260px;">
                </div>
                <span>创意手机壁纸</span>
                <a href="/index/mobilelist/class/创意">更多</a>
            </div>
            <div class="cell-left-con">
                <?php if(is_array($creativeList) || $creativeList instanceof \think\Collection): if( count($creativeList)==0 ) : echo "" ;else: foreach($creativeList as $i=>$vo): if($i+1<4): ?>
                <div class="<?php echo !empty($i%3) && $i%3!=0?'cell-box':'cell-box-1'; ?>">
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
                <div class="lo" style=" background-position:-5px -260px;">
                </div>
                <span>可爱手机壁纸壁纸</span>
                <a href="/index/mobilelist/class/可爱">更多</a>
            </div>
            <div class="cell-left-con">
                <?php if(is_array($cuteList) || $cuteList instanceof \think\Collection): if( count($cuteList)==0 ) : echo "" ;else: foreach($cuteList as $i=>$vo): if($i+1<4): ?>
                <div class="<?php echo !empty($i%3) && $i%3!=0?'cell-box':'cell-box-1'; ?>">
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
                <div class="lo" style=" background-position:-4px 4px;">
                </div>
                <span>动漫手机壁纸</span>
                <a href="/index/mobilelist/class/动漫">更多</a>
            </div>
            <div class="cell-left-con" style="margin-bottom:0px;">
                <?php if(is_array($cartoonList) || $cartoonList instanceof \think\Collection): if( count($cartoonList)==0 ) : echo "" ;else: foreach($cartoonList as $i=>$vo): if($i+1<4): ?>
                <div class="<?php echo !empty($i%3) && $i%3!=0?'cell-box':'cell-box-1'; ?>">
                    <a href="<?php echo url('/picture/mobile/id/'.$vo['id']); ?>">
                        <div class="cell-box1">
                            <img src="<?php echo $vo['cutpic1']; ?>">
                        </div>
                        <div class="leth-newBox2"><?php echo $vo['nm']; ?></div>
                    </a>
                </div>
                <?php endif; endforeach; endif; else: echo "" ;endif; ?>
            </div>
        </div>
        <div class="cell-main1-right">
            <div class="right-top" >        <!--手机壁纸排行-->
                <a href="http://taobao.com/"><div class="lo" style=" background-position:-4px -52px;"></div></a>
                <span>手机壁纸排行</span>
            </div>
            <div class="Rbox2-cell">
                <ul>
                    <?php if(is_array($recentList) || $recentList instanceof \think\Collection): if( count($recentList)==0 ) : echo "" ;else: foreach($recentList as $i=>$vo): ?>
                    <li>
                        <a href="<?php echo url('/picture/mobile/id/'.$vo['id']); ?>">
                            <div class="<?php echo !empty($i+1) && $i+1<=3?'biaoqian2':'biaoqian'; ?>" style="background-color:<?php echo !empty($i+1) && $i+1==1?'#e60012':($i+1==2?'#f39800':($i+1==3?'#8fc31f':'')); ?>"><?php echo $i+1; ?></div>
                            <span class="R1"><?php echo $vo['nm']; ?></span><span class="R2"><?php echo $vo['sort']; ?></span>
                            <ul>
                                <li><img style="width:60px;height:104px;" src="<?php echo $vo['cutpic2']; ?>"></li>
                            </ul>
                        </a>
                    </li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div><!--手机壁纸结束行-->

            <div class="right-top" style="margin-top:20px;">        <!--风景手机壁纸排行-->
                <a href="http://taobao.com/"><div class="lo" style=" background-position:-4px -52px;"></div></a>
                <span>风景手机壁纸排行</span>
            </div>
            <div class="Rbox2-cell">
                <ul>
                    <?php if(is_array($sightList) || $sightList instanceof \think\Collection): if( count($sightList)==0 ) : echo "" ;else: foreach($sightList as $i=>$vo): ?>
                    <li>
                        <a href="<?php echo url('/picture/mobile/id/'.$vo['id']); ?>">
                            <div class="<?php echo !empty($i+1) && $i+1<=3?'biaoqian2':'biaoqian'; ?>" style="background-color:<?php echo !empty($i+1) && $i+1==1?'#e60012':($i+1==2?'#f39800':($i+1==3?'#8fc31f':'')); ?>"><?php echo $i+1; ?></div>
                            <span class="R1"><?php echo $vo['nm']; ?></span><span class="R2"><?php echo $vo['sort']; ?></span>
                            <ul>
                                <li><img style="width:60px;height:104px;" src="<?php echo $vo['cutpic2']; ?>"></li>
                            </ul>
                        </a>
                    </li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div><!--风景手机壁纸结束行-->

            <div class="right-top"style="margin-top:20px;">        <!--创意手机壁纸排行-->
                <a href="http://taobao.com/"><div class="lo" style=" background-position:-4px -52px;"></div></a>
                <span>创意手机壁纸排行</span>
            </div>
            <div class="Rbox2-cell">
                <ul>
                    <?php if(is_array($creativeList) || $creativeList instanceof \think\Collection): if( count($creativeList)==0 ) : echo "" ;else: foreach($creativeList as $i=>$vo): ?>
                    <li>
                        <a href="<?php echo url('/picture/mobile/id/'.$vo['id']); ?>">
                            <div class="<?php echo !empty($i+1) && $i+1<=3?'biaoqian2':'biaoqian'; ?>" style="background-color:<?php echo !empty($i+1) && $i+1==1?'#e60012':($i+1==2?'#f39800':($i+1==3?'#8fc31f':'')); ?>"><?php echo $i+1; ?></div>
                            <span class="R1"><?php echo $vo['nm']; ?></span><span class="R2"><?php echo $vo['sort']; ?></span>
                            <ul>
                                <li><img style="width:60px;height:104px;" src="<?php echo $vo['cutpic2']; ?>"></li>
                            </ul>
                        </a>
                    </li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div><!--创意壁纸结束行-->

            <div class="right-top" style="margin-top:20px;">        <!--可爱手机壁纸排行-->
                <a href="http://taobao.com/"><div class="lo" style=" background-position:-4px -52px;"></div></a>
                <span>可爱手机壁纸排行</span>
            </div>
            <div class="Rbox2-cell">
                <ul>
                    <?php if(is_array($cuteList) || $cuteList instanceof \think\Collection): if( count($cuteList)==0 ) : echo "" ;else: foreach($cuteList as $i=>$vo): ?>
                    <li>
                        <a href="<?php echo url('/picture/mobile/id/'.$vo['id']); ?>">
                            <div class="<?php echo !empty($i+1) && $i+1<=3?'biaoqian2':'biaoqian'; ?>" style="background-color:<?php echo !empty($i+1) && $i+1==1?'#e60012':($i+1==2?'#f39800':($i+1==3?'#8fc31f':'')); ?>"><?php echo $i+1; ?></div>
                            <span class="R1"><?php echo $vo['nm']; ?></span><span class="R2"><?php echo $vo['sort']; ?></span>
                            <ul>
                                <li><img style="width:60px;height:104px;" src="<?php echo $vo['cutpic2']; ?>"></li>
                            </ul>
                        </a>
                    </li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div><!--可爱手机壁纸结束行-->

            <div class="right-top" style="margin-top:20px;">        <!--动漫手机壁纸排行-->
                <a href="http://taobao.com/"><div class="lo" style=" background-position:-4px -52px;"></div></a>
                <span>动漫手机壁纸排行</span>
            </div>
            <div class="Rbox2-cell">
                <ul>
                    <?php if(is_array($cartoonList) || $cartoonList instanceof \think\Collection): if( count($cartoonList)==0 ) : echo "" ;else: foreach($cartoonList as $i=>$vo): ?>
                    <li>
                        <a href="<?php echo url('/picture/mobile/id/'.$vo['id']); ?>">
                            <div class="<?php echo !empty($i+1) && $i+1<=3?'biaoqian2':'biaoqian'; ?>" style="background-color:<?php echo !empty($i+1) && $i+1==1?'#e60012':($i+1==2?'#f39800':($i+1==3?'#8fc31f':'')); ?>"><?php echo $i+1; ?></div>
                            <span class="R1"><?php echo $vo['nm']; ?></span><span class="R2"><?php echo $vo['sort']; ?></span>
                            <ul>
                                <li><img style="width:60px;height:104px;" src="<?php echo $vo['cutpic2']; ?>"></li>
                            </ul>
                        </a>
                    </li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div><!--动漫手机壁纸结束行-->
        </div>
    </div>
    <div class="main-bottom-logo">
        <span><a href="javascript:">关于我们</a> | <a href="javascript:">诚聘英才</a> | <a href="javascript:">商务合作</a> | <a href="javascript:">联系我们</a></span>
        <div class="main-b-l1"></div>
        <h5>CopyRight <span class="csp">&copy;</span> 2008-2018 杭州某某某某有限公司 版权所有</h5>
    </div>
    <div class="up"></div>

</div>

</div>
</body>
</html>
