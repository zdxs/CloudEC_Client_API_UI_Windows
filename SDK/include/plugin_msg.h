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

//默认客户端启动路径最大长度
#define MAX_APP_PATH      255

/*
*  会议类型枚举
*/
typedef enum {
	CONF_MEDIATYPE_FLAG_VOICE_DATA = 17, //语音+数据
	CONF_MEDIATYPE_FLAG_VIDEO_DATA = 19, //视频+数据
	CONF_MEDIATYPE_FLAG_HDVIDEO_DATA = 21, //高清+数据
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

	char* path;                       /// CloudLink文件夹路径
	char* appId;                      /// 应用ID
	plugin_notify_func notifyFunc;    /// 通知函数
	char* config;                     /// 定制化配置
};

/**!
* \brief
*   登录接口参数结构体
*/
struct plugin_login_param
{
	plugin_call_back callbackFunc;    /// 异步调用回调函数

	UINT32 serverPort;     /// 登录服务器端口
	char* serverAddress;   /// 登录服务器地址
	char* account;         /// 登录服务器账号
	char* password;        /// 登录服务器密码
};

/**!
* \brief
*   创建即时会议参数结构体
*/
struct plugin_create_meeting_param
{
	plugin_call_back callbackFunc;              /// 异步调用回调函数

	char* meetingSubject;                       /// 会议名称
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

	char* meetingID;
	char* password;
};

/**!
* \brief
*   通用接口参数结构体
*/
struct plugin_common_param
{
	plugin_call_back callbackFunc;  /// 异步调用回调函数
};

/**!
* \brief
*   会议成员信息结果体
*/
struct meeting_participants
{
	char* name;
	char* number;
};

/**!
* \brief
*   会议成员信息结果体
*/
struct meeting_participants_param
{
	meeting_participants* member;
	UINT32 count;                 ///member结构体指针成员个数，必须匹配
};

/**!
* \brief
*   创建带成员的即时会议参数结构体
*/
struct plugin_create_meeting_with_participants_param
{
	plugin_call_back callbackFunc;              /// 异步调用回调函数

	char* meetingSubject;                       /// 会议名称
	UINT32 meetingType;                         /// 会议类型
	UINT32 needPassword;                        /// 会议是否需要密码
	meeting_participants_param memberInfo;      /// 会议成员信息
};

/**!
* \brief
*   sso登录接口参数结构体
*/
struct plugin_sso_login_param
{
	plugin_call_back callbackFunc;    /// 异步调用回调函数

	UINT32 serverPort;     /// 登录服务器端口
	char* serverAddress;   /// 登录服务器地址
	char* domain;          /// 登录域名
	char* code;          /// 登录凭证
};

#endif /* _PLUGIN_MSG_H_ */
