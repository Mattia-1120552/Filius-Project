import './assets/main.css'

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue';
import router from './router/router'

const license = import.meta.env.VUE_LICENSE_KEY
const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'light',
      prefix: 'p'
    },
  },
  license: license
})

app.use(router)

app.mount('#app')
