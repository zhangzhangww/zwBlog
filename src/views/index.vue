<template>
	<webTop></webTop>
	<div class="container1">
		
		<router-view></router-view>
	</div>
</template>

<script>
import webTop from '../components/webTop.vue';
</script>

<style scoped>
	.container1{
		margin: auto;
		width: 1400px;
		padding-top: 127px;
	
	}
</style>