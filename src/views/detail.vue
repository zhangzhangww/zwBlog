<template>
    <div class="container">
        <main id="main">
            <div class="row">
                <!-- 左侧 -->
                <div class=" col-md-9 contpost " id="content">
                    <article class="post">
                        <header class="entry-header page-header">
                            <div class="">
                                <span class="badge badge-hot">
                                    <a href="https://www.yvii.cn/category/share/">精品分享</a>
                                </span>
                            </div>
                            <h1 class="entry-title page-title">{{article[0].title}}</h1>
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
                                <time datetime="2024-11-13T22:22:00+08:00">{{article[0].createtime}}</time>
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
                                        <a href="https://www.yvii.cn/category/share/">{{article[0].fenlei}}</a>
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
                                    <span class="post_ai_desc">
                                        {{article[0].desc}}
                                    </span>
                                    <div class="post_ai_meta">
                                        <span>摘要由智能技术生成</span>
                                    </div>
                                </div>
                                <div class="content" v-html=" article[0].content">
                                   
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
                <Right></Right>
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
import articleList from '@/utils/article.js';
import Right from '../components/right.vue';
const route = useRoute()
let id=route.query.id
console.log(articleList)
const article=articleList.filter((item) => {
    return item.id == id
})
console.log(article)
</script>

<style scoped lang="scss">
.row {
    display: flex;
    // width: 1400px;
    margin: auto;
    gap: 12px;
}

#gt-captcha {
    line-height: 44px;
}

.gt-btn-disabled {
    background-color: #a3b7c1 !important;
    color: #fff !important;
    cursor: no-drop !important;
}
</style>