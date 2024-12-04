<template>
	<!-- 登陆和注册 -->
	<div class="myCenter in-up-container my-animation-hideToShow">
		<!-- 背景图片 -->
		<img class="my-el-image" style="position: absolute" v-once lazy src="@/assets/images/bac1.png" fit="cover">
		<div slot="error" class="image-slot"></div>
		</img>
		<div class="in-up" id="loginAndRegist">
			<div class="form-container sign-up-container">
				<div class="myCenter">
					<h1>注册</h1>
					<input v-model="registList.username" type="text" maxlength="30" placeholder="用户名">
					<input v-model="registList.password" type="password" maxlength="30" placeholder="密码">
					<input v-model="registList.email" type="email" placeholder="邮箱">
					<input v-model="registList.code" type="text" placeholder="验证码" disabled>
					<a style="margin: 0" href="#" @click="changeDialog('邮箱验证码')">获取验证码</a>
					<button @click="regist()">注册</button>
				</div>
			</div>
			<div class="form-container sign-in-container">
				<div class="myCenter">
					<h1>登录</h1>
						<input v-model="ruleForm.username" type="text" placeholder="用户名/邮箱/手机号">
						<input v-model="ruleForm.password" type="password" placeholder="密码">
					<a href="#" @click="changeDialog('找回密码')">忘记密码？</a>
					<button @click="login(ruleForm)">登录</button>
				</div>
			</div>
			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-panel myCenter overlay-left">
						<h1>已有帐号？</h1>
						<p>请登录🚀</p>
						<button class="ghost" @click="signIn()">登录</button>
					</div>
					<div class="overlay-panel myCenter overlay-right">
						<h1>没有帐号？</h1>
						<p>立即注册吧😃</p>
						<button class="ghost" @click="signUp()">注册</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
// 	import Cookies from 'js-cookie'
// 	import {
// 		debounce,
// 		throttle
// 	} from 'lodash'
// 	import router from '../router';
// 	import {
// 		ElMessage
// 	} from 'element-plus'
// 	import {
// 		addUser,
// 		getLogin
// 	} from '../api/user.js'
// import { reactive } from 'vue';
	//定义表单校验规则
	const rules = reactive({
		username: [{
			required: true,
			massage: '请输入用户名',
			trigger: 'blur'
		}, {
			min: 5,
			max: 16,
			message: '请输入长度5~16非空字符',
			trigger: 'blur'
		}],
		password: [{
			required: true,
			massage: '请输入密码',
			trigger: 'blur'
		}, {
			min: 5,
			max: 16,
			message: '请输入长度5~16非空字符',
			trigger: 'blur'
		}],
	})
	// 登录功能
	const ruleForm = reactive({
		username: 'xiaozhang',
		password: '',
	})
	const ruleData = ref(null)
	// const login =throttle( (ruleForm) => {
	// 			getLogin(ruleForm).then(({
	// 				data
	// 			}) => {
	// 				if (data.code === 20000) {
	// 					ElMessage({
	// 						message: '登录成功',
	// 						type: 'success',
	// 					})
	// 					//创建cookies
	// 					Cookies.set('token', data.token)
	// 					router.push('/admin/article')
	// 				} else {
	// 					ElMessage({
	// 						message: data.message,
	// 						type: 'error',
	// 					})
	// 				}
	// 			})
	// },1000)
	//注册功能
	const registList=reactive({
		username:'',
		password:'',
		email:'',
		code:''
	})
	const regist = () => {
		addUser(registList)
	}

	//登录注册切换
	const signIn = () => {
		document.querySelector("#loginAndRegist").classList.remove('right-panel-active');
	}
	const signUp = () => {
		document.querySelector("#loginAndRegist").classList.add('right-panel-active');
		registList.username=''
		registList.password=''
		registList.email=''
	}
	
</script>
<style scoped>
	.in-up-container {
		height: 100vh;
		position: relative;
	}

	.in-up {
		opacity: 0.9;
		border-radius: 10px;
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.15);
		position: relative;
		overflow: hidden;
		width: 750px;
		max-width: 100%;
		min-height: 450px;
		margin: 10px;
	}

	.in-up p {
		font-size: 14px;
		letter-spacing: 1px;
		margin: 20px 0 30px 0;
	}

	.in-up a {
		color: black;
		font-size: 14px;
		text-decoration: none;
		margin: 15px 0;
	}

	.form-container {
		position: absolute;
		height: 100%;
		transition: all 0.5s ease-in-out;
	}

	.sign-in-container {
		left: 0;
		width: 50%;
	}

	.sign-up-container {
		left: 0;
		width: 50%;
		opacity: 0;
	}

	.form-container div {
		background: white;
		flex-direction: column;
		padding: 0 20px;
		height: 100%;
	}

	.form-container input {
		background: #EEEEEE;
		border-radius: 2px;
		border: none;
		padding: 12px 15px;
		margin: 10px 0;
		width: 90%;
		outline: none;
	}

	.in-up button {
		border-radius: 2rem;
		border: none;
		background: #ff4b2b;
		color: white;
		font-size: 16px;
		font-weight: bold;
		padding: 12px 45px;
		letter-spacing: 2px;
		cursor: pointer;
	}

	.in-up button:hover {
		/* animation: scale 0.8s ease-in-out; */
	}

	.in-up button.ghost {
		background: transparent;
		border: 1px solid white;
	}

	.sign-up-container button {
		margin-top: 20px;
	}

	.overlay-container {
		position: absolute;
		left: 50%;
		width: 50%;
		height: 100%;
		overflow: hidden;
		transition: all 0.5s ease-in-out;
	}

	.overlay {
		background: linear-gradient(to right, #ff4b2b, #ff416c);
		color: #ffffff;
		position: relative;
		left: -100%;
		height: 100%;
		width: 200%;
	}

	.overlay-panel {
		position: absolute;
		top: 0;
		flex-direction: column;
		height: 100%;
		width: 50%;
		transition: all 0.5s ease-in-out;
	}

	.overlay-right {
		right: 0;
		transform: translateY(0);
	}

	.overlay-left {
		transform: translateY(-20%);
	}

	.in-up.right-panel-active .sign-in-container {
		transform: translateY(100%);
	}

	.in-up.right-panel-active .overlay-container {
		transform: translateX(-100%);
	}

	.in-up.right-panel-active .sign-up-container {
		transform: translateX(100%);
		opacity: 1;
	}

	.in-up.right-panel-active .overlay {
		transform: translateX(50%);
	}

	.in-up.right-panel-active .overlay-left {
		transform: translateY(0);
	}

	.in-up.right-panel-active .overlay-right {
		transform: translateY(20%);
	}

	.user-container {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	.user-info {
		width: 80%;
		z-index: 10;
		margin-top: 70px;
		height: calc(100vh - 90px);
		margin-bottom: 20px;
		border-radius: 10px;
		overflow: hidden;
	}

	.user-left {
		width: 50%;
		background: rgba(255, 255, 255, 0.7);
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: auto;
		padding: 20px;
	}

	.user-right {
		width: 50%;
		background: rgba(255, 255, 255, 0.5);
		padding: 20px;
	}

	.user-title {
		text-align: right;
		user-select: none;
	}

	.user-content {
		text-align: left;
	}

	.user-title div {
		height: 55px;
		line-height: 55px;
		text-align: center;
	}

	.user-content>div {
		height: 55px;
		display: flex;
		align-items: center;
	}

	.user-content>>>.el-input__inner,
	.user-content>>>.el-textarea__inner {
		border: none;
		background: rgba(255, 255, 255, 0.3);
	}

	.user-content>>>.el-input__count {
		background: rgba(0, 0, 0, 0);
		user-select: none;
	}

	.changeInfo {
		color: white;
		font-size: 0.75rem;
		cursor: pointer;
		background: orange;
		padding: 3px;
		border-radius: 0.2rem;
		user-select: none;
	}

	@media screen and (max-width: 920px) {
		.user-info {
			width: 90%;
		}

		.user-left {
			width: 100%;
		}

		.user-right {
			display: none;
		}
	}

	/* 居中 */
	.myCenter {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.myCenter>h1 {
		font-size: 2em
	}

	.my-animation-hideToShow {
		animation-name: hideToShow
	}

	.my-el-image {
		width: 100%;
		height: 100%;
	}

	.my-el-image .image-slot {
		width: 100%;
		height: 100%;
	}
</style>