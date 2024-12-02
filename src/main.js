import { createApp } from 'vue'
import './assets/styles/bootstrap.min.css'
import './assets/styles/swiper.min.css'
import './style.css'
import './utils/aixin.js'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app=createApp(App)
app.use(router)
app.mount('#app')
