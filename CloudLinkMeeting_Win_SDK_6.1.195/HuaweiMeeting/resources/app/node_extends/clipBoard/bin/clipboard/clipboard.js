/**
 * 剪贴板工具函数
 * @param {string} filepath 文件的路径，指定此参数，将指定的文件复制到剪贴板
 * 不论是否传入路径，只要在执行完成以后剪贴板有文件，函数都返回剪贴板的文件的完整路径
 * 
 * 例 1. 复制文件到剪贴板
 * var file="C:\windows\system32\cmd.exe";
 * clipboard(file);
 * 
 * 例 2. 读取剪贴板的文件路径
 * var filepath=clipboard();
 * console.log(filepath);
 */
var os = require("os");
var node_name = "./clipboard.node";
switch (os.platform()) {
    case 'aix':
    case 'freebsd':
    case 'linux':
    case 'openbsd':
    case 'sunos':
    case "android":
        node_name = "./clipboard_linux";
        break;
    case 'darwin'://mac
        node_name = "./clipboard_dawin";
        break;
    case "win64":
    case 'win32'://windows
        node_name = "./clipboard_win"+process.arch.slice(-2);
        break;
}
var _clipboard;
try {
    _clipboard = require(node_name);
} catch (e) {
    _clipboard = function () {
        throw `请重新编译clipboard模块:${node_name}`;
        return "";
    };
    _clipboard();
}
module.exports = function clipboard(...filepath) {
    var result = _clipboard.apply(null, filepath);
    return result.slice(1);
};