import './assets/main.css'

import { createApp } from 'vue'
import { PrimeVue } from '@primevue/core'
import App from './App.vue'
import router from './router/router'
import Aura from '@primeuix/themes/aura'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'light',
    },
  },
})

app.use(router)

app.mount('#app')
