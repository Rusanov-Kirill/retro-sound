import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld('electronApp', {
    window: {
        close: () => ipcRenderer.invoke('window-close')
    }
})