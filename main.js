const {app, BrowserWindow} = require('electron');
//const IPFS = require('ipfs');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });
  // load first page
  win.loadFile('start_page.html');
  //remove default menu bar from the window
  win.removeMenu();
  // open dev tools - mainly the console
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
