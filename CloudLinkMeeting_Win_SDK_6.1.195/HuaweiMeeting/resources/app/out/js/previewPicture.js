!function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e=window.webpackJsonp;window.webpackJsonp=function(n,r,i){for(var u,c,a=0,s=[];a<n.length;a++)c=n[a],o[c]&&s.push(o[c][0]),o[c]=0;for(u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u]);for(e&&e(n,r,i);s.length;)s.shift()()};var r={},o={35:0};n.e=function(t){function e(){c.onerror=c.onload=null,clearTimeout(a);var n=o[t];0!==n&&(n&&n[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(n,e){r=o[t]=[n,e]});r[2]=i;var u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,n.nc&&c.setAttribute("nonce",n.nc),c.src=n.p+"js/"+({0:"HwConstants",1:"HwPcComponent",2:"HwAppService",3:"HwLogger",4:"HwIpcChild",5:"HwCommon",25:"HwIpcPreviewPictureUISdk"}[t]||t)+".js";var a=setTimeout(e,12e4);return c.onerror=c.onload=e,u.appendChild(c),i},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="./",n.oe=function(t){throw console.error(t),t},n(n.s=100)}([function(t,n){t.exports=vendor_56a6650d274809df6885},function(t,n,e){t.exports=e(38)},function(t,n,e){"use strict";n.__esModule=!0;var r=e(3),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(t){return function(){var n=t.apply(this,arguments);return new o.default(function(t,e){function r(i,u){try{var c=n[i](u),a=c.value}catch(t){return void e(t)}if(!c.done)return o.default.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)});t(a)}return r("next")})}}},function(t,n,e){t.exports={default:e(40),__esModule:!0}},function(t,n,e){t.exports=e(0)(44)},function(t,n,e){t.exports=e(0)(60)},function(t,n,e){t.exports=e(0)(46)},function(t,n,e){t.exports=e(0)(24)},function(t,n,e){t.exports=e(0)(25)},function(t,n,e){t.exports=e(0)(58)},function(t,n,e){t.exports=e(0)(40)},function(t,n,e){t.exports=e(0)(232)},function(t,n,e){t.exports=e(0)(565)},function(t,n,e){t.exports=e(0)(237)},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=o(n),this.reject=o(e)}var o=e(12);t.exports.f=function(t){return new r(t)}},function(t,n,e){t.exports=e(0)(42)},function(t,n,e){var r=e(13),o=e(6)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){t.exports=e(0)(132)},function(t,n,e){var r=e(9),o=e(12),i=e(6)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(11),c=e(43),a=e(44),s=e(45),f=e(7),l=f.process,h=f.setImmediate,d=f.clearImmediate,p=f.MessageChannel,v=f.Dispatch,w=0,m={},y=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},g=function(t){y.call(t.data)};h&&d||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++w]=function(){c("function"==typeof t?t:Function(t),n)},r(w),w},d=function(t){delete m[t]},"process"==e(13)(l)?r=function(t){l.nextTick(u(y,t,1))}:v&&v.now?r=function(t){v.now(u(y,t,1))}:p?(o=new p,i=o.port2,o.port1.onmessage=g,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),y.call(t)}}:function(t){setTimeout(u(y,t,1),0)}),t.exports={set:h,clear:d}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(9),o=e(15),i=e(14);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){t.exports=e(0)(580)},function(t,n,e){t.exports=e(0)(586)},function(t,n,e){var r=e(11),o=e(31),i=e(32),u=e(9),c=e(27),a=e(26),s={},f={},n=t.exports=function(t,n,e,l,h){var d,p,v,w,m=h?function(){return t}:a(t),y=r(e,l,n?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(d=c(t.length);d>g;g++)if((w=n?y(u(p=t[g])[0],p[1]):y(t[g]))===s||w===f)return w}else for(v=m.call(t);!(p=v.next()).done;)if((w=o(v,y,p.value,n))===s||w===f)return w};n.BREAK=s,n.RETURN=f},function(t,n,e){t.exports=e(0)(29)},function(t,n,e){var r=e(16),o=e(6)("iterator"),i=e(17);t.exports=e(8).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){t.exports=e(0)(568)},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(35);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){t.exports=e(0)(30)},function(t,n,e){var r=e(9);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(17),o=e(6)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(6)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){t.exports=e(0)(597)},function(t,n,e){t.exports=e(0)(41)},function(t,n,e){t.exports=e(0)(134)},function(t,n,e){"use strict";var r=e(7),o=e(8),i=e(25),u=e(30),c=e(6)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=e(39),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,n){!function(n){"use strict";function e(t,n,e,r){var i=n&&n.prototype instanceof o?n:o,u=Object.create(i.prototype),c=new d(r||[]);return u._invoke=s(t,e,c),u}function r(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function u(){}function c(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function a(t){function n(e,o,i,u){var c=r(t[e],t,o);if("throw"!==c.type){var a=c.arg,s=a.value;return s&&"object"==typeof s&&y.call(s,"__await")?Promise.resolve(s.__await).then(function(t){n("next",t,i,u)},function(t){n("throw",t,i,u)}):Promise.resolve(s).then(function(t){a.value=t,i(a)},u)}u(c.arg)}function e(t,e){function r(){return new Promise(function(r,o){n(t,e,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=e}function s(t,n,e){var o=I;return function(i,u){if(o===k)throw new Error("Generator is already running");if(o===H){if("throw"===i)throw u;return v()}for(e.method=i,e.arg=u;;){var c=e.delegate;if(c){var a=f(c,e);if(a){if(a===O)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===I)throw o=H,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=k;var s=r(t,n,e);if("normal"===s.type){if(o=e.done?H:L,s.arg===O)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=H,e.method="throw",e.arg=s.arg)}}}function f(t,n){var e=t.iterator[n.method];if(e===w){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=w,f(t,n),"throw"===n.method))return O;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var o=r(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,O;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=w),n.delegate=null,O):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,O)}function l(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function h(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function p(t){if(t){var n=t[x];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(y.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=w,n.done=!0,n};return r.next=r}}return{next:v}}function v(){return{value:w,done:!0}}var w,m=Object.prototype,y=m.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},x=g.iterator||"@@iterator",_=g.asyncIterator||"@@asyncIterator",P=g.toStringTag||"@@toStringTag",b="object"==typeof t,j=n.regeneratorRuntime;if(j)return void(b&&(t.exports=j));j=n.regeneratorRuntime=b?t.exports:{},j.wrap=e;var I="suspendedStart",L="suspendedYield",k="executing",H="completed",O={},C={};C[x]=function(){return this};var E=Object.getPrototypeOf,M=E&&E(E(p([])));M&&M!==m&&y.call(M,x)&&(C=M);var S=u.prototype=o.prototype=Object.create(C);i.prototype=S.constructor=u,u.constructor=i,u[P]=i.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===i||"GeneratorFunction"===(n.displayName||n.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,P in t||(t[P]="GeneratorFunction")),t.prototype=Object.create(S),t},j.awrap=function(t){return{__await:t}},c(a.prototype),a.prototype[_]=function(){return this},j.AsyncIterator=a,j.async=function(t,n,r,o){var i=new a(e(t,n,r,o));return j.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(S),S[P]="Generator",S[x]=function(){return this},S.toString=function(){return"[object Generator]"},j.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},j.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=w,this.done=!1,this.delegate=null,this.method="next",this.arg=w,this.tryEntries.forEach(h),!t)for(var n in this)"t"===n.charAt(0)&&y.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=w)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=w),!!r}if(this.done)throw t;for(var e=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=y.call(o,"catchLoc"),c=y.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&y.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,O):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),O},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),h(e),O}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;h(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:p(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=w),O}}}(function(){return this}()||Function("return this")())},function(t,n,e){e(34),e(22),e(23),e(41),e(48),e(49),t.exports=e(8).Promise},function(t,n,e){"use strict";var r,o,i,u,c=e(42),a=e(7),s=e(11),f=e(16),l=e(10),h=e(15),d=e(12),p=e(28),v=e(24),w=e(18),m=e(19).set,y=e(46)(),g=e(14),x=e(20),_=e(47),P=e(21),b=a.TypeError,j=a.process,I=j&&j.versions,L=I&&I.v8||"",k=a.Promise,H="process"==f(j),O=function(){},C=o=g.f,E=!!function(){try{var t=k.resolve(1),n=(t.constructor={})[e(6)("species")]=function(t){t(O,O)};return(H||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof n&&0!==L.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(t){}}(),M=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},S=function(t,n){if(!t._n){t._n=!0;var e=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,u,c=o?n.ok:n.fail,a=n.resolve,s=n.reject,f=n.domain;try{c?(o||(2==t._h&&R(t),t._h=1),!0===c?e=r:(f&&f.enter(),e=c(r),f&&(f.exit(),u=!0)),e===n.promise?s(b("Promise-chain cycle")):(i=M(e))?i.call(e,a,s):a(e)):s(r)}catch(t){f&&!u&&f.exit(),s(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&T(t)})}},T=function(t){m.call(a,function(){var n,e,r,o=t._v,i=A(t);if(i&&(n=x(function(){H?j.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=H||A(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(t){m.call(a,function(){var n;H?j.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},N=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),S(n,!0))},F=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw b("Promise can't be resolved itself");(n=M(t))?y(function(){var r={_w:e,_d:!1};try{n.call(t,s(F,r,1),s(N,r,1))}catch(t){N.call(r,t)}}):(e._v=t,e._s=1,S(e,!1))}catch(t){N.call({_w:e,_d:!1},t)}}};E||(k=function(t){p(this,k,"Promise","_h"),d(t),r.call(this);try{t(s(F,this,1),s(N,this,1))}catch(t){N.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(29)(k.prototype,{then:function(t,n){var e=C(w(this,k));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=H?j.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&S(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(F,t,1),this.reject=s(N,t,1)},g.f=C=function(t){return t===k||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!E,{Promise:k}),e(36)(k,"Promise"),e(37)("Promise"),u=e(8).Promise,l(l.S+l.F*!E,"Promise",{reject:function(t){var n=C(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!E),"Promise",{resolve:function(t){return P(c&&this===u?k:this,t)}}),l(l.S+l.F*!(E&&e(33)(function(t){k.all(t).catch(O)})),"Promise",{all:function(t){var n=this,e=C(n),r=e.resolve,o=e.reject,i=x(function(){var e=[],i=0,u=1;v(t,!1,function(t){var c=i++,a=!1;e.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=C(n),r=e.reject,o=x(function(){v(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n,e){t.exports=e(0)(81)},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){t.exports=e(0)(584)},function(t,n,e){t.exports=e(0)(234)},function(t,n,e){var r=e(7),o=e(19).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,a="process"==e(13)(u);t.exports=function(){var t,n,e,s=function(){var r,o;for(a&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){u.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);e=function(){f.then(s)}}else e=function(){o.call(r,s)};else{var l=!0,h=document.createTextNode("");new i(s).observe(h,{characterData:!0}),e=function(){h.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(7),o=r.navigator;t.exports=o&&o.userAgent||""},function(t,n,e){"use strict";var r=e(10),o=e(8),i=e(7),u=e(18),c=e(21);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(10),o=e(14),i=e(20);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.HwAppService=void 0;var o=e(1),i=r(o),u=e(2),c=r(u),a=e(3),s=r(a),f=e(4),l=r(f),h=e(5),d=r(h);n.HwAppService=function(){function t(){(0,l.default)(this,t)}return(0,d.default)(t,null,[{key:"getInstance",value:function(){var n=this;return t.instance||(t.loadPromise=new s.default(function(r,o){e.e(2).then(e.bind(null,57)).then(function(){var e=(0,c.default)(i.default.mark(function e(o){var u=o.HwAppServiceSdk;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new u;case 2:t.instance=n.sent,r(t.instance);case 4:case"end":return n.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.HwConstants=void 0;var o=e(1),i=r(o),u=e(2),c=r(u),a=e(3),s=r(a),f=e(4),l=r(f),h=e(5),d=r(h);n.HwConstants=function(){function t(){(0,l.default)(this,t)}return(0,d.default)(t,null,[{key:"getInstance",value:function(){var n=this;return t.instance||(t.loadPromise=new s.default(function(r,o){e.e(0).then(e.bind(null,58)).then(function(){var e=(0,c.default)(i.default.mark(function e(o){var u=o.HwConstantsSdk;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new u;case 2:t.instance=n.sent,r(t.instance);case 4:case"end":return n.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.HwPcComponent=void 0;var o=e(1),i=r(o),u=e(2),c=r(u),a=e(3),s=r(a),f=e(4),l=r(f),h=e(5),d=r(h);n.HwPcComponent=function(){function t(){(0,l.default)(this,t)}return(0,d.default)(t,null,[{key:"getInstance",value:function(){var n=this;return t.instance||(t.loadPromise=new s.default(function(r,o){e.e(1).then(e.bind(null,59)).then(function(){var e=(0,c.default)(i.default.mark(function e(o){var u=o.HwPcComponentSdk;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new u;case 2:t.instance=n.sent,r(t.instance);case 4:case"end":return n.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.HwLogger=void 0;var o=e(1),i=r(o),u=e(2),c=r(u),a=e(3),s=r(a),f=e(4),l=r(f),h=e(5),d=r(h);n.HwLogger=function(){function t(){(0,l.default)(this,t)}return(0,d.default)(t,null,[{key:"getInstance",value:function(){var n=this;return t.instance||(t.loadPromise=new s.default(function(r,o){e.e(3).then(e.bind(null,60)).then(function(){var e=(0,c.default)(i.default.mark(function e(o){var u=o.HwLoggerSdk;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new u;case 2:t.instance=n.sent,r(t.instance);case 4:case"end":return n.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.HwIpcConstants=void 0;var o=e(1),i=r(o),u=e(2),c=r(u),a=e(3),s=r(a),f=e(4),l=r(f),h=e(5),d=r(h);n.HwIpcConstants=function(){function t(){(0,l.default)(this,t)}return(0,d.default)(t,null,[{key:"getInstance",value:function(){var n=this;return t.instance||(t.loadPromise=new s.default(function(r,o){e.e(0).then(e.bind(null,62)).then(function(){var e=(0,c.default)(i.default.mark(function e(o){var u=o.HwIpcConstantsSdk;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new u;case 2:t.instance=n.sent,r(t.instance);case 4:case"end":return n.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.HwIpcMemberListChild=void 0;var o=e(1),i=r(o),u=e(2),c=r(u),a=e(3),s=r(a),f=e(4),l=r(f),h=e(5),d=r(h);n.HwIpcMemberListChild=function(){function t(){(0,l.default)(this,t)}return(0,d.default)(t,null,[{key:"getInstance",value:function(){var n=this;return t.instance||(t.loadPromise=new s.default(function(r,o){e.e(4).then(e.bind(null,64)).then(function(){var e=(0,c.default)(i.default.mark(function e(o){var u=o.HwIpcMemberListChildSdk;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new u;case 2:t.instance=n.sent,r(t.instance);case 4:case"end":return n.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.HwCommon=void 0;var o=e(1),i=r(o),u=e(2),c=r(u),a=e(3),s=r(a),f=e(4),l=r(f),h=e(5),d=r(h);n.HwCommon=function(){function t(){(0,l.default)(this,t)}return(0,d.default)(t,null,[{key:"getInstance",value:function(){var n=this;return t.instance||(t.loadPromise=new s.default(function(r,o){e.e(5).then(e.bind(null,65)).then(function(){var e=(0,c.default)(i.default.mark(function e(o){var u=o.HwCommonSdk;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new u;case 2:t.instance=n.sent,r(t.instance);case 4:case"end":return n.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(1),i=r(o),u=e(2),c=r(u),a=function(){var t=(0,c.default)(i.default.mark(function t(){var n,e,r,o,u,c;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.HwPcComponent.getInstance();case 2:return window.coreCommonComponent=t.sent,t.next=5,v.HwLogger.getInstance();case 5:return window.coreLogger=t.sent,t.next=8,s.HwAppService.getInstance();case 8:return window.appService=t.sent,t.next=11,h.HwConstants.getInstance();case 11:return n=t.sent,t.next=14,l.HwIpcConstants.getInstance();case 14:e=t.sent,window.constant=[];for(r in n)n.hasOwnProperty(r)&&(o=n[r],window.constant[r]=o);window.ipcConstant=[];for(u in e)e.hasOwnProperty(u)&&(c=e[u],window.ipcConstant[u]=c);return t.next=21,w.HwCommon.getInstance();case 21:return window.coreCommon=t.sent,t.next=24,f.HwIpcMemberListChild.getInstance();case 24:return window.coreIpcChildProcess=t.sent,t.next=27,d.HwIpcPreviewPictureUI.getInstance();case 27:window.coreUi=t.sent;case 28:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),s=e(50),f=e(55),l=e(54),h=e(51),d=e(101),p=e(52),v=e(53),w=e(56);a()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.HwIpcPreviewPictureUI=void 0;var o=e(1),i=r(o),u=e(2),c=r(u),a=e(3),s=r(a),f=e(4),l=r(f),h=e(5),d=r(h);n.HwIpcPreviewPictureUI=function(){function t(){(0,l.default)(this,t)}return(0,d.default)(t,null,[{key:"getInstance",value:function(){var n=this;return t.instance||(t.loadPromise=new s.default(function(r,o){e.e(25).then(e.bind(null,126)).then(function(){var e=(0,c.default)(i.default.mark(function e(o){var u=o.HwIpcMemberListUISdk;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new u;case 2:t.instance=n.sent,r(t.instance);case 4:case"end":return n.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}())})),t.loadPromise}}]),t}()}]);