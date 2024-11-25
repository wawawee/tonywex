/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MORALIS_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  global: Window;
  Buffer: typeof Buffer;
  ethereum?: {
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (event: string, callback: (params: any) => void) => void;
    removeListener: (event: string, callback: (params: any) => void) => void;
  };
}