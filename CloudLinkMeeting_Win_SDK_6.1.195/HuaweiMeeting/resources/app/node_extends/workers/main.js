// var path = require("path");
// module.exports = function (win = {}) {
//     require("fs").readdirSync(path.join(__dirname, "bin")).forEach(name => win[name.replace(/\.js$/, "")] = require("./bin/" + name));
//     return win;
// };
module.exports = {
  drag: require("./bin/drag"), //拖拽
  applyUpdate: require("./bin/applyUpdate"), //应用更新
  autoUpdate: require("./bin/autoUpdate"), //自动更新
  checkIsApplyUpdate: require("./bin/applyUpdate").check
};
