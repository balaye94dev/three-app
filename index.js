const {app, BrowserWindow} = require("electron")
const url = require("url")
const path =  require("path")
let win 

function createwindow(){
    win = new BrowserWindow({
        title : 'my three app',
        frame : true,
        show : false
    })
    win.loadURL(url.format({
        pathname : path.join(__dirname, 'getstarted.html'),
        protocol : 'file',
        slashes : true
    }))
    win.once('ready-to-show', () => {
        win.show();
    }
    )
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createwindow)