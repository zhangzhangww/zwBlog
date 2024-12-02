<template>
    <div class="top-bar">
        <!-- 手机端显示 -->
        <div class="container clearnav secnav">
            <nav class="navbar navbar-inverse navbar-static-top">
                <div class="container">
                    <!-- 手机端菜单 -->
                    <div class="navbar-header">
                        <div class="m_nav-list">
                            <a href="javascript:;" data-toggle="offcanvas" class="lines js-m-navlist">
                                <span class="line first-line"></span>
                                <span class="line second-line"></span>
                                <span class="line third-line"></span>
                            </a>
                        </div>
                    </div>
                    <!-- 手机端菜单内容 -->
                    <div id="navbar" class="collapse navbar-collapse sidebar-offcanvas">
                        <input class="wb-switch wb-yes" id="J_themesSwitchBtn" type="checkbox"
                            onclick="javascript:switchNightMode()">
                        <div class="mobile-sidebar-column">
                            <ul class="mobile-sidebar-menu ultop">
                                <li class="menu-item">
                                    <a href="https://www.yvii.cn/">
                                        <i class="ri-arrow-right-s-line ri-lg"></i>
                                        首页
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="https://www.yvii.cn/category/life/" title="生活随笔">生活随笔</a>
                                </li>
                                <li class="menu-item">
                                    <a href="https://www.yvii.cn/category/trip/" title="旅行足迹">旅行足迹</a>
                                </li>
                                <li class="menu-item">
                                    <a>
                                        <i class="ri-arrow-right-s-fill ri-lg"></i>
                                        精品分享
                                        <div class="dropdown-sub-menu">
                                            <span class="ri-arrow-down-s-line ri-lg"></span>
                                        </div>
                                    </a>
                                    <ul class="sub-menu">
                                        <li class="menu-item">
                                            <a href="https://www.yvii.cn/category/vlog/" title="视频分享">视频分享</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.yvii.cn/category/app/" title="资源推荐">资源推荐</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item">
                                    <a href="https://www.yvii.cn/category/website/" title="建站项目">建站项目</a>
                                </li>
                                <li class="menu-item">
                                    <a href="https://www.yvii.cn/category/route/" title="实用教程">实用教程</a>
                                </li>
                                <li class="menu-item">
                                    <a>
                                        <i class="ri-arrow-right-s-fill ri-lg"></i>
                                        其他
                                        <div class="dropdown-sub-menu">
                                            <span class="ri-arrow-down-s-line ri-lg"></span>
                                        </div>
                                    </a>
                                    <ul class="sub-menu">
                                        <li class="menu-item">
                                            <a href="https://www.yvii.cn/talk.html" title="有话要说">有话要说</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.yvii.cn/links.html" title="友情链接">友情链接</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.yvii.cn/about.html" title="关于本站">关于本站</a>
                                        </li>
                                    </ul>
                                    <a href="https://www.yvii.cn/travellings.html" target="blank" class="a-no-bottom">
                                        <i class="ri-subway-line ri-lg"></i>
                                        开往
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.yvii.cn/forever.html" target="blank" class="a-no-bottom">
                                        <i class="ri-donut-chart-line ri-lg"></i>
                                        虫洞
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- logo与名称 -->
            <div class="top-bar-left pull-left navlogo">
                <a href="https://www.yvii.cn/" class="logo box">
                    <img src="https://pic.yvii.cn/logo/logo-yv.png" class="logo-light" id="logo-light" alt="乙未极客" />
                    <img src="https://pic.yvii.cn/logo/logo-yv2.png" class="logo-dark d-none" id="logo-dark"
                        alt="乙未极客" />
                    <b class="shan"></b>
                </a>
            </div>
            <!-- 搜索功能 -->
            <div class="search-warp clearfix">
                <form method="get" action="">
                    <div class="search-area">
                        <input class="search-input" placeholder="搜索感兴趣的知识和文章" type="text" name="s" autocomplete="off"
                            id="soblur">
                        <ul class="dropdown-menu top_so"></ul>
                    </div>
                    <button class="showhide-search search-form-input" type="submit">
                        <i class="ri-search-2-line ri-lg"></i>
                    </button>
                </form>
            </div>
            <!-- 右侧搜索登录菜单 -->
            <div class="top-bar-right pull-right text-right mobs">
                <div class="top-admin">
                    <a href="javascript:;" id="soStats" class="sostats_click">
                        <i id="soico" class="ri-search-2-line ri-lg"></i>
                        搜索
                    </a>
                    <a href="https://www.yvii.cn/logon.html">
                        <i class="ri-login-circle-line ri-lg"></i>
                        登录
                    </a>
                    <div class="navbar-search socollapse sostats" id="navbar-search" style="">
                        <div class="container">
                            <form method="get" role="search" id="searchform" class="searchform shadow" action="">
                                <div class="input-group">
                                    <input type="text" name="s" id="s" placeholder="请输入搜索关键词并按回车键…" class="form-control"
                                        required="">
                                    <div class="input-group-append">
                                        <button class="btn btn-nostyle" type="submit">
                                            <i class="ri-search-2-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <input class="wb-switch wb-no" id="J_themesSwitchBtn" type="checkbox"
                        onclick="javascript:switchNightMode()">
                </div>
            </div>
        </div>
        <!-- 电脑端显示 -->
        <div class="new_header container clearnav">
            <div class="top-bar-left pull-left navs">
                <nav class="top-bar-navigation">
                    <ul class="top-bar-menu">
                        <li class="menu-item">
                            <router-link to="/home" class="top-icon">
                                <img class="img" src="@/assets/images/icon/gift.svg" alt="">
                                    首页
                            </router-link>
                        </li>
                        <li class="nav-s">
                            <router-link to="/navigation" title="生活随笔" class="top-icon">
                                <img class="img" src="@/assets/images/icon/snowmap.svg" alt="">
                                导航页面
                            </router-link>
                        </li>
                        <li class="nav-s">
                            <router-link to="/chat" title="旅行足迹" class="top-icon">
                                <img class="img" src="@/assets/images/icon/bingjiling.svg" alt="">
                               对话
                            </router-link>
                        </li>
                        <li class="drop-down">
                            <a href="https://www.yvii.cn/category/share/" class="top-icon">
                                <img class="img" src="@/assets/images/icon/milu.svg" alt="">小工具
                            </a>
                            <ul class="aui-nav-dow">
                                <li>
                                    <a href="https://www.yvii.cn/category/vlog/" title="视频分享">文本翻译</a>
                                </li>
                                <li>
                                    <a href="https://www.yvii.cn/category/app/" title="资源推荐">视频下载</a>
                                </li>
                            </ul>
                        </li>
                       
                        <li class="drop-down">
                            <i class="msg_remind" style="display: inline;"></i>
                            <a href="#" >
                                <img class="img" src="@/assets/images/icon/snow.svg" alt="">
                            </a>
                            <ul class="aui-nav-dow">
                                <li>
                                    <a href="https://www.yvii.cn/talk.html" title="有话要说">有话要说</a>
                                </li>
                                <li>
                                    <a href="https://www.yvii.cn/links.html" title="友情链接">友情链接</a>
                                </li>
                                <li>
                                    <a href="https://www.yvii.cn/about.html" title="关于本站">关于本站</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div id="sidebar-toggle" class="sidebar-toggle">
                        <span></span>
                    </div>
                </nav>
            </div>
            <div class="top-bar-right pull-right text-right">
                <div class="top-admin">
                    &nbsp;&nbsp;
                    <a href="https://www.yvii.cn/travellings.html" target="blank" class="top-icon">
                        <img class="img" src="@/assets/images/icon/qiqiu.svg" alt="">
                        开往
                    </a>
                    &nbsp;&nbsp;
                    <a href="https://www.yvii.cn/forever.html" target="blank" class="top-icon">
                        <img class="img" src="@/assets/images/icon/tree.svg" alt="">
                        虫洞
                    </a>
                    &nbsp;&nbsp;
                    <a href="javascript:;" id="mStats" class="stats_click top-icon">
                        <img class="img" src="@/assets/images/icon/wazi.svg" alt="">
                        统计
                        <div class="stats">
                            <ul>
                                <li>文章总数：231 篇</li>
                                <li>评论总数：584 条</li>
                                <li>分类总数：7 个</li>
                                <li>最后更新：4天前</li>
                            </ul>
                        </div>
                    </a>
                    <div class="login avt_tl top-icon" >
                        <img class="img" src="@/assets/images/icon/bear.svg" alt="">
                        <span>
                            登录
                            <div class="header__dropdown">
                                <div class="login-div notlogin">
                                    <div class="info">
                                        <div class="info-thumb">
                                            <i class="thumb"
                                                style="background-image:url(https://www.yvii.cn/img/favicon2.png);"></i>
                                        </div>
                                        <h2 class="user-name">您还未登录</h2>
                                        <h4 class="user-info">登录体验更多功能</h4>
                                        <a href="https://www.yvii.cn/logon.html"
                                            class="modal-open btn btn-orange info-btn">
                                            <i class="ri-login-circle-line ri-lg"></i>
                                            立即登录
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </span>
                    </div>
                    <input class="wb-switch" id="J_themesSwitchBtn" type="checkbox"
                        onclick="javascript:switchNightMode()">
                </div>
            </div>
        </div>
        <div id="percentageCounter"></div>
    </div>
</template>

<script>
</script>

<style scoped>

.top-icon {
    display: flex;
    align-items: center;
   
    
}
.img{
        margin-right: 4px;
        width: 16px;
    height: 16px;
    vertical-align: middle;
    }
</style>
