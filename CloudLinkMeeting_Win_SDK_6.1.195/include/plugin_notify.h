/* Copyright 2018-2028 CloudLink Systems, Inc. */
/***************************************************************************
*
*  PLUGIN_NOTIFY.H
*
*  Copyright 2018-2028,2018 HUAWEI Technologies Co., Ltd.
*
***************************************************************************/


#ifndef _PLUGIN_NOTIFY_H_
#define _PLUGIN_NOTIFY_H_

/*notify id定义，2200-2299*/
#define PLUGIN_NOTIFY_MSG_2200                      2200

#define PLUGIN_NOTIFY_CUSTOM_MENU_CLICK             2201
#define PLUGIN_NOTIFY_USER_WAS_KICKED_OUT           2202
#define PLUGIN_NOTIFY_DATA_SHARING_STATE_CHANGED    2203
#define PLUGIN_NOTIFY_DATA_SHARING_PERSON_CHANGED   2204
#define PLUGIN_NOTIFY_CONF_INFO                     2205
#define PLUGIN_NOTIFY_CONF_LIFECYCLE                2206
#define PLUGIN_NOTIFY_GET_REMOTE_CONTROL_PRIVLEGE   2207
#define PLUGIN_NOTIFY_DEL_REMOTE_CONTROL_PRIVLEGE   2208
#define PLUGIN_NOTIFY_DATA_SHARING_HWND_INFO        2209

//APP连接断开
#define PLUGIN_NOTIFY_APP_DISCONNECTED              2298

#define PLUGIN_NOTIFY_MSG_2299                      2299

/*notify 字符串最大长度 */
#define MAX_NOTIFY_STR_LENGTH                       256

/**!
* \brief
*   扩展菜单的点击通知结构体
*/
struct plugin_notify_custom_menu_click
{
    UINT32 menuType;                            /// 菜单类型 0（普通菜单） 或 1 （二态菜单）
    char menuKey[MAX_NOTIFY_STR_LENGTH];        /// 菜单ID
    UINT32 menuIndex;                           /// 菜单index 普通菜单为0， 二态菜单为0或1
    char menuName[MAX_NOTIFY_STR_LENGTH];       /// 菜单名称
};

/**!
* \brief
*   数据共享状态变更的通知结构体
*/
struct plugin_notify_data_sharing_state_changed
{
    UINT32 shareStatus;                         /// 共享关闭 0 或 共享开始 1
};

/**!
* \brief
*   数据共享控制者变更的通知结构体
*/
struct plugin_notify_data_sharing_person_changed
{
    char sharerName[MAX_NOTIFY_STR_LENGTH];     /// 当前分享者
    char shareAccount[MAX_NOTIFY_STR_LENGTH];   /// 当前分享帐号
};

/**!
* \brief
*   会议信息的通知结构体
*/
struct plugin_notify_conf_info
{
    char confUrl[MAX_NOTIFY_STR_LENGTH];     /// 当前会议链接
};

/**!
* \brief
*   会议生命周期的通知结构体
*/
struct plugin_notify_conf_lifecycle
{
    UINT32 state;                            ///会议开始 0 或 会议结束 1
};

/**!
* \brief
*   取得共享控制的通知结构体
*/
struct plugin_notify_get_remote_control_privlege
{
    char userName[MAX_NOTIFY_STR_LENGTH];     /// 当前屏幕控制者姓名
    char userAccount[MAX_NOTIFY_STR_LENGTH];  /// 当前屏幕控制者帐号
};

/**!
* \brief
*   取消共享控制的通知结构体
*/
struct plugin_notify_del_remote_control_privlege
{
    char userName[MAX_NOTIFY_STR_LENGTH];     /// 当前取消的屏幕控制者姓名
    char userAccount[MAX_NOTIFY_STR_LENGTH];  /// 当前取消的屏幕控制者帐号
};

/**!
* \brief
*   程序共享程序信息
*/
struct plugin_notify_data_sharing_hwnd_info
{
    char shareHwndTitle[MAX_NOTIFY_STR_LENGTH]; /// 程序共享窗口名称
};

/**!
* \brief
*   通用返回值结构体
*/
struct plugin_notify_common_result
{
	UINT32 code;
	char msg[MAX_NOTIFY_STR_LENGTH];         /// 相关描述
};

#endif /* _PLUGIN_NOTIFY_H_ */
