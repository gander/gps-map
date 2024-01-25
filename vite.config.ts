import {fileURLToPath, URL} from 'node:url';
import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import htmlConfig, {ScriptTag} from 'vite-plugin-html-config';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const headScripts: ScriptTag[] = [];

    if (mode === 'production' && process.env.VITE_UMAMI_ID && process.env.VITE_UMAMI_SRC) {
        headScripts.push({
            'async': true,
            'data-website-id': process.env.VITE_UMAMI_ID,
            'src': process.env.VITE_UMAMI_SRC,
        });
    }

    return {
        plugins: [
            vue(),
            htmlConfig({headScripts}),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        define: {
            'import.meta.env.VITE_APP_VERSION': JSON.stringify(process.env.npm_package_version),
            'import.meta.env.VITE_UMAMI_ID': JSON.stringify(process.env.VITE_UMAMI_ID),
            'import.meta.env.VITE_UMAMI_SRC': JSON.stringify(process.env.VITE_UMAMI_SRC),
        },
    };
});
