import { app, BrowserWindow, Menu, ipcMain } from 'electron'
import path from 'path'
import { format } from 'url'
import fs from 'fs-extra'

const BASE_URL = 'http://localhost:5173'
const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged
const musicDir = path.join(app.getPath('userData'), 'music');

ipcMain.handle('window-close', (event) => {
  const window = BrowserWindow.fromWebContents(event.sender)
  if (window && !window.isDestroyed()) {
    window.close()
  } else console.log("Error: The window was not found or has already been destroyed")
})

function createWindow() {
  Menu.setApplicationMenu(null)

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    maximizable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  const indexPath = path.join(__dirname, '../dist/index.html')

  if (isDev) {
    mainWindow.webContents.openDevTools()
    mainWindow.loadURL(BASE_URL)
  } else {
    mainWindow.loadURL(format({
      pathname: indexPath,
      protocol: 'file:',
      slashes: true
    }))
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  fs.ensureDirSync(musicDir);
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
