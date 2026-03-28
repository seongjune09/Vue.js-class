// main.js

import './assets/main.css'

import { createApp } from 'vue'
import App from './components/App.vue/index.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 라우터 from './router.js'


createApp(App).use(라우터).mount('#app')
