import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'

const app =createApp(App)
    app.mount('#app')
    app.use(router)
