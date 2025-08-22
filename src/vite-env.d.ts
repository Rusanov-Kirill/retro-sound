/// <reference types="vite/client" />

interface Window {
    electronApp: {
        window: {
            close: () => Promise<void>,
        }
    }
}