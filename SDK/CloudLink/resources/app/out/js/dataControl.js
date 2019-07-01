var flagOpen = true;
var stopTime = 1000;
var curWin = require('electron').remote.getGlobal('remoteVars').dataWin;
var ipcRenderer = require('electron').ipcRenderer;
var originCurWinSize = curWin.getSize();
var curX = require('electron').remote.getCurrentWindow().getPosition()[0];
var curY = require('electron').remote.getCurrentWindow().getPosition()[1];
var isMac = navigator.platform.toLowerCase().indexOf("mac") >= 0;
var intSmall = null;
var judgeMouseTimer;

curWin.setPosition(curX,0);
var closeTimer = setTimeout(function(){
  if(isMac){
    curWin.setPosition(curX,0);
    setTimeout(function(){
      ipcRenderer.send('toggle-menu-show-message', true);
    },1);
    flagOpen = false;
  }
  else{
    if(intSmall !== null){
      return;
    }
    var count = 0;
    intSmall = setInterval(function(){
      count++;
      count++;
      curWin.setPosition(curX,0 - count);
      //重新设置controlwin的尺寸为原始尺寸。解决高DPI下每伸缩一次，controlwin高度就增加176的问题
      curWin.setSize(originCurWinSize[0],originCurWinSize[1]);
      if(count === 70){
        clearInterval(intSmall);
        intSmall = null;
      }
    },1);
    flagOpen = false;
  }

},1000);


curWin.on('move', function () {
  curX = curWin.getPosition()[0];
  if (!isMac) {
    curY = curWin.getPosition()[1];
    if (curY >= 0) {
      curWin.setPosition(curX, 0);
      dealMouseOut();
    }
  }
});

function dealMouseOut() {
  clearTimeout(closeTimer);
  if(judgeMouseTimer) {
    clearTimeout(judgeMouseTimer);
  }

  judgeMouseTimer = setTimeout(function () {
    var systemMouseCoord = require('electron').screen.getCursorScreenPoint(),
      winCoord = curWin.getPosition(),
      winSize = curWin.getSize();
    if (systemMouseCoord.x < winCoord[0]
      || systemMouseCoord.x > winCoord[0] + winSize[0]
      || systemMouseCoord.y < winCoord[1]
      || systemMouseCoord.y > winCoord[1] + winSize[1]) {

      closeTimer = setTimeout(function () {
        if (isMac) {

          curWin.setPosition(curX, 0);
          flagOpen = false;
          setTimeout(function(){
            ipcRenderer.send('toggle-menu-show-message', true);
          },1);
        }
        else{
          if(intSmall !== null){
            return;
          }
          var count = 0;
          intSmall = setInterval(function(){
            count++;
            count++;
            curWin.setPosition(curX,0 - count);
            //重新设置controlwin的尺寸为原始尺寸。解决高DPI下每伸缩一次，controlwin高度就增加176的问题
            curWin.setSize(originCurWinSize[0],originCurWinSize[1]);
            if(count === 70){
              clearInterval(intSmall);
              intSmall = null;
            }
          },1);
          flagOpen = false;
        }

      },500);
    }
  },500);
}

document.addEventListener("mousemove",function(event){
  // curWin.focus();
  if(isMac){
    // curWin.setPosition(curX, 0);
  }
  dealMouseOut();
  if(!flagOpen){
    clearTimeout(closeTimer);
    if(isMac){
      flagOpen = true;
      ipcRenderer.send('toggle-menu-show-message', false);
    }
    else{
      if(intSmall !== null){
        return;
      }
      var count = 0;
      intSmall = setInterval(function(){
        count++;
        count++;
        curWin.setPosition(curX,count - 70);
        //重新设置controlwin的尺寸为原始尺寸。解决高DPI下每伸缩一次，controlwin高度就增加176的问题
        curWin.setSize(originCurWinSize[0],originCurWinSize[1]);
        if(count === 70){
          clearInterval(intSmall);
          intSmall = null;
        }
      },1);
      flagOpen = true;
    }
  }

});


// document.addEventListener("click",function(event){
//     if(event.target.className === "data-conf-microIcon"){
//       event.target.setAttribute("class","data-conf-microDisable");
//     }
//     else if(event.target.className === "data-conf-microDisable"){
//       event.target.setAttribute("class","data-conf-microIcon");
//     }
// });