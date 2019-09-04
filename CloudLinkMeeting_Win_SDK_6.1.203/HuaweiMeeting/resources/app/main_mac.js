const electron = require("electron"); 
const { drag } = require("./node_extends/workers/main");
// var http = require("http");
//test
const { app, BrowserWindow, ipcMain, ipcRenderer, dialog, session  } = electron;
const enableMutilInstance = false;

let systemProySetting = getSystemProxy();
let deeplinkingUrl;

global.remoteVars = {
  win: null, 
  dataWin: null, 
  confData: null,
  contactGroups: null, 
  disable_auto_login: false, 
  is_offline: false 
};

if (!enableMutilInstance) {
  if (process.platform === "darwin") {
    require("child_process").exec("killall WeLinkSdk");
  }

  global.isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {});

  if (global.isSecondInstance) {
    //退出程序
    app.quit();
    //结束node进程
    process.exit();
  }
}
let proxy = systemProySetting || "direct://";
app.commandLine.appendSwitch("proxy-server", proxy);
app.commandLine.appendSwitch("proxy-bypass-list", "<local>");
app.commandLine.appendSwitch("proxy-auto-detect");
app.commandLine.appendSwitch("ignore-gpu-blacklist"); 
app.commandLine.appendSwitch("disable-raf-throttling"); 
app.commandLine.appendSwitch("ignore-certificate-errors");
app.commandLine.appendSwitch("disable-directwrite-for-ui");

app.on("ready", () => {
  // mac 上先open-url，再出发ready事件
  let win = initWindow();
  global.sharedObject = { prop1: deeplinkingUrl, systemProySetting: systemProySetting };
});

app.on("activate", () => {
  if (global.remoteVars.win === null || win === null) {
    initWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform === "darwin") {
    app.quit();
  }
});
app.on("will-quit", () => {
  if (process.platform === "darwin") {
    require("child_process").exec("killall WeLinkSdk")
  }
});
// Define custom protocol handler. Deep linking works on packaged versions of the application!
app.setAsDefaultProtocolClient('cloudlink');

// Protocol handler for osx
app.on('open-url', function (event, url) {
  event.preventDefault();
  deeplinkingUrl = url;
  if (win && win.webContents) {
    win.webContents.send("console",deeplinkingUrl);
  } else {
    global.sharedObject = { prop1: deeplinkingUrl, systemProySetting: systemProySetting };
  }
});

let win;
function initWindow() {

  win = new BrowserWindow(
    Object.assign({
      width: 300,
      height: 590,
      minWidth: 300,
      minHeight: 590,
      // skipTaskbar: false,
      title: "CloudLink",
      icon: __dirname + "/resources/icon/tray_icon.png",
      show: false,
      frame: false,
      hasShadow: false,
      transparent: false,
      maximizable: true,
      minimizable: true,
      backgroundColor: "#FFF",
      alwaysOnTop: false
    })
  );

  win.drag = drag;

  let url = require("url").format({
    protocol: "file",
    slashes: true,
    pathname: require("path").join(__dirname, "out/index.html")
  });
  win.loadURL(url);

  win.on('closed',function(){
    if(app){
      app.exit();
    }
  });



  global.remoteVars.win = win;

  global.sharedObject = { systemProySetting: systemProySetting };

  ipcMain.on('getSystemProxy-event', (event, arg) => {
    systemProySetting =  getSystemProxy();
    win.webContents.send('getSystemProxy-event', systemProySetting);
  });

 
  ipcMain.on('getTupPort-message', (event, arg) => {
    getTupPort(arg).then(data => event.sender.send('getTupPort-reply', data));
  });

  session.fromPartition('persist:webviewsession').setProxy({
    proxyRules: 'http=foopy,direct://'
  }, function () {
   
  });
  
  return win;
}

function getSystemProxy() {
  try {
    let systemProySetting;
    const execSync = require('child_process').execSync;
    let proxyHost = execSync("system_profiler SPNetworkDataType | grep 'HTTP Proxy Server' | awk '{print $4}' | head -1");
    let proxyPort = execSync("system_profiler SPNetworkDataType | grep 'HTTP Proxy Port' | awk '{print $4}' | head -1");
    systemProySetting =  proxyHost + proxyPort;
    return systemProySetting;
  } catch (error) {
    return "";
  }
}

function listen(port) {
  const net = require("net");
  const server = new net.Server();
  return new Promise(function listenPromise(resolve, reject) {
    server.on("error", err => {
      server.close();
      if (err.code === "ENOTFOUND") {
        resolve(false);
      }
      resolve(false);
    });

    server.listen(port, "127.0.0.1", () => {
      port = server.address().port;
      server.close();
      resolve(true);
    });
  });
}

async function getTupPort(port) {
  port = parseInt(port);
  for (let i = 0; i < 10; i++) {
    const result = await listen(port);
    if (result) {
      return port;
    }
    port += 2;
  }
  return;
}