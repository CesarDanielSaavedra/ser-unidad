/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MODE: string; // "development" | "production"
    readonly BASE_URL: string; // Base URL Vite
    readonly VITE_SOME_KEY?: string; 
    readonly VITE_PUBLIC_URL: string; 
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }