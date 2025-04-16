<script setup>
import {
    onUnmounted,
    ref
} from 'vue';
import emitter from './utils/emitter';
const loading = ref(false);
// 确保事件处理函数具有正确的类型  
const handleLoading = (a) => {
    loading.value = a;
};
// 注册控制加载事件  
emitter.on('loading', handleLoading);
onUnmounted(() => {
    // 确保 emitter.off 能够正确移除监听器  
    // 如果 emitter.off 需要特定的回调函数，则使用 handleLoading  
    emitter.off('loading', handleLoading);
});

</script>

<template>
  <!-- 加载界面 -->
	<Transition name="loading">
		<div v-if="loading" class="loader-wrapper">
      <div class="spinner">
  <div class="outer">
    <div class="inner tl"></div>
    <div class="inner tr"></div>
    <div class="inner br"></div>
    <div class="inner bl"></div>
  </div>
  <p style="color: white;text-align: center;margin-top: 30px;font-size: 10px;font-weight: 500;">加载中...</p>
</div>
			<!-- <span class="loader">
				<span class="loader-inner"></span>
			</span> -->
		</div>
	</Transition>
  <!-- 主界面 -->
  <router-view></router-view>
</template>

<style scoped>
/* loading.css */
.spinner {
  position: absolute;
  width: 128px;
  height: 128px;
  top: calc(50% - 64px);
  left: calc(50% - 64px);
  transform: perspective(206px) rotateX(45deg);
}
 
.outer {
  box-sizing: border-box;
  animation: spin 3s linear infinite;
  height: 100%;
}
 
.inner {
  position: absolute;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  animation: spin 1.8s ease-in-out infinite;
}
.inner.tl {
  top: 0;
  left: 0;
  border-top: 2px solid #531430;
  border-left: 4px solid #531430;
}
.inner.tr {
  top: 0;
  right: 0;
  border-top: 2px solid #e04960;
  border-right: 4px solid #e04960;
}
.inner.br {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid #531430;
  border-right: 4px solid #531430;
}
.inner.bl {
  bottom: 0;
  left: 0;
  border-bottom: 2px solid #e04960;
  border-left: 4px solid #e04960;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}



.loader-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		background-color: rgb(0, 0, 0);
		display: flex;
		justify-content: center;
		align-items: center;
    z-index: 999999;
	}
 
	.loader {
		display: inline-block;
		width: 30px;
		height: 30px;
		position: relative;
		border: 4px solid #42b883;
		animation: loader 2s infinite ease;
	}
 
	.loader-inner {
		vertical-align: top;
		display: inline-block;
		width: 100%;
		background-color: #42b883;
		animation: loader-inner 2s infinite ease-in;
	}
 
	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}
 
		25% {
			transform: rotate(180deg);
		}
 
		50% {
			transform: rotate(180deg);
		}
 
		75% {
			transform: rotate(360deg);
		}
 
		100% {
			transform: rotate(360deg);
		}
	}
 
	@keyframes loader-inner {
		0% {
			height: 0%;
		}
 
		25% {
			height: 0%;
		}
 
		50% {
			height: 100%;
		}
 
		75% {
			height: 100%;
		}
 
		100% {
			height: 0%;
		}
	}
 
	.loading-move,
	.loading-enter-active,
	.loading-leave-active {
		transition: all 0.5s ease-in-out;
	}
 
	.loading-enter-from,
	.loading-leave-to {
		opacity: 0 !important;
	}

</style>
