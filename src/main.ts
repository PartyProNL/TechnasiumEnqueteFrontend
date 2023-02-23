import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './middleware/router'

const application = createApp(App)
application.use(router)
application.mount('#app')