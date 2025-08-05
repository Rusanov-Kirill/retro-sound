import { app, BrowserWindow, Menu } from 'electron'
import path from 'path'
import { format } from 'url'

function createWindow() {
  Menu.setApplicationMenu(null);

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    maximizable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  })

  const indexPath = path.join(__dirname, '../dist/index.html');

  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadURL(format({
      pathname: indexPath,
      protocol: 'file:',
      slashes: true
    }));
  }
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
