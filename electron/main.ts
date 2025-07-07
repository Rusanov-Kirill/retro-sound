import { app, BrowserWindow, Menu } from 'electron'
import path from 'path'

function createWindow() {
  Menu.setApplicationMenu(null);

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  })

  const devServerUrl = process.env.VITE_DEV_SERVER_URL || 'http://localhost:5173'
  
  mainWindow.loadURL(devServerUrl).catch((error) => {
    console.log('Dev server not available, loading from dist/index.html:', error.message)
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
