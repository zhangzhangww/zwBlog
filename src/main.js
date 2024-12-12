import { createApp } from 'vue'
import './assets/styles/bootstrap.min.css'
import './assets/styles/swiper.min.css'
import './style.css'
import './utils/aixin.js'
import { createPinia } from 'pinia'
import PiniaPluginPersistedstate from "pinia-plugin-persistedstate"
import router from './router'
import App from './App.vue'
import highlight from 'highlight.js'
import "highlight.js/styles/atom-one-dark.css"

const app=createApp(App)

// 配置Pinia并设置持久化缓存
const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)

// 配置Markdown语法高亮
app.directive("highlight",function(el){
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      highlight.highlightBlock(block);
    })
  })

  app.use(pinia)

app.use(router)
app.mount('#app')
