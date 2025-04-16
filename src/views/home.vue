<template>
    <div class="container">

        <!-- <div class="con-left box-style"> -->
        <main id="main" class="">
            <div class="row">
                <div class="col-md-9 contpost">
                    <!-- banner -->
                    <div class="main-slider row">
                        <div class="sp-slideshow sp-showno">
                            <div class="sp_index__banner">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper" >
                                        <div class="swiper-slide" v-for="item in count1" :key="item" :style="`transform: translate(${trans}%);`" style="transition: all 0.5s ease 0s;">
                                            <a target="_blank" class="item block-fea small-slider-img" :href="item.link"
                                                style="background-image: url(https://api.yviii.com/img/style);">
                                                <div class="overlay-1"></div>
                                                <div class="title">
                                                    <span class="badge arc_v2">推荐</span>
                                                 {{ item.title }}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="swiper-pagination"></div>
                                    <div class="swiper-button-next" @click="banner(1)"></div>
                                    <div class="swiper-button-prev" @click="banner(-1)"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 文章 -->
                    <div class="row" id="content">
                        <article  class="post-list contt blockimg" id="post_2044"
                            v-for="item in articleList1" :key="item.id">
                            <!-- <router-link :to="`/detail?id=${item.id}`" class="post-list contt blockimg" id="post_2044" v-for="item in articleList1" :key="item.id" > -->
                                <div class="entry-container">
                                <span class="laid_title_l"></span>
                                <div class="block-image feaimg">
                                    <div id="post_a_2044"
                                        style="background-image:url(https://api.yviii.com/bing/uhd_302.php);object-fit:cover;"
                                        data-url="" class="block-fea scrollLoading">
                                        <!-- <img :src="`https://img.paulzzh.com/touhou/random?id=${item.id}`" alt=""> -->
                                        <i class="mask"></i>
                                        <span class="vodlist_top"><em class="voddate voddate_year">
                                                <!-- {{item.fenlei}} -->
                                                精品分享
                                            </em></span>
                                    </div>
                                </div>
                                <header class="entry-header">
                                    <a class="entry-title" :href="item.link" target="_blank">
                                        {{ item.title }}
                                    </a>
                                </header>
                                <div class="entry-summary ss">
                                    <!-- <p>{{item.desc}}</p> -->
                                    <p>{{ item.description }}</p>
                                </div>
                                <div class="entry-meta">
                                    <div class="author-infos"></div>
                                    <span class="separator">/</span>
                                    <a href="https://blog.csdn.net/aaaa_aaab?type=blog" target="_blank">
                                        <!-- {{item.fenlei}} -->
                                        {{ item.author }}
                                    </a>
                                    <span class="separator">/</span>
                                    <time datetime="2024-11-13">一周前</time>
                                    <span class="separator">/</span>
                                    <span class="separator">62阅读</span>
                                    <p class="meta-zan _ts"></p>

                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <Right style="position: sticky;top: 129px;"></Right>
            </div>

        </main>
        <!-- </div> -->
    </div>

</template>

<script setup>
import articleList from '@/utils/article.js';
import articleList1 from '../utils/ceshi';
import Right from '../components/right.vue';
import { ref } from 'vue';

const trans=ref(0)
const count=ref(0)
const count1=ref([
    {id:1,title:'解决npm安装慢问题',description:'测试1',link:'https://blog.csdn.net/aaaa_aaab/article/details/140944939?spm=1001.2014.3001.5502'},
    {id:2,title:'【DeepSeek】本地部署,保姆级教程',description:'测试1',link:'https://blog.csdn.net/aaaa_aaab/article/details/145605273?spm=1001.2014.3001.5501'},
    {id:3,title:'前端学习路线',description:'测试1',link:'https://blog.csdn.net/aaaa_aaab/article/details/144271312?spm=1001.2014.3001.5502'},
])
const banner=(val)=>{
    
    if(val===1){
        count.value++
        if(count.value<=count1.value.length-1){
            trans.value-=100
        }else{
            count.value=0
            trans.value=0
        }
    }else if(val===-1){
        count.value--
        trans.value+=100
        if(count.value.length<=0){
            trans.value=0
            count.value=0
        }
       
    }
}



// // 创建 WebSocket 对象
// const socket = new WebSocket('wss://spark-api.xf-yun.com/v1.1/chat'); // 使用一个 WebSocket 服务器进行测试

// // 设置 WebSocket 连接打开时的回调函数
// socket.onopen = function() {
//    console.log('WebSocket 连接已打开');
// };
// // 设置 WebSocket 接收到消息时的回调函数
// socket.onmessage = function(event) {
//    console.log('接收到消息：', event.data);
// };
// // 设置 WebSocket 连接关闭时的回调函数
// socket.onclose = function() {
//    console.log('WebSocket 连接已关闭');
// };
// // 设置 WebSocket 连接发生错误时的回调函数
// socket.onerror = function(error) {
//    console.error('WebSocket 连接发生错误：', error);
// };

</script>

<style scoped lang="scss">
 @media screen and (max-width: 800px) {
    .container {
    margin-top: 32px;
}
 }
 @media screen and (min-width: 800px) {
    .container {
    margin-top: 54px;
}
 }
.box-style {
    box-shadow: var(--box-shodow);
    border-radius: var(--border-radius);
}


</style>