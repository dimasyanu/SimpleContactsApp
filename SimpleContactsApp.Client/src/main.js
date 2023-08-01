import '~/assets/sass/style.scss'
import 'semantic-ui-button/button.min.css'
// import 'semantic-ui-grid/grid.min.css'
// import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'semantic-ui-header/header.min.css'
import 'semantic-ui-form/form.min.css'
import 'semantic-ui-icon/icon.min.css'
import 'semantic-ui-image/image.min.css'
import 'semantic-ui-menu/menu.min.css'
import 'semantic-ui-tab/tab.min.css'
import 'semantic-ui-list/list.min.css'

import '~/assets/sass/home.scss'
import '~/assets/sass/login.scss'
import '~/assets/sass/register.scss'
import '~/assets/sass/profile.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
