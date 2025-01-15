/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MODE: string; // "development" | "production"
    readonly BASE_URL: string; // Base URL de Vite
    readonly VITE_SOME_KEY?: string; // Ejemplo para variables personalizadas
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }