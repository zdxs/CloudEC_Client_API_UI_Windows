webpackJsonp([7],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(3);

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(588);

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(282);

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconMap = exports.Svg = undefined;

var _Svg = __webpack_require__(335);

var _Svg2 = _interopRequireDefault(_Svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Svg = _Svg2.default;
exports.iconMap = _Svg.iconMap;
exports.default = {
  Svg: _Svg2.default,
  iconMap: _Svg.iconMap
};

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(38);

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(194);

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(158);

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizeMap = exports.colorMap = exports.typeMap = undefined;

var _constants = __webpack_require__(217);

var _Button = __webpack_require__(263);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;
exports.typeMap = _constants.typeMap;
exports.colorMap = _constants.colorMap;
exports.sizeMap = _constants.sizeMap;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(11);

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(8);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(52);

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(8);
var fails = __webpack_require__(130);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
__webpack_require__(22);
module.exports = __webpack_require__(142);


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var get = __webpack_require__(24);
module.exports = __webpack_require__(8).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
module.exports = __webpack_require__(8).Object.keys;


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(114);
var $keys = __webpack_require__(148);

__webpack_require__(132)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(63);

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSendMessage = exports.createNotify = undefined;

var _receiveService = __webpack_require__(855);

var receiveService = _interopRequireWildcard(_receiveService);

var _sendService = __webpack_require__(856);

var sendService = _interopRequireWildcard(_sendService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var createNotify = exports.createNotify = receiveService.createNotify;
var createSendMessage = exports.createSendMessage = sendService.createSendMessage;
//设置缩放参数，解决触摸屏缩放问题，任意js文件设置一次即可
window.require("electron").webFrame.setVisualZoomLevelLimits(1, 1);

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = __webpack_require__(103);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(CheckButton, _Component);

  function CheckButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CheckButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CheckButton.__proto__ || (0, _getPrototypeOf2.default)(CheckButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checkButtonState: false //是否选中
    }, _this._changeChecked = function () {
      var _this$props = _this.props,
          mustChecked = _this$props.mustChecked,
          isOutSideState = _this$props.isOutSideState,
          name = _this$props.name,
          clickCheckBtn = _this$props.clickCheckBtn,
          disabled = _this$props.disabled;

      if (disabled) {
        return;
      }
      if (mustChecked) {
        return;
      }
      if (isOutSideState) {
        var _checkButtonState = _this.props.checkButtonState;

        return typeof clickCheckBtn === "function" ? clickCheckBtn(name, !_checkButtonState) : "";
      }
      var checkButtonState = _this.state.checkButtonState;

      typeof clickCheckBtn === "function" ? clickCheckBtn(name, !checkButtonState) : "";
      _this.setState({ checkButtonState: !checkButtonState });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CheckButton, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          mustChecked = _props.mustChecked,
          isOutSideState = _props.isOutSideState,
          checkButtonState = _props.checkButtonState,
          disabled = _props.disabled,
          text = _props.text;

      var type = _Icon.iconMap.CheckButtonNoChecked;
      if (mustChecked) {
        type = _Icon.iconMap.CheckButtonChecked;
      } else if (isOutSideState && checkButtonState) {
        type = _Icon.iconMap.CheckButtonChecked;
      } else {
        var _checkButtonState2 = this.state.checkButtonState;

        if (_checkButtonState2) {
          type = _Icon.iconMap.CheckButtonChecked;
        }
      }
      return _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement(
          "div",
          { className: "pc-check-button", onClick: this._changeChecked },
          _react2.default.createElement(_Icon.Svg, { type: type, disable: disabled, style: { width: "100%", height: "100%" } })
        ),
        _react2.default.createElement(
          "div",
          { onClick: this._changeChecked },
          text
        )
      );
    }
  }]);
  return CheckButton;
}(_react.Component), _class.PropTypes = {
  name: _propTypes2.default.string, //选项名称
  mustChecked: _propTypes2.default.bool, //是否必须选中
  isOutSideState: _propTypes2.default.bool, //选中状态是否由外部传入
  checkButtonState: _propTypes2.default.bool, //外部传入的组件状态
  clickCheckBtn: _propTypes2.default.func, //勾选后执行的方法
  disabled: _propTypes2.default.bool //是否禁用
}, _temp2);
exports.default = CheckButton;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultAvatar = exports.getContactListAvatar = exports.getContactAvatar = exports.getCurrLocalAvatar = exports.initAvatarMap = exports.getBackgroundCls = exports.getGroupAvatarText = exports.getContactAvatarText = undefined;

var _saveToLocal = __webpack_require__(287);

var saveToLocal = _interopRequireWildcard(_saveToLocal);

var _serverAvatar = __webpack_require__(288);

var serverAvatar = _interopRequireWildcard(_serverAvatar);

var _defaultAvatar = __webpack_require__(286);

var defaultAvatar = _interopRequireWildcard(_defaultAvatar);

var _dataUpdate = __webpack_require__(200);

var dataUpdate = _interopRequireWildcard(_dataUpdate);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//生成联系人头像
var getContactAvatarText = exports.getContactAvatarText = defaultAvatar.getContactAvatarText;
//群组中单人头像文字
var getGroupAvatarText = exports.getGroupAvatarText = defaultAvatar.getGroupAvatarText;
//获取背景色
var getBackgroundCls = exports.getBackgroundCls = defaultAvatar.getBackgroundCls;

var initAvatarMap = exports.initAvatarMap = dataUpdate.initAvatarMap;

var getCurrLocalAvatar = exports.getCurrLocalAvatar = serverAvatar.getCurrLocalAvatar;
var getContactAvatar = exports.getContactAvatar = serverAvatar.getContactAvatar;
var getContactListAvatar = exports.getContactListAvatar = serverAvatar.getContactListAvatar;

var createDefaultAvatar = exports.createDefaultAvatar = saveToLocal.createAvatar;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(424);

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAEZBJREFUeAHtnctrHEcex3tm9LAk6zW2cxIEZNkyJhDsxWbJLbvBJN4cfAi5JySwEEIOJhCzf0ACQYcQAgsb4nvIIYdsEkx2czOLQ2wCwUSxLAjo5MSjl63naLTfT2l61Br1uGeme7pqpClodaunu+pXv0/96t1VGe8AuHv37vUWi8Xz2Wz2OR0Xt7e3n9GRz2QyR0qlUq/OXfo/t7W1lSG6uVxuW/e2dK+o59d1XtP/BR0/6/lbOm52dXXdPnXq1Hq7q8dEuN0iMTMz8ydBeU3HZR1jAtIlUBlB8Ti6deh/T8C8jM5Zzjq4h9Pznt7zSjq2/WudN4tFTwnFHHpmW88X9d6cjq91XJ+YmPix3XTVFoBloScE5KqOK1L8hJSd6+3t9Th6uruxyJboXRbvbWxueuvr6+ZQ+FuCPqPwv9QxJQv/vSUBJ+ips4ClzJ5ff/31bSnyHVnV2JEjRzK9PT0GaquARukV4Ab2xoa3tra2rdxiTnJ+dPr06Y8l50bU+zZ+dw7w/fv3XxDQ92Wp57u7u7N9fX1e35EjJou1oaBaYQqst7q25q2urnqbm5slWfZtAb928uTJ72q9Y+O+M4BnZ2dfkaI+UeH4VH9/vwdYW5baKAgsG9ArKyueUuIDJcy3xsfHv2jUn1Y8bx2wytfXZQ1TOkYGjx41YFsR0bT8BPTyo0fkOAs6rqqc/iytsMPCsQb4l19+eVEK+FwCiGv7g61WLqAfCfS25y0r8b565syZb6ufSeP/1AHPzc0dU+RvqIw9J7IZsuKD7MoWTZPrjuJ6aWxs7GGa8U0NsFJxRtkxlad3VWnKYrWKdJpxtRaW4mysWZUyKmMfKtu+ptxLxt16lwpgNXfGFZUfFKn88PCw6YhofdTcC4GOlMXFRTpZCpLugppXs62WsuUmNDM9/WZpa+uerDZ//NixQwsXkPSwoQN0gU7QTasBt8yClUpz6lK8oa7A52W1mR51UnTcrgY21FmysLhI2fy9ukAvKXfb2v01uauWAL579+7TasP+1JXLDY+OjjrXSZGc+uL5JCPw5ufnveLW1qLa0s+ePXv2t3g+7n878SyagQAFM9Pf1zecz+c7cPfrvHJHVuuhI3SFzsq6q/yexEWiFjw9Pf2SaoxfDQ0NZSV0EvIdGj9W1G5eWlqilv3y5OTkN0lFPDELpkdK2cy/R0dGOnCboINBoDt0iC6b8CL0lUQAS6BrEuzTY/l8hiG8jmtOA+gOHaJLdNqcL3vfip1Fly3XwGWwvePia4BJBw8LhW1VVN+I25cdCzBlLlkKqa7TDIoPNugDzagy5L/FKZObBkyNT8N7tyg3XM+Wqa0y9MiR5fCn85Sn8vB7vY6mzYZmeGjAv95Xmn6OyQXzCwslDT9ebHa6UP0xC4hJO1f/zqgDo8vV2rKZm6XpPF0tmtKz8vixh5W12lG7VvdmUeFMNNNObriSRQ+V3E8aCXIOLpbJ6NTwyIh3dHDQ69VMEKy2FU5W1Qpv9/mJAaFrdI7u9z0QcaNhwMqab9BDxWiQKy6nyt2A5BnSQAZQG8lym40DszXTcuganaP7RsNsSEo6x+lbpvvRBQfI/oEBb1DWmpZF2Yo3Okf3jQ5Q1F0GM+THCIgCyrpQY+5Rm5HsOA1rDYO6pabM8vJy2E8tu0eZr77rkiqKp+odaqzLgpX3kxB+GBgYcAIuVsvEPFtwDcEGat5JEcewYACLMpNIr+sCrM6M96XMvO1yl0rU4NCQ50IOEqnZFj0AA1jApJ4gIrNo5lBp8tgDjXpkGbC25YBLzZizC45pOEuanWHDMTOkUCiUBPupqDlekdpighxzqDpwbaAMDxMWMIFN+BO7d58ImKmtSqnnbGbNlLMuWa6vOqvlv4SACWxg5MsUdn4iYEXic6a22swWqVDZDD9Maf49m4Mr6AQ2MPLlCTvXBMwokQroQZvzlvXBmbPtWyzYduIzzUQxglUYXO7VBKxq+JTNrBnroFfKZYcV0YNm05Wz6qlaMoQC5kMwAR6xab19ttu5tTRWdZ++bizZliszGoFZmAyhgPnKT/l72POp3EPoVg0StCICtMtt5jawMl9mhkRuH2C+z+UTTlvWC1i6IdvNUV+wlSgNKzEz7KoUtw+wZmh8QDegLdcta6AC024OmW0OeMAMdtV62wNY5W6PHjpny3oRrv3QBlRqMWHCDHYwDEi0txbNmhhKhRqsaHhcOehnrGsJGOt9qy9blB1msINhUAd7LFjZzDs2rRfB2hmwbdlhB8NQwGosn2A1G/VxBn9P/dq2kuJE2LbssIMhLP14VCxYwl1lqSIqCzadbSXFibtt2WEHQ1j68QgCvsI6VLadbSXFib8LssNQclzx41EBrJGJCRfmN7ugJF85jZ5dkB2GsPRlN4CZxC7zVkXMXu3ZF8gFJfmyNHp2QXYYwhKmyG8AS7DXXLBeBHJBScjRjHNFdljClDj4gC93ADeDdO87jgG+HAQ8xqqtrjhXFNWIPlySGZaSZ8wAVpupV4Uyn0Y0Ep/Os1UaoImiKa2sVVn1S/r/whKmsM2qYcxK6falkh6MkjT0xbkdHQMlNidJBHUG0zLb7HM25xYFhcICbI7IBGVp9trMRHFguBM5BJktDrIXXQDMoDmfeh4E58J4dhnwxawK42dsznn2gbqgFF+WuGfKQBlOXG9ivQ9T2Gq/ikzetjDExIVcJJZGq15O8/PSqqDNvzA1bFXb6rNdqbEdfpiC4t6zXU1Ep7Ali+6xndriKtPF96VXq2LBFLZk0V3sK2TToQzbCkk6/rKepL1syL/yXlFdWHDOhSzyIAF2IcHCFLYsnWf12yM/WdpO8b4cSZxdSKxUsgzbJCKUhB8uKCWJeOCHS4mVGZRa28NueeGaUuKCdiGxwhS2VLLYhTNunGK/r1QW2w9XPHDBYGAKWypZRXbhtO1ckCEpHbiQWM3Oqjvb52r/XAesxwUZkgLsQmJFn6porWPBay5k0S4oJSnALiRWmMKWMrjgQpnhggxJAdYmG0l51bQ/6BO2AP6ZZXlsO1L9QYCstqfZVdy2PmEK26yUeksj/7blMeHrI2Yn5IgjxHoK60jXIx9MYQvgm64AXtPayC7UB+pRYNgzJNA01pAOC7v6XhnwzazGYW8Lsv12kiQELgtttyNkwD7WdrKuOJjCNqtNH9ZVnVa9wH7FAOVgBSjKFXmigGEpy0tLJmFGPZvW7+gOpoYtgaownttwqPyrKI0t0x13FCuuJUZYwhTVmYlD+udrNoBwzbH5hWvKC+oI2VypvwTlgiVMuecDvu4iYAR0pVaKLNXOWZ3tAL6OvAYwW7aoYqME6UY5HFQklRcX5UImchjXHHLB0t+GpzK3U4XyjKsp0sWa9aqj9QMYwtJPeBXAyrO/XE9hHyA/4EbOpEqXsmqU6GLZi05hCEtfv0HAU9rNS9btRJPYl69yZqcxF5SKDK5aL+xgKMCVxUkrgNVm+l0N47lVR7raKmQDF6Z9bLFblZzEpc6MgGrMJexgCEv/twpgbigFfKRl4v3fnDuTQrV/hBVLBu4jbaPjag4HLNjBMAhuz4Ro/dijJeJXTxw/bnW1u6CAta5Z5l+ptdbPid4nW8ZyXYZLAvz9jz9KZ86c4UuVyqaKeyyYHzRR647LVuyTI0JpOcJyGS56gJlqz7eDcLm/BzA3BPi9FUebAMjXceEagJlytH27hu8DfPLkye9Uz37QDlYcHtXDd9ewEjPDrir6+wDzu76yf2vZoaGvKpnNv3sqD2EPJHgvzbCaERtWMAt7NxTw+Pj4F8rLF1y2YhUlYfFpyb00w2o0AjCCFczC3g0FzIN66SpNEhedZDNbtaclm5oU6COt4BoKB0awqvXSE6Wenp5e0oYPVvdOChOcrWzSXqzFn4gQJo+te1ivsuflycnJoVoy1LRgXlDT4FV5oAmPbnxWwk7ftH/ThosuCJOwkcEFBxPYwOhJ8jzRgnlRi2n9qJXTzg9pW9dWOso5ssIca0vsrC9R2b+B//ndlWySNrFpG5cTPr333GPq7xaH2s3aTLuV6vKWNE1IMzduq1vSLDpaK7DI5Khl4i+xvaw2qkp8B1J6orAMFhBTI72WjM7dJ6FF9aJhYZsa2SFrT3qQhDnP6ndme9lLUcqJ1Cr700r5Hy4muFcum0gNDQ+bLI/rdoIbpVD/d+JE3MjWiWuSG2fBAiZRewcjS2QWzUPKfjLKqv/QngCxdgFnLSw2kDqIQNFTlMOqGfaMMxOEWrOst6Cs+bhyksix3UgLRuiyRxceP35camZiNxUTtmZn86bDChc9End0gC6aaVubuddiIK8u1APXhMmfetzp06dnu7LZvyt7kEFHJpyKl6xDzQKdzUSo4skBu0AXZN2NrNGNztE9DGBRr0rqyqKDnimr/o++WPtLPp8P3t53TUWE1EoFquNqawCrZM5ZlCsUCp4+sf2vsua/Rj0b/L1hwEpJOe2u9bC/r2+41tK5wDVtRqXUjovWAM2qJ00meKQEoNGiRVnuMem2ofZXXWVwUEQCkHtWjeziinpSql0HbrVGov8ny6Z3Dt1VO3S8vLzMp0XPNgoXvxoGzEtnz579Tcv//lmN7VL1VFsE7ZS3aKkxR7u6ejdxdIuO0TU6b8zHnaebAsyrTKxWrfDlwvz8tl+zJsuO6gBoRsjD8k4QMjpFt+jYn8TejB6aBkxg6uT+Rj1Rb8wvLGzTW+PCSgHNKMGld9AjBzpFt+g4jnyxABOwanWfKUv+x8NCYdv/jLKRZlQc4Q/Su+iM2jQ6RJfoFN3GjeP+Ur1JH9V8el39rp/mR0czlCXsvxBWaWjS+wP9GnDViWRmbpItY7lJwEVpiQHGM40fv6TuuK808pQdVEMeyIe55wqdRDm6L4GrmrKpUFHmxs2Wg2EmChiP2TNPFYT/aaJAF11yQO5UvIIq372mrDVwlS3T7KS2HKdCtevz7lXigPH67t27T6sM+Um7bQ2Pjo56Gmo03XKdLHtH8WTJNIH4xml+ft5TI3eRdm6zTaFdnPuvWgKYYBQJdsC8oUHw54eHhzP9suTDPtiAXsiSmcNMhWpBfcvKkr+X1V5qphMD/6JcywD7Ac9MT79ZLJX+qazalMtYM3skHUZH2xarpbxlZI6Bg4nJyX+1UhctB4zw6rse1+kHpdK8rNljr3lAH5YeL2W/Bixf/zFYr9ytIH1caGRUCD0241IBjGCKFJMG3lcW9a4AZ+n1AjITAA5q2UxZywA/VlseqC8pS/5QTaBrinP9Y67NkC2/kxpgX8a5ubljmu55Q6DPqaadoVxmOgtjowcFNGCpRLEqAeUtsx8F9g7z2+qZZuPrKolz6oB9ofWZ6osC+rkEEOejpgIGZGC3K2gDVlCBC1isVma6rPuv6rPOb/24p3m2BtiPJD1gUsCUjhGR3mlSqRLG/K12KaMpY5lnxfoYphK187XBghLq1aR6pHx9NXq2DtgXeHZ29hV1dX4i0E8NKNtWdmZq29S4XZxWS3OHabHUjE3tWOO2WK2ynwfqanyr1rdCfnzTOjsD2I/w/fv3X5BFfKDjnBSVBTS1biCzoyZb0NqybCy1qHnOjJoBl1oxn48oYZYk0x0d74V9wunHzcbZOcC+EmTJPWpeva1s7h116Y2ptp3pFWTKabo+AW3OulYFJvFyW+GbTgl/+A6wXJvKk+Cymo3Cn9NzH6m587HkrCyb4MfBhbOzgIPKUTl9Qoq8quOKssYJKTNnKmSCrc9qjEUD2f/0hbMPXc8arzj718DjwPnXZLl8bsKnJ5z535StAmugqozVs1vyd0b+fKljSuVrZTUb45mDf9oCcLXeGNCQsl/TcVnHmGCoUyib8S2arLwCGPBluNzDAU/vMUvRfE9krnWPrNe3WD1D06YokHM6vtZxPemBgOp4teL/tgRcrQhZeK/AnBcQ9qy/KGDPCEhekPp03aPrLp1zskgTX5WVLBbGhmAA3NA7q7ou6PpnvXNLx00lFj7scm8xyurIR/z/f/r7fPPUZ+tJAAAAAElFTkSuQmCC"

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAvatarMap = exports.updateAvatarMap = exports.initAvatarMap = undefined;

var _avatar = __webpack_require__(259);

var avatarActions = _interopRequireWildcard(_avatar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initAvatarMap = exports.initAvatarMap = function initAvatarMap() {
  return window.$dispatch(avatarActions.initAvatarMap());
};
var updateAvatarMap = exports.updateAvatarMap = function updateAvatarMap(map) {
  return window.$dispatch(avatarActions.updateAvatarMap(map));
};
var deleteAvatarMap = exports.deleteAvatarMap = function deleteAvatarMap(map) {
  return window.$dispatch(avatarActions.deleteAvatarmap(map));
};

/***/ }),

/***/ 2046:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(122);

var _components = __webpack_require__(2047);

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 性能工具
if (true) {
  window.Perf = __webpack_require__(603);
}

(0, _reactDom.render)(_react2.default.createElement(_components2.default, null), document.getElementById("root"));

/***/ }),

/***/ 2047:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(107);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(103);

var _LeftPanel = __webpack_require__(2048);

var _LeftPanel2 = _interopRequireDefault(_LeftPanel);

var _RightPanel = __webpack_require__(2055);

var _RightPanel2 = _interopRequireDefault(_RightPanel);

var _libs = __webpack_require__(157);

var libs = _interopRequireWildcard(_libs);

var _service = __webpack_require__(266);

var service = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 原生-与会者页面
 *
 * @export
 * @class confMemberPage
 * @extends {Component}
 */
var logger = window.Logger("childPage")("ConfSelectBox");

var ConfSelectBox = function (_Component) {
  (0, _inherits3.default)(ConfSelectBox, _Component);

  function ConfSelectBox(props) {
    (0, _classCallCheck3.default)(this, ConfSelectBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConfSelectBox.__proto__ || (0, _getPrototypeOf2.default)(ConfSelectBox)).call(this, props));

    _this._updateConfSelectBoxProps = function (event, args) {
      logger.debug('updateConfSelectBoxProps', event, args);
      _this.setState(args);
    };

    _this._languageChange = function () {
      logger.debug('_languageChange');
      logger.info('childpage change lg', window.localStorage.getItem("language"));
      window.initLanguage().then(function () {
        var languageChangeNum = _this.state.languageChangeNum;

        _this.setState({
          languageChangeNum: 1 - languageChangeNum
        });
      });
    };

    _this.handleClickCancel = function () {
      logger.info('userClick  create group right up corner close btn');
      service.closeWindowsSelectBox();
    };

    _this.state = {
      selectcontactisshow: false,
      languageChangeNum: 0
    };
    libs.createNotify(constant.CHILD_RECEIVE_TYPE.updateConfSelectBoxProps, _this._updateConfSelectBoxProps);
    libs.createNotify(constant.SELECT_BOX_RECEIVE_TYPE.languageChange, _this._languageChange);
    return _this;
  }

  (0, _createClass3.default)(ConfSelectBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          selectcontactisshow = _state.selectcontactisshow,
          languageChangeNum = _state.languageChangeNum;


      if (!selectcontactisshow) {
        logger.debug('render', this.state); // return null;
      }

      logger.info('childpage render change lg', window.localStorage.getItem("language"));
      return _react2.default.createElement(
        "div",
        { className: "group-add-contact-tc-one" },
        _react2.default.createElement(_LeftPanel2.default, (0, _extends3.default)({}, this.props, { languageChangeNum: languageChangeNum })),
        _react2.default.createElement("div", { className: "line" }),
        _react2.default.createElement(_RightPanel2.default, (0, _extends3.default)({}, this.props, { languageChangeNum: languageChangeNum })),
        window.CLIENTCONFIG.PLATFORM === "win" && _react2.default.createElement(
          "div",
          { className: "close-btn-area", onClick: function onClick() {
              return _this2.handleClickCancel();
            } },
          _react2.default.createElement(_Icon.Svg, { type: _Icon.iconMap.CloseBtn, style: {
              width: '100%',
              height: '100%'
            } })
        )
      );
    }
  }]);
  return ConfSelectBox;
}(_react.Component);

exports.default = ConfSelectBox;

/***/ }),

/***/ 2048:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _SearchInput = __webpack_require__(2049);

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _ContactGroup = __webpack_require__(2050);

var _ContactGroup2 = _interopRequireDefault(_ContactGroup);

var _InitContactGroup = __webpack_require__(2054);

var _InitContactGroup2 = _interopRequireDefault(_InitContactGroup);

var _libs = __webpack_require__(157);

var libs = _interopRequireWildcard(_libs);

var _service = __webpack_require__(266);

var service = _interopRequireWildcard(_service);

var _Button = __webpack_require__(115);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = window.Logger("childPage")("LeftPanel");

var LeftPanel = function (_Component) {
  (0, _inherits3.default)(LeftPanel, _Component);

  function LeftPanel(props) {
    (0, _classCallCheck3.default)(this, LeftPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LeftPanel.__proto__ || (0, _getPrototypeOf2.default)(LeftPanel)).call(this, props));

    _this._updateContactStatusMapProps = function (event, args) {
      logger.debug('updateConfSelectBoxProps', event, args);
      _this.setState({
        contact_status_map: args.contact_status_map
      });
    };

    _this._updateConfLeftPanelProps = function (event, args) {
      logger.debug('updateConfSelectBoxProps', event, args);
      _this.setState(args);
    };

    _this._copyToBorad = function () {
      var boradFocus = _this.state.boradFocus;

      _this.setState({
        boradFocus: !boradFocus
      });
      service.copyToBorad();
      var timer = null;
      timer && clearTimeout(timer);
      timer = setTimeout(function (timer) {
        var boradFocus = _this.state.boradFocus;

        _this.setState({
          boradFocus: !boradFocus
        });
        clearTimeout(timer);
      }, 3000, timer);
    };

    _this.title = props.title;
    _this.type = constant.CONTACT_SELECT_DIALOG_TYPE.CONTACT_SELECT_DIALOG_CONFADDMEMBER;
    _this.state = {
      contactList: "[]",
      isShowSearch: false,
      searchResult: "[]",
      isToggle: false,
      boradFocus: false,
      contact_status_map: {},
      avatarMap: {},
      selectBox_childPage: false,
      guest_join_uri: false,
      isMaxHub: false,
      isIM: true
    };
    libs.createNotify(constant.CHILD_RECEIVE_TYPE.updateConfLeftPanelProps, _this._updateConfLeftPanelProps);
    return _this;
  }

  (0, _createClass3.default)(LeftPanel, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete this.title;
      delete this.type;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          contactList = _state.contactList,
          isShowSearch = _state.isShowSearch,
          searchResult = _state.searchResult,
          isToggle = _state.isToggle,
          boradFocus = _state.boradFocus,
          contact_status_map = _state.contact_status_map,
          selectBox_childPage = _state.selectBox_childPage,
          avatarMap = _state.avatarMap,
          guest_join_uri = _state.guest_join_uri,
          isMaxHub = _state.isMaxHub,
          isIM = _state.isIM;

      contactList = JSON.parse(contactList);
      searchResult = JSON.parse(searchResult);
      var languageChangeNum = this.props.languageChangeNum;


      var contact = void 0,
          _contact = void 0;

      if (Array.isArray(contactList) && contactList.length === 0) {
        var _contactList = [{
          moduleName: language.RECENT,
          moduleKey: 'RECENT',
          type: "recent_session",
          moduleList: []
        }, {
          moduleName: language.CONTACTS,
          moduleKey: 'CONTACTS',
          type: "contact",
          moduleList: []
        }, {
          moduleName: language.GROUPS,
          moduleKey: 'GROUPS',
          type: "group",
          moduleList: []
        }, {
          moduleName: language.ENTERPRISE_DIRECTORY,
          moduleKey: 'ENTERPRISE_DIRECTORY',
          type: "corporate",
          total: 0,
          moduleList: []
        }];
        _contact = _contactList.filter(function (objs) {
          if (_this2.type !== constant.CONTACT_SELECT_DIALOG_TYPE.CONTACT_SELECT_DIALOG_RELAYMESSAGE) {
            return objs.type !== "group";
          }

          return objs;
        }).map(function (items, index) {
          return _react2.default.createElement(_InitContactGroup2.default, { key: items.type, isChoose: false, isToggle: isToggle, moduletype: items.type, type: _this2.type, item: items, languageChangeNum: languageChangeNum });
        });
      }

      if (!isShowSearch) {
        // 未搜索的内容
        // 获取到当前第一个有数据的项
        var contactChoose = contactList.filter(function (objs) {
          if (_this2.type !== constant.CONTACT_SELECT_DIALOG_TYPE.CONTACT_SELECT_DIALOG_RELAYMESSAGE) {
            return objs.type !== "group";
          }

          return objs;
        }).findIndex(function (items) {
          return items.moduleList.length > 0;
        });
        contact = contactList.filter(function (objs) {
          if (_this2.type !== constant.CONTACT_SELECT_DIALOG_TYPE.CONTACT_SELECT_DIALOG_RELAYMESSAGE) {
            return objs.type !== "group";
          }

          return objs;
        }).map(function (items, index) {
          return _react2.default.createElement(_ContactGroup2.default, { key: items.type, languageChangeNum: languageChangeNum, avatarMap: avatarMap, contact_status_map: contact_status_map, isChoose: contactChoose === index, isToggle: isToggle, moduletype: items.type, type: _this2.type, item: items, isIM: isIM });
        });
      } else {
        // 搜索的内容
        var searchChoose = searchResult.filter(function (objs) {
          if (_this2.type !== constant.CONTACT_SELECT_DIALOG_TYPE.CONTACT_SELECT_DIALOG_RELAYMESSAGE) {
            return objs.type !== "search_group";
          }

          return objs;
        }).findIndex(function (items) {
          return items.moduleList.length > 0;
        });
        contact = searchResult.filter(function (objs) {
          if (_this2.type !== constant.CONTACT_SELECT_DIALOG_TYPE.CONTACT_SELECT_DIALOG_RELAYMESSAGE) {
            return objs.type !== "search_group";
          }

          return objs;
        }).map(function (items, index) {
          return _react2.default.createElement(_ContactGroup2.default, { key: items.type, languageChangeNum: languageChangeNum, avatarMap: avatarMap, contact_status_map: contact_status_map, isChoose: searchChoose === index, isToggle: isToggle, moduletype: items.type, type: _this2.type, item: items, isIM: isIM });
        });
      }

      return _react2.default.createElement(
        "div",
        { className: "left-panel" },
        _react2.default.createElement(
          "div",
          { className: "title" },
          language.CONFERENCE_MEMBER_PAGE_INVITE
        ),
        _react2.default.createElement(_SearchInput2.default, { type: this.type, selectBox_childPage: selectBox_childPage, languageChangeNum: languageChangeNum }),
        _react2.default.createElement(
          "div",
          { className: "left-content scroll-bar-overlay" },
          Array.isArray(contactList) && contactList.length === 0 ? _contact : contact
        ),
        _react2.default.createElement(
          "div",
          { className: "left-bottom-area" },
          guest_join_uri && !isMaxHub ? _react2.default.createElement(
            "div",
            { id: "clickcopylink", className: "bottom-btn" },
            _react2.default.createElement(
              _Button2.default,
              { className: "leftbutton", type: _Button.typeMap.STROKE, onClick: function onClick() {
                  return _this2._copyToBorad();
                } },
              language.COPY_CONFERENCE_LINK
            )
          ) : null
        ),
        guest_join_uri ? _react2.default.createElement(
          "div",
          { className: boradFocus ? "link-conf-warp" : "link-conf-warp none" },
          _react2.default.createElement(
            "div",
            { className: "link-area" },
            _react2.default.createElement(
              "p",
              null,
              language.SUCCESSFULLY_COPY_CONFLINK_TO_EMAIL
            )
          )
        ) : null
      );
    }
  }]);
  return LeftPanel;
}(_react.Component);

exports.default = LeftPanel;

/***/ }),

/***/ 2049:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(105);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(103);

var _libs = __webpack_require__(157);

var libs = _interopRequireWildcard(_libs);

var _service = __webpack_require__(266);

var service = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = window.Logger("components")("SelectBox/SearchInput");

var SearchInput = function (_Component) {
  (0, _inherits3.default)(SearchInput, _Component);

  function SearchInput(props) {
    (0, _classCallCheck3.default)(this, SearchInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchInput.__proto__ || (0, _getPrototypeOf2.default)(SearchInput)).call(this, props));

    _this._updateConfSearchTextProps = function (event, args) {
      logger.debug('_updateConfSearchTextProps', event, args);
      _this.setState(args);
    };

    _this._changeFocus = function (name) {
      var inputFocus = _this.state.inputFocus;

      _this.setState({
        inputFocus: !inputFocus
      });

      if (name === "blur" && _this.inputFocusFlag === 1) {
        _this.inputFocusFlag = -1;
      }
    };

    _this._onInput = function () {
      var inputValue = _this.searchInput.value;
      var type = _this.props.type;
      var searchText = _this.state.searchText;

      var value = inputValue.replace(/\s+/g, "");

      if (value === searchText) {
        logger.debug("same search text, return");
        return;
      }

      service.saveToggleChoose(event, false);

      if (value.length === 0) {
        var _args = {
          text: "",
          flag: false
        };
        return service.saveSearchText(event, (0, _stringify2.default)(_args));
      }

      var args = {
        text: inputValue,
        flag: true
      };
      service.saveSearchText(event, (0, _stringify2.default)(args));
      var args1 = {
        text: inputValue,
        type: type
      };
      service.selectBoxSearch(event, (0, _stringify2.default)(args1));
    };

    _this._throttleOnInput = throttle(_this._onInput, 300);

    _this.clearSearchText = function () {
      logger.info('userClick  create group search input delete btn');
      var args = {
        text: "",
        flag: false
      };
      _this.searchInput.value = "";
      _this.searchInput.focus();
      service.saveSearchText(event, (0, _stringify2.default)(args));
    };

    _this._onClick = function () {
      service.openWinKeyboard();
    };

    _this.state = {
      inputFocus: false,
      searchText: "",
      selectBox_childPage: false
    };
    libs.createNotify(constant.CHILD_RECEIVE_TYPE.updateConfSearchTextProps, _this._updateConfSearchTextProps);
    _this.inputFocusFlag = -1;
    return _this;
  }

  (0, _createClass3.default)(SearchInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextprops) {
      if (this.state.selectBox_childPage !== nextprops.selectBox_childPage) {
        this.setState({
          selectBox_childPage: nextprops.selectBox_childPage
        });

        if (this.inputFocusFlag === -1 && nextprops.selectBox_childPage) {
          this.inputFocusFlag = 1;
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var selectBox_childPage = this.props.selectBox_childPage;


      if (!selectBox_childPage) {
        this.clearSearchText();
        this.inputFocusFlag = -1;
      }

      if (this.inputFocusFlag === 1) {
        this.searchInput.focus();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          inputFocus = _state.inputFocus,
          searchText = _state.searchText;

      return _react2.default.createElement(
        'div',
        { className: 'search-area' },
        _react2.default.createElement(
          'div',
          { className: inputFocus ? "search-box input-focus" : "search-box" },
          _react2.default.createElement('input', { type: 'text', ref: function ref(elem) {
              return _this2.searchInput = elem;
            }, placeholder: language.SEARCH, onInput: this._throttleOnInput, onFocus: function onFocus() {
              return _this2._changeFocus("focus");
            }, onBlur: function onBlur() {
              return _this2._changeFocus("blur");
            }, autoFocus: true, onClick: function onClick() {
              return _this2._onClick();
            } }),
          inputFocus ? null : _react2.default.createElement(
            'div',
            { className: 'search-btn' },
            _react2.default.createElement(_Icon.Svg, { type: _Icon.iconMap.Search, style: {
                width: '100%',
                height: '100%'
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'close-icon ' + (searchText.length > 0 ? " main-hover-area" : " none"), onClick: this.clearSearchText },
            _react2.default.createElement(_Icon.Svg, { type: _Icon.iconMap.Close, svgClassName: "gray-search search-no-close", style: {
                width: "100%",
                height: "100%"
              } })
          )
        )
      );
    }
  }]);
  return SearchInput;
}(_react.Component);

exports.default = SearchInput;

/***/ }),

/***/ 2050:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(105);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(103);

var _LeftItem = __webpack_require__(2051);

var _LeftItem2 = _interopRequireDefault(_LeftItem);

var _service = __webpack_require__(266);

var service = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = window.Logger("components")("SelectBox/ContactGroup");

var ContactGroup = function (_Component) {
  (0, _inherits3.default)(ContactGroup, _Component);

  function ContactGroup(props) {
    (0, _classCallCheck3.default)(this, ContactGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ContactGroup.__proto__ || (0, _getPrototypeOf2.default)(ContactGroup)).call(this, props));

    _this._toggleChoose = function () {
      if (!_this.state.isChoose) {
        logger.info('userClick  create group and recent , contact and eddr expand');
      }
      _this.setState({ isChoose: !_this.state.isChoose });
      if (_this.moduletype === "search_corporate" || _this.moduletype === "search_contact") {
        service.saveToggleChoose(event, true);
      }
    };

    _this._expandMore = function (showNumber, contactCount) {
      logger.info('userClick  add member to group/conf load more');
      if (showNumber < contactCount) {
        _this.setState({ showNumber: showNumber + 10 });
      }
    };

    _this._loadMoreCorporate = function (showNumber, contactCount) {
      logger.info("load more corporate showNumber", "[" + showNumber + "]", "contactCount:[" + contactCount + "]", "moduletype:[" + _this.moduletype + "]");
      _this.setState({ showNumber: contactCount + 10 });

      var args = {
        contactCount: contactCount,
        moduletype: _this.moduletype
      };
      service.loadMoreSelectCorporateLogic(event, (0, _stringify2.default)(args));
    };

    _this.arrowRight = _react2.default.createElement(_Icon.Svg, { type: _Icon.iconMap.ArrowRight });
    _this.arrowDown = _react2.default.createElement(_Icon.Svg, { type: _Icon.iconMap.ArrowDown });
    _this.moduletype = props.moduletype;
    _this.state = {
      isChoose: props.isChoose,
      showNumber: 5,
      type: props.type,
      name: props.item.moduleName || "",
      list: props.item.moduleList || [],
      total: (props.moduletype === "corporate" || props.moduletype === "search_corporate") && props.item.total || 0,
      contact_status_map: {},
      avatarMap: {}
    };
    return _this;
  }

  (0, _createClass3.default)(ContactGroup, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      //接受到新的数据，更新state
      if (nextProps.item.moduleList !== this.state.list) {
        this.setState({ list: nextProps.item.moduleList });
      }
      if (nextProps.item.total !== this.state.total) {
        this.setState({ total: nextProps.item.total });
      }
      if (nextProps.contact_status_map !== this.state.contact_status_map) {
        this.setState({ contact_status_map: nextProps.contact_status_map });
      }

      if (nextProps.avatarMap !== this.state.avatarMap) {
        this.setState({ avatarMap: nextProps.avatarMap });
      }

      if (nextProps.moduletype === "search_contact" || nextProps.moduletype === "search_corporate" || nextProps.moduletype === "search_group") {
        if (!nextProps.isToggle) {
          if (nextProps.isChoose !== this.state.isChoose) {
            this.setState({ isChoose: nextProps.isChoose });
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete this.moduletype;
      delete this.arrowRight;
      delete this.arrowDown;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isChoose = _state.isChoose,
          showNumber = _state.showNumber,
          type = _state.type,
          name = _state.name,
          list = _state.list,
          total = _state.total,
          contact_status_map = _state.contact_status_map,
          avatarMap = _state.avatarMap;
      var _props = this.props,
          languageChangeNum = _props.languageChangeNum,
          isIM = _props.isIM,
          _props$item = _props.item,
          item = _props$item === undefined ? {} : _props$item;

      var contactCount = list.length;

      var expandMore = null;
      // 是否展开 
      if (isChoose) {
        if (showNumber < contactCount) {
          expandMore = _react2.default.createElement(
            "div",
            { className: "expand-more", onClick: function onClick() {
                return _this2._expandMore(showNumber, contactCount);
              } },
            language.EXPAND_MORE
          );
        } else {
          if (this.moduletype === "corporate" || this.moduletype === "search_corporate") {
            // 判断当前显示的企业通讯录的个数是不是大于总数
            if (contactCount < total) {
              expandMore = _react2.default.createElement(
                "div",
                { className: "expand-more", onClick: function onClick() {
                    return _this2._loadMoreCorporate(showNumber, contactCount);
                  } },
                language.EXPAND_MORE
              );
            }
          }
        }
      }
      return _react2.default.createElement(
        "div",
        { className: "contact-area" + (isChoose ? " selected" : "") },
        _react2.default.createElement(
          "div",
          { className: "contact-group-name", onClick: this._toggleChoose, "data-testid": "contactman000123" },
          _react2.default.createElement(
            "div",
            { className: "icon-area" },
            isChoose ? this.arrowDown : this.arrowRight
          ),
          _react2.default.createElement(
            "span",
            null,
            language[item.moduleKey],
            this.moduletype === "corporate" || this.moduletype === "search_corporate" ? null : "(" + contactCount + ")"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "contact-group-list" + (contactCount === 0 || !isChoose ? " no-contact" : "") },
          _react2.default.createElement(
            "div",
            { className: "contact-list" },
            list.map(function (item, index) {
              if (index < showNumber) {
                var itemKey = item.account === "" ? item.contact_id : item.account;
                return _react2.default.createElement(_LeftItem2.default, { key: _this2.moduletype + "_" + itemKey, languageChangeNum: languageChangeNum, avatarMap: avatarMap, contact_status_map: contact_status_map, moduletype: _this2.moduletype, item: item, type: type, isIM: isIM });
              }
            })
          )
        ),
        expandMore
      );
    }

    /**
     * 展开和不展开
     */


    /**
     * 加载更多
     */


    /**
     * 加载更多企业通讯录
     */

  }]);
  return ContactGroup;
}(_react.Component);

exports.default = ContactGroup;

/***/ }),

/***/ 2051:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getIterator2 = __webpack_require__(113);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(111);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(105);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _Avatar = __webpack_require__(613);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _CheckButton = __webpack_require__(163);

var _CheckButton2 = _interopRequireDefault(_CheckButton);

var _NumberList = __webpack_require__(2052);

var _NumberList2 = _interopRequireDefault(_NumberList);

var _Icon = __webpack_require__(103);

var _libs = __webpack_require__(157);

var libs = _interopRequireWildcard(_libs);

var _service = __webpack_require__(266);

var service = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Avatar from "../../../components/common/Avatar";
var logger = window.Logger("components")("SelectBox/LeftItem");

var LeftItem = function (_Component) {
  (0, _inherits3.default)(LeftItem, _Component);

  function LeftItem(props) {
    (0, _classCallCheck3.default)(this, LeftItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LeftItem.__proto__ || (0, _getPrototypeOf2.default)(LeftItem)).call(this, props));

    _this.handleClickConfCheckBtn = function (e) {
      reactStopPropagation(e);
      var _this$state = _this.state,
          disabled = _this$state.disabled,
          item = _this$state.item;
      // 如果点击的列是置灰的那么直接return

      if (disabled) {
        return;
      }

      if (_this.moduletype === "group" || _this.moduletype === "search_group") {
        return;
      }
      // 0：没有选择 1：已经选择 

      if (item.isSelected === constant.SELECT_BOX_STATUS.SELECT_BOX_NO) {
        logger.info('userClick  select the contact of the creating group (recent，contact and eddr in use)');
        logger.info("no number selected, select bind_no, account: ", handlePhoneNumber(item.account));
        var numberInfo = item.numberInfo;

        if (numberInfo.bind_no.number === "") {
          logger.warn("bind_no is empty, do not deal select, find the next number");

          if (!_this.showNumber) {
            var _args = {
              account: item.account,
              name: item.name,
              number: "",
              numberName: "bind_no"
            };
            service.clickAccountSelectedLogic(event, (0, _stringify2.default)(_args));
            return;
          }

          var keys = (0, _keys2.default)(numberInfo);

          if (keys.length !== 0) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = (0, _getIterator3.default)(keys), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                if (!isNullOrEmpty(numberInfo[key].number)) {
                  logger.warn("found it, ", "numberName: " + key);
                  var _args2 = {
                    account: item.account,
                    name: item.name,
                    number: numberInfo[key].number,
                    numberName: key
                  };
                  service.clickAccountSelectedLogic(event, (0, _stringify2.default)(_args2));
                  return;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          return;
        }

        var args = {
          account: item.account,
          name: item.name,
          number: numberInfo.bind_no.number,
          numberName: "bind_no"
        };
        service.clickAccountSelectedLogic(event, (0, _stringify2.default)(args));
      } else if (item.isSelected === constant.SELECT_BOX_STATUS.SELECT_BOX_YES) {
        logger.info('userClick  delete the contact of the creating group (recent，contact and eddr in use)');
        logger.info("one or some number selected, cancel select, account: ", handlePhoneNumber(item.account));
        var _args3 = {
          account: item.account,
          name: item.name,
          number: "",
          numberName: ""
        };
        service.clickAccountSelectedLogic(event, (0, _stringify2.default)(_args3));
      }
    };

    _this._toggleContactExpanded = function (e) {
      reactStopPropagation(e);
      var item = _this.state.item;

      var args = {
        account: item.account,
        name: item.name,
        moduletype: _this.moduletype
      };
      service.toggleContactExpandedLogic(event, (0, _stringify2.default)(args));
    };

    _this.showNumber = props.type === constant.CONTACT_SELECT_DIALOG_TYPE.CONTACT_SELECT_DIALOG_CONFADDMEMBER || false;
    _this.moduletype = props.moduletype;
    _this.state = {
      type: props.type,
      item: props.item,
      disabled: props.item.isSelected === constant.SELECT_BOX_STATUS.SELECT_BOX_GRAY || false,
      // 如果选择的值是2表示置灰
      contact_status_map: {}
    }; // libs.createNotify(CHILD_RECEIVE_TYPE.updateContactStatusMapProps,this._updateContactStatusMapProps);
    return _this;
  } // _updateContactStatusMapProps=(event,args)=> {
  //   logger.debug('updateConfSelectBoxProps',event,args);
  //   console.warn(".......", args);
  //   this.setState({ contact_status_map: args.contact_status_map });

  // };

  (0, _createClass3.default)(LeftItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      //接受到新的数据，更新state
      if (nextProps.item !== this.state.item) {
        this.setState({
          item: nextProps.item
        });
      }

      if (nextProps.contact_status_map !== this.state.contact_status_map) {
        this.setState({
          contact_status_map: nextProps.contact_status_map
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.moduletype !== "group" && this.moduletype !== "search_group") {
        var keys = (0, _keys2.default)(nextProps.item.numberInfo);

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(keys), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            if (nextProps.item.numberInfo[key].isSelected !== this.state.item.numberInfo[key].isSelected) {
              return true;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      return nextProps.item.isSelected !== this.state.item.isSelected || nextProps.item.isExpanded !== this.state.item.isExpanded || nextProps.contact_status_map !== this.state.contact_status_map;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          item = _state.item,
          type = _state.type,
          disabled = _state.disabled,
          contact_status_map = _state.contact_status_map;
      var _props = this.props,
          languageChangeNum = _props.languageChangeNum,
          avatarMap = _props.avatarMap,
          isIM = _props.isIM;

      var rightItem = null;
      var numberList = [];
      var statusInfo = contact_status_map[item.account];
      var statusDesc = statusInfo && statusInfo.desc;
      var status = statusInfo && statusInfo.status;
      var src = "";

      if (item.account && avatarMap[item.account]) {
        src = avatarMap[item.account];
      }

      statusDesc = coreIm.correctStatusDesc(status, statusDesc);

      if (this.moduletype !== "group" && this.moduletype !== "search_group") {
        var keys = (0, _keys2.default)(item.numberInfo);

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = (0, _getIterator3.default)(keys), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var key = _step3.value;

            if (item.numberInfo[key].number && item.numberInfo[key].number !== "") {
              var tmpItem = {
                account: item.account,
                contactName: item.name,
                name: key,
                num: item.numberInfo[key].number,
                isSelected: item.numberInfo[key].isSelected
              };
              numberList.push(tmpItem);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      if (this.showNumber) {
        var _type = item.isExpanded ? _Icon.iconMap.ArrowUp : _Icon.iconMap.ArrowDown;
        rightItem = _react2.default.createElement(
          "div",
          { className: "item-right", onClick: this._toggleContactExpanded },
          _react2.default.createElement(_Icon.Svg, { type: _type, style: {
              width: '100%',
              height: '100%'
            } })
        );
      }

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "left-contact-item" + (disabled ? ' no-select' : ''), onClick: function onClick(e) {
              return _this2.handleClickConfCheckBtn(e);
            } },
          _react2.default.createElement(
            "div",
            { className: "item-left" },
            _react2.default.createElement(
              "div",
              { className: "select-status" },
              !this.showNumber ? _react2.default.createElement(_CheckButton2.default, { disabled: disabled, isOutSideState: true, checkButtonState: item.isSelected }) : this.showNumber && numberList.length !== 0 ? _react2.default.createElement(_CheckButton2.default, { disabled: disabled, isOutSideState: true, checkButtonState: item.isSelected }) : _react2.default.createElement("div", { className: "checkbtn-empty" })
            ),
            _react2.default.createElement(
              "div",
              { className: "head-img" },
              this.moduletype !== "group" && this.moduletype !== "search_group" ? _react2.default.createElement(_Avatar2.default, { showStatus: true, client_type: statusInfo && statusInfo.client_type, src: src, status: statusInfo && statusInfo.status, account: item.account, userName: item.name, size: "small", isIM: isIM }) : _react2.default.createElement(_Avatar2.default, { groupId: item.account, userName: item.name, size: "small" })
            ),
            _react2.default.createElement(
              "div",
              { className: "item-info item-info-conf" },
              _react2.default.createElement(
                "div",
                { className: "avatar-name" },
                _react2.default.createElement(
                  "div",
                  { className: "user-status-pre", title: setTitleLongNewLine(item.name, constant.TITLE_NEW_LINE.NEW_LINE, constant.TITLE_NEW_LINE.NEW_LINE_LEN) },
                  item.name
                ),
                "\xA0",
                window.CLIENTCONFIG.USE_IM && statusDesc ? _react2.default.createElement(
                  "span",
                  { title: statusDesc },
                  "- " + statusDesc
                ) : null
              ),
              _react2.default.createElement(
                "div",
                { className: "avatar-content", title: setTitleLongNewLine(item.avatarContent, constant.TITLE_NEW_LINE.NEW_LINE, constant.TITLE_NEW_LINE.NEW_LINE_LEN) },
                item.avatarContent
              )
            )
          ),
          rightItem
        ),
        this.showNumber && item.isExpanded ? _react2.default.createElement(_NumberList2.default, { languageChangeNum: languageChangeNum, numberList: numberList, isGrayed: item.isGrayed, grayedInfo: item.grayedInfo }) : null
      );
    }
    /**
     * 点击事件
     * 说明：当无选中号码时点击，选中绑定号码；当有选中号码时点击，取消所有号码
     */

    /**
     * 更新联系人列表中联系人展开状态
     */

  }]);
  return LeftItem;
}(_react.Component);

exports.default = LeftItem;

/***/ }),

/***/ 2052:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _NumberItem = __webpack_require__(2053);

var _NumberItem2 = _interopRequireDefault(_NumberItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberList = function (_Component) {
  (0, _inherits3.default)(NumberList, _Component);

  function NumberList(props) {
    (0, _classCallCheck3.default)(this, NumberList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NumberList.__proto__ || (0, _getPrototypeOf2.default)(NumberList)).call(this, props));

    _this.state = {
      numberList: props.numberList
    };
    return _this;
  }

  (0, _createClass3.default)(NumberList, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      //接受到新的数据，更新state
      if (nextProps.numberList !== this.state.numberList) {
        this.setState({ numberList: nextProps.numberList });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var numberList = this.state.numberList;
      var languageChangeNum = this.props.languageChangeNum;

      return _react2.default.createElement(
        "div",
        { className: "number-list" },
        numberList.length > 0 ? numberList.map(function (numItem, index) {
          return _react2.default.createElement(_NumberItem2.default, {
            key: numItem.account + "_" + numItem.name,
            name: numItem.name,
            num: numItem.num,
            isSelected: numItem.isSelected,
            account: numItem.account,
            contactName: numItem.contactName,
            languageChangeNum: languageChangeNum
          });
        }) : _react2.default.createElement(
          "div",
          { className: "no-number" },
          language.NOT_CONTACT_INFORMATION
        )
      );
    }
  }]);
  return NumberList;
}(_react.Component);

exports.default = NumberList;

/***/ }),

/***/ 2053:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(105);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _CheckButton = __webpack_require__(163);

var _CheckButton2 = _interopRequireDefault(_CheckButton);

var _libs = __webpack_require__(157);

var libs = _interopRequireWildcard(_libs);

var _service = __webpack_require__(266);

var service = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberItem = function (_Component) {
  (0, _inherits3.default)(NumberItem, _Component);

  function NumberItem(props) {
    (0, _classCallCheck3.default)(this, NumberItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NumberItem.__proto__ || (0, _getPrototypeOf2.default)(NumberItem)).call(this, props));

    _this.state = {
      name: props.name,
      num: props.num,
      account: props.account,
      contactName: props.contactName,
      isSelected: props.isSelected,
      disabled: props.isSelected === constant.SELECT_BOX_STATUS.SELECT_BOX_GRAY || false
      // 如果选择的值是2表示置灰
    };
    return _this;
  }

  (0, _createClass3.default)(NumberItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      //接受到新的数据，更新state
      if (nextProps.isSelected !== this.state.isSelected) {
        this.setState({
          isSelected: nextProps.isSelected
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.isSelected !== this.state.isSelected;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          name = _state.name,
          num = _state.num,
          isSelected = _state.isSelected,
          account = _state.account,
          contactName = _state.contactName,
          disabled = _state.disabled;

      var itemName = "";

      switch (name) {
        case "bind_no":
          itemName = language.CALL_TYPE_VOIP + ":";
          break;

        case "espacenumber":
          itemName = language.CALL_TYPE_VOIP + ":";
          break;

        case 'short_phone':
          itemName = language.HARDWARE_TERMINAL_PHONE + ":";
          break;

        case "mobile":
          itemName = language.CALL_TYPE_MOBILE + ":";
          break;

        case "home_phone":
          itemName = language.CALL_TYPE_HOME_PHONE + ":";
          break;

        case "office_phone":
          itemName = language.OFFICE_PHONE + ":";
          break;

        case "office_phone2":
          itemName = language.HARDWARE_TERMINAL_PHONE + ":";
          break;

        case "other_phone":
          itemName = language.CALL_TYPE_OTHER_PHONE + ":";
          break;

        case "other_phone2":
          itemName = language.CALL_TYPE_OTHER_PHONE2 + ":";
          break;

        case 'account':
          itemName = language.CALL_TYPE_VIDEO + ":";
          break;

        case 'ip_phone':
          itemName = language.CALL_TYPE_IP_PHONE + ":";
          break;

        default:
          itemName = language.CALL_NUMBER + ":";
          break;
      }

      return _react2.default.createElement(
        "div",
        { className: "number-item", onClick: function onClick() {
            return _this2.handleClick(num, account, contactName, name);
          } },
        _react2.default.createElement(
          "div",
          { className: "item-check" },
          _react2.default.createElement(_CheckButton2.default, { disabled: disabled, isOutSideState: true, checkButtonState: isSelected })
        ),
        _react2.default.createElement(
          "div",
          { className: "item-key" },
          itemName
        ),
        _react2.default.createElement(
          "div",
          { className: "item-number", title: setTitleLongNewLine(num, constant.TITLE_NEW_LINE.NEW_LINE, constant.TITLE_NEW_LINE.NEW_LINE_LEN) },
          num
        )
      );
    }
  }, {
    key: "handleClick",
    value: function handleClick(number, account, contactName, itemName) {
      var disabled = this.state.disabled;
      // 如果点击的列是置灰的那么直接return

      if (disabled) {
        return;
      }

      var args = {
        account: account,
        name: contactName,
        number: number,
        numberName: itemName
      };
      service.clickAccountSelectedLogic(event, (0, _stringify2.default)(args));
    }
  }]);
  return NumberItem;
}(_react.Component);

exports.default = NumberItem;

/***/ }),

/***/ 2054:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(103);

var _service = __webpack_require__(266);

var service = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = window.Logger("components")("SelectBox/ContactGroup");

var ContactGroup = function (_Component) {
  (0, _inherits3.default)(ContactGroup, _Component);

  function ContactGroup(props) {
    (0, _classCallCheck3.default)(this, ContactGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ContactGroup.__proto__ || (0, _getPrototypeOf2.default)(ContactGroup)).call(this, props));

    _this._toggleChoose = function () {
      if (!_this.state.isChoose) {
        logger.info('userClick  create group and recent , contact and eddr expand');
      }
      _this.setState({ isChoose: !_this.state.isChoose });
      if (_this.moduletype === "search_corporate" || _this.moduletype === "search_contact") {
        service.saveToggleChoose(event, true);
      }
    };

    _this.arrowRight = _react2.default.createElement(_Icon.Svg, { type: _Icon.iconMap.ArrowRight });
    _this.arrowDown = _react2.default.createElement(_Icon.Svg, { type: _Icon.iconMap.ArrowDown });
    _this.moduletype = props.moduletype;
    _this.state = {
      isChoose: props.isChoose,
      showNumber: 5,
      type: props.type,
      name: props.item.moduleName || "",
      list: props.item.moduleList || [],
      total: (props.moduletype === "corporate" || props.moduletype === "search_corporate") && props.item.total || 0
    };
    return _this;
  }

  (0, _createClass3.default)(ContactGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      //接受到新的数据，更新state
      if (nextProps.moduletype === "search_contact" || nextProps.moduletype === "search_corporate" || nextProps.moduletype === "search_group") {
        if (!nextProps.isToggle) {
          if (nextProps.isChoose !== this.state.isChoose) {
            this.setState({ isChoose: nextProps.isChoose });
          }
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      delete this.moduletype;
      delete this.arrowRight;
      delete this.arrowDown;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isChoose = _state.isChoose,
          showNumber = _state.showNumber,
          type = _state.type,
          name = _state.name,
          list = _state.list,
          total = _state.total;
      var _props$item = this.props.item,
          item = _props$item === undefined ? {} : _props$item;


      var contactCount = list.length;

      // 是否展开 

      return _react2.default.createElement(
        'div',
        { className: "contact-area" + (isChoose ? " selected" : "") },
        _react2.default.createElement(
          'div',
          { className: 'contact-group-name', onClick: this._toggleChoose, 'data-testid': 'contactman000123' },
          _react2.default.createElement(
            'div',
            { className: 'icon-area' },
            isChoose ? this.arrowDown : this.arrowRight
          ),
          _react2.default.createElement(
            'span',
            null,
            language[item.moduleKey],
            this.moduletype === "corporate" || this.moduletype === "search_corporate" ? null : '(' + contactCount + ')'
          )
        )
      );
    }

    /**
     * 展开和不展开
     */

  }]);
  return ContactGroup;
}(_react.Component);

exports.default = ContactGroup;

/***/ }),

/***/ 2055:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(105);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _RightItem = __webpack_require__(2056);

var _RightItem2 = _interopRequireDefault(_RightItem);

var _Button = __webpack_require__(115);

var _Button2 = _interopRequireDefault(_Button);

var _libs = __webpack_require__(157);

var libs = _interopRequireWildcard(_libs);

var _service = __webpack_require__(266);

var service = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { selectBoxSaveData, selectBoxCancelData } from "../../../../logic/common/selectionBox/index";
var logger = window.Logger('Click')('RightPanel');

var RightPanel = function (_Component) {
  (0, _inherits3.default)(RightPanel, _Component);

  function RightPanel(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, RightPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RightPanel.__proto__ || (0, _getPrototypeOf2.default)(RightPanel)).call(this, props));

    _this._updateConfTempSelectedProps = function (event, args) {
      logger.debug('updateConfSelectBoxProps', event, args);
      _this.setState(args);
    };

    _this._handleSaveClick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var args;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              logger.info("userClick group/conf ensure button"); // clickOK();

              //hideSelectContactsModal();
              // selectBoxSaveData(this.accessPoint, this.message);
              args = {
                accessPoint: _this.accessPoint,
                message: _this.message
              };

              service.selectBoxSaveData(event, (0, _stringify2.default)(args));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.type = constant.CONTACT_SELECT_DIALOG_TYPE.CONTACT_SELECT_DIALOG_CONFADDMEMBER;
    _this.accessPoint = constant.SELECT_BOX_ACCESSPOINT.ACCESSPOINT_ONE;
    _this.message = "";
    _this.state = {
      tempSelectedList: [],
      avatarMap: props.avatarMap || {}
    };
    libs.createNotify(constant.CHILD_RECEIVE_TYPE.updateConfTempSelectedProps, _this._updateConfTempSelectedProps);
    return _this;
  }

  (0, _createClass3.default)(RightPanel, [{
    key: "render",
    // componentWillReceiveProps(nextProps) {
    //   //接受到新的数据，更新state
    //   if(nextProps.tempSelectedList !== this.state.tempSelectedList) {
    //     this.setState({ tempSelectedList: nextProps.tempSelectedList });

    //  }
    // }
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          tempSelectedList = _state.tempSelectedList,
          avatarMap = _state.avatarMap;

      var title = language.SELECTED + "(" + tempSelectedList.length + ")";
      return _react2.default.createElement(
        "div",
        { className: "right-panel" },
        _react2.default.createElement(
          "div",
          { className: "title" },
          title
        ),
        _react2.default.createElement(
          "div",
          { className: "selected-list scroll-bar-overlay" },
          tempSelectedList.map(function (item, index) {
            return _react2.default.createElement(_RightItem2.default, { key: item.account + "_" + item.numberName + "_" + item.number, avatarMap: avatarMap, item: item, type: _this3.type });
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "bottom-area" },
          _react2.default.createElement(
            "div",
            { className: "bottom-btn right-panel-btn" },
            _react2.default.createElement(
              _Button2.default,
              { onClick: this._handleSaveClick, disabled: tempSelectedList.length === 0 },
              language.COMMON_OK
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "bottom-btn" },
            _react2.default.createElement(
              _Button2.default,
              { type: _Button.typeMap.STROKE, onClick: this._handleClickCancel },
              language.COMMON_CANCEL
            )
          )
        )
      );
    }
    /**
     * 保存
     */

  }, {
    key: "_handleClickCancel",
    value: function _handleClickCancel() {
      logger.info("userClick create group/conf cancel button");
      service.closeWindowsSelectBox();
    }
  }]);
  return RightPanel;
}(_react.Component);

exports.default = RightPanel;

/***/ }),

/***/ 2056:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(105);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _Avatar = __webpack_require__(613);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Icon = __webpack_require__(103);

var _libs = __webpack_require__(157);

var libs = _interopRequireWildcard(_libs);

var _service = __webpack_require__(266);

var service = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = window.Logger('components/SelectBox')('RightItem');
var RightItem = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(RightItem, _Component);

  function RightItem(props) {
    (0, _classCallCheck3.default)(this, RightItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RightItem.__proto__ || (0, _getPrototypeOf2.default)(RightItem)).call(this, props));

    _initialiseProps.call(_this);

    var _props$item = props.item,
        account = _props$item.account,
        name = _props$item.name,
        avatarContent = _props$item.avatarContent,
        number = _props$item.number,
        numberName = _props$item.numberName,
        itemType = _props$item.itemType,
        isSelected = _props$item.isSelected;

    _this.type = props.type;
    _this.state = {
      account: account,
      contactName: name,
      avatarContent: avatarContent,
      number: number,
      numberName: numberName,
      itemType: itemType,
      isSelected: isSelected
    };
    return _this;
  }

  (0, _createClass3.default)(RightItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          account = _state.account,
          contactName = _state.contactName,
          avatarContent = _state.avatarContent,
          number = _state.number,
          numberName = _state.numberName,
          itemType = _state.itemType,
          isSelected = _state.isSelected;
      var avatarMap = this.props.avatarMap;

      var realName = contactName;

      if (account === "" && contactName === number) {
        contactName = "";
      }

      var secondLine = this.type === constant.CONTACT_SELECT_DIALOG_TYPE.CONTACT_SELECT_DIALOG_DISCUSSGROUP ? avatarContent : number;
      var src = "";

      if (account && avatarMap[account]) {
        src = avatarMap[account];
      }

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "right-contact-item" },
          _react2.default.createElement(
            "div",
            { className: "item-left" },
            _react2.default.createElement(
              "div",
              { className: "head-img" },
              itemType !== "group" ? _react2.default.createElement(_Avatar2.default, { src: src, account: account, userName: realName, size: "small" }) : _react2.default.createElement(_Avatar2.default, { groupId: account, userName: name, size: "small" })
            ),
            _react2.default.createElement(
              "div",
              { className: "item-info" },
              _react2.default.createElement(
                "div",
                { className: "avatar-name", title: contactName },
                contactName
              ),
              _react2.default.createElement(
                "div",
                { className: "avatar-content", title: secondLine },
                secondLine
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "item-right", onClick: function onClick() {
                return _this2.handleClick(account, realName, number, numberName, itemType, isSelected);
              } },
            _react2.default.createElement(_Icon.Svg, { type: _Icon.iconMap.Close2, style: {
                width: '100%',
                height: '100%'
              } })
          )
        )
      );
    }
  }]);
  return RightItem;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleClick = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(account, contactName, number, numberName, itemType, isSelected) {
      var args;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              logger.info('userClick  delete selected contact when creating group');

              if (!(itemType !== "group")) {
                _context.next = 5;
                break;
              }

              args = {
                account: account,
                name: contactName,
                number: number,
                numberName: numberName
              };

              service.clickAccountSelectedLogic(event, (0, _stringify2.default)(args));
              return _context.abrupt("return");

            case 5:
              return _context.abrupt("return");

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this3);
    }));

    return function (_x, _x2, _x3, _x4, _x5, _x6) {
      return _ref.apply(this, arguments);
    };
  }();
}, _temp);
exports.default = RightItem;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeIsSysAvatar = exports.showAvatarLeader = exports.saveSelectAvatar = exports.saveAvatarHistory = exports.setImgOptions = exports.setChooseImgSrc = undefined;

var _assign = __webpack_require__(102);

var _assign2 = _interopRequireDefault(_assign);

exports.default = reducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_CHOOSE_IMG_SRC = "setting/setAvatar/setChooseImgSrc";
var SET_IMG_OPTIONS = "setting/setAvatar/setImgOptions";
var SAVE_AVATAR_HISTORY = "setting/setAvatar/saveAvatarHistory";
var SAVE_SELECT_AVATAR = "setting/setAvatar/saveSelectAvatar";
var SHOW_AVATAR_LEADER = "setting/setAvatar/showAvatarLeader";
var CHANGE_IS_SYSAVATAR = "setting/setAvatar/changeIsSysAvatar";
// initialState
var initialState = {
  chooseImgSrc: '', //选择图片的src
  imageNewStatus: {
    imgNextX: 100, //绘制图片起点X
    imgNextY: 5, //绘制图片起点Y
    imgNextScale: 1, //绘制图片缩放
    nextRotation: 0 //绘制图片旋转角度
  },
  avatarHistory: [],
  selectAvatar: "",
  isShowLeader: false,
  isSysAvatar: false
};
// Reducer
var logger = window.Logger("ducks")("setting/setAvatar");
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.clone(initialState);
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SET_CHOOSE_IMG_SRC:
      return (0, _assign2.default)({}, state, { chooseImgSrc: action.chooseImgSrc });
    case SET_IMG_OPTIONS:
      return (0, _assign2.default)({}, state, { imageNewStatus: action.imageNewStatus });
    case SAVE_AVATAR_HISTORY:
      return (0, _assign2.default)({}, state, { avatarHistory: action.avatarHistory });
    case SAVE_SELECT_AVATAR:
      return (0, _assign2.default)({}, state, { selectAvatar: action.selectAvatar });
    case SHOW_AVATAR_LEADER:
      return (0, _assign2.default)({}, state, { isShowLeader: action.isShowLeader });
    case CHANGE_IS_SYSAVATAR:
      return (0, _assign2.default)({}, state, { isSysAvatar: action.isSysAvatar });
    default:
      return state;
  }
}
// Action Creater
var setChooseImgSrc = exports.setChooseImgSrc = function setChooseImgSrc(chooseImgSrc) {
  return { type: SET_CHOOSE_IMG_SRC, chooseImgSrc: chooseImgSrc };
};

var setImgOptions = exports.setImgOptions = function setImgOptions(imageNewStatus) {
  return { type: SET_IMG_OPTIONS, imageNewStatus: imageNewStatus };
};

var saveAvatarHistory = exports.saveAvatarHistory = function saveAvatarHistory(avatarHistory) {
  return { type: SAVE_AVATAR_HISTORY, avatarHistory: avatarHistory };
};

var saveSelectAvatar = exports.saveSelectAvatar = function saveSelectAvatar(selectAvatar) {
  return { type: SAVE_SELECT_AVATAR, selectAvatar: selectAvatar };
};

var showAvatarLeader = exports.showAvatarLeader = function showAvatarLeader(isShowLeader) {
  return { type: SHOW_AVATAR_LEADER, isShowLeader: isShowLeader };
};

var changeIsSysAvatar = exports.changeIsSysAvatar = function changeIsSysAvatar(isSysAvatar) {
  return { type: CHANGE_IS_SYSAVATAR, isSysAvatar: isSysAvatar };
};

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//按钮主题
var typeMap = exports.typeMap = {
  STROKE: ' stroke ',
  FILL: ' fill '
};
var colorMap = exports.colorMap = {
  BLUE: ' blue ',
  RED: ' red '
};
var sizeMap = exports.sizeMap = {
  NORMAL: ' normal ',
  // NORMAL30:' normal30 ',
  LARGE: ' large ',
  LARGE32: ' large32 ',
  SMALL: ' small '
};

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(241);
module.exports = __webpack_require__(8).Object.getPrototypeOf;


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(114);
var $getPrototypeOf = __webpack_require__(242);

__webpack_require__(132)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(382);

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAvatarmap = exports.initAvatarMap = exports.updateAvatarMap = undefined;

var _assign = __webpack_require__(102);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(285);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = reducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//action type
var UPDATE_AVATAR_MAP = "common/avatar/updateAvatarMap"; //更新头像路径
var INIT_AVATAR_MAP = "common/avatar/initAvatarMap"; //初始化头像路径
var DELETE_AVATAR_MAP = "common/avatar/deleteAvatarmap";
//删除id为0的默认头像路径
//initial state
var initialState = {
  avatarMap: {}
};

//reducer
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.clone(initialState);
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var avatarMap = (0, _objectWithoutProperties3.default)(state.avatarMap, []);

  switch (action.type) {
    case UPDATE_AVATAR_MAP:
      (0, _assign2.default)(avatarMap, action.map);
      return (0, _assign2.default)({}, state, { avatarMap: avatarMap });
    case INIT_AVATAR_MAP:
      return (0, _assign2.default)({}, state, { avatarMap: {} });
    case DELETE_AVATAR_MAP:
      if (avatarMap.hasOwnProperty(action.key)) {
        delete avatarMap[action.key];
      }
      return (0, _assign2.default)({}, state, { avatarMap: avatarMap });
    default:
      return state;
  }
}

//actionCreater
//更新头像路径
var updateAvatarMap = exports.updateAvatarMap = function updateAvatarMap(map) {
  return { type: UPDATE_AVATAR_MAP, map: map };
};
var initAvatarMap = exports.initAvatarMap = function initAvatarMap() {
  return { type: INIT_AVATAR_MAP };
};
var deleteAvatarmap = exports.deleteAvatarmap = function deleteAvatarmap(map) {
  return { type: DELETE_AVATAR_MAP, key: map };
};

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorMap = exports.sizeMap = exports.typeMap = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _constants = __webpack_require__(217);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call.apply(_ref, [this].concat(args))), _this), _this.btnOnClick = function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          loading = _this$props.loading;

      if (onClick && !(disabled || loading)) {
        onClick();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Button, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          type = _props.type,
          color = _props.color,
          size = _props.size,
          title = _props.title,
          disabled = _props.disabled,
          children = _props.children,
          loading = _props.loading,
          className = _props.className,
          dataTestid = _props.dataTestid;

      var btnCls = 'pc-btn' + type + color + size + className;
      loading && (btnCls += ' loading');
      disabled && (btnCls += ' disabled');
      return _react2.default.createElement(
        "div",
        { className: btnCls, onClick: this.btnOnClick, title: title, "data-testid": dataTestid },
        _react2.default.createElement("div", { className: "btn-loading" }),
        _react2.default.createElement(
          "div",
          { className: "btn-text max-line-2" },
          children
        )
      );
    }
  }]);
  return Button;
}(_react.Component), _class.propTypes = {
  type: _propTypes2.default.string, //按钮类型:填充、描边
  color: _propTypes2.default.string, //按钮颜色:红色、蓝色
  title: _propTypes2.default.string, //按钮标题
  onClick: _propTypes2.default.func, //点击事件
  className: _propTypes2.default.string,
  size: _propTypes2.default.string, //按钮尺寸:small,default,large. 默认default
  loading: _propTypes2.default.bool, //加载状态 : boolean或者delay:number
  disabled: _propTypes2.default.bool, //禁用按钮:true禁用
  children: _propTypes2.default.any
}, _class.defaultProps = {
  type: _constants.typeMap.FILL,
  color: _constants.colorMap.BLUE,
  size: _constants.sizeMap.NORMAL,
  title: '',
  className: '',
  loading: false,
  disabled: false
}, _temp2);
exports.default = Button;
exports.typeMap = _constants.typeMap;
exports.sizeMap = _constants.sizeMap;
exports.colorMap = _constants.colorMap;

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openWinKeyboard = exports.copyToBorad = exports.selectBoxSaveData = exports.selectBoxSearch = exports.saveSearchText = exports.loadMoreSelectCorporateLogic = exports.clickAccountSelectedLogic = exports.toggleContactExpandedLogic = exports.saveToggleChoose = exports.closeWindowsSelectBox = undefined;

var _libs = __webpack_require__(157);

var sendService = _interopRequireWildcard(_libs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var closeWindowsSelectBox = exports.closeWindowsSelectBox = function closeWindowsSelectBox() {
  return sendService.createSendMessage(constant.CHILD_SEND_TYPE.closeWindowsSelectBox);
};
var saveToggleChoose = exports.saveToggleChoose = function saveToggleChoose(event, args) {
  sendService.createSendMessage(constant.CHILD_SEND_TYPE.saveToggleChoose, args);
};
var toggleContactExpandedLogic = exports.toggleContactExpandedLogic = function toggleContactExpandedLogic(event, args) {
  sendService.createSendMessage(constant.CHILD_SEND_TYPE.toggleContactExpandedLogic, args);
};
var clickAccountSelectedLogic = exports.clickAccountSelectedLogic = function clickAccountSelectedLogic(event, args) {
  sendService.createSendMessage(constant.CHILD_SEND_TYPE.clickAccountSelectedLogic, args);
};
var loadMoreSelectCorporateLogic = exports.loadMoreSelectCorporateLogic = function loadMoreSelectCorporateLogic(event, args) {
  sendService.createSendMessage(constant.CHILD_SEND_TYPE.loadMoreSelectCorporateLogic, args);
};
var saveSearchText = exports.saveSearchText = function saveSearchText(event, args) {
  sendService.createSendMessage(constant.CHILD_SEND_TYPE.saveSearchText, args);
};
var selectBoxSearch = exports.selectBoxSearch = function selectBoxSearch(event, args) {
  sendService.createSendMessage(constant.CHILD_SEND_TYPE.selectBoxSearch, args);
};
var selectBoxSaveData = exports.selectBoxSaveData = function selectBoxSaveData(event, args) {
  sendService.createSendMessage(constant.CHILD_SEND_TYPE.selectBoxSaveData, args);
};
var copyToBorad = exports.copyToBorad = function copyToBorad() {
  return sendService.createSendMessage(constant.CHILD_SEND_TYPE.copyToBorad);
};
//启动软键盘
var openWinKeyboard = exports.openWinKeyboard = function openWinKeyboard() {
  sendService.createSendMessage(constant.CHILD_SEND_TYPE.openWinKeyboard);
};

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(429);

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContactAvatarText = getContactAvatarText;
exports.getGroupAvatarText = getGroupAvatarText;
exports.getBackgroundCls = getBackgroundCls;
/**
 * 生成联系人头像
 * @param {string} name
 */
function getContactAvatarText(name) {
  var avatarText = String(name).trim().toUpperCase();
  if (avatarText.length <= 2) {
    return avatarText;
  }
  if (/[\u4e00-\u9fa5]/.test(avatarText)) {
    var temp = avatarText.replace(/[^\u4e00-\u9fa5]/g, "");
    if (temp.length > 1) {
      return temp.slice(temp.length - 2);
    }
    if (/^[0-9a-zA-Z]+[\u4e00-\u9fa5]$/.test(avatarText)) {
      return avatarText.slice(avatarText.length - 2);
    }
    var position = avatarText.search(/[\u4e00-\u9fa5]/);
    return avatarText.slice(position, position + 2);
  } else if (/\s/.test(avatarText)) {
    return avatarText.split(/\s+/).slice(0, 2).map(function (x) {
      return x.charAt(0);
    }).join("");
  }
  return avatarText.slice(0, 2);
}

/**
 * 群组中单人头像文字
 * @param {string} name
 */
function getGroupAvatarText(name) {
  var avatarText = String(name).trim().toUpperCase();
  if (avatarText.length <= 1) {
    return avatarText;
  }
  if (/[\u4e00-\u9fa5]+/.test(avatarText)) {
    avatarText = avatarText.replace(/[\w\s]*/g, "");
    return avatarText.charAt(avatarText.length - 1);
  }
  return avatarText.charAt(0);
}

/**
 * 获取背景色
 * @param {string} str
 * @param {number} gender
 */
function getBackgroundCls(str, gender) {
  var sum = 0;
  str = String(str);
  for (var i = 0, j = str.length; i < j; i++) {
    sum += str.charCodeAt(i);
  }
  if (gender === 1) {
    return "f-" + sum % 2;
  }
  return "m-" + sum % 5;
}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

exports.createAvatar = createAvatar;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = window.Logger("common")("avatar/saveToLocal");
function createAvatar(account, name) {
  var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var bgColor = getBgColor(account || name, gender);
  var canvas = createCanvas();

  if (canvas) {
    canvas = setCanvasAvatarContent(canvas)(name, bgColor);
    return saveLocalAvatar(canvas, account);
  }

  return _promise2.default.resolve(false);
}
window.createAvatar = createAvatar;
/**
 * 获取头像背景色
 * @param {string} str
 * @param {number} gender
 */

function getBgColor(str, gender) {
  var sum = 0;
  str = String(str);

  for (var i = 0, j = str.length; i < j; i++) {
    sum += str.charCodeAt(i);
  }

  if (gender === 1) {
    return getFemaleBgColor(sum % 2);
  }

  return getMaleBgColor(sum % 5);
}

function createCanvas() {
  var avatarSize = getAvatarSize();
  var canvas = document.createElement('canvas');
  canvas.width = avatarSize;
  canvas.height = avatarSize;

  if (canvas.getContext) {
    return canvas;
  }

  logger.error('createCanvas canvas-unsupported');
  return false;
}

function setCanvasAvatarContent(canvas) {
  logger.info('setCanvasAvatarContent');

  function setAvatarContent(name, bgColor) {
    logger.info('setAvatarContent');
    var ctx = canvas.getContext('2d');
    drawAvatarBg(ctx, bgColor);
    drawAvatarText(ctx, name);
    return canvas;
  }

  return setAvatarContent;
}

function saveLocalAvatar(canvas, account) {
  var base64Data = canvas.toDataURL();
  var savePath = window.getAvatarPath(coreCommon.getSelfAccount()) + account + getAvatarFileType();
  return appService.saveBase64Img(base64Data, savePath).then(function success() {
    logger.debug('createAvatar success', savePath);
    logger.info('createAvatar success');
  }).catch(function saveFailhandler(error) {
    logger.error('createAvatar error', error);
  });
}

function drawAvatarBg(ctx, bgColor) {
  var avatarSize = getAvatarSize();
  var circleSize = avatarSize / 2;
  ctx.fillStyle = bgColor;
  ctx.arc(circleSize, circleSize, circleSize, 0, 2 * Math.PI);
  ctx.fill();
}

function drawAvatarText(ctx, name) {
  var avatarSize = getAvatarSize();
  var position = avatarSize / 2;
  var text = getAvatarText(name);
  ctx.beginPath();
  ctx.fillStyle = '#ffffff';
  ctx.font = "20px 'Roboto Regular', 'Microsoft YaHei', Arial, Helvetica, sans-serif";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, position, position);
}
/**
 * 获取生成的联系人头像的显示文本
 * @param {string} name
 */

function getAvatarText(name) {
  var avatarText = String(name).trim().toUpperCase();

  if (avatarText.length <= 2) {
    return avatarText;
  }

  if (/[\u4e00-\u9fa5]/.test(avatarText)) {
    var temp = avatarText.replace(/[^\u4e00-\u9fa5]/g, "");

    if (temp.length > 1) {
      return temp.slice(temp.length - 2);
    }

    if (/^[0-9a-zA-Z]+[\u4e00-\u9fa5]$/.test(avatarText)) {
      return avatarText.slice(avatarText.length - 2);
    }

    var position = avatarText.search(/[\u4e00-\u9fa5]/);
    return avatarText.slice(position, position + 2);
  } else if (/\s/.test(avatarText)) {
    return avatarText.split(/\s+/).slice(0, 2).map(function (x) {
      return x.charAt(0);
    }).join("");
  }

  return avatarText.slice(0, 2);
}

function getAvatarSize() {
  var avatarConfig = getAvatarConfig();

  if (Object.type(avatarConfig.AVATAR_SIZE) !== Object.type.NUMBER || avatarConfig.AVATAR_SIZE <= 0) {
    logger.info('getAvatarSize size=', constant.AppConfig.DEFAULT_AVATAR_CONFIG.AVATAR_SIZE);
    return constant.AppConfig.DEFAULT_AVATAR_CONFIG.AVATAR_SIZE;
  }

  logger.info('getAvatarSize size=', avatarConfig.AVATAR_SIZE);
  return avatarConfig.AVATAR_SIZE;
}

function getMaleBgColor(key) {
  var avatarConfig = getAvatarConfig();
  var color = void 0;

  if (Object.type(avatarConfig.MALE_BG_COLOR) !== Object.type.OBJECT || Object.type(avatarConfig.MALE_BG_COLOR[key]) !== Object.type.STRING) {
    color = constant.AppConfig.DEFAULT_AVATAR_CONFIG.MALE_BG_COLOR[key] || '#ff0000';
    logger.info('getMaleBgColor 使用默认设置 ');
  } else {
    color = avatarConfig.MALE_BG_COLOR[key];
  }

  logger.info('getMaleBgColor ', color);
  return color;
}

function getFemaleBgColor(key) {
  var avatarConfig = getAvatarConfig();
  var color = void 0;

  if (Object.type(avatarConfig.FEMALE_BG_COLOR) !== Object.type.OBJECT || Object.type(avatarConfig.FEMALE_BG_COLOR[key]) !== Object.type.STRING) {
    color = constant.AppConfig.DEFAULT_AVATAR_CONFIG.FEMALE_BG_COLOR[key] || '#ff0000';
    logger.info('getFemaleBgColor 使用默认设置 ');
  } else {
    color = avatarConfig.FEMALE_BG_COLOR[key];
  }

  logger.info('getFemaleBgColor ', color);
  return color;
}

function getAvatarFileType() {
  var avatarConfig = getAvatarConfig();

  if (Object.type(avatarConfig.FILE_TYPE) !== Object.type.STRING) {
    logger.info('getFemaleBgColor FILE_TYPE=', constant.AppConfig.DEFAULT_AVATAR_CONFIG.FILE_TYPE);
    return constant.AppConfig.DEFAULT_AVATAR_CONFIG.FILE_TYPE;
  }

  logger.info('getFemaleBgColor FILE_TYPE=', avatarConfig.FILE_TYPE);
  return avatarConfig.FILE_TYPE;
}

function getAvatarConfig() {
  return window.CLIENTCONFIG.DEFAULT_AVATAR_CONFIG || constant.AppConfig.DEFAULT_AVATAR_CONFIG;
}

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrLocalAvatar = exports.getContactAvatar = exports.getContactListAvatar = undefined;

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(109);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * 从服务器批量获取联系人头像
 * @param {array} accountList 账号列表
 */

var getContactListAvatar = exports.getContactListAvatar = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var accountList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            accountList = accountList ? accountList : [];
            logger.info('getContactListAvatar begin', accountList.length);
            coreIm.addAvatarDownloadFunc(function () {
              return tup.searchAvatarList(accountList, dealGetAvatarListAck(accountList));
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getContactListAvatar() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 从服务器获取联系人头像
 * @param {string} account 账号
 * @param {number} iconSize 头像尺寸
 */

var getContactAvatar = exports.getContactAvatar = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(account) {
    var iconSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : constant.AVATAR_SIZE.BIG;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!isNullOrEmpty(account)) {
              _context2.next = 3;
              break;
            }

            logger.info('getContactAvatar account为空，不处理');
            return _context2.abrupt("return");

          case 3:
            // if(!util.isPc()){

            //  return;
            // }

            logger.debug('getContactAvatar', iconSize);
            coreIm.addAvatarDownloadFunc(function () {
              return tup.searchAvatar(account, iconSize, dealGetAvatarAck(account));
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getContactAvatar(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * 获取本地头像目录中已存在的头像
 */

var getCurrLocalAvatar = exports.getCurrLocalAvatar = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var avatarMap, randomStr, files, isSysAvatar;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(window.CLIENTCONFIG.ENABLE_IT_MEETING || window.CLIENTCONFIG.IS_LINK_IT_SMC_MEETING)) {
              _context3.next = 3;
              break;
            }

            logger.info('IT Meeting plugin, return');
            return _context3.abrupt("return");

          case 3:

            logger.info('getCurrLocalAvatar 初始化本地头像');
            avatarMap = $getState().common.avatarMap || {};
            //todo 随机数待优化 --> 取base64的片段做随机数

            randomStr = "?temp=" + Math.random();


            if (coreCommon.isPc()) {
              files = fs.readdirSync(window.avatarPath) || [];


              if (!isNullOrEmpty(files)) {
                files.forEach(function (fileName) {
                  var fPath = window.avatarPath + fileName;
                  var currAccount = getFileNameNoSuffix(fileName);

                  if (isNullOrEmpty(avatarMap[currAccount])) {
                    avatarMap[currAccount] = fPath + randomStr;
                  }
                });
              }
            } else if (window.CLIENTCONFIG.ISMOBILE) {
              appService.readLocalFileList("file://" + window.avatarPath).then(function (files) {
                if (!isNullOrEmpty(files)) {
                  files.forEach(function (filePath) {
                    var fileAccount = getMobileFileAccount(filePath);

                    if (isNullOrEmpty(avatarMap[fileAccount])) {
                      avatarMap[fileAccount] = filePath + randomStr;
                    }
                  });
                }
              });
            }

            isSysAvatar = $getState().setting.isSysAvatar;


            if (!isSysAvatar) {
              dataUpdate.updateAvatarMap(avatarMap);
            }

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getCurrLocalAvatar() {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * 查找本地重复头像,并删除旧的头像
 * @param {String} account 账号  
 * @param {String} currentAvatar 最新头像文件名
 */

var checkSameAvatar = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(account, currentAvatar) {
    var avatarMap, reg, oldFilePath, fileName, oldDir;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;

            logger.debug("checkSameAvatar begin");
            avatarMap = $getState().common.avatarMap;
            reg = /headimg[\\|\/](.*)/;

            if (!isNullOrEmpty(avatarMap[account])) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", "first");

          case 8:
            oldFilePath = avatarMap[account].split("?temp")[0];
            fileName = oldFilePath.match(reg)[1];
            oldDir = "";


            if (coreCommon.isPc()) {
              oldDir = window.avatarPath;
            } else {
              oldDir = window.avatarPath;
            }

            if (!(fileName === currentAvatar)) {
              _context4.next = 14;
              break;
            }

            return _context4.abrupt("return", "same");

          case 14:
            // 删除本地文件

            appService.deleteFile(oldDir, fileName);
            logger.info("checkSameAvatar delete old avatar file :", fileName);
            return _context4.abrupt("return", "delete");

          case 17:
            _context4.next = 22;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](0);

            logger.error("checkSameAvatar error", _context4.t0);

          case 22:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 19]]);
  }));

  return function checkSameAvatar(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

var _tup = __webpack_require__(289);

var tup = _interopRequireWildcard(_tup);

var _dataUpdate = __webpack_require__(200);

var dataUpdate = _interopRequireWildcard(_dataUpdate);

var _setAvatar = __webpack_require__(216);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = window.Logger("common")("serverAvatar");

function getFileNameNoSuffix(filePath) {
  if (filePath.indexOf("_s.") !== -1) {
    return filePath.slice(0, (filePath.lastIndexOf("_s.") - 1 >>> 0) + 1);
  } else {
    return filePath.slice(0, (filePath.lastIndexOf(".") - 1 >>> 0) + 1);
  }
}

function getMobileFileAccount(filePath) {
  var filename = filePath.split("headimg/")[1];
  return getFileNameNoSuffix(filename);
}

function dealGetAvatarAck(account) {
  return function (param) {
    logger.debug('dealGetAvatarAck 处理头像下载完成通知');
    coreIm.addAvatarDownloadAckFunc(function () {
      return dealGetAvatarResult(account, param);
    });
  };
}

function dealGetAvatarListAck(accountList) {
  return function (param) {
    logger.debug('dealGetAvatarListAck 处理头像下载完成通知');
    coreIm.addAvatarDownloadAckFunc(function () {
      return dealGetAvatarListResult(accountList, param);
    });
  };
}

function dealGetAvatarResult(account, param) {
  logger.debug('dealGetAvatarResult', param);
  var AvatarFile = param.AvatarFile,
      AvatarID = param.AvatarID,
      result = param.result;
  //todo 随机数待优化 --> 取base64的片段做随机数

  var randomStr = "?temp=" + Math.random();

  if (result === 0 && AvatarFile) {
    $dispatch((0, _setAvatar.changeIsSysAvatar)(false));
    checkSameAvatar(account, AvatarFile).then(function (result) {
      result === "delete" && logger.info("dealGetAvatarResult has delete old avatar file");
    });

    if (coreCommon.isPc()) {
      dataUpdate.updateAvatarMap((0, _defineProperty3.default)({}, account, window.avatarPath + AvatarFile + randomStr));
    } else if (coreCommon.isMac()) {// 
    } else if (window.CLIENTCONFIG.ISMOBILE) {
      var srcPath = "";

      if (coreCommon.isIos()) {
        srcPath = '/local-filesystem' + window.avatarPath + AvatarFile + randomStr;
      } else {
        srcPath = "file://" + window.avatarPath + AvatarFile + randomStr;
      }

      dataUpdate.updateAvatarMap((0, _defineProperty3.default)({}, account, srcPath));
    }
  } else if (result === 0 && AvatarID >= 0) {
    $dispatch((0, _setAvatar.changeIsSysAvatar)(true));

    if (AvatarID !== 0) {
      //dataUpdate.updateAvatarMap({[account]: "/../src/theme/default/img/common/avatar/"+AvatarID+".png"});
      if (coreCommon.isPc()) {
        dataUpdate.updateAvatarMap((0, _defineProperty3.default)({}, account, window.VIDEO_DEFAULT_IMG + "system_avatar" + AvatarID + ".png"));
      } else if (coreCommon.isMac()) {//
      } else if (window.CLIENTCONFIG.ISMOBILE) {
        var _srcPath = "";

        if (coreCommon.isIos()) {
          _srcPath = "./WeLinkProject/resources/icon/system_avatar" + AvatarID + ".png";
        } else {
          _srcPath = "file:///android_asset/www/resources/icon/system_avatar" + AvatarID + ".png";
        }

        dataUpdate.updateAvatarMap((0, _defineProperty3.default)({}, account, _srcPath));
      }
    } else {
      dataUpdate.deleteAvatarMap(account);
    }
  }

  return _promise2.default.resolve();
}

function dealGetAvatarListResult(accountList, param) {
  logger.debug('dealGetAvatarListResult', param);
  var info = param.info,
      result = param.result;
  var myAccount = $getState().myInfo.account;
  //todo 随机数待优化 --> 取base64的片段做随机数 --> 图片变动较小时无法从base64判断

  if (result === 0 && !isNullOrEmpty(info)) {
    info.forEach(function (AvatarInfo) {
      var randomStr = "?temp=" + Math.random();
      var AvatarFile = AvatarInfo.AvatarFile;
      var account = AvatarInfo.ucaccount;

      if (AvatarFile === "") {
        // 没有自定义头像
        return false;
      }

      if (myAccount === account) {
        logger.info("dealGetAvatarListResult query self avatar");
        return false;
      }

      checkSameAvatar(account, AvatarFile).then(function (result) {
        result === "delete" && logger.info("dealGetAvatarListResult has delete old avatar file");
      });

      if (coreCommon.isPc()) {
        dataUpdate.updateAvatarMap((0, _defineProperty3.default)({}, account, window.avatarPath + AvatarFile + randomStr));
      } else if (window.CLIENTCONFIG.ISMOBILE) {
        var srcPath = "";

        if (coreCommon.isIos()) {
          srcPath = '/local-filesystem' + window.avatarPath + AvatarFile + randomStr;
        } else {
          srcPath = "file://" + window.avatarPath + AvatarFile + randomStr;
        }

        dataUpdate.updateAvatarMap((0, _defineProperty3.default)({}, account, srcPath));
      }
    });
  }

  return _promise2.default.resolve();
}

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

exports.searchAvatar = searchAvatar;
exports.searchAvatarList = searchAvatarList;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = window.Logger("common")("avatar");
function searchAvatar(account) {
  var iconSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : constant.AVATAR_SIZE.BIG;
  var callback = arguments[2];

  logger.debug("searchAvatar", iconSize);

  if (!window.isEabInited) {
    logger.info("searchAvatar window.isEabInited is", window.isEabInited);
    return _promise2.default.resolve();
  }

  var params = {
    ServerType: constant.EADDR_SERVER_TYPE.RCS,
    ucaccount: account,
    IconSize: iconSize
  };
  return new coreTup.HWTupEaddr().then(function (eaddrService) {
    eaddrService.setNotifies({
      196611: callback
    });
    return eaddrService.eaddrSearchAvatar(params).then(function (data) {
      logger.debug("eaddrSearchAvatar");
      return _promise2.default.resolve(data);
    });
  });
}
/**
 * 批量查询联系人头像
 * @param {Array} accountList 账号列表
 */

function searchAvatarList(accountList, callback) {
  logger.info("searchAvatarList begin");

  if (!window.isEabInited) {
    logger.info("searchAvatarList EUA is not inited,isEabInited:", window.isEabInited);
    return _promise2.default.resolve();
  }

  var params = {
    ServerType: constant.EADDR_SERVER_TYPE.RCS,
    ucaccounts: accountList,
    IconSize: 0
    //! 批量查询当前只支持查询小头像
  };
  return new coreTup.HWTupEaddr().then(function (eaddrService) {
    eaddrService.setNotifies({
      196616: callback
    });
    return eaddrService.eaddrSearchAvatarList(params).then(function (data) {
      logger.debug("searchAvatarList");
      return _promise2.default.resolve(data);
    });
  });
}

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(5);

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(9);

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconMap = exports.default = undefined;

var _extends2 = __webpack_require__(107);

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(105);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgMap = __webpack_require__(336);

var _SvgMap2 = _interopRequireDefault(_SvgMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { showDifferentProperty } from "../../../../service/util";
var SvgIcon = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(SvgIcon, _Component);

  function SvgIcon() {
    (0, _classCallCheck3.default)(this, SvgIcon);
    return (0, _possibleConstructorReturn3.default)(this, (SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).apply(this, arguments));
  }

  (0, _createClass3.default)(SvgIcon, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      // showDifferentProperty(this.props,nextProps,'SvgIcon');
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if ((0, _stringify2.default)(nextProps.style) !== (0, _stringify2.default)(this.props.style) || nextProps.type !== this.props.type || nextProps.className !== this.props.className || nextProps.color !== this.props.color || nextProps.svgClassName !== this.props.svgClassName || nextProps.disable !== this.props.disable || nextProps.isShowOnly !== this.props.isShowOnly || nextProps.onClickEvent !== this.props.onClickEvent || nextProps.background !== this.props.background || nextProps.dataTestid !== this.props.dataTestid || nextProps.dataClick !== this.props.dataClick) {
        return true;
      }
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          type = _props.type,
          color = _props.color,
          disable = _props.disable,
          isShowOnly = _props.isShowOnly,
          background = _props.background,
          className = _props.className,
          style = _props.style,
          onClickEvent = _props.onClickEvent,
          dataClick = _props.dataClick,
          svgClassName = _props.svgClassName,
          dataTestid = _props.dataTestid;

      var CurrIcon = _SvgMap.SvgMap[type];
      if (!CurrIcon) {
        return null;
      }
      var divProps = {
        className: className, style: style, onClick: onClickEvent
      };
      if (dataClick) {
        divProps['data-click'] = dataClick;
      }
      return _react2.default.createElement(
        "div",
        (0, _extends3.default)({}, divProps, { "data-testid": dataTestid }),
        _react2.default.createElement(CurrIcon, { color: color, disable: disable, isShowOnly: isShowOnly, background: background, className: svgClassName })
      );
    }
  }]);
  return SvgIcon;
}(_react.Component), _class.propTypes = {
  type: _propTypes2.default.string,
  color: _propTypes2.default.string,
  className: _propTypes2.default.string,
  svgClassName: _propTypes2.default.string,
  disable: _propTypes2.default.bool,
  isShowOnly: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  onClickEvent: _propTypes2.default.any,
  dataClick: _propTypes2.default.any,
  background: _propTypes2.default.string,
  dataTestid: _propTypes2.default.string
}, _class.defaultProps = {
  type: '',
  color: '#000000',
  className: '',
  svgClassName: '',
  disable: false,
  isShowOnly: false,
  style: {},
  background: '',
  dataTestid: ''
}, _temp);
exports.default = SvgIcon;
var iconMap = exports.iconMap = _SvgMap2.default;

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgMap = undefined;

var _defineProperty2 = __webpack_require__(109);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _SvgMap;

var _ArrowDown = __webpack_require__(337);

var _ArrowDown2 = _interopRequireDefault(_ArrowDown);

var _ArrowLeft = __webpack_require__(338);

var _ArrowLeft2 = _interopRequireDefault(_ArrowLeft);

var _TurnRight = __webpack_require__(339);

var _TurnRight2 = _interopRequireDefault(_TurnRight);

var _TurnLeft = __webpack_require__(340);

var _TurnLeft2 = _interopRequireDefault(_TurnLeft);

var _ArrowUp = __webpack_require__(341);

var _ArrowUp2 = _interopRequireDefault(_ArrowUp);

var _ArrowRight = __webpack_require__(342);

var _ArrowRight2 = _interopRequireDefault(_ArrowRight);

var _Add = __webpack_require__(343);

var _Add2 = _interopRequireDefault(_Add);

var _AddBig = __webpack_require__(344);

var _AddBig2 = _interopRequireDefault(_AddBig);

var _DelMember = __webpack_require__(345);

var _DelMember2 = _interopRequireDefault(_DelMember);

var _Mute = __webpack_require__(346);

var _Mute2 = _interopRequireDefault(_Mute);

var _Speaker = __webpack_require__(347);

var _Speaker2 = _interopRequireDefault(_Speaker);

var _Right = __webpack_require__(348);

var _Right2 = _interopRequireDefault(_Right);

var _More = __webpack_require__(349);

var _More2 = _interopRequireDefault(_More);

var _Full = __webpack_require__(350);

var _Full2 = _interopRequireDefault(_Full);

var _Tab = __webpack_require__(351);

var _Tab2 = _interopRequireDefault(_Tab);

var _MiniSize = __webpack_require__(352);

var _MiniSize2 = _interopRequireDefault(_MiniSize);

var _Close = __webpack_require__(353);

var _Close2 = _interopRequireDefault(_Close);

var _MiniMize = __webpack_require__(354);

var _MiniMize2 = _interopRequireDefault(_MiniMize);

var _User = __webpack_require__(355);

var _User2 = _interopRequireDefault(_User);

var _Message = __webpack_require__(356);

var _Message2 = _interopRequireDefault(_Message);

var _Call = __webpack_require__(357);

var _Call2 = _interopRequireDefault(_Call);

var _User3 = __webpack_require__(358);

var _User4 = _interopRequireDefault(_User3);

var _User5 = __webpack_require__(359);

var _User6 = _interopRequireDefault(_User5);

var _PicInPicModeView = __webpack_require__(360);

var _PicInPicModeView2 = _interopRequireDefault(_PicInPicModeView);

var _DivideModeView = __webpack_require__(361);

var _DivideModeView2 = _interopRequireDefault(_DivideModeView);

var _BigSmallModeView = __webpack_require__(362);

var _BigSmallModeView2 = _interopRequireDefault(_BigSmallModeView);

var _Location = __webpack_require__(363);

var _Location2 = _interopRequireDefault(_Location);

var _Download = __webpack_require__(364);

var _Download2 = _interopRequireDefault(_Download);

var _Contral = __webpack_require__(365);

var _Contral2 = _interopRequireDefault(_Contral);

var _Client = __webpack_require__(366);

var _Client2 = _interopRequireDefault(_Client);

var _Mark = __webpack_require__(367);

var _Mark2 = _interopRequireDefault(_Mark);

var _Edit = __webpack_require__(368);

var _Edit2 = _interopRequireDefault(_Edit);

var _Message3 = __webpack_require__(369);

var _Message4 = _interopRequireDefault(_Message3);

var _Call3 = __webpack_require__(370);

var _Call4 = _interopRequireDefault(_Call3);

var _SuccessIcon = __webpack_require__(371);

var _SuccessIcon2 = _interopRequireDefault(_SuccessIcon);

var _Right3 = __webpack_require__(372);

var _Right4 = _interopRequireDefault(_Right3);

var _Info = __webpack_require__(373);

var _Info2 = _interopRequireDefault(_Info);

var _CloseBtn = __webpack_require__(374);

var _CloseBtn2 = _interopRequireDefault(_CloseBtn);

var _Search = __webpack_require__(375);

var _Search2 = _interopRequireDefault(_Search);

var _Menu = __webpack_require__(376);

var _Menu2 = _interopRequireDefault(_Menu);

var _Menu3 = __webpack_require__(377);

var _Menu4 = _interopRequireDefault(_Menu3);

var _Call5 = __webpack_require__(378);

var _Call6 = _interopRequireDefault(_Call5);

var _Video = __webpack_require__(379);

var _Video2 = _interopRequireDefault(_Video);

var _ConfAudioStatus_mute = __webpack_require__(380);

var _ConfAudioStatus_mute2 = _interopRequireDefault(_ConfAudioStatus_mute);

var _ConfAudioStatus_mute_two = __webpack_require__(381);

var _ConfAudioStatus_mute_two2 = _interopRequireDefault(_ConfAudioStatus_mute_two);

var _ConfAudioStatus_unmute = __webpack_require__(382);

var _ConfAudioStatus_unmute2 = _interopRequireDefault(_ConfAudioStatus_unmute);

var _ConfAudioStatus_unmute_two = __webpack_require__(383);

var _ConfAudioStatus_unmute_two2 = _interopRequireDefault(_ConfAudioStatus_unmute_two);

var _ConfAudioStatus_hangup = __webpack_require__(384);

var _ConfAudioStatus_hangup2 = _interopRequireDefault(_ConfAudioStatus_hangup);

var _ConfAudioStatus_calling = __webpack_require__(385);

var _ConfAudioStatus_calling2 = _interopRequireDefault(_ConfAudioStatus_calling);

var _ConfAudioStatus_inviting = __webpack_require__(386);

var _ConfAudioStatus_inviting2 = _interopRequireDefault(_ConfAudioStatus_inviting);

var _ConfAudioStatus_speaker = __webpack_require__(387);

var _ConfAudioStatus_speaker2 = _interopRequireDefault(_ConfAudioStatus_speaker);

var _ConfAudioStatus_speaking = __webpack_require__(388);

var _ConfAudioStatus_speaking2 = _interopRequireDefault(_ConfAudioStatus_speaking);

var _CallFullBox = __webpack_require__(389);

var _CallFullBox2 = _interopRequireDefault(_CallFullBox);

var _CallExitFullBox = __webpack_require__(390);

var _CallExitFullBox2 = _interopRequireDefault(_CallExitFullBox);

var _CallParticipantsSvg = __webpack_require__(391);

var _CallParticipantsSvg2 = _interopRequireDefault(_CallParticipantsSvg);

var _CallMuteSvg = __webpack_require__(392);

var _CallMuteSvg2 = _interopRequireDefault(_CallMuteSvg);

var _CallUnMuteSvg = __webpack_require__(393);

var _CallUnMuteSvg2 = _interopRequireDefault(_CallUnMuteSvg);

var _CallSpeakerSvg = __webpack_require__(394);

var _CallSpeakerSvg2 = _interopRequireDefault(_CallSpeakerSvg);

var _CallCloseSpeakerSvg = __webpack_require__(395);

var _CallCloseSpeakerSvg2 = _interopRequireDefault(_CallCloseSpeakerSvg);

var _CallCameraSvg = __webpack_require__(396);

var _CallCameraSvg2 = _interopRequireDefault(_CallCameraSvg);

var _CallCloseCameraSvg = __webpack_require__(397);

var _CallCloseCameraSvg2 = _interopRequireDefault(_CallCloseCameraSvg);

var _TalkRequestSvg = __webpack_require__(398);

var _TalkRequestSvg2 = _interopRequireDefault(_TalkRequestSvg);

var _TalkCancelSvg = __webpack_require__(399);

var _TalkCancelSvg2 = _interopRequireDefault(_TalkCancelSvg);

var _CallShareSvg = __webpack_require__(400);

var _CallShareSvg2 = _interopRequireDefault(_CallShareSvg);

var _CallAddSvg = __webpack_require__(401);

var _CallAddSvg2 = _interopRequireDefault(_CallAddSvg);

var _CallMoreSvg = __webpack_require__(402);

var _CallMoreSvg2 = _interopRequireDefault(_CallMoreSvg);

var _CallLeaveSvg = __webpack_require__(403);

var _CallLeaveSvg2 = _interopRequireDefault(_CallLeaveSvg);

var _CallHangUpSvg = __webpack_require__(404);

var _CallHangUpSvg2 = _interopRequireDefault(_CallHangUpSvg);

var _CallItemHangupSvg = __webpack_require__(405);

var _CallItemHangupSvg2 = _interopRequireDefault(_CallItemHangupSvg);

var _CallItemResumeSvg = __webpack_require__(406);

var _CallItemResumeSvg2 = _interopRequireDefault(_CallItemResumeSvg);

var _ConsultTransferDoneSvg = __webpack_require__(407);

var _ConsultTransferDoneSvg2 = _interopRequireDefault(_ConsultTransferDoneSvg);

var _CallMinSvg = __webpack_require__(408);

var _CallMinSvg2 = _interopRequireDefault(_CallMinSvg);

var _signal_ = __webpack_require__(409);

var _signal_2 = _interopRequireDefault(_signal_);

var _signal_3 = __webpack_require__(410);

var _signal_4 = _interopRequireDefault(_signal_3);

var _signal_5 = __webpack_require__(411);

var _signal_6 = _interopRequireDefault(_signal_5);

var _signal_7 = __webpack_require__(412);

var _signal_8 = _interopRequireDefault(_signal_7);

var _signal_full = __webpack_require__(413);

var _signal_full2 = _interopRequireDefault(_signal_full);

var _signal_none = __webpack_require__(414);

var _signal_none2 = _interopRequireDefault(_signal_none);

var _Key = __webpack_require__(415);

var _Key2 = _interopRequireDefault(_Key);

var _Fonts = __webpack_require__(416);

var _Fonts2 = _interopRequireDefault(_Fonts);

var _Emoji = __webpack_require__(417);

var _Emoji2 = _interopRequireDefault(_Emoji);

var _At = __webpack_require__(418);

var _At2 = _interopRequireDefault(_At);

var _Accessory = __webpack_require__(419);

var _Accessory2 = _interopRequireDefault(_Accessory);

var _ScreenShot = __webpack_require__(420);

var _ScreenShot2 = _interopRequireDefault(_ScreenShot);

var _Send = __webpack_require__(421);

var _Send2 = _interopRequireDefault(_Send);

var _Quote = __webpack_require__(422);

var _Quote2 = _interopRequireDefault(_Quote);

var _QuickReply = __webpack_require__(423);

var _QuickReply2 = _interopRequireDefault(_QuickReply);

var _AddReply = __webpack_require__(424);

var _AddReply2 = _interopRequireDefault(_AddReply);

var _Cancel = __webpack_require__(425);

var _Cancel2 = _interopRequireDefault(_Cancel);

var _SelfReply = __webpack_require__(426);

var _SelfReply2 = _interopRequireDefault(_SelfReply);

var _Update = __webpack_require__(427);

var _Update2 = _interopRequireDefault(_Update);

var _AddressBook = __webpack_require__(428);

var _AddressBook2 = _interopRequireDefault(_AddressBook);

var _AddressBook3 = __webpack_require__(429);

var _AddressBook4 = _interopRequireDefault(_AddressBook3);

var _Meeting = __webpack_require__(430);

var _Meeting2 = _interopRequireDefault(_Meeting);

var _Meeting3 = __webpack_require__(431);

var _Meeting4 = _interopRequireDefault(_Meeting3);

var _BlackMiniMize = __webpack_require__(432);

var _BlackMiniMize2 = _interopRequireDefault(_BlackMiniMize);

var _BlackClose = __webpack_require__(433);

var _BlackClose2 = _interopRequireDefault(_BlackClose);

var _Close3 = __webpack_require__(434);

var _Close4 = _interopRequireDefault(_Close3);

var _Close5 = __webpack_require__(435);

var _Close6 = _interopRequireDefault(_Close5);

var _Warning = __webpack_require__(436);

var _Warning2 = _interopRequireDefault(_Warning);

var _WhiteWarning = __webpack_require__(437);

var _WhiteWarning2 = _interopRequireDefault(_WhiteWarning);

var _CallHistory = __webpack_require__(438);

var _CallHistory2 = _interopRequireDefault(_CallHistory);

var _CallHistory3 = __webpack_require__(439);

var _CallHistory4 = _interopRequireDefault(_CallHistory3);

var _CallOut = __webpack_require__(440);

var _CallOut2 = _interopRequireDefault(_CallOut);

var _CallIn = __webpack_require__(441);

var _CallIn2 = _interopRequireDefault(_CallIn);

var _CallFailed = __webpack_require__(442);

var _CallFailed2 = _interopRequireDefault(_CallFailed);

var _VideoOut = __webpack_require__(443);

var _VideoOut2 = _interopRequireDefault(_VideoOut);

var _VideoIn = __webpack_require__(444);

var _VideoIn2 = _interopRequireDefault(_VideoIn);

var _CallFullWhite = __webpack_require__(445);

var _CallFullWhite2 = _interopRequireDefault(_CallFullWhite);

var _VideoFullWhite = __webpack_require__(446);

var _VideoFullWhite2 = _interopRequireDefault(_VideoFullWhite);

var _VideoFullGreen = __webpack_require__(447);

var _VideoFullGreen2 = _interopRequireDefault(_VideoFullGreen);

var _CallInputDelete = __webpack_require__(448);

var _CallInputDelete2 = _interopRequireDefault(_CallInputDelete);

var _Noconference = __webpack_require__(449);

var _Noconference2 = _interopRequireDefault(_Noconference);

var _BroadCast = __webpack_require__(450);

var _BroadCast2 = _interopRequireDefault(_BroadCast);

var _CheckButtonNoChecked = __webpack_require__(451);

var _CheckButtonNoChecked2 = _interopRequireDefault(_CheckButtonNoChecked);

var _CheckButtonChecked = __webpack_require__(452);

var _CheckButtonChecked2 = _interopRequireDefault(_CheckButtonChecked);

var _Play = __webpack_require__(453);

var _Play2 = _interopRequireDefault(_Play);

var _Pause = __webpack_require__(454);

var _Pause2 = _interopRequireDefault(_Pause);

var _HeadAudio = __webpack_require__(455);

var _HeadAudio2 = _interopRequireDefault(_HeadAudio);

var _NewsBg = __webpack_require__(456);

var _NewsBg2 = _interopRequireDefault(_NewsBg);

var _Mouse = __webpack_require__(457);

var _Mouse2 = _interopRequireDefault(_Mouse);

var _Offline = __webpack_require__(458);

var _Offline2 = _interopRequireDefault(_Offline);

var _Online = __webpack_require__(459);

var _Online2 = _interopRequireDefault(_Online);

var _Busy = __webpack_require__(460);

var _Busy2 = _interopRequireDefault(_Busy);

var _Leave = __webpack_require__(461);

var _Leave2 = _interopRequireDefault(_Leave);

var _MobileOnline = __webpack_require__(462);

var _MobileOnline2 = _interopRequireDefault(_MobileOnline);

var _safe = __webpack_require__(463);

var _safe2 = _interopRequireDefault(_safe);

var _like = __webpack_require__(464);

var _like2 = _interopRequireDefault(_like);

var _SpokesMan = __webpack_require__(465);

var _SpokesMan2 = _interopRequireDefault(_SpokesMan);

var _SpokesManTwo = __webpack_require__(466);

var _SpokesManTwo2 = _interopRequireDefault(_SpokesManTwo);

var _TerminalConnectedConfBg = __webpack_require__(467);

var _TerminalConnectedConfBg2 = _interopRequireDefault(_TerminalConnectedConfBg);

var _ConfLock = __webpack_require__(468);

var _ConfLock2 = _interopRequireDefault(_ConfLock);

var _Delete = __webpack_require__(469);

var _Delete2 = _interopRequireDefault(_Delete);

var _BuildMeeting = __webpack_require__(470);

var _BuildMeeting2 = _interopRequireDefault(_BuildMeeting);

var _JoinMeeting = __webpack_require__(471);

var _JoinMeeting2 = _interopRequireDefault(_JoinMeeting);

var _CorporateAddressBook = __webpack_require__(472);

var _CorporateAddressBook2 = _interopRequireDefault(_CorporateAddressBook);

var _CallVideo = __webpack_require__(473);

var _CallVideo2 = _interopRequireDefault(_CallVideo);

var _AtIm = __webpack_require__(474);

var _AtIm2 = _interopRequireDefault(_AtIm);

var _Word = __webpack_require__(475);

var _Word2 = _interopRequireDefault(_Word);

var _Data = __webpack_require__(476);

var _Data2 = _interopRequireDefault(_Data);

var _LinkageOpen = __webpack_require__(477);

var _LinkageOpen2 = _interopRequireDefault(_LinkageOpen);

var _LinkageClose = __webpack_require__(478);

var _LinkageClose2 = _interopRequireDefault(_LinkageClose);

var _Vmr = __webpack_require__(479);

var _Vmr2 = _interopRequireDefault(_Vmr);

var _CallTransefer = __webpack_require__(480);

var _CallTransefer2 = _interopRequireDefault(_CallTransefer);

var _KeyBoard = __webpack_require__(481);

var _KeyBoard2 = _interopRequireDefault(_KeyBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = {
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  TurnLeft: 'TurnLeft',
  TurnRight: 'TurnRight',
  ArrowUp: 'ArrowUp',
  ArrowRight: 'ArrowRight',
  Add: 'Add',
  AddBig: 'AddBig',
  DelMember: 'DelMember',
  Mute: 'Mute',
  Speaker: 'Speaker',
  Right: 'Right',
  More: 'More',
  Full: 'Full',
  Tab: 'Tab',
  MiniSize: 'MiniSize',
  BlackMiniMize: 'BlackMiniMize',
  BlackClose: 'BlackClose',
  Close: 'Close',
  Close2: 'Close2',
  Close3: 'Close3',
  MiniMize: 'MiniMize',
  Mouse: 'Mouse',
  User3: 'User3',
  PicInPicModeView: 'PicInPicModeView',
  DivideModeView: 'DivideModeView',
  BigSmallModeView: 'BigSmallModeView',
  Location: 'Location',
  Download: 'Download',
  Contral: 'Contral',
  Client: 'Client',
  Mark: 'Mark',
  Edit: 'Edit',
  User: 'User',
  Message: 'Message',
  Call: 'Call',
  User2: 'User2',
  Message2: 'Message2',
  Call2: 'Call2',
  SuccessIcon: 'SuccessIcon',
  Right2: 'Right2',
  Info: 'Info',
  CloseBtn: 'CloseBtn',
  Search: 'Search',
  Menu: 'Menu',
  Menu2: 'Menu2',
  Call3: 'Call3',
  Video: 'Video',
  ConfAudioStatus_mute: 'ConfAudioStatus_mute',
  ConfAudioStatus_mute_two: 'ConfAudioStatus_mute_two',
  ConfAudioStatus_unmute: 'ConfAudioStatus_unmute',
  ConfAudioStatus_unmute_two: 'ConfAudioStatus_unmute_two',
  ConfAudioStatus_hangup: 'ConfAudioStatus_hangup',
  ConfAudioStatus_calling: 'ConfAudioStatus_calling',
  ConfAudioStatus_inviting: "ConfAudioStatus_inviting",
  ConfAudioStatus_speaker: "ConfAudioStatus_speaker",
  ConfAudioStatus_speaking: "ConfAudioStatus_speaking",
  CallFullBox: 'CallFullBox',
  CallExitFullBox: 'CallExitFullBox',
  CallParticipantsSvg: 'CallParticipantsSvg',
  CallMuteSvg: 'CallMuteSvg',
  CallUnMuteSvg: 'CallUnMuteSvg',
  CallSpeakerSvg: 'CallSpeakerSvg',
  CallCloseSpeakerSvg: 'CallCloseSpeakerSvg',
  TalkRequestSvg: 'TalkRequestSvg',
  TalkCancelSvg: 'TalkCancelSvg',
  CallCameraSvg: 'CallCameraSvg',
  CallCloseCameraSvg: 'CallCloseCameraSvg',
  CallShareSvg: 'CallShareSvg',
  CallAddSvg: 'CallAddSvg',
  CallMoreSvg: 'CallMoreSvg',
  CallLeaveSvg: 'CallLeaveSvg',
  CallHangUpSvg: 'CallHangUpSvg',
  CallItemHangupSvg: 'CallItemHangupSvg',
  CallItemResumeSvg: 'CallItemResumeSvg',
  ConsultTransferDoneSvg: 'ConsultTransferDoneSvg',
  CallMinSvg: 'CallMinSvg',
  SignalOne: "SignalOne",
  SignalTwo: "SignalTwo",
  SignalThree: "SignalThree",
  SignalFour: "SignalFour",
  SignalFull: "SignalFull",
  SignalNone: "SignalNone",
  Key: 'Key',
  Fonts: 'Fonts',
  Emoji: 'Emoji',
  At: 'At',
  Accessory: 'Accessory',
  ScreenShot: 'ScreenShot',
  Send: 'Send',
  Quote: 'quote',
  QuickReply: 'QuickReply',
  AddReply: 'AddReply',
  Cancel: 'Cancel',
  SelfReply: 'SelfReply',
  Update: 'Update',
  AddressBook: 'AddressBook',
  AddressBook2: 'AddressBook2',
  Meeting: 'Meeting',
  Meeting2: 'Meeting2',
  Warning: 'Warning',
  WhiteWarning: 'WhiteWarning',
  CallHistory: 'CallHistory',
  CallHistory2: 'CallHistory2',
  CallOut: 'CallOut',
  CallIn: 'CallIn',
  CallFailed: 'CallFailed',
  VideoOut: 'VideoOut',
  VideoIn: 'VideoIn',
  CallFullWhite: 'CallFullWhite',
  VideoFullWhite: 'VideoFullWhite',
  VideoFullGreen: 'VideoFullGreen',
  CallInputDelete: 'CallInputDelete',
  Noconference: 'Noconference',
  BroadCast: 'BroadCast',
  CheckButtonChecked: 'CheckButtonChecked',
  CheckButtonNoChecked: 'CheckButtonNoChecked',
  Play: 'Play',
  Pause: 'Pause',
  HeadAudio: 'HeadAudio',
  NewsBg: 'NewsBg',
  Online: 'Online',
  Offline: 'Offline',
  Busy: 'Busy',
  Leave: 'Leave',
  MobileOnline: 'MobileOnline',
  Safe: 'Safe',
  Like: 'Like',
  SpokesMan: 'SpokesMan',
  SpokesManTwo: 'SpokesManTwo',
  TerminalConnectedConfBg: 'TerminalConnectedConfBg',
  ConfLock: 'ConfLock',
  Delete: 'Delete',
  BuildMeeting: 'BuildMeeting',
  JoinMeeting: 'JoinMeeting',
  CorporateAddressBook: 'CorporateAddressBook',
  CallVideo: 'CallVideo',
  AtIm: 'AtIm',
  Word: 'Word',
  Data: 'Data',
  LinkageClose: 'LinkageClose',
  LinkageOpen: 'LinkageOpen',
  Vmr: 'Vmr',
  CallTransefer: 'CallTransefer',
  KeyBoard: 'KeyBoard'
};
var SvgMap = exports.SvgMap = (_SvgMap = {}, (0, _defineProperty3.default)(_SvgMap, map.ArrowDown, _ArrowDown2.default), (0, _defineProperty3.default)(_SvgMap, map.ArrowUp, _ArrowUp2.default), (0, _defineProperty3.default)(_SvgMap, map.ArrowRight, _ArrowRight2.default), (0, _defineProperty3.default)(_SvgMap, map.Add, _Add2.default), (0, _defineProperty3.default)(_SvgMap, map.AddBig, _AddBig2.default), (0, _defineProperty3.default)(_SvgMap, map.DelMember, _DelMember2.default), (0, _defineProperty3.default)(_SvgMap, map.Mute, _Mute2.default), (0, _defineProperty3.default)(_SvgMap, map.Speaker, _Speaker2.default), (0, _defineProperty3.default)(_SvgMap, map.Mark, _Mark2.default), (0, _defineProperty3.default)(_SvgMap, map.User3, _User6.default), (0, _defineProperty3.default)(_SvgMap, map.PicInPicModeView, _PicInPicModeView2.default), (0, _defineProperty3.default)(_SvgMap, map.DivideModeView, _DivideModeView2.default), (0, _defineProperty3.default)(_SvgMap, map.BigSmallModeView, _BigSmallModeView2.default), (0, _defineProperty3.default)(_SvgMap, map.Location, _Location2.default), (0, _defineProperty3.default)(_SvgMap, map.Download, _Download2.default), (0, _defineProperty3.default)(_SvgMap, map.Contral, _Contral2.default), (0, _defineProperty3.default)(_SvgMap, map.Client, _Client2.default), (0, _defineProperty3.default)(_SvgMap, map.Edit, _Edit2.default), (0, _defineProperty3.default)(_SvgMap, map.ArrowLeft, _ArrowLeft2.default), (0, _defineProperty3.default)(_SvgMap, map.TurnLeft, _TurnLeft2.default), (0, _defineProperty3.default)(_SvgMap, map.TurnRight, _TurnRight2.default), (0, _defineProperty3.default)(_SvgMap, map.Right, _Right2.default), (0, _defineProperty3.default)(_SvgMap, map.More, _More2.default), (0, _defineProperty3.default)(_SvgMap, map.Full, _Full2.default), (0, _defineProperty3.default)(_SvgMap, map.Tab, _Tab2.default), (0, _defineProperty3.default)(_SvgMap, map.MiniSize, _MiniSize2.default), (0, _defineProperty3.default)(_SvgMap, map.Close, _Close2.default), (0, _defineProperty3.default)(_SvgMap, map.Close2, _Close4.default), (0, _defineProperty3.default)(_SvgMap, map.Mouse, _Mouse2.default), (0, _defineProperty3.default)(_SvgMap, map.Close3, _Close6.default), (0, _defineProperty3.default)(_SvgMap, map.BlackClose, _BlackClose2.default), (0, _defineProperty3.default)(_SvgMap, map.BlackMiniMize, _BlackMiniMize2.default), (0, _defineProperty3.default)(_SvgMap, map.MiniMize, _MiniMize2.default), (0, _defineProperty3.default)(_SvgMap, map.User, _User2.default), (0, _defineProperty3.default)(_SvgMap, map.Message, _Message2.default), (0, _defineProperty3.default)(_SvgMap, map.Call, _Call2.default), (0, _defineProperty3.default)(_SvgMap, map.User2, _User4.default), (0, _defineProperty3.default)(_SvgMap, map.Search, _Search2.default), (0, _defineProperty3.default)(_SvgMap, map.Message2, _Message4.default), (0, _defineProperty3.default)(_SvgMap, map.Call2, _Call4.default), (0, _defineProperty3.default)(_SvgMap, map.SuccessIcon, _SuccessIcon2.default), (0, _defineProperty3.default)(_SvgMap, map.Right2, _Right4.default), (0, _defineProperty3.default)(_SvgMap, map.Info, _Info2.default), (0, _defineProperty3.default)(_SvgMap, map.CloseBtn, _CloseBtn2.default), (0, _defineProperty3.default)(_SvgMap, map.Menu, _Menu2.default), (0, _defineProperty3.default)(_SvgMap, map.Menu2, _Menu4.default), (0, _defineProperty3.default)(_SvgMap, map.Call3, _Call6.default), (0, _defineProperty3.default)(_SvgMap, map.Video, _Video2.default), (0, _defineProperty3.default)(_SvgMap, map.ConfAudioStatus_mute, _ConfAudioStatus_mute2.default), (0, _defineProperty3.default)(_SvgMap, map.ConfAudioStatus_mute_two, _ConfAudioStatus_mute_two2.default), (0, _defineProperty3.default)(_SvgMap, map.ConfAudioStatus_unmute, _ConfAudioStatus_unmute2.default), (0, _defineProperty3.default)(_SvgMap, map.ConfAudioStatus_unmute_two, _ConfAudioStatus_unmute_two2.default), (0, _defineProperty3.default)(_SvgMap, map.ConfAudioStatus_hangup, _ConfAudioStatus_hangup2.default), (0, _defineProperty3.default)(_SvgMap, map.ConfAudioStatus_calling, _ConfAudioStatus_calling2.default), (0, _defineProperty3.default)(_SvgMap, map.ConfAudioStatus_inviting, _ConfAudioStatus_inviting2.default), (0, _defineProperty3.default)(_SvgMap, map.ConfAudioStatus_speaker, _ConfAudioStatus_speaker2.default), (0, _defineProperty3.default)(_SvgMap, map.ConfAudioStatus_speaking, _ConfAudioStatus_speaking2.default), (0, _defineProperty3.default)(_SvgMap, map.CallFullBox, _CallFullBox2.default), (0, _defineProperty3.default)(_SvgMap, map.CallExitFullBox, _CallExitFullBox2.default), (0, _defineProperty3.default)(_SvgMap, map.CallParticipantsSvg, _CallParticipantsSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallMuteSvg, _CallMuteSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallUnMuteSvg, _CallUnMuteSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallSpeakerSvg, _CallSpeakerSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallCloseSpeakerSvg, _CallCloseSpeakerSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.TalkRequestSvg, _TalkRequestSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.TalkCancelSvg, _TalkCancelSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallCameraSvg, _CallCameraSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallCloseCameraSvg, _CallCloseCameraSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallShareSvg, _CallShareSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallAddSvg, _CallAddSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallMoreSvg, _CallMoreSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.SignalOne, _signal_2.default), (0, _defineProperty3.default)(_SvgMap, map.SignalTwo, _signal_4.default), (0, _defineProperty3.default)(_SvgMap, map.SignalThree, _signal_6.default), (0, _defineProperty3.default)(_SvgMap, map.SignalFour, _signal_8.default), (0, _defineProperty3.default)(_SvgMap, map.SignalFull, _signal_full2.default), (0, _defineProperty3.default)(_SvgMap, map.SignalNone, _signal_none2.default), (0, _defineProperty3.default)(_SvgMap, map.CallLeaveSvg, _CallLeaveSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallHangUpSvg, _CallHangUpSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallItemHangupSvg, _CallItemHangupSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallItemResumeSvg, _CallItemResumeSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.ConsultTransferDoneSvg, _ConsultTransferDoneSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.CallMinSvg, _CallMinSvg2.default), (0, _defineProperty3.default)(_SvgMap, map.Key, _Key2.default), (0, _defineProperty3.default)(_SvgMap, map.Fonts, _Fonts2.default), (0, _defineProperty3.default)(_SvgMap, map.Emoji, _Emoji2.default), (0, _defineProperty3.default)(_SvgMap, map.QuickReply, _QuickReply2.default), (0, _defineProperty3.default)(_SvgMap, map.AddReply, _AddReply2.default), (0, _defineProperty3.default)(_SvgMap, map.Cancel, _Cancel2.default), (0, _defineProperty3.default)(_SvgMap, map.SelfReply, _SelfReply2.default), (0, _defineProperty3.default)(_SvgMap, map.At, _At2.default), (0, _defineProperty3.default)(_SvgMap, map.Accessory, _Accessory2.default), (0, _defineProperty3.default)(_SvgMap, map.ScreenShot, _ScreenShot2.default), (0, _defineProperty3.default)(_SvgMap, map.Send, _Send2.default), (0, _defineProperty3.default)(_SvgMap, map.Quote, _Quote2.default), (0, _defineProperty3.default)(_SvgMap, map.Update, _Update2.default), (0, _defineProperty3.default)(_SvgMap, map.AddressBook, _AddressBook2.default), (0, _defineProperty3.default)(_SvgMap, map.AddressBook2, _AddressBook4.default), (0, _defineProperty3.default)(_SvgMap, map.Meeting, _Meeting2.default), (0, _defineProperty3.default)(_SvgMap, map.Meeting2, _Meeting4.default), (0, _defineProperty3.default)(_SvgMap, map.Warning, _Warning2.default), (0, _defineProperty3.default)(_SvgMap, map.WhiteWarning, _WhiteWarning2.default), (0, _defineProperty3.default)(_SvgMap, map.CallHistory, _CallHistory2.default), (0, _defineProperty3.default)(_SvgMap, map.CallHistory2, _CallHistory4.default), (0, _defineProperty3.default)(_SvgMap, map.CallOut, _CallOut2.default), (0, _defineProperty3.default)(_SvgMap, map.CallIn, _CallIn2.default), (0, _defineProperty3.default)(_SvgMap, map.CallFailed, _CallFailed2.default), (0, _defineProperty3.default)(_SvgMap, map.VideoOut, _VideoOut2.default), (0, _defineProperty3.default)(_SvgMap, map.VideoIn, _VideoIn2.default), (0, _defineProperty3.default)(_SvgMap, map.CallFullWhite, _CallFullWhite2.default), (0, _defineProperty3.default)(_SvgMap, map.VideoFullWhite, _VideoFullWhite2.default), (0, _defineProperty3.default)(_SvgMap, map.VideoFullGreen, _VideoFullGreen2.default), (0, _defineProperty3.default)(_SvgMap, map.CallInputDelete, _CallInputDelete2.default), (0, _defineProperty3.default)(_SvgMap, map.Noconference, _Noconference2.default), (0, _defineProperty3.default)(_SvgMap, map.BroadCast, _BroadCast2.default), (0, _defineProperty3.default)(_SvgMap, map.CheckButtonChecked, _CheckButtonChecked2.default), (0, _defineProperty3.default)(_SvgMap, map.CheckButtonNoChecked, _CheckButtonNoChecked2.default), (0, _defineProperty3.default)(_SvgMap, map.Play, _Play2.default), (0, _defineProperty3.default)(_SvgMap, map.Pause, _Pause2.default), (0, _defineProperty3.default)(_SvgMap, map.HeadAudio, _HeadAudio2.default), (0, _defineProperty3.default)(_SvgMap, map.NewsBg, _NewsBg2.default), (0, _defineProperty3.default)(_SvgMap, map.Offline, _Offline2.default), (0, _defineProperty3.default)(_SvgMap, map.Online, _Online2.default), (0, _defineProperty3.default)(_SvgMap, map.Busy, _Busy2.default), (0, _defineProperty3.default)(_SvgMap, map.Leave, _Leave2.default), (0, _defineProperty3.default)(_SvgMap, map.MobileOnline, _MobileOnline2.default), (0, _defineProperty3.default)(_SvgMap, map.Safe, _safe2.default), (0, _defineProperty3.default)(_SvgMap, map.Like, _like2.default), (0, _defineProperty3.default)(_SvgMap, map.SpokesMan, _SpokesMan2.default), (0, _defineProperty3.default)(_SvgMap, map.SpokesManTwo, _SpokesManTwo2.default), (0, _defineProperty3.default)(_SvgMap, map.TerminalConnectedConfBg, _TerminalConnectedConfBg2.default), (0, _defineProperty3.default)(_SvgMap, map.ConfLock, _ConfLock2.default), (0, _defineProperty3.default)(_SvgMap, map.Delete, _Delete2.default), (0, _defineProperty3.default)(_SvgMap, map.BuildMeeting, _BuildMeeting2.default), (0, _defineProperty3.default)(_SvgMap, map.JoinMeeting, _JoinMeeting2.default), (0, _defineProperty3.default)(_SvgMap, map.CorporateAddressBook, _CorporateAddressBook2.default), (0, _defineProperty3.default)(_SvgMap, map.CallVideo, _CallVideo2.default), (0, _defineProperty3.default)(_SvgMap, map.AtIm, _AtIm2.default), (0, _defineProperty3.default)(_SvgMap, map.Word, _Word2.default), (0, _defineProperty3.default)(_SvgMap, map.Data, _Data2.default), (0, _defineProperty3.default)(_SvgMap, map.LinkageClose, _LinkageClose2.default), (0, _defineProperty3.default)(_SvgMap, map.LinkageOpen, _LinkageOpen2.default), (0, _defineProperty3.default)(_SvgMap, map.Vmr, _Vmr2.default), (0, _defineProperty3.default)(_SvgMap, map.CallTransefer, _CallTransefer2.default), (0, _defineProperty3.default)(_SvgMap, map.KeyBoard, _KeyBoard2.default), _SvgMap);
exports.default = map;

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowDown = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ArrowDown, _Component);

  function ArrowDown() {
    (0, _classCallCheck3.default)(this, ArrowDown);
    return (0, _possibleConstructorReturn3.default)(this, (ArrowDown.__proto__ || (0, _getPrototypeOf2.default)(ArrowDown)).apply(this, arguments));
  }

  (0, _createClass3.default)(ArrowDown, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "arrow-down";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 16 16", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M3.4,5.1L3,5.6l4.6,5.3c0.2,0.2,0.5,0.2,0.7,0L13,5.6l-0.4-0.5L8,10.2L3.4,5.1z" })
      );
    }
  }]);
  return ArrowDown;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = ArrowDown;

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowLeft = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ArrowLeft, _Component);

  function ArrowLeft() {
    (0, _classCallCheck3.default)(this, ArrowLeft);
    return (0, _possibleConstructorReturn3.default)(this, (ArrowLeft.__proto__ || (0, _getPrototypeOf2.default)(ArrowLeft)).apply(this, arguments));
  }

  (0, _createClass3.default)(ArrowLeft, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "arrow-left disable" : "arrow-left" },
        _react2.default.createElement("path", { d: "M26.7,36l21.9-21.9L46.5,12L24,34.4c-0.9,0.9-0.9,2.3,0,3.2L46.5,60l2.1-2.1L26.7,36z" })
      );
    }
  }]);
  return ArrowLeft;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = ArrowLeft;

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TurnRight = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TurnRight, _Component);

  function TurnRight() {
    (0, _classCallCheck3.default)(this, TurnRight);
    return (0, _possibleConstructorReturn3.default)(this, (TurnRight.__proto__ || (0, _getPrototypeOf2.default)(TurnRight)).apply(this, arguments));
  }

  (0, _createClass3.default)(TurnRight, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 24 24", className: disable ? "turn-right disable" : "turn-right" },
        _react2.default.createElement("path", { d: "M18.2,11.4c0-3.6-3-6.6-6.7-6.6c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7c2.5,0,4.8-1.4,5.9-3.6l0.7,0.4 c-1.3,2.5-3.8,4.1-6.7,4.1C7.4,19,4,15.6,4,11.5S7.4,4,11.5,4c4.1,0,7.5,3.4,7.5,7.5c0,0,0,0.1,0,0.1l1.4-1.4l0.6,0.6l-2.3,2.3 l-2.3-2.3l0.6-0.6L18.2,11.4z" })
      );
    }
  }]);
  return TurnRight;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = TurnRight;

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TurnLeft = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TurnLeft, _Component);

  function TurnLeft() {
    (0, _classCallCheck3.default)(this, TurnLeft);
    return (0, _possibleConstructorReturn3.default)(this, (TurnLeft.__proto__ || (0, _getPrototypeOf2.default)(TurnLeft)).apply(this, arguments));
  }

  (0, _createClass3.default)(TurnLeft, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 24 24", className: disable ? "turn-left disable" : "turn-left" },
        _react2.default.createElement("path", { d: "M5.8,11.4c0-3.6,3-6.6,6.7-6.6c3.7,0,6.7,3,6.7,6.7s-3,6.7-6.7,6.7c-2.5,0-4.8-1.4-5.9-3.6l-0.7,0.4 c1.3,2.5,3.8,4.1,6.7,4.1c4.1,0,7.5-3.4,7.5-7.5C20,7.4,16.6,4,12.5,4S5,7.4,5,11.5c0,0,0,0.1,0,0.1l-1.4-1.4L3,10.8l2.3,2.3 l2.3-2.3L7,10.2L5.8,11.4z" })
      );
    }
  }]);
  return TurnLeft;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = TurnLeft;

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowUp = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ArrowUp, _Component);

  function ArrowUp() {
    (0, _classCallCheck3.default)(this, ArrowUp);
    return (0, _possibleConstructorReturn3.default)(this, (ArrowUp.__proto__ || (0, _getPrototypeOf2.default)(ArrowUp)).apply(this, arguments));
  }

  (0, _createClass3.default)(ArrowUp, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 16 16", className: disable ? "arrow-up disable" : "arrow-up" },
        _react2.default.createElement("path", { d: "M8,5.8l4.6,5.2l0.4-0.5L8.3,5.2c-0.2-0.2-0.5-0.2-0.7,0L3,10.5L3.4,11L8,5.8z" })
      );
    }
  }]);
  return ArrowUp;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = ArrowUp;

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowRight = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ArrowRight, _Component);

  function ArrowRight() {
    (0, _classCallCheck3.default)(this, ArrowRight);
    return (0, _possibleConstructorReturn3.default)(this, (ArrowRight.__proto__ || (0, _getPrototypeOf2.default)(ArrowRight)).apply(this, arguments));
  }

  (0, _createClass3.default)(ArrowRight, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "arrow-right disable" : "arrow-right" },
        _react2.default.createElement("path", { d: "M45.3,36L23.4,14.1l2.1-2.1L48,34.4c0.9,0.9,0.9,2.3,0,3.2L25.5,60l-2.1-2.1L45.3,36z" })
      );
    }
  }]);
  return ArrowRight;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = ArrowRight;

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Add = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Add, _Component);

  function Add() {
    (0, _classCallCheck3.default)(this, Add);
    return (0, _possibleConstructorReturn3.default)(this, (Add.__proto__ || (0, _getPrototypeOf2.default)(Add)).apply(this, arguments));
  }

  (0, _createClass3.default)(Add, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "add";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("polygon", { points: "16,15 26,15 26,16 16,16 16,26 15,26 15,16 5,16 5,15 15,15 15,5 16,5 " })
      );
    }
  }]);
  return Add;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool,
  className: _propTypes2.default.string
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = Add;

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Add = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Add, _Component);

  function Add() {
    (0, _classCallCheck3.default)(this, Add);
    return (0, _possibleConstructorReturn3.default)(this, (Add.__proto__ || (0, _getPrototypeOf2.default)(Add)).apply(this, arguments));
  }

  (0, _createClass3.default)(Add, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "add";
      return _react2.default.createElement(
        "svg",
        { version: "1.1", xmlns: "http://www.w3.org/2000/svg", className: disable ? newClass + " disable" : newClass, x: "0px", y: "0px",
          viewBox: "0 0 16 16" },
        _react2.default.createElement("polygon", { points: "9,7 14,7 14,9 9,9 9,14 7,14 7,9 2,9 2,7 7,7 7,2 9,2 " })
      );
    }
  }]);
  return Add;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool,
  className: _propTypes2.default.string
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = Add;

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Close = function (_Component) {
  (0, _inherits3.default)(Close, _Component);

  function Close() {
    (0, _classCallCheck3.default)(this, Close);
    return (0, _possibleConstructorReturn3.default)(this, (Close.__proto__ || (0, _getPrototypeOf2.default)(Close)).apply(this, arguments));
  }

  (0, _createClass3.default)(Close, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 32 32" },
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement("circle", { id: "a", cx: "16", cy: "16", r: "12" })
        ),
        _react2.default.createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("use", { fill: "#FF465B", xlinkHref: "#a" }),
          _react2.default.createElement("circle", { stroke: "#FFF", strokeWidth: "4", cx: "16", cy: "16", r: "14" }),
          _react2.default.createElement("rect", { fill: "#FFF", x: "8", y: "14", width: "16", height: "4", rx: "2" })
        )
      );
    }
  }]);
  return Close;
}(_react.Component);

exports.default = Close;

Close.propTypes = {
  disable: _propTypes2.default.bool
};
Close.defaultProps = {
  disable: false
};

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mute = function (_Component) {
  (0, _inherits3.default)(Mute, _Component);

  function Mute() {
    (0, _classCallCheck3.default)(this, Mute);
    return (0, _possibleConstructorReturn3.default)(this, (Mute.__proto__ || (0, _getPrototypeOf2.default)(Mute)).apply(this, arguments));
  }

  (0, _createClass3.default)(Mute, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "mute";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M47.8 18v16.9c0 6.5-5.3 11.8-11.8 11.8s-11.8-5.3-11.8-11.8V18c0-6.5 5.3-11.8 11.8-11.8S47.8 11.5 47.8 18zM37.5 54.9v10.8h-3V54.9c-10.4-.8-18.7-9.5-18.7-20.1h3C18.8 44.3 26.5 52 36 52s17.2-7.7 17.2-17.2h3c0 10.7-8.3 19.4-18.7 20.1zM27.2 18v16.9c0 4.8 3.9 8.8 8.8 8.8s8.8-3.9 8.8-8.8V18c0-4.8-3.9-8.8-8.8-8.8s-8.8 4-8.8 8.8z" })
      );
    }
  }]);
  return Mute;
}(_react.Component);

exports.default = Mute;

Mute.propTypes = {
  disable: _propTypes2.default.bool
};
Mute.defaultProps = {
  disable: false
};

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Speaker = function (_Component) {
  (0, _inherits3.default)(Speaker, _Component);

  function Speaker() {
    (0, _classCallCheck3.default)(this, Speaker);
    return (0, _possibleConstructorReturn3.default)(this, (Speaker.__proto__ || (0, _getPrototypeOf2.default)(Speaker)).apply(this, arguments));
  }

  (0, _createClass3.default)(Speaker, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          className = _props.className;

      var newClass = className ? className : "speaker";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disabled ? newClass + " disabled" : newClass },
        _react2.default.createElement("path", { d: "M51.1,60.4L49.3,58c6.7-5,10.7-12.8,10.7-21.3c0-9.3-4.8-17.8-12.6-22.6l1.6-2.5c8.6,5.4,14,14.8,14,25.1 C62.9,46.2,58.5,54.9,51.1,60.4z M45.1,51.6l-1.7-2.5c4.2-2.9,6.7-7.6,6.7-12.7c0-5.7-3.1-10.8-8-13.5l1.5-2.6 c5.8,3.2,9.5,9.3,9.5,16.1C53.1,42.6,50.1,48.2,45.1,51.6z M35.1,16.6L20.4,29.4h-8.3v13.3h8.8l14.2,12.6V16.6z M19.3,26.4l16.2-14 c0.7-0.6,1.7-0.5,2.2,0.2c0.3,0.5,0.3,0.5,0.4,1v45c0,0.9-0.7,1.6-1.6,1.6c-0.6-0.1-0.6-0.1-1-0.4l-15.7-14h-8.8 c-1,0-1.9-0.8-1.9-1.9V28.2c0-1,0.8-1.9,1.9-1.9H19.3z" })
      );
    }
  }]);
  return Speaker;
}(_react.Component);

exports.default = Speaker;

Speaker.propTypes = {
  disable: _propTypes2.default.bool
};
Speaker.defaultProps = {
  disable: false
};

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Right = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Right, _Component);

  function Right() {
    (0, _classCallCheck3.default)(this, Right);
    return (0, _possibleConstructorReturn3.default)(this, (Right.__proto__ || (0, _getPrototypeOf2.default)(Right)).apply(this, arguments));
  }

  (0, _createClass3.default)(Right, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "right disable" : "right" },
        _react2.default.createElement("path", { d: "M27.7 52.4L8.2 33l-2.1 2.1 20 20c.9.9 2.3.9 3.2 0L66 18.4l-2.1-2.1-36.2 36.1z" })
      );
    }
  }]);
  return Right;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = Right;

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var More = function (_Component) {
  (0, _inherits3.default)(More, _Component);

  function More() {
    (0, _classCallCheck3.default)(this, More);
    return (0, _possibleConstructorReturn3.default)(this, (More.__proto__ || (0, _getPrototypeOf2.default)(More)).apply(this, arguments));
  }

  (0, _createClass3.default)(More, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "mute";
      return _react2.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M36 60c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c2.1 0 3.8 1.7 3.8 3.8S38.1 60 36 60zm3.8-24c0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c2.1.1 3.8 1.7 3.8 3.8zm0-20.2c0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8S33.9 12 36 12c2.1 0 3.8 1.7 3.8 3.8z" })
      );
    }
  }]);
  return More;
}(_react.Component);

exports.default = More;

More.propTypes = {
  disable: _propTypes2.default.bool
};
More.defaultProps = {
  disable: false
};

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Full = function (_Component) {
  (0, _inherits3.default)(Full, _Component);

  function Full() {
    (0, _classCallCheck3.default)(this, Full);
    return (0, _possibleConstructorReturn3.default)(this, (Full.__proto__ || (0, _getPrototypeOf2.default)(Full)).apply(this, arguments));
  }

  (0, _createClass3.default)(Full, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "full disable" : "full" },
        _react2.default.createElement("path", { d: "M9,9v54h54V9H9z M60,60H12V12h48V60z" })
      );
    }
  }]);
  return Full;
}(_react.Component);

exports.default = Full;

Full.propTypes = {
  disable: _propTypes2.default.bool
};
Full.defaultProps = {
  disable: false
};

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab() {
    (0, _classCallCheck3.default)(this, Tab);
    return (0, _possibleConstructorReturn3.default)(this, (Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tab, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-full-box disable" : "call-full-box" },
        _react2.default.createElement("path", { d: "M60,60V27H30v33H60z M27,60V27H12v33H27z M60,24V12H12v12H60z M12,9h48c1.7,0,3,1.3,3,3v48c0,1.7-1.3,3-3,3H12 c-1.7,0-3-1.3-3-3V12C9,10.3,10.3,9,12,9z" })
      );
    }
  }]);
  return Tab;
}(_react.Component);

exports.default = Tab;

Tab.propTypes = {
  disable: _propTypes2.default.bool
};
Tab.defaultProps = {
  disable: false
};

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MiniSize = function (_Component) {
  (0, _inherits3.default)(MiniSize, _Component);

  function MiniSize() {
    (0, _classCallCheck3.default)(this, MiniSize);
    return (0, _possibleConstructorReturn3.default)(this, (MiniSize.__proto__ || (0, _getPrototypeOf2.default)(MiniSize)).apply(this, arguments));
  }

  (0, _createClass3.default)(MiniSize, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "full disable" : "full" },
        _react2.default.createElement("path", { d: "M21,31.5h-9v24h33v-9h3V57c0,0.4-0.2,0.8-0.4,1.1s-0.6,0.4-1.1,0.4h-36c-0.4,0-0.8-0.2-1.1-0.4\tC9.2,57.8,9,57.4,9,57V30c0-0.4,0.2-0.8,0.4-1.1c0.3-0.3,0.6-0.4,1.1-0.4H21V31.5z M40.5,31.1l-6,6L32.4,35l6.4-6.4h-4.3v-3H42\tc0.4,0,0.8,0.2,1.1,0.4s0.4,0.6,0.4,1.1v7.5h-3V31.1z M27,40.5h33v-24H27V40.5z M24.4,43.1C24.2,42.8,24,42.4,24,42V15\tc0-0.4,0.2-0.8,0.4-1.1s0.6-0.4,1.1-0.4h36c0.4,0,0.8,0.2,1.1,0.4S63,14.6,63,15v27c0,0.4-0.2,0.8-0.4,1.1s-0.6,0.4-1.1,0.4h-36\tC25.1,43.5,24.7,43.3,24.4,43.1z" })
      );
    }
  }]);
  return MiniSize;
}(_react.Component);

exports.default = MiniSize;

MiniSize.propTypes = {
  disable: _propTypes2.default.bool
};
MiniSize.defaultProps = {
  disable: false
};

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Close = function (_Component) {
  (0, _inherits3.default)(Close, _Component);

  function Close() {
    (0, _classCallCheck3.default)(this, Close);
    return (0, _possibleConstructorReturn3.default)(this, (Close.__proto__ || (0, _getPrototypeOf2.default)(Close)).apply(this, arguments));
  }

  (0, _createClass3.default)(Close, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "close";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("polygon", { points: "59.3,15.7 56.3,12.7 36,33 15.7,12.7 12.7,15.7 33,36 12.7,56.3 15.7,59.3 36,39 56.3,59.3 59.3,56.3 39,36 " })
      );
    }
  }]);
  return Close;
}(_react.Component);

exports.default = Close;

Close.propTypes = {
  disable: _propTypes2.default.bool
};
Close.defaultProps = {
  disable: false
};

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MiniMize = function (_Component) {
  (0, _inherits3.default)(MiniMize, _Component);

  function MiniMize() {
    (0, _classCallCheck3.default)(this, MiniMize);
    return (0, _possibleConstructorReturn3.default)(this, (MiniMize.__proto__ || (0, _getPrototypeOf2.default)(MiniMize)).apply(this, arguments));
  }

  (0, _createClass3.default)(MiniMize, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "minimize disable" : "minimize" },
        _react2.default.createElement("rect", { x: "18", y: "31.5", width: "36", height: "9" })
      );
    }
  }]);
  return MiniMize;
}(_react.Component);

exports.default = MiniMize;

MiniMize.propTypes = {
  disable: _propTypes2.default.bool
};
MiniMize.defaultProps = {
  disable: false
};

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function (_Component) {
  (0, _inherits3.default)(User, _Component);

  function User() {
    (0, _classCallCheck3.default)(this, User);
    return (0, _possibleConstructorReturn3.default)(this, (User.__proto__ || (0, _getPrototypeOf2.default)(User)).apply(this, arguments));
  }

  (0, _createClass3.default)(User, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "Navigation disable" : "Navigation" },
        _react2.default.createElement("path", { d: "M25.5,19.1V28l-0.7,0.4c-0.3,0.2-0.4,1.2-0.1,2.4c0.1,0.5,0.2,0.7,0.3,1.5c0,0.3,0.1,0.4,0.1,0.5c0.1,0.3,0.2,0.5,0.7,1 c0.1,0.1,0.1,0.1,0.2,0.2c0.3,0.2,0.4,0.3,1.2,0.6c0.7,0.3,1.2,0.6,1.6,1.1c0.4,0.5,1.2,1.9,1.4,2.5c0.2,0.5,0.4,1.1,0.6,1.7\tc0.2,1,0.3,2.4,0.3,4.2l0,0.3l-0.6,1.2c-1,2-4.2,4.1-8.1,4.4c-2.4,0.2-4.7,1.5-6.9,3.8c-1.3,1.5-2.1,3.5-2.3,6 c6.9,0.1,22.2,0.1,45.8,0c-0.2-1.6-0.5-2.7-0.9-3.5c-1.6-2.8-3.5-4.7-5.8-5.5c-0.8-0.3-1.5-0.5-2.2-0.7c-0.3-0.1-0.6-0.1-0.9-0.2\tc-0.1,0-0.7-0.1-0.9-0.2c-0.6-0.1-1-0.2-1.3-0.3c-0.1,0-0.1,0-0.2-0.1c-1.5-0.5-2.4-1.1-3.4-2c-0.3-0.3-0.5-0.5-1.1-1.1\tc-1.1-1.1-1.5-2-1.9-3.7c-0.2-1.2-0.2-2.4,0.2-3.5c0.1-0.2,0.1-0.4,0.2-0.5c0.1-0.2,0.1-0.3,0.2-0.4c0.2-0.5,0.5-0.8,1.6-2 c0.1-0.1,0.9-1.1,1.8-2.4c0.4-0.6,0.9-0.8,1.5-0.8c0.2-0.4,0.3-0.8,0.4-1.6c0,0,0.1-1,0.2-1.3c0.2-1,0-1.8-0.5-2.5l-0.3-0.4v-8.7\tl-2.6-2.9l-0.3-0.6c-0.4-1.3-0.7-2.3-0.9-3.1C33.1,12.2,27.8,14.6,25.5,19.1z M44.6,38.3c-0.9,1-1.1,1.2-1.2,1.4 c-0.1,0.2-0.1,0.2-0.2,0.5c-0.2,0.6-0.2,1.2-0.1,1.9c0.2,1.2,0.4,1.6,1.1,2.2c0.5,0.5,0.7,0.7,0.9,0.9c0.7,0.6,1.2,0.9,2.4,1.3\tc0.1,0,0.1,0,0.2,0.1c0.3,0.1,0.6,0.2,1,0.3c0.2,0,0.8,0.2,0.9,0.2c0.4,0.1,0.7,0.2,1,0.2c0.9,0.2,1.7,0.4,2.5,0.8 c3,1.1,5.5,3.5,7.4,6.9c0.8,1.5,1.3,3.6,1.4,6.4l0.1,1.6l-1.6,0c-26.5,0.1-42.9,0.1-49,0l-1.5,0v-1.5c0-4,1-7.2,3.2-9.6 c2.8-2.8,5.7-4.4,8.9-4.7c2.9-0.3,5.2-1.8,5.7-2.8c0.1-0.3,0.2-0.5,0.3-0.6c0-1.4-0.1-2.5-0.2-3.3c-0.1-0.4-0.2-0.8-0.4-1.1 c-0.2-0.4-0.9-1.6-1.1-2c0,0,0,0-0.3-0.1c-1.1-0.5-1.3-0.5-1.9-1c-0.2-0.1-0.3-0.3-0.5-0.4c-0.8-0.8-1.2-1.4-1.5-2.2\tc-0.1-0.3-0.1-0.5-0.2-1c-0.1-0.6-0.1-0.8-0.2-1.1c-0.5-1.9-0.3-4,0.7-5.2v-7.7l0.1-0.6C25.6,12,32.4,9,42.9,9h1.2l0.2,1.2 c0.1,0.5,0.4,1.8,1,3.7l3.2,3.5v8.9c0.7,1.2,1,2.7,0.7,4.3c0,0.3-0.2,1.2-0.2,1.3c-0.2,1.2-0.4,1.8-0.7,2.6 c-0.1,0.2-0.3,0.5-0.5,0.7c-0.3,0.4-0.7,0.6-1.1,0.7c-0.2,0-0.3,0.1-0.5,0.1C45.4,37.3,44.8,38.1,44.6,38.3z" })
      );
    }
  }]);
  return User;
}(_react.Component);

exports.default = User;

User.propTypes = {
  disable: _propTypes2.default.bool
};
User.defaultProps = {
  disable: false
};

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function (_Component) {
  (0, _inherits3.default)(Message, _Component);

  function Message() {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).apply(this, arguments));
  }

  (0, _createClass3.default)(Message, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "Navigation disable" : "Navigation" },
        _react2.default.createElement("path", { id: "SVGID_7_", d: "M20.5,15c0.8,0,1.5-0.7,1.5-1.5S21.3,12,20.5,12S19,12.7,19,13.5S19.7,15,20.5,15z M15.5,15 c0.8,0,1.5-0.7,1.5-1.5S16.3,12,15.5,12c-0.8,0-1.5,0.7-1.5,1.5S14.7,15,15.5,15z M10.5,15c0.8,0,1.5-0.7,1.5-1.5S11.3,12,10.5,12 S9,12.7,9,13.5S9.7,15,10.5,15z M14.8,21L10,25v-4H7c-1.1,0-2-0.9-2-2V7c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2 H14.8z" })
      );
    }
  }]);
  return Message;
}(_react.Component);

exports.default = Message;

Message.propTypes = {
  disable: _propTypes2.default.bool
};
Message.defaultProps = {
  disable: false
};

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Call = function (_Component) {
  (0, _inherits3.default)(Call, _Component);

  function Call() {
    (0, _classCallCheck3.default)(this, Call);
    return (0, _possibleConstructorReturn3.default)(this, (Call.__proto__ || (0, _getPrototypeOf2.default)(Call)).apply(this, arguments));
  }

  (0, _createClass3.default)(Call, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation-recent";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M19,23.9c-0.4,0-0.8-0.1-1.1-0.1c-1-0.2-4.9-1.9-7.5-4.8c-1.5-1.8-3.5-4.4-4.1-7.1c0,0-0.3-1.4,0.1-2.3 c0.2-0.4,0.6-0.9,1.1-1.4C7.6,8,8.8,7,8.9,6.9c0.8-0.7,1.4-1,2.2-0.8c1,0.2,1.5,0.9,2.1,1.9c0.2,0.4,1.2,2.3,1.3,2.5 c0.6,1.4-0.3,2.3-0.5,2.5c-0.1,0.1-0.2,0.2-0.3,0.3c0.3,0.4,0.9,1.2,1.4,1.7c0.6,0.6,1.4,1.2,1.8,1.4l0.4-0.3 c0.7-0.6,1.4-1.1,2.5-0.6c0.4,0.2,3.1,2.1,3.4,2.4c0.2,0.2,0.5,0.4,0.6,0.8c0.4,0.9-0.6,2.3-0.7,2.5c-0.5,0.7-2,2.3-3.1,2.7 C19.7,23.9,19.4,23.9,19,23.9z M10.7,7.1c-0.3,0-0.6,0.1-1.2,0.6C9.5,7.8,8.3,8.8,8.2,8.9c-0.4,0.4-0.7,0.8-0.9,1.1 c-0.2,0.4-0.1,1.3,0,1.6c0.6,2.4,2.5,5,3.9,6.6c2.3,2.6,5.8,4.3,6.9,4.5c0.6,0.1,1.2,0.1,1.6,0c0.8-0.3,2.2-1.6,2.6-2.3 c0.4-0.7,0.7-1.4,0.6-1.5c-0.1-0.2-0.2-0.3-0.4-0.4c-0.4-0.3-2.9-2.1-3.2-2.2c-0.5-0.2-0.8-0.2-1.5,0.4l0,0 c-0.1,0.1-0.7,0.6-0.7,0.6l-0.3,0.3l-0.3-0.2c-0.1,0-1.3-0.8-2.2-1.8c-0.8-0.8-1.7-2.1-1.7-2.2l-0.2-0.3l0.3-0.3 c0,0,0.4-0.4,0.5-0.5c0.3-0.3,0.6-0.7,0.3-1.5c-0.1-0.2-0.7-1.4-1.3-2.4c-0.6-1.1-0.9-1.3-1.3-1.4C10.9,7.1,10.8,7.1,10.7,7.1z" })
      );
    }
  }]);
  return Call;
}(_react.Component);

exports.default = Call;

Call.propTypes = {
  disable: _propTypes2.default.bool
};
Call.defaultProps = {
  disable: false
};

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User2 = function (_Component) {
  (0, _inherits3.default)(User2, _Component);

  function User2() {
    (0, _classCallCheck3.default)(this, User2);
    return (0, _possibleConstructorReturn3.default)(this, (User2.__proto__ || (0, _getPrototypeOf2.default)(User2)).apply(this, arguments));
  }

  (0, _createClass3.default)(User2, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "Navigation disable" : "Navigation select" },
        _react2.default.createElement("path", { d: "M44.6,38.3c-0.9,1-1.1,1.2-1.2,1.4c-0.1,0.2-0.1,0.2-0.2,0.5c-0.2,0.6-0.2,1.2-0.1,1.9c0.2,1.2,0.4,1.6,1.1,2.2 c0.5,0.5,0.7,0.7,0.9,0.9c0.7,0.6,1.2,0.9,2.4,1.3c0.1,0,0.1,0,0.2,0.1c0.3,0.1,0.6,0.2,1,0.3c0.2,0,0.8,0.2,0.9,0.2 c0.4,0.1,0.7,0.2,1,0.2c0.9,0.2,1.7,0.4,2.5,0.8c3,1.1,5.5,3.5,7.4,6.9c0.8,1.5,1.3,3.6,1.4,6.4l0.1,1.6l-1.6,0 c-26.5,0.1-42.9,0.1-49,0l-1.5,0v-1.5c0-4,1-7.2,3.2-9.6c2.8-2.8,5.7-4.4,8.9-4.7c2.9-0.3,5.2-1.8,5.7-2.8c0.1-0.3,0.2-0.5,0.3-0.6 c0-1.4-0.1-2.5-0.2-3.3c-0.1-0.4-0.2-0.8-0.4-1.1c-0.2-0.4-0.9-1.6-1.1-2c0,0,0,0-0.3-0.1c-1.1-0.5-1.3-0.5-1.9-1 c-0.2-0.1-0.3-0.3-0.5-0.4c-0.8-0.8-1.2-1.4-1.5-2.2c-0.1-0.3-0.1-0.5-0.2-1c-0.1-0.6-0.1-0.8-0.2-1.1c-0.5-1.9-0.3-4,0.7-5.2v-7.7 l0.1-0.6C25.6,12,32.4,9,42.9,9h1.2l0.2,1.2c0.1,0.5,0.4,1.8,1,3.7l3.2,3.5v8.9c0.7,1.2,1,2.7,0.7,4.3c0,0.3-0.2,1.2-0.2,1.3 c-0.2,1.2-0.4,1.8-0.7,2.6c-0.1,0.2-0.3,0.5-0.5,0.7c-0.3,0.4-0.7,0.6-1.1,0.7c-0.2,0-0.3,0.1-0.5,0.1 C45.4,37.3,44.8,38.1,44.6,38.3z" })
      );
    }
  }]);
  return User2;
}(_react.Component);

exports.default = User2;

User2.propTypes = {
  disable: _propTypes2.default.bool
};
User2.defaultProps = {
  disable: false
};

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User3 = function (_Component) {
		(0, _inherits3.default)(User3, _Component);

		function User3() {
				(0, _classCallCheck3.default)(this, User3);
				return (0, _possibleConstructorReturn3.default)(this, (User3.__proto__ || (0, _getPrototypeOf2.default)(User3)).apply(this, arguments));
		}

		(0, _createClass3.default)(User3, [{
				key: "render",
				value: function render() {
						var disable = this.props.disable;

						return _react2.default.createElement(
								"svg",
								{ viewBox: "0 0 72 72", className: disable ? "Navigation disable" : "Navigation" },
								_react2.default.createElement("path", { d: "M25.5,19.1V28l-0.7,0.4c-0.3,0.2-0.4,1.2-0.1,2.4c0.1,0.5,0.2,0.7,0.3,1.5c0,0.3,0.1,0.4,0.1,0.5c0.1,0.3,0.2,0.5,0.7,1 c0.1,0.1,0.1,0.1,0.2,0.2c0.3,0.2,0.4,0.3,1.2,0.6c0.7,0.3,1.2,0.6,1.6,1.1c0.4,0.5,1.2,1.9,1.4,2.5c0.2,0.5,0.4,1.1,0.6,1.7 c0.2,1,0.3,2.4,0.3,4.2l0,0.3l-0.6,1.2c-1,2-4.2,4.1-8.1,4.4c-2.4,0.2-4.7,1.5-6.9,3.8c-1.3,1.5-2.1,3.5-2.3,6 c6.9,0.1,22.2,0.1,45.8,0c-0.2-1.6-0.5-2.7-0.9-3.5c-1.6-2.8-3.5-4.7-5.8-5.5c-0.8-0.3-1.5-0.5-2.2-0.7c-0.3-0.1-0.6-0.1-0.9-0.2 c-0.1,0-0.7-0.1-0.9-0.2c-0.6-0.1-1-0.2-1.3-0.3c-0.1,0-0.1,0-0.2-0.1c-1.5-0.5-2.4-1.1-3.4-2c-0.3-0.3-0.5-0.5-1.1-1.1 c-1.1-1.1-1.5-2-1.9-3.7c-0.2-1.2-0.2-2.4,0.2-3.5c0.1-0.2,0.1-0.4,0.2-0.5c0.1-0.2,0.1-0.3,0.2-0.4c0.2-0.5,0.5-0.8,1.6-2 c0.1-0.1,0.9-1.1,1.8-2.4c0.4-0.6,0.9-0.8,1.5-0.8c0.2-0.4,0.3-0.8,0.4-1.6c0,0,0.1-1,0.2-1.3c0.2-1,0-1.8-0.5-2.5l-0.3-0.4v-8.7 l-2.6-2.9l-0.3-0.6c-0.4-1.3-0.7-2.3-0.9-3.1C33.1,12.2,27.8,14.6,25.5,19.1z M44.6,38.3c-0.9,1-1.1,1.2-1.2,1.4 c-0.1,0.2-0.1,0.2-0.2,0.5c-0.2,0.6-0.2,1.2-0.1,1.9c0.2,1.2,0.4,1.6,1.1,2.2c0.5,0.5,0.7,0.7,0.9,0.9c0.7,0.6,1.2,0.9,2.4,1.3 c0.1,0,0.1,0,0.2,0.1c0.3,0.1,0.6,0.2,1,0.3c0.2,0,0.8,0.2,0.9,0.2c0.4,0.1,0.7,0.2,1,0.2c0.9,0.2,1.7,0.4,2.5,0.8 c3,1.1,5.5,3.5,7.4,6.9c0.8,1.5,1.3,3.6,1.4,6.4l0.1,1.6l-1.6,0c-26.5,0.1-42.9,0.1-49,0l-1.5,0v-1.5c0-4,1-7.2,3.2-9.6 c2.8-2.8,5.7-4.4,8.9-4.7c2.9-0.3,5.2-1.8,5.7-2.8c0.1-0.3,0.2-0.5,0.3-0.6c0-1.4-0.1-2.5-0.2-3.3c-0.1-0.4-0.2-0.8-0.4-1.1 c-0.2-0.4-0.9-1.6-1.1-2c0,0,0,0-0.3-0.1c-1.1-0.5-1.3-0.5-1.9-1c-0.2-0.1-0.3-0.3-0.5-0.4c-0.8-0.8-1.2-1.4-1.5-2.2 c-0.1-0.3-0.1-0.5-0.2-1c-0.1-0.6-0.1-0.8-0.2-1.1c-0.5-1.9-0.3-4,0.7-5.2v-7.7l0.1-0.6C25.6,12,32.4,9,42.9,9h1.2l0.2,1.2 c0.1,0.5,0.4,1.8,1,3.7l3.2,3.5v8.9c0.7,1.2,1,2.7,0.7,4.3c0,0.3-0.2,1.2-0.2,1.3c-0.2,1.2-0.4,1.8-0.7,2.6 c-0.1,0.2-0.3,0.5-0.5,0.7c-0.3,0.4-0.7,0.6-1.1,0.7c-0.2,0-0.3,0.1-0.5,0.1C45.4,37.3,44.8,38.1,44.6,38.3z" })
						);
				}
		}]);
		return User3;
}(_react.Component);

exports.default = User3;

User3.propTypes = {
		disable: _propTypes2.default.bool
};
User3.defaultProps = {
		disable: false
};

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PicInPicModeView = function (_Component) {
  (0, _inherits3.default)(PicInPicModeView, _Component);

  function PicInPicModeView() {
    (0, _classCallCheck3.default)(this, PicInPicModeView);
    return (0, _possibleConstructorReturn3.default)(this, (PicInPicModeView.__proto__ || (0, _getPrototypeOf2.default)(PicInPicModeView)).apply(this, arguments));
  }

  (0, _createClass3.default)(PicInPicModeView, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "mode-view disable" : "mode-view" },
        _react2.default.createElement("path", { d: "M57,54H39V42h18V54z M60,57V15H12v42H60z M12,12h48c1.7,0,3,1.3,3,3v42c0,1.7-1.3,3-3,3H12c-1.7,0-3-1.3-3-3V15 C9,13.3,10.3,12,12,12z" })
      );
    }
  }]);
  return PicInPicModeView;
}(_react.Component);

exports.default = PicInPicModeView;

PicInPicModeView.propTypes = {
  disable: _propTypes2.default.bool
};
PicInPicModeView.defaultProps = {
  disable: false
};

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DivideModeView = function (_Component) {
  (0, _inherits3.default)(DivideModeView, _Component);

  function DivideModeView() {
    (0, _classCallCheck3.default)(this, DivideModeView);
    return (0, _possibleConstructorReturn3.default)(this, (DivideModeView.__proto__ || (0, _getPrototypeOf2.default)(DivideModeView)).apply(this, arguments));
  }

  (0, _createClass3.default)(DivideModeView, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "mode-view disable" : "mode-view" },
        _react2.default.createElement("path", { d: "M60,33V15H39v18H60z M60,57V39H39v18H60z M33,33V15H12v18H33z M33,57V39H12v18H33z M12,12h48c1.7,0,3,1.3,3,3v42 c0,1.7-1.3,3-3,3H12c-1.7,0-3-1.3-3-3V15C9,13.3,10.3,12,12,12z" })
      );
    }
  }]);
  return DivideModeView;
}(_react.Component);

exports.default = DivideModeView;

DivideModeView.propTypes = {
  disable: _propTypes2.default.bool
};
DivideModeView.defaultProps = {
  disable: false
};

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigSmallModeView = function (_Component) {
  (0, _inherits3.default)(BigSmallModeView, _Component);

  function BigSmallModeView() {
    (0, _classCallCheck3.default)(this, BigSmallModeView);
    return (0, _possibleConstructorReturn3.default)(this, (BigSmallModeView.__proto__ || (0, _getPrototypeOf2.default)(BigSmallModeView)).apply(this, arguments));
  }

  (0, _createClass3.default)(BigSmallModeView, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "mode-view disable" : "mode-view" },
        _react2.default.createElement("path", { d: "M60,57V30H12v27H60z M60,27V15H48v12H60z M42,27V15H30v12H42z M24,27V15H12v12H24z M12,12h48c1.7,0,3,1.3,3,3v42 c0,1.7-1.3,3-3,3H12c-1.7,0-3-1.3-3-3V15C9,13.3,10.3,12,12,12z" })
      );
    }
  }]);
  return BigSmallModeView;
}(_react.Component);

exports.default = BigSmallModeView;

BigSmallModeView.propTypes = {
  disable: _propTypes2.default.bool
};
BigSmallModeView.defaultProps = {
  disable: false
};

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Location = function (_Component) {
  (0, _inherits3.default)(Location, _Component);

  function Location() {
    (0, _classCallCheck3.default)(this, Location);
    return (0, _possibleConstructorReturn3.default)(this, (Location.__proto__ || (0, _getPrototypeOf2.default)(Location)).apply(this, arguments));
  }

  (0, _createClass3.default)(Location, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "Navigation disable" : "Navigation" },
        _react2.default.createElement("path", { d: "M36,36.4c-3.3,0-6-2.7-6-6s2.7-6,6-6c3.3,0,6,2.7,6,6S39.3,36.4,36,36.4z M57,30.2c0-11.6-9.4-21-21-21s-21,9.4-21,21 c0,7.5,7,18.1,21,31.4C50,48.3,57,37.8,57,30.2z M37,64.8l-1,1l-1-1C19.7,50.5,12,39,12,30.2c0-13.2,10.7-24,24-24s24,10.7,24,24 C60,39,52.3,50.5,37,64.8z" })
      );
    }
  }]);
  return Location;
}(_react.Component);

exports.default = Location;

Location.propTypes = {
  disable: _propTypes2.default.bool
};
Location.defaultProps = {
  disable: false
};

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Download = function (_Component) {
  (0, _inherits3.default)(Download, _Component);

  function Download() {
    (0, _classCallCheck3.default)(this, Download);
    return (0, _possibleConstructorReturn3.default)(this, (Download.__proto__ || (0, _getPrototypeOf2.default)(Download)).apply(this, arguments));
  }

  (0, _createClass3.default)(Download, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "Navigation disable" : "Navigation" },
        _react2.default.createElement("path", { d: "M12.8,63v-3h46.5v3H12.8z M37.5,52.1V9h-3v43.1L15.8,33.5l-2.1,2.1l20.7,20.7c0.9,0.9,2.3,0.9,3.2,0l20.7-20.7l-2.1-2.1 L37.5,52.1z" })
      );
    }
  }]);
  return Download;
}(_react.Component);

exports.default = Download;

Download.propTypes = {
  disable: _propTypes2.default.bool
};
Download.defaultProps = {
  disable: false
};

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contral = function (_Component) {
  (0, _inherits3.default)(Contral, _Component);

  function Contral() {
    (0, _classCallCheck3.default)(this, Contral);
    return (0, _possibleConstructorReturn3.default)(this, (Contral.__proto__ || (0, _getPrototypeOf2.default)(Contral)).apply(this, arguments));
  }

  (0, _createClass3.default)(Contral, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-data-control disable" : "call-data-control" },
        _react2.default.createElement("path", { d: "M34.8,23.2c0.8,0,1.5,0.7,1.5,1.5v9c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5v-9C33.3,23.9,34,23.2,34.8,23.2z M34.8,20.2 L34.8,20.2c-7.5,0-13.5,6-13.5,13.5v15c0,7.5,6,13.5,13.5,13.5c7.5,0,13.5-6,13.5-13.5v-15C48.3,26.3,42.3,20.2,34.8,20.2z M35.8,17.1h-3l0-3.7c-0.3-4.4,3.2-6.6,9.7-6.6h11.2v3H42.5c-4.9,0-6.9,1.2-6.7,3.5V17.1z M34.8,17.2L34.8,17.2 c9.1,0,16.5,7.4,16.5,16.5v15c0,9.1-7.4,16.5-16.5,16.5s-16.5-7.4-16.5-16.5v-15C18.3,24.6,25.7,17.2,34.8,17.2z" })
      );
    }
  }]);
  return Contral;
}(_react.Component);

exports.default = Contral;

Contral.propTypes = {
  disable: _propTypes2.default.bool
};
Contral.defaultProps = {
  disable: false
};

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Client = function (_Component) {
  (0, _inherits3.default)(Client, _Component);

  function Client() {
    (0, _classCallCheck3.default)(this, Client);
    return (0, _possibleConstructorReturn3.default)(this, (Client.__proto__ || (0, _getPrototypeOf2.default)(Client)).apply(this, arguments));
  }

  (0, _createClass3.default)(Client, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-data-client disable" : "call-data-client" },
        _react2.default.createElement("path", { d: "M9,11.2v39h54v-39H9z M60,47.2H12v-33h48V47.2z" }),
        _react2.default.createElement("rect", { x: "18", y: "57.8", width: "36", height: "3" }),
        _react2.default.createElement("path", { d: "M34.7,38.6l15.7-15.7l-2.1-2.1L33.2,35.9l-7.4-7.4l-2.1,2.1l8,8C32.4,39.4,33.9,39.4,34.7,38.6z" })
      );
    }
  }]);
  return Client;
}(_react.Component);

exports.default = Client;

Client.propTypes = {
  disable: _propTypes2.default.bool
};
Client.defaultProps = {
  disable: false
};

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mark = function (_Component) {
  (0, _inherits3.default)(Mark, _Component);

  function Mark() {
    (0, _classCallCheck3.default)(this, Mark);
    return (0, _possibleConstructorReturn3.default)(this, (Mark.__proto__ || (0, _getPrototypeOf2.default)(Mark)).apply(this, arguments));
  }

  (0, _createClass3.default)(Mark, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-data-mark disable" : "call-data-mark" },
        _react2.default.createElement("path", { d: "M47,39.8L30.7,56.2c-0.3,0.3-0.7,0.4-1.1,0.4l-12.7,0c-0.8,0-1.5-0.7-1.5-1.5l0-12.7c0-0.4,0.2-0.8,0.4-1.1L32.2,25L47,39.8 z M51.3,35.6L36.4,20.7l4.9-4.9c0.6-0.6,1.5-0.6,2.1,0l12.7,12.7c0.6,0.6,0.6,1.5,0,2.1L51.3,35.6z M31.9,29.5L18.4,43l0,10.6 l10.6,0l13.5-13.5L31.9,29.5z" })
      );
    }
  }]);
  return Mark;
}(_react.Component);

exports.default = Mark;

Mark.propTypes = {
  disable: _propTypes2.default.bool
};
Mark.defaultProps = {
  disable: false
};

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Edit = function (_Component) {
  (0, _inherits3.default)(Edit, _Component);

  function Edit() {
    (0, _classCallCheck3.default)(this, Edit);
    return (0, _possibleConstructorReturn3.default)(this, (Edit.__proto__ || (0, _getPrototypeOf2.default)(Edit)).apply(this, arguments));
  }

  (0, _createClass3.default)(Edit, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "Navigation disable" : "Navigation" },
        _react2.default.createElement("path", { d: "M60,22.9l3-3.1c0,1.2,0,1.9,0,2c0,8.5,0,21.3,0,38.3c0,1.7-1.4,3.1-3.1,3.1H12.1c-1.7,0-3.1-1.4-3.1-3.1V12.3 c0-1.7,1.4-3.1,3.1-3.1c16.8,0,29.3,0,37.7,0c0.1,0,0.6,0,1.7,0l-3,3c-1.2,0-1.9,0-2,0c-23,0-34.5,0-34.5,0.1 c0,31.9,0,47.9,0.1,47.9c31.9,0,47.9,0,47.9-0.1c0-15.7,0-27.5,0-35.3C60,24.7,60,24,60,22.9z M51.3,13.6l4.4-4.4 c0.6-0.6,1.5-0.6,2.1,0l1,1l3.7,3.7c0.6,0.6,0.6,1.5,0,2.1l-4.4,4.4L51.3,13.6z M23.2,42.5l6.1,6.1l-8.8,3L23.2,42.5z M25,39.9 l24.1-24.1l6.8,6.8L31.8,46.7L25,39.9z" })
      );
    }
  }]);
  return Edit;
}(_react.Component);

exports.default = Edit;

Edit.propTypes = {
  disable: _propTypes2.default.bool
};
Edit.defaultProps = {
  disable: false
};

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message2 = function (_Component) {
  (0, _inherits3.default)(Message2, _Component);

  function Message2() {
    (0, _classCallCheck3.default)(this, Message2);
    return (0, _possibleConstructorReturn3.default)(this, (Message2.__proto__ || (0, _getPrototypeOf2.default)(Message2)).apply(this, arguments));
  }

  (0, _createClass3.default)(Message2, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "Navigation disable" : "Navigation select" },
        _react2.default.createElement("path", { id: "SVGID_7_", d: "M20.5,15c0.8,0,1.5-0.7,1.5-1.5S21.3,12,20.5,12S19,12.7,19,13.5S19.7,15,20.5,15z M15.5,15 c0.8,0,1.5-0.7,1.5-1.5S16.3,12,15.5,12c-0.8,0-1.5,0.7-1.5,1.5S14.7,15,15.5,15z M10.5,15c0.8,0,1.5-0.7,1.5-1.5S11.3,12,10.5,12 S9,12.7,9,13.5S9.7,15,10.5,15z M14.8,21L10,25v-4H7c-1.1,0-2-0.9-2-2V7c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2 H14.8z" })
      );
    }
  }]);
  return Message2;
}(_react.Component);

exports.default = Message2;

Message2.propTypes = {
  disable: _propTypes2.default.bool
};
Message2.defaultProps = {
  disable: false
};

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Call2 = function (_Component) {
  (0, _inherits3.default)(Call2, _Component);

  function Call2() {
    (0, _classCallCheck3.default)(this, Call2);
    return (0, _possibleConstructorReturn3.default)(this, (Call2.__proto__ || (0, _getPrototypeOf2.default)(Call2)).apply(this, arguments));
  }

  (0, _createClass3.default)(Call2, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "Navigation disable" : "Navigation select" },
        _react2.default.createElement("path", { d: "M19,23.9c-0.4,0-0.8-0.1-1.1-0.1c-1-0.2-4.9-1.9-7.5-4.8c-1.5-1.8-3.5-4.4-4.1-7.1c0,0-0.3-1.4,0.1-2.3 c0.2-0.4,0.6-0.9,1.1-1.4C7.6,8,8.8,7,8.9,6.9c0.8-0.7,1.4-1,2.2-0.8c1,0.2,1.5,0.9,2.1,1.9c0.2,0.4,1.2,2.3,1.3,2.5 c0.6,1.4-0.3,2.3-0.5,2.5c-0.1,0.1-0.2,0.2-0.3,0.3c0.3,0.4,0.9,1.2,1.4,1.7c0.6,0.6,1.4,1.2,1.8,1.4l0.4-0.3 c0.7-0.6,1.4-1.1,2.5-0.6c0.4,0.2,3.1,2.1,3.4,2.4c0.2,0.2,0.5,0.4,0.6,0.8c0.4,0.9-0.6,2.3-0.7,2.5c-0.5,0.7-2,2.3-3.1,2.7 C19.7,23.9,19.4,23.9,19,23.9z" })
      );
    }
  }]);
  return Call2;
}(_react.Component);

exports.default = Call2;

Call2.propTypes = {
  disable: _propTypes2.default.bool
};
Call2.defaultProps = {
  disable: false
};

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuccessIcon = function (_Component) {
  (0, _inherits3.default)(SuccessIcon, _Component);

  function SuccessIcon() {
    (0, _classCallCheck3.default)(this, SuccessIcon);
    return (0, _possibleConstructorReturn3.default)(this, (SuccessIcon.__proto__ || (0, _getPrototypeOf2.default)(SuccessIcon)).apply(this, arguments));
  }

  (0, _createClass3.default)(SuccessIcon, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { version: "1.1", id: "\u56FE\u5C42_1", className: "successIcon", x: "0px", y: "0px", viewBox: "0 0 72 72", fill: "#2DC100" },
        _react2.default.createElement("path", { d: "M32.6,46.1L19.1,32.7L17,34.8l14,14c0.9,0.9,2.3,0.9,3.2,0l21.7-21.7L53.7,25L32.6,46.1z M36,66C19.4,66,6,52.6,6,36 S19.4,6,36,6s30,13.4,30,30S52.6,66,36,66z" })
      );
    }
  }]);
  return SuccessIcon;
}(_react.Component);

exports.default = SuccessIcon;

SuccessIcon.propTypes = {
  disable: _propTypes2.default.bool
};
SuccessIcon.defaultProps = {
  disable: false
};

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Right2 = function (_Component) {
  (0, _inherits3.default)(Right2, _Component);

  function Right2() {
    (0, _classCallCheck3.default)(this, Right2);
    return (0, _possibleConstructorReturn3.default)(this, (Right2.__proto__ || (0, _getPrototypeOf2.default)(Right2)).apply(this, arguments));
  }

  (0, _createClass3.default)(Right2, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { version: "1.1", id: "\u56FE\u5C42_1", x: "0px", y: "0px", viewBox: "0 0 72 72", style: { enableBackground: "new 0 0 72 72" }, fill: "#2DC100" },
        _react2.default.createElement("path", { d: "M32.6,43.1L21.1,31.7L17,35.8l14,14c0.9,0.9,2.3,0.9,3.2,0l21.7-21.7L51.7,24L32.6,43.1z M36,66C19.4,66,6,52.6,6,36 S19.4,6,36,6s30,13.4,30,30S52.6,66,36,66z" })
      );
    }
  }]);
  return Right2;
}(_react.Component);

exports.default = Right2;

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function (_Component) {
  (0, _inherits3.default)(Info, _Component);

  function Info() {
    (0, _classCallCheck3.default)(this, Info);
    return (0, _possibleConstructorReturn3.default)(this, (Info.__proto__ || (0, _getPrototypeOf2.default)(Info)).apply(this, arguments));
  }

  (0, _createClass3.default)(Info, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { version: "1.1", className: "info", id: "\u56FE\u5C42_1", x: "0px", y: "0px", viewBox: "0 0 72 72", fill: "#FFFFFF" },
        _react2.default.createElement("path", { d: "M36,21c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S34.3,21,36,21z M36,63c14.9,0,27-12.1,27-27S50.9,9,36,9S9,21.1,9,36 S21.1,63,36,63z M36,66C19.4,66,6,52.6,6,36S19.4,6,36,6s30,13.4,30,30S52.6,66,36,66z M35.2,48V32.3h-3v-1.2l6-1.1v2.2h0V48h3v2.8 h-9V48H35.2z" })
      );
    }
  }]);
  return Info;
}(_react.Component);

exports.default = Info;

Info.propTypes = {
  disable: _propTypes2.default.bool
};
Info.defaultProps = {
  disable: false
};

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseBtn = function (_Component) {
  (0, _inherits3.default)(CloseBtn, _Component);

  function CloseBtn() {
    (0, _classCallCheck3.default)(this, CloseBtn);
    return (0, _possibleConstructorReturn3.default)(this, (CloseBtn.__proto__ || (0, _getPrototypeOf2.default)(CloseBtn)).apply(this, arguments));
  }

  (0, _createClass3.default)(CloseBtn, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "gray-icon-1 disable" : "gray-icon-1" },
        _react2.default.createElement("polygon", { points: "15.8,15 22,21.2 21.2,22 15,15.8 8.8,22 8,21.2 14.2,15 8,8.8 8.8,8 15,14.2 21.2,8 22,8.8 " })
      );
    }
  }]);
  return CloseBtn;
}(_react.Component);

exports.default = CloseBtn;

CloseBtn.propTypes = {
  disable: _propTypes2.default.bool
};
CloseBtn.defaultProps = {
  disable: false
};

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);
    return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).apply(this, arguments));
  }

  (0, _createClass3.default)(Search, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "search-icon";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M31.4,50.6c10.6,0,19.3-8.6,19.3-19.3s-8.6-19.3-19.3-19.3s-19.3,8.6-19.3,19.3S20.8,50.6,31.4,50.6z M48.6,45.5l14.2,14.2 c0.1,1.6-1.1,3-2.7,3.2c-0.2,0-0.3,0-0.5,0L45.4,48.7c-3.8,3.1-8.7,5-14,5c-12.3,0-22.3-10-22.3-22.3s10-22.3,22.3-22.3 s22.3,10,22.3,22.3C53.7,36.7,51.8,41.6,48.6,45.5z" })
      );
    }
  }]);
  return Search;
}(_react.Component);

exports.default = Search;

Search.propTypes = {
  disable: _propTypes2.default.bool
};
Search.defaultProps = {
  disable: false
};

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    (0, _classCallCheck3.default)(this, Menu);
    return (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).apply(this, arguments));
  }

  (0, _createClass3.default)(Menu, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "Navigation disable other" : "Navigation other" },
        _react2.default.createElement("path", { id: "SVGID_1_", d: "M7,8h16c0.6,0,1,0.4,1,1s-0.4,1-1,1H7c-0.6,0-1-0.4-1-1S6.4,8,7,8z M7,14h16c0.6,0,1,0.4,1,1s-0.4,1-1,1H7 c-0.6,0-1-0.4-1-1S6.4,14,7,14z M7,20h16c0.6,0,1,0.4,1,1s-0.4,1-1,1H7c-0.6,0-1-0.4-1-1S6.4,20,7,20z" })
      );
    }
  }]);
  return Menu;
}(_react.Component);

exports.default = Menu;

Menu.propTypes = {
  disable: _propTypes2.default.bool
};
Menu.defaultProps = {
  disable: false
};

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    (0, _classCallCheck3.default)(this, Menu);
    return (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).apply(this, arguments));
  }

  (0, _createClass3.default)(Menu, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "Navigation disable other" : "Navigation other select" },
        _react2.default.createElement("path", { id: "SVGID_1_", d: "M7,8h16c0.6,0,1,0.4,1,1s-0.4,1-1,1H7c-0.6,0-1-0.4-1-1S6.4,8,7,8z M7,14h16c0.6,0,1,0.4,1,1s-0.4,1-1,1H7 c-0.6,0-1-0.4-1-1S6.4,14,7,14z M7,20h16c0.6,0,1,0.4,1,1s-0.4,1-1,1H7c-0.6,0-1-0.4-1-1S6.4,20,7,20z" })
      );
    }
  }]);
  return Menu;
}(_react.Component);

exports.default = Menu;

Menu.propTypes = {
  disable: _propTypes2.default.bool
};
Menu.defaultProps = {
  disable: false
};

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Call3 = function (_Component) {
  (0, _inherits3.default)(Call3, _Component);

  function Call3() {
    (0, _classCallCheck3.default)(this, Call3);
    return (0, _possibleConstructorReturn3.default)(this, (Call3.__proto__ || (0, _getPrototypeOf2.default)(Call3)).apply(this, arguments));
  }

  (0, _createClass3.default)(Call3, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "svgForView";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M45.9,46.8l-2.6,1.9c-2.4,1.8-5.7,1.6-7.8-0.6L25.2,38c-2.1-2.1-2.3-5.5-0.6-7.8l1.9-2.6l-5.1-15.3l-9.4-0.1\tc-0.1,15.1,4.6,27,14,35.8c9.4,8.9,20.6,12.7,33.8,11.6l0-8.6L45.9,46.8z M29.4,26.6c0.3,0.9,0.1,2-0.4,2.7L27,31.9\tc-0.9,1.2-0.8,2.9,0.3,3.9l10.3,10.3c1.1,1.1,2.7,1.2,3.9,0.3l2.6-1.9c0.8-0.6,1.7-0.7,2.7-0.5l14.8,4.4c0.8,0.2,1.3,1,1.3,1.8v9.4 c0,1.6-1.2,2.9-2.7,3C46.1,63.8,34,59.7,24,50.2c-10-9.5-15-22.2-14.9-38c0-1.7,1.4-3,3-3l10.2,0.1c0.8,0,1.5,0.5,1.8,1.3L29.4,26.6z" })
      );
    }
  }]);
  return Call3;
}(_react.Component);

exports.default = Call3;

Call3.propTypes = {
  disable: _propTypes2.default.bool
};
Call3.defaultProps = {
  disable: false
};

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function (_Component) {
  (0, _inherits3.default)(Video, _Component);

  function Video() {
    (0, _classCallCheck3.default)(this, Video);
    return (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).apply(this, arguments));
  }

  (0, _createClass3.default)(Video, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "svgForView";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M14.9,30c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3C17.9,28.6,16.6,30,14.9,30z M8.9,21v30h40.5V21H8.9z M52.4,30 l13.6-6.8v25.7L52.4,42v9c0,1.7-1.3,3-3,3H8.9c-1.7,0-3-1.3-3-3V21c0-1.7,1.3-3,3-3h40.5c1.7,0,3,1.3,3,3V30z" })
      );
    }
  }]);
  return Video;
}(_react.Component);

exports.default = Video;

Video.propTypes = {
  disable: _propTypes2.default.bool
};
Video.defaultProps = {
  disable: false
};

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfAudioStatus_mute = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ConfAudioStatus_mute, _Component);

  function ConfAudioStatus_mute() {
    (0, _classCallCheck3.default)(this, ConfAudioStatus_mute);
    return (0, _possibleConstructorReturn3.default)(this, (ConfAudioStatus_mute.__proto__ || (0, _getPrototypeOf2.default)(ConfAudioStatus_mute)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfAudioStatus_mute, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          isShowOnly = _props.isShowOnly;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "ConfAudioStatus_unmute disable" : isShowOnly ? "ConfAudioStatus_unmute  isShowOnly" : "ConfAudioStatus_unmute" },
        _react2.default.createElement("path", { d: "M47.8,18v16.9c0,6.5-5.3,11.8-11.8,11.8s-11.8-5.3-11.8-11.8V18c0-6.5,5.3-11.8,11.8-11.8S47.8,11.5,47.8,18z M37.5,54.9 v10.8h-3V54.9c-10.4-0.8-18.7-9.5-18.7-20.1h3C18.8,44.3,26.5,52,36,52s17.2-7.7,17.2-17.2h3C56.2,45.5,47.9,54.2,37.5,54.9z M27.2,18v16.9c0,4.8,3.9,8.8,8.8,8.8s8.8-3.9,8.8-8.8V18c0-4.8-3.9-8.8-8.8-8.8S27.2,13.2,27.2,18z" })
      );
    }
  }]);
  return ConfAudioStatus_mute;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool,
  isShowOnly: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false,
  isShowOnly: false
}, _temp);
exports.default = ConfAudioStatus_mute;

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfAudioStatus_mute_two = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ConfAudioStatus_mute_two, _Component);

  function ConfAudioStatus_mute_two() {
    (0, _classCallCheck3.default)(this, ConfAudioStatus_mute_two);
    return (0, _possibleConstructorReturn3.default)(this, (ConfAudioStatus_mute_two.__proto__ || (0, _getPrototypeOf2.default)(ConfAudioStatus_mute_two)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfAudioStatus_mute_two, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          isShowOnly = _props.isShowOnly;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "ConfAudioStatus_unmute_two disable" : isShowOnly ? "ConfAudioStatus_unmute_two  isShowOnly" : "ConfAudioStatus_unmute_two" },
        _react2.default.createElement("path", { d: "M47.8,18v16.9c0,6.5-5.3,11.8-11.8,11.8s-11.8-5.3-11.8-11.8V18c0-6.5,5.3-11.8,11.8-11.8S47.8,11.5,47.8,18z M37.5,54.9 v10.8h-3V54.9c-10.4-0.8-18.7-9.5-18.7-20.1h3C18.8,44.3,26.5,52,36,52s17.2-7.7,17.2-17.2h3C56.2,45.5,47.9,54.2,37.5,54.9z M27.2,18v16.9c0,4.8,3.9,8.8,8.8,8.8s8.8-3.9,8.8-8.8V18c0-4.8-3.9-8.8-8.8-8.8S27.2,13.2,27.2,18z" })
      );
    }
  }]);
  return ConfAudioStatus_mute_two;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool,
  isShowOnly: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false,
  isShowOnly: false
}, _temp);
exports.default = ConfAudioStatus_mute_two;

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfAudioStatus_unmute = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ConfAudioStatus_unmute, _Component);

  function ConfAudioStatus_unmute() {
    (0, _classCallCheck3.default)(this, ConfAudioStatus_unmute);
    return (0, _possibleConstructorReturn3.default)(this, (ConfAudioStatus_unmute.__proto__ || (0, _getPrototypeOf2.default)(ConfAudioStatus_unmute)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfAudioStatus_unmute, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          isShowOnly = _props.isShowOnly;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "ConfAudioStatus_mute disable" : isShowOnly ? "ConfAudioStatus_mute isShowOnly" : "ConfAudioStatus_mute" },
        _react2.default.createElement("path", { d: "M46.6,40.1l-2.3-2.3c0.3-0.9,0.5-1.9,0.5-2.9V18c0-4.8-3.9-8.8-8.8-8.8c-4.8,0-8.8,3.9-8.8,8.8v2.8l-3-3 C24.4,11.4,29.6,6.3,36,6.3c6.5,0,11.8,5.3,11.8,11.8v16.9C47.8,36.8,47.3,38.5,46.6,40.1z M52.7,46.2c2.2-3.2,3.5-7.1,3.5-11.4h-3 c0,3.4-1,6.5-2.7,9.2L52.7,46.2z M40,46c-1.2,0.4-2.6,0.7-4,0.7c-6.5,0-11.8-5.3-11.8-11.8v-4.7l3,3v1.7c0,4.8,3.9,8.8,8.8,8.8 c0.5,0,1,0,1.5-0.1L40,46z M46.2,52.2c-2.6,1.5-5.5,2.5-8.7,2.7v10.8h-3V54.9c-10.4-0.8-18.7-9.5-18.7-20.1h3 C18.8,44.3,26.5,52,36,52c2.9,0,5.6-0.7,8-2L46.2,52.2z" }),
        _react2.default.createElement("rect", { x: "34.5", y: "2.1", transform: "matrix(0.7058 -0.7084 0.7084 0.7058 -14.9116 36.0964)", fill: "#F34B4B", width: "3", height: "67.8" })
      );
    }
  }]);
  return ConfAudioStatus_unmute;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool,
  isShowOnly: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false,
  isShowOnly: false
}, _temp);
exports.default = ConfAudioStatus_unmute;

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfAudioStatus_unmute_two = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ConfAudioStatus_unmute_two, _Component);

  function ConfAudioStatus_unmute_two() {
    (0, _classCallCheck3.default)(this, ConfAudioStatus_unmute_two);
    return (0, _possibleConstructorReturn3.default)(this, (ConfAudioStatus_unmute_two.__proto__ || (0, _getPrototypeOf2.default)(ConfAudioStatus_unmute_two)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfAudioStatus_unmute_two, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          isShowOnly = _props.isShowOnly;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "ConfAudioStatus_mute_two disable" : isShowOnly ? "ConfAudioStatus_mute_two isShowOnly" : "ConfAudioStatus_mute_two" },
        _react2.default.createElement("path", { d: "M46.6,40.1l-2.3-2.3c0.3-0.9,0.5-1.9,0.5-2.9V18c0-4.8-3.9-8.8-8.8-8.8c-4.8,0-8.8,3.9-8.8,8.8v2.8l-3-3 C24.4,11.4,29.6,6.3,36,6.3c6.5,0,11.8,5.3,11.8,11.8v16.9C47.8,36.8,47.3,38.5,46.6,40.1z M52.7,46.2c2.2-3.2,3.5-7.1,3.5-11.4h-3 c0,3.4-1,6.5-2.7,9.2L52.7,46.2z M40,46c-1.2,0.4-2.6,0.7-4,0.7c-6.5,0-11.8-5.3-11.8-11.8v-4.7l3,3v1.7c0,4.8,3.9,8.8,8.8,8.8 c0.5,0,1,0,1.5-0.1L40,46z M46.2,52.2c-2.6,1.5-5.5,2.5-8.7,2.7v10.8h-3V54.9c-10.4-0.8-18.7-9.5-18.7-20.1h3 C18.8,44.3,26.5,52,36,52c2.9,0,5.6-0.7,8-2L46.2,52.2z" }),
        _react2.default.createElement("rect", { x: "34.5", y: "2.1", transform: "matrix(0.7058 -0.7084 0.7084 0.7058 -14.9116 36.0964)", fill: "#F34B4B", width: "3", height: "67.8" })
      );
    }
  }]);
  return ConfAudioStatus_unmute_two;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool,
  isShowOnly: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false,
  isShowOnly: false
}, _temp);
exports.default = ConfAudioStatus_unmute_two;

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfAudioStatus_hangup = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ConfAudioStatus_hangup, _Component);

  function ConfAudioStatus_hangup() {
    (0, _classCallCheck3.default)(this, ConfAudioStatus_hangup);
    return (0, _possibleConstructorReturn3.default)(this, (ConfAudioStatus_hangup.__proto__ || (0, _getPrototypeOf2.default)(ConfAudioStatus_hangup)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfAudioStatus_hangup, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "ConfAudioStatus_hangup disable" : "ConfAudioStatus_hangup" },
        _react2.default.createElement("path", { d: "M45.9,46.8l-2.7,2c-2.4,1.8-5.7,1.6-7.8-0.6L24.9,37.8c-2.1-2.1-2.3-5.5-0.6-7.8l2-2.6l-5-15.2h-9.4 C11.8,27.1,16.4,39,25.9,48c9.5,9,20.8,12.9,34.2,11.7l0-8.7L45.9,46.8z M29.2,26.3c0.3,0.9,0.1,2-0.5,2.7l-2,2.6 c-0.9,1.2-0.8,2.9,0.3,3.9l10.4,10.4c1.1,1.1,2.7,1.2,3.9,0.3l2.7-2c0.8-0.6,1.7-0.7,2.7-0.5l15,4.5c0.8,0.2,1.3,1,1.3,1.8v9.5 c0,1.6-1.2,2.9-2.7,3c-14.2,1.2-26.4-2.9-36.5-12.5C13.7,40.6,8.7,27.9,8.9,12.1c0-1.6,1.4-3,3-3h10.2c0.8,0,1.5,0.5,1.8,1.3 L29.2,26.3z M53.9,20.4c5,5,7.7,7.7,8.1,8l1.1,1L61,31.6l-1.1-1c-0.3-0.3-3-3-8.1-8c-5.1,5-7.8,7.7-8.1,8l-1.1,1l-2.1-2.2l1.1-1 c0.3-0.3,3-3,8.1-8c-2.3-2.3-5-5-8.1-8l-1.1-1.1l2.1-2.1l1.1,1.1c3.1,3.1,5.8,5.7,8.1,8c2.3-2.3,5-5,8.1-8l1.1-1.1l2.1,2.1L62,12.4 C58.9,15.5,56.2,18.2,53.9,20.4z" })
      );
    }
  }]);
  return ConfAudioStatus_hangup;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = ConfAudioStatus_hangup;

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfAudioStatus_calling = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ConfAudioStatus_calling, _Component);

  function ConfAudioStatus_calling() {
    (0, _classCallCheck3.default)(this, ConfAudioStatus_calling);
    return (0, _possibleConstructorReturn3.default)(this, (ConfAudioStatus_calling.__proto__ || (0, _getPrototypeOf2.default)(ConfAudioStatus_calling)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfAudioStatus_calling, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "ConfAudioStatus_calling disable" : "ConfAudioStatus_calling" },
        _react2.default.createElement("path", { d: "M45,49.3l-2.6,1.9c-2.4,1.7-5.7,1.5-7.8-0.5l-10.3-10c-2.1-2-2.3-5.3-0.6-7.6l1.9-2.5l-5.1-14.8l-9.4-0.1 c-0.1,14.6,4.6,26.2,14,34.8C34.6,59,45.8,62.8,59,61.6l0-8.3L45,49.3z M28.5,29.6c0.3,0.9,0.1,1.9-0.4,2.7l-1.9,2.5 c-0.9,1.2-0.8,2.8,0.3,3.8l10.3,10c1.1,1,2.7,1.1,3.9,0.3l2.6-1.9c0.8-0.6,1.7-0.7,2.7-0.5l14.8,4.3c0.8,0.2,1.3,0.9,1.3,1.7v9.1 c0,1.5-1.2,2.8-2.7,2.9c-14,1.2-26.1-2.8-36.1-12c-10-9.2-15-21.5-14.9-36.9c0-1.6,1.4-2.9,3-2.9l10.2,0.1c0.8,0,1.5,0.5,1.8,1.2 L28.5,29.6z M63.7,38.8h-3C60.7,23,48,10.2,32.2,10.2v-3C49.6,7.2,63.7,21.4,63.7,38.8z M51.7,38.8h-3c0-9.1-7.4-16.5-16.5-16.5v-3 C43,19.2,51.7,28,51.7,38.8z" })
      );
    }
  }]);
  return ConfAudioStatus_calling;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = ConfAudioStatus_calling;

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfAudioStatus_inviting = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ConfAudioStatus_inviting, _Component);

  function ConfAudioStatus_inviting() {
    (0, _classCallCheck3.default)(this, ConfAudioStatus_inviting);
    return (0, _possibleConstructorReturn3.default)(this, (ConfAudioStatus_inviting.__proto__ || (0, _getPrototypeOf2.default)(ConfAudioStatus_inviting)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfAudioStatus_inviting, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "ConfAudioStatus_inviting disable" : "ConfAudioStatus_inviting" },
        _react2.default.createElement("path", { d: "M45.9,46.8l-2.6,1.9c-2.4,1.8-5.7,1.6-7.8-0.6L25.2,38c-2.1-2.1-2.3-5.5-0.6-7.8l1.9-2.6l-5.1-15.3l-9.4-0.1 c-0.1,15.1,4.6,27,14,35.8c9.4,8.9,20.6,12.7,33.8,11.6l0-8.6L45.9,46.8z M29,29.4L27,31.9c-0.9,1.2-0.8,2.9,0.3,3.9l10.3,10.3 c1.1,1.1,2.7,1.2,3.9,0.3l2.6-1.9c0.8-0.6,1.7-0.7,2.7-0.5l14.8,4.4c0.8,0.2,1.3,1,1.3,1.8v9.4c0,1.6-1.2,2.9-2.7,3 C46.1,63.8,34,59.7,24,50.2c-10-9.5-15-22.2-14.9-38c0-1.7,1.4-3,3-3l10.2,0.1c0.8,0,1.5,0.5,1.8,1.3l5.3,16 C29.7,27.5,29.5,28.6,29,29.4z M58.8,14.5C48,25.2,42.4,30.7,41.9,31.2l-1.1,1l-2.1-2.2l1.1-1c0.5-0.5,6.2-6.1,16.9-16.8h-10v-3h15 v15h-3V14.5z" })
      );
    }
  }]);
  return ConfAudioStatus_inviting;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = ConfAudioStatus_inviting;

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfAudioStatus_speaker = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ConfAudioStatus_speaker, _Component);

  function ConfAudioStatus_speaker() {
    (0, _classCallCheck3.default)(this, ConfAudioStatus_speaker);
    return (0, _possibleConstructorReturn3.default)(this, (ConfAudioStatus_speaker.__proto__ || (0, _getPrototypeOf2.default)(ConfAudioStatus_speaker)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfAudioStatus_speaker, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "ConfAudioStatus_speaker disable" : "ConfAudioStatus_speaker" },
        _react2.default.createElement("path", { d: "M51.1,60.4L49.3,58c6.7-5,10.7-12.8,10.7-21.3c0-9.3-4.8-17.8-12.6-22.6l1.6-2.5c8.6,5.4,14,14.8,14,25.1 C62.9,46.2,58.5,54.9,51.1,60.4z M45.1,51.6l-1.7-2.5c4.2-2.9,6.7-7.6,6.7-12.7c0-5.7-3.1-10.8-8-13.5l1.5-2.6 c5.8,3.2,9.5,9.3,9.5,16.1C53.1,42.6,50.1,48.2,45.1,51.6z M35.1,16.6L20.4,29.4h-8.3v13.3h8.8l14.2,12.6V16.6z M19.3,26.4l16.2-14 c0.7-0.6,1.7-0.5,2.2,0.2c0.3,0.5,0.3,0.5,0.4,1v45c0,0.9-0.7,1.6-1.6,1.6c-0.6-0.1-0.6-0.1-1-0.4l-15.7-14h-8.8 c-1,0-1.9-0.8-1.9-1.9V28.2c0-1,0.8-1.9,1.9-1.9H19.3z" })
      );
    }
  }]);
  return ConfAudioStatus_speaker;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = ConfAudioStatus_speaker;

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfAudioStatus_speaking = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ConfAudioStatus_speaking, _Component);

  function ConfAudioStatus_speaking() {
    (0, _classCallCheck3.default)(this, ConfAudioStatus_speaking);
    return (0, _possibleConstructorReturn3.default)(this, (ConfAudioStatus_speaking.__proto__ || (0, _getPrototypeOf2.default)(ConfAudioStatus_speaking)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfAudioStatus_speaking, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "ConfAudioStatus_speaking disable" : "ConfAudioStatus_speaking" },
        _react2.default.createElement("path", { d: "M21.7 19.1V28l-.7.4c-.3.2-.4 1.2-.1 2.4.1.5.2.7.3 1.5 0 .3.1.4.1.5.1.3.2.5.7 1l.2.2c.3.2.4.3 1.2.6.7.3 1.2.6 1.6 1.1.4.5 1.2 1.9 1.4 2.5.2.5.4 1.1.6 1.7.2 1 .3 2.4.3 4.2v.3l-.6 1.2c-1 2-4.2 4.1-8.1 4.4-2.4.2-4.7 1.5-6.9 3.8-1.3 1.5-2.1 3.5-2.3 6 6.9.1 22.2.1 45.8 0-.2-1.6-.5-2.7-.9-3.5-1.6-2.8-3.5-4.7-5.8-5.5-.8-.3-1.5-.5-2.2-.7-.3-.1-.6-.1-.9-.2-.1 0-.7-.1-.9-.2-.6-.1-1-.2-1.3-.3-.1 0-.1 0-.2-.1-1.5-.5-2.4-1.1-3.4-2l-1.1-1.1c-1.1-1.1-1.5-2-1.9-3.7-.2-1.2-.2-2.4.2-3.5.1-.2.1-.4.2-.5.1-.2.1-.3.2-.4.2-.5.5-.8 1.6-2 .1-.1.9-1.1 1.8-2.4.4-.6.9-.8 1.5-.8.2-.4.3-.8.4-1.6 0 0 .1-1 .2-1.3.2-1 0-1.8-.5-2.5l-.3-.4v-8.7l-2.6-2.9-.3-.6c-.4-1.3-.7-2.3-.9-3.1-8.8.4-14.1 2.8-16.4 7.3zm31.4 21.3l-2.3-2.2c1.8-1.8 2.8-4.2 2.8-6.8 0-2.5-1-4.9-2.7-6.7l2.3-2.2c2.3 2.4 3.5 5.5 3.5 8.9.1 3.4-1.2 6.6-3.6 9zm6.9 5.3l-2.3-2.2c3.2-3.3 5-7.6 5-12.2 0-4.5-1.7-8.8-4.8-12l2.3-2.2c3.6 3.8 5.6 8.8 5.6 14.2.1 5.4-2.1 10.5-5.8 14.4zm-19.3-7.4c-.9 1-1.1 1.2-1.2 1.4-.1.2-.1.2-.2.5-.2.6-.2 1.2-.1 1.9.2 1.2.4 1.6 1.1 2.2l.9.9c.7.6 1.2.9 2.4 1.3.1 0 .1 0 .2.1.3.1.6.2 1 .3.2 0 .8.2.9.2.4.1.7.2 1 .2.9.2 1.7.4 2.5.8 3 1.1 5.5 3.5 7.4 6.9.8 1.5 1.3 3.6 1.4 6.4l.1 1.6h-1.6c-26.5.1-42.9.1-49 0H6v-1.5c0-4 1-7.2 3.2-9.6 2.8-2.8 5.7-4.4 8.9-4.7 2.9-.3 5.2-1.8 5.7-2.8.1-.3.2-.5.3-.6 0-1.4-.1-2.5-.2-3.3-.1-.4-.2-.8-.4-1.1-.2-.4-.9-1.6-1.1-2l-.3-.1c-1.1-.5-1.3-.5-1.9-1-.2-.1-.3-.3-.5-.4-.8-.8-1.2-1.4-1.5-2.2-.1-.3-.1-.5-.2-1-.1-.6-.1-.8-.2-1.1-.5-1.9-.3-4 .7-5.2v-7.7l.1-.6C21.7 12 28.6 9 39.1 9h1.2l.2 1.2c.1.5.4 1.8 1 3.7l3.2 3.5v8.9c.7 1.2 1 2.7.7 4.3 0 .3-.2 1.2-.2 1.3-.2 1.2-.4 1.8-.7 2.6-.1.2-.3.5-.5.7-.3.4-.7.6-1.1.7-.2 0-.3.1-.5.1-.9 1.3-1.5 2.1-1.7 2.3z" })
      );
    }
  }]);
  return ConfAudioStatus_speaking;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = ConfAudioStatus_speaking;

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallFullBox = function (_Component) {
  (0, _inherits3.default)(CallFullBox, _Component);

  function CallFullBox() {
    (0, _classCallCheck3.default)(this, CallFullBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallFullBox.__proto__ || (0, _getPrototypeOf2.default)(CallFullBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallFullBox, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-full-box disable" : "call-full-box" },
        _react2.default.createElement("path", { d: "M12,16.5v39h48v-39H12z M9.4,13.9c0.3-0.3,0.6-0.4,1.1-0.4h51c0.4,0,0.8,0.2,1.1,0.4S63,14.6,63,15v42 c0,0.4-0.2,0.8-0.4,1.1s-0.6,0.4-1.1,0.4h-51c-0.4,0-0.8-0.2-1.1-0.4C9.2,57.8,9,57.4,9,57V15C9,14.6,9.2,14.2,9.4,13.9z M18,47.5 l8.9-9l2.1,2.1l-8.8,8.9h9.7v3H18c-1.7,0-3-1.3-3-3V37.6h3V47.5z M54,24.5l-8.9,9l-2.1-2.1l8.8-8.9H42v-3h12c1.7,0,3,1.3,3,3v12h-3 V24.5z" })
      );
    }
  }]);
  return CallFullBox;
}(_react.Component);

exports.default = CallFullBox;

CallFullBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallFullBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallExitFullBox = function (_Component) {
  (0, _inherits3.default)(CallExitFullBox, _Component);

  function CallExitFullBox() {
    (0, _classCallCheck3.default)(this, CallExitFullBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallExitFullBox.__proto__ || (0, _getPrototypeOf2.default)(CallExitFullBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallExitFullBox, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-exit-full-box disable" : "call-exit-full-box" },
        _react2.default.createElement("path", { d: "M12,16.5v39h48v-39H12z M9.4,13.9c0.3-0.3,0.6-0.4,1.1-0.4h51c0.4,0,0.8,0.2,1.1,0.4S63,14.6,63,15v42 c0,0.4-0.2,0.8-0.4,1.1s-0.6,0.4-1.1,0.4h-51c-0.4,0-0.8-0.2-1.1-0.4C9.2,57.8,9,57.4,9,57V15C9,14.6,9.2,14.2,9.4,13.9z M42,32.5 l11.9-12l2.1,2.1L44.3,34.5h9.7v3H42c-1.7,0-3-1.3-3-3V22.6h3V32.5z M30,39.5L18,51.5l-2.1-2.1l11.8-11.9H18v-3h12c1.7,0,3,1.3,3,3 v12h-3V39.5z" })
      );
    }
  }]);
  return CallExitFullBox;
}(_react.Component);

exports.default = CallExitFullBox;

CallExitFullBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallExitFullBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallParticipantsBox = function (_Component) {
		(0, _inherits3.default)(CallParticipantsBox, _Component);

		function CallParticipantsBox() {
				(0, _classCallCheck3.default)(this, CallParticipantsBox);
				return (0, _possibleConstructorReturn3.default)(this, (CallParticipantsBox.__proto__ || (0, _getPrototypeOf2.default)(CallParticipantsBox)).apply(this, arguments));
		}

		(0, _createClass3.default)(CallParticipantsBox, [{
				key: "render",
				value: function render() {
						var disable = this.props.disable;

						return _react2.default.createElement(
								"svg",
								{ viewBox: "0 0 72 72", className: disable ? "call-participants-box disable" : "call-participants-box" },
								_react2.default.createElement("path", { d: "M51.2,31c-0.4,0.5-0.7,0.6-1.3,0.6c-0.8,1-1.3,1.7-1.5,1.9c-0.7,0.8-0.9,1-1,1.2c0,0.1,0,0.1-0.1,0.3 c-0.2,0.5-0.2,1.1-0.1,1.7c0.2,1,0.4,1.3,0.9,1.9c0.4,0.4,0.6,0.6,0.8,0.8c0.6,0.5,1.1,0.8,2,1.1c0.1,0,0.1,0,0.2,0.1 c0.2,0.1,0.5,0.1,0.9,0.2c2.3,0.5,2.4,0.5,3.7,1c2.5,0.9,4.5,2.8,6.1,5.6c0.7,1.2,1,2.9,1.1,5.2l0,1.2l-1.2,0c-3,0-4.6,0-7.3,0 l-1.2-2.2c2.3,0,4.8,0,7.4,0c-0.1-1.4-0.4-2.4-0.8-3c-1.3-2.4-3-3.9-4.9-4.6c-1.1-0.4-1.1-0.4-3.4-0.9c-0.5-0.1-0.8-0.2-1.1-0.3 c-0.1,0-0.1,0-0.2-0.1c-1.2-0.4-2-0.9-2.8-1.6c-0.2-0.2-0.4-0.4-0.9-0.9c-0.9-0.9-1.2-1.6-1.5-3c-0.2-1-0.2-1.9,0.2-2.8 c0.1-0.2,0.1-0.3,0.1-0.4c0-0.1,0.1-0.2,0.1-0.3c0.2-0.4,0.4-0.6,1.3-1.6c0.1-0.1,0.7-1,1.5-2c0.3-0.5,0.7-0.6,1.3-0.7 c0.2-0.3,0.3-0.7,0.4-1.4c0,0,0.1-0.8,0.2-1.1c0.1-0.9,0-1.6-0.4-2.2l-0.2-0.3v-7.2l-2.2-2.4L47,14.3c-0.3-1.1-0.6-2-0.7-2.7 c-4.5,0.1-8,0.9-10.4,2.4c-0.8-0.1-1.9-0.1-3.5,0c0.1-0.1,0.5-0.5,0.6-0.6c3-2.8,7.8-4.1,14.3-4.1h0.9l0.2,0.9 c0.1,0.5,0.4,1.5,0.8,3.1l2.6,2.9v7.4c0.6,1,0.8,2.2,0.6,3.5c0,0.3-0.2,1-0.2,1.1c-0.1,0.9-0.3,1.5-0.6,2.1 C51.5,30.6,51.3,30.8,51.2,31z M22.5,26v7.5l-0.7,0.4c-0.1,0.1-0.2,0.8,0,1.7c0.1,0.4,0.2,0.6,0.2,1.3c0,0.2,0,0.3,0.1,0.4 c0.1,0.2,0.2,0.3,0.5,0.7c0,0,0.1,0.1,0.1,0.1c0.2,0.2,0.3,0.2,0.9,0.5c0.6,0.3,1.1,0.5,1.4,1c0.3,0.5,1,1.6,1.2,2.1 c0.2,0.5,0.4,1,0.5,1.5c0.2,0.9,0.3,2.1,0.3,3.6l0,0.3l-0.5,1.1c-0.9,1.7-3.6,3.5-6.9,3.8c-1.9,0.2-3.8,1.2-5.6,3 c-1,1.1-1.6,2.7-1.9,4.6c5.8,0.1,18.3,0,37.4,0c-0.1-1.1-0.4-1.9-0.7-2.5c-1.3-2.3-2.8-3.8-4.7-4.5c-1.1-0.4-1.1-0.4-3.3-0.9 c-0.5-0.1-0.8-0.2-1.1-0.3c-0.1,0-0.1,0-0.2-0.1c-1.3-0.4-2.1-0.9-2.9-1.7c-0.3-0.2-0.4-0.4-0.9-0.9c-0.9-1-1.3-1.7-1.6-3.2 c-0.2-1-0.2-2.1,0.2-3c0.1-0.2,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.2-0.4c0.2-0.4,0.4-0.7,1.4-1.7c0.1-0.1,0.7-0.9,1.5-2 c0.4-0.5,0.8-0.7,1.3-0.8c0.1-0.2,0.2-0.6,0.3-1.1c0,0,0.1-0.8,0.2-1.1c0.1-0.8,0-1.4-0.3-1.9l-0.3-0.4v-7.2l-2.1-2.3l-0.3-0.6 c-0.3-1-0.5-1.8-0.7-2.4C28.6,20.6,24.3,22.5,22.5,26z M38.2,42.1c-0.7,0.8-0.9,1-0.9,1.1c0,0.1-0.1,0.2-0.1,0.4 C37,44,37,44.5,37.1,45c0.2,0.9,0.3,1.2,0.8,1.7c0.4,0.4,0.6,0.6,0.8,0.8c0.5,0.5,1,0.7,1.9,1c0.1,0,0.1,0,0.2,0.1 c0.2,0.1,0.5,0.1,0.8,0.2c2.4,0.5,2.5,0.5,3.7,1c2.6,0.9,4.6,2.9,6.3,5.8c0.7,1.2,1.1,3,1.2,5.4l0.1,1.6l-1.6,0 c-22,0.1-35.5,0.1-40.7,0l-1.5,0v-1.5c0-3.3,0.9-6.1,2.7-8.1c2.3-2.4,4.8-3.7,7.5-4c2.3-0.2,4.1-1.4,4.5-2.2 c0.1-0.2,0.2-0.3,0.2-0.4c0-1.1-0.1-2-0.2-2.6c-0.1-0.3-0.2-0.6-0.3-0.9c-0.2-0.3-0.7-1.3-0.9-1.6c-1.1-0.4-1.3-0.5-1.8-0.9 c-0.1-0.1-0.3-0.2-0.4-0.4c-0.7-0.7-1.1-1.3-1.3-2c-0.1-0.3-0.1-0.5-0.2-0.8c-0.1-0.5-0.1-0.6-0.2-0.9c-0.5-1.6-0.3-3.4,0.6-4.5 v-6.3l0.1-0.6c2.5-5.2,8.2-7.7,17-7.7h1.2l0.2,1.2c0.1,0.4,0.4,1.5,0.8,3l2.6,2.9v7.4c0.6,1.1,0.8,2.3,0.6,3.7c0,0.3-0.2,1-0.2,1.1 c-0.2,1-0.3,1.6-0.6,2.2c-0.1,0.2-0.2,0.4-0.4,0.6c-0.4,0.6-0.8,0.7-1.4,0.8C38.9,41.3,38.4,41.9,38.2,42.1z" })
						);
				}
		}]);
		return CallParticipantsBox;
}(_react.Component);

exports.default = CallParticipantsBox;

CallParticipantsBox.propTypes = {
		disable: _propTypes2.default.bool
};
CallParticipantsBox.defaultProps = {
		disable: false
};

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallMuteBox = function (_Component) {
  (0, _inherits3.default)(CallMuteBox, _Component);

  function CallMuteBox() {
    (0, _classCallCheck3.default)(this, CallMuteBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallMuteBox.__proto__ || (0, _getPrototypeOf2.default)(CallMuteBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallMuteBox, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-mute-box disable" : "call-mute-box" },
        _react2.default.createElement("path", { d: "M47.8,18v16.9c0,6.5-5.3,11.8-11.8,11.8s-11.8-5.3-11.8-11.8V18c0-6.5,5.3-11.8,11.8-11.8S47.8,11.5,47.8,18z M37.5,54.9 v10.8h-3V54.9c-10.4-0.8-18.7-9.5-18.7-20.1h3C18.8,44.3,26.5,52,36,52s17.2-7.7,17.2-17.2h3C56.2,45.5,47.9,54.2,37.5,54.9z M27.2,18v16.9c0,4.8,3.9,8.8,8.8,8.8s8.8-3.9,8.8-8.8V18c0-4.8-3.9-8.8-8.8-8.8S27.2,13.2,27.2,18z" })
      );
    }
  }]);
  return CallMuteBox;
}(_react.Component);

exports.default = CallMuteBox;

CallMuteBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallMuteBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallUnMuteBox = function (_Component) {
  (0, _inherits3.default)(CallUnMuteBox, _Component);

  function CallUnMuteBox() {
    (0, _classCallCheck3.default)(this, CallUnMuteBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallUnMuteBox.__proto__ || (0, _getPrototypeOf2.default)(CallUnMuteBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallUnMuteBox, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-un-mute-box disable" : "call-un-mute-box" },
        _react2.default.createElement("path", { d: "M46.6,40.1l-2.3-2.3c0.3-0.9,0.5-1.9,0.5-2.9V18c0-4.8-3.9-8.8-8.8-8.8c-4.8,0-8.8,3.9-8.8,8.8v2.8l-3-3 C24.4,11.4,29.6,6.3,36,6.3c6.5,0,11.8,5.3,11.8,11.8v16.9C47.8,36.8,47.3,38.5,46.6,40.1z M52.7,46.2c2.2-3.2,3.5-7.1,3.5-11.4h-3 c0,3.4-1,6.5-2.7,9.2L52.7,46.2z M40,46c-1.2,0.4-2.6,0.7-4,0.7c-6.5,0-11.8-5.3-11.8-11.8v-4.7l3,3v1.7c0,4.8,3.9,8.8,8.8,8.8 c0.5,0,1,0,1.5-0.1L40,46z M46.2,52.2c-2.6,1.5-5.5,2.5-8.7,2.7v10.8h-3V54.9c-10.4-0.8-18.7-9.5-18.7-20.1h3 C18.8,44.3,26.5,52,36,52c2.9,0,5.6-0.7,8-2L46.2,52.2z" }),
        _react2.default.createElement("rect", { x: "34.5", y: "2.1", transform: "matrix(0.7058 -0.7084 0.7084 0.7058 -14.9116 36.0964)", fill: "#F34B4B", width: "3", height: "67.8" })
      );
    }
  }]);
  return CallUnMuteBox;
}(_react.Component);

exports.default = CallUnMuteBox;

CallUnMuteBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallUnMuteBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallSpeakerBox = function (_Component) {
  (0, _inherits3.default)(CallSpeakerBox, _Component);

  function CallSpeakerBox() {
    (0, _classCallCheck3.default)(this, CallSpeakerBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallSpeakerBox.__proto__ || (0, _getPrototypeOf2.default)(CallSpeakerBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallSpeakerBox, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-speaker-box disable" : "call-speaker-box" },
        _react2.default.createElement("path", { d: "M51.1,60.4L49.3,58c6.7-5,10.7-12.8,10.7-21.3c0-9.3-4.8-17.8-12.6-22.6l1.6-2.5c8.6,5.4,14,14.8,14,25.1 C62.9,46.2,58.5,54.9,51.1,60.4z M45.1,51.6l-1.7-2.5c4.2-2.9,6.7-7.6,6.7-12.7c0-5.7-3.1-10.8-8-13.5l1.5-2.6 c5.8,3.2,9.5,9.3,9.5,16.1C53.1,42.6,50.1,48.2,45.1,51.6z M35.1,16.6L20.4,29.4h-8.3v13.3h8.8l14.2,12.6V16.6z M19.3,26.4l16.2-14 c0.7-0.6,1.7-0.5,2.2,0.2c0.3,0.5,0.3,0.5,0.4,1v45c0,0.9-0.7,1.6-1.6,1.6c-0.6-0.1-0.6-0.1-1-0.4l-15.7-14h-8.8 c-1,0-1.9-0.8-1.9-1.9V28.2c0-1,0.8-1.9,1.9-1.9H19.3z" })
      );
    }
  }]);
  return CallSpeakerBox;
}(_react.Component);

exports.default = CallSpeakerBox;

CallSpeakerBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallSpeakerBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallCloseSpeakerBox = function (_Component) {
  (0, _inherits3.default)(CallCloseSpeakerBox, _Component);

  function CallCloseSpeakerBox() {
    (0, _classCallCheck3.default)(this, CallCloseSpeakerBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallCloseSpeakerBox.__proto__ || (0, _getPrototypeOf2.default)(CallCloseSpeakerBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallCloseSpeakerBox, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-close-speaker-box disable" : "call-close-speaker-box" },
        _react2.default.createElement("path", { d: "M30.2,28.1L46,14.4c0.7-0.6,1.7-0.5,2.2,0.2c0.3,0.5,0.3,0.5,0.4,1v30.8l-3-3V18.7L32.3,30.2L30.2,28.1z M48.6,58.9v1.7 c0,0.9-0.7,1.6-1.6,1.6c-0.6-0.1-0.6-0.1-1-0.4l-15.7-14h-8.8c-1,0-1.9-0.8-1.9-1.9V30.3c0-0.1,0-0.3,0-0.4l3,3v11.9h8.8l14.2,12.6 v-1.5L48.6,58.9z" }),
        _react2.default.createElement("rect", { x: "32.6", y: "4.1", transform: "matrix(0.7058 -0.7084 0.7084 0.7058 -16.8865 35.3175)", fill: "#F34B4B", width: "3", height: "67.8" })
      );
    }
  }]);
  return CallCloseSpeakerBox;
}(_react.Component);

exports.default = CallCloseSpeakerBox;

CallCloseSpeakerBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallCloseSpeakerBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallCameraBox = function (_Component) {
  (0, _inherits3.default)(CallCameraBox, _Component);

  function CallCameraBox() {
    (0, _classCallCheck3.default)(this, CallCameraBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallCameraBox.__proto__ || (0, _getPrototypeOf2.default)(CallCameraBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallCameraBox, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-camera-box disable" : "call-camera-box" },
        _react2.default.createElement("path", { d: "M14.9,30c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3C17.9,28.6,16.6,30,14.9,30z M8.9,21v30h40.5V21H8.9z M52.4,30 l13.6-6.8v25.7L52.4,42v9c0,1.7-1.3,3-3,3H8.9c-1.7,0-3-1.3-3-3V21c0-1.7,1.3-3,3-3h40.5c1.7,0,3,1.3,3,3V30z" })
      );
    }
  }]);
  return CallCameraBox;
}(_react.Component);

exports.default = CallCameraBox;

CallCameraBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallCameraBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallCloseCameraBox = function (_Component) {
  (0, _inherits3.default)(CallCloseCameraBox, _Component);

  function CallCloseCameraBox() {
    (0, _classCallCheck3.default)(this, CallCloseCameraBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallCloseCameraBox.__proto__ || (0, _getPrototypeOf2.default)(CallCloseCameraBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallCloseCameraBox, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-close-camera-box disable" : "call-close-camera-box" },
        _react2.default.createElement("path", { d: "M14.9,30c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3C17.9,28.6,16.6,30,14.9,30z M24.1,18h25.3c1.7,0,3,1.3,3,3v9 l13.6-6.8v25.7L52.4,42v4.3l-3-3V21H27.1L24.1,18z M11.6,18l3,3H8.9v30h35.7l3,3H8.9c-1.7,0-3-1.3-3-3V21c0-1.7,1.3-3,3-3H11.6z" }),
        _react2.default.createElement("rect", { x: "32.6", y: "4.1", transform: "matrix(0.7058 -0.7084 0.7084 0.7058 -16.8865 35.3175)", fill: "#F34B4B", width: "3", height: "67.8" })
      );
    }
  }]);
  return CallCloseCameraBox;
}(_react.Component);

exports.default = CallCloseCameraBox;

CallCloseCameraBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallCloseCameraBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TalkRequestSvg = function (_Component) {
		(0, _inherits3.default)(TalkRequestSvg, _Component);

		function TalkRequestSvg() {
				(0, _classCallCheck3.default)(this, TalkRequestSvg);
				return (0, _possibleConstructorReturn3.default)(this, (TalkRequestSvg.__proto__ || (0, _getPrototypeOf2.default)(TalkRequestSvg)).apply(this, arguments));
		}

		(0, _createClass3.default)(TalkRequestSvg, [{
				key: "render",
				value: function render() {
						var disable = this.props.disable;

						return _react2.default.createElement(
								"svg",
								{ viewBox: "0 0 30 30", className: disable ? "talk-request-box disable" : "talk-request-box" },
								_react2.default.createElement("path", { d: "M16.8,25H4.5C4.2,25,4,24.7,4,24.4l0.2-1.3c0.5-2.3,2.6-4.3,4.9-4.3h0.3c0.7,0,1.1-0.3,1.1-0.9v-0.7c-0.4-0.3-0.8-0.7-1-1.2 c-0.1-0.2-0.2-0.4-0.3-0.5c-0.5-0.1-0.8-0.5-0.9-1.1l-0.2-1.9c0-0.5,0.2-0.9,0.6-1.2L8.6,9.3c0-0.1,0-0.2,0.1-0.3L9,8.4 C10.1,6.8,11.9,6,14,6l2,0c0.3,0,0.5,0.2,0.5,0.5l0,1.5l0.8,0.9c0.1,0.1,0.1,0.2,0.1,0.4l-0.1,2c0.4,0.2,0.7,0.7,0.6,1.2l-0.2,1.9 c-0.1,0.5-0.4,0.9-0.9,1.1c-0.1,0.3-0.2,0.6-0.4,0.9c-0.8,0.7-1.4,1.5-1.7,2.5c-0.1-0.3-0.2-0.6-0.2-0.9V17c0-0.2,0.1-0.3,0.2-0.4 c0.6-0.4,1-1,1.2-1.8c0.1-0.2,0.3-0.4,0.5-0.4c0.1,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.2-0.2l0.2-1.9c0-0.1-0.1-0.2-0.2-0.2 c-0.3,0-0.5-0.2-0.5-0.5l0.1-2.2l-0.7-0.9c-0.1-0.1-0.1-0.2-0.1-0.3l0-1.2L14,7c-1.8,0-3.2,0.7-4.1,2L9.6,9.4l0.1,2.3 c0,0.3-0.2,0.5-0.5,0.5c-0.1,0-0.2,0.1-0.2,0.2l0.2,1.9c0,0.1,0.1,0.2,0.2,0.2c-0.1,0-0.1,0-0.1,0c0.3-0.1,0.6,0.1,0.6,0.3 c0.1,0.2,0.2,0.5,0.3,0.7c0.2,0.4,0.5,0.7,0.9,1c0.1,0.1,0.2,0.3,0.2,0.4v0.9c0,1.2-0.9,1.9-2.1,1.9H9.1c-1.8,0-3.5,1.6-3.9,3.4 L5.1,24h10.7C16.1,24.4,16.4,24.7,16.8,25z" }),
								_react2.default.createElement("path", { fill: "#F34B4B", d: "M18.5,20h4c0.3,0,0.5,0.2,0.5,0.5S22.8,21,22.5,21h-4c-0.3,0-0.5-0.2-0.5-0.5S18.2,20,18.5,20z M20.5,24 c1.9,0,3.5-1.6,3.5-3.5S22.4,17,20.5,17S17,18.6,17,20.5S18.6,24,20.5,24z M20.5,25C18,25,16,23,16,20.5s2-4.5,4.5-4.5 s4.5,2,4.5,4.5S23,25,20.5,25z" })
						);
				}
		}]);
		return TalkRequestSvg;
}(_react.Component);

exports.default = TalkRequestSvg;

TalkRequestSvg.propTypes = {
		disable: _propTypes2.default.bool
};
TalkRequestSvg.defaultProps = {
		disable: false
};

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TalkCancelSvg = function (_Component) {
		(0, _inherits3.default)(TalkCancelSvg, _Component);

		function TalkCancelSvg() {
				(0, _classCallCheck3.default)(this, TalkCancelSvg);
				return (0, _possibleConstructorReturn3.default)(this, (TalkCancelSvg.__proto__ || (0, _getPrototypeOf2.default)(TalkCancelSvg)).apply(this, arguments));
		}

		(0, _createClass3.default)(TalkCancelSvg, [{
				key: "render",
				value: function render() {
						var disable = this.props.disable;

						return _react2.default.createElement(
								"svg",
								{ viewBox: "0 0 30 30", className: disable ? "talk-cancel-box disable" : "talk-cancel-box" },
								_react2.default.createElement("path", { d: "M20.7,23.3c-0.4-1.9-2.1-3.5-3.9-3.5h-0.3c-1.2,0-2.1-0.7-2.1-1.9V17c0-0.2,0.1-0.3,0.2-0.4c0.6-0.4,1-1,1.2-1.8 c0.1-0.2,0.3-0.4,0.5-0.4c0.1,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.2-0.2l0.2-1.9c0-0.1-0.1-0.2-0.2-0.2c-0.3,0-0.5-0.2-0.5-0.5l0.1-2.2 l-0.7-0.9c-0.1-0.1-0.1-0.2-0.1-0.3l0-1.2l-1.6,0c-1.8,0-3.2,0.7-4.1,2L9.5,9.4l0.1,2.3c0,0.3-0.2,0.5-0.5,0.5 c-0.1,0-0.2,0.1-0.2,0.2l0.2,1.9c0,0.1,0.1,0.2,0.2,0.2c-0.1,0-0.1,0-0.1,0c0.3-0.1,0.6,0.1,0.6,0.3c0.1,0.2,0.2,0.5,0.3,0.7 c0.2,0.4,0.5,0.7,0.9,1c0.1,0.1,0.2,0.3,0.2,0.4v0.9c0,1.2-0.9,1.9-2.1,1.9H9c-1.8,0-3.5,1.6-3.9,3.4L5,24h15.8L20.7,23.3z M15.5,17.9c0,0.6,0.4,0.9,1.1,0.9h0.3c2.3,0,4.4,1.9,4.9,4.3l0.2,1.3c0,0.3-0.2,0.6-0.5,0.6h-17C4.2,25,4,24.7,4,24.4l0.2-1.3 c0.5-2.3,2.6-4.3,4.9-4.3h0.3c0.7,0,1.1-0.3,1.1-0.9v-0.7c-0.4-0.3-0.8-0.7-1-1.2c-0.1-0.2-0.2-0.4-0.3-0.5 c-0.5-0.1-0.8-0.5-0.9-1.1l-0.2-1.9c0-0.5,0.2-0.9,0.6-1.2L8.6,9.3c0-0.1,0-0.2,0.1-0.3L9,8.4C10.1,6.8,11.9,6,14,6l2,0 c0.3,0,0.5,0.2,0.5,0.5l0,1.5l0.8,0.9c0.1,0.1,0.1,0.2,0.1,0.4l-0.1,2c0.4,0.2,0.7,0.7,0.6,1.2l-0.2,1.9c-0.1,0.5-0.4,0.9-0.9,1.1 c-0.3,0.7-0.7,1.4-1.3,1.8V17.9z M21.8,10.1c0.7,1.1,1.2,2.4,1.2,3.9s-0.4,2.8-1.2,3.9L21,17.3c0.6-1,1-2.1,1-3.3s-0.4-2.4-1-3.3 L21.8,10.1z M25.2,20.1l-0.8-0.6C25.4,18,26,16.1,26,14c0-2.1-0.6-4-1.7-5.5l0.8-0.6C26.3,9.6,27,11.7,27,14 C27,16.3,26.3,18.4,25.2,20.1z" })
						);
				}
		}]);
		return TalkCancelSvg;
}(_react.Component);

exports.default = TalkCancelSvg;

TalkCancelSvg.propTypes = {
		disable: _propTypes2.default.bool
};
TalkCancelSvg.defaultProps = {
		disable: false
};

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallShareBox = function (_Component) {
  (0, _inherits3.default)(CallShareBox, _Component);

  function CallShareBox() {
    (0, _classCallCheck3.default)(this, CallShareBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallShareBox.__proto__ || (0, _getPrototypeOf2.default)(CallShareBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallShareBox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "call-share-box";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M7,6v13h17V6H7z M15,23v-3H6.9C6.4,20,6,19.6,6,19V6c0-0.6,0.4-1,0.9-1H24c0.5,0,1,0.4,1,1v13c0,0.6-0.4,1-1,1h-8v3h3.6 c0.2,0,0.4,0.2,0.4,0.5S19.8,24,19.6,24h-8.1c-0.2,0-0.4-0.2-0.4-0.5s0.2-0.5,0.4-0.5H15z" }),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { d: "M11.5,12c-0.3,0-0.5,0.2-0.5,0.5v4c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-4C12,12.2,11.8,12,11.5,12z" }),
          _react2.default.createElement("path", { d: "M15.5,9C15.2,9,15,9.2,15,9.5v7c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-7C16,9.2,15.8,9,15.5,9z" }),
          _react2.default.createElement("path", { d: "M19.5,12c-0.3,0-0.5,0.2-0.5,0.5v4c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-4C20,12.2,19.8,12,19.5,12z" })
        )
      );
    }
  }]);
  return CallShareBox;
}(_react.Component);

exports.default = CallShareBox;

CallShareBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallShareBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallAddBox = function (_Component) {
  (0, _inherits3.default)(CallAddBox, _Component);

  function CallAddBox() {
    (0, _classCallCheck3.default)(this, CallAddBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallAddBox.__proto__ || (0, _getPrototypeOf2.default)(CallAddBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallAddBox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "call-add-box";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M17.6,18c-0.3,0.2-0.5,0.5-0.8,0.8c-0.5-0.3-0.8-0.9-0.8-1.6v-0.9c0-0.2,0.1-0.3,0.2-0.4c0.6-0.4,1.1-1.1,1.3-1.8 c0.1-0.2,0.3-0.4,0.5-0.4c0.1,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.2-0.2l0.2-1.9c0-0.1-0.1-0.2-0.2-0.2c-0.3,0-0.5-0.2-0.5-0.5L18,8.5 l-0.8-0.9c-0.1-0.1-0.1-0.2-0.1-0.3l0-1.3l-1.6,0c-1.9,0-3.4,0.7-4.3,2l-0.3,0.4l0.1,2.4c0,0.3-0.2,0.5-0.5,0.5 c-0.1,0-0.2,0.1-0.2,0.2l0.2,1.9c0,0.1,0.1,0.2,0.2,0.2c-0.1,0-0.1,0-0.1,0c0.3-0.1,0.6,0.1,0.6,0.4c0.1,0.2,0.2,0.5,0.3,0.7 c0.2,0.4,0.6,0.8,1,1c0.1,0.1,0.2,0.3,0.2,0.4v0.9c0,1.2-0.9,2-2.2,2h-0.3c-1.9,0-3.7,1.6-4.1,3.5L6,23h10v1H6c-1,0-1-0.3-1-0.6 l0.2-0.9c0.5-2.4,2.8-4.4,5.2-4.4h0.3c0.7,0,1.1-0.3,1.1-0.9v-0.7c-0.4-0.3-0.8-0.7-1.1-1.2c-0.1-0.2-0.2-0.4-0.3-0.6 c-0.5-0.1-0.9-0.5-0.9-1.1l-0.2-1.9c-0.1-0.5,0.2-1,0.6-1.2L9.8,8.4c0-0.1,0-0.2,0.1-0.3l0.4-0.6c1.2-1.6,3-2.5,5.2-2.5l2.2,0 c0.3,0,0.5,0.2,0.5,0.5l0,1.6L19,8c0.1,0.1,0.1,0.2,0.1,0.4l-0.1,2c0.4,0.2,0.7,0.7,0.7,1.2l-0.2,1.9c-0.1,0.5-0.5,1-0.9,1.1 c-0.3,0.8-0.8,1.4-1.4,1.9v0.7C17.2,17.6,17.3,17.8,17.6,18z" }),
        _react2.default.createElement("path", { d: "M23.5,21H21v-2.5c0-0.3-0.2-0.5-0.5-0.5S20,18.2,20,18.5V21h-2.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5H20v2.5 c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V22h2.5c0.3,0,0.5-0.2,0.5-0.5C24,21.2,23.8,21,23.5,21z" })
      );
    }
  }]);
  return CallAddBox;
}(_react.Component);

exports.default = CallAddBox;

CallAddBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallAddBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallMoreBox = function (_Component) {
  (0, _inherits3.default)(CallMoreBox, _Component);

  function CallMoreBox() {
    (0, _classCallCheck3.default)(this, CallMoreBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallMoreBox.__proto__ || (0, _getPrototypeOf2.default)(CallMoreBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallMoreBox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "call-more-box";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 13 30", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M6.5,23C5.7,23,5,22.3,5,21.5S5.7,20,6.5,20S8,20.7,8,21.5S7.3,23,6.5,23z M6.5,16C5.7,16,5,15.3,5,14.5 C5,13.7,5.7,13,6.5,13S8,13.7,8,14.5C8,15.3,7.3,16,6.5,16z M6.5,9C5.7,9,5,8.3,5,7.5S5.7,6,6.5,6S8,6.7,8,7.5S7.3,9,6.5,9z" })
      );
    }
  }]);
  return CallMoreBox;
}(_react.Component);

exports.default = CallMoreBox;

CallMoreBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallMoreBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallLeaveBox = function (_Component) {
  (0, _inherits3.default)(CallLeaveBox, _Component);

  function CallLeaveBox() {
    (0, _classCallCheck3.default)(this, CallLeaveBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallLeaveBox.__proto__ || (0, _getPrototypeOf2.default)(CallLeaveBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallLeaveBox, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-leave-box disable" : "call-leave-box" },
        _react2.default.createElement("path", { d: "M46,12.8H17.5c-2.5,0-4.5,2-4.5,4.5v37.5c0,2.5,2,4.5,4.5,4.5H46v3H17.5c-4.1,0-7.5-3.4-7.5-7.5V17.2c0-4.1,3.4-7.5,7.5-7.5 H46V12.8z M32.5,38.2v-3h23l-7.3-6.4l2-2.3l9.9,8.6l0.9,0.8l1,0.9l-1,0.8l-0.6,0.5l-10.2,8.6l-1.9-2.3l7.5-6.4H32.5z" })
      );
    }
  }]);
  return CallLeaveBox;
}(_react.Component);

exports.default = CallLeaveBox;

CallLeaveBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallLeaveBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallHangUpBox = function (_Component) {
  (0, _inherits3.default)(CallHangUpBox, _Component);

  function CallHangUpBox() {
    (0, _classCallCheck3.default)(this, CallHangUpBox);
    return (0, _possibleConstructorReturn3.default)(this, (CallHangUpBox.__proto__ || (0, _getPrototypeOf2.default)(CallHangUpBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallHangUpBox, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-hang-up-box disable" : "call-hang-up-box" },
        _react2.default.createElement("path", { d: "M23.9,39.1l0.4-2.7c0.3-2.5,2.4-4.4,4.9-4.4l11.9,0c2.4,0,4.5,1.9,4.9,4.4l0.4,2.7l11.8,6.1l5.5-5.5 c-8.7-9.1-18.3-13.4-28.9-13.1c-10.6,0.3-19.3,4.7-26.2,13.3l5,5.1L23.9,39.1z M45.2,41.4c-0.7-0.4-1.2-1.1-1.3-1.9l-0.4-2.7 c-0.2-1.3-1.2-2.2-2.4-2.2l-11.9,0c-1.2,0-2.3,0.9-2.4,2.2l-0.4,2.7c-0.1,0.8-0.6,1.5-1.3,1.9L14,47.5c-0.6,0.3-1.3,0.2-1.8-0.3 l-5.5-5.6c-0.9-0.9-1-2.4-0.1-3.4c7.4-9.1,16.8-13.9,28-14.2c11.3-0.3,21.5,4.4,30.7,13.9c1,1,0.9,2.6,0,3.6l-5.9,6 c-0.5,0.5-1.2,0.6-1.8,0.3L45.2,41.4z" })
      );
    }
  }]);
  return CallHangUpBox;
}(_react.Component);

exports.default = CallHangUpBox;

CallHangUpBox.propTypes = {
  disable: _propTypes2.default.bool
};
CallHangUpBox.defaultProps = {
  disable: false
};

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallItemHangup = function (_Component) {
  (0, _inherits3.default)(CallItemHangup, _Component);

  function CallItemHangup() {
    (0, _classCallCheck3.default)(this, CallItemHangup);
    return (0, _possibleConstructorReturn3.default)(this, (CallItemHangup.__proto__ || (0, _getPrototypeOf2.default)(CallItemHangup)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallItemHangup, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "call-item-hangup disable" : "call-item-hangup" },
        _react2.default.createElement("path", { d: "M15,30C6.7,30,0,23.3,0,15S6.7,0,15,0s15,6.7,15,15S23.3,30,15,30z M12.1,16 c0-0.2,0-0.3,0-0.4c0.2-0.1,0.8-0.3,1.7-0.4c0.9-0.1,2.5,0,3.5,0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0,0 c0,0.3,0,0.6,0,0.9c0,0.3,0.1,0.6,0.3,0.8c0.1,0.1,0.2,0.2,0.3,0.3l0.1,0l2.4,0.8c0.9,0.3,1.4,0.3,1.7,0c0.3-0.2,0.4-0.5,0.5-1.3 c0,0,0-0.3,0-0.3c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.3c0-0.3,0-0.6,0-0.8c0-0.6,0-1-0.2-1.3c-0.1-0.2-0.2-0.4-0.5-0.7 c-0.2-0.2-0.4-0.3-0.6-0.5c-0.2-0.2-0.4-0.3-0.7-0.4c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.8-0.4-1.3-0.5c-0.9-0.3-1.9-0.5-2.9-0.6 c-0.6-0.1-1.1-0.1-1.4-0.1c-3-0.1-5.5,0.5-7.2,1.6c-0.6,0.4-0.9,0.7-1.2,1.1c-0.2,0.3-0.2,0.4-0.3,0.7c0,0,0,0,0,0l0,0.1 c0,0,0,0.1,0,0.2c0,0.4,0,0.9,0,1.3c0,0.6,0.1,1,0.1,1.3c0,0.4,0.2,0.7,0.6,0.8c0.2,0.1,0.3,0.1,0.5,0c0,0,0.1,0,0.1,0 c0.1,0,0.2,0,0.5-0.1c0.4-0.1,0.8-0.1,1.2-0.2c0.2,0,0.3-0.1,0.5-0.1c0.7-0.1,1.1-0.2,1.2-0.3c0.5-0.2,0.6-0.5,0.6-1.2 c0,0,0,0,0-0.1c0-0.1,0-0.3,0-0.4C12.1,16.1,12.1,16.1,12.1,16z" })
      );
    }
  }]);
  return CallItemHangup;
}(_react.Component);

exports.default = CallItemHangup;

CallItemHangup.propTypes = {
  disable: _propTypes2.default.bool
};
CallItemHangup.defaultProps = {
  disable: false
};

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallItemResume = function (_Component) {
		(0, _inherits3.default)(CallItemResume, _Component);

		function CallItemResume() {
				(0, _classCallCheck3.default)(this, CallItemResume);
				return (0, _possibleConstructorReturn3.default)(this, (CallItemResume.__proto__ || (0, _getPrototypeOf2.default)(CallItemResume)).apply(this, arguments));
		}

		(0, _createClass3.default)(CallItemResume, [{
				key: "render",
				value: function render() {
						var disable = this.props.disable;

						return _react2.default.createElement(
								"svg",
								{ viewBox: "0 0 30 30", className: disable ? "call-item-resume disable" : "call-item-resume" },
								_react2.default.createElement("path", { d: "M15,30C6.7,30,0,23.3,0,15S6.7,0,15,0s15,6.7,15,15S23.3,30,15,30z M16.7,17.5 c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0-0.8-0.3-1.5-0.9c-0.7-0.6-1.8-1.8-2.3-2.6c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.1,0-0.1,0-0.2 c0,0,0,0,0,0c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.4-0.5,0.4-0.8c0-0.2,0-0.3,0-0.4l0-0.1l-1.2-2.3c-0.4-0.8-0.8-1.2-1.2-1.3 c-0.4-0.1-0.7,0.1-1.3,0.6c0,0-0.2,0.2-0.2,0.2C9.4,9,9.3,9.1,9.3,9.1c0,0-0.1,0.1-0.2,0.2C8.8,9.6,8.6,9.7,8.4,9.9 c-0.4,0.4-0.7,0.7-0.8,1c-0.1,0.2-0.1,0.5-0.1,0.8c0,0.2,0,0.5,0.1,0.7c0,0.3,0.1,0.5,0.2,0.8c0,0.2,0.1,0.3,0.1,0.4 C8,14,8.2,14.5,8.4,14.9c0.4,0.9,1,1.7,1.6,2.5c0.4,0.5,0.7,0.8,0.9,1.1c2.1,2.2,4.3,3.6,6.2,4c0.7,0.1,1.2,0.2,1.6,0.1 c0.3-0.1,0.4-0.1,0.7-0.3c0,0,0,0,0,0l0.1-0.1c0,0,0.1-0.1,0.2-0.1c0.3-0.3,0.6-0.6,0.9-0.9c0.4-0.4,0.6-0.7,0.8-1 c0.2-0.3,0.3-0.6,0.2-1c-0.1-0.2-0.2-0.3-0.3-0.4c0,0,0,0-0.1,0c0,0-0.2-0.2-0.4-0.3c-0.3-0.2-0.6-0.5-0.9-0.7 c-0.1-0.1-0.3-0.2-0.4-0.3c-0.5-0.4-0.9-0.6-1.1-0.7c-0.5-0.2-0.8-0.1-1.3,0.4c0,0,0,0-0.1,0.1C17,17.2,16.9,17.3,16.7,17.5 C16.7,17.5,16.7,17.5,16.7,17.5z M21.3,11.7c0.1,0,0.1-0.1,0.2-0.2c0.1-0.2,0.1-0.5-0.2-0.7l-2.2-1.4c-0.1,0-0.2-0.1-0.3-0.1 c-0.3,0-0.5,0.2-0.5,0.5v2.7c0,0.1,0,0.2,0.1,0.3c0.1,0.2,0.5,0.3,0.7,0.2L21.3,11.7z" })
						);
				}
		}]);
		return CallItemResume;
}(_react.Component);

exports.default = CallItemResume;

CallItemResume.propTypes = {
		disable: _propTypes2.default.bool
};
CallItemResume.defaultProps = {
		disable: false
};

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConsultTransferDoneSvg = function (_Component) {
		(0, _inherits3.default)(ConsultTransferDoneSvg, _Component);

		function ConsultTransferDoneSvg() {
				(0, _classCallCheck3.default)(this, ConsultTransferDoneSvg);
				return (0, _possibleConstructorReturn3.default)(this, (ConsultTransferDoneSvg.__proto__ || (0, _getPrototypeOf2.default)(ConsultTransferDoneSvg)).apply(this, arguments));
		}

		(0, _createClass3.default)(ConsultTransferDoneSvg, [{
				key: "render",
				value: function render() {
						var disable = this.props.disable;

						return _react2.default.createElement(
								"svg",
								{ viewBox: "0 0 24 24", className: disable ? "consult-transfer-done disable" : "consult-transfer-done" },
								_react2.default.createElement("polygon", { className: "st0", points: "14.7,9.3 13.6,8.1 14.2,7.6 15.3,8.8 19,5.4 16.3,5.2 16.4,4.5 20.3,4.7 20.3,4.7 20.3,4.7 20.1,8.3  19.3,8.2 19.5,6 15.3,9.9 14.7,9.3 " }),
								_react2.default.createElement("path", { d: "M18.5,16c-0.1-0.2-0.2-0.3-0.3-0.4c0,0,0,0-0.1,0c-0.1,0-0.2-0.2-0.4-0.3c-0.3-0.3-0.7-0.5-1-0.7 c-0.1-0.1-0.3-0.2-0.4-0.3c-0.6-0.4-1-0.7-1.1-0.7c-0.5-0.2-0.9-0.1-1.4,0.4c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.3 c0,0,0,0-0.1,0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.3,0-0.8-0.3-1.6-0.9c-0.8-0.6-1.9-1.9-2.5-2.8c-0.1-0.2-0.2-0.3-0.2-0.5 c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0.2-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.4-0.5,0.4-0.8c0-0.2,0-0.3,0-0.5l0-0.1L8.4,5.8 C8,4.9,7.6,4.5,7.1,4.5C6.7,4.4,6.4,4.5,5.8,5.1c0,0-0.2,0.2-0.3,0.2C5.5,5.3,5.4,5.4,5.3,5.5c0,0-0.1,0.1-0.2,0.2 C4.8,5.9,4.6,6.1,4.5,6.3C4,6.7,3.7,7.1,3.6,7.4C3.5,7.6,3.4,7.9,3.4,8.2c0,0.2,0,0.5,0.1,0.8c0,0.3,0.1,0.6,0.2,0.8 c0,0.2,0.1,0.3,0.1,0.4c0.2,0.5,0.3,0.9,0.6,1.4c0.5,0.9,1.1,1.8,1.7,2.7c0.4,0.5,0.8,0.9,1,1.1c2.2,2.3,4.5,3.8,6.7,4.2 c0.7,0.1,1.3,0.2,1.7,0.1c0.3-0.1,0.4-0.1,0.8-0.4c0,0,0,0,0,0l0.1-0.1c0,0,0.1-0.1,0.2-0.2c0.3-0.3,0.7-0.7,1-1 c0.4-0.4,0.7-0.8,0.9-1.1C18.6,16.7,18.7,16.3,18.5,16z M17.7,16.6c-0.2,0.3-0.4,0.6-0.8,1c-0.3,0.3-0.6,0.7-1,1 c-0.1,0.1-0.1,0.1-0.1,0.1c0,0,0,0-0.1,0c-0.5,0.3-0.8,0.4-1.8,0.2c-2-0.4-4.1-1.8-6.3-4c-0.2-0.2-0.5-0.6-0.9-1.1 c-0.6-0.8-1.2-1.7-1.7-2.5c-0.2-0.4-0.4-0.8-0.5-1.2c0-0.1,0-0.2-0.1-0.3C4.4,9.4,4.4,9.2,4.3,8.9c0-0.3-0.1-0.5-0.1-0.7 c0-0.2,0-0.4,0.1-0.5C4.4,7.5,4.7,7.2,5,6.9c0.2-0.2,0.4-0.4,0.6-0.6c0.1-0.1,0.2-0.2,0.2-0.2C6,6,6,5.9,6.1,5.9 c0,0,0.2-0.2,0.2-0.2C6.7,5.3,6.9,5.2,7,5.2c0.1,0,0.4,0.3,0.7,0.9l1.2,2.4c0,0,0,0.1,0,0.1c0,0.1-0.1,0.3-0.2,0.4 C8.5,9.3,8.3,9.5,8.1,9.7C8,9.8,7.9,9.8,7.9,9.8L7.8,10l0,0.2c0,0.1,0,0.3,0.1,0.6C7.9,11,8,11.2,8.2,11.5c0.6,0.9,1.8,2.3,2.7,2.9 c1.1,0.8,1.8,1.2,2.3,1.1l0.1,0l0.1-0.1c0.1-0.1,0.3-0.2,0.5-0.4c0,0,0,0,0.1-0.1c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0.1-0.1 c0.3-0.3,0.4-0.3,0.6-0.3c0.1,0,0.5,0.3,1,0.6c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.7,0.5,1,0.7c0.2,0.2,0.4,0.3,0.4,0.3c0,0,0,0,0,0 c0,0,0.1,0.1,0.1,0.1C17.8,16.4,17.8,16.4,17.7,16.6z" })
						);
				}
		}]);
		return ConsultTransferDoneSvg;
}(_react.Component);

exports.default = ConsultTransferDoneSvg;

ConsultTransferDoneSvg.propTypes = {
		disable: _propTypes2.default.bool
};
ConsultTransferDoneSvg.defaultProps = {
		disable: false
};

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallMinSvg = function (_Component) {
  (0, _inherits3.default)(CallMinSvg, _Component);

  function CallMinSvg() {
    (0, _classCallCheck3.default)(this, CallMinSvg);
    return (0, _possibleConstructorReturn3.default)(this, (CallMinSvg.__proto__ || (0, _getPrototypeOf2.default)(CallMinSvg)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallMinSvg, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-min-svg disable" : "call-min-svg" },
        _react2.default.createElement("path", { d: "M21,31.5h-9v24h33v-9h3V57c0,0.4-0.2,0.8-0.4,1.1s-0.6,0.4-1.1,0.4h-36c-0.4,0-0.8-0.2-1.1-0.4 C9.2,57.8,9,57.4,9,57V30c0-0.4,0.2-0.8,0.4-1.1c0.3-0.3,0.6-0.4,1.1-0.4H21V31.5z M40.5,31.1l-6,6L32.4,35l6.4-6.4h-4.3v-3H42 c0.4,0,0.8,0.2,1.1,0.4s0.4,0.6,0.4,1.1v7.5h-3V31.1z M27,40.5h33v-24H27V40.5z M24.4,43.1C24.2,42.8,24,42.4,24,42V15 c0-0.4,0.2-0.8,0.4-1.1s0.6-0.4,1.1-0.4h36c0.4,0,0.8,0.2,1.1,0.4S63,14.6,63,15v27c0,0.4-0.2,0.8-0.4,1.1s-0.6,0.4-1.1,0.4h-36 C25.1,43.5,24.7,43.3,24.4,43.1z" })
      );
    }
  }]);
  return CallMinSvg;
}(_react.Component);

exports.default = CallMinSvg;

CallMinSvg.propTypes = {
  disable: _propTypes2.default.bool
};
CallMinSvg.defaultProps = {
  disable: false
};

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignalOne = function (_Component) {
    (0, _inherits3.default)(SignalOne, _Component);

    function SignalOne() {
        (0, _classCallCheck3.default)(this, SignalOne);
        return (0, _possibleConstructorReturn3.default)(this, (SignalOne.__proto__ || (0, _getPrototypeOf2.default)(SignalOne)).apply(this, arguments));
    }

    (0, _createClass3.default)(SignalOne, [{
        key: "render",
        value: function render() {
            var disable = this.props.disable;

            return _react2.default.createElement(
                "svg",
                { viewBox: "0 0 72 72", className: disable ? "call-signal-1 disable" : "call-signal-1" },
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M-320,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-318.5,28.4-319.2,27.8-320,27.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-309.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-308,23.9-308.7,23.2-309.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-330.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-329,32.9-329.7,32.2-330.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-341,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-339.5,37.4-340.2,36.8-341,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-351.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-350,41.9-350.7,41.2-351.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M-228,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-226.5,28.4-227.2,27.8-228,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-217.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-216,23.9-216.7,23.2-217.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-238.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-237,32.9-237.7,32.2-238.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-249,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-247.5,37.4-248.2,36.8-249,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-259.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-258,41.9-258.7,41.2-259.5,41.2z" })
                ),
                _react2.default.createElement("path", { className: "st1", d: "M-136,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-134.5,28.4-135.2,27.8-136,27.8z" }),
                _react2.default.createElement("path", { className: "st1", d: "M-125.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-124,23.9-124.7,23.2-125.5,23.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M-146.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-145,32.9-145.7,32.2-146.5,32.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M-157,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-155.5,37.4-156.2,36.8-157,36.8z" }),
                _react2.default.createElement("path", { className: "st2", d: "M-167.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-166,41.9-166.7,41.2-167.5,41.2z" }),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M-44,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-42.5,28.4-43.2,27.8-44,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-33.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-32,23.9-32.7,23.2-33.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-54.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-53,32.9-53.7,32.2-54.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M-65,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-63.5,37.4-64.2,36.8-65,36.8z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M-75.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-74,41.9-74.7,41.2-75.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M48,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C49.5,28.4,48.8,27.8,48,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M58.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C60,23.9,59.3,23.2,58.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M37.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C39,32.9,38.3,32.2,37.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M27,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C28.5,37.4,27.8,36.8,27,36.8z" }),
                    _react2.default.createElement("path", { className: "st3", d: "M16.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C18,41.9,17.3,41.2,16.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M140,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C141.5,28.4,140.8,27.8,140,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M150.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C152,23.9,151.3,23.2,150.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M129.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C131,32.9,130.3,32.2,129.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M119,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C120.5,37.4,119.8,36.8,119,36.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M108.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C110,41.9,109.3,41.2,108.5,41.2z" })
                ),
                _react2.default.createElement("circle", { className: "st3", cx: "142.9", cy: "37.6", r: "9" }),
                _react2.default.createElement("path", { className: "st4", d: "M142.8,41.7c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.6-0.4,1s0.1,0.7,0.4,1c0.3,0.3,0.6,0.4,1,0.4 c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1C143.5,41.8,143.2,41.7,142.8,41.7z" }),
                _react2.default.createElement("polygon", { className: "st4", points: "141.6,31.6 142,40.7 143.6,40.7 144,31.6 " })
            );
        }
    }]);
    return SignalOne;
}(_react.Component);

exports.default = SignalOne;

SignalOne.propTypes = {
    disable: _propTypes2.default.bool
};
SignalOne.defaultProps = {
    disable: false
};

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignalTwo = function (_Component) {
    (0, _inherits3.default)(SignalTwo, _Component);

    function SignalTwo() {
        (0, _classCallCheck3.default)(this, SignalTwo);
        return (0, _possibleConstructorReturn3.default)(this, (SignalTwo.__proto__ || (0, _getPrototypeOf2.default)(SignalTwo)).apply(this, arguments));
    }

    (0, _createClass3.default)(SignalTwo, [{
        key: "render",
        value: function render() {
            var disable = this.props.disable;

            return _react2.default.createElement(
                "svg",
                { viewBox: "0 0 72 72", className: disable ? "call-signal-2 disable" : "call-signal-2" },
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M-228,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-226.5,28.4-227.2,27.8-228,27.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-217.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-216,23.9-216.7,23.2-217.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-238.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-237,32.9-237.7,32.2-238.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-249,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-247.5,37.4-248.2,36.8-249,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-259.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-258,41.9-258.7,41.2-259.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M-136,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-134.5,28.4-135.2,27.8-136,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-125.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-124,23.9-124.7,23.2-125.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-146.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-145,32.9-145.7,32.2-146.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-157,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-155.5,37.4-156.2,36.8-157,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-167.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-166,41.9-166.7,41.2-167.5,41.2z" })
                ),
                _react2.default.createElement("path", { className: "st1", d: "M-44,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-42.5,28.4-43.2,27.8-44,27.8z" }),
                _react2.default.createElement("path", { className: "st1", d: "M-33.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-32,23.9-32.7,23.2-33.5,23.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M-54.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-53,32.9-53.7,32.2-54.5,32.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M-65,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-63.5,37.4-64.2,36.8-65,36.8z" }),
                _react2.default.createElement("path", { className: "st2", d: "M-75.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-74,41.9-74.7,41.2-75.5,41.2z" }),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M48,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C49.5,28.4,48.8,27.8,48,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M58.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C60,23.9,59.3,23.2,58.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M37.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C39,32.9,38.3,32.2,37.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M27,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C28.5,37.4,27.8,36.8,27,36.8z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M16.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C18,41.9,17.3,41.2,16.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M140,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C141.5,28.4,140.8,27.8,140,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M150.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C152,23.9,151.3,23.2,150.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M129.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C131,32.9,130.3,32.2,129.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M119,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C120.5,37.4,119.8,36.8,119,36.8z" }),
                    _react2.default.createElement("path", { className: "st3", d: "M108.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C110,41.9,109.3,41.2,108.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M232,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C233.5,28.4,232.8,27.8,232,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M242.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C244,23.9,243.3,23.2,242.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M221.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C223,32.9,222.3,32.2,221.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M211,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C212.5,37.4,211.8,36.8,211,36.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M200.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C202,41.9,201.3,41.2,200.5,41.2z" })
                ),
                _react2.default.createElement("circle", { className: "st3", cx: "234.9", cy: "37.6", r: "9" }),
                _react2.default.createElement("path", { className: "st4", d: "M234.8,41.7c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.6-0.4,1s0.1,0.7,0.4,1c0.3,0.3,0.6,0.4,1,0.4 c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1C235.5,41.8,235.2,41.7,234.8,41.7z" }),
                _react2.default.createElement("polygon", { className: "st4", points: "233.6,31.6 234,40.7 235.6,40.7 236,31.6 " })
            );
        }
    }]);
    return SignalTwo;
}(_react.Component);

exports.default = SignalTwo;

SignalTwo.propTypes = {
    disable: _propTypes2.default.bool
};
SignalTwo.defaultProps = {
    disable: false
};

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignalThree = function (_Component) {
    (0, _inherits3.default)(SignalThree, _Component);

    function SignalThree() {
        (0, _classCallCheck3.default)(this, SignalThree);
        return (0, _possibleConstructorReturn3.default)(this, (SignalThree.__proto__ || (0, _getPrototypeOf2.default)(SignalThree)).apply(this, arguments));
    }

    (0, _createClass3.default)(SignalThree, [{
        key: "render",
        value: function render() {
            var disable = this.props.disable;

            return _react2.default.createElement(
                "svg",
                { viewBox: "0 0 72 72", className: disable ? "call-signal-3 disable" : "call-signal-3" },
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M-136,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-134.5,28.4-135.2,27.8-136,27.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-125.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-124,23.9-124.7,23.2-125.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-146.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-145,32.9-145.7,32.2-146.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-157,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-155.5,37.4-156.2,36.8-157,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-167.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-166,41.9-166.7,41.2-167.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M-44,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-42.5,28.4-43.2,27.8-44,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-33.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-32,23.9-32.7,23.2-33.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-54.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-53,32.9-53.7,32.2-54.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-65,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-63.5,37.4-64.2,36.8-65,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-75.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-74,41.9-74.7,41.2-75.5,41.2z" })
                ),
                _react2.default.createElement("path", { className: "st1", d: "M48,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C49.5,28.4,48.8,27.8,48,27.8z" }),
                _react2.default.createElement("path", { className: "st1", d: "M58.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C60,23.9,59.3,23.2,58.5,23.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M37.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C39,32.9,38.3,32.2,37.5,32.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M27,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C28.5,37.4,27.8,36.8,27,36.8z" }),
                _react2.default.createElement("path", { className: "st2", d: "M16.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C18,41.9,17.3,41.2,16.5,41.2z" }),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M140,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C141.5,28.4,140.8,27.8,140,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M150.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C152,23.9,151.3,23.2,150.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M129.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C131,32.9,130.3,32.2,129.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M119,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C120.5,37.4,119.8,36.8,119,36.8z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M108.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C110,41.9,109.3,41.2,108.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M232,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C233.5,28.4,232.8,27.8,232,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M242.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C244,23.9,243.3,23.2,242.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M221.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C223,32.9,222.3,32.2,221.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M211,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C212.5,37.4,211.8,36.8,211,36.8z" }),
                    _react2.default.createElement("path", { className: "st3", d: "M200.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C202,41.9,201.3,41.2,200.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M324,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C325.5,28.4,324.8,27.8,324,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M334.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C336,23.9,335.3,23.2,334.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M313.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C315,32.9,314.3,32.2,313.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M303,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C304.5,37.4,303.8,36.8,303,36.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M292.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C294,41.9,293.3,41.2,292.5,41.2z" })
                ),
                _react2.default.createElement("circle", { className: "st3", cx: "326.9", cy: "37.6", r: "9" }),
                _react2.default.createElement("path", { className: "st4", d: "M326.8,41.7c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.6-0.4,1s0.1,0.7,0.4,1c0.3,0.3,0.6,0.4,1,0.4s0.7-0.1,1-0.4 c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1C327.5,41.8,327.2,41.7,326.8,41.7z" }),
                _react2.default.createElement("polygon", { className: "st4", points: "325.6,31.6 326,40.7 327.6,40.7 328,31.6 " })
            );
        }
    }]);
    return SignalThree;
}(_react.Component);

exports.default = SignalThree;

SignalThree.propTypes = {
    disable: _propTypes2.default.bool
};
SignalThree.defaultProps = {
    disable: false
};

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignalFour = function (_Component) {
    (0, _inherits3.default)(SignalFour, _Component);

    function SignalFour() {
        (0, _classCallCheck3.default)(this, SignalFour);
        return (0, _possibleConstructorReturn3.default)(this, (SignalFour.__proto__ || (0, _getPrototypeOf2.default)(SignalFour)).apply(this, arguments));
    }

    (0, _createClass3.default)(SignalFour, [{
        key: "render",
        value: function render() {
            var disable = this.props.disable;

            return _react2.default.createElement(
                "svg",
                { viewBox: "0 0 72 72", className: disable ? "call-signal-4 disable" : "call-signal-4" },
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M-44,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-42.5,28.4-43.2,27.8-44,27.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-33.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-32,23.9-32.7,23.2-33.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-54.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-53,32.9-53.7,32.2-54.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-65,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-63.5,37.4-64.2,36.8-65,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-75.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-74,41.9-74.7,41.2-75.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M48,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C49.5,28.4,48.8,27.8,48,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M58.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C60,23.9,59.3,23.2,58.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M37.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C39,32.9,38.3,32.2,37.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M27,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C28.5,37.4,27.8,36.8,27,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M16.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C18,41.9,17.3,41.2,16.5,41.2z" })
                ),
                _react2.default.createElement("path", { className: "st1", d: "M140,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C141.5,28.4,140.8,27.8,140,27.8z" }),
                _react2.default.createElement("path", { className: "st1", d: "M150.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C152,23.9,151.3,23.2,150.5,23.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M129.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C131,32.9,130.3,32.2,129.5,32.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M119,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C120.5,37.4,119.8,36.8,119,36.8z" }),
                _react2.default.createElement("path", { className: "st2", d: "M108.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C110,41.9,109.3,41.2,108.5,41.2z" }),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M232,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C233.5,28.4,232.8,27.8,232,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M242.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C244,23.9,243.3,23.2,242.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M221.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C223,32.9,222.3,32.2,221.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M211,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C212.5,37.4,211.8,36.8,211,36.8z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M200.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C202,41.9,201.3,41.2,200.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M324,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C325.5,28.4,324.8,27.8,324,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M334.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C336,23.9,335.3,23.2,334.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M313.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C315,32.9,314.3,32.2,313.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M303,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C304.5,37.4,303.8,36.8,303,36.8z" }),
                    _react2.default.createElement("path", { className: "st3", d: "M292.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C294,41.9,293.3,41.2,292.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M416,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C417.5,28.4,416.8,27.8,416,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M426.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C428,23.9,427.3,23.2,426.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M405.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C407,32.9,406.3,32.2,405.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M395,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C396.5,37.4,395.8,36.8,395,36.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M384.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C386,41.9,385.3,41.2,384.5,41.2z" })
                ),
                _react2.default.createElement("circle", { className: "st3", cx: "418.9", cy: "37.6", r: "9" }),
                _react2.default.createElement("path", { className: "st4", d: "M418.8,41.7c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.6-0.4,1s0.1,0.7,0.4,1c0.3,0.3,0.6,0.4,1,0.4s0.7-0.1,1-0.4 c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1C419.5,41.8,419.2,41.7,418.8,41.7z" }),
                _react2.default.createElement("polygon", { className: "st4", points: "417.6,31.6 418,40.7 419.6,40.7 420,31.6 " })
            );
        }
    }]);
    return SignalFour;
}(_react.Component);

exports.default = SignalFour;

SignalFour.propTypes = {
    disable: _propTypes2.default.bool
};
SignalFour.defaultProps = {
    disable: false
};

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignalFull = function (_Component) {
    (0, _inherits3.default)(SignalFull, _Component);

    function SignalFull() {
        (0, _classCallCheck3.default)(this, SignalFull);
        return (0, _possibleConstructorReturn3.default)(this, (SignalFull.__proto__ || (0, _getPrototypeOf2.default)(SignalFull)).apply(this, arguments));
    }

    (0, _createClass3.default)(SignalFull, [{
        key: "render",
        value: function render() {
            var disable = this.props.disable;

            return _react2.default.createElement(
                "svg",
                { viewBox: "0 0 72 72", className: disable ? "call-signal-full disable" : "call-signal-full" },
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M48,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C49.5,28.4,48.8,27.8,48,27.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M58.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C60,23.9,59.3,23.2,58.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M37.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C39,32.9,38.3,32.2,37.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M27,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C28.5,37.4,27.8,36.8,27,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M16.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C18,41.9,17.3,41.2,16.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M140,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C141.5,28.4,140.8,27.8,140,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M150.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C152,23.9,151.3,23.2,150.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M129.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C131,32.9,130.3,32.2,129.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M119,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C120.5,37.4,119.8,36.8,119,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M108.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C110,41.9,109.3,41.2,108.5,41.2z" })
                ),
                _react2.default.createElement("path", { className: "st1", d: "M232,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C233.5,28.4,232.8,27.8,232,27.8z" }),
                _react2.default.createElement("path", { className: "st1", d: "M242.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C244,23.9,243.3,23.2,242.5,23.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M221.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C223,32.9,222.3,32.2,221.5,32.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M211,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C212.5,37.4,211.8,36.8,211,36.8z" }),
                _react2.default.createElement("path", { className: "st2", d: "M200.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C202,41.9,201.3,41.2,200.5,41.2z" }),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M324,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C325.5,28.4,324.8,27.8,324,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M334.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C336,23.9,335.3,23.2,334.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M313.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C315,32.9,314.3,32.2,313.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M303,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C304.5,37.4,303.8,36.8,303,36.8z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M292.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C294,41.9,293.3,41.2,292.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M416,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C417.5,28.4,416.8,27.8,416,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M426.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C428,23.9,427.3,23.2,426.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M405.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C407,32.9,406.3,32.2,405.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M395,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C396.5,37.4,395.8,36.8,395,36.8z" }),
                    _react2.default.createElement("path", { className: "st3", d: "M384.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C386,41.9,385.3,41.2,384.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M508,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C509.5,28.4,508.8,27.8,508,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M518.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C520,23.9,519.3,23.2,518.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M497.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C499,32.9,498.3,32.2,497.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M487,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C488.5,37.4,487.8,36.8,487,36.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M476.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C478,41.9,477.3,41.2,476.5,41.2z" })
                ),
                _react2.default.createElement("circle", { className: "st3", cx: "510.9", cy: "37.6", r: "9" }),
                _react2.default.createElement("path", { className: "st4", d: "M510.8,41.7c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.6-0.4,1s0.1,0.7,0.4,1c0.3,0.3,0.6,0.4,1,0.4s0.7-0.1,1-0.4 c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1C511.5,41.8,511.2,41.7,510.8,41.7z" }),
                _react2.default.createElement("polygon", { className: "st4", points: "509.6,31.6 510,40.7 511.6,40.7 512,31.6 " })
            );
        }
    }]);
    return SignalFull;
}(_react.Component);

exports.default = SignalFull;

SignalFull.propTypes = {
    disable: _propTypes2.default.bool
};
SignalFull.defaultProps = {
    disable: false
};

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignalNone = function (_Component) {
    (0, _inherits3.default)(SignalNone, _Component);

    function SignalNone() {
        (0, _classCallCheck3.default)(this, SignalNone);
        return (0, _possibleConstructorReturn3.default)(this, (SignalNone.__proto__ || (0, _getPrototypeOf2.default)(SignalNone)).apply(this, arguments));
    }

    (0, _createClass3.default)(SignalNone, [{
        key: "render",
        value: function render() {
            var disable = this.props.disable;

            return _react2.default.createElement(
                "svg",
                { viewBox: "0 0 72 72", className: disable ? "call-signal-none disable" : "call-signal-none" },
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M-412,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-410.5,28.4-411.2,27.8-412,27.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-401.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-400,23.9-400.7,23.2-401.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-422.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-421,32.9-421.7,32.2-422.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-433,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-431.5,37.4-432.2,36.8-433,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-443.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-442,41.9-442.7,41.2-443.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st0", d: "M-320,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-318.5,28.4-319.2,27.8-320,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-309.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-308,23.9-308.7,23.2-309.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-330.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-329,32.9-329.7,32.2-330.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-341,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-339.5,37.4-340.2,36.8-341,36.8z" }),
                    _react2.default.createElement("path", { className: "st0", d: "M-351.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-350,41.9-350.7,41.2-351.5,41.2z" })
                ),
                _react2.default.createElement("path", { className: "st1", d: "M-228,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-226.5,28.4-227.2,27.8-228,27.8z" }),
                _react2.default.createElement("path", { className: "st1", d: "M-217.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-216,23.9-216.7,23.2-217.5,23.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M-238.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-237,32.9-237.7,32.2-238.5,32.2z" }),
                _react2.default.createElement("path", { className: "st2", d: "M-249,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-247.5,37.4-248.2,36.8-249,36.8z" }),
                _react2.default.createElement("path", { className: "st2", d: "M-259.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-258,41.9-258.7,41.2-259.5,41.2z" }),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M-136,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-134.5,28.4-135.2,27.8-136,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-125.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-124,23.9-124.7,23.2-125.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-146.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-145,32.9-145.7,32.2-146.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M-157,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-155.5,37.4-156.2,36.8-157,36.8z" }),
                    _react2.default.createElement("path", { className: "st2", d: "M-167.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-166,41.9-166.7,41.2-167.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M-44,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C-42.5,28.4-43.2,27.8-44,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-33.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C-32,23.9-32.7,23.2-33.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-54.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C-53,32.9-53.7,32.2-54.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M-65,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C-63.5,37.4-64.2,36.8-65,36.8z" }),
                    _react2.default.createElement("path", { className: "st3", d: "M-75.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C-74,41.9-74.7,41.2-75.5,41.2z" })
                ),
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { className: "st1", d: "M48,27.8h-3c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-18 C49.5,28.4,48.8,27.8,48,27.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M58.5,23.2h-3c-0.8,0-1.5,0.7-1.5,1.5v22.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V24.8 C60,23.9,59.3,23.2,58.5,23.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M37.5,32.2h-3c-0.8,0-1.5,0.7-1.5,1.5v13.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V33.8 C39,32.9,38.3,32.2,37.5,32.2z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M27,36.8h-3c-0.8,0-1.5,0.7-1.5,1.5v9c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-9 C28.5,37.4,27.8,36.8,27,36.8z" }),
                    _react2.default.createElement("path", { className: "st1", d: "M16.5,41.2h-3c-0.8,0-1.5,0.7-1.5,1.5v4.5c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-4.5 C18,41.9,17.3,41.2,16.5,41.2z" })
                ),
                _react2.default.createElement("circle", { className: "st3", cx: "50.9", cy: "37.6", r: "9" }),
                _react2.default.createElement("path", { className: "st4", d: "M50.8,41.7c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.6-0.4,1s0.1,0.7,0.4,1c0.3,0.3,0.6,0.4,1,0.4s0.7-0.1,1-0.4 c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1C51.5,41.8,51.2,41.7,50.8,41.7z" }),
                _react2.default.createElement("polygon", { className: "st4", points: "49.6,31.6 50,40.7 51.6,40.7 52,31.6 " })
            );
        }
    }]);
    return SignalNone;
}(_react.Component);

exports.default = SignalNone;

SignalNone.propTypes = {
    disable: _propTypes2.default.bool
};
SignalNone.defaultProps = {
    disable: false
};

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Key = function (_Component) {
  (0, _inherits3.default)(Key, _Component);

  function Key() {
    (0, _classCallCheck3.default)(this, Key);
    return (0, _possibleConstructorReturn3.default)(this, (Key.__proto__ || (0, _getPrototypeOf2.default)(Key)).apply(this, arguments));
  }

  (0, _createClass3.default)(Key, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 24 24", className: disable ? "key disable" : "key" },
        _react2.default.createElement("path", { d: "M9.505191,10.5230424 C9.34575902,9.92142729 9.25,9.40310491 9.25,9.00622559 C9.25,5.82714998 11.82715,3.25 15.0062256,3.25 C18.1853012,3.25 20.7624512,5.82714998 20.7624512,9.00622559 C20.7624512,12.1853012 18.1853012,14.7624512 15.0062256,14.7624512 C14.2099656,14.7624512 13.4361856,14.6003425 12.7223639,14.2914596 L11.7822231,15.3407857 L11.9462783,16.4891715 C11.9950938,16.8308802 11.7576569,17.1474627 11.4159482,17.1962783 C11.2438665,17.1959952 11.2438665,17.1959952 11.1856947,17.1851437 C11.0797276,17.1707338 11.0797276,17.1707338 10.9167742,17.1481054 C10.7241496,17.1212754 10.4545198,17.0833526 10.107809,17.0343266 L9.31586399,17.8262716 L9.44627825,18.7391715 C9.49509379,19.0808802 9.25765692,19.3974627 8.91594817,19.4462783 C8.74793281,19.4465421 8.74793281,19.4465421 8.70008044,19.4371925 C8.60978156,19.4250251 8.60978156,19.4250251 8.47177912,19.405962 C8.31601531,19.384368 8.10098764,19.3542234 7.82661818,19.3155174 L6.41941738,20.7227182 L3.23743687,20.7227182 L3.23743687,17.5421075 L9.65835982,11.0607853 C9.6110072,10.9058502 9.55812041,10.722771 9.505191,10.5230424 Z M10.7263447,15.0207042 L12.4845395,13.0583175 L12.8281936,13.235684 C13.4957458,13.5802204 14.2373645,13.7624512 15.0062256,13.7624512 C17.6330164,13.7624512 19.7624512,11.6330164 19.7624512,9.00622559 C19.7624512,6.37943473 17.6330164,4.25 15.0062256,4.25 C12.3794347,4.25 10.25,6.37943473 10.25,9.00622559 C10.25,9.2935659 10.3331217,9.74348531 10.4718243,10.2668782 C10.5579945,10.5920407 10.6442954,10.8705391 10.7006118,11.0368889 L10.7997023,11.3295873 L4.23743687,17.9535815 L4.23743687,19.7227182 L6.00520382,19.7227182 L7.47240726,18.2555148 L7.7195087,18.2904601 C7.98618429,18.3281736 8.20817276,18.3594405 8.38542319,18.3842538 L8.25520382,17.4727182 L9.75370575,15.9742163 L10.0008674,16.0092255 C10.3668374,16.0610632 10.6616998,16.1026586 10.8853873,16.1340023 L10.7263447,15.0207042 Z M16.5655623,6.11346244 L17.5684402,7.01645775 C18.2762247,7.65374977 18.3333702,8.74414972 17.6960781,9.45193421 C17.0587861,10.1597187 15.9683862,10.2168641 15.2606017,9.57957213 L14.2577238,8.67657683 C13.5499393,8.03928481 13.4927939,6.94888485 14.1300859,6.24110036 C14.7673779,5.53331587 15.8577779,5.47617042 16.5655623,6.11346244 Z M16.0637144,6.67082106 C15.6637506,6.31069202 15.0475735,6.34298449 14.6874445,6.74294831 C14.3273154,7.14291214 14.3596079,7.75908916 14.7595717,8.11921821 L15.7624496,9.02221351 C16.1624135,9.38234256 16.7785905,9.35005009 17.1387195,8.95008626 C17.4988486,8.55012243 17.4665561,7.93394541 17.0665923,7.57381636 L16.0637144,6.67082106 Z", id: "path-1" })
      );
    }
  }]);
  return Key;
}(_react.Component);

exports.default = Key;

Key.propTypes = {
  disable: _propTypes2.default.bool
};
Key.defaultProps = {
  disable: false
};

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fonts = function (_Component) {
  (0, _inherits3.default)(Fonts, _Component);

  function Fonts() {
    (0, _classCallCheck3.default)(this, Fonts);
    return (0, _possibleConstructorReturn3.default)(this, (Fonts.__proto__ || (0, _getPrototypeOf2.default)(Fonts)).apply(this, arguments));
  }

  (0, _createClass3.default)(Fonts, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "Navigation disable" : "Navigation" },
        _react2.default.createElement("path", { d: "M52.4,53.7c4.9,0,8.2-2.5,8.2-6.4v-4.4c0-0.2-0.1-0.4-0.4-0.4h-6.8c-5.7,0-8.1,1.9-8.1,5.6C45.3,51.8,47.8,53.7,52.4,53.7z M53.2,29.9c-3.5,0-5.5,0.8-7.2,2.2c-0.3,0.2-0.7,0.2-0.9-0.1l-1-1.5c-0.2-0.3-0.1-0.6,0.2-0.8c2-1.7,5.1-2.8,9.1-2.8 c7.4,0,10.4,2.5,10.4,9.5v19.1c0,0.4-0.2,0.6-0.6,0.6h-1.9c-0.4,0-0.6-0.2-0.6-0.6v-3h-0.1c-1.1,2.4-4.2,4.2-8.9,4.2 c-5.8,0-9.6-2.9-9.6-8.5c0-5.7,3.9-8.5,10.9-8.5h7.3c0.2,0,0.4-0.1,0.4-0.4v-2.9C60.6,31.8,59,29.9,53.2,29.9z M16.5,42.2H32 l-7.6-21.4h-0.2L16.5,42.2z M8.3,55.5l14.3-39.6c0.1-0.4,0.4-0.6,0.7-0.6h2.2c0.4,0,0.6,0.2,0.7,0.6l14.2,39.6 c0.1,0.4-0.1,0.6-0.4,0.6h-2.3c-0.4,0-0.7-0.1-0.8-0.6l-3.6-10H15.4l-3.6,10c-0.2,0.5-0.4,0.6-0.8,0.6H8.7 C8.3,56.1,8.1,55.9,8.3,55.5z" })
      );
    }
  }]);
  return Fonts;
}(_react.Component);

exports.default = Fonts;

Fonts.propTypes = {
  disable: _propTypes2.default.bool
};
Fonts.defaultProps = {
  disable: false
};

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Emoji = function (_Component) {
  (0, _inherits3.default)(Emoji, _Component);

  function Emoji() {
    (0, _classCallCheck3.default)(this, Emoji);
    return (0, _possibleConstructorReturn3.default)(this, (Emoji.__proto__ || (0, _getPrototypeOf2.default)(Emoji)).apply(this, arguments));
  }

  (0, _createClass3.default)(Emoji, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation-recent";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 24 24", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { d: "M9,13c0.5,0,1-0.5,1-1v-2c0-0.5-0.5-1-1-1s-1,0.5-1,1v2C8,12.5,8.5,13,9,13z" }),
          _react2.default.createElement("path", { d: "M15,13c0.5,0,1-0.5,1-1v-2c0-0.5-0.5-1-1-1s-1,0.5-1,1v2C14,12.5,14.5,13,15,13z" }),
          _react2.default.createElement("path", { d: "M12,3c-5,0-9,4-9,9c0,5,4,9,9,9s9-4,9-9C21,7,17,3,12,3z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z" }),
          _react2.default.createElement("path", { d: "M12,16c-1.4,0-2.6-0.6-3.5-1.5l-0.7,0.7C8.9,16.3,10.3,17,12,17c1.7,0,3.1-0.7,4.2-1.7l-0.7-0.7C14.6,15.4,13.4,16,12,16z"
          })
        )
      );
    }
  }]);
  return Emoji;
}(_react.Component);

exports.default = Emoji;

Emoji.propTypes = {
  disable: _propTypes2.default.bool
};
Emoji.defaultProps = {
  disable: false
};

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var At = function (_Component) {
  (0, _inherits3.default)(At, _Component);

  function At() {
    (0, _classCallCheck3.default)(this, At);
    return (0, _possibleConstructorReturn3.default)(this, (At.__proto__ || (0, _getPrototypeOf2.default)(At)).apply(this, arguments));
  }

  (0, _createClass3.default)(At, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "at disable" : "at" },
        _react2.default.createElement("path", { d: "M45.3,43.3c-0.3,0.8-0.6,1.7-0.9,2.5C44.2,46.7,44,47.4,44,48c0,0.8,0.3,1.4,0.9,1.9c0.6,0.5,1.4,0.7,2.3,0.7c1.9,0,3.7-0.6,5.5-1.8c1.8-1.2,3.4-2.8,4.8-4.7c1.4-1.9,2.5-4.1,3.3-6.4c0.9-2.3,1.3-4.6,1.3-6.8c0-3.3-0.7-6.2-2.1-8.9c-1.4-2.6-3.3-4.9-5.6-6.8c-2.3-1.9-5-3.3-7.9-4.3c-3-1-6-1.5-9-1.5c-3.8,0-7.4,0.7-10.7,2.1c-3.3,1.4-6.2,3.4-8.7,5.9c-2.5,2.5-4.4,5.3-5.9,8.6c-1.5,3.3-2.2,6.7-2.2,10.4c0,3.9,0.8,7.4,2.4,10.6c1.6,3.2,3.7,6,6.3,8.3c2.6,2.3,5.5,4.1,8.8,5.4c3.3,1.3,6.7,2,10.2,2c2.3,0,4.5-0.3,6.7-0.9s4.3-1.4,6.2-2.4c2-1,3.8-2.3,5.4-3.7c1.7-1.5,3.1-3.1,4.4-4.9h3.6c-1.3,2.2-2.9,4.2-4.8,6c-1.9,1.8-4,3.3-6.3,4.5c-2.3,1.3-4.8,2.2-7.4,2.9c-2.6,0.7-5.2,1-7.9,1c-4.4,0-8.5-0.8-12.2-2.3c-3.7-1.5-7-3.6-9.7-6.3c-2.8-2.7-4.9-5.8-6.5-9.4c-1.6-3.6-2.4-7.4-2.4-11.5c0-4,0.8-7.8,2.4-11.3c1.6-3.5,3.8-6.6,6.6-9.2c2.8-2.6,6-4.7,9.7-6.2c3.7-1.5,7.6-2.3,11.7-2.3c3.9,0,7.6,0.6,11,1.8c3.4,1.2,6.4,2.9,8.9,5c2.5,2.2,4.5,4.7,6,7.7c1.5,3,2.2,6.2,2.2,9.8c0,3-0.6,5.8-1.7,8.5c-1.2,2.7-2.7,5.1-4.5,7.2c-1.8,2.1-3.9,3.7-6.1,5c-2.2,1.3-4.4,1.9-6.6,1.9c-1.4,0-2.7-0.5-3.8-1.4c-1.1-0.9-1.6-2.3-1.7-4.2h-0.2c-1.3,1.8-2.9,3.2-4.8,4.1c-1.9,0.9-4,1.4-6.2,1.4c-1.6,0-3-0.3-4.3-0.9C24,52,22.9,51.2,22,50.1c-0.9-1.1-1.6-2.3-2.1-3.8c-0.5-1.4-0.8-2.9-0.8-4.5c0-2.7,0.5-5.4,1.4-8.2c1-2.8,2.3-5.3,4-7.5c1.7-2.2,3.8-4.1,6.2-5.5c2.4-1.4,5-2.1,7.8-2.1c1.3,0,2.5,0.2,3.6,0.6c1.1,0.4,2,0.9,2.8,1.6c0.8,0.7,1.4,1.4,1.9,2.3c0.5,0.8,0.8,1.7,1,2.7H48l1.9-5.6h3.4L45.3,43.3z M38.1,21.1c-2.3,0-4.4,0.7-6.4,2c-2,1.4-3.6,3-5,5.1c-1.4,2-2.5,4.2-3.3,6.6c-0.8,2.4-1.2,4.6-1.2,6.6c0,2.9,0.8,5.2,2.4,7c1.6,1.7,3.6,2.6,6.1,2.6c1.6,0,3.3-0.6,5-1.8c1.7-1.2,3.3-2.6,4.6-4.4c0.8-1,1.5-2.2,2.1-3.4c0.7-1.3,1.2-2.5,1.7-3.8c0.5-1.3,0.8-2.5,1.1-3.8c0.3-1.2,0.4-2.4,0.4-3.4c0-0.7-0.1-1.6-0.2-2.7c-0.1-1-0.5-2.1-1-3c-0.5-1-1.3-1.8-2.3-2.5C41.1,21.5,39.8,21.1,38.1,21.1z" })
      );
    }
  }]);
  return At;
}(_react.Component);

exports.default = At;

At.propTypes = {
  disable: _propTypes2.default.bool
};
At.defaultProps = {
  disable: false
};

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accessory = function (_Component) {
  (0, _inherits3.default)(Accessory, _Component);

  function Accessory() {
    (0, _classCallCheck3.default)(this, Accessory);
    return (0, _possibleConstructorReturn3.default)(this, (Accessory.__proto__ || (0, _getPrototypeOf2.default)(Accessory)).apply(this, arguments));
  }

  (0, _createClass3.default)(Accessory, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 24 24", className: disable ? "Navigation-recent disable" : "Navigation-recent" },
        _react2.default.createElement("path", { d: "M8,15v1h7v-1H8z M8,12v1h7v-1H8z M19,19c0,0.5-0.6,1-1,1H6c-0.4,0-1-0.5-1-1V5c0-0.5,0.6-1,1-1h9l4,4V19z M14,5H6v14h12V9 L14,5z" }),
        _react2.default.createElement("polygon", { points: "15,8 15,4 14,4 14,8 14,9 15,9 19,9 19,8 " })
      );
    }
  }]);
  return Accessory;
}(_react.Component);

exports.default = Accessory;

Accessory.propTypes = {
  disable: _propTypes2.default.bool
};
Accessory.defaultProps = {
  disable: false
};

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScreenShot = function (_Component) {
  (0, _inherits3.default)(ScreenShot, _Component);

  function ScreenShot() {
    (0, _classCallCheck3.default)(this, ScreenShot);
    return (0, _possibleConstructorReturn3.default)(this, (ScreenShot.__proto__ || (0, _getPrototypeOf2.default)(ScreenShot)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScreenShot, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 24 24", className: disable ? "Navigation-recent disable" : "Navigation-recent" },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("polygon", { points: "7,7 16,7 16,6 7,6 6,6 6,7 6,16 7,16 \t" }),
          _react2.default.createElement("polygon", { points: "20,6 18,6 18,4 17,4 17,6 17,7 17,17 7,17 6,17 4,17 4,18 6,18 6,20 7,20 7,18 17,18 18,18 18,17 18,7 20,7 \t" })
        )
      );
    }
  }]);
  return ScreenShot;
}(_react.Component);

exports.default = ScreenShot;

ScreenShot.propTypes = {
  disable: _propTypes2.default.bool
};
ScreenShot.defaultProps = {
  disable: false
};

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Send = function (_Component) {
  (0, _inherits3.default)(Send, _Component);

  function Send() {
    (0, _classCallCheck3.default)(this, Send);
    return (0, _possibleConstructorReturn3.default)(this, (Send.__proto__ || (0, _getPrototypeOf2.default)(Send)).apply(this, arguments));
  }

  (0, _createClass3.default)(Send, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 33 32", className: disable ? "Navigation-recent disable" : "Navigation-recent" },
        _react2.default.createElement("path", { d: "M26,15.5c0-0.2-0.1-0.4-0.3-0.5l-9.8-9.8c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7l9.1,9.1H6.5C6.2,15,6,15.2,6,15.5 C6,15.8,6.2,16,6.5,16h17.8l-9.2,9.2c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l9.9-9.9c0.1-0.1,0.1-0.1,0.1-0.2 C26,15.7,26,15.6,26,15.5z" })
      );
    }
  }]);
  return Send;
}(_react.Component);

exports.default = Send;

Send.propTypes = {
  disable: _propTypes2.default.bool
};
Send.defaultProps = {
  disable: false
};

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Quote = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Quote, _Component);

  function Quote() {
    (0, _classCallCheck3.default)(this, Quote);
    return (0, _possibleConstructorReturn3.default)(this, (Quote.__proto__ || (0, _getPrototypeOf2.default)(Quote)).apply(this, arguments));
  }

  (0, _createClass3.default)(Quote, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "quote disable" : "quote" },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { d: "M18,33v9.4v7.7c0,1.3,0.1,1.8,0.4,2.3s0.6,0.9,1.1,1.1s1,0.4,2.3,0.4h7.3c1.3,0,1.8-0.1,2.3-0.4s0.9-0.6,1.1-1.1s0.4-1,0.4-2.3V39.8c0-1.3-0.1-1.8-0.4-2.3s-0.6-0.9-1.1-1.1s-1-0.4-2.3-0.4H24v-3c0-5,4-9,9-9v-6C24.7,18,18,24.7,18,33z" }),
          _react2.default.createElement("path", { d: "M54,24v-6c-8.3,0-15,6.7-15,15v9.4v7.7c0,1.3,0.1,1.8,0.4,2.3s0.6,0.9,1.1,1.1s1,0.4,2.3,0.4h7.3c1.3,0,1.8-0.1,2.3-0.4s0.9-0.6,1.1-1.1s0.4-1,0.4-2.3V39.8c0-1.3-0.1-1.8-0.4-2.3s-0.6-0.9-1.1-1.1s-1-0.4-2.3-0.4H45v-3C45,28,49,24,54,24z" })
        )
      );
    }
  }]);
  return Quote;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = Quote;

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuickReply = function (_Component) {
  (0, _inherits3.default)(QuickReply, _Component);

  function QuickReply() {
    (0, _classCallCheck3.default)(this, QuickReply);
    return (0, _possibleConstructorReturn3.default)(this, (QuickReply.__proto__ || (0, _getPrototypeOf2.default)(QuickReply)).apply(this, arguments));
  }

  (0, _createClass3.default)(QuickReply, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", className: disable ? "Navigation-recent disable" : "Navigation-recent" },
        _react2.default.createElement("path", { d: "M13,10h4c0.6,0,1,0.4,1,1c0,0.2-0.1,0.4-0.2,0.5l-5,8c-0.3,0.5-0.9,0.6-1.4,0.3C11.2,19.7,11,19.3,11,19v-5H7 c-0.6,0-1-0.4-1-1c0-0.2,0.1-0.4,0.2-0.5l5-8c0.3-0.5,0.9-0.6,1.4-0.3C12.8,4.3,13,4.7,13,5V10z M17,11h-5V5l-5,8h5v6L17,11z" })
      );
    }
  }]);
  return QuickReply;
}(_react.Component);

exports.default = QuickReply;

QuickReply.propTypes = {
  disable: _propTypes2.default.bool
};
QuickReply.defaultProps = {
  disable: false
};

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddReply = function (_Component) {
  (0, _inherits3.default)(AddReply, _Component);

  function AddReply() {
    (0, _classCallCheck3.default)(this, AddReply);
    return (0, _possibleConstructorReturn3.default)(this, (AddReply.__proto__ || (0, _getPrototypeOf2.default)(AddReply)).apply(this, arguments));
  }

  (0, _createClass3.default)(AddReply, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 16 16", className: "addReply" },
        _react2.default.createElement("path", { d: "M8,1C4.1,1,1,4.1,1,8c0,3.9,3.1,7,7,7s7-3.1,7-7C15,4.1,11.9,1,8,1z M8,14c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6 S11.3,14,8,14z" }),
        _react2.default.createElement("path", { d: "M7.2,9.9l4-4.1c0.2-0.2,0.5-0.2,0.6,0C12,6,12,6.3,11.9,6.4l-4.4,4.4c-0.2,0.2-0.5,0.2-0.6,0c0,0,0,0,0,0L4.1,8 C4,7.9,4,7.6,4.1,7.4c0.2-0.2,0.5-0.2,0.6,0L7.2,9.9z" })
      );
    }
  }]);
  return AddReply;
}(_react.Component);

exports.default = AddReply;

AddReply.propTypes = {
  disable: _propTypes2.default.bool
};
AddReply.defaultProps = {
  disable: false
};

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cancel = function (_Component) {
  (0, _inherits3.default)(Cancel, _Component);

  function Cancel() {
    (0, _classCallCheck3.default)(this, Cancel);
    return (0, _possibleConstructorReturn3.default)(this, (Cancel.__proto__ || (0, _getPrototypeOf2.default)(Cancel)).apply(this, arguments));
  }

  (0, _createClass3.default)(Cancel, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 16 16", fill: "#666666" },
        _react2.default.createElement("path", { d: "M8,14c3.3,0,6-2.7,6-6s-2.7-6-6-6S2,4.7,2,8S4.7,14,8,14z M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8.7,8 l2.3,2.3L10.3,11L8,8.7L5.7,11L5,10.3L7.3,8L5,5.7L5.7,5L8,7.3L10.3,5L11,5.7L8.7,8z" })
      );
    }
  }]);
  return Cancel;
}(_react.Component);

exports.default = Cancel;

Cancel.propTypes = {
  disable: _propTypes2.default.bool
};
Cancel.defaultProps = {
  disable: false
};

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelfReply = function (_Component) {
  (0, _inherits3.default)(SelfReply, _Component);

  function SelfReply() {
    (0, _classCallCheck3.default)(this, SelfReply);
    return (0, _possibleConstructorReturn3.default)(this, (SelfReply.__proto__ || (0, _getPrototypeOf2.default)(SelfReply)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelfReply, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30" },
        _react2.default.createElement("polygon", { points: "16,15 26,15 26,16 16,16 16,26 15,26 15,16 5,16 5,15 15,15 15,5 16,5 " })
      );
    }
  }]);
  return SelfReply;
}(_react.Component);

exports.default = SelfReply;

SelfReply.propTypes = {
  disable: _propTypes2.default.bool
};
SelfReply.defaultProps = {
  disable: false
};

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Update = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Update, _Component);

  function Update() {
    (0, _classCallCheck3.default)(this, Update);
    return (0, _possibleConstructorReturn3.default)(this, (Update.__proto__ || (0, _getPrototypeOf2.default)(Update)).apply(this, arguments));
  }

  (0, _createClass3.default)(Update, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 72 72", className: disable ? "update disable" : "update" },
        _react2.default.createElement("circle", { cx: "36", cy: "36", r: "21.6", fillRule: "evenodd", clipRule: "evenodd", fill: "#ff0c45" })
      );
    }
  }]);
  return Update;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = Update;

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddressBook = function (_Component) {
  (0, _inherits3.default)(AddressBook, _Component);

  function AddressBook() {
    (0, _classCallCheck3.default)(this, AddressBook);
    return (0, _possibleConstructorReturn3.default)(this, (AddressBook.__proto__ || (0, _getPrototypeOf2.default)(AddressBook)).apply(this, arguments));
  }

  (0, _createClass3.default)(AddressBook, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "Navigation disable" : "Navigation" },
        _react2.default.createElement("path", { d: "M11.5,11c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h8c0.3,0,0.5-0.2,0.5-0.5S19.8,11,19.5,11H11.5z M11.5,8 C11.2,8,11,8.2,11,8.5S11.2,9,11.5,9h8C19.8,9,20,8.8,20,8.5S19.8,8,19.5,8H11.5z M7,21H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-3H6 c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-3H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h1V7c0-1.1,0.9-2,2-2h13c1.1,0,2,0.9,2,2v15c0,1.1-0.9,2-2,2H9 c-1.1,0-2-0.9-2-2V21z" })
      );
    }
  }]);
  return AddressBook;
}(_react.Component);

exports.default = AddressBook;

AddressBook.propTypes = {
  disable: _propTypes2.default.bool
};
AddressBook.defaultProps = {
  disable: false
};

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddressBook2 = function (_Component) {
  (0, _inherits3.default)(AddressBook2, _Component);

  function AddressBook2() {
    (0, _classCallCheck3.default)(this, AddressBook2);
    return (0, _possibleConstructorReturn3.default)(this, (AddressBook2.__proto__ || (0, _getPrototypeOf2.default)(AddressBook2)).apply(this, arguments));
  }

  (0, _createClass3.default)(AddressBook2, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "Navigation disable" : "Navigation select" },
        _react2.default.createElement("path", { d: "M11.5,11c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h8c0.3,0,0.5-0.2,0.5-0.5S19.8,11,19.5,11H11.5z M11.5,8 C11.2,8,11,8.2,11,8.5S11.2,9,11.5,9h8C19.8,9,20,8.8,20,8.5S19.8,8,19.5,8H11.5z M7,21H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-3H6 c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-3H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h1V7c0-1.1,0.9-2,2-2h13c1.1,0,2,0.9,2,2v15c0,1.1-0.9,2-2,2H9 c-1.1,0-2-0.9-2-2V21z" })
      );
    }
  }]);
  return AddressBook2;
}(_react.Component);

exports.default = AddressBook2;

AddressBook2.propTypes = {
  disable: _propTypes2.default.bool
};
AddressBook2.defaultProps = {
  disable: false
};

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meeting = function (_Component) {
  (0, _inherits3.default)(Meeting, _Component);

  function Meeting() {
    (0, _classCallCheck3.default)(this, Meeting);
    return (0, _possibleConstructorReturn3.default)(this, (Meeting.__proto__ || (0, _getPrototypeOf2.default)(Meeting)).apply(this, arguments));
  }

  (0, _createClass3.default)(Meeting, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M25,12v10c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2V12H25z M10,7V6c0-0.6,0.4-1,1-1s1,0.4,1,1v1h7V6c0-0.6,0.4-1,1-1s1,0.4,1,1v1 h2c1.1,0,2,0.9,2,2v2H6V9c0-1.1,0.9-2,2-2H10z M16,17.6V15c0-0.6-0.4-1-1-1s-1,0.4-1,1v3c0,0.3,0.1,0.6,0.4,0.8 c0,0.1,0.1,0.1,0.1,0.1l1.8,1.8c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L16,17.6z" })
      );
    }
  }]);
  return Meeting;
}(_react.Component);

exports.default = Meeting;

Meeting.propTypes = {
  disable: _propTypes2.default.bool
};
Meeting.defaultProps = {
  disable: false
};

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meeting2 = function (_Component) {
  (0, _inherits3.default)(Meeting2, _Component);

  function Meeting2() {
    (0, _classCallCheck3.default)(this, Meeting2);
    return (0, _possibleConstructorReturn3.default)(this, (Meeting2.__proto__ || (0, _getPrototypeOf2.default)(Meeting2)).apply(this, arguments));
  }

  (0, _createClass3.default)(Meeting2, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "Navigation disable" : "Navigation select" },
        _react2.default.createElement("path", { d: "M25,12v10c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2V12H25z M10,7V6c0-0.6,0.4-1,1-1s1,0.4,1,1v1h7V6c0-0.6,0.4-1,1-1s1,0.4,1,1v1 h2c1.1,0,2,0.9,2,2v2H6V9c0-1.1,0.9-2,2-2H10z M16,17.6V15c0-0.6-0.4-1-1-1s-1,0.4-1,1v3c0,0.3,0.1,0.6,0.4,0.8 c0,0.1,0.1,0.1,0.1,0.1l1.8,1.8c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L16,17.6z" })
      );
    }
  }]);
  return Meeting2;
}(_react.Component);

exports.default = Meeting2;

Meeting2.propTypes = {
  disable: _propTypes2.default.bool
};
Meeting2.defaultProps = {
  disable: false
};

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlackMiniMize = function (_Component) {
  (0, _inherits3.default)(BlackMiniMize, _Component);

  function BlackMiniMize() {
    (0, _classCallCheck3.default)(this, BlackMiniMize);
    return (0, _possibleConstructorReturn3.default)(this, (BlackMiniMize.__proto__ || (0, _getPrototypeOf2.default)(BlackMiniMize)).apply(this, arguments));
  }

  (0, _createClass3.default)(BlackMiniMize, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "black-minimize disable" : "black-minimize" },
        _react2.default.createElement("rect", { x: "18", y: "31.5", width: "36", height: "9" })
      );
    }
  }]);
  return BlackMiniMize;
}(_react.Component);

exports.default = BlackMiniMize;

BlackMiniMize.propTypes = {
  disable: _propTypes2.default.bool
};
BlackMiniMize.defaultProps = {
  disable: false
};

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlackClose = function (_Component) {
  (0, _inherits3.default)(BlackClose, _Component);

  function BlackClose() {
    (0, _classCallCheck3.default)(this, BlackClose);
    return (0, _possibleConstructorReturn3.default)(this, (BlackClose.__proto__ || (0, _getPrototypeOf2.default)(BlackClose)).apply(this, arguments));
  }

  (0, _createClass3.default)(BlackClose, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "black-close disable" : "black-close" },
        _react2.default.createElement("polygon", { points: "59.3,15.7 56.3,12.7 36,33 15.7,12.7 12.7,15.7 33,36 12.7,56.3 15.7,59.3 36,39 56.3,59.3 59.3,56.3 39,36 " })
      );
    }
  }]);
  return BlackClose;
}(_react.Component);

exports.default = BlackClose;

BlackClose.propTypes = {
  disable: _propTypes2.default.bool
};
BlackClose.defaultProps = {
  disable: false
};

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Close2 = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Close2, _Component);

  function Close2() {
    (0, _classCallCheck3.default)(this, Close2);
    return (0, _possibleConstructorReturn3.default)(this, (Close2.__proto__ || (0, _getPrototypeOf2.default)(Close2)).apply(this, arguments));
  }

  (0, _createClass3.default)(Close2, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { className: disable ? "gray-icon-2 disable" : "gray-icon-2", version: "1.1", id: "\u56FE\u5C42_1", x: "0px", y: "0px", viewBox: "3 4 60 60" },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { d: "M36,60c13.3,0,24-10.7,24-24S49.3,12,36,12S12,22.7,12,36S22.7,60,36,60z M36,63C21.1,63,9,50.9,9,36S21.1,9,36,9   s27,12.1,27,27S50.9,63,36,63z M38.3,36.2l9.5,9.5l-2.1,2.1l-9.5-9.5l-9.5,9.5l-2.1-2.1l9.5-9.5l-9.5-9.5l2.1-2.1l9.5,9.5l9.5-9.5   l2.1,2.1L38.3,36.2z" })
        )
      );
    }
  }]);
  return Close2;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = Close2;

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Close3 = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Close3, _Component);

    function Close3() {
        (0, _classCallCheck3.default)(this, Close3);
        return (0, _possibleConstructorReturn3.default)(this, (Close3.__proto__ || (0, _getPrototypeOf2.default)(Close3)).apply(this, arguments));
    }

    (0, _createClass3.default)(Close3, [{
        key: "render",
        value: function render() {
            var disable = this.props.disable;

            return _react2.default.createElement(
                "svg",
                { className: disable ? "gray-icon-1 disable" : "gray-icon-1", version: "1.1", id: "\u56FE\u5C42_1", x: "0px", y: "0px", viewBox: "0 -13 69 84", style: { fill: '#999999' } },
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement("path", { d: "M36,60c13.3,0,24-10.7,24-24S49.3,12,36,12S12,22.7,12,36S22.7,60,36,60z M36,63C21.1,63,9,50.9,9,36S21.1,9,36,9   s27,12.1,27,27S50.9,63,36,63z M38.3,36.2l9.5,9.5l-2.1,2.1l-9.5-9.5l-9.5,9.5l-2.1-2.1l9.5-9.5l-9.5-9.5l2.1-2.1l9.5,9.5l9.5-9.5   l2.1,2.1L38.3,36.2z" })
                )
            );
        }
    }]);
    return Close3;
}(_react.Component), _class.propTypes = {
    disable: _propTypes2.default.bool
}, _class.defaultProps = {
    disable: false
}, _temp);
exports.default = Close3;

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Warning = function (_Component) {
  (0, _inherits3.default)(Warning, _Component);

  function Warning() {
    (0, _classCallCheck3.default)(this, Warning);
    return (0, _possibleConstructorReturn3.default)(this, (Warning.__proto__ || (0, _getPrototypeOf2.default)(Warning)).apply(this, arguments));
  }

  (0, _createClass3.default)(Warning, [{
    key: "render",
    value: function render() {
      var className = this.props.className;

      var newClass = className ? className : "warning";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: newClass },
        _react2.default.createElement("path", { d: "M36,9C21.1,9,9,21.1,9,36s12.1,27,27,27s27-12.1,27-27S50.9,9,36,9z M39.8,20.7l-0.5,18.8h-6.6l-0.5-18.8H39.8z M36,51.3 c-2.4,0-4.4-2-4.4-4.4s2-4.4,4.4-4.4s4.4,2,4.4,4.4S38.4,51.3,36,51.3z" })
      );
    }
  }]);
  return Warning;
}(_react.Component);

exports.default = Warning;

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WhiteWarning = function (_Component) {
  (0, _inherits3.default)(WhiteWarning, _Component);

  function WhiteWarning() {
    (0, _classCallCheck3.default)(this, WhiteWarning);
    return (0, _possibleConstructorReturn3.default)(this, (WhiteWarning.__proto__ || (0, _getPrototypeOf2.default)(WhiteWarning)).apply(this, arguments));
  }

  (0, _createClass3.default)(WhiteWarning, [{
    key: "render",
    value: function render() {
      var className = this.props.className;

      var newClass = className ? className : "white-warning";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: newClass },
        _react2.default.createElement("path", { d: "M36,9C21.1,9,9,21.1,9,36s12.1,27,27,27s27-12.1,27-27S50.9,9,36,9z M39.8,20.7l-0.5,18.8h-6.6l-0.5-18.8H39.8z M36,51.3 c-2.4,0-4.4-2-4.4-4.4s2-4.4,4.4-4.4s4.4,2,4.4,4.4S38.4,51.3,36,51.3z" })
      );
    }
  }]);
  return WhiteWarning;
}(_react.Component);

exports.default = WhiteWarning;

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallHistory = function (_Component) {
  (0, _inherits3.default)(CallHistory, _Component);

  function CallHistory() {
    (0, _classCallCheck3.default)(this, CallHistory);
    return (0, _possibleConstructorReturn3.default)(this, (CallHistory.__proto__ || (0, _getPrototypeOf2.default)(CallHistory)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallHistory, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { d: "M24.5,20.1c0,0-3.9-2.3-4.5-2.5c-0.6-0.2-1,0.2-1.4,0.6c-0.4,0.4-1.2,1.1-1.2,1.1c-0.4,0.1-1.3-0.3-2.6-1.3 c-1.4-1.1-3-3.1-3.4-3.8c-0.5-0.7-0.4-1.5-0.4-1.5s0.6-0.5,1.1-1.1c0.6-0.6,0.4-1.2,0.4-1.2l-1.7-3.2C9.6,4.9,9.1,5.4,7.6,6.6 C7.2,7,5.6,8.4,5.2,9.2c-0.4,0.8,0.3,3.4,0.3,3.4c1.2,3.7,4.3,6.7,4.3,6.7c3,3.1,6,5,8.6,5.5c2.5,0.5,3.2-0.5,3.2-0.5 s2.3-2.2,2.9-3S24.5,20.1,24.5,20.1z" }),
          _react2.default.createElement("path", { d: "M20,14c2.8,0,5-2.2,5-5s-2.2-5-5-5s-5,2.2-5,5S17.2,14,20,14z M19,7c0-0.5,0.5-1,1-1s1,0.5,1,1v1.6l1.1,1.1 c0.4,0.4,0.4,1,0,1.4s-1,0.4-1.4,0l-1.3-1.3C19.2,9.6,19,9.3,19,9V7z" })
        )
      );
    }
  }]);
  return CallHistory;
}(_react.Component);

exports.default = CallHistory;

CallHistory.propTypes = {
  disable: _propTypes2.default.bool
};
CallHistory.defaultProps = {
  disable: false
};

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallHistory2 = function (_Component) {
  (0, _inherits3.default)(CallHistory2, _Component);

  function CallHistory2() {
    (0, _classCallCheck3.default)(this, CallHistory2);
    return (0, _possibleConstructorReturn3.default)(this, (CallHistory2.__proto__ || (0, _getPrototypeOf2.default)(CallHistory2)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallHistory2, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "Navigation disable" : "Navigation select" },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { d: "M24.5,20.1c0,0-3.9-2.3-4.5-2.5c-0.6-0.2-1,0.2-1.4,0.6c-0.4,0.4-1.2,1.1-1.2,1.1c-0.4,0.1-1.3-0.3-2.6-1.3 c-1.4-1.1-3-3.1-3.4-3.8c-0.5-0.7-0.4-1.5-0.4-1.5s0.6-0.5,1.1-1.1c0.6-0.6,0.4-1.2,0.4-1.2l-1.7-3.2C9.6,4.9,9.1,5.4,7.6,6.6 C7.2,7,5.6,8.4,5.2,9.2c-0.4,0.8,0.3,3.4,0.3,3.4c1.2,3.7,4.3,6.7,4.3,6.7c3,3.1,6,5,8.6,5.5c2.5,0.5,3.2-0.5,3.2-0.5 s2.3-2.2,2.9-3S24.5,20.1,24.5,20.1z" }),
          _react2.default.createElement("path", { d: "M20,14c2.8,0,5-2.2,5-5s-2.2-5-5-5s-5,2.2-5,5S17.2,14,20,14z M19,7c0-0.5,0.5-1,1-1s1,0.5,1,1v1.6l1.1,1.1 c0.4,0.4,0.4,1,0,1.4s-1,0.4-1.4,0l-1.3-1.3C19.2,9.6,19,9.3,19,9V7z" })
        )
      );
    }
  }]);
  return CallHistory2;
}(_react.Component);

exports.default = CallHistory2;

CallHistory2.propTypes = {
  disable: _propTypes2.default.bool
};
CallHistory2.defaultProps = {
  disable: false
};

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallOut = function (_Component) {
  (0, _inherits3.default)(CallOut, _Component);

  function CallOut() {
    (0, _classCallCheck3.default)(this, CallOut);
    return (0, _possibleConstructorReturn3.default)(this, (CallOut.__proto__ || (0, _getPrototypeOf2.default)(CallOut)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallOut, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass, style: { fill: "#666" } },
        _react2.default.createElement("path", { d: "M45.9,46.8l-2.6,1.9c-2.4,1.8-5.7,1.6-7.8-0.6L25.2,38c-2.1-2.1-2.3-5.5-0.6-7.8l1.9-2.6l-5.1-15.3l-9.4-0.1 c-0.1,15.1,4.6,27,14,35.8c9.4,8.9,20.6,12.7,33.8,11.6l0-8.6L45.9,46.8z M29,29.4L27,31.9c-0.9,1.2-0.8,2.9,0.3,3.9l10.3,10.3 c1.1,1.1,2.7,1.2,3.9,0.3l2.6-1.9c0.8-0.6,1.7-0.7,2.7-0.5l14.8,4.4c0.8,0.2,1.3,1,1.3,1.8v9.4c0,1.6-1.2,2.9-2.7,3 C46.1,63.8,34,59.7,24,50.2c-10-9.5-15-22.2-14.9-38c0-1.7,1.4-3,3-3l10.2,0.1c0.8,0,1.5,0.5,1.8,1.3l5.3,16 C29.7,27.5,29.5,28.6,29,29.4z M58.8,14.5C48,25.2,42.4,30.7,41.9,31.2l-1.1,1l-2.1-2.2l1.1-1c0.5-0.5,6.2-6.1,16.9-16.8h-10v-3h15 v15h-3V14.5z" })
      );
    }
  }]);
  return CallOut;
}(_react.Component);

exports.default = CallOut;

CallOut.propTypes = {
  disable: _propTypes2.default.bool
};
CallOut.defaultProps = {
  disable: false
};

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallIn = function (_Component) {
  (0, _inherits3.default)(CallIn, _Component);

  function CallIn() {
    (0, _classCallCheck3.default)(this, CallIn);
    return (0, _possibleConstructorReturn3.default)(this, (CallIn.__proto__ || (0, _getPrototypeOf2.default)(CallIn)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallIn, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass, style: { fill: "#666" } },
        _react2.default.createElement("path", { d: "M45.9,46.8l-2.7,2c-2.4,1.8-5.7,1.6-7.8-0.6L24.9,37.8c-2.1-2.1-2.3-5.5-0.6-7.8l2-2.6l-5-15.2h-9.4 C11.8,27.1,16.4,39,25.9,48c9.5,9,20.8,12.9,34.2,11.7l0-8.7L45.9,46.8z M29.2,26.3c0.3,0.9,0.1,2-0.5,2.7l-2,2.6 c-0.9,1.2-0.8,2.9,0.3,3.9l10.4,10.4c1.1,1.1,2.7,1.2,3.9,0.3l2.7-2c0.8-0.6,1.7-0.7,2.7-0.5l15,4.5c0.8,0.2,1.3,1,1.3,1.8v9.5 c0,1.6-1.2,2.9-2.7,3c-14.2,1.2-26.4-2.9-36.5-12.5C13.7,40.6,8.7,27.9,8.9,12.1c0-1.6,1.4-3,3-3h10.2c0.8,0,1.5,0.5,1.8,1.3 L29.2,26.3z M45.7,28.5h10.4v3H42.7l-0.1,0.1l-0.1-0.1h-2.1V15.8h3v10.8c2.7-2.6,8.2-8.1,16.5-16.3l1.1-1.1l2.1,2.1L62,12.4 C53.9,20.5,48.5,25.8,45.7,28.5z" })
      );
    }
  }]);
  return CallIn;
}(_react.Component);

exports.default = CallIn;

CallIn.propTypes = {
  disable: _propTypes2.default.bool
};
CallIn.defaultProps = {
  disable: false
};

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallFailed = function (_Component) {
  (0, _inherits3.default)(CallFailed, _Component);

  function CallFailed() {
    (0, _classCallCheck3.default)(this, CallFailed);
    return (0, _possibleConstructorReturn3.default)(this, (CallFailed.__proto__ || (0, _getPrototypeOf2.default)(CallFailed)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallFailed, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M45.9,46.8l-2.7,2c-2.4,1.8-5.7,1.6-7.8-0.6L24.9,37.8c-2.1-2.1-2.3-5.5-0.6-7.8l2-2.6l-5-15.2h-9.4 C11.8,27.1,16.4,39,25.9,48c9.5,9,20.8,12.9,34.2,11.7l0-8.7L45.9,46.8z M29.2,26.3c0.3,0.9,0.1,2-0.5,2.7l-2,2.6 c-0.9,1.2-0.8,2.9,0.3,3.9l10.4,10.4c1.1,1.1,2.7,1.2,3.9,0.3l2.7-2c0.8-0.6,1.7-0.7,2.7-0.5l15,4.5c0.8,0.2,1.3,1,1.3,1.8v9.5 c0,1.6-1.2,2.9-2.7,3c-14.2,1.2-26.4-2.9-36.5-12.5C13.7,40.6,8.7,27.9,8.9,12.1c0-1.6,1.4-3,3-3h10.2c0.8,0,1.5,0.5,1.8,1.3 L29.2,26.3z M53.9,20.4c5,5,7.7,7.7,8.1,8l1.1,1L61,31.6l-1.1-1c-0.3-0.3-3-3-8.1-8c-5.1,5-7.8,7.7-8.1,8l-1.1,1l-2.1-2.2l1.1-1 c0.3-0.3,3-3,8.1-8c-2.3-2.3-5-5-8.1-8l-1.1-1.1l2.1-2.1l1.1,1.1c3.1,3.1,5.8,5.7,8.1,8c2.3-2.3,5-5,8.1-8l1.1-1.1l2.1,2.1L62,12.4 C58.9,15.5,56.2,18.2,53.9,20.4z" })
      );
    }
  }]);
  return CallFailed;
}(_react.Component);

exports.default = CallFailed;

CallFailed.propTypes = {
  disable: _propTypes2.default.bool
};
CallFailed.defaultProps = {
  disable: false
};

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoOut = function (_Component) {
  (0, _inherits3.default)(VideoOut, _Component);

  function VideoOut() {
    (0, _classCallCheck3.default)(this, VideoOut);
    return (0, _possibleConstructorReturn3.default)(this, (VideoOut.__proto__ || (0, _getPrototypeOf2.default)(VideoOut)).apply(this, arguments));
  }

  (0, _createClass3.default)(VideoOut, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass, style: { fill: "#666" } },
        _react2.default.createElement("path", { d: "M14.9,43.5c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3C17.9,42.2,16.5,43.5,14.9,43.5z M8.9,34.5v30h40.4v-30H8.9z M52.3,43.5l13.6-6.8v25.6l-13.6-6.8v9c0,1.7-1.3,3-3,3H8.9c-1.7,0-3-1.3-3-3v-30c0-1.7,1.3-3,3-3h40.4c1.7,0,3,1.3,3,3V43.5z M61.8,6.6c-2.3,2.2-8,7.9-17.2,17.1l-1.1,1.1l2.1,2.1l1.1-1.1C55.5,17.1,61.2,11.4,63.6,9v10.3h3V3.6H50.9v3H61.8z" })
      );
    }
  }]);
  return VideoOut;
}(_react.Component);

exports.default = VideoOut;

VideoOut.propTypes = {
  disable: _propTypes2.default.bool
};
VideoOut.defaultProps = {
  disable: false
};

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoIn = function (_Component) {
  (0, _inherits3.default)(VideoIn, _Component);

  function VideoIn() {
    (0, _classCallCheck3.default)(this, VideoIn);
    return (0, _possibleConstructorReturn3.default)(this, (VideoIn.__proto__ || (0, _getPrototypeOf2.default)(VideoIn)).apply(this, arguments));
  }

  (0, _createClass3.default)(VideoIn, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? newClass + " disable" : newClass, style: { fill: "#666" } },
        _react2.default.createElement("path", { d: "M14.9,43.5c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3C17.9,42.2,16.5,43.5,14.9,43.5z M8.9,34.5v30h40.4v-30H8.9z M52.3,43.5l13.6-6.8v25.6l-13.6-6.8v9c0,1.7-1.3,3-3,3H8.9c-1.7,0-3-1.3-3-3v-30c0-1.7,1.3-3,3-3h40.4c1.7,0,3,1.3,3,3V43.5z M48.7,23.8c2.7-2.7,8.1-8.1,16.3-16.1l1.1-1.1L64,4.5l-1.1,1.1c-8.3,8.2-13.8,13.7-16.5,16.3V11.1h-3v15.7h15.7v-3H48.7z" })
      );
    }
  }]);
  return VideoIn;
}(_react.Component);

exports.default = VideoIn;

VideoIn.propTypes = {
  disable: _propTypes2.default.bool
};
VideoIn.defaultProps = {
  disable: false
};

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallFullWhite = function (_Component) {
  (0, _inherits3.default)(CallFullWhite, _Component);

  function CallFullWhite() {
    (0, _classCallCheck3.default)(this, CallFullWhite);
    return (0, _possibleConstructorReturn3.default)(this, (CallFullWhite.__proto__ || (0, _getPrototypeOf2.default)(CallFullWhite)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallFullWhite, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-white-box disable" : "call-white-box" },
        _react2.default.createElement("path", { d: "M29.4,26.6c0.3,0.9,0.1,2-0.4,2.7L27,31.9c-0.9,1.2-0.8,2.9,0.3,3.9l10.3,10.3c1.1,1.1,2.7,1.2,3.9,0.3l2.6-1.9 c0.8-0.6,1.7-0.7,2.7-0.5l14.8,4.4c0.8,0.2,1.3,1,1.3,1.8v9.4c0,1.6-1.2,2.9-2.7,3C46.1,63.8,34,59.7,24,50.2 c-10-9.5-15-22.2-14.9-38c0-1.7,1.4-3,3-3l10.2,0.1c0.8,0,1.5,0.5,1.8,1.3L29.4,26.6z" })
      );
    }
  }]);
  return CallFullWhite;
}(_react.Component);

exports.default = CallFullWhite;

CallFullWhite.propTypes = {
  disable: _propTypes2.default.bool
};
CallFullWhite.defaultProps = {
  disable: false
};

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallFullWhite = function (_Component) {
  (0, _inherits3.default)(CallFullWhite, _Component);

  function CallFullWhite() {
    (0, _classCallCheck3.default)(this, CallFullWhite);
    return (0, _possibleConstructorReturn3.default)(this, (CallFullWhite.__proto__ || (0, _getPrototypeOf2.default)(CallFullWhite)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallFullWhite, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "video-white-box disable" : "video-white-box" },
        _react2.default.createElement("path", { d: "M52.4,30v-9c0-1.7-1.3-3-3-3H8.9c-1.7,0-3,1.3-3,3v30c0,1.7,1.3,3,3,3h40.5c1.7,0,3-1.3,3-3v-9L66,48.9V23.2L52.4,30z M14.9,30c-1.7,0-3-1.3-3-3s1.3-3,3-3c1.7,0,3,1.3,3,3C17.9,28.6,16.6,30,14.9,30z" })
      );
    }
  }]);
  return CallFullWhite;
}(_react.Component);

exports.default = CallFullWhite;

CallFullWhite.propTypes = {
  disable: _propTypes2.default.bool
};
CallFullWhite.defaultProps = {
  disable: false
};

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallFullWhite = function (_Component) {
  (0, _inherits3.default)(CallFullWhite, _Component);

  function CallFullWhite() {
    (0, _classCallCheck3.default)(this, CallFullWhite);
    return (0, _possibleConstructorReturn3.default)(this, (CallFullWhite.__proto__ || (0, _getPrototypeOf2.default)(CallFullWhite)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallFullWhite, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "video-green-box disable" : "video-green-box" },
        _react2.default.createElement("path", { d: "M8,11.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1s-1,0.4-1,1C7,10.8,7.4,11.3,8,11.3z M22.2,11.5l2.1-1.9c0.1-0.1,0.2-0.1,0.2-0.1 c0.3,0,0.5,0.2,0.5,0.5v9.8c0,0.1,0,0.2-0.1,0.3c-0.1,0.2-0.4,0.3-0.6,0.2l-2.1-1.9v4c0,0.3-0.2,0.5-0.5,0.5H5.5 C5.2,23,5,22.8,5,22.5V7.5C5,7.2,5.2,7,5.5,7h16.2c0.3,0,0.5,0.2,0.5,0.5L22.2,11.5z" })
      );
    }
  }]);
  return CallFullWhite;
}(_react.Component);

exports.default = CallFullWhite;

CallFullWhite.propTypes = {
  disable: _propTypes2.default.bool
};
CallFullWhite.defaultProps = {
  disable: false
};

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallInputDelete = function (_Component) {
  (0, _inherits3.default)(CallInputDelete, _Component);

  function CallInputDelete() {
    (0, _classCallCheck3.default)(this, CallInputDelete);
    return (0, _possibleConstructorReturn3.default)(this, (CallInputDelete.__proto__ || (0, _getPrototypeOf2.default)(CallInputDelete)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallInputDelete, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M2.9,15l5.5,6.9c0.6,0.7,1.4,1.1,2.3,1.1h13.7c1.7,0,3-1.3,3-3V10c0-1.7-1.3-3-3-3H10.7C9.8,7,8.9,7.4,8.4,8.1L2.9,15z M10.7,6h13.7c2.2,0,4,1.8,4,4v10c0,2.2-1.8,4-4,4H10.7c-1.2,0-2.4-0.6-3.1-1.5l-6-7.5l6-7.5C8.3,6.6,9.5,6,10.7,6z M18.3,15.7 l-3.5,3.5L14,18.5l3.5-3.5L14,11.4l0.7-0.7l3.5,3.5l3.5-3.5l0.7,0.7L19,15l3.5,3.5l-0.7,0.7L18.3,15.7z" })
      );
    }
  }]);
  return CallInputDelete;
}(_react.Component);

exports.default = CallInputDelete;

CallInputDelete.propTypes = {
  disable: _propTypes2.default.bool
};
CallInputDelete.defaultProps = {
  disable: false
};

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Noconference = function (_Component) {
    (0, _inherits3.default)(Noconference, _Component);

    function Noconference() {
        (0, _classCallCheck3.default)(this, Noconference);
        return (0, _possibleConstructorReturn3.default)(this, (Noconference.__proto__ || (0, _getPrototypeOf2.default)(Noconference)).apply(this, arguments));
    }

    (0, _createClass3.default)(Noconference, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "svg",
                { width: "16px", height: "16px", viewBox: "0 0 16 16", className: "no-conference", xmlns: "http://www.w3.org/2000/svg" },
                _react2.default.createElement("defs", null),
                _react2.default.createElement(
                    "g",
                    { id: "Page-1", stroke: "none", opacity: "0.8" },
                    _react2.default.createElement(
                        "g",
                        { id: "\u4F1A\u8BAE-pc", transform: "translate(-127.000000, -383.000000)", fill: "#999999" },
                        _react2.default.createElement(
                            "g",
                            { id: "noun_Smile_136430", transform: "translate(127.000000, 383.000000)" },
                            _react2.default.createElement("path", { d: "M5.33333333,7.88888889 C4.84248889,7.88888889 4.44444444,7.49084444 4.44444444,7 C4.44444444,6.50915556 4.84248889,6.11111111 5.33333333,6.11111111 C5.82417778,6.11111111 6.22222222,6.50915556 6.22222222,7 C6.22222222,7.49084444 5.82417778,7.88888889 5.33333333,7.88888889 Z M10.3344,8.6 L10.2837333,8.61546667 C8.79573333,9.0688 7.20586667,9.06328889 5.72088889,8.6 C5.49848889,8.6 5.33102222,8.8 5.36551111,9.01991111 C5.56711111,10.3088 6.65422222,11.4584889 7.99964444,11.4584889 C9.34506667,11.4584889 10.4881778,10.3088 10.6897778,9.01991111 C10.7242667,8.8 10.5569778,8.6 10.3344,8.6 Z M10.6666667,6.11111111 C10.1758222,6.11111111 9.77777778,6.50915556 9.77777778,7 C9.77777778,7.49084444 10.1758222,7.88888889 10.6666667,7.88888889 C11.1575111,7.88888889 11.5555556,7.49084444 11.5555556,7 C11.5555556,6.50915556 11.1575111,6.11111111 10.6666667,6.11111111 Z M16,8 C16,12.4183111 12.4183111,16 8,16 C3.58168889,16 0,12.4183111 0,8 C0,3.58168889 3.58168889,0 8,0 C12.4183111,0 16,3.58168889 16,8 Z M14.9333333,8 C14.9333333,4.17084444 11.8291556,1.06666667 8,1.06666667 C4.17084444,1.06666667 1.06666667,4.17084444 1.06666667,8 C1.06666667,11.8291556 4.17084444,14.9333333 8,14.9333333 C11.8291556,14.9333333 14.9333333,11.8291556 14.9333333,8 Z", id: "Shape" })
                        )
                    )
                )
            );
        }
    }]);
    return Noconference;
}(_react.Component);

exports.default = Noconference;

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BroadCast = function (_Component) {
  (0, _inherits3.default)(BroadCast, _Component);

  function BroadCast() {
    (0, _classCallCheck3.default)(this, BroadCast);
    return (0, _possibleConstructorReturn3.default)(this, (BroadCast.__proto__ || (0, _getPrototypeOf2.default)(BroadCast)).apply(this, arguments));
  }

  (0, _createClass3.default)(BroadCast, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "call-white-box disable" : "call-white-box" },
        _react2.default.createElement("path", { d: "M47.7,63H24.3l8.8-29.4c0.5-1.6,2.2-2.5,3.8-2c1,0.3,1.7,1,2,1.9L47.7,63z M36,30.3c0.9,0,1.7-0.8,1.7-1.7S36.9,27,36,27 s-1.7,0.8-1.7,1.7S35.1,30.3,36,30.3z M36,34.9c-3.4,0-6.2-2.8-6.2-6.2s2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2S39.4,34.9,36,34.9z M47.6,39.4l-2.8-2.8c2.2-2.3,3.5-5.3,3.5-8.6c0-3.2-1.2-6.2-3.3-8.5l2.9-2.7c2.8,3,4.4,7,4.4,11.2C52.2,32.4,50.5,36.4,47.6,39.4z M24.5,16.6l2.8,2.8c-2.3,2.3-3.5,5.4-3.5,8.7c0,3.4,1.4,6.7,3.9,9l-2.7,2.9c-3.2-3.1-5.1-7.3-5.1-11.9 C19.8,23.7,21.5,19.6,24.5,16.6z M54.5,45.5l-2.8-2.8c4-4.1,6.2-9.6,6.2-15.4c0-5.7-2.2-11.1-6-15.2l2.9-2.7 c4.5,4.8,7.1,11.1,7.1,17.9C61.9,34.2,59.2,40.7,54.5,45.5z M17.6,9c-4.8,4.8-7.5,11.4-7.5,18.3c0,7.3,3,14.1,8.2,19l2.7-2.9 c-4.4-4.2-6.9-9.9-6.9-16.1c0-5.9,2.3-11.4,6.4-15.5L17.6,9z" })
      );
    }
  }]);
  return BroadCast;
}(_react.Component);

exports.default = BroadCast;

BroadCast.propTypes = {
  disable: _propTypes2.default.bool
};
BroadCast.defaultProps = {
  disable: false
};

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckButtonNoChecked = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CheckButtonNoChecked, _Component);

  function CheckButtonNoChecked() {
    (0, _classCallCheck3.default)(this, CheckButtonNoChecked);
    return (0, _possibleConstructorReturn3.default)(this, (CheckButtonNoChecked.__proto__ || (0, _getPrototypeOf2.default)(CheckButtonNoChecked)).apply(this, arguments));
  }

  (0, _createClass3.default)(CheckButtonNoChecked, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "gray-icon-1 disable" : "gray-icon-1" },
        _react2.default.createElement("path", { fill: "#cccccc", d: "M60,72H12C5.4,72,0,66.6,0,60V12C0,5.4,5.4,0,12,0h48c6.6,0,12,5.4,12,12v48C72,66.6,66.6,72,60,72z" }),
        _react2.default.createElement("path", { d: "M56,66H16c-5.5,0-10-4.5-10-10V16c0-5.5,4.5-10,10-10h40c5.5,0,10,4.5,10,10v40C66,61.5,61.5,66,56,66z" })
      );
    }
  }]);
  return CheckButtonNoChecked;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = CheckButtonNoChecked;

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckButtonChecked = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CheckButtonChecked, _Component);

  function CheckButtonChecked() {
    (0, _classCallCheck3.default)(this, CheckButtonChecked);
    return (0, _possibleConstructorReturn3.default)(this, (CheckButtonChecked.__proto__ || (0, _getPrototypeOf2.default)(CheckButtonChecked)).apply(this, arguments));
  }

  (0, _createClass3.default)(CheckButtonChecked, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disable ? "blue-icon disable" : "blue-icon" },
        _react2.default.createElement("path", { d: "M60,72H12C5.4,72,0,66.6,0,60V12C0,5.4,5.4,0,12,0h48c6.6,0,12,5.4,12,12v48C72,66.6,66.6,72,60,72z" }),
        _react2.default.createElement("path", { fill: "#FFFFFF", d: "M58,20.3c-2.5-2.5-6.7-2.5-9.2,0L31.1,38l-7.9-7.9c-2.5-2.5-6.7-2.5-9.2,0c-2.5,2.5-2.5,6.7,0,9.2l12.5,12.5c1.3,1.3,3,1.9,4.6,1.9c1.7,0,3.4-0.6,4.6-1.9L58,29.5C60.5,26.9,60.5,22.8,58,20.3z" })
      );
    }
  }]);
  return CheckButtonChecked;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = CheckButtonChecked;

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Play = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Play, _Component);

  function Play() {
    (0, _classCallCheck3.default)(this, Play);
    return (0, _possibleConstructorReturn3.default)(this, (Play.__proto__ || (0, _getPrototypeOf2.default)(Play)).apply(this, arguments));
  }

  (0, _createClass3.default)(Play, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72" },
        _react2.default.createElement("path", { fill: "#ffffff", d: "M31.5,50.5l20.2-12.7c0.3-0.2,0.6-0.5,0.8-0.9c0.5-1,0.2-2.2-0.8-2.8L31.5,21.5c-0.3-0.2-0.7-0.3-1.1-0.3c-1.2,0-2.1,1-2.1,2.2v25.4c0,0.3,0.1,0.7,0.2,1C29.1,50.8,30.4,51.2,31.5,50.5z M36,66C19.4,66,6,52.6,6,36S19.4,6,36,6s30,13.4,30,30S52.6,66,36,66z" })
      );
    }
  }]);
  return Play;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = Play;

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Play = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Play, _Component);

  function Play() {
    (0, _classCallCheck3.default)(this, Play);
    return (0, _possibleConstructorReturn3.default)(this, (Play.__proto__ || (0, _getPrototypeOf2.default)(Play)).apply(this, arguments));
  }

  (0, _createClass3.default)(Play, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72" },
        _react2.default.createElement("path", { fill: "#ffffff", d: "M42,21v30h6V21H42z M24,21v30h6V21H24z M36,66C19.4,66,6,52.6,6,36S19.4,6,36,6s30,13.4,30,30S52.6,66,36,66z" })
      );
    }
  }]);
  return Play;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = Play;

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadAudio = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(HeadAudio, _Component);

  function HeadAudio() {
    (0, _classCallCheck3.default)(this, HeadAudio);
    return (0, _possibleConstructorReturn3.default)(this, (HeadAudio.__proto__ || (0, _getPrototypeOf2.default)(HeadAudio)).apply(this, arguments));
  }

  (0, _createClass3.default)(HeadAudio, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72" },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("rect", { width: "72", height: "72", fill: "#55B4FF" }),
          _react2.default.createElement("path", { opacity: "0.3", fill: "#ffffff", d: "M58,17.9L58,17.9v1.7v27.2v0.1c0,0.1,0,0.2,0,0.3s0,0.2,0,0.3l-0.1,1.1c-0.6,3.9-4.1,6.9-8.2,6.9c-4.6,0-8.3-3.7-8.3-8.2s3.7-8.2,8.3-8.2c1.8,0,3.5,0.6,4.9,1.6V20.6l-28.1,5.6v22.7v1.7l0,0c0.1,0.4,0.1,0.8,0.1,1.2c0,4.6-3.7,8.2-8.3,8.2S10,56.3,10,51.8s3.7-8.2,8.3-8.2c1.8,0,3.4,0.6,4.8,1.5V21.7v-1v-0.8c0-0.8,0.6-1.5,1.4-1.7L56,12c0.9-0.2,1.8,0.4,2,1.4c0,0.1,0,0.2,0,0.3V17.9z" })
        )
      );
    }
  }]);
  return HeadAudio;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = HeadAudio;

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsBg = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(NewsBg, _Component);

  function NewsBg() {
    (0, _classCallCheck3.default)(this, NewsBg);
    return (0, _possibleConstructorReturn3.default)(this, (NewsBg.__proto__ || (0, _getPrototypeOf2.default)(NewsBg)).apply(this, arguments));
  }

  (0, _createClass3.default)(NewsBg, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: "news-bg" },
        _react2.default.createElement("path", { d: "M52.2,57c4.6,2.8,7.7,6.8,9.3,12.2c3.9-6.8,5.5-14.1,4.8-21.9c3.6-4.7,5.7-10.5,5.7-16.8C72,15.2,59.6,2.8,44.3,2.8H27.7C12.4,2.8,0,15.2,0,30.5s12.4,27.7,27.7,27.7h16.6C47.1,58.2,49.7,57.8,52.2,57L52.2,57z" })
      );
    }
  }]);
  return NewsBg;
}(_react.Component), _class.propTypes = {
  disable: _propTypes2.default.bool
}, _class.defaultProps = {
  disable: false
}, _temp);
exports.default = NewsBg;

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mouse = function (_Component) {
  (0, _inherits3.default)(Mouse, _Component);

  function Mouse() {
    (0, _classCallCheck3.default)(this, Mouse);
    return (0, _possibleConstructorReturn3.default)(this, (Mouse.__proto__ || (0, _getPrototypeOf2.default)(Mouse)).apply(this, arguments));
  }

  (0, _createClass3.default)(Mouse, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "mouse-wheel";
      return _react2.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 70", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M65.9,34c1,1.7,3.2,2.3,5,1.3c1.7-1,2.3-3.2,1.3-5l-5.7-9.9l-6.3,3.6L65.9,34z M67.7,19.7l5.7,9.9c1.4,2.4,0.6,5.5-1.9,6.9 c-2.4,1.4-5.5,0.6-6.9-1.9l-5.7-9.9c-4,2.8-5.3,8.2-2.8,12.5l10.4,18.1c3.8,6.6,12.2,8.8,18.8,5c6.6-3.8,8.8-12.2,5-18.8L79.9,23.6 C77.4,19.4,72.1,17.7,67.7,19.7z M58.2,23.6l3.5-2.1C54,8.6,45.8,4.8,37.1,9.9c-5.8,3.3-6.7,8.5-5.2,19.2c0.1,0.6,0.4,2.5,0.4,2.7 c1.2,9,0.9,13.1-2.7,15.8c-6.4,4.9-14.1,3.6-22.8-3.9c-0.3-0.3-0.3-0.7-0.1-1c0.3-0.3,0.7-0.3,1-0.1c8.3,7.1,15.2,8.3,21,3.9 c3-2.3,3.4-6,2.2-14.5c0-0.2-0.3-2.1-0.4-2.7c-0.7-5.2-0.9-8.4-0.3-11.5c0.7-4,2.7-7.1,6.3-9.1C45.9,3.1,54.9,7.2,63,20.7l4-2.3 c5.1-2.4,11.3-0.6,14.1,4.4L91.6,41c4.2,7.3,1.7,16.6-5.6,20.8s-16.6,1.7-20.8-5.6L54.8,38.1C51.9,33.1,53.4,26.7,58.2,23.6z" }),
        _react2.default.createElement("path", { d: "M63.6,22.8L63.6,22.8c1.4-0.8,3.2-0.4,4,1l3.6,6.2c0.8,1.4,0.3,3.2-1.1,4l0,0c-1.4,0.8-3.2,0.3-4-1.1l-3.6-6.2 C61.8,25.3,62.2,23.6,63.6,22.8z" })
      );
    }
  }]);
  return Mouse;
}(_react.Component);

exports.default = Mouse;

Mouse.propTypes = {
  disable: _propTypes2.default.bool,
  className: _propTypes2.default.string
};
Mouse.defaultProps = {
  disable: false
};

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Online = function (_Component) {
  (0, _inherits3.default)(Online, _Component);

  function Online() {
    (0, _classCallCheck3.default)(this, Online);
    return (0, _possibleConstructorReturn3.default)(this, (Online.__proto__ || (0, _getPrototypeOf2.default)(Online)).apply(this, arguments));
  }

  (0, _createClass3.default)(Online, [{
    key: "render",
    value: function render() {
      var className = this.props.className;

      var newClass = className ? className : "Offline";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", className: newClass },
        _react2.default.createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("circle", { fill: "#A6A5A5", cx: "6", cy: "6", r: "4.5" }),
          _react2.default.createElement("circle", { stroke: "#FFF", strokeWidth: "1.5", cx: "6", cy: "6", r: "5.25" })
        )
      );
    }
  }]);
  return Online;
}(_react.Component);

exports.default = Online;

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Online = function (_Component) {
  (0, _inherits3.default)(Online, _Component);

  function Online() {
    (0, _classCallCheck3.default)(this, Online);
    return (0, _possibleConstructorReturn3.default)(this, (Online.__proto__ || (0, _getPrototypeOf2.default)(Online)).apply(this, arguments));
  }

  (0, _createClass3.default)(Online, [{
    key: "render",
    value: function render() {
      var className = this.props.className;

      var newClass = className ? className : "Online";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", className: newClass },
        _react2.default.createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("circle", { fill: "#31E0BC", cx: "6", cy: "6", r: "4.5" }),
          _react2.default.createElement("circle", { stroke: "#FFF", strokeWidth: "1.5", cx: "6", cy: "6", r: "5.25" }),
          _react2.default.createElement("path", {
            d: "M5.652 8.303a.748.748 0 0 0 .53-.22l2.652-2.651a.75.75 0 0 0-1.061-1.06l-2.121 2.12-1.061-1.06a.75.75 0 1 0-1.06 1.06l1.59 1.592c.147.146.339.22.53.22z",
            fill: "#FFF"
          })
        )
      );
    }
  }]);
  return Online;
}(_react.Component);

exports.default = Online;

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Online = function (_Component) {
  (0, _inherits3.default)(Online, _Component);

  function Online() {
    (0, _classCallCheck3.default)(this, Online);
    return (0, _possibleConstructorReturn3.default)(this, (Online.__proto__ || (0, _getPrototypeOf2.default)(Online)).apply(this, arguments));
  }

  (0, _createClass3.default)(Online, [{
    key: "render",
    value: function render() {
      var className = this.props.className;

      var newClass = className ? className : "Busy";
      return _react2.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 12", className: newClass },
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement("circle", { id: "path-1", cx: "6", cy: "6", r: "4.5" })
        ),
        _react2.default.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          _react2.default.createElement(
            "g",
            { id: "icon/states/busy" },
            _react2.default.createElement(
              "g",
              { id: "Oval" },
              _react2.default.createElement("use", { fill: "#FF465B", fillRule: "evenodd", href: "#path-1" }),
              _react2.default.createElement("circle", { stroke: "#FFFFFF", strokeWidth: "1.5", cx: "6", cy: "6", r: "5.25" })
            ),
            _react2.default.createElement("rect", { id: "Rectangle-23", fill: "#FFFFFF", transform: "translate(6.000000, 6.000000) rotate(90.000000) translate(-6.000000, -6.000000) ", x: "5.25", y: "3.75", width: "1.5", height: "4.5", rx: "0.75" })
          )
        )
      );
    }
  }]);
  return Online;
}(_react.Component);

exports.default = Online;

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Online = function (_Component) {
  (0, _inherits3.default)(Online, _Component);

  function Online() {
    (0, _classCallCheck3.default)(this, Online);
    return (0, _possibleConstructorReturn3.default)(this, (Online.__proto__ || (0, _getPrototypeOf2.default)(Online)).apply(this, arguments));
  }

  (0, _createClass3.default)(Online, [{
    key: "render",
    value: function render() {
      var className = this.props.className;

      var newClass = className ? className : "Leave";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", className: newClass },
        _react2.default.createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("circle", { fill: "#FFA423", cx: "6", cy: "6", r: "4.5" }),
          _react2.default.createElement("circle", { stroke: "#FFF", strokeWidth: "1.5", cx: "6", cy: "6", r: "5.25" }),
          _react2.default.createElement("rect", { fill: "#FFF", transform: "rotate(90 7.5 6)", x: "6.75", y: "3.75", width: "1.5", height: "4.5", rx: ".75" }),
          _react2.default.createElement("rect", { fill: "#FFF", x: "5.25", y: "2.25", width: "1.5", height: "4.5", rx: ".75" })
        )
      );
    }
  }]);
  return Online;
}(_react.Component);

exports.default = Online;

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Online = function (_Component) {
  (0, _inherits3.default)(Online, _Component);

  function Online() {
    (0, _classCallCheck3.default)(this, Online);
    return (0, _possibleConstructorReturn3.default)(this, (Online.__proto__ || (0, _getPrototypeOf2.default)(Online)).apply(this, arguments));
  }

  (0, _createClass3.default)(Online, [{
    key: "render",
    value: function render() {
      var className = this.props.className;

      var newClass = className ? className : "MobileOnline";
      return _react2.default.createElement(
        "svg",
        { width: "12", height: "12", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", className: newClass },
        _react2.default.createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("rect", { x: "1.5", y: "1.5", width: "6.75", height: "9", rx: ".75", fill: "#000" }),
          _react2.default.createElement("rect", { stroke: "#FFF", strokeWidth: "1.5", x: ".75", y: ".75", width: "8.25", height: "10.5", rx: ".75" }),
          _react2.default.createElement("path", { fill: "#FFF", d: "M2.25 2.25H7.5v6H2.25z" }),
          _react2.default.createElement("circle", { id: "b", cx: "7.875", cy: "7.875", r: "2.625", fill: "#31E0BC" }),
          _react2.default.createElement("circle", { stroke: "#FFF", strokeWidth: ".75", cx: "7.875", cy: "7.875", r: "3" }),
          _react2.default.createElement("path", {
            d: "M7.61 8.67a.374.374 0 0 0 .265-.11l1.06-1.06a.375.375 0 0 0-.53-.53l-.795.795-.265-.265a.375.375 0 0 0-.53.53l.53.53c.073.074.169.11.265.11z",
            fill: "#FFF"
          })
        )
      );
    }
  }]);
  return Online;
}(_react.Component);

exports.default = Online;

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Safe = function (_Component) {
  (0, _inherits3.default)(Safe, _Component);

  function Safe() {
    (0, _classCallCheck3.default)(this, Safe);
    return (0, _possibleConstructorReturn3.default)(this, (Safe.__proto__ || (0, _getPrototypeOf2.default)(Safe)).apply(this, arguments));
  }

  (0, _createClass3.default)(Safe, [{
    key: "render",
    value: function render() {
      var className = this.props.className;

      var newClass = className ? className : "safe";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: newClass },
        _react2.default.createElement("path", { d: "M36,39c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S39.3,39,36,39z M36,6c6.9,6.6,15,12,23.9,15.5c0.3,7.3-0.6,13.8-2.5,19.6C54,51.2,46.9,59.5,36.1,66c-10.6-5.9-17.7-14.2-21.3-24.9c-2-6-3-12.5-2.7-19.6C21,18,29.1,12.6,36,6z M33,41.5V48c0,1.7,1.3,3,3,3c1.7,0,3-1.3,3-3v-6.5c3.5-1.2,6-4.6,6-8.5c0-5-4-9-9-9s-9,4-9,9C27,36.9,29.5,40.3,33,41.5z" })
      );
    }
  }]);
  return Safe;
}(_react.Component);

exports.default = Safe;

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Key = function (_Component) {
  (0, _inherits3.default)(Key, _Component);

  function Key() {
    (0, _classCallCheck3.default)(this, Key);
    return (0, _possibleConstructorReturn3.default)(this, (Key.__proto__ || (0, _getPrototypeOf2.default)(Key)).apply(this, arguments));
  }

  (0, _createClass3.default)(Key, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 24 24", className: disable ? "Navigation-recent disable" : "Navigation-recent" },
        _react2.default.createElement("path", { d: "M11.3,4.9L11.3,4.9C11.3,4.9,11.3,4.9,11.3,4.9C11.3,4.9,11.3,4.9,11.3,4.9z M11.3,7.7c0,1-0.5,1.9-1.4,2.6c0,0,0,0-0.1,0.1 c-0.3,0.2-0.6,0.4-0.9,0.5c-0.2,0.1-0.3,0.1-0.4,0.2c0,0-0.1,0.1-0.4,0.4l0,6.9l0.3,0.4C8.8,19,9.5,19,10,19h6 c1.2,0,2.2-0.4,2.3-1.6L19,12l0,0c0-1-1-2-2-2h-3V7c0-0.9-0.4-1.5-0.9-1.8c-0.5-0.4-1.3-0.4-1.9-0.2C11.3,4.9,11.3,5.9,11.3,7.7z M17,9c2,0,3,1.2,3,2.7v0.1c0,0,0,0,0,0.1l-0.9,5.7c-0.2,1.6-1.3,2.5-2.9,2.5H9.8c-0.6,0-1.2-0.2-1.7-0.7C7.8,19.5,8,9.9,8.3,10.2 c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.5-0.3,0.8-0.4c0,0,0,0,0.1,0c0.7-0.5,1-1.2,1-1.9V4.9c0-0.3,0.2-0.7,0.5-0.8 c0.8-0.3,1.8-0.3,2.6,0.3C14.3,5,15,5.8,15,7v2H17z M8,20H6c-1.1,0-2-0.9-2-2v-7c0-1.1,0.9-2,2-2h2c0.6,0,1,0.4,1,1v9 C9,19.5,8.6,20,8,20z M6,19h2v-9H6c-0.6,0-1,0.4-1,1v7C5,18.5,5.4,19,6,19z" })
      );
    }
  }]);
  return Key;
}(_react.Component);

exports.default = Key;

Key.propTypes = {
  disable: _propTypes2.default.bool
};
Key.defaultProps = {
  disable: false
};

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpokesMan = function (_Component) {
  (0, _inherits3.default)(SpokesMan, _Component);

  function SpokesMan() {
    (0, _classCallCheck3.default)(this, SpokesMan);
    return (0, _possibleConstructorReturn3.default)(this, (SpokesMan.__proto__ || (0, _getPrototypeOf2.default)(SpokesMan)).apply(this, arguments));
  }

  (0, _createClass3.default)(SpokesMan, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          className = _props.className;

      var newClass = className ? className : "spokesMan";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disabled ? newClass + " disabled" : newClass },
        _react2.default.createElement("path", { d: "M21.7,19.1V28l-0.7,0.4c-0.3,0.2-0.4,1.2-0.1,2.4c0.1,0.5,0.2,0.7,0.3,1.5c0,0.3,0.1,0.4,0.1,0.5c0.1,0.3,0.2,0.5,0.7,1 c0.1,0.1,0.1,0.1,0.2,0.2c0.3,0.2,0.4,0.3,1.2,0.6c0.7,0.3,1.2,0.6,1.6,1.1c0.4,0.5,1.2,1.9,1.4,2.5c0.2,0.5,0.4,1.1,0.6,1.7 c0.2,1,0.3,2.4,0.3,4.2l0,0.3l-0.6,1.2c-1,2-4.2,4.1-8.1,4.4c-2.4,0.2-4.7,1.5-6.9,3.8c-1.3,1.5-2.1,3.5-2.3,6 c6.9,0.1,22.2,0.1,45.8,0c-0.2-1.6-0.5-2.7-0.9-3.5c-1.6-2.8-3.5-4.7-5.8-5.5c-0.8-0.3-1.5-0.5-2.2-0.7c-0.3-0.1-0.6-0.1-0.9-0.2 c-0.1,0-0.7-0.1-0.9-0.2c-0.6-0.1-1-0.2-1.3-0.3c-0.1,0-0.1,0-0.2-0.1c-1.5-0.5-2.4-1.1-3.4-2c-0.3-0.3-0.5-0.5-1.1-1.1 c-1.1-1.1-1.5-2-1.9-3.7c-0.2-1.2-0.2-2.4,0.2-3.5c0.1-0.2,0.1-0.4,0.2-0.5c0.1-0.2,0.1-0.3,0.2-0.4c0.2-0.5,0.5-0.8,1.6-2 c0.1-0.1,0.9-1.1,1.8-2.4c0.4-0.6,0.9-0.8,1.5-0.8c0.2-0.4,0.3-0.8,0.4-1.6c0,0,0.1-1,0.2-1.3c0.2-1,0-1.8-0.5-2.5l-0.3-0.4v-8.7 l-2.6-2.9l-0.3-0.6c-0.4-1.3-0.7-2.3-0.9-3.1C29.3,12.2,24,14.6,21.7,19.1z M53.1,40.4l-2.3-2.2c1.8-1.8,2.8-4.2,2.8-6.8 c0-2.5-1-4.9-2.7-6.7l2.3-2.2c2.3,2.4,3.5,5.5,3.5,8.9C56.8,34.8,55.5,38,53.1,40.4z M60,45.7l-2.3-2.2c3.2-3.3,5-7.6,5-12.2 c0-4.5-1.7-8.8-4.8-12l2.3-2.2c3.6,3.8,5.6,8.8,5.6,14.2C65.9,36.7,63.7,41.8,60,45.7z M40.7,38.3c-0.9,1-1.1,1.2-1.2,1.4 c-0.1,0.2-0.1,0.2-0.2,0.5c-0.2,0.6-0.2,1.2-0.1,1.9c0.2,1.2,0.4,1.6,1.1,2.2c0.5,0.5,0.7,0.7,0.9,0.9c0.7,0.6,1.2,0.9,2.4,1.3 c0.1,0,0.1,0,0.2,0.1c0.3,0.1,0.6,0.2,1,0.3c0.2,0,0.8,0.2,0.9,0.2c0.4,0.1,0.7,0.2,1,0.2c0.9,0.2,1.7,0.4,2.5,0.8 c3,1.1,5.5,3.5,7.4,6.9c0.8,1.5,1.3,3.6,1.4,6.4l0.1,1.6l-1.6,0c-26.5,0.1-42.9,0.1-49,0l-1.5,0v-1.5c0-4,1-7.2,3.2-9.6 c2.8-2.8,5.7-4.4,8.9-4.7c2.9-0.3,5.2-1.8,5.7-2.8c0.1-0.3,0.2-0.5,0.3-0.6c0-1.4-0.1-2.5-0.2-3.3c-0.1-0.4-0.2-0.8-0.4-1.1 c-0.2-0.4-0.9-1.6-1.1-2c0,0,0,0-0.3-0.1c-1.1-0.5-1.3-0.5-1.9-1c-0.2-0.1-0.3-0.3-0.5-0.4c-0.8-0.8-1.2-1.4-1.5-2.2 c-0.1-0.3-0.1-0.5-0.2-1c-0.1-0.6-0.1-0.8-0.2-1.1c-0.5-1.9-0.3-4,0.7-5.2v-7.7l0.1-0.6C21.7,12,28.6,9,39.1,9h1.2l0.2,1.2 c0.1,0.5,0.4,1.8,1,3.7l3.2,3.5v8.9c0.7,1.2,1,2.7,0.7,4.3c0,0.3-0.2,1.2-0.2,1.3c-0.2,1.2-0.4,1.8-0.7,2.6 c-0.1,0.2-0.3,0.5-0.5,0.7c-0.3,0.4-0.7,0.6-1.1,0.7c-0.2,0-0.3,0.1-0.5,0.1C41.5,37.3,40.9,38.1,40.7,38.3z" })
      );
    }
  }]);
  return SpokesMan;
}(_react.Component);

exports.default = SpokesMan;

SpokesMan.propTypes = {
  disable: _propTypes2.default.bool
};
SpokesMan.defaultProps = {
  disable: false
};

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpokesManTwo = function (_Component) {
  (0, _inherits3.default)(SpokesManTwo, _Component);

  function SpokesManTwo() {
    (0, _classCallCheck3.default)(this, SpokesManTwo);
    return (0, _possibleConstructorReturn3.default)(this, (SpokesManTwo.__proto__ || (0, _getPrototypeOf2.default)(SpokesManTwo)).apply(this, arguments));
  }

  (0, _createClass3.default)(SpokesManTwo, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          className = _props.className;

      var newClass = className ? className : "spokesManTwo";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: disabled ? newClass + " disabled" : newClass },
        _react2.default.createElement("path", { d: "M21.7,19.1V28l-0.7,0.4c-0.3,0.2-0.4,1.2-0.1,2.4c0.1,0.5,0.2,0.7,0.3,1.5c0,0.3,0.1,0.4,0.1,0.5c0.1,0.3,0.2,0.5,0.7,1 c0.1,0.1,0.1,0.1,0.2,0.2c0.3,0.2,0.4,0.3,1.2,0.6c0.7,0.3,1.2,0.6,1.6,1.1c0.4,0.5,1.2,1.9,1.4,2.5c0.2,0.5,0.4,1.1,0.6,1.7 c0.2,1,0.3,2.4,0.3,4.2l0,0.3l-0.6,1.2c-1,2-4.2,4.1-8.1,4.4c-2.4,0.2-4.7,1.5-6.9,3.8c-1.3,1.5-2.1,3.5-2.3,6 c6.9,0.1,22.2,0.1,45.8,0c-0.2-1.6-0.5-2.7-0.9-3.5c-1.6-2.8-3.5-4.7-5.8-5.5c-0.8-0.3-1.5-0.5-2.2-0.7c-0.3-0.1-0.6-0.1-0.9-0.2 c-0.1,0-0.7-0.1-0.9-0.2c-0.6-0.1-1-0.2-1.3-0.3c-0.1,0-0.1,0-0.2-0.1c-1.5-0.5-2.4-1.1-3.4-2c-0.3-0.3-0.5-0.5-1.1-1.1 c-1.1-1.1-1.5-2-1.9-3.7c-0.2-1.2-0.2-2.4,0.2-3.5c0.1-0.2,0.1-0.4,0.2-0.5c0.1-0.2,0.1-0.3,0.2-0.4c0.2-0.5,0.5-0.8,1.6-2 c0.1-0.1,0.9-1.1,1.8-2.4c0.4-0.6,0.9-0.8,1.5-0.8c0.2-0.4,0.3-0.8,0.4-1.6c0,0,0.1-1,0.2-1.3c0.2-1,0-1.8-0.5-2.5l-0.3-0.4v-8.7 l-2.6-2.9l-0.3-0.6c-0.4-1.3-0.7-2.3-0.9-3.1C29.3,12.2,24,14.6,21.7,19.1z M53.1,40.4l-2.3-2.2c1.8-1.8,2.8-4.2,2.8-6.8 c0-2.5-1-4.9-2.7-6.7l2.3-2.2c2.3,2.4,3.5,5.5,3.5,8.9C56.8,34.8,55.5,38,53.1,40.4z M60,45.7l-2.3-2.2c3.2-3.3,5-7.6,5-12.2 c0-4.5-1.7-8.8-4.8-12l2.3-2.2c3.6,3.8,5.6,8.8,5.6,14.2C65.9,36.7,63.7,41.8,60,45.7z M40.7,38.3c-0.9,1-1.1,1.2-1.2,1.4 c-0.1,0.2-0.1,0.2-0.2,0.5c-0.2,0.6-0.2,1.2-0.1,1.9c0.2,1.2,0.4,1.6,1.1,2.2c0.5,0.5,0.7,0.7,0.9,0.9c0.7,0.6,1.2,0.9,2.4,1.3 c0.1,0,0.1,0,0.2,0.1c0.3,0.1,0.6,0.2,1,0.3c0.2,0,0.8,0.2,0.9,0.2c0.4,0.1,0.7,0.2,1,0.2c0.9,0.2,1.7,0.4,2.5,0.8 c3,1.1,5.5,3.5,7.4,6.9c0.8,1.5,1.3,3.6,1.4,6.4l0.1,1.6l-1.6,0c-26.5,0.1-42.9,0.1-49,0l-1.5,0v-1.5c0-4,1-7.2,3.2-9.6 c2.8-2.8,5.7-4.4,8.9-4.7c2.9-0.3,5.2-1.8,5.7-2.8c0.1-0.3,0.2-0.5,0.3-0.6c0-1.4-0.1-2.5-0.2-3.3c-0.1-0.4-0.2-0.8-0.4-1.1 c-0.2-0.4-0.9-1.6-1.1-2c0,0,0,0-0.3-0.1c-1.1-0.5-1.3-0.5-1.9-1c-0.2-0.1-0.3-0.3-0.5-0.4c-0.8-0.8-1.2-1.4-1.5-2.2 c-0.1-0.3-0.1-0.5-0.2-1c-0.1-0.6-0.1-0.8-0.2-1.1c-0.5-1.9-0.3-4,0.7-5.2v-7.7l0.1-0.6C21.7,12,28.6,9,39.1,9h1.2l0.2,1.2 c0.1,0.5,0.4,1.8,1,3.7l3.2,3.5v8.9c0.7,1.2,1,2.7,0.7,4.3c0,0.3-0.2,1.2-0.2,1.3c-0.2,1.2-0.4,1.8-0.7,2.6 c-0.1,0.2-0.3,0.5-0.5,0.7c-0.3,0.4-0.7,0.6-1.1,0.7c-0.2,0-0.3,0.1-0.5,0.1C41.5,37.3,40.9,38.1,40.7,38.3z" })
      );
    }
  }]);
  return SpokesManTwo;
}(_react.Component);

exports.default = SpokesManTwo;

SpokesManTwo.propTypes = {
  disable: _propTypes2.default.bool
};
SpokesManTwo.defaultProps = {
  disable: false
};

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TerminalConnectedConfBg = function (_Component) {
    (0, _inherits3.default)(TerminalConnectedConfBg, _Component);

    function TerminalConnectedConfBg() {
        (0, _classCallCheck3.default)(this, TerminalConnectedConfBg);
        return (0, _possibleConstructorReturn3.default)(this, (TerminalConnectedConfBg.__proto__ || (0, _getPrototypeOf2.default)(TerminalConnectedConfBg)).apply(this, arguments));
    }

    (0, _createClass3.default)(TerminalConnectedConfBg, [{
        key: "render",
        value: function render() {
            {/* <style type="text/css">
                   .st0{fill:#979797;}
                   .st1{enable-background:new;}
                </style> */}
            return _react2.default.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 400 400", className: "terminal-connected-conference-bg" },
                _react2.default.createElement(
                    "g",
                    { style: { fill: "#979797" } },
                    _react2.default.createElement("path", { d: "M363.2,307H36.8c-3.7,0-6.8-3.1-6.8-6.8V99.8c0-3.7,3.1-6.8,6.8-6.8h326.4c3.7,0,6.8,3.1,6.8,6.8v200.4 C370,303.9,366.9,307,363.2,307z M36.8,97c-1.5,0-2.8,1.3-2.8,2.8v200.4c0,1.5,1.3,2.8,2.8,2.8h326.4c1.5,0,2.8-1.3,2.8-2.8V99.8 c0-1.5-1.3-2.8-2.8-2.8H36.8z" }),
                    _react2.default.createElement("path", { d: "M370,291.6H30V107h340V291.6z M34,287.6h332V111H34V287.6z" }),
                    _react2.default.createElement("path", { d: "M191.6,100.3h16.8c1.2,0,2.1,0.9,2.1,2.1s-0.9,2.1-2.1,2.1h-16.8c-1.2,0-2.1-0.9-2.1-2.1 C189.5,101.2,190.4,100.3,191.6,100.3z" }),
                    _react2.default.createElement("circle", { cx: "200", cy: "297.6", r: "4.2" })
                ),
                _react2.default.createElement(
                    "g",
                    { style: { fill: "#979797" } },
                    _react2.default.createElement("path", { d: "M143.5,177.6v17.7h24.8v-17.7h3.4v40h-3.4v-19.1h-24.8v19.1h-3.4v-40H143.5z" }),
                    _react2.default.createElement("path", { d: "M201.4,192.5c2,2.7,3.1,6.6,3.3,11.6h-23.5c0.2,3.5,1.1,6.3,2.9,8.3c1.8,2,4.1,3,7.2,3c2.6,0,4.8-0.7,6.4-2.1 c1.3-1.2,2.4-2.9,3.1-5.1h3.4c-0.7,2.8-2,5.1-3.9,6.9c-2.4,2.1-5.3,3.2-9,3.2c-4.1,0-7.3-1.4-9.7-4.1c-2.5-2.8-3.8-6.5-3.8-11.1 c0-4.3,1.2-7.8,3.6-10.7c2.5-3,5.7-4.5,9.8-4.5C195.7,187.9,199.1,189.4,201.4,192.5z M184.2,193.7c-1.7,2-2.7,4.5-3,7.6h19.9 c-0.6-7.1-3.9-10.6-10-10.6C188.3,190.8,186,191.7,184.2,193.7z" }),
                    _react2.default.createElement("path", { d: "M214.5,176.8v40.8h-3.4v-40.8H214.5z" }),
                    _react2.default.createElement("path", { d: "M227,176.8v40.8h-3.4v-40.8H227z" }),
                    _react2.default.createElement("path", { d: "M258,192.4c2.4,2.9,3.5,6.4,3.5,10.7c0,4.3-1.2,7.8-3.5,10.6c-2.6,3-6,4.6-10.2,4.6s-7.7-1.6-10.2-4.6 c-2.4-2.9-3.5-6.4-3.5-10.6c0-4.3,1.2-7.8,3.6-10.7c2.5-3.1,5.9-4.6,10.2-4.6S255.5,189.4,258,192.4z M240,194.6 c-1.7,2.2-2.6,5.1-2.6,8.6c0,3.4,0.8,6.3,2.6,8.5c1.9,2.5,4.5,3.8,7.8,3.8s5.9-1.3,7.8-3.8c1.7-2.3,2.6-5.2,2.6-8.5 c0-3.5-0.9-6.3-2.6-8.6c-1.9-2.6-4.5-3.8-7.8-3.8S241.9,192,240,194.6z" })
                )
            );
        }
    }]);
    return TerminalConnectedConfBg;
}(_react.Component);

exports.default = TerminalConnectedConfBg;

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfLock = function (_Component) {
  (0, _inherits3.default)(ConfLock, _Component);

  function ConfLock() {
    (0, _classCallCheck3.default)(this, ConfLock);
    return (0, _possibleConstructorReturn3.default)(this, (ConfLock.__proto__ || (0, _getPrototypeOf2.default)(ConfLock)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfLock, [{
    key: "render",
    value: function render() {
      var className = this.props.className;

      var newClass = className ? className : "confLock";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: newClass },
        _react2.default.createElement("path", { d: "M35.9,9c4.3,4.4,15,11.4,22.6,12.5C58.5,46.7,47,59,35.9,63c-11-4.3-22.4-16.4-22.4-41.5C21.3,19.8,32.2,13.3,35.9,9z M34.3,39l-4.7-4.7c-0.7-0.7-1.8-0.7-2.5,0c-0.7,0.7-0.7,1.8,0,2.5l6,6c0.3,0.3,0.8,0.5,1.3,0.5c0.5,0,1-0.2,1.4-0.5l9.9-9.9 c0.7-0.7,0.7-1.8,0-2.5c-0.7-0.7-1.8-0.7-2.5,0L34.3,39z M36,13.9c-4.7,4-12.4,8.2-18.8,10.3c0.7,18.4,8,30.1,18.8,34.9 c10.8-4.5,18.2-16.3,18.9-34.8C48.6,22.6,41.1,18.3,36,13.9z" })
      );
    }
  }]);
  return ConfLock;
}(_react.Component);

exports.default = ConfLock;

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Delete = function (_Component) {
  (0, _inherits3.default)(Delete, _Component);

  function Delete() {
    (0, _classCallCheck3.default)(this, Delete);
    return (0, _possibleConstructorReturn3.default)(this, (Delete.__proto__ || (0, _getPrototypeOf2.default)(Delete)).apply(this, arguments));
  }

  (0, _createClass3.default)(Delete, [{
    key: "render",
    value: function render() {
      var className = this.props.className;

      var newClass = className ? className : "delete";
      return _react2.default.createElement(
        "svg",
        { version: "1.1", id: "\u56FE\u5C42_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px",
          viewBox: "0 0 16 16", className: newClass },
        _react2.default.createElement("path", { d: "M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8.7,8L11,5.7L10.3,5L8,7.3L5.7,5L5,5.7L7.3,8L5,10.3L5.7,11 L8,8.7l2.3,2.3l0.7-0.7L8.7,8z" })
      );
    }
  }]);
  return Delete;
}(_react.Component);

exports.default = Delete;

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BuildMeeting = function (_Component) {
  (0, _inherits3.default)(BuildMeeting, _Component);

  function BuildMeeting() {
    (0, _classCallCheck3.default)(this, BuildMeeting);
    return (0, _possibleConstructorReturn3.default)(this, (BuildMeeting.__proto__ || (0, _getPrototypeOf2.default)(BuildMeeting)).apply(this, arguments));
  }

  (0, _createClass3.default)(BuildMeeting, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { version: "1.1", id: "\u56FE\u5C42_1", x: "0px", y: "0px",
          viewBox: "0 0 30 30", style: { enableBackground: "new 0 0 30 30", fillRule: "evenodd", clipRule: "evenodd" } },
        _react2.default.createElement("circle", { fill: "#63BAFF", cx: "15", cy: "15", r: "13" }),
        _react2.default.createElement("path", { fill: "#FFFFFF", d: "M9.3,14.2c0,0-0.4-1.4-0.2-1.8c0.2-0.4,1-1.1,1.2-1.3c0.7-0.6,1-0.9,1.6,0.3l0.9,1.7c0,0,0.1,0.3-0.2,0.6 c-0.3,0.3-0.6,0.6-0.6,0.6s0,0.4,0.3,0.8c0.3,0.4,1.1,1.5,1.8,2c0.7,0.6,1.2,0.8,1.4,0.7c0,0,0.4-0.4,0.6-0.6 c0.2-0.2,0.4-0.4,0.7-0.3c0.3,0.1,2.4,1.4,2.4,1.4s0.4,0.2,0.1,0.6c-0.3,0.4-1.5,1.5-1.5,1.5s-0.4,0.5-1.7,0.2c-1.4-0.3-3-1.3-4.6-3 C11.7,17.7,10,16.1,9.3,14.2z M17.9,11.2v-2h1v2h2v1h-2v2h-1v-2h-2v-1H17.9z" })
      );
    }
  }]);
  return BuildMeeting;
}(_react.Component);

exports.default = BuildMeeting;

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JoinMeeting = function (_Component) {
  (0, _inherits3.default)(JoinMeeting, _Component);

  function JoinMeeting() {
    (0, _classCallCheck3.default)(this, JoinMeeting);
    return (0, _possibleConstructorReturn3.default)(this, (JoinMeeting.__proto__ || (0, _getPrototypeOf2.default)(JoinMeeting)).apply(this, arguments));
  }

  (0, _createClass3.default)(JoinMeeting, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { version: "1.1", id: "\u56FE\u5C42_1", x: "0px", y: "0px",
          viewBox: "0 0 30 30", style: { enableBackground: "new 0 0 30 30", fillRule: "evenodd", clipRule: "evenodd" } },
        _react2.default.createElement("circle", { fill: "#63BAFF", cx: "15", cy: "15", r: "13" }),
        _react2.default.createElement("path", { fill: "#FFFFFF", d: "M13,11h0.5v8H13V11z M16.6,15.7c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6S16,14.8,16,15.1 C16,15.4,16.3,15.7,16.6,15.7z M16.5,9.5h4.6c0.4,0,0.7,0.3,0.7,0.7v9.7c0,0.4-0.3,0.7-0.7,0.7h-4.6c-1,0-1.7-0.8-1.7-1.7v-7.5 C14.7,10.3,15.5,9.5,16.5,9.5z M10.5,15.5H8.3v-0.7h2.4l-1.1-1.1l0.5-0.5l1.9,1.8l-0.1,0.1l0,0l-1.8,1.8l-0.5-0.5L10.5,15.5z" })
      );
    }
  }]);
  return JoinMeeting;
}(_react.Component);

exports.default = JoinMeeting;

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CorporateAddressBook = function (_Component) {
  (0, _inherits3.default)(CorporateAddressBook, _Component);

  function CorporateAddressBook() {
    (0, _classCallCheck3.default)(this, CorporateAddressBook);
    return (0, _possibleConstructorReturn3.default)(this, (CorporateAddressBook.__proto__ || (0, _getPrototypeOf2.default)(CorporateAddressBook)).apply(this, arguments));
  }

  (0, _createClass3.default)(CorporateAddressBook, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { version: "1.1", id: "\u56FE\u5C42_1", x: "0px", y: "0px",
          viewBox: "0 0 30 30", style: { enableBackground: "new 0 0 30 30", fillRule: "evenodd", clipRule: "evenodd" } },
        _react2.default.createElement("circle", { fill: "#63BAFF", cx: "15", cy: "15", r: "13" }),
        _react2.default.createElement("path", { fill: "#FFFFFF", d: "M20,8.6c0.6,0.1,1,0.6,1,1.2v10.4c0,0.6-0.4,1.1-1,1.2c0.3-0.2,0.4-0.6,0.4-0.9v-11C20.4,9.1,20.2,8.8,20,8.6z M15.2,15.8v-0.2c0.2-0.2,0.4-0.4,0.5-0.6c0.2,0,0.3-0.2,0.3-0.4L16,14c0-0.2-0.1-0.3-0.2-0.4l0-0.7c0,0,0-0.1,0-0.1l-0.3-0.3l0-0.5 c0-0.1-0.1-0.2-0.2-0.2l-0.7,0c-0.7,0-1.3,0.3-1.7,0.8l-0.1,0.2c0,0,0,0.1,0,0.1l0,0.7c-0.1,0.1-0.2,0.2-0.2,0.4l0.1,0.6 c0,0.2,0.1,0.3,0.3,0.4c0,0.1,0.1,0.1,0.1,0.2c0.1,0.2,0.2,0.3,0.4,0.4v0.2c0,0.2-0.1,0.3-0.4,0.3h-0.1c-0.8,0-1.5,0.7-1.7,1.5 l-0.1,0.5c0,0.1,0.1,0.2,0.2,0.2h5.9c0.1,0,0.2-0.1,0.2-0.2l-0.1-0.4c-0.2-0.8-0.9-1.5-1.7-1.5h-0.1C15.3,16.1,15.2,16,15.2,15.8z M18.5,8.5c0.7,0,1.3,0.6,1.3,1.3v10.5c0,0.7-0.6,1.3-1.3,1.3h-8.2c-0.7,0-1.3-0.6-1.3-1.3V9.8c0-0.7,0.6-1.3,1.3-1.3H18.5z" })
      );
    }
  }]);
  return CorporateAddressBook;
}(_react.Component);

exports.default = CorporateAddressBook;

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallVideo = function (_Component) {
  (0, _inherits3.default)(CallVideo, _Component);

  function CallVideo() {
    (0, _classCallCheck3.default)(this, CallVideo);
    return (0, _possibleConstructorReturn3.default)(this, (CallVideo.__proto__ || (0, _getPrototypeOf2.default)(CallVideo)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallVideo, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          svgClassName = _props.svgClassName;
      // let newClass = className ? className : "call-share-box";

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "Navigation-recent disable " : "Navigation-recent" },
        _react2.default.createElement("path", { d: "M8,11c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S8.6,11,8,11z M25,11l-3,1.9V7H6v16h16v-5l3,2V11z M23,11l3-2v13l-3-2v3 c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1V7c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1V11z" })
      );
    }
  }]);
  return CallVideo;
}(_react.Component);
// CallShareBox.propTypes = {
//   disable: PropTypes.bool
// };
// CallShareBox.defaultProps = {
//   disable: false
// };


exports.default = CallVideo;

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AtIm = function (_Component) {
  (0, _inherits3.default)(AtIm, _Component);

  function AtIm() {
    (0, _classCallCheck3.default)(this, AtIm);
    return (0, _possibleConstructorReturn3.default)(this, (AtIm.__proto__ || (0, _getPrototypeOf2.default)(AtIm)).apply(this, arguments));
  }

  (0, _createClass3.default)(AtIm, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 24 24", className: disable ? "Navigation-recent disable" : "Navigation-recent" },
        _react2.default.createElement("path", { d: "M14.6,14c-0.1,0.2-0.2,0.5-0.2,0.7c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.2,0.1,0.4,0.3,0.5c0.2,0.1,0.4,0.2,0.6,0.2 c0.5,0,1-0.2,1.5-0.5c0.5-0.3,0.9-0.8,1.3-1.3c0.4-0.5,0.7-1.1,0.9-1.8c0.2-0.6,0.3-1.3,0.3-1.9c0-0.9-0.2-1.7-0.6-2.4 c-0.4-0.7-0.9-1.3-1.5-1.8c-0.6-0.5-1.4-0.9-2.2-1.2c-0.8-0.3-1.6-0.4-2.5-0.4c-1,0-2,0.2-2.9,0.6C8.5,5.7,7.8,6.2,7.1,6.9 C6.4,7.6,5.9,8.4,5.5,9.3c-0.4,0.9-0.6,1.8-0.6,2.8c0,1.1,0.2,2,0.7,2.9c0.4,0.9,1,1.6,1.7,2.3c0.7,0.6,1.5,1.1,2.4,1.5 c0.9,0.4,1.8,0.5,2.8,0.5c0.6,0,1.2-0.1,1.8-0.2c0.6-0.2,1.2-0.4,1.7-0.7c0.5-0.3,1-0.6,1.5-1c0.5-0.4,0.9-0.8,1.2-1.3h1 c-0.3,0.6-0.8,1.2-1.3,1.6c-0.5,0.5-1.1,0.9-1.7,1.2c-0.6,0.3-1.3,0.6-2,0.8c-0.7,0.2-1.4,0.3-2.2,0.3c-1.2,0-2.3-0.2-3.3-0.6 c-1-0.4-1.9-1-2.7-1.7c-0.8-0.7-1.3-1.6-1.8-2.6c-0.4-1-0.6-2-0.6-3.1c0-1.1,0.2-2.1,0.7-3.1c0.4-1,1-1.8,1.8-2.5 C7.2,5.6,8.1,5,9.1,4.6c1-0.4,2.1-0.6,3.2-0.6c1.1,0,2.1,0.2,3,0.5c0.9,0.3,1.7,0.8,2.4,1.4C18.5,6.5,19,7.2,19.4,8 c0.4,0.8,0.6,1.7,0.6,2.7c0,0.8-0.2,1.6-0.5,2.3c-0.3,0.7-0.7,1.4-1.2,2c-0.5,0.6-1.1,1-1.7,1.4c-0.6,0.3-1.2,0.5-1.8,0.5 c-0.4,0-0.7-0.1-1-0.4c-0.3-0.2-0.4-0.6-0.5-1.1h0c-0.4,0.5-0.8,0.9-1.3,1.1c-0.5,0.3-1.1,0.4-1.7,0.4c-0.4,0-0.8-0.1-1.2-0.3 c-0.4-0.2-0.7-0.4-0.9-0.7c-0.2-0.3-0.4-0.6-0.6-1c-0.1-0.4-0.2-0.8-0.2-1.2c0-0.7,0.1-1.5,0.4-2.2C8,10.6,8.4,9.9,8.9,9.3 c0.5-0.6,1-1.1,1.7-1.5c0.6-0.4,1.4-0.6,2.1-0.6c0.4,0,0.7,0.1,1,0.2c0.3,0.1,0.5,0.3,0.8,0.4C14.7,8,14.8,8.2,15,8.5 c0.1,0.2,0.2,0.5,0.3,0.7h0l0.5-1.5h0.9L14.6,14z M12.6,7.9c-0.6,0-1.2,0.2-1.8,0.6c-0.5,0.4-1,0.8-1.4,1.4 c-0.4,0.6-0.7,1.2-0.9,1.8c-0.2,0.6-0.3,1.3-0.3,1.8c0,0.8,0.2,1.4,0.7,1.9c0.4,0.5,1,0.7,1.7,0.7c0.4,0,0.9-0.2,1.4-0.5 c0.5-0.3,0.9-0.7,1.3-1.2c0.2-0.3,0.4-0.6,0.6-0.9c0.2-0.3,0.3-0.7,0.5-1c0.1-0.3,0.2-0.7,0.3-1c0.1-0.3,0.1-0.7,0.1-0.9 c0-0.2,0-0.4-0.1-0.7c0-0.3-0.1-0.6-0.3-0.8c-0.1-0.3-0.4-0.5-0.6-0.7C13.4,8,13,7.9,12.6,7.9z" })
      );
    }
  }]);
  return AtIm;
}(_react.Component);

exports.default = AtIm;

AtIm.propTypes = {
  disable: _propTypes2.default.bool
};
AtIm.defaultProps = {
  disable: false
};

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Word = function (_Component) {
  (0, _inherits3.default)(Word, _Component);

  function Word() {
    (0, _classCallCheck3.default)(this, Word);
    return (0, _possibleConstructorReturn3.default)(this, (Word.__proto__ || (0, _getPrototypeOf2.default)(Word)).apply(this, arguments));
  }

  (0, _createClass3.default)(Word, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { x: "0px", y: "0px", viewBox: "0 0 24 24", className: disable ? "Navigation-recent  disable " : "Navigation-recent" },
        _react2.default.createElement("path", { d: "M18.1,18c1.6,0,2.7-0.8,2.7-2.1v-1.5c0-0.1,0-0.1-0.1-0.1h-2.3c-1.9,0-2.7,0.6-2.7,1.9C15.8,17.4,16.6,18,18.1,18z M18.4,10.1c-1.2,0-1.8,0.3-2.4,0.7c-0.1,0.1-0.2,0.1-0.3,0l-0.3-0.5c-0.1-0.1,0-0.2,0.1-0.3c0.7-0.6,1.7-0.9,3-0.9 c2.5,0,3.5,0.8,3.5,3.2v6.4c0,0.1-0.1,0.2-0.2,0.2h-0.6c-0.1,0-0.2-0.1-0.2-0.2v-1h0c-0.4,0.8-1.4,1.4-3,1.4c-1.9,0-3.2-1-3.2-2.8 c0-1.9,1.3-2.8,3.6-2.8h2.4c0.1,0,0.1,0,0.1-0.1v-1C20.9,10.7,20.3,10.1,18.4,10.1z M4.8,14.2H10L7.5,7H7.4L4.8,14.2z M2.1,18.6 L6.8,5.4c0-0.1,0.1-0.2,0.2-0.2h0.7C7.9,5.2,8,5.3,8,5.4l4.7,13.2c0,0.1,0,0.2-0.1,0.2h-0.8c-0.1,0-0.2,0-0.3-0.2l-1.2-3.3H4.5 l-1.2,3.3c-0.1,0.2-0.1,0.2-0.3,0.2H2.2C2.1,18.8,2,18.7,2.1,18.6z" })
      );
    }
  }]);
  return Word;
}(_react.Component);

exports.default = Word;

Word.propTypes = {
  disable: _propTypes2.default.bool
};
Word.defaultProps = {
  disable: false
};

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Data = function (_Component) {
  (0, _inherits3.default)(Data, _Component);

  function Data() {
    (0, _classCallCheck3.default)(this, Data);
    return (0, _possibleConstructorReturn3.default)(this, (Data.__proto__ || (0, _getPrototypeOf2.default)(Data)).apply(this, arguments));
  }

  (0, _createClass3.default)(Data, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          disable = _props.disable,
          className = _props.className;

      var newClass = className ? className : "Navigation";
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 16 16", className: disable ? newClass + " disable" : newClass },
        _react2.default.createElement("path", { d: "M10,9h2v1h-2V9z M7,11h2v1H7V11z M4,11h2v1H4V11z M7,9h2v1H7V9z M4,9h2v1H4V9z M13,8H3v5h10V8z M11,4h2c0.6,0,1,0.4,1,1v8 c0,0.6-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h2V2.5C5,2.2,5.2,2,5.5,2S6,2.2,6,2.5V4h4V2.5C10,2.2,10.2,2,10.5,2 S11,2.2,11,2.5V4z M10,5H6v0.5C6,5.8,5.8,6,5.5,6S5,5.8,5,5.5V5H3v2h10V5h-2v0.5C11,5.8,10.8,6,10.5,6S10,5.8,10,5.5V5z" })
      );
    }
  }]);
  return Data;
}(_react.Component);

exports.default = Data;

Data.propTypes = {
  disable: _propTypes2.default.bool
};
Data.defaultProps = {
  disable: false
};

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkageOpen = function (_Component) {
  (0, _inherits3.default)(LinkageOpen, _Component);

  function LinkageOpen() {
    (0, _classCallCheck3.default)(this, LinkageOpen);
    return (0, _possibleConstructorReturn3.default)(this, (LinkageOpen.__proto__ || (0, _getPrototypeOf2.default)(LinkageOpen)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinkageOpen, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", version: "1.1", className: disable ? "arrow-menu disable" : "arrow-menu" },
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement("path", { d: "M26,15 L25,15 L25,9 C25,8.44771525 24.5522847,8 24,8 L13,8 L13,7 L24,7 C25.1045695,7 26,7.8954305 26,9 L26,15 Z M18,23 L13,23 L13,22 L18,22 L18,23 Z M8,5 L10,5 C11.1045695,5 12,5.8954305 12,7 L12,23 C12,24.1045695 11.1045695,25 10,25 L8,25 C6.8954305,25 6,24.1045695 6,23 L6,7 C6,5.8954305 6.8954305,5 8,5 Z M8,6 C7.44771525,6 7,6.44771525 7,7 L7,23 C7,23.5522847 7.44771525,24 8,24 L10,24 C10.5522847,24 11,23.5522847 11,23 L11,7 C11,6.44771525 10.5522847,6 10,6 L8,6 Z M14,9 L23,9 C23.5522847,9 24,9.44771525 24,10 L24,11 C24,11.5522847 23.5522847,12 23,12 L14,12 C13.4477153,12 13,11.5522847 13,11 L13,10 C13,9.44771525 13.4477153,9 14,9 Z M4,7 L5,7 L5,23 L4,23 L4,7 Z M15,15 C14.4477153,15 14,14.5522847 14,14 C14,13.4477153 14.4477153,13 15,13 C15.5522847,13 16,13.4477153 16,14 C16,14.5522847 15.5522847,15 15,15 Z M19,15 C18.4477153,15 18,14.5522847 18,14 C18,13.4477153 18.4477153,13 19,13 C19.5522847,13 20,13.4477153 20,14 C20,14.5522847 19.5522847,15 19,15 Z M23,15 C22.4477153,15 22,14.5522847 22,14 C22,13.4477153 22.4477153,13 23,13 C23.5522847,13 24,13.4477153 24,14 C24,14.5522847 23.5522847,15 23,15 Z M15,18 C14.4477153,18 14,17.5522847 14,17 C14,16.4477153 14.4477153,16 15,16 C15.5522847,16 16,16.4477153 16,17 C16,17.5522847 15.5522847,18 15,18 Z M15,21 C14.4477153,21 14,20.5522847 14,20 C14,19.4477153 14.4477153,19 15,19 C15.5522847,19 16,19.4477153 16,20 C16,20.5522847 15.5522847,21 15,21 Z", id: "path-1" })
        ),
        _react2.default.createElement(
          "g",
          { id: "30*30/\u4E3B\u6846\u67B6/\u8BDD\u673A\u5F00\u542F", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          _react2.default.createElement(
            "mask",
            { id: "mask-2", fill: "white" },
            _react2.default.createElement("use", { href: "#path-1" })
          ),
          _react2.default.createElement("use", { id: "Mask", fill: "#000000", fillRule: "nonzero", href: "#path-1" }),
          _react2.default.createElement("path", { d: "M22.6641521,21.9393398 L27.4570453,17.1464466 C27.6523075,16.9511845 27.96889,16.9511845 28.1641521,17.1464466 C28.3594143,17.3417088 28.3594143,17.6582912 28.1641521,17.8535534 L23.016243,23.0014625 C22.8209809,23.1967246 22.5043984,23.1967246 22.3091362,23.0014625 C22.2982218,22.9905481 22.2879175,22.9792547 22.2782233,22.9676245 L19.0141002,19.7035015 C18.8188381,19.5082394 18.8188381,19.1916569 19.0141002,18.9963947 C19.2093624,18.8011326 19.5259449,18.8011326 19.721207,18.9963947 L22.6641521,21.9393398 Z", id: "Combined-Shape", fill: "#6ECE7E" })
        )
      );
    }
  }]);
  return LinkageOpen;
}(_react.Component);

exports.default = LinkageOpen;

LinkageOpen.propTypes = {
  disable: _propTypes2.default.bool
};
LinkageOpen.defaultProps = {
  disable: false
};

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkageClose = function (_Component) {
  (0, _inherits3.default)(LinkageClose, _Component);

  function LinkageClose() {
    (0, _classCallCheck3.default)(this, LinkageClose);
    return (0, _possibleConstructorReturn3.default)(this, (LinkageClose.__proto__ || (0, _getPrototypeOf2.default)(LinkageClose)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinkageClose, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "arrow-menu disable" : "arrow-menu" },
        _react2.default.createElement("path", { d: "M23,21c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S23.6,21,23,21z M19,21c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S19.6,21,19,21z M15,21c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S15.6,21,15,21z M23,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S23.6,18,23,18z M19,18 c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S19.6,18,19,18z M15,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S15.6,18,15,18z M23,15 c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S23.6,15,23,15z M19,15c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S19.6,15,19,15z M15,15 c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S15.6,15,15,15z M4,7h1v16H4V7z M14,9h9c0.6,0,1,0.4,1,1v1c0,0.6-0.4,1-1,1h-9 c-0.6,0-1-0.4-1-1v-1C13,9.4,13.4,9,14,9z M8,6C7.4,6,7,6.4,7,7v16c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V7c0-0.6-0.4-1-1-1H8z M8,5h2 c1.1,0,2,0.9,2,2v16c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2V7C6,5.9,6.9,5,8,5z M13,7h11c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H13v-1h11 c0.6,0,1-0.4,1-1V9c0-0.6-0.4-1-1-1H13V7z" })
      );
    }
  }]);
  return LinkageClose;
}(_react.Component);

exports.default = LinkageClose;

LinkageClose.propTypes = {
  disable: _propTypes2.default.bool
};
LinkageClose.defaultProps = {
  disable: false
};

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vmr = function (_Component) {
  (0, _inherits3.default)(Vmr, _Component);

  function Vmr() {
    (0, _classCallCheck3.default)(this, Vmr);
    return (0, _possibleConstructorReturn3.default)(this, (Vmr.__proto__ || (0, _getPrototypeOf2.default)(Vmr)).apply(this, arguments));
  }

  (0, _createClass3.default)(Vmr, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", style: { enableBackground: "new 0 0 30 30", fillRule: "evenodd", clipRule: "evenodd" } },
        _react2.default.createElement("circle", { fill: "#63BAFF", cx: "15", cy: "15", r: "13" }),
        _react2.default.createElement("path", { fill: "#FFFFFF", d: "M10.4,15.2H9.9v-4c0-0.8,0.7-1.5,1.6-1.5h6.9c0.9,0,1.6,0.6,1.6,1.5v4h-0.5v-4c0-0.5-0.5-1-1.1-1h-6.9 c-0.6,0-1.1,0.4-1.1,1V15.2z M8.1,19.9l0.8-0.8c0.2-0.2,0.6-0.4,0.9-0.4H20c0.3,0,0.7,0.1,0.9,0.4l0.8,0.8c0.1,0.1,0.1,0.2,0,0.3 c0,0-0.1,0.1-0.2,0.1H8.2C8.1,20.2,8,20.1,8,20C8,20,8,19.9,8.1,19.9z M11.1,18.2c0.2-0.4,0.4-0.8,0.7-1.2c0.3-0.6,0.9-1.1,1.7-1.1 h2.8c0.7,0,1.3,0.5,1.7,1.1c0.2,0.4,0.5,0.8,0.7,1.2H11.1z M14.9,15.3c-0.8,0-1.5-0.7-1.5-1.5c0-0.9,0.7-1.5,1.5-1.5 s1.5,0.7,1.5,1.5C16.4,14.7,15.7,15.3,14.9,15.3z" })
      );
    }
  }]);
  return Vmr;
}(_react.Component);

exports.default = Vmr;

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CallTransefer = function (_Component) {
  (0, _inherits3.default)(CallTransefer, _Component);

  function CallTransefer() {
    (0, _classCallCheck3.default)(this, CallTransefer);
    return (0, _possibleConstructorReturn3.default)(this, (CallTransefer.__proto__ || (0, _getPrototypeOf2.default)(CallTransefer)).apply(this, arguments));
  }

  (0, _createClass3.default)(CallTransefer, [{
    key: "render",
    value: function render() {
      var disable = this.props.disable;

      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 30 30", className: disable ? "call-white-box disable" : "call-white-box" },
        _react2.default.createElement("path", { d: "M23.2,21.7c-0.2,0.4-3.2,3.7-5.3,3.9c-1.6,0.1-6.8-2-10.3-6.1c-5.3-6.2-5.3-8.7-5.2-9.9C2.5,8.1,5.6,5,6.9,4.5 c0.8-0.4,2,0.4,2.5,1.5c0,0,1.2,2.7,1.6,3.8c0.2,0.6,0,1.2-0.4,1.5c-0.4,0.4-0.8,0.8-0.9,0.9l0,0c0,0,0.7,1.4,2.6,3.5 c1.1,1.2,3,2.3,3.4,2.5c0.2-0.2,1.1-0.8,1.5-1.1c0.5-0.4,1.1-0.9,1.4-0.8c0.7,0.1,1.8,0.8,2.5,1.3c1.1,0.9,2.3,2,2.4,2.7 C23.6,20.8,23.5,21.3,23.2,21.7z M23.4,13.2l-0.8-0.8l2.8-2.8h-7.4H17l0,0V5.1h1.1v3.4h7.2L22.9,6l0.8-0.8l4,4L23.4,13.2z" })
      );
    }
  }]);
  return CallTransefer;
}(_react.Component);

exports.default = CallTransefer;

CallTransefer.propTypes = {
  disable: _propTypes2.default.bool
};
CallTransefer.defaultProps = {
  disable: false
};

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KeyBoard = function (_Component) {
  (0, _inherits3.default)(KeyBoard, _Component);

  function KeyBoard() {
    (0, _classCallCheck3.default)(this, KeyBoard);
    return (0, _possibleConstructorReturn3.default)(this, (KeyBoard.__proto__ || (0, _getPrototypeOf2.default)(KeyBoard)).apply(this, arguments));
  }

  (0, _createClass3.default)(KeyBoard, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { viewBox: "0 0 72 72", className: "Key-Board-done" },
        _react2.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M50.3,39c2.1,0,3.8,1.7,3.8,3.8s-1.7,3.8-3.8,3.8s-3.8-1.7-3.8-3.8S48.2,39,50.3,39z M50.3,25.5 c2.1,0,3.8,1.7,3.8,3.8c0,2.1-1.7,3.8-3.8,3.8c-2.1,0-3.8-1.7-3.8-3.8C46.6,27.2,48.2,25.5,50.3,25.5z M50.3,12 c2.1,0,3.8,1.7,3.8,3.8s-1.7,3.8-3.8,3.8c-2.1,0-3.8-1.7-3.8-3.8S48.2,12,50.3,12z M36,52.5c2.1,0,3.8,1.7,3.8,3.8S38,60,36,60 c-2.1,0-3.8-1.7-3.8-3.8S33.9,52.5,36,52.5z M36,39c2.1,0,3.8,1.7,3.8,3.8S38,46.5,36,46.5c-2.1,0-3.8-1.7-3.8-3.8S33.9,39,36,39z M36,25.5c2.1,0,3.8,1.7,3.8,3.8c0,2.1-1.7,3.8-3.8,3.8c-2.1,0-3.8-1.7-3.8-3.8C32.2,27.2,33.9,25.5,36,25.5z M36,12 c2.1,0,3.8,1.7,3.8,3.8s-1.7,3.8-3.8,3.8c-2.1,0-3.8-1.7-3.8-3.8S33.9,12,36,12z M21.7,39L21.7,39c2.1,0,3.8,1.7,3.8,3.8 s-1.7,3.8-3.8,3.8s-3.8-1.7-3.8-3.8S19.6,39,21.7,39z M21.7,25.5L21.7,25.5c2.1,0,3.8,1.7,3.8,3.8c0,2.1-1.7,3.8-3.8,3.8 S18,31.3,18,29.2C18,27.2,19.7,25.5,21.7,25.5z M21.7,12L21.7,12c2.1,0,3.8,1.7,3.8,3.8s-1.7,3.8-3.8,3.8S18,17.8,18,15.7 S19.7,12,21.7,12z" })
      );
    }
  }]);
  return KeyBoard;
}(_react.Component);

exports.default = KeyBoard;

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(604);

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var _assign = __webpack_require__(605);

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ReactDebugTool = __webpack_require__(606);
var lowPriorityWarning = __webpack_require__(612);
var alreadyWarned = false;

function roundFloat(val) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  var n = Math.pow(10, base);
  return Math.floor(val * n) / n;
}

// Flow type definition of console.table is too strict right now, see
// https://github.com/facebook/flow/pull/2353 for updates
function consoleTable(table) {
  console.table(table);
}

function warnInProduction() {
  if (alreadyWarned) {
    return;
  }
  alreadyWarned = true;
  if (typeof console !== 'undefined') {
    console.error('ReactPerf is not supported in the production builds of React. ' + 'To collect measurements, please use the development build of React instead.');
  }
}

function getLastMeasurements() {
  if (false) {
    warnInProduction();
    return [];
  }

  return ReactDebugTool.getFlushHistory();
}

function getExclusive() {
  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();

  if (false) {
    warnInProduction();
    return [];
  }

  var aggregatedStats = {};
  var affectedIDs = {};

  function updateAggregatedStats(treeSnapshot, instanceID, timerType, applyUpdate) {
    var displayName = treeSnapshot[instanceID].displayName;

    var key = displayName;
    var stats = aggregatedStats[key];
    if (!stats) {
      affectedIDs[key] = {};
      stats = aggregatedStats[key] = {
        key: key,
        instanceCount: 0,
        counts: {},
        durations: {},
        totalDuration: 0
      };
    }
    if (!stats.durations[timerType]) {
      stats.durations[timerType] = 0;
    }
    if (!stats.counts[timerType]) {
      stats.counts[timerType] = 0;
    }
    affectedIDs[key][instanceID] = true;
    applyUpdate(stats);
  }

  flushHistory.forEach(function (flush) {
    var measurements = flush.measurements,
        treeSnapshot = flush.treeSnapshot;

    measurements.forEach(function (measurement) {
      var duration = measurement.duration,
          instanceID = measurement.instanceID,
          timerType = measurement.timerType;

      updateAggregatedStats(treeSnapshot, instanceID, timerType, function (stats) {
        stats.totalDuration += duration;
        stats.durations[timerType] += duration;
        stats.counts[timerType]++;
      });
    });
  });

  return Object.keys(aggregatedStats).map(function (key) {
    return _extends({}, aggregatedStats[key], {
      instanceCount: Object.keys(affectedIDs[key]).length
    });
  }).sort(function (a, b) {
    return b.totalDuration - a.totalDuration;
  });
}

function getInclusive() {
  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();

  if (false) {
    warnInProduction();
    return [];
  }

  var aggregatedStats = {};
  var affectedIDs = {};

  function updateAggregatedStats(treeSnapshot, instanceID, applyUpdate) {
    var _treeSnapshot$instanc = treeSnapshot[instanceID],
        displayName = _treeSnapshot$instanc.displayName,
        ownerID = _treeSnapshot$instanc.ownerID;

    var owner = treeSnapshot[ownerID];
    var key = (owner ? owner.displayName + ' > ' : '') + displayName;
    var stats = aggregatedStats[key];
    if (!stats) {
      affectedIDs[key] = {};
      stats = aggregatedStats[key] = {
        key: key,
        instanceCount: 0,
        inclusiveRenderDuration: 0,
        renderCount: 0
      };
    }
    affectedIDs[key][instanceID] = true;
    applyUpdate(stats);
  }

  var isCompositeByID = {};
  flushHistory.forEach(function (flush) {
    var measurements = flush.measurements;

    measurements.forEach(function (measurement) {
      var instanceID = measurement.instanceID,
          timerType = measurement.timerType;

      if (timerType !== 'render') {
        return;
      }
      isCompositeByID[instanceID] = true;
    });
  });

  flushHistory.forEach(function (flush) {
    var measurements = flush.measurements,
        treeSnapshot = flush.treeSnapshot;

    measurements.forEach(function (measurement) {
      var duration = measurement.duration,
          instanceID = measurement.instanceID,
          timerType = measurement.timerType;

      if (timerType !== 'render') {
        return;
      }
      updateAggregatedStats(treeSnapshot, instanceID, function (stats) {
        stats.renderCount++;
      });
      var nextParentID = instanceID;
      while (nextParentID) {
        // As we traverse parents, only count inclusive time towards composites.
        // We know something is a composite if its render() was called.
        if (isCompositeByID[nextParentID]) {
          updateAggregatedStats(treeSnapshot, nextParentID, function (stats) {
            stats.inclusiveRenderDuration += duration;
          });
        }
        nextParentID = treeSnapshot[nextParentID].parentID;
      }
    });
  });

  return Object.keys(aggregatedStats).map(function (key) {
    return _extends({}, aggregatedStats[key], {
      instanceCount: Object.keys(affectedIDs[key]).length
    });
  }).sort(function (a, b) {
    return b.inclusiveRenderDuration - a.inclusiveRenderDuration;
  });
}

function getWasted() {
  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();

  if (false) {
    warnInProduction();
    return [];
  }

  var aggregatedStats = {};
  var affectedIDs = {};

  function updateAggregatedStats(treeSnapshot, instanceID, applyUpdate) {
    var _treeSnapshot$instanc2 = treeSnapshot[instanceID],
        displayName = _treeSnapshot$instanc2.displayName,
        ownerID = _treeSnapshot$instanc2.ownerID;

    var owner = treeSnapshot[ownerID];
    var key = (owner ? owner.displayName + ' > ' : '') + displayName;
    var stats = aggregatedStats[key];
    if (!stats) {
      affectedIDs[key] = {};
      stats = aggregatedStats[key] = {
        key: key,
        instanceCount: 0,
        inclusiveRenderDuration: 0,
        renderCount: 0
      };
    }
    affectedIDs[key][instanceID] = true;
    applyUpdate(stats);
  }

  flushHistory.forEach(function (flush) {
    var measurements = flush.measurements,
        treeSnapshot = flush.treeSnapshot,
        operations = flush.operations;

    var isDefinitelyNotWastedByID = {};

    // Find host components associated with an operation in this batch.
    // Mark all components in their parent tree as definitely not wasted.
    operations.forEach(function (operation) {
      var instanceID = operation.instanceID;

      var nextParentID = instanceID;
      while (nextParentID) {
        isDefinitelyNotWastedByID[nextParentID] = true;
        nextParentID = treeSnapshot[nextParentID].parentID;
      }
    });

    // Find composite components that rendered in this batch.
    // These are potential candidates for being wasted renders.
    var renderedCompositeIDs = {};
    measurements.forEach(function (measurement) {
      var instanceID = measurement.instanceID,
          timerType = measurement.timerType;

      if (timerType !== 'render') {
        return;
      }
      renderedCompositeIDs[instanceID] = true;
    });

    measurements.forEach(function (measurement) {
      var duration = measurement.duration,
          instanceID = measurement.instanceID,
          timerType = measurement.timerType;

      if (timerType !== 'render') {
        return;
      }

      // If there was a DOM update below this component, or it has just been
      // mounted, its render() is not considered wasted.
      var updateCount = treeSnapshot[instanceID].updateCount;

      if (isDefinitelyNotWastedByID[instanceID] || updateCount === 0) {
        return;
      }

      // We consider this render() wasted.
      updateAggregatedStats(treeSnapshot, instanceID, function (stats) {
        stats.renderCount++;
      });

      var nextParentID = instanceID;
      while (nextParentID) {
        // Any parents rendered during this batch are considered wasted
        // unless we previously marked them as dirty.
        var isWasted = renderedCompositeIDs[nextParentID] && !isDefinitelyNotWastedByID[nextParentID];
        if (isWasted) {
          updateAggregatedStats(treeSnapshot, nextParentID, function (stats) {
            stats.inclusiveRenderDuration += duration;
          });
        }
        nextParentID = treeSnapshot[nextParentID].parentID;
      }
    });
  });

  return Object.keys(aggregatedStats).map(function (key) {
    return _extends({}, aggregatedStats[key], {
      instanceCount: Object.keys(affectedIDs[key]).length
    });
  }).sort(function (a, b) {
    return b.inclusiveRenderDuration - a.inclusiveRenderDuration;
  });
}

function getOperations() {
  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();

  if (false) {
    warnInProduction();
    return [];
  }

  var stats = [];
  flushHistory.forEach(function (flush, flushIndex) {
    var operations = flush.operations,
        treeSnapshot = flush.treeSnapshot;

    operations.forEach(function (operation) {
      var instanceID = operation.instanceID,
          type = operation.type,
          payload = operation.payload;
      var _treeSnapshot$instanc3 = treeSnapshot[instanceID],
          displayName = _treeSnapshot$instanc3.displayName,
          ownerID = _treeSnapshot$instanc3.ownerID;

      var owner = treeSnapshot[ownerID];
      var key = (owner ? owner.displayName + ' > ' : '') + displayName;

      stats.push({
        flushIndex: flushIndex,
        instanceID: instanceID,
        key: key,
        type: type,
        ownerID: ownerID,
        payload: payload
      });
    });
  });
  return stats;
}

function printExclusive(flushHistory) {
  if (false) {
    warnInProduction();
    return;
  }

  var stats = getExclusive(flushHistory);
  var table = stats.map(function (item) {
    var key = item.key,
        instanceCount = item.instanceCount,
        totalDuration = item.totalDuration;

    var renderCount = item.counts.render || 0;
    var renderDuration = item.durations.render || 0;
    return {
      Component: key,
      'Total time (ms)': roundFloat(totalDuration),
      'Instance count': instanceCount,
      'Total render time (ms)': roundFloat(renderDuration),
      'Average render time (ms)': renderCount ? roundFloat(renderDuration / renderCount) : undefined,
      'Render count': renderCount,
      'Total lifecycle time (ms)': roundFloat(totalDuration - renderDuration)
    };
  });
  consoleTable(table);
}

function printInclusive(flushHistory) {
  if (false) {
    warnInProduction();
    return;
  }

  var stats = getInclusive(flushHistory);
  var table = stats.map(function (item) {
    var key = item.key,
        instanceCount = item.instanceCount,
        inclusiveRenderDuration = item.inclusiveRenderDuration,
        renderCount = item.renderCount;

    return {
      'Owner > Component': key,
      'Inclusive render time (ms)': roundFloat(inclusiveRenderDuration),
      'Instance count': instanceCount,
      'Render count': renderCount
    };
  });
  consoleTable(table);
}

function printWasted(flushHistory) {
  if (false) {
    warnInProduction();
    return;
  }

  var stats = getWasted(flushHistory);
  var table = stats.map(function (item) {
    var key = item.key,
        instanceCount = item.instanceCount,
        inclusiveRenderDuration = item.inclusiveRenderDuration,
        renderCount = item.renderCount;

    return {
      'Owner > Component': key,
      'Inclusive wasted time (ms)': roundFloat(inclusiveRenderDuration),
      'Instance count': instanceCount,
      'Render count': renderCount
    };
  });
  consoleTable(table);
}

function printOperations(flushHistory) {
  if (false) {
    warnInProduction();
    return;
  }

  var stats = getOperations(flushHistory);
  var table = stats.map(function (stat) {
    return {
      'Owner > Node': stat.key,
      Operation: stat.type,
      Payload: typeof stat.payload === 'object' ? JSON.stringify(stat.payload) : stat.payload,
      'Flush index': stat.flushIndex,
      'Owner Component ID': stat.ownerID,
      'DOM Component ID': stat.instanceID
    };
  });
  consoleTable(table);
}

var warnedAboutPrintDOM = false;
function printDOM(measurements) {
  lowPriorityWarning(warnedAboutPrintDOM, '`ReactPerf.printDOM(...)` is deprecated. Use ' + '`ReactPerf.printOperations(...)` instead.');
  warnedAboutPrintDOM = true;
  return printOperations(measurements);
}

var warnedAboutGetMeasurementsSummaryMap = false;
function getMeasurementsSummaryMap(measurements) {
  lowPriorityWarning(warnedAboutGetMeasurementsSummaryMap, '`ReactPerf.getMeasurementsSummaryMap(...)` is deprecated. Use ' + '`ReactPerf.getWasted(...)` instead.');
  warnedAboutGetMeasurementsSummaryMap = true;
  return getWasted(measurements);
}

function start() {
  if (false) {
    warnInProduction();
    return;
  }

  ReactDebugTool.beginProfiling();
}

function stop() {
  if (false) {
    warnInProduction();
    return;
  }

  ReactDebugTool.endProfiling();
}

function isRunning() {
  if (false) {
    warnInProduction();
    return false;
  }

  return ReactDebugTool.isProfiling();
}

var ReactPerfAnalysis = {
  getLastMeasurements: getLastMeasurements,
  getExclusive: getExclusive,
  getInclusive: getInclusive,
  getWasted: getWasted,
  getOperations: getOperations,
  printExclusive: printExclusive,
  printInclusive: printInclusive,
  printWasted: printWasted,
  printOperations: printOperations,
  start: start,
  stop: stop,
  isRunning: isRunning,
  // Deprecated:
  printDOM: printDOM,
  getMeasurementsSummaryMap: getMeasurementsSummaryMap
};

module.exports = ReactPerfAnalysis;

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var ReactInvalidSetStateWarningHook = __webpack_require__(607);
var ReactHostOperationHistoryHook = __webpack_require__(608);
var ReactComponentTreeHook = __webpack_require__(609);
var ExecutionEnvironment = __webpack_require__(295);

var performanceNow = __webpack_require__(610);
var warning = __webpack_require__(294);

var hooks = [];
var didHookThrowForEvent = {};

function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
  try {
    fn.call(context, arg1, arg2, arg3, arg4, arg5);
  } catch (e) {
     true ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
    didHookThrowForEvent[event] = true;
  }
}

function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    var fn = hook[event];
    if (fn) {
      callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
    }
  }
}

var isProfiling = false;
var flushHistory = [];
var lifeCycleTimerStack = [];
var currentFlushNesting = 0;
var currentFlushMeasurements = [];
var currentFlushStartTime = 0;
var currentTimerDebugID = null;
var currentTimerStartTime = 0;
var currentTimerNestedFlushDuration = 0;
var currentTimerType = null;

var lifeCycleTimerHasWarned = false;

function clearHistory() {
  ReactComponentTreeHook.purgeUnmountedComponents();
  ReactHostOperationHistoryHook.clearHistory();
}

function getTreeSnapshot(registeredIDs) {
  return registeredIDs.reduce(function (tree, id) {
    var ownerID = ReactComponentTreeHook.getOwnerID(id);
    var parentID = ReactComponentTreeHook.getParentID(id);
    tree[id] = {
      displayName: ReactComponentTreeHook.getDisplayName(id),
      text: ReactComponentTreeHook.getText(id),
      updateCount: ReactComponentTreeHook.getUpdateCount(id),
      childIDs: ReactComponentTreeHook.getChildIDs(id),
      // Text nodes don't have owners but this is close enough.
      ownerID: ownerID || parentID && ReactComponentTreeHook.getOwnerID(parentID) || 0,
      parentID: parentID
    };
    return tree;
  }, {});
}

function resetMeasurements() {
  var previousStartTime = currentFlushStartTime;
  var previousMeasurements = currentFlushMeasurements;
  var previousOperations = ReactHostOperationHistoryHook.getHistory();

  if (currentFlushNesting === 0) {
    currentFlushStartTime = 0;
    currentFlushMeasurements = [];
    clearHistory();
    return;
  }

  if (previousMeasurements.length || previousOperations.length) {
    var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
    flushHistory.push({
      duration: performanceNow() - previousStartTime,
      measurements: previousMeasurements || [],
      operations: previousOperations || [],
      treeSnapshot: getTreeSnapshot(registeredIDs)
    });
  }

  clearHistory();
  currentFlushStartTime = performanceNow();
  currentFlushMeasurements = [];
}

function checkDebugID(debugID) {
  var allowRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (allowRoot && debugID === 0) {
    return;
  }
  if (!debugID) {
     true ? warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
  }
}

function beginLifeCycleTimer(debugID, timerType) {
  if (currentFlushNesting === 0) {
    return;
  }
  if (currentTimerType && !lifeCycleTimerHasWarned) {
     true ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
    lifeCycleTimerHasWarned = true;
  }
  currentTimerStartTime = performanceNow();
  currentTimerNestedFlushDuration = 0;
  currentTimerDebugID = debugID;
  currentTimerType = timerType;
}

function endLifeCycleTimer(debugID, timerType) {
  if (currentFlushNesting === 0) {
    return;
  }
  if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
     true ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
    lifeCycleTimerHasWarned = true;
  }
  if (isProfiling) {
    currentFlushMeasurements.push({
      timerType: timerType,
      instanceID: debugID,
      duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
    });
  }
  currentTimerStartTime = 0;
  currentTimerNestedFlushDuration = 0;
  currentTimerDebugID = null;
  currentTimerType = null;
}

function pauseCurrentLifeCycleTimer() {
  var currentTimer = {
    startTime: currentTimerStartTime,
    nestedFlushStartTime: performanceNow(),
    debugID: currentTimerDebugID,
    timerType: currentTimerType
  };
  lifeCycleTimerStack.push(currentTimer);
  currentTimerStartTime = 0;
  currentTimerNestedFlushDuration = 0;
  currentTimerDebugID = null;
  currentTimerType = null;
}

function resumeCurrentLifeCycleTimer() {
  var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop(),
      startTime = _lifeCycleTimerStack$.startTime,
      nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime,
      debugID = _lifeCycleTimerStack$.debugID,
      timerType = _lifeCycleTimerStack$.timerType;

  var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
  currentTimerStartTime = startTime;
  currentTimerNestedFlushDuration += nestedFlushDuration;
  currentTimerDebugID = debugID;
  currentTimerType = timerType;
}

var lastMarkTimeStamp = 0;
var canUsePerformanceMeasure = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

function shouldMark(debugID) {
  if (!isProfiling || !canUsePerformanceMeasure) {
    return false;
  }
  var element = ReactComponentTreeHook.getElement(debugID);
  if (element == null || typeof element !== 'object') {
    return false;
  }
  var isHostElement = typeof element.type === 'string';
  if (isHostElement) {
    return false;
  }
  return true;
}

function markBegin(debugID, markType) {
  if (!shouldMark(debugID)) {
    return;
  }

  var markName = debugID + '::' + markType;
  lastMarkTimeStamp = performanceNow();
  performance.mark(markName);
}

function markEnd(debugID, markType) {
  if (!shouldMark(debugID)) {
    return;
  }

  var markName = debugID + '::' + markType;
  var displayName = ReactComponentTreeHook.getDisplayName(debugID) || 'Unknown';

  // Chrome has an issue of dropping markers recorded too fast:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=640652
  // To work around this, we will not report very small measurements.
  // I determined the magic number by tweaking it back and forth.
  // 0.05ms was enough to prevent the issue, but I set it to 0.1ms to be safe.
  // When the bug is fixed, we can `measure()` unconditionally if we want to.
  var timeStamp = performanceNow();
  if (timeStamp - lastMarkTimeStamp > 0.1) {
    var measurementName = displayName + ' [' + markType + ']';
    performance.measure(measurementName, markName);
  }

  performance.clearMarks(markName);
  if (measurementName) {
    performance.clearMeasures(measurementName);
  }
}

var ReactDebugTool = {
  addHook: function (hook) {
    hooks.push(hook);
  },
  removeHook: function (hook) {
    for (var i = 0; i < hooks.length; i++) {
      if (hooks[i] === hook) {
        hooks.splice(i, 1);
        i--;
      }
    }
  },
  isProfiling: function () {
    return isProfiling;
  },
  beginProfiling: function () {
    if (isProfiling) {
      return;
    }

    isProfiling = true;
    flushHistory.length = 0;
    resetMeasurements();
    ReactDebugTool.addHook(ReactHostOperationHistoryHook);
  },
  endProfiling: function () {
    if (!isProfiling) {
      return;
    }

    isProfiling = false;
    resetMeasurements();
    ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
  },
  getFlushHistory: function () {
    return flushHistory;
  },
  onBeginFlush: function () {
    currentFlushNesting++;
    resetMeasurements();
    pauseCurrentLifeCycleTimer();
    emitEvent('onBeginFlush');
  },
  onEndFlush: function () {
    resetMeasurements();
    currentFlushNesting--;
    resumeCurrentLifeCycleTimer();
    emitEvent('onEndFlush');
  },
  onBeginLifeCycleTimer: function (debugID, timerType) {
    checkDebugID(debugID);
    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
    markBegin(debugID, timerType);
    beginLifeCycleTimer(debugID, timerType);
  },
  onEndLifeCycleTimer: function (debugID, timerType) {
    checkDebugID(debugID);
    endLifeCycleTimer(debugID, timerType);
    markEnd(debugID, timerType);
    emitEvent('onEndLifeCycleTimer', debugID, timerType);
  },
  onBeginProcessingChildContext: function () {
    emitEvent('onBeginProcessingChildContext');
  },
  onEndProcessingChildContext: function () {
    emitEvent('onEndProcessingChildContext');
  },
  onHostOperation: function (operation) {
    checkDebugID(operation.instanceID);
    emitEvent('onHostOperation', operation);
  },
  onSetState: function () {
    emitEvent('onSetState');
  },
  onSetChildren: function (debugID, childDebugIDs) {
    checkDebugID(debugID);
    childDebugIDs.forEach(checkDebugID);
    emitEvent('onSetChildren', debugID, childDebugIDs);
  },
  onBeforeMountComponent: function (debugID, element, parentDebugID) {
    checkDebugID(debugID);
    checkDebugID(parentDebugID, true);
    emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
    markBegin(debugID, 'mount');
  },
  onMountComponent: function (debugID) {
    checkDebugID(debugID);
    markEnd(debugID, 'mount');
    emitEvent('onMountComponent', debugID);
  },
  onBeforeUpdateComponent: function (debugID, element) {
    checkDebugID(debugID);
    emitEvent('onBeforeUpdateComponent', debugID, element);
    markBegin(debugID, 'update');
  },
  onUpdateComponent: function (debugID) {
    checkDebugID(debugID);
    markEnd(debugID, 'update');
    emitEvent('onUpdateComponent', debugID);
  },
  onBeforeUnmountComponent: function (debugID) {
    checkDebugID(debugID);
    emitEvent('onBeforeUnmountComponent', debugID);
    markBegin(debugID, 'unmount');
  },
  onUnmountComponent: function (debugID) {
    checkDebugID(debugID);
    markEnd(debugID, 'unmount');
    emitEvent('onUnmountComponent', debugID);
  },
  onTestEvent: function () {
    emitEvent('onTestEvent');
  }
};

// TODO remove these when RN/www gets updated
ReactDebugTool.addDevtool = ReactDebugTool.addHook;
ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;

ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
ReactDebugTool.addHook(ReactComponentTreeHook);
var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
if (/[?&]react_perf\b/.test(url)) {
  ReactDebugTool.beginProfiling();
}

module.exports = ReactDebugTool;

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var warning = __webpack_require__(294);

if (true) {
  var processingChildContext = false;

  var warnInvalidSetState = function () {
     true ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
  };
}

var ReactInvalidSetStateWarningHook = {
  onBeginProcessingChildContext: function () {
    processingChildContext = true;
  },
  onEndProcessingChildContext: function () {
    processingChildContext = false;
  },
  onSetState: function () {
    warnInvalidSetState();
  }
};

module.exports = ReactInvalidSetStateWarningHook;

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var history = [];

var ReactHostOperationHistoryHook = {
  onHostOperation: function (operation) {
    history.push(operation);
  },
  clearHistory: function () {
    if (ReactHostOperationHistoryHook._preventClearing) {
      // Should only be used for tests.
      return;
    }

    history = [];
  },
  getHistory: function () {
    return history;
  }
};

module.exports = ReactHostOperationHistoryHook;

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(178);

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var performance = __webpack_require__(611);

var performanceNow;

/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */
if (performance.now) {
  performanceNow = function performanceNow() {
    return performance.now();
  };
} else {
  performanceNow = function performanceNow() {
    return Date.now();
  };
}

module.exports = performanceNow;

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var ExecutionEnvironment = __webpack_require__(295);

var performance;

if (ExecutionEnvironment.canUseDOM) {
  performance = window.performance || window.msPerformance || window.webkitPerformance;
}

module.exports = performance || {};

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

if (true) {
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = lowPriorityWarning;

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContactAvatar = __webpack_require__(853);

var _ContactAvatar2 = _interopRequireDefault(_ContactAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import GroupAvatar from "./GroupAvatar";
var propTypes = {
  shape: _propTypes2.default.oneOf(["circle", "square"]),
  groupId: _propTypes2.default.string,
  account: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(["large", "small", "default"]),
  showStatus: _propTypes2.default.bool,
  isOrganizer: _propTypes2.default.bool,
  status: _propTypes2.default.number,
  isIM: _propTypes2.default.bool
};

var defaultProps = {
  size: "default",
  shape: "circle"
};

var Avatar = function (_PureComponent) {
  (0, _inherits3.default)(Avatar, _PureComponent);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);
    return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Avatar, [{
    key: "render",
    value: function render() {
      var groupId = this.props.groupId;

      if (groupId) {
        // return <GroupAvatar {...this.props} />;
      }
      return _react2.default.createElement(_ContactAvatar2.default, this.props);
    }
  }]);
  return Avatar;
}(_react.PureComponent);

exports.default = Avatar;


Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(109);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(100);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(187);

var _classnames2 = _interopRequireDefault(_classnames);

var _UserStatus = __webpack_require__(854);

var _UserStatus2 = _interopRequireDefault(_UserStatus);

var _defaultAvatar = __webpack_require__(188);

var _defaultAvatar2 = _interopRequireDefault(_defaultAvatar);

var _index = __webpack_require__(179);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactAvatar = function (_PureComponent) {
  (0, _inherits3.default)(ContactAvatar, _PureComponent);

  function ContactAvatar(props) {
    (0, _classCallCheck3.default)(this, ContactAvatar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ContactAvatar.__proto__ || (0, _getPrototypeOf2.default)(ContactAvatar)).call(this, props));

    _this.handleImgLoadError = function () {
      return _this.setState({ isImgExist: false });
    };

    _this.state = {
      isImgExist: true
    };
    return _this;
  }

  (0, _createClass3.default)(ContactAvatar, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2, _classNames3;

      var _props = this.props,
          size = _props.size,
          userName = _props.userName,
          account = _props.account,
          src = _props.src,
          shape = _props.shape,
          gender = _props.gender,
          isOrganizer = _props.isOrganizer,
          isLastContact = _props.isLastContact,
          statusTestId = _props.statusTestId,
          isIM = _props.isIM;
      var _props2 = this.props,
          showStatus = _props2.showStatus,
          status = _props2.status,
          client_type = _props2.client_type;

      var prefixCls = "avatar";

      var wrapperCls = (0, _classnames2.default)(prefixCls + "-contact", (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + "-contact-lg", size === "large"), (0, _defineProperty3.default)(_classNames, prefixCls + "-contact-sm", size === "small"), _classNames));

      var sizeCls = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + "-lg", size === "large"), (0, _defineProperty3.default)(_classNames2, prefixCls + "-sm", size === "small"), _classNames2));

      var avatarCls = (0, _classnames2.default)(prefixCls, sizeCls, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, prefixCls + "-" + shape, shape), (0, _defineProperty3.default)(_classNames3, prefixCls + "-bg-" + (0, _index.getBackgroundCls)(account || userName, gender), account || userName), _classNames3));

      if (isIM === false) {
        showStatus = false;
      }

      var classContent = "avatar-content";
      var children = void 0;
      if (src && this.state.isImgExist) {
        children = _react2.default.createElement("img", { src: src, "data-testid": "headicon000123", className: classContent, onError: this.handleImgLoadError });
      } else if (userName) {
        children = _react2.default.createElement(
          "span",
          { className: "contact-avatar-string", "data-testid": "headicon000123" },
          (0, _index.getContactAvatarText)(userName)
        );
      } else {
        children = _react2.default.createElement("img", { src: _defaultAvatar2.default, alt: "", "data-testid": "headicon000123" });
      }

      return _react2.default.createElement(
        "div",
        { className: wrapperCls },
        _react2.default.createElement(
          "div",
          { className: avatarCls },
          children
        ),
        showStatus && _react2.default.createElement(_UserStatus2.default, { dataTestId: statusTestId, account: account, status: status, client_type: client_type, isLastContact: isLastContact })
      );
    }
  }]);
  return ContactAvatar;
}(_react.PureComponent);

exports.default = ContactAvatar;


ContactAvatar.propTypes = {
  src: _propTypes2.default.string,
  userName: _propTypes2.default.string,
  account: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(["large", "small", "default"]),
  shape: _propTypes2.default.oneOf(["circle", "square"]),
  showStatus: _propTypes2.default.bool,
  isOrganizer: _propTypes2.default.bool,
  status: _propTypes2.default.number,
  gender: _propTypes2.default.number,
  isLastContact: _propTypes2.default.bool,
  statusTestId: _propTypes2.default.string
};

ContactAvatar.defaultProps = {
  showStatus: false,
  gender: 0
};

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(98);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(99);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(96);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(101);

var _Icon = __webpack_require__(103);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserStatus = function (_PureComponent) {
  (0, _inherits3.default)(UserStatus, _PureComponent);

  function UserStatus(props) {
    (0, _classCallCheck3.default)(this, UserStatus);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UserStatus.__proto__ || (0, _getPrototypeOf2.default)(UserStatus)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(UserStatus, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          status = _props.status,
          client_type = _props.client_type,
          isLastContact = _props.isLastContact,
          dataTestId = _props.dataTestId;
      //默认离线状态

      status = status || constant.ONLINE_STATUS.OFFLINE;
      var type = void 0;

      switch (status) {
        case constant.ONLINE_STATUS.ONLINE:
          type = client_type === 1 ? "MobileOnline" : "Online";
          break;

        case constant.ONLINE_STATUS.OFFLINE:
          type = "Offline";
          break;

        case constant.ONLINE_STATUS.LEAVE:
          type = "Leave";
          break;

        case constant.ONLINE_STATUS.BUSY:
          type = "Busy";
          break;

        default:
          break;
      }

      return _react2.default.createElement(
        "div",
        { className: "status", "data-testid": "currentstatus000123" },
        _react2.default.createElement(_Icon.Svg, { type: _Icon.iconMap[type], svgClassName: type })
      );
    }
  }]);
  return UserStatus;
}(_react.PureComponent);

exports.default = UserStatus;

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNotify = createNotify;
var _electron = window.require('electron');
var _ipcRenderer = _electron.ipcRenderer;
var logger = window.Logger("childPage")("ConfMemberList/service/receive");
var _listenedNotifyMap = {};
function createNotify(type, callback) {
  if (_listenedNotifyMap[type]) {
    logger.info('createNotify 已添加，不重复添加', type);
    return;
  }
  logger.info('createNotify', type);
  _listenedNotifyMap[type] = true;
  logger.debug('createNotify', type, callback);
  _ipcRenderer.on(type, callback);
}

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSendMessage = createSendMessage;
var _electron = window.require('electron');
var _ipcRenderer = _electron.ipcRenderer;
var logger = window.Logger("childPage")("ConfMemberList/service/send");
function createSendMessage(type, args) {
  logger.debug('createSendMessage', type, args);
  _ipcRenderer.send(type, args);
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HwSelectBoxUISdk = undefined;

var _assign = __webpack_require__(102);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _SelectBox = __webpack_require__(2046);

var func_1 = _interopRequireWildcard(_SelectBox);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HwSelectBoxUISdk = exports.HwSelectBoxUISdk = function HwSelectBoxUISdk() {
  (0, _classCallCheck3.default)(this, HwSelectBoxUISdk);

  (0, _assign2.default)(this, func_1);
};

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(240), __esModule: true };

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(31);

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(32);

/***/ })

});
//# sourceMappingURL=HwSelectBoxUI.js.map