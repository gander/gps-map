import {createApp} from 'vue';
import App from '@/App.vue';
import OpenLayersMap from 'vue3-openlayers';

createApp(App).use(OpenLayersMap, {debug: import.meta.env.DEV}).mount('#app');
