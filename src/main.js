import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js'

import axios from 'axios'
import config from './config/index.js'

axios.get(config.mockApi + '/test').then(res => {
  console.log(res)
})

console.log('环境变量', process.env)
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
