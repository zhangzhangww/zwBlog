<template>
	<div class="message-form" data-v-21971730>
		<div class="message-form__title" data-v-21971730>留言墙</div>
		<div class="message-form__content" data-v-21971730>
			<input type="text" v-model="form.commentContent" id="bubble_txt" max="25" autocomplete="off"
				placeholder="留下点什么吧，最多25个字～" data-v-21971730>
			<button type="button" id="bubble_btn" @click="sendBullet" data-v-21971730>发射</button><br />
		</div>
		<div class="control">
			<button type="button" id="bubble_btn" @click="pause" data-v-21971730>暂停/播放</button>
			<button type="button" id="bubble_btn" @click="addspeeds" data-v-21971730>加速</button>
			<button type="button" id="bubble_btn" @click="jianspeeds" data-v-21971730>减速</button>
			<button type="button" id="bubble_btn" @click="show" data-v-21971730>显示/隐藏</button>
		</div>
		
	</div>
	<div class="baberrage" style="">
		<vue-danmaku class="danmaku" ref="danmaku" v-model:danmus="danmus" :isSuspend="true" :top="20" useSlot loop
			:speeds="speeds" :channels="12">
			<template v-slot:dm="{ danmu }">
				<div class="danmaku-name">
					<div class="bullet-item">
					<img src="@/assets/images/bag.png" alt="">
					<span  :style="{ color: getRandomColor() }" v-html="danmu"></span>
					</div>
				</div>
			</template>
		</vue-danmaku>
	</div>
	<div class="success-box" v-if="isSuccess">
		<img src="@/assets/images/success.png" alt="">
		<span>发布成功</span>
	</div>
</template>
<script lang="ts" setup>
	import vueDanmaku from 'vue3-danmaku'
	// import { getComments, addComment } from '../api/comment'
	import { reactive, ref, onMounted } from 'vue'
	const colorList = ref(['rgb(204,255,255)', 'white', 'rgb(204,255,204)', 'white', 'rgb(0,255,255)', 'white', 'rgb(255,204,255)', 'pink'],)
	// 生成随机颜色的函数  
	function getRandomColor() {
		const color = colorList.value[Math.floor(Math.random() * 8)]
		return color
	}
	//弹幕列表
	const danmus = reactive(['测试下弹幕效果', '哈哈哈哈', '真不错', '小王最漂亮', '神奇的地方', '啦啦啦啦', ])
	//控制发送弹幕成功提示是否显示
	let isSuccess = ref(false)
	//添加弹幕
	let form = ref({
		commentPeople: '实验室',
		commentContent: ''
	})
	function sendBullet() {
		// addComment(form.value).then(() => {
		// 	getArt()
		// })
		form.value.commentContent = ''
		isSuccess.value = true; // 提交成功显示弹窗
		setTimeout(() => {
			isSuccess.value = false; // 2秒后自动关闭
		}, 2000);
	}
	//获取弹幕列表
	// async function getArt() {
	// 	await getComments().then(({ data }) => {
	// 		danmus.splice(0, danmus.length, ...data.data)
	// 	})

	// }
	// onMounted(() => {
	// 	getArt()

	// });

	const speeds = ref(200);
    const isplay=ref(true)
    const isshow=ref(true)
	const danmaku = ref(null);
	
	
	//是否播放弹幕
	const pause = () => {
		isplay.value=!isplay.value
		if(isplay.value){
			danmaku.value.play();
		}else{
			danmaku.value.pause();
		}
		
	};
	//显示弹幕
	const show = () => {
		isshow.value=!isshow.value
		if(isshow.value){
			danmaku.value.show();
		}else{
			danmaku.value.hide();
		}
		
	};
	
	//弹幕加速
	const addspeeds = () => {
		console.log(speeds.value);
		speeds.value += 20;
	};
	//弹幕减速
	const jianspeeds = () => {
		console.log(speeds.value);
		speeds.value -= 20;
	};
	const scrollDistance = ref(200);
</script>
<style scoped>
	@import url("@/assets/styles/bullet.css");

	.baberrage {
		padding-top: 300px;
		width: 100%;
		height: calc(100vh - 75px);
		overflow: hidden;
		background: url(@/assets/images/bac2.png) no-repeat;
		background-size: cover;
	}

	.danmaku {
		width: 100%;
		height: 100%;
	}
    
	.control{
		margin-top: 20px;
	}
	.control>button{
		margin-right: 12px;
	}
	.control>button:hover{
		background-color: #e73c7e;
		border: 1px solid #fff;
		color: #fff;
		cursor: pointer;
		animation: rightToleft 9s linear both;
	}
	.bullet-item {
		white-space: nowrap;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 30px;
		height: 30px;
		font-size: 16px;
		color: #FFFFFF;
		line-height: 30px;
		padding-right: 20px;
		display: flex;
	}

	img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.success-box {
		width: 120px;
		height: 40px;
		border-radius: 8px;
		background: #F0F9EB;
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		gap: 8px;
		position: absolute;
		top: 22%;
		left: 60%;
		margin-left: -65px;
		margin-top: -65px;
		color: #67C23A;
		text-align: center;
		font-size: 14px;
		font-weight: 400;
	}

	.success-box>img {
		display: inline-block;
		width: 20px;
		height: 20px;
	}
</style>