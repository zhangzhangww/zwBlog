<template>
	<!-- <div class="back-image"></div> -->
	<div class="container" style="margin-top: 20px;">
	   
	    <section class="about-content">
	        <div class="profile">
	            <div class="avatar"><img src="@/assets/images/ZYX.jpg" alt="张艺欣" width="100%" height="100%"></div>
	            <div class="profile__title">基本信息</div>
	            <ul class="base-info">
	                <li>姓名：张艺欣</li>
	                <li>昵称：小张</li>
	                <li>性别：男</li>
	            </ul>
	            <div class="profile__title">联系方式</div>
	            <ul class="base-info">
	                <li>扣扣：2538815974</li>
	                <li>微信：ssxpy2538</li>
	                <li>邮箱：2538815974@qq.com</li>
	            </ul>
	            <div class="profile__title">兴趣爱好</div>
	            <div class="base-info" style="text-align:justify;">
	               唱歌 吉他 阅读 设计 听音乐 玩游戏 舞蹈 绘画
	            </div>
	        </div>
	        <div class="introduce">
	            <h3>博客开发</h3>
	            Blog页面采用vue3、后台页面使用vue3+elementui，后端使用nodejs+express+moogoose、数据库使用mongodb。<br /><br />
				 本人职业是一个ui设计师 ，但是对于页面开发也很感兴趣，所以也抽时间学习了前端方面的知识，学习了前端知识后发现没有后端的接口也没法完成项目开发，
				 于是又简单学习了nodejs用于后端api，可以实现基本的功能。<br /><br />
				 渐渐的就有了开发一个博客的想法，由于对设计和样式比较熟悉了，只想练习一下功能的实现，就借用网上的一个开源项目，保留了样式，重新开发功能。尝试一下项目的整体上线流程。
				项目上线过程也是根据教程一步步实现，前端的文件上传，后端的部署等，也走了很多弯路，但总算是完成了。
	
	            <h3>个人经历（万字长文）</h3>
	           
				正在进行中...
	        </div>
	    </section>
	</div>

</template>

<script>
</script>

<style scoped>
	@import url("@/assets/styles/about.css");
    .avatar:hover{
        transform: rotate(360deg);
        transition: all 1s ease-in-out;
    }
</style>