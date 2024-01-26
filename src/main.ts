import {createApp} from 'vue';
import App from '@/App.vue';
import OpenLayersMap from 'vue3-openlayers';
import * as Sentry from '@sentry/vue';

const app = createApp(App);

if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
        app,
        tunnel: '/bugs-tunnel',
        dsn: import.meta.env.VITE_SENTRY_DSN,
        environment: import.meta.env.MODE,
        integrations: [Sentry.replayIntegration()],
        replaysSessionSampleRate: 1.0,
        replaysOnErrorSampleRate: 1.0,
    });
}

app.use(OpenLayersMap, {debug: import.meta.env.DEV});
app.mount('#app');

