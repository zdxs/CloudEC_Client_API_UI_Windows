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

/*notify id���壬2200-2299*/
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

//APP���ӶϿ�
#define PLUGIN_NOTIFY_APP_DISCONNECTED              2298

#define PLUGIN_NOTIFY_MSG_2299                      2299

/*notify �ַ�����󳤶� */
#define MAX_NOTIFY_STR_LENGTH                       256

/**!
* \brief
*   ��չ�˵��ĵ��֪ͨ�ṹ��
*/
struct plugin_notify_custom_menu_click
{
    UINT32 menuType;                            /// �˵����� 0����ͨ�˵��� �� 1 ����̬�˵���
    char menuKey[MAX_NOTIFY_STR_LENGTH];        /// �˵�ID
    UINT32 menuIndex;                           /// �˵�index ��ͨ�˵�Ϊ0�� ��̬�˵�Ϊ0��1
    char menuName[MAX_NOTIFY_STR_LENGTH];       /// �˵�����
};

/**!
* \brief
*   ���ݹ���״̬�����֪ͨ�ṹ��
*/
struct plugin_notify_data_sharing_state_changed
{
    UINT32 shareStatus;                         /// ����ر� 0 �� ����ʼ 1
};

/**!
* \brief
*   ���ݹ�������߱����֪ͨ�ṹ��
*/
struct plugin_notify_data_sharing_person_changed
{
    char sharerName[MAX_NOTIFY_STR_LENGTH];     /// ��ǰ������
    char shareAccount[MAX_NOTIFY_STR_LENGTH];   /// ��ǰ�����ʺ�
};

/**!
* \brief
*   ������Ϣ��֪ͨ�ṹ��
*/
struct plugin_notify_conf_info
{
    char confUrl[MAX_NOTIFY_STR_LENGTH];     /// ��ǰ��������
};

/**!
* \brief
*   �����������ڵ�֪ͨ�ṹ��
*/
struct plugin_notify_conf_lifecycle
{
    UINT32 state;                            ///���鿪ʼ 0 �� ������� 1
};

/**!
* \brief
*   ȡ�ù�����Ƶ�֪ͨ�ṹ��
*/
struct plugin_notify_get_remote_control_privlege
{
    char userName[MAX_NOTIFY_STR_LENGTH];     /// ��ǰ��Ļ����������
    char userAccount[MAX_NOTIFY_STR_LENGTH];  /// ��ǰ��Ļ�������ʺ�
};

/**!
* \brief
*   ȡ��������Ƶ�֪ͨ�ṹ��
*/
struct plugin_notify_del_remote_control_privlege
{
    char userName[MAX_NOTIFY_STR_LENGTH];     /// ��ǰȡ������Ļ����������
    char userAccount[MAX_NOTIFY_STR_LENGTH];  /// ��ǰȡ������Ļ�������ʺ�
};

/**!
* \brief
*   �����������Ϣ
*/
struct plugin_notify_data_sharing_hwnd_info
{
    char shareHwndTitle[MAX_NOTIFY_STR_LENGTH]; /// ������������
};

/**!
* \brief
*   ͨ�÷���ֵ�ṹ��
*/
struct plugin_notify_common_result
{
	UINT32 code;
	char msg[MAX_NOTIFY_STR_LENGTH];         /// �������
};

#endif /* _PLUGIN_NOTIFY_H_ */
