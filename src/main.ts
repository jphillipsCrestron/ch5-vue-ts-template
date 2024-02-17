import { createApp } from 'vue';
import App from './App.vue';

// Initialize eruda for panel/app debugging capabilities (in dev mode only)
if (import.meta.env.VITE_APP_ENV === 'development') {
    import('eruda').then(({ default: eruda }) => {
        eruda.init();
    });
}

createApp(App).mount('#app');