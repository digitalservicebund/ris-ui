import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import customPreset from './components/customPreset'
import App from './App.vue';

import './style.css'

const app = createApp(App);

app.use(PrimeVue, {
    theme:{
        preset: customPreset,
        unstyled: true,
    }
});

app.mount('#app');