import './assets/main.css'

import { createApp } from 'vue'
import CodeBlock from 'vue3-code-block'

import App from './App.vue'
import router from './router'

const app = createApp(App).component('CodeBlock', CodeBlock)

app.use(router)

app.mount('#app')
