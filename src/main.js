import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import router from './router'
import il8n from './locales/i18n'
import 'vant/lib/index.css';


createApp(App)
.use(Vant)
.use(router)
.use(il8n)
.mount('#app')
