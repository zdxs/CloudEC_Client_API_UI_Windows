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
