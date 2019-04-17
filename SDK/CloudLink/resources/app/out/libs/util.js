// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
    // 1. Let O be ? ToObject(this value).
    if (this === null) {
    throw new TypeError('"this" is null or not defined');
    }
    
    var o = Object(this);
    
    // 2. Let len be ? ToLength(? Get(O, "length")).
    var len = o.length >>> 0;
    
    // 3. If IsCallable(predicate) is false, throw a TypeError exception.
    if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
    }
    
    // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
    var thisArg = arguments[1];
    
    // 5. Let k be 0.
    var k = 0;
    
    // 6. Repeat, while k < len
    while (k < len) {
    // a. Let Pk be ! ToString(k).
    // b. Let kValue be ? Get(O, Pk).
    // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
    // d. If testResult is true, return k.
    var kValue = o[k];
    if (predicate.call(thisArg, kValue, k, o)) {
    return k;
    }
    // e. Increase k by 1.
    k++;
    }
    
    // 7. Return -1.
    return -1;
    }
    });
}
// 日期格式化
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    S: (this.getMilliseconds() / 1000).toFixed(3).substr(2) // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
/**
 * 字符串格式化，类似C#占位符
 * 's{0}r{1}ng'.format('t','i')
 */
String.prototype.format = function (args) {
  var _dic = typeof args === "object" ? args : arguments;
  return this.replace(/\{([^{}]+)\}/g, function (str, key) {
    return _dic.hasOwnProperty(key) ? _dic[key] : str;
  });
};
/**
 * js判断对象是否相等
 * @param a 对象1
 * @param b 对象2
 * @returns {boolean}
 */
const isObjectValueEqual = function (a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);
  if (aProps.length !== bProps.length) {
    return false;
  }
  for (var i = 0; i < aProps.length; i++) {

    var propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;

}

/**
 * js判断对象是否相等 只判断名字和number
 * @param a 对象1
 * @param b 对象2
 * @returns {boolean}
 */

const isOnLineAttendancesValueEqual = function (attendances1, attendances2) {
  if (attendances1.number !== attendances2.number) {
    return false;
  }
  if (attendances1.name !== attendances2.name) {
    return false;
  }
  return true;

}


/**
 * 判断对象是否相等
 * @param objectArray1 对象数组1
 * @param objectArray2 对象数组2
 * @returns {boolean}
 */
const isObjectArrayValueEqual = function (objectArray1, objectArray2) {
  if (objectArray1.length !== objectArray2.length) {
    return false;
  }
  for (var i = 0; i < objectArray1.length; i++) {
    if(!isOnLineAttendancesValueEqual(objectArray1[i],objectArray2[i])){
      return false;
    }
  }
  return true;

}


/**
 * 将origiArray含有的preArray排上前面
 * @param preArray
 * @param origiArray
 * @returns {Array|*|string|Array.<T>}
 */
const sortPreAndOrigiArray =function (preArray,origiArray) {

  if(!(preArray instanceof Array)||!(origiArray instanceof Array)){
    return;
  }
  var temp = new Array();

  for(var i=0;i<preArray.length;i++){
    for (var j = 0; j < origiArray.length; j++) {
      if( isOnLineAttendancesValueEqual(preArray[i],origiArray[j])){
        temp.push(origiArray[j]);
        origiArray.splice(j, 1);
        break;
      }
    }
  }
  return temp.concat(origiArray);

}

/**
 * 字符串分隔成字符
 * @param inputstring 输入字符串
 * @param separators 分隔字符串
 * @param includeEmpties
 * @returns {Array}
 */
const explode = function (inputstring, separators, includeEmpties) {

  inputstring = new String(inputstring);
  separators = new String(separators);

  if (separators == "undefined") {
    separators = " :;";
  }

  fixedExplode = new Array(1);
  currentElement = "";
  count = 0;

  for (x = 0; x < inputstring.length; x++) {
    str = inputstring.charAt(x);
    if (separators.indexOf(str) != -1) {
      if (( (includeEmpties <= 0) || (includeEmpties == false)) && (currentElement == "")) {
      }
      else {
        fixedExplode[count] = currentElement;
        count++;
        currentElement = "";
      }
    }
    else {
      currentElement += str;
    }
  }

  if (( !(includeEmpties <= 0) && (includeEmpties != false)) || (currentElement != "")) {
    fixedExplode[count] = currentElement;
  }
  return fixedExplode;
}

/**
 * 特殊Promise对象
 * 外置resolve，reject，并且通过status获得执行状态
 */
function PromiseObject() {
  var res, rej;
  var p = new Promise(function(resolve, reject) {
    res = function(ret) {
      this.status = "resolved";
      resolve(ret);
    };
    rej = function(ret) {
      this.status = "rejected";
      reject(ret);
    };
  });
  p.resolve = res;
  p.reject = rej;
  p.status = "pending";

  // 设置超时
  p.timeout = function(timer, ret) {
    p._timer && clearTimeout(this._timer);
    p._timer = setTimeout(function() {
      p.resolve(ret);
    }, timer);
  };

  return p;
}

// *返回一个计时Promise
Promise.delay = function(timer, ret) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(ret);
    }, timer);
  });
};
// *当Promise执行完成后，延迟一定时间resolve
Promise.prototype.delay = function(timer, pret) {
  return this.then(
    function(ret) {
      return Promise.delay(timer, pret || ret);
    },
    function(ret) {
      return Promise.delay(timer, pret || ret);
    }
  );
};
// *promise.all([*funcs return promises or *promises])
Promise.prototype.all = function(args) {
  var funcs = Array.prototype.slice.call(typeof args === "object" && args instanceof Array ? args : arguments);
  return this.then(function(value) {
    return Promise.all(
      funcs.map(function(fp) {
        return typeof fp === "function" ? fp(value) : fp;
      })
    );
  });
};


/**
 * 委托函数（解决函数回调提前定义）
 * @param {*稍后实现的函数} target
 * @param {*函数名} name
 *
 */
function delegate(target, name) {
  //全局方法请写明备注
  const limitMap = {
    fullScreenDom: true,
    processBarDom: true,
    mediaDom: true,
    fullScreenCloseBtnDom: true,
    UmFocus: true, //um编辑器Focus
    $getUmEditor: true,//um编辑器
    setScrollIntoViewRef: true, //设置回显区要滚动的消息句柄
    showMessage: true, //滚动到设置的回显区消息
    showRecent: true,//滚动到选中的会话
    hidePhotoFullScreen: true, //关闭图片全屏-用于快捷键
    logout: true, //登出
    quickLogout: true, //登录界面快速退出App
    doLogout: true, //登出-用于系统托盘
    // delegateTrackAppExit:  true, //打点app退出-用于系统托盘
    // offline: true, //切换离线-用于系统托盘
    publishStatus: true, //设置用户状态-用于系统托盘
    collectLogs: true, //收集日志-用于系统托盘
    clearSelectedEditorToolBar: true, //清空编辑器状态-用于截图exe执行后回调
    mloginForceUpdate: true,//移动首页刷新
    updateLanguage: true,//切换语言后刷新界面
    toggleShowMessageNotify: true, //弹出提醒-用于系统托盘
    // checkBeforeLogout: true, //用户退出/注销前判断是否有语音呼叫
    updateConfirmWindow: true, //收到对端音频转视频提示框
    onImageError:true,    //图片加载失败执行事件
    onImageLoadSuccess:true,    //图片加载完成执行事件
    onImageLoad: true,    //图片加载完成执行事件
    showSystemSettings: true,    //PC端设置界面显示
    hideSelectContactsModal: true,//PC端关闭选择模态框-用于快捷键
    showToast: true, //显示toast
    showPrivacy: true,//显示隐私声明
    showPersonalManage: true,//显示个人管理平台
    resumeShow: true,//视频右下角弹窗模式恢复成主界面模式的实现
    searchForceUpdate: true,//搜索界面强制刷新，适用于添加了联系人之后的处理
    CheckOffLineIsInCall: true,//点击离线前判断是否在通话中
    countdownConfirmWindow: true, //带有倒计时的confirm提示框
    showCopyright: true,//显示PC版权说明
    editorContentChange:true,//编辑器内容变化方法
    resumeHintsShow: true,//恢复安全提示信息显示
    upgradeLoadingWindow: true,//安卓升级中提示信息
    onAgreePrivacy: true, // 隐私声明同意执行事件
    winHide: true, // 隐藏主窗口
    winMinimize: true // 最小化主窗口
  };
  if (name && limitMap[name]) {
    // Object.assign(delegate, { [name]: target });
    delegate[name] = target;
  } else {
    // Object.assign(delegate, { [name]: {} });
    delegate[name] = {};
    window.console.error("未指明的方法：[ " + name + " ]");
  }
  return target;
}

/**
 * 判断是否为空
 * @param dealObj
 * @returns {boolean}
 */
const isNullOrEmpty = function (dealObj) {
  var type = Object.type(dealObj);
  if (type.includes("html") || type.includes("element")) {
    return false;
  }
  if (
    dealObj === undefined ||
    dealObj === null ||
    dealObj.toString() === "NaN" ||
    dealObj === "" ||
    dealObj.length === 0
  ) {
    return true;
  } else {
    if (Object.type(dealObj).includes("html")) {
      return false;
    }
    if (Object.type(dealObj) === "object") {
      for (var key in dealObj) {
        return false;
      }
      return true;
    }
  }
  return false;
};
/**
 * 处理手机号码（暂时仅支持不带+86的国内手机）
 * 如要涉及到国际化，带上+号的正则请使用：^\+[1-9]{1}[0-9]{1,14}$
 * 如需适配未来更远一点的11位手机号码，可以考虑使用：/^1[0-9]{10}$/
 * @param {*} number 
 */
const handlePhoneNumber=function(number){
  var numberStr = number?number.toString():"";
  var regMobile =  new RegExp("^1[3|4|5|6|7|8|9][0-9]{9}$"); //验证规则,修改适配新增号段166，189，199
  var tmpFirst = parseInt((numberStr.length - 3) / 2);
  //短号码也不可以打印明文，中间3位用***代替
  if(numberStr.length === 0){
    return '';
  }else if(numberStr.length <= 3) {
    return '***';
  } else if(numberStr.length === 4) {
    return '***' + numberStr.substr(3);
  } else if (numberStr.length > 11) {
    return (numberStr.substr(0, tmpFirst) + '*****' + numberStr.substr(tmpFirst + 5));
  } else {
    return (regMobile.test(numberStr) ? (numberStr.substr(0, 3) + '****' + numberStr.substr(7)) : (numberStr.substr(0, tmpFirst) + '***' + numberStr.substr(tmpFirst + 3)));
  }  
}

/**
 * 对于已经确定的误报打印对象，使用此方法脱敏，后续增加该方法
 * TODO 在debug版本中，运行期将误报对象存入文件中，运行期检查。发布版，
 * @param {*} obj 
 */
const desensitive = function(obj) {
  return obj;
}

/**
 *处理显示时间
 * @param time 时间戳
 * @returns {{day: (string|*), time: (string|*)}}格式化时间
 */
const dealMessageTime = function (time) {
  var currentTime = Date.now();
  var formatDateTime = formatDateMMDDHHMM(time, "/");
  var day = formatDateTime.date;
  if (mergeByDay(time, currentTime)) {
    day = window.language.IM_DIALOG_TODAY;
  }
  if (mergeByDay(time, currentTime - 86400000)) {
    day = window.language.IM_DIALOG_YESTERDAY;
  }
  var timePeriod = morningOrNoon(time);
  return { day: day, time: formatDateTime.time, timePeriod: timePeriod };
};

/**
 * 判断是否是同一天
 * @param time1 时间戳
 * @param time2 时间戳
 * @returns {boolean}
 */
const mergeByDay = function (time1, time2) {
  var date1 = new Date(time1);
  var date2 = new Date(time2);
  return !(
    date1.getFullYear() !== date2.getFullYear() ||
    date1.getMonth() !== date2.getMonth() ||
    date1.getDate() !== date2.getDate()
  );
};

/**
 * 判断是否是上午还是下午
 * @param {*} time1 
 */
const morningOrNoon = function (time) {
  var date = new Date(time);
  var hours = date.getHours();
  if(hours >= 12) {
    return window.language.MOBILE_AFTERNOON;
  } else {
    return window.language.MOBILE_MORNING;
  }
};

/**
 * 格式化日期
 */
const formatDateYYYYMMDDHHMM = function (time, separator) {
  if (isNullOrEmpty(separator)) {
    separator = "/";
  }
  var date = new Date(time * 1.0);
  var year = date.getFullYear();
  var month = formatNum(date.getMonth() + 1);
  var day = formatNum(date.getDate());
  var hour = formatNum(date.getHours());
  var minute = formatNum(date.getMinutes());
  return {
    date: year + separator + month + separator + day,
    time: hour + ":" + minute
  };
};
/**
 * 格式化日期
 */
const formatDateMMDDHHMM = function (time, separator) {
  if (isNullOrEmpty(separator)) {
    separator = "/";
  }
  var date = new Date(time * 1.0);
  var year = date.getFullYear();
  var month = formatNum(date.getMonth() + 1);
  var day = formatNum(date.getDate());
  var hour = formatNum(date.getHours());
  var minute = formatNum(date.getMinutes());
  var currentYear = (new Date()).getFullYear();
  if(currentYear!==year){
    return {
      date: year + separator + month + separator + day,
      time: hour + ":" + minute
    };
  }
  return {
    date: month + separator + day,
    time: hour + ":" + minute
  };
};
/**
 * 格式化数字
 */
const formatNum = function (num, pow) {
  if (isNullOrEmpty(pow)) {
    pow = 2;
  }
  var temp = Math.pow(10, pow);
  var tempStr = num + temp + "";
  return tempStr.substring(1);
};

/**
 * 获取文件名
 * @param path
 * @returns {*}
 */
const getFileName = function (path) {
  return path.split("/")[path.split("/").length - 1].split("\\")[
    path.split("/")[path.split("/").length - 1].split("\\").length - 1
  ];
};
// 定义新的类型Guid
const Guid = function () {
  var d = new Date().getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = ((d + Math.random() * 16) % 16) | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x7) | 0x8).toString(16);
  });
};
/**
 * 空操作
 * @constructor
 */
const Noop = function () { };

/**
 * 节流函数
 * @param fn 需要执行的函数
 * @param delay 延迟
 * @returns {执行器}
 */
const throttle = function (fn, delay) {
  var timer = null;
  return function () {
    var context = this;
    clearTimeout(timer);
    var args = arguments;
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

/**
 * 去抖函数
 * @param fn 需要执行的函数
 * @param delay 执行最小间隔
 * @returns {执行器}
 */
const debounce = function (fn, delay) {
  var last = 0;
  return function () {
    var curr = +new Date();
    if (curr - last > delay) {
      fn.apply(this, arguments);
      last = curr;
    }
  };
};

/**
 * 获取文件后缀名
 * @param fileName
 * @returns {Blob|Array.<>|*|string|ArrayBuffer}
 */
const getSuffix = function (fileName) {
  if (isNullOrEmpty(fileName)) {
    fileName = "";
  }
  return fileName
    .slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2)
    .toLowerCase();
};

/**
 * 格式化文件大小
 * @param size
 * @returns {string}
 */
const formatFileSize = function (size) {
  if (size < 1000) {
    return size + "B";
  } else if (size >= 1000 && size < 1000000) {
    return Math.round(size * 100 / 1024) / 100 + "KB";
  } else if (size >= 1000000 && size < 1000000000) {
    return Math.round(size * 100 / 1024 / 1024) / 100 + "MB";
  } else {
    return Math.round(size * 100 / 1024 / 1024 / 1024) / 100 + "GB";
  }
};
/**
 * 格式化时间
 * @param time 秒数
 * @returns {string}
 */
const formatTime = function (time) {
  var duration = Math.floor(time);
  if (duration === 0) {
    duration = 1;
  }
  var second,
    minute,
    hour,
    returnTime = "";
  second = duration % 60;
  minute = Math.floor(duration / 60);
  hour = Math.floor(duration / 3600);
  returnTime += formatNumberToString(hour) + ":";
  returnTime += formatNumberToString(minute) + ":";
  returnTime += formatNumberToString(second);
  return returnTime;
};
/**
 * 格式化数字，小于10则前补0
 * @param number
 * @returns {string}
 */
const formatNumberToString = function (number) {
  if (number < 10) {
    return "0" + number.toString();
  } else {
    return number.toString();
  }
};

/**
 * 根据键盘的keyCode返回keyTone
 */
const getKeyTone = function (ev) {
  var keyCode = ev.keyCode;
  var keyTone; // 按键音 0-12

  if (ev.shiftKey) {
    if (51 === keyCode) {
      keyTone = 11; // #
    } else if (56 === keyCode) {
      keyTone = 10; // *
    } else if (187 === keyCode) {
      keyTone = 12; // +
    }
  } else if (keyCode >= 96 && keyCode <= 107) {
    // 小键盘区 0-9 *
    keyTone = keyCode - 96;
    if (11 === keyTone) {
      // + 的 keyTong改为12
      keyTone++;
    }
  } else if (keyCode >= 48 && keyCode < 58) {
    // 主键盘区0-9
    keyTone = keyCode - 48;
  } else if (8 === keyCode || 46 === keyCode) {
    // 删除键 backspace 8, Delete 46
    keyTone = "del";
  }
  return keyTone;
};
/**
 * 获取联系人姓名
 * @param {*} contact
 */
const getContactName = function (contact) {
  if (isNullOrEmpty(contact)) {
    return '';
  }
 // var { name, native_name, number, account, mobile } = contact;
  return window.langcode === "2052"
    ? contact.native_name || contact.name || contact.account || contact.number || contact.mobile || ""
    : contact.name || contact.native_name || contact.account || contact.number || contact.mobile || "";
};
/**
 * 获取公司名称
 */
const getContactDept = function (contact) {
  if (isNullOrEmpty(contact)) {
    return '';
  }
  //var { dept_name_cn, dept_name_en } = contact;
  return window.langcode === "2052"
    ? contact.dept_name_cn || contact.dept_name_en || contact.dept_name || ""
    : contact.dept_name_en || contact.dept_name_cn || contact.dept_name || "";
};
/**
 * 获取消息中联系人姓名
 * @param {*} contact
 */
const getContactNameByMessage = function (message) {
  if (isNullOrEmpty(message)) {
    return '';
  }
  //var { name, native_name, display_name, origin, nick_name } = message;
  return window.langcode === "2052"
    ? message.nick_name || message.native_name || message.name || message.display_name || message.origin || ""
    : message.nick_name || message.name || message.native_name || message.display_name || message.origin || "";
};
/**
 * 睡眠函数
 */
const sleep = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
};
/**
 * 获取消息clientId
 */
const getClientId = (function () {
  var add = 0;
  var nowTime = new Date().getTime();
  return function () {
    var currentTime = new Date().getTime();
    if (currentTime === nowTime) {
      add++;
      if (add > 999) {
        add = 1;
      }
    } else {
      nowTime = currentTime;
      add = 0;
    }
    return nowTime * 1000 + add;
  };
})();

//闭包sno的值
const Sno = (function () {
  var sno = -1;
  return function () {
    return sno >= 65535 ? sno = 0 : ++sno;
  };
})();
/**
 * 是否包含字符串数组中的一个
 */
String.prototype.hasOneOf = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (this.indexOf(arr[i]) !== -1) {
      return true;
    }
  }
  return false;
};
/**
 * 条件查询
 */
Array.prototype.query = function (opts) {
  if (
    isNullOrEmpty(opts) ||
    !isNullOrEmpty(opts.length) ||
    Object.type(opts) !== Object.type.OBJECT
  ) {
    return null;
  }
  return this.find(function (item) {
    for (var key in opts) {
      if (opts.hasOwnProperty(key)) {
        if (item[key] !== opts[key]) {
          return false;
        }
      }
    }
    return true;
  });
};
/**
 * 条件删除
 */
Array.prototype.delete = function (opts) {
  if (
    isNullOrEmpty(opts) ||
    !isNullOrEmpty(opts.length) ||
    Object.type(opts) !== Object.type.OBJECT
  ) {
    return null;
  }
  var idx = this.findIndex(function (item) {
    for (var key in opts) {
      if (opts.hasOwnProperty(key)) {
        if (item[key] !== opts[key]) {
          return false;
        }
      }
    }
    return true;
  });
  var arr = this;
  if (idx !== -1) {
    arr.splice(idx, 1);
  }
  return arr;
};
/**
 * 条件更新
 */
Array.prototype.update = function (otpArr, obj2) {
  if (isNullOrEmpty(obj2)) {
    return this;
  }
  if (Object.type(obj2) === Object.type.ARRAY) {
    var arr = this;
    obj2.forEach(function (item) {
      arr.update(otpArr, item);
    });
    return arr;
  } else if (Object.type(obj2) !== Object.type.OBJECT) {
    return this;
  }
  var idx = this.findIndex(function (item) {
    var flag = true;
    otpArr.forEach(function (key) {
      if (item[key] !== obj2[key]) {
        flag = false;
      }
    });
    return flag;
  });
  if (idx === -1) {
    var arr1 = this;
    arr1.push(obj2);
    return arr1;
  } else {
    var arr2 = this;
    arr2[idx] = obj2;
    return arr2;
  }
};
/**
 * 条件查询列表
 */
Array.prototype.queryList = function (opts) {
  if (
    isNullOrEmpty(opts) ||
    !isNullOrEmpty(opts.length) ||
    typeof opts !== "object"
  ) {
    return null;
  }
  return this.filter(function (item) {
    for (var key in opts) {
      if (opts.hasOwnProperty(key)) {
        if (item[key] !== opts[key]) {
          return false;
        }
      }
    }
    return true;
  });
};
/**
 * 数组切割
 */
Array.prototype.splitByNum = function (num) {
  var retArr = [],
    oldArr = this;
  while (oldArr.length > num) {
    retArr.push(oldArr.splice(0, num));
  }
  retArr.push(oldArr);
  return retArr;
};
/**
 * 是否是同一个数组（每一项对比）
 */
Array.prototype.isEqual = function (arr2) {
  var arr1 = this;
  if (Object.type(arr2) !== Object.type.ARRAY
    || arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    var item1 = arr1[i], item2 = arr2[i];
    var flag = Object.isEqual(item1, item2);
    if (!flag) {
      return flag;
    }
  }
  return true;
};
/**
 * 获取array中各项某属性（数值型）之和
 * @param key
 * @returns {number}
 */
Array.prototype.getNumberKeySum = function (key) {
  var sum = 0;
  this.forEach(function (item) {
    if (Object.type(item) === Object.type.OBJECT) {
      if (Object.type(item[key]) === Object.type.NUMBER
        && !isNaN(item[key])
        && Infinity !== item[key]) {
        sum += item[key];
      }
    }
  });
  return sum;
};

/**
 * 1. 获取array中各项某属性的数组集合,去重（获取accountlist）
 * 2. 如果key值为空, 则只进行数组去重
 * @param key
 * @returns {string}
 */
Array.prototype.getKeyArr = function (key) {
  var arr = [];
  this.forEach(function (item) {
    if (Object.type(item) === Object.type.OBJECT) {
      if (!isNullOrEmpty(item[key]) && arr.indexOf(item[key]) === -1){
        arr.push(item[key]);
      }
    } else if(!key){
      if(arr.indexOf(item) === -1){
        arr.push(item);
      }
    }
  });
  return arr;
};
/**
 * 获取错误对象
 */
Error.prototype.toJSON = function () {
  return { message: this.message, stack: this.stack };
};
/**
 * 批量设置属性
 */
NodeList.prototype.setAttribute = function (key, val) {
  this.forEach(function (elem) {
    elem.setAttribute(key, val);
  });
  return this;
};
/**
 * 批量删除属性
 */
NodeList.prototype.removeAttribute = function (key) {
  this.forEach(function (elem) {
    elem.removeAttribute(key);
  });
  return this;
};
/**
 * 批量删除自己
 */
NodeList.prototype.remove = function () {
  this.forEach(function (elem) {
    elem.remove();
  });
  return this;
};
NodeList.prototype.addEventListener = function (event, callback) {
  this.forEach(function (elem) {
    elem.addEventListener(event, callback);
  });
  return this;
};
NodeList.prototype.removeEventListener = function (event, callback) {
  this.forEach(function (elem) {
    elem.removeEventListener(event, callback);
  });
  return this;
};
/**
 * 遍历
 */
NodeList.prototype.forEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};
HTMLCollection.prototype.setAttribute = function (key, val) {
  this.forEach(function (elem) {
    elem.setAttribute(key, val);
  });
  return this;
};
HTMLCollection.prototype.removeAttribute = function (key) {
  this.forEach(function (elem) {
    elem.removeAttribute(key);
  });
  return this;
};
HTMLCollection.prototype.remove = function () {
  this.forEach(function (elem) {
    elem.remove();
  });
  return this;
};
HTMLCollection.prototype.addEventListener = function (event, callback) {
  this.forEach(function (elem) {
    elem.addEventListener(event, callback);
  });
  return this;
};
HTMLCollection.prototype.removeEventListener = function (event, callback) {
  this.forEach(function (elem) {
    elem.removeEventListener(event, callback);
  });
  return this;
};
HTMLCollection.prototype.forEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};

/**
 * 字符串转成可以正则化字符串
 */
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
/**
 * 替换所有
 */
String.prototype.replaceAll = function (partten, str) {
  return String.prototype.replace.call(
    this,
    new RegExp(escapeRegExp(partten), "g"),
    str
  );
};
/**
 * 是否是JSON字符串
 */
String.prototype.isJSON = function () {
  try {
    var json = JSON.parse(this);
    if (Object.type(json) === Object.type.ARRAY || Object.type(json) === Object.type.OBJECT) {
      if (!isNullOrEmpty(json))
        return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

String.prototype.formatDate = function () {
  return this.replaceAll('-', '/');
};

/**
 * 条件查询
 */
Object.query = function (obj, opts) {
  if(Object.type(opts) !== Object.type.OBJECT){
    return {};
  }
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var childObj = obj[key];
      var flag = true;
      for (var keyKey in opts) {
        if (opts.hasOwnProperty(keyKey)) {
          flag = flag && childObj[keyKey] === opts[keyKey];
        }
      }
      if (flag) {
        return childObj;
      }
    }
  }
  return null;
};
/**
 * 条件查询所有
 */
Object.queryAll = function (obj, opts) {
  if(Object.type(opts) !== Object.type.OBJECT){
    return {};
  }
  var resultMap = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var childObj = obj[key];
      var flag = true;
      for (var keyKey in opts) {
        if (opts.hasOwnProperty(keyKey)) {
          flag = flag && childObj[keyKey] === opts[keyKey];
        }
      }
      if (flag) {
        resultMap[key] = childObj;
      }
    }
  }
  return resultMap;
};
/**
 * 条件更新
 */
Object.update = function (parent, oldObj, newObj) {
  for (var key in parent) {
    if (parent.hasOwnProperty(key)) {
      var childObj = parent[key];
      var flag = true;
      for (var keyKey in oldObj) {
        if (oldObj.hasOwnProperty(keyKey)) {
          flag = (flag && childObj[keyKey] === oldObj[keyKey]);
        }
      }
      if (flag) {
        parent[key] = newObj;
      }
    }
  }
};
/**
 * 遍历对象
 */
Object.forEach = function (obj, callback) {
  var newObj = Object.assign({}, obj);
  for (var key in newObj) {
    if (newObj.hasOwnProperty(key)) {
      if (Object.type(callback) === Object.type.FUNCTION) {
        callback(key, newObj[key]);
      }
    }
  }
};
/**
 * 克隆对象
 * @param {*} src
 */
Object.clone = function(src) {
  return Object.keys(src).reduce(function(obj, curkey) {
    var cur = src[curkey];
    var type = Object.type(cur);
    if (type === Object.type.OBJECT) {
      obj[curkey] = Object.clone(cur);
      return obj;
    //  return Object.assign(obj, { [curkey]: Object.clone(cur) });
  } else if (type === Object.type.ARRAY) {
      obj[curkey] = Array.prototype.slice.call(cur);
      return obj;
     // return Object.assign(obj, { [curkey]: Array.prototype.slice.call(cur) });
    } else {
       obj[curkey] = cur;
       return obj;
     // return Object.assign(obj, { [curkey]: cur });
    }
  }, {});
};
/**
 * 判断对象类型
 * @param {*} obj
 */
Object.type = function (obj) {
  return Object.prototype.toString
    .apply(obj)
    .match(/\[object\s(.*)\]/)[1]
    .toLowerCase();
};
Object.type.STRING = 'string';
Object.type.OBJECT = 'object';
Object.type.PROXYOBJECT = 'proxyobject';
Object.type.FUNCTION = 'function';
Object.type.ARRAY = 'array';
Object.type.BOOLEAN = 'boolean';
Object.type.NUMBER = 'number';
Object.type.PROMISE = 'promise';
Object.type.NULL = 'null';
Object.type.UNDEFINED = 'undefined';
Object.type.NODELIST = 'nodelist';
Object.type.HTMLCOLLECTION = 'htmlcollection';
Object.type.EVENT = 'event';
Object.type.XMLDOCUMENT='xmldocument';
Object.type.DOCUMENT='document';
Object.deleteProperty = function (obj, arr) {
  arr.forEach(function (item) {
    delete obj[item];
  });
  return obj;
};

/**
 * 判断对象是否相等
 * 仅限于正常数据类型(string,array,object,number,bool,null,undefined)
 * @param obj1
 * @param obj2
 * @returns {string}
 */
Object.isEqual = function (obj1, obj2) {
  return isEqu(obj1, obj2);
  function isEqu(obj1, obj2) {
    for (var key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        if (Object.type(obj1[key]) === Object.type(obj2[key])) {
          var flag;
          switch (Object.type(obj1[key])) {
            case Object.type.STRING:
            case Object.type.NUMBER:
            case Object.type.BOOLEAN:
              flag = (obj1[key].toString() === obj2[key].toString());
              break;
            case Object.type.OBJECT:
              flag = isEqu(obj1[key], obj2[key]);
              break;
            case obj1[key].type.ARRAY:
              flag = obj1[key].isEqual(obj2[key]);
              break;
            case Object.type.NULL:
            case Object.type.UNDEFINED:
            default:
              break;
          }
          if (!flag) {
            return flag;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  }
};
const emptyObject = {};

/**
 * 预期函数
 * @param {*} fn 执行的函数(...arg)
 * @param {*} condition 条件函数(...arg,每次迭代fn执行结果)
 * @param {*} lag 执行间隔
 * @param {*} retryTimes 执行次数
 * @param {*} cb 执行完成回调 CallBack
 * @param {*} tcb 超时回调 TimeoutCallBack
 */
const makeSure = function(fn, condition, lag, retryTimes, cb, tcb) {
  lag = lag || 1000;
  retryTimes = retryTimes || 50;
  if (Object.type(lag) !== "number" && Object.type(retryTimes) !== "number" && Object.type(fn) !== "function" && Object.type(condition) !== "function") {
    throw "args is not correct！";
  }
  var t = 1,
    rt = retryTimes,
    ret,
    sarg,
    ensure;
  var next = function() {
    sarg = Array.prototype.slice.call(arguments);
    ret = fn.apply(null, sarg.concat(t++)); //首次执行
    if (Object.type(ret) === "promise") {
      ret.then(function(pret) {
        if (condition.apply(null, sarg.concat(pret))) {
          //满足条件执行回调
          return cb && cb();
        } else {
          ensure = setInterval(
            //开始轮次执行
            function() {
              return !condition.apply(null, sarg.concat(pret)) && t <= rt //满足条件或超时退出
                ? (function() {
                    fn.apply(null, sarg.concat(t + 1)).then(function(pret) {
                      ret = pret;
                      t++;
                    });
                  })()
                : (function() {
                    clearInterval(ensure); //清除定时器
                    if (t < rt) {
                      cb && cb();
                    } else {
                      //超时执行tcb
                      tcb && tcb();
                    }
                  })();
            },
            lag
          );
        }
      });
    } else {
      if (condition.apply(null, sarg.concat(ret))) {
        //满足条件执行回调
        return cb && cb();
      } else {
        ensure = setInterval(
          //开始轮次执行
          function() {
            return !condition.apply(null, sarg.concat(ret)) && t <= rt //满足条件或超时退出
              ? (function() {
                  ret = fn.apply(null, sarg.concat(t + 1));
                  t++;
                })()
              : (function() {
                  clearInterval(ensure); //清除定时器
                  if (t < rt) {
                    cb && cb();
                  } else {
                    //超时执行tcb
                    tcb && tcb();
                  }
                })();
          },
          lag
        );
      }
    }
  };
  next.end = function() {
    return clearInterval(ensure);
  };
  next.resolve = function() {
    clearInterval(ensure);
    cb && cb();
  };
  return next;
};

// 操作stroage的方法
window.stroage = {
  //获取消息静音设置
  checkIsMessageShow: function () {
    var isMessageShow = window.localStorage.getItem("isMessageShow");
    if (isMessageShow === null &&　window.localStorage) {
      window.localStorage.setItem("isMessageShow", "true");
      isMessageShow = window.localStorage.getItem("isMessageShow");
    }
    return isMessageShow;
  },
  isFastLogin: function () {
    if(window.localStorage){
      return window.localStorage.getItem("isFastLogin") === "true";
    }
  },
  setFastLogin: function (enable) {
    if(window.localStorage){
       window.localStorage.setItem("isFastLogin", enable ? "true" : "false");
    }
    
  }
};

//获取字符串中最多重复字符数量
const getRepeatCharMaxCount = function (str) {
  if (str === "") {
    return 0;
  }
  var o = {};
  for (var i = 0, length = str.length; i < length; i++) {
    var char = str.charAt(i);
    if (o[char]) {
      o[char]++; //次数加1
    } else {
      o[char] = 1; //若第一次出现，次数记为1
    }
  }
  //遍历对象，找到出现次数最多的字符的次数
  var max = 0;
  for (var key in o) {
    if (max < o[key]) {
      max = o[key]; //max始终储存次数最大的那个
    }
  }
  return max;
};

const getDifferenceCharsCount = function (strSource, strNew) {
  if (null === strSource || null === strNew) {
    return -1;
  }
  var differenceCharsCount = 0;
  var arrNew = new Array();
  arrNew = strNew.split("");
  var charNew = "";
  for (var i = 0; i < arrNew.length; i++)
  {
    charNew = arrNew[i];
    if (strSource.indexOf("" + charNew) >= 0) {
      continue;
    }
    differenceCharsCount++;
  }
  return differenceCharsCount;
}

// 集中处理WebSocket日志字符串打印
function WebSocketSenderAndLogger(data) {
  // if(data && data.description !== 'tup_call_get_callstatics'){
  //     window.tupwsLogger &&
  //   window.tupwsLogger.info(
  //     data && data.param
  //       ? `[ ■ ${data.description} ] ${Object.keys(data.param)
  //         .map(function (i) {
  //           return i + " <" + Object.type(data.param[i]) + ">";
  //         })
  //         .join(" | ")}`
  //       : `[ ■ ${data.description} ]`
  //   );
  // }

  WebSocket.prototype.send.call(this, JSON.stringify(data));

  if(data.description === "tup_login_change_register_password"){  //修改密码判断（true 则打印日志的密码设置为*）
    data.param.change_pwd_param.old_password = "******";
    data.param.change_pwd_param.new_password = "******";
  } 
  if(data.description === "tup_login_authorize"){ //登录鉴权判断（true 则打印日志的密码设置为*）
    data.param.authorize_param.auth_info.password = "******";
  }
  window.tupwsLogger && window.tupwsLogger.debug(data.description, data);
  
  // if (data && data.description !== 'tup_http_upload_file') {
  //     window.tupwsLogger.debug("", data);
  // }
}

WebSocket.prototype.sendToTup = WebSocketSenderAndLogger;

/**
 * websocket实例回收&状态初始化
 */
window.webSocketInitCollect = {}
function addToInitCollect(key, fn, ws) {
  var logger = window.Logger('util')('addToInitCollect');
  logger.info('[addToInitCollect] key: ' + key + ' ws: ' + ws);
  window.webSocketInitCollect[key] = fn;
}
WebSocket.prototype.addToInitCollect = addToInitCollect;

/**
 * react版阻止冒泡
 */
function reactStopPropagation(e) {
  if (Object.type(e) === Object.type.EVENT) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  } else if (Object.type(e) === Object.type.OBJECT 
  || Object.type(e) === Object.type.PROXYOBJECT) {
    // Object.type(e) === Object.type.PROXYOBJECT   兼容ios10，ios中获取到react的事件对象解析为proxyobject，而不是object
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
      if (e.nativeEvent.stopPropagation) {
        e.nativeEvent.stopPropagation();
      }
      if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation();
      }
    }
  }
}

/**
 * 展示处理时间
 */
function showDealTime(info) {
  var logger=window.Logger('test')('showDealTime');
  logger.debug(new Date().format('yyyy-MM-dd hh:mm:ss.S'),info);
}
/**
 * 获取元素位置
 */
function getElementScreenPosition(element) {
  if (!element) return;
  var offsetLeft=0, offsetTop=0;
  while (element) {
    offsetLeft += element.offsetLeft - element.scrollLeft;
    offsetTop += element.offsetTop - element.scrollTop;
    element = element.offsetParent;
  }
  return { left:offsetLeft, top:offsetTop };
}

/**
 * 格式化秒数→时分秒
 */
const formatDateHHMMSS = function (value) {
  var theSecond = parseInt(value/1000);// 秒
  var theMinute = 0;// 分
  var theHour = 0;// 小时
  if(theSecond > 60) {
    theMinute = parseInt(theSecond/60);
    theSecond = parseInt(theSecond%60);
      if(theMinute > 60) {
        theHour = parseInt(theMinute/60);
        theMinute = parseInt(theMinute%60);
      }
    }
  var result = ""+parseInt(theSecond)+"秒";
  if(theMinute > 0) {
    result = ""+parseInt(theMinute)+"分"+result;
  }
  if(theHour > 0) {
    result = ""+parseInt(theHour)+"小时"+result;
   }
  return result;
};

// 处理时间转换成YYYY-MM-DD HH:mm格式
function getNowFormatDate(date){
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var hours= date.getHours();
  var minutes = date.getMinutes();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  if(hours >= 0 && hours <= 9 ){
    hours = "0" + hours;
  }
  if(minutes >= 0 && minutes <= 9 ){
    minutes = "0" + minutes;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
          + " " + hours + seperator2 + minutes;
  return currentdate;
}

// 返回默认时区
function getDefaultTimeZone (list) {
  var defaul_tTime_zond = -(new Date().getTimezoneOffset()) / 60;
  var timeZoneNumber=list.indexOf(defaul_tTime_zond)+1;
  return timeZoneNumber;
};

/**
 * 实现复制到粘贴板
 * @param {string} str 需要被复制到粘贴板上的字符串
 */
function copyToClipboard (str) {
  var copyFun = function(e) {
    if (isNullOrEmpty(str) || Object.type(str) !== Object.type.STRING) {
      return new Error("parameter error!");
    }
    var clipboardData = e.clipboardData || window.clipboardData;
    clipboardData.setData('text', str);
    e.preventDefault();
  }
  document.addEventListener("copy", copyFun);
  var copyResult = document.execCommand("copy");
  document.removeEventListener("copy", copyFun)
  return copyResult;
}

/**
 * title标签内容太长换行
 * @param {*} strSource  原字符串变量
 * @param {*} flg  要插入的字符串
 * @param {*} sn  要插入的位置
 */
const setTitleLongNewLine = function (strSource, flg, sn) {
  if (strSource === null) {
    return strSource;
  }
  if ("string" === typeof strSource) {
    if (strSource.length > sn) {
      var newStr = "";
      for (var i = 0; i < strSource.length; i += sn) {
        var tmpStr = strSource.substring(i, i + sn);
        if (tmpStr.length < sn) {
          newStr += tmpStr;
        } else { 
          newStr += tmpStr + flg; 
        }
      }
      return newStr;
    }
  }
  return strSource;
}

// 判断是否是ipad
const isIPad = new RegExp("\\biPad\\b", "i").test(window.navigator.userAgent);

//适应1.25DPI缩放
function fitPixel(num) {
  // 解决如果移动的时候值为-0的情况，setBounds报错
  if(num>-4&&num<0){
    return 0;
  }
  return parseInt(num / 4) * 4;
}
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();