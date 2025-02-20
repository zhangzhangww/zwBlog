<template>
  <div class="navigation-ui ">
    
    <div class="nav-content ">
      <div class="mulu">
        <div class="mulu1 " >
          <div v-for="(item,index) in navList" :key="index">
              
              <a :href="'#' + index" class="mulu-item" :class="index==navIndex?'active':''"  @click.prevent="clickNav(index,item)" >
                  <img src="../assets/images/icon/search.svg" alt="">
                  {{item.title}}
              </a>
          </div>
        </div>
      </div>
      <div class="link-box">
        <div class="banner"  @mouseenter="onMouseEnter" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
      <div class="png" :style="pngStyle">
        <img src="../assets/images/nav/castalia.png" alt="Background">
      </div>
      <p :style="textStyle">不止设计</p>
    </div>
          <div class="link " v-for="(content,index) in navList" :key="content.name" >
                <h2 :id="index">{{content.title}}</h2>
                <div class="link-content">
                    <a :href="item.url" class="link-item" v-for="item in content.children" :key="item.name" target="_blank">
                        <div class="link-left">
                            <img :src="item.image?item.image:`https://api.yviii.com/ico/get.php?url=${url=item.url}`" alt="">
                        </div>
                        <div class="link-right">
                            <h3>{{item.name}}</h3>
                            <p>{{item.description}}</p>
                        </div>
                    </a>
                
                </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import  navList  from '@/utils/navigation.js'
const navIndex = ref(0)

const clickNav = (index, item) => {
		navIndex.value = index
    const element = document.getElementById(index);
      element.scrollIntoView({ behavior: 'smooth' });
      
	}


  const startX = ref(0);
const currentX = ref(0);
const pngStyle = ref({
  transition: 'transform 0.3s',
  transform: 'translate(0px, 0px)',
});

const textStyle = ref({
  transition: 'transform 0.3s',
  transform: 'translate(0px, 0px)',
});
  const onMouseEnter = (event) => {
  startX.value = event.clientX;
  pngStyle.value.transition = 'none';
  textStyle.value.transition = 'none';
};
 
const onMouseMove = (event) => {
  currentX.value = event.clientX;//鼠标事件发生时，鼠标指针相对于浏览器窗口的 X 坐标
  const disx = currentX.value - startX.value;//计算鼠标从开始位置到当前位置的水平距离。
  const move = disx / 18;//设定图片应该移动的距离
  const move1 = -disx / 40;
  pngStyle.value.transform = `translate(${move}px, 0px)`;
  textStyle.value.transform = `translate(${move1}px, 0px)`;
};
 
const onMouseLeave = () => {
  pngStyle.value.transition = 'transform 0.3s';
  pngStyle.value.transform = 'translate(0px, 0px)';
  textStyle.value.transform = 'translate(0px, 0px)';
};
</script>
<style scoped lang="scss" >
@import url(@/assets/styles/navigation.css);
</style>