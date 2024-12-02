import { createRouter, createWebHashHistory } from 'vue-router'

// 创建一个全局状态来管理首次访问状态
const visitedRoutes = new Set()

const routes = [
	{
		path: '/',
		component: () => import('@/views/index.vue'), // 首页
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/home.vue'),
			},
			{
				path: '/Navigation',
				name: 'Navigation',
				component: () => import('@/views/Navigation.vue'),
			},
			{
				path: '/detail',
				name: 'detail',
				component: () => import('@/views/detail.vue'),
			},
			{
				path: '/chat',
				name: 'chat',
				component: () => import('@/views/aiChat.vue'),
			},
		],
	},
	


]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})




export default router