const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const electron = require('electron'),
    ipc = electron.ipcMain;
const url = require('url')
const path = require('path')
const simpleGit = require('simple-git');

simpleGit().pull();

let win

function createWindow() {
    win = new BrowserWindow({ webPreferences: { nodeIntegration: true }, backgroundColor:"#222", width: 1200, height: 600, 'minWidth': 950, 'minHeight': 600, frame: false, transparent: true })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'login.html'),
        protocol: 'file:',
        slashes: true
    }))
}





ipc.on('close', _ => {
    status = 1;
    mainWindow = null;
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

var maximized = false;
ipc.on('maximize', _ => {
    maximized = !maximized;
    win.setFullScreen(maximized);
});

ipc.on('minimize', _ => {
    win.minimize();
});


app.on('ready', createWindow)