import '~/assets/sass/style.scss'
import 'semantic-ui-button/button.min.css'
import 'semantic-ui-grid/grid.min.css'
import 'semantic-ui-header/header.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
