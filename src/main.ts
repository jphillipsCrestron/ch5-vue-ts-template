import { createApp } from 'vue';
// Uncomment the below line if you are using CH5 components.
// import '@crestron/ch5-theme/output/themes/light-theme.css' // Crestron CSS. @crestron/ch5-theme/output/themes shows the other themes that can be used.
import App from './App.vue';

// Initialize eruda for panel/app debugging capabilities (in dev mode only)
if (import.meta.env.VITE_APP_ENV === 'development') {
    import('eruda').then(({ default: eruda }) => {
        eruda.init();
    });
}

createApp(App).mount('#app');