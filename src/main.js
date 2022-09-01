import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'
import * as echarts from 'echarts'
import axios from 'axios';
// import VueAxios from 'vue-axios'

// Vue.prototype.$axios = axios;

const app = createApp(App)
installElementPlus(app)

app.echarts = echarts;
app
    .use(store)
    .use(router)
  
    .mount('#app');

