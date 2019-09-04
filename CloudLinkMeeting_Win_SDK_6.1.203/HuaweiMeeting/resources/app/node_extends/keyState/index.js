/**
 * 剪贴板工具函数
 * @param {string} filepath 文件的路径，指定此参数，将指定的文件复制到剪贴板
 * 不论是否传入路径，只要在执行完成以后剪贴板有文件，函数都返回剪贴板的文件的完整路径
 * 
 * 例 1. 复制文件到剪贴板
 * var file="C:\windows\system32\cmd.exe";
 * keystate(file);
 * 
 * 例 2. 读取剪贴板的文件路径
 * var filepath=keystate();
 * console.log(filepath);
 */
var os = require("os");
var node_name = "./keystate.node";
switch (os.platform()) {
    case 'aix':
    case 'freebsd':
    case 'linux':
    case 'openbsd':
    case 'sunos':
    case "android":
        node_name = "./keystate_linux";
        break;
    case 'darwin'://mac
        node_name = "./keystate_dawin";
        break;
    case "win64":
    case 'win32'://windows
        node_name = "./keystate_win"+process.arch.slice(-2);
        break;
}
var _keystate;
try {
    _keystate = require(node_name);
} catch (e) {
    _keystate = function () {
        throw `请重新编译keystate模块:${node_name}`;
        return "";
    };
    _keystate();
}
/**
 * 如果不传参数，默认返回CapsLock的状态，如果为打开状态返回1,如果为关闭状态返回0
 * 如果传入一个整型参数keyCode，返回该键对应的状态码
 */
module.exports = function keystate(VisualKeyCode) {
    var result;
    if(arguments.length===0){
        VisualKeyCode=0x14;
        result = _keystate(VisualKeyCode);
    }else{
        result = _keystate(VisualKeyCode);
    }
    return result;
};