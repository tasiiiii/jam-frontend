import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'
import store from './store'

import "primevue/resources/themes/lara-light-indigo/theme.css"

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .mount('#app')
