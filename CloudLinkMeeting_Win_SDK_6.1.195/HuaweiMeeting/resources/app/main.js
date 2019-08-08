const electron = require("electron");
const { drag } = require("./node_extends/workers/main");
var fs = require("fs");
var path = require("path");
// var http = require("http");
//test
const { app, BrowserWindow, ipcMain, session } = electron;
const enableMutilInstance = false;

let systemProySetting = getSystemProxy();
const schemePortFileName = "scheme_port.txt";
const timeStampFileName = "last_time_stamp.txt";
const appPath = "HuaweiMeeting";

// 渲染进程数
let renderProcess = {
  count: 0
};

global.remoteVars = {
  renderProcess,
  app: app,
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
    // welink socket client
    let lastTimeStamp = readappdataFile(timeStampFileName);
    if ( lastTimeStamp === "" || lastTimeStamp === undefined) {
      lastTimeStamp = "0";
    }
    let currentTimeStamp = Date.parse(new Date());
    let timeDurition = currentTimeStamp - parseInt(lastTimeStamp);
    if ( timeDurition < 1000 ) {
      app.quit();
      process.exit();
    } else {
    writeAppDataFile(timeStampFileName, currentTimeStamp);
    try {
      var schemePortData = readappdataFile(schemePortFileName);
      if ( schemePortData === "" || schemePortData === undefined) {
        schemePortData = "20002";
      }
      var schemePort = parseInt(new String(schemePortData));
      var netClient = require('net');
      var client = netClient.connect({port: schemePort}, function() {
        client.setEncoding('utf8');
        if (process.argv != null) {
          var command = process.argv[process.argv.length - 1].trim();
          command += "&isSecondInstance=true";
          //将自己的启动参数发送给主客
          client.write(command + "\r\n");
        }
        try {
          client.end();
        } catch (e) {
          //退出程序
         app.quit();
          //结束node进程
         process.exit();
        }
      });
      client.on('data', function() {
        client.end();
      });
      client.on('end', function() {
         //退出程序
        app.quit();
         //结束node进程
        process.exit();
      });
    } catch(e) {
      //退出程序
      app.quit();
        //结束node进程
      process.exit();
    }
    }
  } else {
    // welink socket server
    getAvailablePort(20002).then(data => {
      writeAppDataFile(schemePortFileName, data);
      createConsoleServer(data);
    });
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
if (process.platform === "win32") {
  app.commandLine.appendSwitch("disable-gpu");
}

app.on("ready", () => {
  initWindow();
});

app.on("activate", () => {
  if (global.remoteVars.win === null || win === null) {
    initWindow();
  }
});

app.on("window-all-closed", () => {

  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Define custom protocol handler. Deep linking works on packaged versions of the application!
app.setAsDefaultProtocolClient('welinksoftclient');

// Protocol handler for osx
app.on('open-url', function (event) {
  event.preventDefault();
});

let win;
function initWindow() {
  if (global.isSecondInstance) {
    return null;
  }
  const maxhubEnvConfig = "cloudlink://welinksoftclient/startupconfig?model=integrated";
  let argv = process.argv;
  let isIntegrated = "";
  if (argv !== null && argv.length > 0) {
    isIntegrated = argv[argv.length - 1];
  }
  //maxhub场景主窗口与基线有差异
  if (isIntegrated === maxhubEnvConfig) {
    win = new BrowserWindow(
      Object.assign({
        width: 1024,
        height: 590,
        minWidth: 1024,
        minHeight: 590,
        title: "CloudLink",
        icon: __dirname + "/resources/icon/tray_icon.png",
        show: false,
        frame: false,
        thickFrame: false, //去掉窗口阴影
        hasShadow: false,
        transparent: false,
        maximizable: true,
        minimizable: true,
        backgroundColor: "#FFF",
        alwaysOnTop: false
      })
    );
  } else {
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
  }
  win.drag = drag;
  let url = require("url").format({
    protocol: "file",
    slashes: true,
    pathname: path.join(__dirname, "out/index.html")
  });
  win.loadURL(url);
  win.on('close',function(e){
    if(app){
      //app.exit();
      e.preventDefault();
      win.hide();
    }
  });

  win.webContents.on('crashed', function (e) {
    app && app.exit();
  });

  global.remoteVars.win = win;
  global.remoteVars.isAeroGlassEnabled = true;
  if(electron.systemPreferences&&electron.systemPreferences.isAeroGlassEnabled){
    global.remoteVars.isAeroGlassEnabled = electron.systemPreferences.isAeroGlassEnabled();
  }

  global.sharedObject = { prop1: process.argv, systemProySetting: systemProySetting };


  ipcMain.on('getSystemProxy-event', (event, arg) => {
    systemProySetting =  getSystemProxy();
    win.webContents.send('getSystemProxy-event', systemProySetting);
  });

  // ipcMain.on('kill_tup', (event, arg) => {
  //   // require('child_process').exec('taskkill /f /im tup_service_deamon.exe');
  //   require('child_process').exec('tskill  tup_service_deamon');
  // });

  ipcMain.on('getTupPort-message', (event, arg) => {
    getAvailablePort(arg).then(data => event.sender.send('getTupPort-reply', data));
  });

  session.fromPartition('persist:webviewsession').setProxy({
    proxyRules: 'http=foopy,direct://'
  }, function () {

  });

  // React Dev Tools
  // BrowserWindow.addDevToolsExtension(path.join(__dirname,"Tools/SVG组件化预览"));

  return win;
}

function getSystemProxy() {
  let systemProySettingCmdRet
  let systemProySetting;
  var  execS= require('child_process');
  try {
    var temp = execS.execSync('REG QUERY "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings"  /v ProxyServer', {
      encoding: 'utf8',
      timeout: 0,
      maxBuffer: 210241024,
      killSignal: 'SIGTERM',
      cwd: null,
      env: null
    });

    return temp.replace(/[\r\n]/g, "").replace(/\s+/g, ' ').split(" ")[4];
  }catch (e) {
    try {
      systemProySettingCmdRet = execS.execSync('netsh winhttp show proxy');
    } catch (error) {
      try {
        systemProySettingCmdRet = execS.execSync('netsh winhttp import proxy source=ie');
      }catch (e) {
        return "";
      }
    }
    var re = /WinHTTP ([^:]+):([^:]+):  ([^\n]+)/g;
    var r = "";
    if (r = re.exec(systemProySettingCmdRet)) {
      systemProySetting = r[3];
    }
    return systemProySetting;
  }
}

function listenLocal(port) {
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

    try {
      server.listen(port, "127.0.0.1", () => {
        port = server.address().port;
        server.close();
        resolve(true);
      });
    } catch(e) {
      console.error(e);
      resolve(false);
    }
  });
}

function listenOpen(port) {
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

    try {
      server.listen(port, () => {
        port = server.address().port;
        server.close();
        resolve(true);
      });
    } catch(e) {
      resolve(false);
    }
  });
}

async function getAvailablePort(port) {
  port = parseInt(port);
  for (let i = 0; i < 10; i++) {
    const resultLocal = await listenLocal(port);
    const resultOpen = await listenOpen(port);
    if (resultLocal && resultOpen) {
      return port;
    }
    port += 2;
  }
  return;
}

function readappdataFile(fileName) {
  let filePath = appDataPathWithFileName(fileName);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath);
  } else {
    return "";
  }
}

function writeAppDataFile(fileName, content) {
  var w_data = content.toString();
  w_data = new Buffer(w_data);
  fs.writeFileSync(appDataPathWithFileName(fileName), w_data, { flag: 'w' });
}

function appDataPathWithFileName(fileName) {
  const appDataPath = (electron.app || electron.remote.app).getPath("appData");
  return require("path").join(appDataPath, appPath, fileName);
}

function createConsoleServer(port) {
  port = parseInt(port);
  var net = require('net');
  var netserver = net.createServer(function(connection) {
    var receiveData = "";
    connection.setEncoding("utf8");
    connection.on('end', function() {
    });
    connection.on('data', function(data) {
      try {
        receiveData = receiveData + data;
        if (receiveData.indexOf("\n") !== -1) {
          //接受到消息发送给渲染进程
          if (global.remoteVars.win !== null) {
            global.remoteVars.win.webContents.send("console",receiveData);
          }
          receiveData = "";
        }
      } catch (e) {
      }
    });
  });
  netserver.listen(port, "127.0.0.1",function() {
  });
}