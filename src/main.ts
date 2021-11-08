import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import dataV from '@jiaminghi/data-view'
import './assets/scss/index.scss'
import PublicComponent from '@/components/componentInstall';

const app = createApp(App)
app.use(router)
app.use(PublicComponent)
app.use(dataV)
app.mount('#app')
