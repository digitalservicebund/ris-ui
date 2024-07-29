import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import customPresets from './components/customPresets'
import App from './App.vue';
import 'primeicons/primeicons.css';

import './style.css'

const app = createApp(App);

app.use(PrimeVue, {
    theme:{
        preset: customPresets,
        unstyled: true,
    }
});

app.mount('#app');