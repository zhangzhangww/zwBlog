<template>
  <div class="title">
    <p> Hello! 👋🏾 Can I have a triple connection?</p>
  </div>
  <!-- 视频 -->
  <div class="img-list img-wrapper" v-if="none">
    <div v-for="(item, navIndex) in urlList" :key="navIndex" class="img-box" style="margin-left: 40%;">

      <video autoplay loop controls 
        style="width: 40vw;height: 100%;display: inline-block;margin-bottom: 6%;">
        <source :src="item.video" type="video/mp4">
      </video>
    </div>

  </div>
  <div id="banner" v-if="!none">
    <div class="img-list img-wrapper" >
      <div v-for="(item, navIndex) in imgBoxes" :key="navIndex" class="img-box">
        <div class="info" :class="navIndex == -index + 2 ? 'active' : ''">
        </div>
        <!-- <img v-if="!change" :src="`https://api.yviii.com/img/comic?a=${item.img}`" alt=""> -->
        <img v-if="!change" src="@/assets/images/bac1.png" alt="">
        <video autoplay loop controls v-if="change">
          <source :src="`https://api.yviii.com/video/suiji.php?a=${item.img}`" type="video/mp4">
          <!-- <source  :src="` http://api.yujn.cn/api/xjj.php?type=video`" type="video/mp4"> -->
        </video>
      </div>
    </div>
  </div>
  
  <div class="btn-group" style="position: fixed;">
    <button class="last btn" @click="handleClick('last')">
      <svg t="1686471404424" class="icon left" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2373" width="128" height="128">
        <path
          d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
          fill="" p-id="2374"></path>
      </svg>
    </button>
    <button class="next btn" @click="change = !change" style="font-size: 1.4rem;font-weight: 600;">切换</button>
    <button v-if="none" class="next btn" @click="video" style="font-size: 1.4rem;font-weight: 600;">切换2</button>
    <!-- <button  class="next btn" @click="tonone" style="font-size: 1.4rem;font-weight: 600;">hah</button> -->
    <button class="next btn" @click="handleClick('next')">
      <svg t="1686471404424" class="icon right" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2373" width="128" height="128">
        <path
          d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
          fill="" p-id="2374"></path>
      </svg>
    </button>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from 'vue';
import axios from 'axios';
const change = ref(false);
const none = ref(false);
const urlList = reactive([]);

const imgBoxes = reactive([
  { title: 'One click triple connection1', img: 'bac1.png' },
  { title: 'One click triple connection2', img: 'bac2.png' },
  { title: 'One click triple connection3', img: 'bac3.png' },
  { title: 'One click triple connection4', img: 'bac4.png' },
  { title: 'One click triple connection5', img: 'bac5.png' },
  { title: 'One click triple connection6', img: 'bac6.png' },
  { title: 'One click triple connection7', img: 'bac7.png' },
  { title: 'One click triple connection8', img: 'bac8.png' },
]);

const video = () => {
  console.log(111);
  axios.get(' https://api.yujn.cn/api/kuaimao.php?type=json').then(res => {
    urlList.push(res.data);
    console.log(urlList);
  })
}
 video()

const tonone = () => {
  none.value = !none.value;
}
const index = ref(0);
const animationTime = 0.5;
// 获取图片盒子宽度
const postSize = ref(25);
//获取图片盒子间距
const postSpacing = ref(1.78);
// const postSpacing = computed(() => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--post-spacing').replace('vw', '')));
// const postSize = computed(() => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--post-size').replace('vw', '')));

// 图片盒子的宽度
const imgBoxLength = computed(() => postSize.value + postSpacing.value);
// 根据图片数量动态获取imglist的宽度
const imgListLength = computed(() => (postSize.value + postSpacing.value) * imgBoxes.length);

const throttle = (fn, delay) => {
  let timer = null;
  return function (...args) {
    if (timer) return;
    fn.apply(this, args);
    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
};


// 点击事件
const handleClick = (flag) => {
  const imgListOne = document.querySelector('.img-list');
  // const imgListOne = document.querySelector('.img-box');
  // 点击下一张
  if (flag === 'next') {
    // 整体向左移动
    index.value--;
    imgListOne.style.left = `${imgBoxLength.value * index.value}vw`;
    // imgListOne.style.transition = `${animationTime}s ease`;
    // imgBoxes.unshift(imgBoxes.pop());//将最后一个元素放到第一个元素
    // imgBoxes.push(imgBoxes.shift());


    // 回到第一张
    if (Math.abs(index.value) === imgBoxes.length - 2) {
      index.value = 0;
      imgListOne.style.left = '0';
    }


  } else {
    index.value++;
    imgListOne.style.left = `${imgBoxLength.value * index.value}vw`;
    // imgBoxes.unshift(imgBoxes.pop());//将最后一个元素放到第一个元素
    
     // 回到第一张
    if (index.value > 2) {
      index.value = 0;
      imgListOne.style.left = '0';
    }
  }
};



onMounted(() => {
  const btnGroup = document.querySelector('.btn-group');
  // 设置按钮出现时间
  setTimeout(() => {
    btnGroup.style.opacity = '1';
    btnGroup.style.bottom = '0%';
  }, animationTime * 1000);



});
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/banner.css);
</style>
