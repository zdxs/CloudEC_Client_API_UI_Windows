webpackJsonp([27],{121:function(e,t,n){e.exports=n(0)(563)},1759:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HwLogSdk=void 0;var i=n(121),a=r(i),o=n(4),c=r(o),u=n(1760);t.HwLogSdk=function e(){(0,c.default)(this,e),this.getLogApi=u.getLogApi,(0,a.default)(this,(0,u.getLogApi)().getApiList())}},1760:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LogImpl=t.getLogApi=void 0;var i=n(1),a=r(i),o=n(2),c=r(o),u=n(117),l=r(u),s=n(4),f=r(s),d=n(118),p=r(d),g=n(119),w=r(g),h=n(990),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),_=n(1762),k=(window.Logger("log")("LogImpl"),void 0),L=(t.getLogApi=function(){return isNullOrEmpty(k)&&(k=new L),k},t.LogImpl=function(e){function t(){var e=this;(0,f.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,l.default)(t)).call(this));return n.collectLogs=function(){var t=(0,c.default)(a.default.mark(function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.isOpen;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.collectLogs(r));case 1:case"end":return e.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}(),n.zipFeedbackFile=function(){var t=(0,c.default)(a.default.mark(function t(n){var r=n.value,i=n.isUploadLog,o=n.imgList;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.zipFeedbackFile)(r,i,o));case 1:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.quickZipFeedbackFile=function(){var t=(0,c.default)(a.default.mark(function t(n){var r=n.value,i=n.keyWords;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.quickZipFeedbackFile)(r,i));case 1:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.collectLogsAndOpen=(0,c.default)(a.default.mark(function t(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.collectLogsAndOpen());case 1:case"end":return e.stop()}},t,e)})),n.collectLogCuts=function(){var t=(0,c.default)(a.default.mark(function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.logName;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.collectLogCuts(r));case 1:case"end":return e.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}(),n}return(0,w.default)(t,e),t}(coreLazyLoad.LogApi))},1761:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.cleanCrashLogMac=t.cleanCrashLogWin=void 0;var i=n(3),a=r(i),o=n(1),c=r(o),u=n(2),l=r(u),s=n(792),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=window.Logger("log")("crashClean"),p=(t.cleanCrashLogWin=function(){var e=(0,l.default)(c.default.mark(function e(){var t,n,r,i;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=window.path.join(window.LOG_PATH,"fr_exception/Local").replace(/\\/g,"/"),n=f.CRASH_FILE_TIME_LIMIT,window.fs.existsSync(t)&&(d.info("cleanCrashLogWin start"),r=(new Date).getTime(),i=window.fs.readdirSync(t),i.forEach(function(e){var i=t+"/"+e,a=window.fs.statSync(i);if(a.isFile()){var o=a.mtime.getTime();Math.floor(r-o)>n&&(d.info("cleanCrashLogWin delete overtime file, limit="+n+", file="+e),window.fs.unlinkSync(i))}}));case 3:case"end":return e.stop()}},e,void 0)}));return function(){return e.apply(this,arguments)}}(),function(){var e=(0,l.default)(c.default.mark(function e(t,n){var r,i,a,o;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=window.fs.readdirSync(t),i=0;case 2:if(!(i<r.length)){e.next=11;break}if(a=r[i],!a.startsWith("CloudLink")&&!a.startsWith("WeLinkSdk")){e.next=8;break}return o=window.path.join(t,a),e.next=8,appService.copyFile(o,n);case 8:i++,e.next=2;break;case 11:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}());t.cleanCrashLogMac=function(){var e=(0,l.default)(c.default.mark(function e(){var t,n;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d.info("cleanCrashLogMac start"),t=window.process.env.HOME,n=window.path.join(window.LOG_PATH,"MacCrash"),window.fs.existsSync(path)&&(appService.deleteFileDir(n),d.info("cleanCrashLogMac delete old dir")),e.abrupt("return",new a.default(function(e,r){var i=this;appService.makeDir(n).then((0,l.default)(c.default.mark(function r(){var a;return c.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(a=window.path.join(t,"Library/Logs/DiagnosticReports"),!window.fs.existsSync(a)){r.next=6;break}return r.next=4,p(a,n);case 4:r.next=7;break;case 6:d.info("cleanCrashLogMac system crash dir not exist");case 7:e();case 8:case"end":return r.stop()}},r,i)})),function(){d.info("cleanCrashLogMac make dir failed"),r()})}));case 5:case"end":return e.stop()}},e,void 0)}));return function(){return e.apply(this,arguments)}}()},1762:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.quickZipFeedbackFile=t.zipFeedbackFile=void 0;var i=n(1),a=r(i),o=n(3),c=r(o),u=n(2),l=r(u),s=n(991),f=n(990),d=n(792),p=window.Logger("log")("feedback");t.zipFeedbackFile=function(){var e=(0,l.default)(a.default.mark(function e(t,n,r){var i;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.info("zipFeedbackFile start"),i=new c.default(function(){var e=(0,l.default)(a.default.mark(function e(i,o){var u,l,g,w,h;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u=[],!t&&0===r.length){e.next=12;break}return e.prev=2,e.next=5,appService.makeDir(window.FEEDBACK_PATH);case 5:t&&(t=t.replaceAll("\n","\r\n"),p.info("zipFeedbackFile write content"),l=appService.writeFile(window.FEEDBACK_PATH,"feedback.txt",t),u.push(l)),0!==r.length&&r.map(function(e){p.info("zipFeedbackFile copy img path=",e);var t=appService.copyFile(e,window.FEEDBACK_PATH);u.push(t)}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),p.error("zipFeedbackFile makeDir error=",e.t0);case 12:g=[],n&&(p.info("zipFeedbackFile add log"),w=(0,f.getLogPath)(),g.push(w)),h=function(e){if(e.length<=0)p.info("zipFeedbackFile failed, list is null"),o();else{var t=window.getZipLogPath(),n=coreAccount.getLoginModel(),r=n.isSupportAS,a=n.show_account,c=(new Date).format("yyyy_MM_dd_hh_mm_ss"),u=d.LOG_FEEDBACK_ZIP_FILE_NAME;r&&(u=a+"_"+c+".zip");var l=t+"/"+u;(0,s.dealZip)(e,l).then(function(e){appService.deleteFileDir(window.FEEDBACK_PATH),p.info("zipFeedbackFile zip success"),i(e)},function(){appService.deleteFileDir(window.FEEDBACK_PATH),p.info("zipFeedbackFile failed"),o()})}},u.length>0?(p.info("zipFeedbackFile start promiseArr"),c.default.all(u).then(function(){g.push(window.FEEDBACK_PATH),h(g)},function(){h(g)})):h(g);case 16:case"end":return e.stop()}},e,void 0,[[2,9]])}));return function(t,n){return e.apply(this,arguments)}}()),e.abrupt("return",i);case 3:case"end":return e.stop()}},e,void 0)}));return function(t,n,r){return e.apply(this,arguments)}}(),t.quickZipFeedbackFile=function(){var e=(0,l.default)(a.default.mark(function e(t,n){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.info("quickZipFeedbackFile start ,value is:",t,"[keywords] is:",desensitive(n)),e.abrupt("return",new c.default(function(){var e=(0,l.default)(a.default.mark(function e(r,i){var o,u,g,w,h,v,_;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],e.prev=1,e.next=4,appService.makeDir(window.FEEDBACK_PATH);case 4:return t&&(t="content:"+t+" keywords:"+n,p.info("quickZipFeedbackFile write content"),u=appService.writeFile(window.FEEDBACK_PATH,"feedback.txt",t),o.push(u)),g=[],p.info("quickZipFeedbackFile add log"),w=(new Date).format("yyyyMMdd_hhmmss"),h="logMini_win_"+w+"_"+n+".zip",e.next=11,(0,f.collectLogCuts)(h);case 11:if(v=e.sent,g.push(v),_=function(){var e=(0,l.default)(a.default.mark(function e(t){var o,c,u,l,f,g,w;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<=0)){e.next=5;break}p.info("quickZipFeedbackFile failed, list is null"),i("startZipFile length error"),e.next=14;break;case 5:return o=window.getZipLogPath(),c=coreAccount.getLoginModel(),u=c.isSupportAS,l=c.show_account,f=(new Date).format("yyyy_MM_dd_hh_mm_ss"),g=d.LOG_FEEDBACK_ZIP_FILE_NAME,u&&(g=l+"_"+n+"_"+f+".zip"),w=o+"/"+g,e.next=14,(0,s.dealZip)(t,w).then(function(e){appService.deleteFileDir(window.FEEDBACK_PATH),p.info("quickZipFeedbackFile zip success"),r(e)},function(){appService.deleteFileDir(window.FEEDBACK_PATH),p.info("quickZipFeedbackFile failed"),i("startZipFile zip error")});case 14:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),!(o.length>0)){e.next=31;break}return p.info("quickZipFeedbackFile start promiseArr"),e.prev=16,e.next=19,c.default.all(o);case 19:return g.push(window.FEEDBACK_PATH),e.next=22,_(g);case 22:e.next=29;break;case 24:return e.prev=24,e.t0=e.catch(16),e.next=28,_(g);case 28:p.error("quickZipFeedbackFile promiseArr error=",e.t0);case 29:e.next=33;break;case 31:return e.next=33,_(g);case 33:e.next=39;break;case 35:e.prev=35,e.t1=e.catch(1),p.error("quickZipFeedbackFile error=",e.t1),i(e.t1);case 39:case"end":return e.stop()}},e,void 0,[[1,35],[16,24]])}));return function(t,n){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}()},792:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CRASH_FILE_TIME_LIMIT=2592e5,t.LOG_FEEDBACK_ZIP_FILE_NAME="feedback.zip",t.LOG_CUT_LIST=["CloudLink.log","CloudLink_1.log","CloudLink.txt","CloudLink.txt.bak","CloudLink 20","____cloudlink_time.txt","Setup Log 20","debugInfo_","nativewnd.log","nativewnd_1.log","fr_trace.log","fr_fun.log","version.ini","db.log","db_1.log","tup_audio.log","tup_audio_1.log","tup_bfcpservice.log","tup_bfcpservice_1.log","tup_call.log","tup_call_1.log","tup_confctrl.log","tup_confctrl_1.log","tup_cui.log","tup_cui_1.log","tup_eaddr.log","tup_eaddr_1.log","tup_http.log","tup_http_1.log","tup_im_service.log","tup_im_service_1.log","tup_login.log","tup_login_1.log","tup_mediaservice.log","tup_mediaservice_1.log","tup_offlinefile.log","tup_offlinefile_1.log","tup_video.log","tup_video_1.log","tupService.log","tupService_1.log"]},990:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.collectLogCuts=t.collectLogsAndOpen=t.collectLogs=t.getCrashLogPath=t.getLogPath=void 0;var i=n(3),a=r(i),o=n(1),c=r(o),u=n(2),l=r(u),s=n(792),f=n(1761),d=n(991),p=window.Logger("log")("collect");!function(){p.info("moduleInit start");try{var e=window.getZipLogPath();appService.deleteFileDir(e),appService.deleteFileDir(e.replace("outputFile","log_for_send"))}catch(e){p.error("moduleInit error=",e)}}();var g=t.getLogPath=function(){var e=window.LOG_PATH;return e},w=t.getCrashLogPath=function(){var e=g();return e+="/fr_exception/local_tracked"},h=function(){var e=(0,l.default)(c.default.mark(function e(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=4;break;case 4:e.next=9;break;case 7:e.next=12;break;case 9:return e.next=12,(0,f.cleanCrashLogWin)();case 12:case"end":return e.stop()}},e,void 0)}));return function(){return e.apply(this,arguments)}}(),v=t.collectLogs=function(){var e=(0,l.default)(c.default.mark(function e(t){var n,r,i,o,u,l,s;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.info("collectLogs start, isOpen=",t),e.next=3,h();case 3:return n=(new Date).format("yyyyMMdd_hhmmss"),r="logFull_win_"+n+".zip",i=g(),o=[i],u=window.getZipLogPath(),l=u+"/"+r,t&&(l=l.replace("outputFile","log_for_send")),s=new a.default(function(e,n){(0,d.dealZip)(o,l).then(function(n){t&&appService.openFolder(n),p.info("collectLogs zip log success"),e(n)},function(){p.info("collectLogs zip log failed"),n()})}),e.abrupt("return",s);case 12:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),_=(t.collectLogsAndOpen=function(){p.info("collectLogsAndOpen start"),window.alert(""+language.LOG_COMPRESS_PROMPT),v(!0).then(function(){window.clearDialogQueue&&window.clearDialogQueue()},function(){window.clearDialogQueue&&window.clearDialogQueue(),window.ToastNew(language.LOG_ZIP_FAILED_PROMPT,2)})},function(e){var t=!1;return s.LOG_CUT_LIST.forEach(function(n){0===e.indexOf(n)&&(t=!0)}),t}),k=function(){var e=(0,l.default)(c.default.mark(function e(t,n){var r,i,a,o,u,l,s,f,d,g;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p.info("getCutList logPath=",t),r=void 0,!window.CLIENTCONFIG.ISMOBILE){e.next=24;break}return e.next=5,window.getDirEntries(t);case 5:r=e.sent,i=0;case 7:if(!(i<r.length)){e.next=22;break}if(a=r[i],o=a.toURL(),o=decodeURIComponent(o),u=getFileName(o),l=t+"/"+u,!a.isDirectory){e.next=18;break}return e.next=16,k(l,n);case 16:e.next=19;break;case 18:_(u)&&n.push(l);case 19:i++,e.next=7;break;case 22:e.next=39;break;case 24:r=window.fs.readdirSync(t),s=0;case 26:if(!(s<r.length)){e.next=39;break}if(f=r[s],d=t+"/"+f,g=window.fs.statSync(d),!g.isDirectory()){e.next=35;break}return e.next=33,k(d,n);case 33:e.next=36;break;case 35:_(f)&&n.push(d);case 36:s++,e.next=26;break;case 39:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}(),L=function(e){if(e.length>0){for(var t=0;t<e.length-1;t++)for(var n=t+1;n<e.length;n++)if(e[t].time<e[n].time){var r=e[t];e[t]=e[n],e[n]=r}return e}return[]},F=function(){var e=(0,l.default)(c.default.mark(function e(t){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new a.default(function(e,n){t.file(function(t){e(t.lastModifiedDate)},function(t){p.info("getMobileFileStats, fail=",t),e()})}));case 1:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,l.default)(c.default.mark(function e(t){var n,r,i,a,o,u,l,s,f,d,g,w,h,v,_,k,m,x=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.info("sortLogFileByEditTime, path=",t),n=[],e.next=4,appService.getDirFileList(t);case 4:if(r=e.sent,!window.CLIENTCONFIG.ISMOBILE){e.next=30;break}i=0;case 7:if(!(i<r.length)){e.next=28;break}if(a=r[i],o=a.toURL(),o=decodeURIComponent(o),u=getFileName(o),l=t+"/"+u,!x){e.next=21;break}if(0!==u.indexOf("dataconf")&&0!==u.indexOf("HuaweiMeeting_")||0===u.indexOf("dataconf_oper_0.log")){e.next=19;break}return e.next=17,F(a);case 17:s=e.sent,n.push({filePath:l,time:s});case 19:e.next=25;break;case 21:return e.next=23,F(a);case 23:f=e.sent,n.push({filePath:l,time:f});case 25:i++,e.next=7;break;case 28:e.next=31;break;case 30:for(d=0;d<r.length;d++)g=r[d],w=getFileName(g),x?0!==w.indexOf("dataconf")&&0!==w.indexOf("HuaweiMeeting_")||0===w.indexOf("dataconf_oper_0.log")||(h=window.fs.statSync(g),v=h.mtime.getTime(),n.push({filePath:g,time:v})):(_=window.fs.statSync(g),k=_.mtime.getTime(),n.push({filePath:g,time:k}));case 31:return m=L(n),e.abrupt("return",m);case 33:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,l.default)(c.default.mark(function e(t,n){var r,i,a,o,u;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.info("getDataConfLogCutList start, limit=",t),r=g()+"/dataconf",e.next=4,m(r,!0);case 4:for(i=e.sent,a=i.length>t?t:i.length,o=0;o<a;o++)u=i[o].filePath,n.push(u);case 7:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=(0,l.default)(c.default.mark(function e(t,n){var r,i,a,o,u;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.info("getCrashLogCutList start, limit=",t),r=w(),e.next=4,m(r,!1);case 4:for(i=e.sent,a=i.length>t?t:i.length,o=0;o<a;o++)u=i[o].filePath,n.push(u);case 7:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}(),y=(function(){var e=(0,l.default)(c.default.mark(function e(){var t,n,r,i,a,o,u,l,s,f;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.info("sortAndroidCrashLogFileByEditTime start"),t=g(),n=[],e.next=5,appService.getDirFileList(t);case 5:r=e.sent,i=0;case 7:if(!(i<r.length)){e.next=21;break}if(a=r[i],o=a.toURL(),o=decodeURIComponent(o),u=getFileName(o),l=t+"/"+u,!(0===u.indexOf("CloudLinkCrash")||u.indexOf(".dmp")>=0)){e.next=18;break}return e.next=16,F(a);case 16:s=e.sent,n.push({filePath:l,time:s});case 18:i++,e.next=7;break;case 21:return f=L(n),e.abrupt("return",f);case 23:case"end":return e.stop()}},e,void 0)}))}(),function(){var e=(0,l.default)(c.default.mark(function e(t,n){var r,i,a,o,u;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p.info("getCrashLogCutListNoUt start, limit=",t),r=[],e.next=8;break;case 5:r=e.sent,e.next=13;break;case 8:return i=g()+"/fr_exception/Local",e.next=12,m(i,!1);case 12:r=e.sent;case 13:for(a=r.length>t?t:r.length,o=0;o<a;o++)u=r[o].filePath,n.push(u);case 15:case"end":return e.stop()}},e,void 0)}));return function(t,n){return e.apply(this,arguments)}}());t.collectLogCuts=function(){var e=(0,l.default)(c.default.mark(function e(t){var n,r,i,o,u;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(n=(new Date).format("yyyyMMdd_hhmmss"),t="logMini_win_"+n+".zip"),p.info("collectLogCuts start, logName=",t),e.next=4,h();case 4:return r=[],i=g(),o=window.getZipLogPath(),e.next=9,k(i,r);case 9:return e.next=11,x(2,r);case 11:return e.next=14,b(2,r);case 14:return e.next=16,y(2,r);case 16:return u=new a.default(function(e,n){var i=o+"/"+t;r.length>0?(0,d.dealZip)(r,i).then(function(t){p.info("collectLogCuts zip log success"),e(t)},function(){p.info("collectLogCuts zip log failed"),n()}):(p.info("collectLogCuts no cut file"),n())}),e.abrupt("return",u);case 18:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()},991:function(e,t,n){"use strict";function r(e,t){return new o.default(function(n,r){var i=getFileName(t),a=t.replace(i,"");window.fs.existsSync(a)||(window.fs.mkdirSync(a),c.info("dealZipPc make output path success, outPath=",a));var o=null,u=window.archiver("zip",{zlib:{level:9}}),l=window.fs.createWriteStream(t);u.on("error",function(e){c.error("dealZipPc, err=",e),r(e)}),u.on("finish",function(){c.info("dealZipPc zip success")}),l.on("close",function(){o&&clearTimeout(o),c.info("dealZipPc file descriptor closed, size = "+u.pointer()+" bytes"),n(t)}),u.pipe(l),s(u,e),u.finalize(),c.info("dealZipPc start zipLog"),o=setTimeout(function(){r("dealZipPc zip timeout")},1e5)})}function i(e,t){return c.info("dealZipMobile list =",e),new o.default(function(n,r){var i=getFileName(t),a=t.replace(i,"");window.comPressDirOrFile(e,a,i,function(e){""===e?(c.info("dealZipMobile: compress files failed"),r()):(c.info("dealZipMobile: compress files success"),n(e))})})}Object.defineProperty(t,"__esModule",{value:!0}),t.dealZip=void 0;var a=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.dealZipPc=r,t.dealZipMobile=i;var c=window.Logger("log")("zip"),u=function e(t,n){try{for(var r=window.fs.readdirSync(n),i=0;i<r.length;i++){var a=r[i],o=n+"/"+a,u=window.fs.statSync(o);if(u.isFile())try{var l=window.fs.readFileSync(o);t.append(l,{name:a})}catch(e){c.error("addFilesToArchiver readFileSync error=",e)}else u.isDirectory()&&e(t,o)}}catch(e){c.error("addFilesToArchiver error=",e)}},l=function e(t){var n=!1;try{for(var r=window.fs.readdirSync(t),i=0;i<r.length;i++){var a=r[i],o=t+"/"+a,u=window.fs.statSync(o);if(u.isFile())try{window.fs.readFileSync(o)}catch(e){c.error("checkDirFiles file = ",a+", error=",e),n=!0}else u.isDirectory()&&e(o)}}catch(e){c.error("checkDirFiles error=",e),n=!0}return n},s=function(e,t){try{for(var n=0;n<t.length;n++){var r=t[n],i=window.fs.statSync(r);if(i.isDirectory())l(r)?u(e,r):e.directory(r,getFileName(r));else if(i.isFile()){var a=getFileName(r);try{var o=window.fs.readFileSync(r);e.append(o,{name:a})}catch(e){c.error("addItemsToArchiver file = ",a+", error=",e)}}}}catch(e){c.error("addItemsToArchiver error=",e)}};t.dealZip=function(e,t){return window.CLIENTCONFIG.ISMOBILE?i(e,t):r(e,t)}}});