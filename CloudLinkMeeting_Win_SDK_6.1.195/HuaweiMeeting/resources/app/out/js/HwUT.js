webpackJsonp([6],{1101:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.UTImpl=t.getUtApi=void 0;var a=n(162),i=r(a),o=n(1),u=r(o),s=n(2),c=r(s),f=n(128),d=r(f),l=n(4),p=r(l),v=n(129),_=r(v),h=n(130),T=r(h),E=n(862),g=r(E),I=n(1103),m=r(I),U=n(1104),w=r(U),N=n(1105),y=r(N),k=n(864),x=r(k),P=n(863),A=r(P),b=coreLogger.getLogger("UT")("logic/usertrack"),O=void 0,D=(t.getUtApi=function(){return isNullOrEmpty(O)&&(O=new D),O},t.UTImpl=function(e){function t(){var e=this;(0,p.default)(this,t);var n=(0,_.default)(this,(t.__proto__||(0,d.default)(t)).call(this));return n.utConfigAccountInfo=function(e){var t=e.configAccount,n=e.configUuid;x.default.getInstance().configUserInfo(t,n)},n.utConfigAppId=function(){var t=(0,c.default)(u.default.mark(function t(n){var r=n.configAppId;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:x.default.getInstance().configAppId(r);case 1:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utConfigLanguage=function(){var t=(0,c.default)(u.default.mark(function t(n){var r=n.language;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:A.default.getInstance().configLanguage(r);case 1:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utPageAppear=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,i,o=r.pageName;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o&&0!==o.length){e.next=3;break}return b.warn("[UT]pageName is empty!"),e.abrupt("return");case 3:a=n.utPageInfo.pageTreeIndexByPageName(o),i=new g.default(constant.EVENT_ID.UT_PAGE,[a,o,constant.UT_PAGE_ACTION.UT_PAGE_APPEAR]),n.utManager.addTrackerData(i);case 6:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utPageDisappear=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,i,o=r.pageName,s=r.showTime;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o&&0!==o.length){e.next=3;break}return b.warn("[UT]pageName is empty!"),e.abrupt("return");case 3:a=n.utPageInfo.pageTreeIndexByPageName(o),i=new g.default(constant.EVENT_ID.UT_PAGE,[a,o,constant.UT_PAGE_ACTION.UT_PAGE_DISAPPEAR,s]),n.utManager.addTrackerData(i);case 6:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utPageLoad=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,i,o=r.pageName,s=r.loadTime;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o&&0!==o.length){e.next=3;break}return b.warn("[UT]pageName is empty!"),e.abrupt("return");case 3:a=n.utPageInfo.pageTreeIndexByPageName(o),i=new g.default(constant.EVENT_ID.UT_PAGE,[a,o,constant.UT_PAGE_ACTION.UT_PAGE_LOAD_TIMES,s]),n.utManager.addTrackerData(i);case 6:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utConfOperate=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,i,o,s=r.eventId,c=r.params;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=3;break}return b.warn("[UT]eventId is empty!"),e.abrupt("return");case 3:a=new Array,i=coreConf.getCurrentConfId(),i&&a.push(i),c instanceof Array&&c.length>0&&(a=a.concat(c)),o=new g.default(s,a),n.utManager.addTrackerData(o);case 9:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utCustomEvent=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,i=r.eventId,o=r.params;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=3;break}return b.warn("[UT]eventId is empty!"),e.abrupt("return");case 3:a=new g.default(i,o),n.utManager.addTrackerData(a);case 5:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utHandleNativeCrashInfo=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,i,o=r.crashInfoArray;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(b.info("[UT]utHandleNativeCrashInfo"),o instanceof Array&&o.length>0)for(a=0;a<o.length;a++)i=new g.default(constant.EVENT_ID.UT_CRASH,[o[a]]),n.utManager.addTrackerData(i);case 2:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utHandleServerError=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,i=r.isLocalError,o=r.requestId,s=r.serverName,c=r.serverApiName,f=r.errorCode,d=r.errorDescription;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!isNullOrEmpty(s)){e.next=3;break}return b.warn("[UT] handle server error serverName is empty!"),e.abrupt("return");case 3:if(!isNullOrEmpty(c)){e.next=6;break}return b.warn("[UT] handle server error serverReqName is empty!"),e.abrupt("return");case 6:if(!isNullOrEmpty(f)){e.next=9;break}return b.warn("[UT] handle server error errorCode is empty!"),e.abrupt("return");case 9:isNullOrEmpty(o)&&(o=""),isNullOrEmpty(d)&&(d=""),a=new g.default(constant.EVENT_ID.UT_SERVER_ERROR,[i,o,s,c,f,d]),n.utManager.addTrackerData(a);case 13:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utEventStart=function(e){var t=e.eventId,r=e.extraTrackKey,a=e.params;if(!t)return void b.warn("[UT]eventId is empty!");var i=t;isNullOrEmpty(r)||(i=t+r);var o=new y.default(a);n.actionResponseUTInfos.set(i,o)},n.utEventFinish=function(e){var t=e.eventId,r=e.extraTrackKey,a=e.resultParams,i=e.isTrackTimeCosts,o=void 0!==i&&i;if(!t)return void b.warn("[UT]eventId is empty!");var u=t;isNullOrEmpty(r)||(u=t+r);var s=n.actionResponseUTInfos.get(u);if(!s)return void b.warn("[UT]actionResponseInfo for key"+u+" is not found in actionResponseUTInfos");var c=new Array;if(s.params.length>0&&(c=c.concat(s.params)),a.length>0&&(c=c.concat(a)),o){var f=Date.now()-s.actionTime;f<0&&(b.warn("[UT]action response time cost less than 0!"),f=0),c.push(f)}var d=new g.default(t,c);n.utManager.addTrackerData(d),n.actionResponseUTInfos.delete(u)},n.utHandleFileTransfer=function(){var t=(0,c.default)(u.default.mark(function t(r){var a,i,o=r.sendAccount,s=r.recvAccount,c=r.ipAddress,f=r.fileName,d=r.fileSize,l=r.transferSpeed,p=void 0===l?0:l;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!isNullOrEmpty(o)){e.next=3;break}return b.warn("[UT]sendAccount is empty!"),e.abrupt("return");case 3:if(!isNullOrEmpty(s)){e.next=6;break}return b.warn("[UT]recvAccount is empty!"),e.abrupt("return");case 6:if(!isNullOrEmpty(c)){e.next=9;break}return b.warn("[UT] ipAddress is empty!"),e.abrupt("return");case 9:if(!isNullOrEmpty(f)){e.next=12;break}return b.warn("[UT]fileName is empty!"),e.abrupt("return");case 12:if(!isNullOrEmpty(d)){e.next=15;break}return b.warn("[UT]fileSize is empty!"),e.abrupt("return");case 15:a=[o,s,c,f,d],isNullOrEmpty(p)||a.push(p),i=new g.default(constant.EVENT_ID.UT_FILE_TRANSFER,a),n.utManager.addTrackerData(i);case 19:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.utHandleMobileSystemBroken=(0,c.default)(u.default.mark(function t(){var r,a,i,o,s,c,f;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("mac"!==(r=window.CLIENTCONFIG.PLATFORM)&&"win"!==r){e.next=4;break}return b.info("[UT]utHandleMobileSystemBroken ignore desktop client!"),e.abrupt("return");case 4:return e.next=6,appService.isSystemBroken();case 6:if(a=e.sent,b.info("[UT]utHandleMobileSystemBroken isSystem broken:",a),!a){e.next=22;break}return e.next=11,coreAccount.getLoginModel();case 11:if(i=e.sent,o=i.account,!isNullOrEmpty(o)){e.next=16;break}return b.warn("[UT]utHandleMobileSystemBroken acount is empty!"),e.abrupt("return");case 16:return s=appService.getReceiveFilesPath(coreAccount.getLoginModel().account),e.next=19,appService.fileCountInPath(s);case 19:c=e.sent,f=new g.default(constant.EVENT_ID.UT_FILE_TRANSFER,[c]),n.utManager.addTrackerData(f);case 22:case"end":return e.stop()}},t,e)})),n.instance=null,n.utManager=m.default.getInstance(),n.utPageInfo=new w.default,n.actionResponseUTInfos=new i.default,n}return(0,T.default)(t,e),t}(coreLazyLoad.UTApi))},1102:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1),i=r(a),o=n(2),u=r(o),s=n(4),c=r(s),f=function e(){var t=this;(0,c.default)(this,e),this.refreshNetInfo=(0,u.default)(i.default.mark(function e(){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("mac"!==(n=window.CLIENTCONFIG.PLATFORM)&&"win"!==n){e.next=6;break}return e.next=4,t.refreshDesktopClientNetInfo();case 4:e.next=8;break;case 6:return e.next=8,t.refreshMobileClientNetInfo();case 8:case"end":return e.stop()}},e,t)})),this.refreshDesktopClientNetInfo=(0,u.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,appService.netInfo();case 2:t.access=e.sent;case 3:case"end":return e.stop()}},e,t)})),this.refreshMobileClientNetInfo=(0,u.default)(i.default.mark(function e(){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,appService.netInfo();case 2:n=e.sent,n instanceof Array&&3===n.length&&(t.carrier=n[0],t.access=n[1],"wifi"===t.access?t.accessSubtype="unknown":t.accessSubtype=n[2]);case 4:case"end":return e.stop()}},e,t)})),this.carrier="",this.access="",this.accessSubtype=""};t.default=f},1103:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(69),i=r(a),o=n(1),u=r(o),s=n(2),c=r(s),f=n(4),d=r(f),l=n(5),p=r(l),v=n(862),_=r(v),h=1e3,T=100,E="rest/usg/ops/v1/operations/terminalaction",g=coreLogger.getLogger("service")("UTManager"),I=function(){function e(){var t=this;(0,d.default)(this,e),this.initDbUtCount=(0,c.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==t.dbUtCacheCount){e.next=4;break}return e.next=3,coreDb.queryUserTrackList({alllength:""});case 3:t.dbUtCacheCount=e.sent;case 4:case"end":return e.stop()}},e,t)})),this.addTrackerData=function(){var e=(0,c.default)(u.default.mark(function e(n){var r,a,i,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n instanceof _.default){e.next=3;break}return g.error("[UT] utInfo require a UTInfo  member, ignore other!"),e.abrupt("return");case 3:return e.next=5,coreAccount.getMyInfo();case 5:if(r=e.sent,a=r.isAutoCollectLogs){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,coreAccount.getLoginModel();case 11:if(i=e.sent,!t.isServerNoSupportUTUpload(i)){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,n.toUTString();case 16:return o=e.sent,e.next=19,t.saveUTInfoDesc2DB(o);case 19:return e.next=21,t.initDbUtCount();case 21:if(t.dbUtCacheCount++,!t.isInUploading){e.next=25;break}return g.info("[UT] in uploading, ignore."),e.abrupt("return");case 25:g.info("[UT] teacklist count:"+t.dbUtCacheCount+" UT_ONCE_UPLOAD_COUNT"+T),t.dbUtCacheCount>=T&&t.uploadUserTrackData();case 27:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.uploadUserTrackData=(0,c.default)(u.default.mark(function e(){var n,r,a,i,o,s,c,f,d,l,p,v;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,coreAccount.getMyInfo();case 2:if(n=e.sent,r=n.isAutoCollectLogs){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,coreAccount.getLoginModel();case 8:if(a=e.sent,i=a.isSupportAS){e.next=12;break}return e.abrupt("return");case 12:if(!t.isInUploading){e.next=15;break}return g.info("[UT]in uploading, ignore new upload"),e.abrupt("return");case 15:return t.isInUploading=!0,t.stopUploadTimer(),g.info("[UT] uploadUserTrackData"),e.next=20,t.getUploadLists();case 20:if(o=e.sent,0!==o.length){e.next=26;break}return g.info("[UT] no date need upload, ignore!"),t.isInUploading=!1,t.startUploadTimer(),e.abrupt("return");case 26:if(s=t.prepareUploadDataBody(o,a.account),c="https://"+a.serverUportalAddress+":"+a.serverUportalPort+"/"+E,f=a.authToken,0!==f.length){e.next=33;break}return t.isInUploading=!1,t.startUploadTimer(),e.abrupt("return");case 33:return e.next=35,coreHttp.sendSyncRequest({url:c,type:constant.REQUEST_TYPE.POST,header:{"Content-Type":"application/json",Authorization:"Basic "+f},body:s});case 35:if(d=e.sent,l=d.param&&d.param.resp_code,p=d.result,g.info("[UT] statusCode:"+l+" retCode:"+p),!l){e.next=52;break}if(200!==(v=parseInt(l))){e.next=47;break}return g.info("[UT] upload info success!"),e.next=45,t.deleteUploadedUTList(o);case 45:e.next=50;break;case 47:return g.error("[UT] upload failed, request error, status code: "+l+", result: "+p),e.next=50,t.deleteOverflowUtList();case 50:e.next=55;break;case 52:return g.error("[UT] upload failed, status code:"+l),e.next=55,t.deleteOverflowUtList();case 55:t.isInUploading=!1,t.startUploadTimer();case 57:case"end":return e.stop()}},e,t)})),this.getUploadLists=(0,c.default)(u.default.mark(function e(){var n,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,coreDb.queryUserTrackList({alllength:""});case 2:if(n=e.sent,t.dbUtCacheCount=n,r=void 0,!(n>=T)){e.next=11;break}return e.next=8,coreDb.queryUserTrackList({limitcount:T});case 8:r=e.sent,e.next=14;break;case 11:return e.next=13,coreDb.queryUserTrackList();case 13:r=e.sent;case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}},e,t)})),this.prepareUploadDataBody=function(e,t){for(var n="",r=0;r<e.length;r++){n+=e[r].content,r!==e.length-1&&(n+="\n")}var a={user:t,data:n};return(0,i.default)(a)},this.saveUTInfoDesc2DB=function(){var e=(0,c.default)(u.default.mark(function e(n){var r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!isNullOrEmpty(n)){e.next=3;break}return g.warn("[UT] utinfodesc is empty, ignore save to db!"),e.abrupt("return");case 3:return r={id:0,content:n,retryCount:0},e.next=6,coreDb.saveUserTrack(r);case 6:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.deleteUploadedUTList=function(){var e=(0,c.default)(u.default.mark(function e(n){var r,a,i;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(r="",a=n.length,i=0;i<a;i++)r+=n[i].id,i<a-1&&(r+=",");return e.next=5,coreDb.deleteusertrack({all:"",idlist:r});case 5:t.dbUtCacheCount-=a;case 6:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.deleteOverflowUtList=(0,c.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.dbUtCacheCount>h)){e.next=4;break}return e.next=3,coreDb.deleteusertrack({limitcount:h});case 3:t.dbUtCacheCount=h;case 4:case"end":return e.stop()}},e,t)})),this.instance=null,this.localTimer=null,this.uploadTimer=null,this.UTMemoryCache=null,this.isInUploading=!1,this.dbUtCacheCount=-1,this.startUploadTimer()}return(0,p.default)(e,[{key:"startUploadTimer",value:function(){var e=this;this.uploadTimer=setInterval(function(){return e.uploadUserTrackData()},6e5)}},{key:"stopUploadTimer",value:function(){clearInterval(this.uploadTimer)}},{key:"isServerNoSupportUTUpload",value:function(e){var t=e.isSupportAS,n=e.uportalLoginState===constant.UPORTAL_LOGIN_STATE.UPORTAL_LOGIN_SUCCESS;return!t&&n}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),e}();t.default=I},1104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UT_DESKTOP_PAGE_NAME_INDEX=t.UT_MOBILE_PAGE_NAME_INDEX=void 0;var r=n(4),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=t.UT_MOBILE_PAGE_NAME_INDEX={MLoginCtn:constant.UT_MOBILE_PAGE_INDEX.UT_MOBILE_PAGE_LOGIN,ConferenceHome:constant.UT_MOBILE_PAGE_INDEX.UT_MOBILE_PAGE_MEETING,ContactGroups:constant.UT_MOBILE_PAGE_INDEX.UT_MOBILE_PAGE_CONTACT,MyInfo:constant.UT_MOBILE_PAGE_INDEX.UT_MOBILE_PAGE_ME},o=t.UT_DESKTOP_PAGE_NAME_INDEX={UserLogin:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_LOGIN,CreateConference:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_MEETING_CREATE_CONF,JoinConference:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_MEETING_JOIN_CONF,BookConference:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_MEETING_BOOK_CONF,CloudConferenceRoom:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_MEETING_CLOUD_CONF,MyConferenceList:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_MEETING_MY_CONF,LeftDetail:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_CONTACT,CallRecordList:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_RECENT_CALL,Recent:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_IM,CorporateDirectory:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_ADDRESS_BOOK,Work:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_ADDRESS_WORK},u=function e(){var t=this;(0,a.default)(this,e),this.pageTreeIndexByPageName=function(e){var n=window.CLIENTCONFIG.PLATFORM;return"mac"===n||"win"===n?t._desktopPageTreeIndexByPageName(e):t._mobilePageTreeIndexByPageName(e)},this._desktopPageTreeIndexByPageName=function(e){return e&&0!==e.length?o[e]:constant.UT_DESKTOP_PAGE_INDEX.UT_DESKTOP_PAGE_DEFAULT},this._mobilePageTreeIndexByPageName=function(e){return e&&0!==e.length?i[e]:constant.UT_MOBILE_PAGE_INDEX.UT_MOBILE_PAGE_DEFAULT}};t.default=u},1105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function e(t){(0,a.default)(this,e),this.params=t,this.actionTime=Date.now(),this.actionResTimeCosts=0};t.default=i},128:function(e,t,n){e.exports={default:n(151),__esModule:!0}},129:function(e,t,n){e.exports=n(0)(45)},130:function(e,t,n){e.exports=n(0)(47)},132:function(e,t,n){e.exports=n(0)(562)},139:function(e,t,n){e.exports=n(0)(238)},144:function(e,t,n){var r=n(10),a=n(8),i=n(146);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],o={};o[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",o)}},146:function(e,t,n){e.exports=n(0)(59)},151:function(e,t,n){n(152),e.exports=n(8).Object.getPrototypeOf},152:function(e,t,n){var r=n(139),a=n(153);n(144)("getPrototypeOf",function(){return function(e){return a(r(e))}})},153:function(e,t,n){e.exports=n(0)(585)},162:function(e,t,n){e.exports={default:n(219),__esModule:!0}},163:function(e,t,n){var r=n(15);e.exports=function(e,t){if(!r(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},175:function(e,t,n){e.exports=n(0)(593)},188:function(e,t,n){"use strict";var r=n(25).f,a=n(199),i=n(29),o=n(11),u=n(28),s=n(24),c=n(200),f=n(201),d=n(37),l=n(30),p=n(175).fastKey,v=n(163),_=l?"_s":"size",h=function(e,t){var n,r=p(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var f=e(function(e,r){u(e,f,t,"_i"),e._t=t,e._i=a(null),e._f=void 0,e._l=void 0,e[_]=0,void 0!=r&&s(r,n,e[c],e)});return i(f.prototype,{clear:function(){for(var e=v(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[_]=0},delete:function(e){var n=v(this,t),r=h(n,e);if(r){var a=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=a),a&&(a.p=i),n._f==r&&(n._f=a),n._l==r&&(n._l=i),n[_]--}return!!r},forEach:function(e){v(this,t);for(var n,r=o(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!h(v(this,t),e)}}),l&&r(f.prototype,"size",{get:function(){return v(this,t)[_]}}),f},def:function(e,t,n){var r,a,i=h(e,t);return i?i.v=n:(e._l=i={i:a=p(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=i),r&&(r.n=i),e[_]++,"F"!==a&&(e._i[a]=i)),e},getEntry:h,setStrong:function(e,t,n){c(e,t,function(e,n){this._t=v(e,t),this._k=n,this._l=void 0},function(){for(var e=this,t=e._k,n=e._l;n&&n.r;)n=n.p;return e._t&&(e._l=n=n?n.n:e._t._f)?"keys"==t?f(0,n.k):"values"==t?f(0,n.v):f(0,[n.k,n.v]):(e._t=void 0,f(1))},n?"entries":"values",!n,!0),d(t)}}},189:function(e,t,n){"use strict";var r=n(7),a=n(10),i=n(175),o=n(146),u=n(35),s=n(29),c=n(24),f=n(28),d=n(15),l=n(36),p=n(25).f,v=n(202)(0),_=n(30);e.exports=function(e,t,n,h,T,E){var g=r[e],I=g,m=T?"set":"add",U=I&&I.prototype,w={};return _&&"function"==typeof I&&(E||U.forEach&&!o(function(){(new I).entries().next()}))?(I=t(function(t,n){f(t,I,e,"_c"),t._c=new g,void 0!=n&&c(n,T,t[m],t)}),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(e){var t="add"==e||"set"==e;e in U&&(!E||"clear"!=e)&&u(I.prototype,e,function(n,r){if(f(this,I,e),!t&&E&&!d(n))return"get"==e&&void 0;var a=this._c[e](0===n?0:n,r);return t?this:a})}),E||p(I.prototype,"size",{get:function(){return this._c.size}})):(I=h.getConstructor(t,e,T,m),s(I.prototype,n),i.NEED=!0),l(I,e),w[e]=I,a(a.G+a.W+a.F,w),E||h.setStrong(I,e,T),I}},190:function(e,t,n){var r=n(16),a=n(207);e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return a(this)}}},191:function(e,t,n){"use strict";var r=n(10);e.exports=function(e){r(r.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},192:function(e,t,n){"use strict";var r=n(10),a=n(12),i=n(11),o=n(24);e.exports=function(e){r(r.S,e,{from:function(e){var t,n,r,u,s=arguments[1];return a(this),t=void 0!==s,t&&a(s),void 0==e?new this:(n=[],t?(r=0,u=i(s,arguments[2],2),o(e,!1,function(e){n.push(u(e,r++))})):o(e,!1,n.push,n),new this(n))}})}},199:function(e,t,n){e.exports=n(0)(133)},200:function(e,t,n){e.exports=n(0)(241)},201:function(e,t,n){e.exports=n(0)(589)},202:function(e,t,n){var r=n(11),a=n(203),i=n(139),o=n(27),u=n(204);e.exports=function(e,t){var n=1==e,s=2==e,c=3==e,f=4==e,d=6==e,l=5==e||d,p=t||u;return function(t,u,v){for(var _,h,T=i(t),E=a(T),g=r(u,v,3),I=o(E.length),m=0,U=n?p(t,I):s?p(t,0):void 0;I>m;m++)if((l||m in E)&&(_=E[m],h=g(_,m,T),e))if(n)U[m]=h;else if(h)switch(e){case 3:return!0;case 5:return _;case 6:return m;case 2:U.push(_)}else if(f)return!1;return d?-1:c||f?f:U}}},203:function(e,t,n){e.exports=n(0)(236)},204:function(e,t,n){var r=n(205);e.exports=function(e,t){return new(r(e))(t)}},205:function(e,t,n){var r=n(15),a=n(206),i=n(6)("species");e.exports=function(e){var t;return a(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},206:function(e,t,n){e.exports=n(0)(595)},207:function(e,t,n){var r=n(24);e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},219:function(e,t,n){n(34),n(22),n(23),n(220),n(221),n(222),n(223),e.exports=n(8).Map},220:function(e,t,n){"use strict";var r=n(188),a=n(163);e.exports=n(189)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(a(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(a(this,"Map"),0===e?0:e,t)}},r,!0)},221:function(e,t,n){var r=n(10);r(r.P+r.R,"Map",{toJSON:n(190)("Map")})},222:function(e,t,n){n(191)("Map")},223:function(e,t,n){n(192)("Map")},67:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HwUTSdk=void 0;var a=n(132),i=r(a),o=n(4),u=r(o),s=n(1101);t.HwUTSdk=function e(){(0,u.default)(this,e),this.getUtApi=s.getUtApi,(0,i.default)(this,(0,s.getUtApi)().getApiList())}},69:function(e,t,n){e.exports={default:n(70),__esModule:!0}},70:function(e,t,n){var r=n(8),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},862:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1),i=r(a),o=n(2),u=r(o),s=n(4),c=r(s),f=n(5),d=r(f),l=n(863),p=r(l),v=n(864),_=r(v),h=n(1102),T=r(h),E=coreLogger.getLogger("usertrack")("UTInfo"),g="||",I="|||",m=function(){function e(t,n){var r=this;(0,c.default)(this,e),this.getAppName=function(){return window.isPluginEnv?r.userInfo.appId:window.CLIENTCONFIG.ENABLE_IT_MEETING&&!window.CLIENTCONFIG.IS_LINK_IT_SMC_MEETING?"WeLink":"CloudLink"},this.toUTString=(0,u.default)(i.default.mark(function e(){var t,n,a,o,u;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.netInfo.refreshNetInfo();case 2:for(t="",n=0;n<r.args.length;n++)a=r.args[n],t+=r.decodeBodyElement(a),n!==r.args.length-1&&(t+=g);return e.next=6,coreAccount.getLoginModel();case 6:return o=e.sent,r.cloudusgIP||(r.cloudusgIP=o.serverUportalAddress),r.sbcIP||(r.sbcIP=r.getSBCIP(o)),u=""+r.decodeElement(r.apiVersion)+g+r.decodeElement(r.version)+g+r.decodeElement(r.deviceInfo.deviceId)+g+r.decodeElement(r.deviceInfo.brand)+g+r.decodeElement(r.deviceInfo.deviceModel)+g+r.decodeElement(r.deviceInfo.cpu)+g+r.decodeElement(r.deviceInfo.resolution)+g+r.decodeElement(r.userInfo.uuid)+g+r.decodeElement(r.userInfo.account)+g+r.decodeElement(r.appName)+g+r.decodeElement(r.appId)+g+r.decodeElement(r.deviceInfo.language)+g+r.decodeElement(r.deviceInfo.osName)+g+r.decodeElement(r.deviceInfo.osVersion)+g+r.decodeElement(r.netInfo.carrier)+g+r.decodeElement(r.netInfo.access)+g+r.decodeElement(r.netInfo.accessSubtype)+g+r.decodeElement(r.timeStamp)+g+r.decodeElement(r.cloudusgIP)+g+r.decodeElement(r.sbcIP)+I+r.decodeElement(r.eventId)+(t.length>0?g+t:""),E.info("[UT] generate a utinfo:",u),e.abrupt("return",u);case 12:case"end":return e.stop()}},e,r)})),this.apiVersion="1.1",this.deviceInfo=p.default.getInstance(),this.netInfo=new T.default,this.userInfo=_.default.getInstance(),this.version=window.CLIENTCONFIG.ACS_SOFTWAREVERSION_VALUE,this.appName=this.getAppName(),this.appId="",this.timeStamp=this.localUTCTime(),this.eventId=t,this.args=n}return(0,d.default)(e,[{key:"getSBCIP",value:function(e){var t=e.sipServerAddress;return 0===t.length?t=e.sipServerBackup1:0<e.sipServerBackup1.length&&(t=t+","+e.sipServerBackup1),t}},{key:"decodeElement",value:function(e){return isNullOrEmpty(e)?"-":e}},{key:"decodeBodyElement",value:function(e){var t=this.decodeElement(e);return"string"==typeof t&&(t=t.replaceAll("\n","\\n")),t}},{key:"localUTCTime",value:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),a=e.getHours(),i=e.getMinutes(),o=e.getSeconds(),u=e.getMilliseconds(),s=e.getTimezoneOffset(),c=-s/60,f="";return f=c>0?c<10?"+0"+c+"00":"+"+c+"00":c>-10?"-0"+-c+"00":c+"00",t+"-"+this.formatDoubleNeedsValue(n)+"-"+this.formatDoubleNeedsValue(r)+" "+this.formatDoubleNeedsValue(a)+":"+this.formatDoubleNeedsValue(i)+":"+this.formatDoubleNeedsValue(o)+this.formatMillSecValue(u)+" "+f}},{key:"formatDoubleNeedsValue",value:function(e){return e<10?"0"+e:e}},{key:"formatMillSecValue",value:function(e){if(0!==e){return(""+e/1e3).slice(1)}return".000"}}]),e}();t.default=m},863:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1),i=r(a),o=n(2),u=r(o),s=n(4),c=r(s),f=n(5),d=r(f),l=coreLogger.getLogger("UT")("usertrack"),p=function(){function e(){var t=this;(0,c.default)(this,e),this.instanceDesktopDeviceInfo=(0,u.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,appService.cpuDesc();case 2:t.cpu=e.sent,t.resolution=window.screen.width*window.devicePixelRatio+"*"+window.screen.height*window.devicePixelRatio,t.language=t.clientLanguageDescription(),t.osName=appService.osName(),t.osVersion=appService.osVersion();case 7:case"end":return e.stop()}},e,t)})),this.instanceItMeetingAndroidDeveceInfo=(0,u.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.brand=window.device.manufacturer,e.next=3,appService.deviceModel();case 3:return t.deviceModel=e.sent,e.next=6,appService.cpuDesc();case 6:return t.cpu=e.sent,l.info("[UT]cpu info is:",t.cpu),t.resolution=window.screen.width*window.devicePixelRatio+"*"+window.screen.height*window.devicePixelRatio,t.language=t.clientLanguageDescription(),e.next=12,appService.osName();case 12:return t.osName=e.sent,e.next=15,appService.osVersion();case 15:t.osVersion=e.sent;case 16:case"end":return e.stop()}},e,t)})),this.instance=null,this.deviceId="",this.brand="",this.deviceModel="",this.cpu="",this.resolution="",this.language="",this.osName="",this.osVersion="",this.init()}return(0,d.default)(e,[{key:"init",value:function(){var e=window.CLIENTCONFIG.PLATFORM;"mac"===e||"win"===e?this.instanceDesktopDeviceInfo():window.CLIENTCONFIG.ENABLE_IT_MEETING&&!window.CLIENTCONFIG.IS_LINK_IT_SMC_MEETING&&"android"===e?this.instanceItMeetingAndroidDeveceInfo():this.instanceMobileDeveceInfo()}},{key:"instanceMobileDeveceInfo",value:function(){var e=this;document.addEventListener("deviceready",(0,u.default)(i.default.mark(function t(){var n,r;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.CLIENTCONFIG.PLATFORM,r="android"===n,e.brand=window.device.manufacturer,t.next=5,appService.deviceModel();case 5:if(e.deviceModel=t.sent,!r){t.next=11;break}return t.next=9,appService.cpuDesc();case 9:e.cpu=t.sent,l.info("[UT]cpu info is:",e.cpu);case 11:return e.resolution=window.screen.width*window.devicePixelRatio+"*"+window.screen.height*window.devicePixelRatio,e.language=e.clientLanguageDescription(),t.next=15,appService.osName();case 15:return e.osName=t.sent,t.next=18,appService.osVersion();case 18:e.osVersion=t.sent;case 19:case"end":return t.stop()}},t,e)})),!1)}},{key:"configLanguage",value:function(e){isNullOrEmpty(e)||(this.language=this.clientLanguageDescription())}},{key:"clientLanguageDescription",value:function(){var e="EN";switch(window.langcode){case"1036":e="FR";break;case"1033":e="EN";break;case"2052":e="CN"}return e}}],[{key:"getInstance",value:function(){return window.CLIENTCONFIG.ENABLE_IT_MEETING&&!this.instance&&""!==this.osVersion&&(this.instance=new e),this.instance||(this.instance=new e),this.instance}}]),e}();t.default=p},864:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(4),i=r(a),o=n(5),u=r(o),s=function(){function e(){(0,i.default)(this,e),this.instance=null,this.uuid="",this.account="",this.appId=""}return(0,u.default)(e,[{key:"configUserInfo",value:function(e,t){isNullOrEmpty(e)?this.account="":this.account=handlePhoneNumber(e),isNullOrEmpty(t)?this.uuid="":this.uuid=t}},{key:"configAppId",value:function(e){isNullOrEmpty(e)?this.appId="":this.appId=e}},{key:"clean",value:function(){this.uuid="",this.account="",this.appId=""}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),e}();t.default=s}});