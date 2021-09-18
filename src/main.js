import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import api from './api/index.js'

const app = createApp(App)
app.config.globalProperties.$api = api

app.use(router)
app.use(store)
app.use(ElementPlus, { size: 'small' })
app.mount('#app')
