import { createRouter, createWebHashHistory } from 'vue-router'
import emitter from '@/utils/emitter'



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
			{
				path: '/expression',
				name: 'expression',
				component: () => import('@/views/expression.vue'),
			},
			{
				path: '/bullet',
				name: 'bullet',
				component: () => import('@/views/bullet.vue'),
			},
			{
				path: '/family',
				name: 'family',
				component: () => import('@/views/family.vue'),
			},
			{
				path: '/about',
				name: 'about',
				component: () => import('@/views/about.vue'),
			},
			{
				path: '/swiper',
				name: 'swiper',
				component: () => import('@/views/swiper.vue'),
			},
			{
				path: 'MapContainer',
				name: 'MapContainer',
				component: () => import('@/components/MapContainer.vue'),
			},
			
		],
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login.vue'),
	},
	


]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
	if (!visitedRoutes.has(to.path)) {
	  emitter.emit('loading', true)
	}
	next()
  })
   
  router.afterEach((to) => {
	if (!visitedRoutes.has(to.path)) {
	  visitedRoutes.add(to.path)
	  emitter.emit('loading', false)
	}
  })


export default router