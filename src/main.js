import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/tailwind.css"
import '../node_modules/flowbite-vue/dist/index.css'
import Vue3Lottie from 'vue3-lottie'
import store from './stores/store.js'

const app = createApp(App)

app.use(router)
app.use(store);
app.use(Vue3Lottie)
app.mount('#app')
