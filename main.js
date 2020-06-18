const {app, BrowserWindow} = require('electron');
const IPFS = require('ipfs');

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

async function ipfs_action(){
    try {
        const node = await IPFS.create();
        const id = await node.id();
        const version = await node.version();
        console.log(id);
        console.log('Version: ', version);
        const files = [{path: '/tmp/myfile.txt', content: 'ABC'}];
        //const filesAdded = node.add(files);
        for await (const result of node.add(files)) {
            console.log(result);
        };
        //console.log(filesAdded);
        //const a = await filesAdded[0].path;
        //console.log('Added file:', a, filesAdded[0].hash);
    }
    catch (err) {
        console.error(err);
    }
  document.getElementById('display_ipfs').innerHTML = 'It worked.';
}


app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

