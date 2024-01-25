/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_VERSION: string;
    readonly VITE_SENTRY_DSN: string;
    readonly VITE_UMAMI_ID: string;
    readonly VITE_UMAMI_SRC: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
