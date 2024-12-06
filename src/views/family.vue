<template>
	<div class="back-image"></div>
	<div class="container1">
	    <div class="lover">
	        <div class="lover-item">
	            <img src="@/assets/images/ZYX.jpg" alt="ZYX">
	            <span>ZYX</span>
	        </div>
	        <div class="lover-item">
	            <img src="@/assets/images/heart.svg" class="heart" alt="heart">
	        </div>
	        <div class="lover-item">
	            <img src="@/assets/images/WHR.jpg" alt="WHR">
	            <span>WHR</span>
	        </div>
	    </div>
	    <div class="story">
	        <div class="story-time">
	            <div class="time-title">
	                <span>这是我们一起走过的</span>
	            </div>
					<div class="time-count">
						<span>第</span>
						<span class="time-num">{{ Y }}</span>
						<span>年</span>
						<span class="time-num">{{ M }}</span>
						<span>月</span>
						<span class="time-num">{{ D }}</span>
						<span>日</span>
						<span class="time-num">{{ h }}</span>
						<span>时</span>
						<span class="time-num">{{ m }}</span>
						<span>分</span>
						<span class="time-num">{{ s }}</span>
						<span>秒</span>
					</div>
	        </div>
	        <ol class="story-line">
	            <li class="story-line-item" v-for="(item, index) in timeline" :key="index">
	                <div class="content-wrap">
	                    <div class="content-text" >{{item.familyContent}}</div>
	                    <div class="content-time"><span>☁</span> {{item.familyTime}}</div>
	                </div>
	            </li>
	        </ol>
	        <div class="publish">❀</div>
	    </div>
	</div>

</template>

<script setup lang="ts">
	import dateDiff from '../utils/dataDiff.ts';
	let { Y, M, D, h, m, s } = toRefs(reactive(dateDiff('2022/9/12')))
	let timer:NodeJS.Timer | null = null
	onMounted(() => {
		timer = setInterval(() => {
			s.value += 1
			if (s.value > 59) { s.value = 0; m.value += 1 }
			if (m.value > 59) { m.value = 0; h.value += 1 }
		}, 1000)
	})
	onUnmounted(() => timer && clearInterval(timer))
	
	const timeline = ref([
	    {
            familyContent: '2022年9月12日，我们相识于校园',
            familyTime: '2022-09-12',
        },
	    {
            familyContent: '2022年9月12日，我们相识于校园',
            familyTime: '2022-09-12',
        },
	    {
            familyContent: '2022年9月12日，我们相识于校园',
            familyTime: '2022-09-12',
        },
	])
	

</script>

<style scoped>
	@import url("@/assets/styles/family.css");
</style>