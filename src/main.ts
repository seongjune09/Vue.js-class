import './assets/main.css'

import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App).use(router).mount('#app')