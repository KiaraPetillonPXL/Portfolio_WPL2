import './scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Vue from 'vue'; 

import App from './App.vue'
import router from './router'

library.add(faFacebook, faTwitter, faInstagram)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')