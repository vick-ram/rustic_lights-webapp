import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'
import 'flowbite'
import 'flowbite/dist/flowbite.css';
import {router} from "./routes";

const pinia = createPinia()

createApp(App)
    .use(router)
    .mount('#app')
