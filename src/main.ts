import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  dataV from '@jiaminghi/data-view'
const app = createApp(App);
app.use(router);
app.use(dataV);
app.mount('#app');
