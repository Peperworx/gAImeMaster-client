const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    win = new BrowserWindow({ width: 1200, height: 600, 'minWidth': 950, 'minHeight': 600, frame: false, transparent: true })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'login.html'),
        protocol: 'file:',
        slashes: true
    }))
}


app.on('ready', createWindow)