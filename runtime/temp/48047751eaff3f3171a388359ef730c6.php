<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:71:"D:\Apache24\htdocs\bzz\public/../application/index\view\picture\pc.html";i:1479977841;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>内页</title>
    <link href="__PUBLIC____CSS__/index.css" rel="stylesheet" type="text/css">
    <script src="__PUBLIC____JS__/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="__PUBLIC____JS__/asyncConnect.js"></script>
    <script src="__PUBLIC____JS__/js.js" type="text/javascript"></script>
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
                        <input name="tijiao" type="submit" class="tijiao" id="tijiao" value=""/>
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
                    <li class="nav1-bian"><a href="/index/pc">电脑壁纸</a></li>
                    <li><a href="/index/mobile">手机壁纸</a></li>
                    <li><a href="/index/ipad">iPad壁纸</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="neiye">
        <div class="neiye-img">
            <div class="Code"><a></a></div>

            <div class="neiye-img1">
                <ul>
                    <?php if(is_array($picList) || $picList instanceof \think\Collection): if( count($picList)==0 ) : echo "" ;else: foreach($picList as $i=>$vo): ?>
                    <li pic-id="<?php echo $vo['bzid']; ?>">
                        <?php if(preg_match('/http/',$vo['pic'])): ?>
                        <a href="<?php echo $vo['pic']; ?>" target="_blank">
                        <?php else: ?>
                        <a href="#">
                        <?php endif; ?>
                            <img src="<?php echo $vo['pic']; ?>">
                        </a>
                    </li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>


            </div>
            <div class="Aclick1"></div>    <!--按钮-->
            <div class="Aclick2"></div>
        </div>

        <div class="neiye-size">
            <span style="float:left">壁纸尺寸：</span>
            <div class="menu-size-l">
                <?php if(is_array($sizeList) || $sizeList instanceof \think\Collection): if( count($sizeList)==0 ) : echo "" ;else: foreach($sizeList as $key=>$vo): ?>
                <a href="<?php echo $vo['pic']; ?>" target="_blank"><?php echo str_replace('*','x',$vo['fbl']); ?></a>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </div>
        </div>

        <div class="neiye-img2sm">
            <div class="neiye-img2sm-up1">
                <?php if($pre['id']): ?>
                <a href="<?php echo url('/picture/pc/id/'.$pre['id']); ?>">
                    <div class="ny-up-con">
                        <div class="ny-up-con1">
                            <img src="<?php echo $pre['cutpic1']; ?>">
                        </div>
                    </div>
                    <div class="ny-up-N" id="up-L">上一组</div>
                </a>
                <?php endif; ?>
            </div>
            <a class="ny-up-nn"></a>
            <a class="ny-up-nl"></a>
            <div class="neiye-img2sm-con">
                <ul id="cc">
                    <?php if(is_array($picList) || $picList instanceof \think\Collection): if( count($picList)==0 ) : echo "" ;else: foreach($picList as $i=>$vo): if($i+1==1): ?>
                    <li class="kuang">
                    <?php else: ?>
                    <li>
                    <?php endif; ?>
                        <div class="ny-con-img">
                            <img src="<?php echo $vo['pic']; ?>">
                        </div>
                        <div class="ny-con-N"><?php echo $i+1; ?>/<?php echo $count; ?></div>
                    </li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div>
            <div class="neiye-img2sm-up2">
                <?php if($next['id']): ?>
                <a href="<?php echo url('/picture/pc/id/'.$next['id']); ?>">
                    <div class="ny-up-con">
                        <div class="ny-up-con1">
                            <img src="<?php echo $next['cutpic1']; ?>">
                        </div>
                    </div>
                    <div class="ny-up-N" id="up-N">下一组</div>
                </a>
                <?php endif; ?>
            </div>
        </div>


    </div>
    <div class="main-btop">
        <div class="lol" style="background-position:-6px -2px"></div>
        <span>壁纸精选</span>
    </div>
    <div class="neiye-bottom">
        <?php if(is_array($primeList) || $primeList instanceof \think\Collection): if( count($primeList)==0 ) : echo "" ;else: foreach($primeList as $i=>$vo): if($i<4): ?>
        <div class="leth-newBox-1" style="<?php echo !empty($i+1) && $i+1!=4?'margin-right:40px':''; ?>">
            <a href="<?php echo url('/picture/pc/id/'.$vo['id']); ?>">
                <div class="leth-newBox1">
                    <img src="<?php echo $vo['cutpic1']; ?>">
                </div>
                <div class="leth-newBox2"><?php echo $vo['nm']; ?></div>
            </a>
        </div>
        <?php endif; endforeach; endif; else: echo "" ;endif; ?>
    </div>
    <div class="main-bottom-logo" style="margin-top:10px;">
        <span><a href="javascript:">关于我们</a> | <a href="javascript:">诚聘英才</a> | <a href="javascript:">商务合作</a> | <a href="javascript:">联系我们</a></span>
        <div class="main-b-l1"></div>
        <h5>CopyRight <span class="csp">&copy;</span> 2008-2018 杭州某某某某有限公司 版权所有</h5>
    </div>
</div>
<script type="text/javascript">
    animation.pc();
    function getOnePicSize(b){
        var id = $('.neiye-img1').find('li').eq(b).attr('pic-id');

        $.get("/Api/ajaxrefresh/getonepagesize/client/pc/id/"+id).done(function(msg){
            getOnePageSize(msg).getSizeSuccessFunc()
        })
    }
    getOnePicSize(0)
</script>
</body>
</html>
