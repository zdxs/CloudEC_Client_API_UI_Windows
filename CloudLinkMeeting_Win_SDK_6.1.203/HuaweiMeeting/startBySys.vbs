Set shell = Wscript.createobject("wscript.shell")
strHomeFolder = shell.ExpandEnvironmentStrings("%APPDATA%")
strAppDataPath = strHomeFolder & "\HuaweiMeeting\\startBySys.bat"
a = shell.run (strAppDataPath,0)