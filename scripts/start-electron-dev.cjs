const { spawn } = require('child_process')

const electronPath = require('electron')

const child = spawn(electronPath, ['.'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    VITE_DEV_SERVER_URL: 'http://localhost:5173',
    NODE_ENV: 'development',
  },
})

child.on('error', (err) => {
  console.error('Failed to start Electron process:', err)
})