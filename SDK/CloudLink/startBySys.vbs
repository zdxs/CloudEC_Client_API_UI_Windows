Set shell = Wscript.createobject("wscript.shell")
strHomeFolder = shell.ExpandEnvironmentStrings("%APPDATA%")
strAppDataPath = strHomeFolder & "\CloudLink\\startBySys.bat"
a = shell.run (strAppDataPath,0)