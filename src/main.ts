import './assets/main.css'

import { createApp } from 'vue'
import { PrimeVue } from '@primevue/core'
import App from './App.vue'
import router from './router/router'
import { MyPreset } from './theme/presets'


const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: 'light',
      prefix: 'p'
    },
  },
})

app.use(router)

app.mount('#app')
