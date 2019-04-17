/**********************************************************************
*
* plugin_msg.h
*
* Public Type Definition
*
* Copyright 2018-2028 HuaWei, Inc. 
*
**********************************************************************/

#ifndef _PLUGIN_MSG_H_
#define _PLUGIN_MSG_H_


/*
*  Exit code delimiters
*/
#define PLUGIN_STATUS_SUCCESS                   0
#define PLUGIN_STATUS_FAILED                    1


#define MAX_INPUT_LENGTH  127
#define MAX_APP_PATH      255
#define MAX_OUTPUT_LENGTH  127

/*
*  会议类型枚举
*/
typedef enum {
	CONF_MEDIATYPE_FLAG_VIDEO_DATA = 19, //视频+数据
} CONF_MEDIATYPE;

/**!
* \brief
*   异步调用API消息回调
*
* @param
*   ret     返回结果
*   data    返回变量
*
* @return
*   void
*/
typedef void(*plugin_call_back)(int	ret, void* data);

/**!
* \brief
*   notify通知回调
*
* @param
*   notify     通知ID
*   data       通知参数
*
* @return
*   void
*/
typedef void(*plugin_notify_func)(int notify, void* data);

/**!
* \brief
*   初始化接口参数结构体
*/
struct plugin_init_param
{
	plugin_call_back callbackFunc;    /// 异步调用回调函数

	char path[MAX_APP_PATH + 1];      /// 运行客户端目录的路径
	plugin_notify_func notifyFunc;    /// 通知函数
};

/**!
* \brief
*   登录接口参数结构体
*/
struct plugin_login_param
{
	plugin_call_back callbackFunc;              /// 异步调用回调函数

	UINT32 serverPort;                          /// 登录服务器端口
	char serverAddress[MAX_INPUT_LENGTH + 1];   /// 登录服务器地址
	char account[MAX_INPUT_LENGTH + 1];         /// 登录服务器账号
	char password[MAX_INPUT_LENGTH + 1];        /// 登录服务器密码
};

/**!
* \brief
*   创建即时会议参数结构体
*/
struct plugin_create_meeting_param
{
	plugin_call_back callbackFunc;              /// 异步调用回调函数

	char meetingSubject[MAX_INPUT_LENGTH + 1];  /// 会议名称
	UINT32 meetingType;                         /// 会议类型
	UINT32 needPassword;                        /// 会议是否需要密码
};

/**!
* \brief
*   会议ID入会参数结构体
*/
struct plugin_join_meeting_by_id_param
{
	plugin_call_back callbackFunc;           /// 异步调用回调函数

	char meetingID[MAX_INPUT_LENGTH + 1];
	char password[MAX_INPUT_LENGTH + 1];
};

/**!
* \brief
*   通用接口参数结构体
*/
struct plugin_common_param
{
	plugin_call_back callbackFunc;  /// 异步调用回调函数
};

#endif /* _PLUGIN_MSG_H_ */
