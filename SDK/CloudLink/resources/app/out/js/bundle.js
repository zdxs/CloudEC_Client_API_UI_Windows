!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var u,a,c=0,s=[];c<e.length;c++)a=e[c],o[a]&&s.push(o[a][0]),o[a]=0;for(u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u]);for(n&&n(e,r,i);s.length;)s.shift()()};var r={},o={28:0};e.e=function(t){function n(){a.onerror=a.onload=null,clearTimeout(c);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=i;var u=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,e.nc&&a.setAttribute("nonce",e.nc),a.src=e.p+"js/"+({0:"HwConstants",1:"HwPcComponent",2:"HwAppService",4:"HwCommon",5:"HwUT",6:"HwLazyLoad",7:"HwIm",8:"HwUI",10:"HwConf",11:"HwAccount",12:"HwGroup",13:"HwCall",14:"HwContact",15:"HwSetting",16:"HwPluginSdk",17:"HwSearch",18:"HwDb",20:"HwTup",22:"HwHttp",23:"HwSecurity",24:"HwLazyUiPage",25:"HwIpcMainProcess",26:"HwCwmp",27:"HwLog"}[t]||t)+".js";var c=setTimeout(n,12e4);return a.onerror=a.onload=n,u.appendChild(a),i},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e.oe=function(t){throw console.error(t),t},e(e.s=70)}([function(t,e){t.exports=vendor_261c27f3ac6cc2c641c8},function(t,e,n){t.exports=n(38)},function(t,e,n){"use strict";e.__esModule=!0;var r=n(3),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){function r(i,u){try{var a=e[i](u),c=a.value}catch(t){return void n(t)}if(!a.done)return o.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}},function(t,e,n){t.exports={default:n(40),__esModule:!0}},function(t,e,n){t.exports=n(0)(44)},function(t,e,n){t.exports=n(0)(60)},function(t,e,n){t.exports=n(0)(46)},function(t,e,n){t.exports=n(0)(24)},function(t,e,n){t.exports=n(0)(25)},function(t,e,n){t.exports=n(0)(58)},function(t,e,n){t.exports=n(0)(40)},function(t,e,n){t.exports=n(0)(232)},function(t,e,n){t.exports=n(0)(566)},function(t,e,n){t.exports=n(0)(237)},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=o(e),this.reject=o(n)}var o=n(12);t.exports.f=function(t){return new r(t)}},function(t,e,n){t.exports=n(0)(42)},function(t,e,n){var r=n(13),o=n(6)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){t.exports=n(0)(132)},function(t,e,n){var r=n(9),o=n(12),i=n(6)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[i])?e:o(n)}},function(t,e,n){var r,o,i,u=n(11),a=n(43),c=n(44),s=n(45),f=n(7),l=f.process,d=f.setImmediate,p=f.clearImmediate,h=f.MessageChannel,v=f.Dispatch,w=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},g=function(t){m.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++w]=function(){a("function"==typeof t?t:Function(t),e)},r(w),w},p=function(t){delete y[t]},"process"==n(13)(l)?r=function(t){l.nextTick(u(m,t,1))}:v&&v.now?r=function(t){v.now(u(m,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=g,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in s("script")?function(t){c.appendChild(s("script")).onreadystatechange=function(){c.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:d,clear:p}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(9),o=n(15),i=n(14);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){t.exports=n(0)(581)},function(t,e,n){t.exports=n(0)(587)},function(t,e,n){var r=n(11),o=n(31),i=n(32),u=n(9),a=n(27),c=n(26),s={},f={},e=t.exports=function(t,e,n,l,d){var p,h,v,w,y=d?function(){return t}:c(t),m=r(n,l,e?2:1),g=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(p=a(t.length);p>g;g++)if((w=e?m(u(h=t[g])[0],h[1]):m(t[g]))===s||w===f)return w}else for(v=y.call(t);!(h=v.next()).done;)if((w=o(v,m,h.value,e))===s||w===f)return w};e.BREAK=s,e.RETURN=f},function(t,e,n){t.exports=n(0)(29)},function(t,e,n){var r=n(16),o=n(6)("iterator"),i=n(17);t.exports=n(8).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){t.exports=n(0)(569)},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(35);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){t.exports=n(0)(30)},function(t,e,n){var r=n(9);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(17),o=n(6)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(6)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){t.exports=n(0)(598)},function(t,e,n){t.exports=n(0)(41)},function(t,e,n){t.exports=n(0)(134)},function(t,e,n){"use strict";var r=n(7),o=n(8),i=n(25),u=n(30),a=n(6)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(39),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,u=Object.create(i.prototype),a=new p(r||[]);return u._invoke=s(t,n,a),u}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function u(){}function a(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(n,o,i,u){var a=r(t[n],t,o);if("throw"!==a.type){var c=a.arg,s=c.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,u)},function(t){e("throw",t,i,u)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},u)}u(a.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function s(t,e,n){var o=L;return function(i,u){if(o===I)throw new Error("Generator is already running");if(o===M){if("throw"===i)throw u;return v()}for(n.method=i,n.arg=u;;){var a=n.delegate;if(a){var c=f(a,n);if(c){if(c===S)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===L)throw o=M,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=I;var s=r(t,e,n);if("normal"===s.type){if(o=n.done?M:k,s.arg===S)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=M,n.method="throw",n.arg=s.arg)}}}function f(t,e){var n=t.iterator[e.method];if(n===w){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=w,f(t,e),"throw"===e.method))return S;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,S;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=w),e.delegate=null,S):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,S)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function h(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(m.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=w,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:w,done:!0}}var w,y=Object.prototype,m=y.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},x=g.iterator||"@@iterator",_=g.asyncIterator||"@@asyncIterator",P=g.toStringTag||"@@toStringTag",H="object"==typeof t,b=e.regeneratorRuntime;if(b)return void(H&&(t.exports=b));b=e.regeneratorRuntime=H?t.exports:{},b.wrap=n;var L="suspendedStart",k="suspendedYield",I="executing",M="completed",S={},C={};C[x]=function(){return this};var O=Object.getPrototypeOf,j=O&&O(O(h([])));j&&j!==y&&m.call(j,x)&&(C=j);var A=u.prototype=o.prototype=Object.create(C);i.prototype=A.constructor=u,u.constructor=i,u[P]=i.displayName="GeneratorFunction",b.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},b.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,P in t||(t[P]="GeneratorFunction")),t.prototype=Object.create(A),t},b.awrap=function(t){return{__await:t}},a(c.prototype),c.prototype[_]=function(){return this},b.AsyncIterator=c,b.async=function(t,e,r,o){var i=new c(n(t,e,r,o));return b.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},a(A),A[P]="Generator",A[x]=function(){return this},A.toString=function(){return"[object Generator]"},b.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},b.values=h,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=w,this.done=!1,this.delegate=null,this.method="next",this.arg=w,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=w)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=w),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=m.call(o,"catchLoc"),a=m.call(o,"finallyLoc");if(u&&a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,S):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),S},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),d(n),S}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;d(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:h(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=w),S}}}(function(){return this}()||Function("return this")())},function(t,e,n){n(34),n(22),n(23),n(41),n(48),n(49),t.exports=n(8).Promise},function(t,e,n){"use strict";var r,o,i,u,a=n(42),c=n(7),s=n(11),f=n(16),l=n(10),d=n(15),p=n(12),h=n(28),v=n(24),w=n(18),y=n(19).set,m=n(46)(),g=n(14),x=n(20),_=n(47),P=n(21),H=c.TypeError,b=c.process,L=b&&b.versions,k=L&&L.v8||"",I=c.Promise,M="process"==f(b),S=function(){},C=o=g.f,O=!!function(){try{var t=I.resolve(1),e=(t.constructor={})[n(6)("species")]=function(t){t(S,S)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(S)instanceof e&&0!==k.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(t){}}(),j=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,u,a=o?e.ok:e.fail,c=e.resolve,s=e.reject,f=e.domain;try{a?(o||(2==t._h&&z(t),t._h=1),!0===a?n=r:(f&&f.enter(),n=a(r),f&&(f.exit(),u=!0)),n===e.promise?s(H("Promise-chain cycle")):(i=j(n))?i.call(n,c,s):c(n)):s(r)}catch(t){f&&!u&&f.exit(),s(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&E(t)})}},E=function(t){y.call(c,function(){var e,n,r,o=t._v,i=T(t);if(i&&(e=x(function(){M?b.emit("unhandledRejection",o,t):(n=c.onunhandledrejection)?n({promise:t,reason:o}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=M||T(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},T=function(t){return 1!==t._h&&0===(t._a||t._c).length},z=function(t){y.call(c,function(){var e;M?b.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},U=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},N=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw H("Promise can't be resolved itself");(e=j(t))?m(function(){var r={_w:n,_d:!1};try{e.call(t,s(N,r,1),s(U,r,1))}catch(t){U.call(r,t)}}):(n._v=t,n._s=1,A(n,!1))}catch(t){U.call({_w:n,_d:!1},t)}}};O||(I=function(t){h(this,I,"Promise","_h"),p(t),r.call(this);try{t(s(N,this,1),s(U,this,1))}catch(t){U.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(29)(I.prototype,{then:function(t,e){var n=C(w(this,I));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=M?b.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(N,t,1),this.reject=s(U,t,1)},g.f=C=function(t){return t===I||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!O,{Promise:I}),n(36)(I,"Promise"),n(37)("Promise"),u=n(8).Promise,l(l.S+l.F*!O,"Promise",{reject:function(t){var e=C(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(a||!O),"Promise",{resolve:function(t){return P(a&&this===u?I:this,t)}}),l(l.S+l.F*!(O&&n(33)(function(t){I.all(t).catch(S)})),"Promise",{all:function(t){var e=this,n=C(e),r=n.resolve,o=n.reject,i=x(function(){var n=[],i=0,u=1;v(t,!1,function(t){var a=i++,c=!1;n.push(void 0),u++,e.resolve(t).then(function(t){c||(c=!0,n[a]=t,--u||r(n))},o)}),--u||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=C(e),r=n.reject,o=x(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e,n){t.exports=n(0)(81)},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){t.exports=n(0)(585)},function(t,e,n){t.exports=n(0)(234)},function(t,e,n){var r=n(7),o=n(19).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,a=r.Promise,c="process"==n(13)(u);t.exports=function(){var t,e,n,s=function(){var r,o;for(c&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){u.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);n=function(){f.then(s)}}else n=function(){o.call(r,s)};else{var l=!0,d=document.createTextNode("");new i(s).observe(d,{characterData:!0}),n=function(){d.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(7),o=r.navigator;t.exports=o&&o.userAgent||""},function(t,e,n){"use strict";var r=n(10),o=n(8),i=n(7),u=n(18),a=n(21);r(r.P+r.R,"Promise",{finally:function(t){var e=u(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(10),o=n(14),i=n(20);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwAppService=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwAppService=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(2).then(n.bind(null,58)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwAppServiceSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwConstants=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwConstants=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(0).then(n.bind(null,59)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwConstantsSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwPcComponent=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwPcComponent=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(1).then(n.bind(null,60)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwPcComponentSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwIpcConstants=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwIpcConstants=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(0).then(n.bind(null,61)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwIpcConstantsSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwUT=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwUT=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(5).then(n.bind(null,63)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwUTSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwLazyLoad=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwLazyLoad=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(6).then(n.bind(null,62)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwLazyLoadSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwCommon=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwCommon=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(4).then(n.bind(null,64)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwCommonSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwIm=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwIm=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(7).then(n.bind(null,69)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwImSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(1),i=r(o),u=n(2),a=r(u),c=function(){var t=(0,a.default)(i.default.mark(function t(){var e,n,r,o,u,c;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.HwPcComponent.getInstance();case 3:return window.coreCommonComponent=t.sent,t.next=6,l.HwAppService.getInstance();case 6:return window.appService=t.sent,t.next=9,v.HwConstants.getInstance();case 9:return e=t.sent,t.next=12,m.HwIpcConstants.getInstance();case 12:n=t.sent,window.constant=[],window.ipcConstant=[];for(r in e)e.hasOwnProperty(r)&&(o=e[r],window.constant[r]=o);for(u in n)n.hasOwnProperty(u)&&(c=n[u],window.ipcConstant[u]=c);return t.next=19,p.HwCommon.getInstance();case 19:return window.coreCommon=t.sent,t.next=22,s.HwLazyLoad.getInstance();case 22:return window.coreLazyLoad=t.sent,window.coreLog=new coreLazyLoad.ApiProxy(new coreLazyLoad.LogApi,(0,a.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,coreLazyLoad.HwLog.getInstance();case 2:return window.coreLog=t.sent,t.abrupt("return",window.coreLog.getLogApi());case 4:case"end":return t.stop()}},t,this)}))),t.next=26,H.HwSecurity.getInstance();case 26:return window.coreSecurity=t.sent,t.next=29,I.HwTup.getInstance();case 29:return window.coreTup=t.sent,t.next=32,x.HwHttp.getInstance();case 32:return window.coreHttp=t.sent,window.coreCwmp=new coreLazyLoad.ApiProxy(new coreLazyLoad.CwmpApi,(0,a.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,coreLazyLoad.HwCwmp.getInstance();case 2:return window.coreCwmp=t.sent,t.abrupt("return",window.coreCwmp.getCwmpApi());case 4:case"end":return t.stop()}},t,this)}))),t.next=36,f.HwAccount.getInstance();case 36:return window.coreAccount=t.sent,t.next=39,g.HwDb.getInstance();case 39:return window.coreDb=t.sent,t.next=42,w.HwContact.getInstance();case 42:return window.coreContact=t.sent,t.next=45,y.HwGroup.getInstance();case 45:return window.coreGroup=t.sent,t.next=48,d.HwCall.getInstance();case 48:return window.coreCall=t.sent,t.next=51,h.HwConf.getInstance();case 51:return window.coreConf=t.sent,window.coreIpcMainProcess=new coreLazyLoad.ApiProxy(new coreLazyLoad.IpcMainProcessApi,(0,a.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,coreLazyLoad.HwIpcMainProcess.getInstance();case 2:return window.coreIpcMainProcess=t.sent,t.abrupt("return",window.coreIpcMainProcess.getIpcMainProcessApi());case 4:case"end":return t.stop()}},t,this)}))),t.next=55,_.HwIm.getInstance();case 55:return window.coreIm=t.sent,t.next=58,P.HwSearch.getInstance();case 58:return window.coreSearch=t.sent,t.next=61,b.HwSetting.getInstance();case 61:return window.coreSetting=t.sent,window.coreUt=new coreLazyLoad.ApiProxy(new coreLazyLoad.UTApi,(0,a.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.HwUT.getInstance();case 2:return window.coreUt=t.sent,t.abrupt("return",window.coreUt.getUtApi());case 4:case"end":return t.stop()}},t,this)}))),window.HwLazyUiPage=new coreLazyLoad.ApiProxy(new coreLazyLoad.LazyUiPageApi,(0,a.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,coreLazyLoad.HwLazyUiPage.getInstance();case 2:return window.HwLazyUiPage=t.sent,t.abrupt("return",window.HwLazyUiPage.getLazyUiPageApi());case 4:case"end":return t.stop()}},t,this)}))),t.next=66,L.HwPlugin.getInstance();case 66:return window.corePlugin=t.sent,t.next=69,k.HwUI.getInstance();case 69:return window.coreUi=t.sent,t.next=72,appService.initTup();case 72:return t.next=74,coreConf.initConf();case 74:return t.next=76,appService.dealShowInstallTip();case 76:return t.next=78,window.updateKmc();case 78:return t.next=80,appService.initApp();case 80:return t.next=82,coreUt.utHandleNativeCrashInfoScan();case 82:return t.next=84,coreAccount.initPcFirstPage();case 84:coreCommon.Observer.publish(constant.COMMON_NOTIFY.ON_COMMON_JS_LOADED,{}),t.next=90;break;case 87:t.prev=87,t.t0=t.catch(0),isNullOrEmpty(window.Logger)||window.Logger("src")("index").error("module loader ",t.t0);case 90:case"end":return t.stop()}},t,this,[[0,87]])}));return function(){return t.apply(this,arguments)}}(),s=n(55),f=n(71),l=n(50),d=n(72),p=n(56),h=n(73),v=n(51),w=n(74),y=n(75),m=n(53),g=n(76),x=n(77),_=n(66),P=n(78),H=n(79),b=n(80),L=n(81),k=n(82),I=n(83),M=n(54),S=n(52);window.require("electron").webFrame.setVisualZoomLevelLimits(1,1),c()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwAccount=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwAccount=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(11).then(n.bind(null,98)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwAccountSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwCall=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwCall=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(13).then(n.bind(null,99)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwCallSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwConf=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwConf=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(10).then(n.bind(null,100)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwConfSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwContact=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwContact=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(14).then(n.bind(null,101)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwContactSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwGroup=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwGroup=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(12).then(n.bind(null,102)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwContactSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwDb=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwDb=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(18).then(n.bind(null,103)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwDbSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwHttp=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwHttp=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(22).then(n.bind(null,104)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwHttpSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwSearch=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwSearch=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(17).then(n.bind(null,105)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwSearchSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwSecurity=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwSecurity=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(23).then(n.bind(null,106)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwSecuritySdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwSetting=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwSetting=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(15).then(n.bind(null,107)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwSettingSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwPlugin=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwPlugin=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(16).then(n.bind(null,108)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwPluginSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwUI=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwUI=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(8).then(n.bind(null,109)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwUISdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HwTup=void 0;var o=n(1),i=r(o),u=n(2),a=r(u),c=n(3),s=r(c),f=n(4),l=r(f),d=n(5),p=r(d);e.HwTup=function(){function t(){(0,l.default)(this,t)}return(0,p.default)(t,null,[{key:"getInstance",value:function(){var e=this;return t.instance||(t.loadPromise=new s.default(function(r,o){n.e(20).then(n.bind(null,110)).then(function(){var n=(0,a.default)(i.default.mark(function n(o){var u=o.HwTupSdk;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u;case 2:t.instance=e.sent,r(t.instance);case 4:case"end":return e.stop()}},n,e)}));return function(t){return n.apply(this,arguments)}}())})),t.loadPromise}}]),t}()}]);