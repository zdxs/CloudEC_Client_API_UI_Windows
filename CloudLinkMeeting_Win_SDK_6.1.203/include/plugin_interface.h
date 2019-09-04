/**********************************************************************
*
* plugin_interface.h
*
* 开发平台 API.
*
* Copyright 2018-2028 HuaWei, Inc. 
*
*
**********************************************************************/

#if !defined (_PLUGIN_INTERFACE_H_)
#define _PLUGIN_INTERFACE_H_

#ifdef CLKSDK_EXPORTS
#define CLKSDK_API __declspec(dllexport)
#else
#define CLKSDK_API __declspec(dllimport)
#endif

#include "plugin_msg.h"


#ifdef __cplusplus
extern "C" {
#endif

/**!
* \brief
*   初始化接口
*   本接口属于异步接口
*
* @param
*	data 见结构体定义
*
* @return
*   成功返回0，否则失败
*/
CLKSDK_API int clm_init(plugin_init_param *data);

/**!
* \brief
*   退出接口
*   本接口属于同步接口
*
* @return
*   成功返回0，否则失败
*/
CLKSDK_API int clm_exit_sync();

/**!
* \brief
*   登录客户端
*   本接口属于异步接口
*
* @param
*	data 见结构体定义
*
* @return
*   成功返回0，否则失败
*/
CLKSDK_API int clm_login(plugin_login_param *data);

/**!
* \brief
*   创建即时会议
*   本接口属于异步接口
*
* @param
*	data 见结构体定义
*
* @return
*   成功返回0，否则失败
*/
CLKSDK_API int clm_createMeeting(plugin_create_meeting_param *data);

/**!
* \brief
*   通过会议ID和密码加入会议
*   本接口属于异步接口
*
* @param
*	data 见结构体定义
*
* @return
*   成功返回0，否则失败
*/
CLKSDK_API int clm_joinMeetingById(plugin_join_meeting_by_id_param *data);

/**!
* \brief
*   创建即时会议（有与会者）
*   本接口属于异步接口
*
* @param
*	data 见结构体定义
*
* @return
*   成功返回0，否则失败
*/
CLKSDK_API int clm_createMeetingWithParticipants(plugin_create_meeting_with_participants_param *data);

/**!
* \brief
*   sso登录
*   本接口属于异步接口
*
* @param
*	data 见结构体定义
*
* @return
*   成功返回0，否则失败
*/
CLKSDK_API int clm_SSOLogin(plugin_sso_login_param *data);

/**!
* \brief
*   退出登录接口
*   本接口属于异步接口
*
* @param
*	data 见结构体定义
*
* @return
*   成功返回0，否则失败
*/
CLKSDK_API int clm_logout(plugin_common_param *data);

#ifdef __cplusplus
}
#endif

#endif /* _PLUGIN_INTERFACE_H_ */

