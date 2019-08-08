var path=require("path");
var fs=require("fs");
var tools=module.exports=function(tools_name){
    return tools[tools_name];
};
var tools_path="./bin/";
fs.readdirSync(path.resolve(__dirname,tools_path)).forEach(function(name){
    Object.defineProperty(tools,name,{
        get:function(){
            return require(tools_path+name,name);
        }
    });
});