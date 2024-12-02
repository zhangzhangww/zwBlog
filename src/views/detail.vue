<template>
    <div class="container">
        <main id="main">
            <div class="row">
                <!-- 左侧 -->
                <div class="col-md-9 contpost" id="content">
                    <article class="post ">
                        <header class="entry-header page-header">
                            <div class="">
                                <span class="badge badge-hot">
                                    <a href="https://www.yvii.cn/category/share/">精品分享</a>
                                </span>
                            </div>
                            <h1 class="entry-title page-title">linux debian 时区设置于目前时间同步</h1>
                            <div class="contimg">
                                <div class="author-infos" data-id="1">
                                    <img src="https://yvii.cn/usr/themes/spimes/src/user/img/33.jpg"
                                        srcset="https://yvii.cn/usr/themes/spimes/src/user/img/33.jpg" class="avatar"
                                        height="35" width="35">
                                    <div class="author-info-card"></div>
                                </div>
                            </div>
                            <div class="entry-meta contpost-meta">
                                <a href="https://www.yvii.cn/author/1">乙未极客 </a>
                                <span class="separator">/</span>
                                <time datetime="2024-11-13T22:22:00+08:00">11-13</time>
                                <span class="separator">/</span>
                                <a href="https://www.yvii.cn/archives/2044.html#comments">1 条评论</a>
                                <span class="separator">/</span>
                                72 阅读 <span class="separator">/</span>
                                1 赞 <div class="post-intro">作者有点忙，还没写简介</div>
                            </div>
                            <div class="postArticle-meta">
                                <i class="ri-time-line ri-lg"></i>
                                本文阅读 1 分钟
                                <div class="site-lins">
                                    <span>
                                        <router-link  to="/home" title="乙未极客">首页</router-link>
                                        <span class="sep">›</span>
                                        <a href="https://www.yvii.cn/category/share/">精品分享</a>
                                        <span class="sep">›</span>
                                        正文
                                    </span>
                                </div>
                            </div>
                            <div class="border-theme"></div>
                        </header>
                        <div class="show_text">
                            <div class="entry-content clearfix">
                                <div class="post_ai_box">
                                    <img src="https://www.yvii.cn/usr/themes/spimes/src/images/aitag.png"
                                        class="post_ai_ico">
                                    <span
                                        class="post_ai_desc">在Linux系统中，当系统时间与现实时间出现不一致时，可以通过快速解决方法实现时区同步。首先，使用命令timedatectl
                                        set-timezone 'Asia/Shanghai'来更改时区为亚洲/上海；然后，通过创建软连接ln -sf
                                        /usr/share/zoneinfo/Asia/Shanghai
                                        /etc/localtime来确保系统使用正确的时区信息；最后，重新启动系统以应用更改。这种简单而有效的方法可以快速解决时区同步问题，避免繁琐且无效的搞法，提高系统时间与现实时间的一致性。
                                    </span>
                                    <div class="post_ai_meta">
                                        <span>摘要由智能技术生成</span>
                                    </div>
                                </div>
                                <h1>linux # 时区同步</h1>
                                <p>系统时间与现实时间不一致</p>
                                <p>网上的办法也无法快速解决，都是什么乱七八兆的搞法，麻烦得要死</p>
                                <p>快速解决方法</p>
                                <pre>
                                            <code class="lang-antlr4"># 更改时区
timedatectl set-timezone 'Asia/Shanghai'
# 添加软连接
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# 重启
reboot</code>
                                        </pre>
                                <p>完成</p>
                                <div class="Copyrightnew">
                                    本文来自投稿，不代表本站立场，如若转载，请注明出处：<input id="informationurl"
                                        value="https://www.yvii.cn/archives/2044.html">
                                </div>
                            </div>
                            <div class="showall">-- 展开阅读全文 --</div>
                        </div>
                        <footer class="sider-footer" style="left: 247px; opacity: 1; transition: 1s; top: 150px; position: fixed;">
                            <div class="pos-r clearfix">
                                <div class="share-box ">
                                    <div class="weixin mouh" id="share-weixin" title="微信分享">
                                        <i class="ri-wechat-line"></i>
                                        <div class="wx-t-x pos-a hide box" id="weixin-box">
                                            <img class="qrcode fl bor-3"
                                                src="https://www.yvii.cn/usr/themes/spimes/poster/api.php?url=https://www.yvii.cn/archives/2044.html">
                                        </div>
                                    </div>
                                    <span class="dot"></span>
                                    <a href="javascript:Share('tqq')" class="qq" title="QQ分享">
                                        <img style="width: 16px;height: 16px;" src="@/assets/images/icon/gift.svg" alt="">
                                    </a>
                                    <span class="dot"></span>
                                    <a href="javascript:Share('sina')" class="weibo" title="微博分享">
                                        <img style="width:16px;height: 16px;" src="@/assets/images/icon/gift.svg" alt="">
                                    </a>
                                    <span class="dot"></span>
                                    <a href="javascript:;" class="copy-share-item" title="复制链接">
                                        <img style="width: 16px;height: 16px;" src="@/assets/images/icon/gift.svg" alt="">
                                    </a>
                                    <span class="dot"></span>
                                    <span title="点赞" class="izan zan_on" id="agree-btn" data-cid="2044"
                                        data-url="https://www.yvii.cn/archives/2044.html">
                                        <img style="width: 16px;height: 16px;" src="@/assets/images/icon/gift.svg" alt="">
                                        <p class="agree-num">1</p>
                                    </span>
                                </div>
                            </div>
                        </footer>
                        <div class="sider-footer-user post_no">
                            <div class="author-infos" data-id="1">
                                <img src="https://yvii.cn/usr/themes/spimes/src/user/img/33.jpg"
                                    srcset="https://yvii.cn/usr/themes/spimes/src/user/img/33.jpg" class="avatar"
                                    height="30" width="30">
                                <div class="author-info-card"></div>
                            </div>
                        </div>
                        <footer class="entry-footer" id="footfix">
                            <div class="entry-bar-inner">
                                <div class="post-tags">
                                    <a href="https://www.yvii.cn/tag/%E6%97%B6%E5%8C%BA/">时区</a>
                                </div>
                                <div class="readlist">
                                    <div class="read_outer">
                                        <a class="comiis_poster_a" href="javascript:;" title="生成封面">
                                            <i class="ri-image-line ri-lg"></i>
                                            封面
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </article>
                    <!-- 上一篇下一篇 -->
                    <div class="entry-page">
                        <div class="entry-page-prev j-lazy"
                            style="background-image: url(https://api.yviii.com/img/style)">
                            <a href="https://www.yvii.cn/archives/2041.html">
                                <span>未来三年，请主动给生活降级</span>
                            </a>
                            <div class="entry-page-info">
                                <span class="pull-left">« 上一篇</span>
                                <span class="pull-right">11-07</span>
                            </div>
                        </div>
                    </div>
                    <!-- 随机推荐 -->
                    <div class="part-mor">
                        <h3 class="section-title">
                            <span>
                                <i class="ri-shuffle-line ri-lg"></i>
                                随机推荐
                            </span>
                        </h3>
                        <div class="section-cont">
                            <div class="items">
                                <div class="item" v-for="item in 4" :key="item">
                                    <div class="hunter-item">
                                        <a href="https://www.yvii.cn/archives/1889.html">
                                            <div class="hunter-thumb">
                                                <i class="thumb "
                                                    style="background-image:url(https://api.yviii.com/img/style)">
                                                    <i class="mask"></i>
                                                </i>
                                            </div>
                                            <h2>Typecho文章文字居中的方法</h2>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- 评论 -->
                    <div id="comments">
                        <div id="respond-post-2044" class="respond">
                            <div class="cancel-comment-reply">
                                <a id="cancel-comment-reply-link"
                                    href="https://www.yvii.cn/archives/2044.html#respond-post-2044" rel="nofollow"
                                    style="display:none" onclick="return TypechoComment.cancelReply();">取消回复</a>
                            </div>
                            <h3 id="response" class="comment-reply-title section-title">
                                <span>
                                    <i class="ri-message-3-line ri-lg"></i>
                                    发表评论
                                </span>
                            </h3>
                            <form id="new_comment_form" method="post"
                                action="https://www.yvii.cn/archives/2044.html/comment" _lpchecked="1">
                                <div class="comment_triggered" style="display: block;">
                                    <div class="input_body inp">
                                        <ul class="ident">
                                            <li>
                                                <input type="text" name="author" placeholder="昵称*">
                                            </li>
                                            <li>
                                                <input type="mail" name="mail" placeholder="邮件*">
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="new_comment">
                                    <textarea name="text" rows="3" class="textarea_box OwO-textarea"
                                        style="height: auto;" placeholder="你的每一个好想法，都让人惊喜" required></textarea>
                                </div>
                                <div class="input_body bottom">
                                    <span class="OwO"></span>
                                    <input type="submit" value="提交评论" class="comment_submit_button c_button">
                                </div>
                                <div id="captcha"></div>


                            </form>
                        </div>
                        <div class="comments-info-title">
                            <div class="comment-info">
                                <span>
                                    <b class="comment-auth-mod comment-auth">V</b>
                                    <i>注册会员</i>
                                </span>
                                <span>
                                    <b class="comment-auth-mod comment-mod">L</b>
                                    <i>评论等级</i>
                                </span>
                            </div>
                            <div class="comment-tips">
                                <span>
                                    <b class="comment-auth-mod comment-rec">R</b>
                                    1 条回复
                                </span>
                            </div>
                        </div>
                        <ol class="comment-list">
                            <li id="li-comment-1158" class="comment comment-parent comment-odd">
                                <div id="comment-1158" class="comment-body">
                                    <div class="comment-author">
                                        <img src="@/assets/images/nav/castalia.png" width="40px" height="40px"
                                            class="avatar">
                                        云帆沧海
                                        <span class="says">
                                            :&nbsp;<i class="ri-road-map-fill"></i>
                                            &nbsp;<span style="color:#CC9966;font-size:11px;">河北省</span>
                                        </span>
                                    </div>
                                    <div class="comment-meta">
                                        <a href="https://www.yvii.cn/archives/2044.html#comment-1158">2024-11-19</a>
                                        <span class="comment-ua">
                                            &nbsp;&nbsp;<i class="ua-icon icon-win2"></i>
                                            &nbsp;&nbsp;Win 10 &nbsp;/&nbsp;<i class="ua-icon icon-chrome"></i>
                                            &nbsp;&nbsp;Chrome
                                        </span>
                                    </div>
                                    <p></p>
                                    <p>不错</p>
                                    <div class="reply">
                                        <span class="comment-reply-link">
                                            <a href="https://www.yvii.cn/archives/2044.html?replyTo=1158#respond-post-2044"
                                                rel="nofollow"
                                                onclick="return TypechoComment.reply('comment-1158', 1158);">回复</a>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ol>
                        <div class="comment-nomore">没有更多评论了 </div>
                        <div class="comment-footer">
                            <div class="comment-footer-main">
                                <div class="item">
                                    <span class="hide_sm">让大家也知道你的独特见解</span>
                                    <a href="#comments" class="btn btn-orange-border">立即评论</a>
                                </div>
                                <div class="item">以上留言仅代表用户个人观点，不代表官方立场 </div>
                            </div>
                            <i class="ji2-icon" data-bubble="yes"></i>
                        </div>
                    </div>
                </div>
                <!-- 右侧 -->
                <div class="col-md-3 widget-area post_sider" id="secondary">
                    <section class="widget widget-hunter-topics g_m_i smallscreen">
                        <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                            <div class="swiper-wrapper" style="transition-duration: 0ms;">
                                <a href="https://www.yvii.cn/xjj" target="_blank" title="美女小姐姐跳舞">
                                    <video autoplay="autoplay" muted="muted" loop="loop" width="100%" height="600px"
                                        style="height: 500px;object-fit: fill">
                                        <source src="//api.yviii.com/video/suiji.php" type="video/mp4">
                                    </video>
                                </a>
                            </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </section>
                    <section class="widget widget-hunter-topics g_m_i">
                        <h4 class="widget-title"></h4>
                        <div class="items">
                            <div style="text-align:center;">
                                <table style="width:100%;" cellpadding="2" cellspacing="0" border="0"
                                    class="ke-zeroborder" bordercolor="#000000">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="https://www.yviii.com/" target="_blank" rel="tag"
                                                    title="乙未起始页">
                                                    <svg t="1730373902677" class="icon" viewBox="0 0 1024 1024"
                                                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="53577"
                                                        width="38" height="38">
                                                        <path
                                                            d="M663.04 80H156.16A92.16 92.16 0 0 0 64 172.16v506.88a92.16 92.16 0 0 0 92.16 92.16h506.88a92.16 92.16 0 0 0 92.16-92.16V172.16A92.16 92.16 0 0 0 663.04 80z"
                                                            fill="#0065F3" p-id="53578"></path>
                                                        <path
                                                            d="M855.04 272H348.16A92.16 92.16 0 0 0 256 364.16v506.88a92.16 92.16 0 0 0 92.16 92.16h506.88a92.16 92.16 0 0 0 92.16-92.16V364.16A92.16 92.16 0 0 0 855.04 272z"
                                                            fill="#82B6FA" opacity=".4" p-id="53579"></path>
                                                        <path
                                                            d="M348.16 280h506.88a84.16 84.16 0 0 1 84.16 84.16v506.88a84.16 84.16 0 0 1-84.16 84.16H348.16a84.16 84.16 0 0 1-84.16-84.16V364.16a84.16 84.16 0 0 1 84.16-84.16z m607.04 84.16a100.16 100.16 0 0 0-100.16-100.16H348.16a100.16 100.16 0 0 0-100.16 100.16v506.88a100.16 100.16 0 0 0 100.16 100.16h506.88a100.16 100.16 0 0 0 100.16-100.16V364.16z"
                                                            fill="#FFFFFF" opacity=".4" p-id="53580"></path>
                                                        <path
                                                            d="M748.208 585.328l-177.344-67.456c-2.528-1.232-5.072 0-6.336 1.216-2.528 2.464-2.528 4.912-2.528 7.36L600 612.32l3.792 3.68 54.48 14.72-154.544 80.96 43.072-35.568c1.28-1.232 2.528-2.464 2.528-4.912V468.8a6.72 6.72 0 0 0-3.792-6.128L456.864 432c-2.528 0-5.056 0-6.336 1.232-1.264 1.216-2.528 2.448-2.528 4.896V744.8c0 1.232 0 1.232 1.28 2.448l1.248 1.232 1.28 1.232 88.656 49.056c1.28 0 2.528 1.232 2.528 1.232 1.28 0 2.544 0 3.808-1.232l202.672-122.656c1.264-1.232 2.528-3.68 2.528-4.912v-79.728a6.72 6.72 0 0 0-3.792-6.144z"
                                                            fill="#FFFFFF" p-id="53581"></path>
                                                    </svg>
                                                </a>
                                                <br>
                                                <span style="font-size:12px;">起始</span>
                                            </td>
                                            <td>
                                                <a href="https://www.yivv.cc/" target="_blank" rel="tag" title="简单图床">
                                                    <svg t="1731125410685" class="icon" viewBox="0 0 1024 1024"
                                                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="86561"
                                                        width="38" height="38">
                                                        <path
                                                            d="M663.04 80H156.16A92.16 92.16 0 0 0 64 172.16v506.88a92.16 92.16 0 0 0 92.16 92.16h506.88a92.16 92.16 0 0 0 92.16-92.16V172.16A92.16 92.16 0 0 0 663.04 80z"
                                                            fill="#0065F3" p-id="86562"></path>
                                                        <path
                                                            d="M859.616 272h-506.88a92.16 92.16 0 0 0-92.16 92.16v506.88a92.16 92.16 0 0 0 92.16 92.16h506.88a92.16 92.16 0 0 0 92.16-92.16V364.16a92.16 92.16 0 0 0-92.16-92.16z"
                                                            fill="#82B6FA" opacity=".4" p-id="86563"></path>
                                                        <path
                                                            d="M348.16 280h506.88a84.16 84.16 0 0 1 84.16 84.16v506.88a84.16 84.16 0 0 1-84.16 84.16H348.16a84.16 84.16 0 0 1-84.16-84.16V364.16a84.16 84.16 0 0 1 84.16-84.16z m607.04 84.16a100.16 100.16 0 0 0-100.16-100.16H348.16a100.16 100.16 0 0 0-100.16 100.16v506.88a100.16 100.16 0 0 0 100.16 100.16h506.88a100.16 100.16 0 0 0 100.16-100.16V364.16z"
                                                            fill="#FFFFFF" opacity=".4" p-id="86564"></path>
                                                        <path
                                                            d="M811.728 746.08c-0.096 0.272-0.288 0.56-0.448 0.816V520.064c0-14.336-11.728-26-26.128-26h-79.2l-0.432-0.864-10.24-20.352c-1.168-2.592-11.632-24.848-25.888-24.848h-138.928c-14.56 0-25.312 23.6-25.76 24.608l-10.352 20.592-0.448 0.864h-79.2c-14.4 0-26.128 11.664-26.128 26V773.28c0 14.336 11.728 26 26.128 26h370.448c14.4 0 26.128-11.664 26.128-26v-26.128c0.272-0.368 0.576-0.704 0.8-1.104h-0.352z m-76.16-174.768a20.864 20.864 0 0 1-20.832-20.832c0-11.52 9.344-20.848 20.832-20.848 11.488 0 20.848 9.344 20.848 20.848 0 11.488-9.36 20.832-20.848 20.832z m-136.96 154.192c-49.36 0-89.504-39.936-89.504-89.008 0-49.088 40.16-89.008 89.488-89.008 49.344 0 89.488 39.92 89.488 89.008 0 49.072-40.16 89.008-89.488 89.008z m-0.016-150.544c-34.144 0-61.92 27.6-61.92 61.536 0 33.92 27.776 61.536 61.92 61.536 34.128 0 61.92-27.616 61.92-61.536s-27.792-61.536-61.92-61.536z"
                                                            fill="#FFFFFF" p-id="86565"></path>
                                                    </svg>
                                                </a>
                                                <br>
                                                <span style="font-size:12px;">图床</span>
                                            </td>
                                            <td>
                                                <a href="http://18.163.28.123/" target="_blank" rel="tag" title="乙未影院">
                                                    <svg t="1731481094481" class="icon" viewBox="0 0 1024 1024"
                                                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2593"
                                                        width="38" height="38">
                                                        <path
                                                            d="M663.04 80H156.16A92.16 92.16 0 0 0 64 172.16v506.88a92.16 92.16 0 0 0 92.16 92.16h506.88a92.16 92.16 0 0 0 92.16-92.16V172.16A92.16 92.16 0 0 0 663.04 80z"
                                                            fill="#0065F3" p-id="2594"></path>
                                                        <path
                                                            d="M855.04 272H348.16A92.16 92.16 0 0 0 256 364.16v506.88a92.16 92.16 0 0 0 92.16 92.16h506.88a92.16 92.16 0 0 0 92.16-92.16V364.16A92.16 92.16 0 0 0 855.04 272z"
                                                            fill="#82B6FA" opacity=".4" p-id="2595"></path>
                                                        <path
                                                            d="M348.16 280h506.88a84.16 84.16 0 0 1 84.16 84.16v506.88a84.16 84.16 0 0 1-84.16 84.16H348.16a84.16 84.16 0 0 1-84.16-84.16V364.16a84.16 84.16 0 0 1 84.16-84.16z m607.04 84.16a100.16 100.16 0 0 0-100.16-100.16H348.16a100.16 100.16 0 0 0-100.16 100.16v506.88a100.16 100.16 0 0 0 100.16 100.16h506.88a100.16 100.16 0 0 0 100.16-100.16V364.16z"
                                                            fill="#FFFFFF" opacity=".4" p-id="2596"></path>
                                                        <path
                                                            d="M761.104 756.96c22.608-3.04 40.832-19.36 45.152-40.64 4.32-23.328 8.672-57.76 9.744-100.32 0-42.56-5.44-77.008-9.76-100.32-4.288-21.28-22.512-37.6-45.136-40.64A1211.248 1211.248 0 0 0 599.392 464c-66.784 0-125.984 5.968-161.536 11.04-22.64 3.04-40.992 19.36-45.312 40.64-4.304 23.312-8.544 57.76-8.544 100.32 0 42.56 4.24 77.008 8.544 100.32 0 0 22.672 37.6 45.312 40.64 36.624 5.056 95.84 11.04 161.536 11.04 66.8 0 126.16-5.984 161.712-11.04zM565.12 536.736l111.456 71.92c5.424 3.504 5.424 11.2 0 14.704l-111.456 71.92c-6.08 3.92-14.208-0.304-14.208-7.36v-143.824c0-7.056 8.128-11.28 14.208-7.36z"
                                                            fill="#FFFFFF" p-id="2597"></path>
                                                    </svg>
                                                </a>
                                                <br>
                                                <span style="font-size:12px;">影院</span>
                                            </td>
                                            <td>
                                                <a href="https://api.yviii.com/" target="_blank" rel="tag"
                                                    title="乙未API">
                                                    <svg t="1731125518535" class="icon" viewBox="0 0 1024 1024"
                                                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2058"
                                                        width="38" height="38">
                                                        <path
                                                            d="M663.04 80H156.16A92.16 92.16 0 0 0 64 172.16v506.88a92.16 92.16 0 0 0 92.16 92.16h506.88a92.16 92.16 0 0 0 92.16-92.16V172.16A92.16 92.16 0 0 0 663.04 80z"
                                                            fill="#0065F3" p-id="2059"></path>
                                                        <path
                                                            d="M859.616 272h-506.88a92.16 92.16 0 0 0-92.16 92.16v506.88a92.16 92.16 0 0 0 92.16 92.16h506.88a92.16 92.16 0 0 0 92.16-92.16V364.16a92.16 92.16 0 0 0-92.16-92.16z"
                                                            fill="#82B6FA" opacity=".4" p-id="2060"></path>
                                                        <path
                                                            d="M348.16 280h506.88a84.16 84.16 0 0 1 84.16 84.16v506.88a84.16 84.16 0 0 1-84.16 84.16H348.16a84.16 84.16 0 0 1-84.16-84.16V364.16a84.16 84.16 0 0 1 84.16-84.16z m607.04 84.16a100.16 100.16 0 0 0-100.16-100.16H348.16a100.16 100.16 0 0 0-100.16 100.16v506.88a100.16 100.16 0 0 0 100.16 100.16h506.88a100.16 100.16 0 0 0 100.16-100.16V364.16z"
                                                            fill="#FFFFFF" opacity=".4" p-id="2061"></path>
                                                        <path
                                                            d="M820.576 514.864v-26A41.216 41.216 0 0 0 779.712 448H445.44a41.216 41.216 0 0 0-40.848 40.864v26h416z m-416 29.712v213.936a41.216 41.216 0 0 0 40.848 40.864h334.288a41.216 41.216 0 0 0 40.864-40.864V544.576h-416z m130.736 156.736a14.368 14.368 0 0 1 0 20.8 14.656 14.656 0 0 1-10.4 4.464 14.656 14.656 0 0 1-10.4-4.464l-54.976-54.976a14.368 14.368 0 0 1 0-20.8l54.976-54.96a14.368 14.368 0 0 1 20.8 0 14.368 14.368 0 0 1 0 20.8l-44.576 44.56 44.576 44.576z m109.2-104L609.6 716.176a14.912 14.912 0 0 1-14.112 10.4c-1.488 0-2.976 0-4.464-0.752a14.848 14.848 0 0 1-10.4-18.56l34.912-118.864c2.24-8.16 10.4-12.64 18.576-10.4 8.16 2.976 12.64 11.136 10.4 19.312z m121.088 69.824l-54.976 54.976a14.656 14.656 0 0 1-10.4 4.464 14.656 14.656 0 0 1-10.4-4.464 14.368 14.368 0 0 1 0-20.8l44.576-44.576-44.576-44.56a14.368 14.368 0 0 1 0-20.8 14.368 14.368 0 0 1 20.8 0l54.976 54.96c5.936 5.2 5.936 14.864 0 20.8z"
                                                            fill="#FFFFFF" p-id="2062"></path>
                                                    </svg>
                                                </a>
                                                <br>
                                                <span style="font-size:12px;">API</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section class="widget g_m_i widget_kuaixun">
                        <div class="news-header">
                            <img src="https://www.yvii.cn/usr/themes/spimes/src/images/newicon.png" alt=""
                                class="w-[39px] h-[18px] absolute top-[18px] left-4">
                        </div>
                        <button data-cid="time" type="button" id="btn_time" class="right" aria-label="换一换热榜">
                            <img class="boxtime rotate"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAMAAACPHmKLAAAAM1BMVEVHcEzxQEHwQEHwQUHvQEDwQUHwQELvQEDwQUHvQEDwQEHwQEHvQEDwQELwQEHwQELwQULQdpGMAAAAEHRSTlMAn2DvEL+AIN86kFAhcM+vUcBIKwAAAVJJREFUSMfVVduChCAIVVTwsmn//7W76kybilbzNrwFnLgfhfgi0UQPnMFHtf+JMj7oa3+Xivch0q39yeyDpFV+284KTgt4BzBbICLn8FDwYcgWq8JTtYRVaTmIrjbfdYd8hTBNKxkopjOu/MoMepwGFz8FsvVFsACQMplo64Q6o8y6PiVoZzmG8H06coGQbBFNjNasJ5MF6REBgnP9KgemsrV4tuErMat1e2do46mXueHh4s7yRvx/csPoB599dDMNuoGgzxHiBsI1WQnbfE0Rp8pdtHDR3HwN8fHI5BNAKbwbWSaPAIDoJUx4STNE8hJgD1cOuzg7njcLuMW5ATeM1FVR2dxGk+RQRyUT4kpbsQ/yDGcfMNzBol0Y7efE+2qwxZNRo5oDzq8BZvKgsB0KvVo3RrbVqyZHf3NxOR1GJXfjdQ7e1HlGD/r+ehNp8U3yC/YPH/jMrgU4AAAAAElFTkSuQmCC">
                            <span>换一换</span>
                        </button>
                        <ul class="widget-kx-list">
                            <div class='postpj'>
                                <div class='loading-5'>
                                    <i></i>
                                    <i></i>
                                </div>
                            </div>
                            <div class="settips">请配置好页面缩略名选项</div>
                        </ul>
                    </section>
                    <section class="widget_img">
                        <div class="adTags">
                            <i class="gg-icon"></i>
                            <a rel="nofollow" target="_blank" href="https://fx.lanpangyun.pro/#/register?code=MLnZZnSc">
                                <img src="https://pic.yvii.cn/img/ad202402-2.webp">
                            </a>
                        </div>
                    </section>
                    <section class="widget widget-hunter-topics g_m_i">
                        <h4 class="widget-title">
                            <strong class="ts">
                                <i class="txt">标签TAG</i>
                            </strong>
                        </h4>
                        <div class="items" id="tag-cloud">
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/%E6%97%A5%E8%AE%B0/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            日记
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/%E8%BD%A8%E8%BF%B9/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            轨迹
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/%E7%AC%94%E8%AE%B0/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            笔记
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/%E5%B1%B1%E4%B8%9C/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            山东
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/%E7%9F%AD%E7%89%87/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            短片
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/VLOG/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            VLOG
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/r7000/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            r7000
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/%E6%A2%85%E6%9E%97/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            梅林
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/%E7%BD%91%E4%BB%B6/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            网件
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/%E6%95%85%E4%BA%8B/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            故事
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/80%E5%90%8E/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            80后
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="wall-item">
                                    <a href="https://www.yvii.cn/tag/typecho/" rel="tag">
                                        <h2>
                                            <i class="clr_orange">#</i>
                                            typecho
                                        </h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="widget-fixed">
                        <section class="widget wRecent g_m_i">
                            <h4 class="widget-title">
                                <strong class="ts">
                                    <i class="txt">最近回复</i>
                                </strong>
                            </h4>
                            <div class="item">
                                <div class="meta">
                                    <div class="meta-item">
                                        <span class="comment-avatar">
                                            <i class="thumb "
                                                style="background-image:url(@/assets/images/nav/castalia.png)"></i>
                                        </span>
                                        云帆沧海
                                    </div>
                                    <span class="views">11月19日</span>
                                </div>
                                <div class="comment-content">
                                    <a href="https://www.yvii.cn/archives/2044.html#comment-1158">
                                        <p>不错</p>
                                    </a>
                                </div>
                                <h2>
                                    <i class="ri-message-3-line ri-lg"></i>
                                    <a href="https://www.yvii.cn/archives/2044.html#comment-1158">linux debian
                                        时区设置于目前时间同步 </a>
                                </h2>
                            </div>
                            <div class="item">
                                <div class="meta">
                                    <div class="meta-item">
                                        <span class="comment-avatar">
                                            <i class="thumb "
                                                style="background-image:url(https://www.yvii.cn/usr/themes/spimes/src/user/img/9.jpg)"></i>
                                        </span>
                                        xiaowei
                                    </div>
                                    <span class="views">11月18日</span>
                                </div>
                                <div class="comment-content">
                                    <a href="https://www.yvii.cn/liuy.html#comment-1155">
                                        <p>
                                            大佬 用的什么主题呀？<img class="biaoqing" src="@/assets/images/nav/castalia.png">
                                        </p>
                                    </a>
                                </div>
                                <h2>
                                    <i class="ri-message-3-line ri-lg"></i>
                                    <a href="https://www.yvii.cn/liuy.html#comment-1155">评论留言 </a>
                                </h2>
                            </div>
                            <div class="item">
                                <div class="meta">
                                    <div class="meta-item">
                                        <span class="comment-avatar">
                                            <i class="thumb "
                                                style="background-image:url(@/assets/images/nav/castalia.png)"></i>
                                        </span>
                                        <a href="http://www.gvbow.cn" rel="external nofollow">nccmhceeqs</a>
                                    </div>
                                    <span class="views">11月14日</span>
                                </div>
                                <div class="comment-content">
                                    <a href="https://www.yvii.cn/archives/2037.html#comment-1151">
                                        <p>真棒！</p>
                                    </a>
                                </div>
                                <h2>
                                    <i class="ri-message-3-line ri-lg"></i>
                                    <a href="https://www.yvii.cn/archives/2037.html#comment-1151">高分催泪泰剧 </a>
                                </h2>
                            </div>
                            <div class="item">
                                <div class="meta">
                                    <div class="meta-item">
                                        <span class="comment-avatar">
                                            <i class="thumb "
                                                style="background-image:url(@/assets/images/nav/castalia.png)"></i>
                                        </span>
                                        zeruns
                                    </div>
                                    <span class="views">10月11日</span>
                                </div>
                                <div class="comment-content">
                                    <a href="https://www.yvii.cn/archives/2088.html#comment-1135">
                                        <p>可以白嫖cloudflare R2对象存储的</p>
                                    </a>
                                </div>
                                <h2>
                                    <i class="ri-message-3-line ri-lg"></i>
                                    <a href="https://www.yvii.cn/archives/2088.html#comment-1135">PicGo+七牛云个人图床搭建方案 </a>
                                </h2>
                            </div>
                        </section>
                        <section class="widget widget-hunter-topics g_m_i">
                            <h4 class="widget-title">
                                <strong class="ts">
                                    <i class="txt">相关链接</i>
                                </strong>
                            </h4>
                            <div class="items">
                                <div style="text-align:center;">
                                    <a href="/feed/" target="_blank" rel="tag" title="RSS订阅">
                                        <svg t="1728311804244" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="13866" width="58" height="58">
                                            <path
                                                d="M511.583279 140.670581c-220.855136 0-399.878414 179.056042-399.878414 399.881485h799.759899c0-220.825444-179.022254-399.881485-399.881485-399.881485z"
                                                fill="#F4CE73" p-id="13867"></path>
                                            <path
                                                d="M517.204409 863.975939c-27.038764 0-47.64548-6.691091-61.238581-19.878734-9.468891-9.192442-16.319708-21.012175-20.334363-35.140768-0.957333-3.442302-0.794535-6.106452 0.538564-7.862416 1.526613-2.011935 4.772329-3.37575 8.068216-3.375749 3.785304 0 6.219079 1.492825 7.226583 4.383253 4.433423 12.471947 10.313597 22.087254 17.992737 29.523733 12.279457 11.757275 28.485514 17.670213 48.26493 17.670213 20.656886 0 36.863967-5.424544 48.180972-16.109812 11.660006-10.815301 17.620043-24.035708 17.620042-39.105252 0-10.326907-2.873022-19.389316-8.523845-26.926136-5.278129-7.177436-13.542931-12.991057-25.202937-17.633353-6.302014-2.404083-20.234022-6.691091-41.831859-12.831331-30.062297-8.281185-43.57144-17.278065-49.645128-23.383493-12.212904-12.309149-18.155535-26.955829-18.155534-44.722287 0-11.400963 2.810565-21.760635 8.590397-31.732254 5.488025-9.548755 13.316653-16.66271 23.985538-21.827188 11.137825-5.357992 25.219319-8.084599 41.799095-8.084598 26.583135 0 46.461868 6.235462 59.063848 18.544611 7.971971 7.792791 12.714608 18.804678 17.244277 30.33465 1.803062 4.546051 0.668597 6.236486 0.292831 6.78836-1.380197 2.011935-5.161406 4.060729-9.727934 4.060729-4.236837 0-6.93068-1.526613-8.00576-4.550146-3.701345-10.100629-7.971971-20.427536-16.516294-27.930568-10.084247-8.963092-24.488265-13.542931-42.740045-13.542931-18.448366 0-33.550674 4.609532-44.868703 13.739517-9.288688 7.695522-14.111188 18.12277-14.111187 30.301886 0 11.334411 4.446734 21.467804 12.877406 29.230902 5.71328 5.424544 17.097861 13.05761 53.200057 22.639129 22.735374 6.0399 39.574192 12.242597 50.047515 18.445294 9.128962 5.394852 16.159982 12.668533 21.454493 22.250052 5.195194 9.548755 7.859344 21.923433 7.859344 36.633593 0 13.28696-3.199642 25.399523-9.791416 37.026765-6.26925 11.075368-14.87603 19.066793-26.340473 24.424784-12.245668 5.749116-28.12613 8.639544-47.272786 8.639545zM759.756699 863.975939c-27.315213 0-47.340362-6.495529-61.208888-19.878734-9.514966-9.255923-16.353496-21.078727-20.281121-35.077287-0.991121-3.505783-0.815013-6.168909 0.51911-7.925897 1.526613-2.011935 4.772329-3.37575 8.054906-3.375749 3.831379 0 6.298943 1.492825 7.340234 4.479498 4.333083 12.442254 10.213256 22.087254 17.959972 29.493017 12.309149 11.690723 28.515206 17.60366 48.198378 17.60366 20.560641 0 36.784104-5.390756 48.21476-16.013566 11.773657-11.041579 17.720383-24.195434 17.720383-39.201498 0-10.263426-2.8935-19.322764-8.590398-26.926136-5.294511-7.2102-13.609484-13.023821-25.303278-17.633353-6.285632-2.404083-20.137777-6.691091-41.882029-12.831331-29.975267-8.281185-43.53458-17.310829-49.658438-23.417281-12.133041-12.275361-18.059289-26.923065-18.059289-44.689523 0-11.497208 2.794183-21.827187 8.557633-31.668773 5.57096-9.645 13.399587-16.758955 23.969156-21.890668 11.174684-5.357992 25.285872-8.084599 41.849264-8.084599 26.633305 0 46.495656 6.235462 59.030061 18.511847 8.071288 7.859344 12.814949 18.837442 17.344617 30.368438 1.785656 4.546051 0.634809 6.202697 0.259043 6.754572-1.606476 2.371318-5.700993 4.094517-9.727934 4.094517-4.25322 0-6.964468-1.559377-8.051834-4.579839-3.41261-9.519062-7.762075-20.234022-16.306398-27.837394-10.263426-9.026573-24.714544-13.606412-43.000112-13.606412-18.547683 0-33.633609 4.64332-44.83901 13.835762-9.222135 7.633065-14.078423 18.056218-14.078423 30.205641 0 11.171613 4.383253 21.242549 12.664437 29.100869 5.507479 5.164478 16.988305 13.087302 53.413026 22.768138 22.769162 6.0399 39.624362 12.242597 50.114067 18.445294 9.242613 5.491097 16.223463 12.735086 21.322412 22.120019 5.328299 9.611212 7.992449 21.954149 7.992449 36.763626 0 13.253172-3.182236 25.399523-9.761723 37.059529-6.26925 11.011887-14.923129 19.034028-26.403954 24.392021-12.212904 5.751164-28.14456 8.641592-47.371079 8.641592z"
                                                fill="#FFFFFF" p-id="13868"></path>
                                            <path
                                                d="M927.282768 540.551042h-49.887788c0-201.69517-164.149295-365.841394-365.777913-365.841393-201.758651 0-365.841394 164.146224-365.841394 365.841393h-49.887788c0-229.236661 186.492521-415.729182 415.729182-415.729182 229.169085 0.001024 415.665701 186.493545 415.665701 415.729182z"
                                                fill="#27323A" p-id="13869"></path>
                                            <path
                                                d="M810.87827 540.551042c0-164.995025-134.267202-299.262227-299.261203-299.262226-165.057482 0-299.324684 134.267202-299.324684 299.262226h49.887789c0-137.517014 111.857424-249.374438 249.436895-249.374438 137.450462 0 249.374438 111.857424 249.374438 249.374438h49.886765z"
                                                fill="#27323A" p-id="13870"></path>
                                            <path
                                                d="M694.474795 540.551042c0-100.815845-82.041883-182.921209-182.857728-182.921209-100.879326 0-182.921209 82.10434-182.921209 182.921209h49.887789c0-73.337834 59.695586-133.03342 133.03342-133.03342s132.969939 59.695586 132.969939 133.03342h49.887789z"
                                                fill="#27323A" p-id="13871"></path>
                                            <path
                                                d="M578.133777 540.551042c0-36.704241-29.816565-66.51671-66.51671-66.51671-36.766698 0-66.51671 29.812469-66.51671 66.51671h133.03342z"
                                                fill="#27323A" p-id="13872"></path>
                                            <path
                                                d="M517.204409 897.233782c-35.972163 0-64.374742-9.841586-84.396819-29.230902-13.722111-13.349417-23.529909-30.14216-29.167422-49.954341-3.847761-13.705729-1.702721-26.859584 6.026589-37.026765 7.859344-10.359672 20.78692-16.562369 34.572512-16.562369 17.862703 0 33.032588 10.522469 38.666006 26.793031 2.534116 7.14672 5.813621 12.735086 9.681859 16.469195 5.826931 5.584271 14.062041 8.314973 25.136385 8.314973 11.886285 0 20.414226-2.371318 25.349353-7.01771 5.00168-4.676084 7.193818-9.222135 7.193818-14.939511 0-3.961412-1.004432-5.813621-1.865519-6.983922-0.634809-0.841634-3.036844-3.538548-10.915641-6.655254-5.52079-2.14504-18.478058-6.042971-38.583071-11.726559-30.012127-8.281185-51.025325-18.741197-64.161774-31.957509-18.482154-18.644952-27.834323-41.572816-27.834323-68.173356 0-17.180796 4.399635-33.488217 13.103685-48.427728 8.690739-15.198554 21.581455-27.022381 38.244165-35.077288 15.754523-7.566513 34.671829-11.397891 56.286047-11.397891 35.563633 0 63.253588 9.418721 82.284545 27.963332 12.701297 12.471947 19.309453 27.608044 24.976658 42.025373 5.310893 13.446686 4.190763 26.829891-3.165853 37.645192-7.812245 11.464444-22.069848 18.611164-37.222327 18.611163-2.338554 0-4.625914-0.196586-6.850817-0.489417 5.115331 2.241285 9.645 4.546051 13.655559 6.917369 14.17774 8.381525 25.495768 20.105012 33.633609 34.784457 7.988353 14.713232 12.016318 32.446926 12.016318 52.744428 0 18.903995-4.742637 36.896732-14.111188 53.396644-9.648071 17.084551-23.516598 29.945574-41.216504 38.197066-16.629945 7.793815-37.286832 11.758299-61.33585 11.758299z m-3.053226-243.331467c-10.815301 0-18.658262 2.078487-23.985538 6.395188-0.908186 0.74846-1.73651 1.62593-1.736509 4.386324 0 2.045723 0.565185 3.312269 2.192138 4.806118 1.233782 1.170301 8.201321 6.691091 39.168734 14.909818 9.921449 2.630361 18.837442 5.324204 26.812485 8.051834-6.612251-4.609532-11.677412-11.171613-14.537124-19.226518-2.15835-5.877102-4.579839-11.79004-7.127266-14.031325-4.922841-4.383253-14.015966-5.291439-20.78692-5.291439z"
                                                fill="#79CCBF" p-id="13873"></path>
                                            <path
                                                d="M617.239029 793.883821c0-17.733694-3.378822-32.606652-9.937831-44.689523-6.691091-12.082871-15.784216-21.565073-27.544563-28.515206-11.757275-6.951157-29.812469-13.705729-54.237253-20.201258-24.488265-6.4986-39.883405-12.797543-46.185419-18.773961-5.065161-4.676084-7.532724-10.39346-7.532725-17.017998 0-7.2102 2.661078-12.991057 7.921801-17.344617 8.381525-6.754571 19.7487-10.066841 34.429168-10.066841 14.161358 0 24.684851 3.116707 31.765018 9.418721 5.324204 4.676084 8.507463 11.949766 11.819732 20.979411 10.070936 28.386197 61.777145 15.461692 48.590526-17.926185-5.390756-13.705729-10.978098-26.244229-21.112515-36.182059-15.850769-15.461692-39.427776-23.254483-70.673685-23.254484-19.163038 0-35.532916 3.245716-49.043083 9.741245-13.575696 6.562081-23.969155 15.980802-31.112803 28.45275-7.2102 12.405395-10.849089 25.722047-10.849089 40.079991 0 22.149711 7.662758 40.987153 22.994417 56.445774 10.849089 10.915641 29.816565 20.204329 56.901403 27.674596 20.853472 5.909866 34.299134 10.001312 40.209 12.275361 8.640568 3.442302 14.616987 7.470267 18.05929 12.146352 3.505783 4.679156 5.195194 10.263426 5.195194 16.955541 0 10.329979-4.090422 19.293071-12.405395 27.022381-8.184939 7.72931-20.463372 11.563761-36.766698 11.563761-15.458621 0-27.670501-4.35356-36.700146-12.994128-5.846385-5.650823-10.39346-13.316653-13.835762-22.994417-9.418721-27.214872-57.034508-17.017998-47.549234 16.825507 5.00168 17.60366 13.509143 31.634985 24.747308 42.547555 16.888988 16.369879 41.250292 24.554818 72.818724 24.554818 21.631625 0 39.753372-3.378822 54.303806-10.199946 14.616987-6.818052 25.852081-17.278065 33.776953-31.309389 7.992449-14.097877 11.953861-29.10394 11.953861-45.213752z"
                                                fill="#27323A" p-id="13874"></path>
                                            <path
                                                d="M759.756699 897.233782c-35.859536 0-64.228326-9.841586-84.29955-29.230902-13.868527-13.446686-23.676324-30.272194-29.21452-50.016798-3.834451-13.676036-1.689411-26.796103 6.039899-36.992977 7.841938-10.363767 20.769514-16.532676 34.559202-16.532677 17.829939 0 33.028493 10.489705 38.713104 26.696786 2.600669 7.439551 5.717376 12.797543 9.581519 16.499912 5.912938 5.62113 14.17774 8.381525 25.202937 8.381526 11.89038 0 20.494089-2.404083 25.578703-7.113956 4.885981-4.579839 7.097573-9.192442 7.097573-14.843265 0-3.897931-1.041291-5.779833-1.936167-6.983922-0.631737-0.841634-3.036844-3.538548-10.945334-6.655255-5.537172-2.14504-18.445294-6.042971-38.666005-11.726558-29.942502-8.281185-50.958773-18.741197-64.145392-31.924745-18.478058-18.707409-27.800534-41.639368-27.800534-68.206121 0-17.310829 4.417041-33.617227 13.137472-48.490185 8.770602-15.168861 21.614219-26.992689 38.130514-35.01483 15.850769-7.566513 34.784456-11.397891 56.365911-11.397891 35.646568 0 63.333451 9.418721 82.317308 27.99712 12.71768 12.405395 19.326859 27.541491 25.010447 41.991585 5.294511 13.47945 4.156974 26.829891-3.216024 37.645192-7.812245 11.464444-22.069848 18.611164-37.205945 18.611163-2.321148 0-4.59315-0.162798-6.80167-0.489417 5.097925 2.241285 9.628618 4.546051 13.639176 6.917369 14.404019 8.574016 25.708737 20.300574 33.630538 34.91449 7.958661 14.357944 12.01939 32.090614 12.019389 52.614395 0 18.87123-4.708849 36.800486-14.014942 53.362855-9.744317 17.118339-23.613867 29.945574-41.279984 38.230855-16.661686 7.791767-37.351337 11.756251-61.497625 11.756251z m-3.053226-243.331467c-10.655575 0-18.661334 2.10818-23.759259 6.298942-1.233782 1.041291-1.899307 2.015006-1.899307 4.483594 0 1.689411 0.389076 3.149471 2.272002 4.935128 1.057674 1.007503 8.121458 6.562081 39.08887 14.779784 9.92452 2.630361 18.837442 5.291439 26.812485 8.051834-6.578463-4.609532-11.660006-11.137825-14.516647-19.193754-2.048795-5.683587-4.499976-11.85352-7.08119-14.128593-4.889052-4.318748-14.081495-5.226935-20.916954-5.226935z"
                                                fill="#79CCBF" p-id="13875"></path>
                                            <path
                                                d="M859.921353 793.883821c0-17.733694-3.312269-32.606652-10.004384-44.689523-6.562081-12.082871-15.784216-21.565073-27.47801-28.515206-11.757275-6.951157-29.815541-13.705729-54.303806-20.201258-24.488265-6.4986-39.883405-12.797543-46.2489-18.773961-4.939223-4.676084-7.470267-10.39346-7.470268-17.017998 0-7.2102 2.727631-12.991057 7.988354-17.344617 8.251492-6.754571 19.7487-10.066841 34.299134-10.066841 14.224839 0 24.813861 3.116707 31.957509 9.418721 5.261747 4.676084 8.443982 11.949766 11.693794 20.979411 10.130321 28.386197 61.774073 15.461692 48.649911-17.926185-5.390756-13.705729-10.975027-26.244229-21.175996-36.182059-15.784216-15.461692-39.364295-23.254483-70.673684-23.254484-19.096485 0-35.529845 3.245716-49.105541 9.741245-13.513239 6.562081-23.839122 15.980802-31.050346 28.45275-7.276753 12.405395-10.849089 25.722047-10.849089 40.079991 0 22.149711 7.665829 40.987153 22.93196 56.445774 10.91257 10.915641 29.879022 20.204329 56.901403 27.674596 20.982482 5.909866 34.362615 10.001312 40.272481 12.275361 8.704049 3.442302 14.680468 7.470267 18.125842 12.146352 3.505783 4.679156 5.261747 10.263426 5.261747 16.955541 0 10.329979-4.156974 19.293071-12.408466 27.022381-8.314973 7.72931-20.590334 11.563761-36.896732 11.563761-15.39514 0-27.603948-4.35356-36.700145-12.994128-5.909866-5.650823-10.39346-13.316653-13.76921-22.994417-9.551826-27.214872-57.097989-17.017998-47.615787 16.825507 4.939223 17.60366 13.513239 31.634985 24.75038 42.547555 16.951445 16.369879 41.180668 24.554818 72.752171 24.554818 21.760635 0 39.883405-3.378822 54.43384-10.199946 14.550434-6.818052 25.852081-17.278065 33.843505-31.309389 7.923849-14.097877 11.888333-29.10394 11.888333-45.213752z"
                                                fill="#27323A" p-id="13876"></path>
                                            <path
                                                d="M194.98053 898.045723c-23.82274 0-41.799095-16.1436-41.799094-37.578639V613.174204c0-24.328539 20.476683-34.103572 34.248964-34.721999l88.780072-0.033788c29.263666 0 50.423281 2.923193 64.697266 8.899611 15.508791 6.365495 28.046267 17.862703 37.155775 34.069785 8.653879 15.136097 13.05761 32.80631 13.057609 52.388116 0 24.943894-6.821124 46.022621-20.26781 62.618779-7.406786 9.258995-16.775337 16.66271-28.013502 22.149711 1.932072 2.048795 3.785304 4.094517 5.52079 6.205769 7.892108 9.452509 17.862703 25.170173 30.481066 48.034556 0.405459 0.778153 10.263426 20.982482 13.593101 27.218968 6.056282 11.430656 5.52079 25.170173-1.443678 36.763626-7.53682 12.5385-21.192378 20.334363-35.646568 20.334363-10.084247 0-29.3937-3.930696-45.55061-30.205641-7.326923-11.889356-26.180748-44.074168-26.180748-44.074168-12.648055-21.045963-21.092038-34.069784-25.007375-38.619931-3.019438-3.572336-5.909866-5.909866-8.736813-7.014638-1.153919-0.455629-4.726255-1.46006-13.090374-1.819444v85.095109c0.001024 21.439135-17.974307 37.582735-41.798071 37.582735z"
                                                fill="#79CCBF" p-id="13877"></path>
                                            <path
                                                d="M377.738941 847.798551c-3.37575-6.365495-13.446686-26.955829-13.446686-26.955829-12.016318-21.760635-21.631625-36.960212-28.711792-45.470748-7.077095-8.510535-16.10674-16.369879-27.022382-23.513526 21.957221-3.572336 38.39058-12.212904 49.368679-25.918633 11.108132-13.705729 16.566465-31.116899 16.566465-52.161838 0-16.628922-3.575408-31.37287-10.915642-44.236966-7.273681-12.924504-16.951445-21.890668-29.100868-26.892348-12.079799-5.065161-31.50188-7.599277-58.265219-7.599277H188.193194s-18.381813 0.844705-18.381813 18.125842v247.291856c0 27.930568 50.339322 27.930568 50.339322 0v-101.854065h10.329979c11.627242 0 20.137777 1.041291 25.529557 3.119779 5.390756 2.141968 10.455917 5.973347 15.198554 11.627242 4.87267 5.650823 13.705729 19.356552 26.763338 41.050634 0 0 18.707409 31.961604 25.98109 43.781336 27.41453 44.562561 65.80511 12.21188 53.78572-10.393459z"
                                                fill="#27323A" p-id="13878"></path>
                                            <path
                                                d="M257.633097 713.727934h-37.482394V642.665174h39.494329c20.593406 0 32.935319 0.322524 37.026765 0.974738 8.251492 1.492825 14.550434 5.131713 19.096485 10.975027 4.483594 5.783928 6.691091 13.383205 6.691091 22.801926 0 8.443982-1.689411 15.39514-5.131714 20.982482-3.37575 5.650823-8.118387 9.611212-14.161358 11.886285-6.038876 2.270978-21.174972 3.442302-45.533204 3.442302z"
                                                fill="#79CCBF" p-id="13879"></path>
                                        </svg>
                                        RSS订阅
                                    </a>
                                    <a href="/sitemap.xml" target="_blank" rel="tag" title="sitemap">
                                        <svg t="1728311750446" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="12878" width="58" height="58">
                                            <path
                                                d="M938.666667 512c0 235.605333-191.061333 426.666667-426.666667 426.666667S85.333333 747.605333 85.333333 512 276.394667 85.333333 512 85.333333s426.666667 191.061333 426.666667 426.666667z"
                                                fill="#CFD8DC" p-id="12879"></path>
                                            <path
                                                d="M874.666667 512c0 200.341333-162.325333 362.666667-362.666667 362.666667S149.333333 712.341333 149.333333 512 311.658667 149.333333 512 149.333333s362.666667 162.325333 362.666667 362.666667z"
                                                fill="#448AFF" p-id="12880"></path>
                                            <path
                                                d="M467.157333 467.157333l89.664 89.664L753.066667 270.912l-285.909334 196.245333z"
                                                fill="#FF3D00" p-id="12881"></path>
                                            <path d="M512 512l241.088-241.088-196.245333 285.909333L512 512z"
                                                fill="#BF360C" p-id="12882"></path>
                                            <path
                                                d="M467.157333 467.157333L270.912 753.066667l285.909333-196.245334-89.664-89.664z"
                                                fill="#FFFFFF" p-id="12883"></path>
                                            <path d="M512 512L270.912 753.088l285.909333-196.245333L512 512z"
                                                fill="#BDBDBD" p-id="12884"></path>
                                            <path
                                                d="M364.842667 228.245333c12.757333-6.421333 25.578667-12.757333 38.336-17.088l25.664 57.664-38.421334 17.002667-25.578666-57.578667zM768 533.333333h61.824c0-6.421333 2.176-14.912 2.176-21.333333s0-14.912-2.176-21.333333H768v42.666666zM270.912 300.842667l44.842667 44.757333 29.824-29.824-44.757334-44.842667-29.909333 29.909334z m262.421333-106.666667C526.912 192 518.421333 192 512 192s-14.912 0-21.333333 2.176V256h42.666666V194.176z m115.157334 29.824c-12.757333-6.421333-25.578667-10.666667-40.490667-14.912l-23.509333 59.754667 40.576 14.912 23.424-59.754667zM266.666667 437.333333l14.912-40.490666L224 373.333333c-6.421333 12.842667-10.666667 25.578667-14.912 40.490667L266.666667 437.333333zM256 490.666667H194.176C192 497.088 192 505.578667 192 512s0 14.912 2.176 21.333333H256v-42.666666z m501.333333 96l-14.912 40.490666L800 650.666667c6.421333-12.842667 10.666667-25.578667 14.912-40.490667L757.333333 586.666667z m55.509334-183.509334c-4.330667-12.757333-10.666667-25.578667-17.088-38.336L738.176 390.4l17.002667 38.421333 57.664-25.664z m-59.754667 320L708.245333 678.4l-29.824 29.824 44.757334 44.842667 29.909333-29.909334z m-467.264-89.578666l-17.002667-38.421334-57.664 25.664c4.330667 12.757333 10.666667 25.578667 17.088 38.336l57.578667-25.578666z m347.754667 104.597333l-38.421334 17.002667 25.664 57.664c12.757333-4.330667 25.578667-10.666667 38.336-17.088l-25.578666-57.578667zM437.333333 757.333333l-40.490666-14.912L373.333333 800c12.842667 6.421333 25.578667 10.666667 40.490667 14.912L437.333333 757.333333z m96 72.490667V768h-42.666666v61.824c6.421333 0 14.912 2.176 21.333333 2.176s14.912 0 21.333333-2.176z"
                                                fill="#BBDEFB" p-id="12885"></path>
                                        </svg>
                                        XML地图
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </main>
    </div>
    <footer class="site-footer ">
        <div class="site-info clearfix">
            <div class="container">
                <div class="footer-left">
                    <div class="footer-l-top">
                        <div class="footer-l-btm">
                            <p class="links">
                                <a>
                                    <i class="ri-invision-line ri-lg"></i>
                                    友情链接：
                                </a>
                                <a rel="nofollow" target="_blank" href="https://www.yviii.com/">乙未主页</a>
                                <a rel="nofollow" target="_blank" href="https://dusays.com/">杜老师说</a>
                                <a rel="nofollow" target="_blank" href="https://xsui.com/">香水主页</a>
                                <a rel="nofollow" target="_blank" href="https://www.zlprime.cn/">心耘博客</a>
                                <a rel="nofollow" target="_blank" href="https://www.zhuroufenyiban.cn/">猪肉分一半</a>
                                <a rel="nofollow" target="_blank" href="https://wang618.cn/">旺东自留地</a>
                            </p>
                        </div>

                    </div>
                    <div class="footer-l-btm">
                        <p>
                            <a href="https://web.yviii.com/" target="_blank">
                                <span style="color:#666;">
                                    <svg t="1730974854996" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="3661" width="14" height="14">
                                        <path
                                            d="M93.994667 367.402667H36.565333a36.053333 36.053333 0 0 0-35.882666 35.882666v36.608a567.893333 567.893333 0 0 0-0.682667 25.6c0 282.752 229.248 512 512 512 278.485333 0 505.045333-222.378667 511.829333-499.242666 0-1.066667 0.170667-2.133333 0.170667-3.2V403.285333a36.053333 36.053333 0 0 0-35.882667-35.882666h-57.429333c-49.450667-184.704-218.112-320.896-418.346667-320.896-200.192 0-368.853333 136.192-418.346666 320.896z m786.944 0H143.786667c48.085333-157.952 194.986667-273.024 368.554666-273.024 173.610667 0 320.512 115.072 368.597334 273.024z"
                                            p-id="3662" fill="#666"></path>
                                    </svg>
                                </span>
                            </a>
                            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=13048102000406" rel="noreferrer"
                                target="_blank">
                                <span style="color:#666;">冀公网安备13048102000406号</span>
                            </a>
                            <a href="https://beian.miit.gov.cn/" target="_blank">
                                <span style="color:#666;">冀ICP备2020020976号</span>
                            </a>
                        </p>
                    </div>

                </div>
                <div class="footer-right ewms">
                    <div class="like">
                        <h3>
                            <span style="color:#666;font:oblique bolder 14px &#39;华文彩云&#39; ">拾穗：一万年太久只争朝夕</span>
                        </h3>
                        <p>
                            <span style="color:#666;">©&nbsp;2024 乙未极客</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
#gt-captcha {
    line-height: 44px;
}

.gt-btn-disabled {
    background-color: #a3b7c1 !important;
    color: #fff !important;
    cursor: no-drop !important;
}
</style>