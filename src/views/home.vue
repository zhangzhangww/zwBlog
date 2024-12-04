<template>

    <div class="container">
        <div class="con-left box-style">
            <!-- banner -->
            <div class="main-slider row">
                <div class="sp-slideshow sp-showno">
                    <div class="sp_index__banner">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="item in 2" :key="item">
                                    <a class="item block-fea small-slider-img" href=""
                                        style="background-image: url(https://api.yviii.com/img/style);"
                                        >
                                        <div class="overlay-1"></div>
                                        <div class="title">
                                            <span class="badge arc_v2">推荐</span>
                                            自定义chrome浏览器主页
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 文章 -->
            <a :href="item.link" target="_blank"  class="post-list contt blockimg" id="post_2044" v-for="item in articleList1" :key="item.id" >
            <!-- <router-link :to="`/detail?id=${item.id}`" class="post-list contt blockimg" id="post_2044" v-for="item in articleList1" :key="item.id" > -->
                <span class="laid_title_l"></span>
                <div class="entry-container">
                    <div class="block-image feaimg">
                        <div id="post_a_2044" 
                            style="background-image:url(https://api.yviii.com/bing/uhd_302.php);object-fit:cover;"
                            data-url=""
                            class="block-fea scrollLoading">
                            <i class="mask"></i>
                            <span class="vodlist_top"><em class="voddate voddate_year">
                                <!-- {{item.fenlei}} -->
                                精品分享
                            </em></span>
                        </div>
                    </div>
                    <header class="entry-header">
                        <span class="entry-title">
                           {{item.title}}
                        </span>
                    </header>
                    <div class="entry-summary ss">
                        <!-- <p>{{item.desc}}</p> -->
                        <p>{{item.description}}</p>
                    </div>
                    <div class="entry-meta">
                        <div class="author-infos"></div>
                        <span class="separator">/</span>
                        <a href="https://blog.csdn.net/aaaa_aaab?type=blog" target="_blank">
                            <!-- {{item.fenlei}} -->
                            {{item.author}}
                        </a>
                        <span class="separator">/</span>
                        <time datetime="2024-11-13">一周前</time>
                        <span class="separator">/</span>
                        <span class="separator">62阅读</span>
                        <p class="meta-zan _ts"></p>

                    </div>
                </div>
            </a>
        </div>
        <Right style="position: sticky;top: 20px;"></Right>
       
    </div>

</template>

<script setup>
import articleList from '@/utils/article.js';
import articleList1 from '../utils/ceshi';
import Right from '../components/right.vue';

</script>

<style scoped lang="scss">

.box-style {
    box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.22);
    border-radius: 8px;
}


.container {
    display: flex;
    width: 1300px;
    margin: auto;
    gap: 12px;

    .con-left {
        width: 75%;
        min-height: 800px;
        background: white;
        padding: 20px;

        .banner {
            width: 100%;
            height: 335px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }

    }

   
}
</style>