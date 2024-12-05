<template>
	<div class="box1 ">
		<p v-if="copiedUrlMessage" class="copied-message">{{ copiedUrlMessage }}</p>
		<div class="left">
			<header class="page-header">
				<h1 class="page-title">
					<span>表情包合集</span>
					<em class="num">{{expressionList.length}}</em>
				</h1>
				<div class="page-des">
					<p>点击表情包可以复制其地址。</p>
				</div>
				<div class="page-lei">
					<ul>
						<li v-for="(item, index) in menuList" :key="item.name" @click="requestLink(item.link, index)">
							<span :class="index == navIndex ? 'active' : ''">{{ item.name }}</span>
						</li>

					</ul>
				</div>
			</header>
		</div>

		<div class="right">
			<div class="item" v-for="item in expressionList" :key="item.name" @click="copyText(item.url)">
				<img :src="item.url" alt="">
				{{ item.name }}
			</div>
		</div>

	</div>
</template>
<script setup>
import axios from 'axios'
const expressionList = ref()
const navIndex = ref(0)


const menuList = ref([
	{ name: 'HONKAI3', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/HONKAI3.json' },
	{ name: 'Arcaea', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/Arcaea.json' },
	{ name: 'Convenience_Store_Notes2', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/Convenience_Store_Notes2.json' },
	{ name: 'Cute_Emoji', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/Cute_Emoji.json' },
	{ name: 'Heo-100', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/Heo-100.json' },
	{ name: 'Mafumafu', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/Mafumafu.json' },
	{ name: 'Majotabi', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/Majotabi.json' },
	{ name: 'Marup', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/Marup.json' },
	{ name: 'QQ', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/QQ.json' },
	{ name: 'Set667', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/Set667.json' },
	{ name: 'Sweetie_Bunny', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/Sweetie_Bunny.json' },
	{ name: 'TsuriMeJu', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/TsuriMeJu.json' },
	{ name: 'Yurui-Neko', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/Yurui-Neko.json' },
	{ name: 'aliwangwang', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/aliwangwang.json' },
	{ name: 'aru', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/aru.json' },
	{ name: 'baitian', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/baitian.json' },
	{ name: '小A和小B', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/小A和小B.json' },
	{ name: '正经人', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/正经人.json' },
	{ name: '灵笼', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/灵笼.json' },
	{ name: '熊孩子', link: 'https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/熊孩子.json' },
])

const requestLink = (link, index) => {
	navIndex.value = index
	axios.get(link).then(res => {
		expressionList.value = res.data.all

	})
}
// 复制文本
// 用于存储复制成功后的消息
const copiedUrlMessage = ref('');

// 复制文本的函数
const copyText = async (url) => {
	try {
		await navigator.clipboard.writeText(url);
		copiedUrlMessage.value = 'URL已复制到剪贴板！';

		// 可选：在一段时间后隐藏复制成功的提示信息
		setTimeout(() => {
			copiedUrlMessage.value = '';
		}, 2000); // 2秒后隐藏
	} catch (err) {
		console.error('无法复制文本：', err);
		copiedUrlMessage.value = '复制URL失败，请尝试再次点击。';
	}
};
axios.get('https://cdn.jsdelivr.net/npm/iemotion-pic@latest/dist/7bu图床/HONKAI3.json').then(res => {
	expressionList.value = res.data.all
})
</script>
<style scoped lang="scss">
// 手机
@media screen and (max-width: 768px) {
	.box1 {
		width: 100%;
		padding: 16px;
		margin-top: 20px;

		.left {
			width: 20%;
			min-width: 140px;

			.page-header {
				top: 10%;
			}
		}
		.item{
			width: 100%;
		}
	}
}

// 电脑端
@media screen and (min-width: 768px) {
	.box1 {
		width: 1300px;
		margin: auto;
		margin-top: 54px;

		.left {
			width: 20%;
			min-width: 284px;

			.page-header {
				top: 16%;
			}
		}
		.item{
			width: 19%;
		}
	}
}

.copied-message {
	position: fixed;
	top: 14%;
	right: 4%;
	color: rgb(113, 198, 71);
	margin-top: 10px;
	background-color: rgb(240, 249, 235);
	z-index: 9999;
	padding: 10px 20PX;
	border-radius: var(--border-radius);
}

.box1 {
	
	display: flex;
	height: 100%;

	.left {
		width: 20%;

		.page-header {
			position: sticky;


			//标题
			.page-title {
				margin: 0;
				color: rgb(247, 195, 196);

				.num {
					position: absolute;
					font-size: 0.5em;
					margin: .5em .75em;

				}
			}

			.page-des {
				margin-top: 8px;
				width: 80%;
				// background-color: #F27875;
				background-color: rgb(255, 155, 64);
				color: #fff;
				font-size: 13px;
				border-radius: 4px;
				padding: 2px 6px;
			}
		}

		//分类
		.page-lei {
			position: relative;
			height: 720px;
			overflow: auto;
			//去掉侧边滑动条

			&::-webkit-scrollbar {
				display: none;
			}

			.scroll-container {
				overflow: hidden;
			}

			ul {
				padding: 1em;


				li {
					margin-bottom: 12px;
					font-size: 13px;
					height: 28px;
					line-height: 42px;
					cursor: pointer;


					&:hover,
					.active {
						color: #F27875;

						&:before {
							--main-color: var(--custom-main-hue, 359deg) var(--custom-main-sat, 83%) var(--custom-main-lig, 62%);
							content: '';
							width: 6px;
							height: 42px;
							position: absolute;
							left: 0;
							margin: auto;
							transition: .5s;
							background: linear-gradient(180deg, #0000, hsl(var(--main-color) / 20%), #0000) no-repeat center / 2px 100%, radial-gradient(circle, hsl(var(--main-color) / 70%) 50%, #0000 50%) no-repeat center / 6px 6px;
						}
					}


				}
			}
		}


	}

	.right {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		text-align: center;
		width: 78%;
		// min-height: 80vh;
		background-color: var(--bg-secondary);
		border-radius: var(--border-radius);
		flex-direction: row;
		flex-wrap: wrap;
		padding: 16px;
		gap: 8px;

		.item {
			display: flex;
			align-items: center;
			flex-direction: column;
			padding: 10px 16px 16px;
			background-color: rgb(235, 232, 232);
			border-radius: 8px;
			box-sizing: border-box;
			cursor: pointer;
			box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.22);
			border-radius: 8px;
			border: 1px solid #EBEEF5;

			img {
				width: 100px;
				height: 100px;
				object-fit: cover;
			}
		}
	}
}
</style>