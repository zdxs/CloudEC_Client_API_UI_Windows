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

//Ĭ���ַ�����󳤶�
#define COMMON_MAX_CHAR_LEN                     128

/*
*  ��������ö��
*/
typedef enum {
	CONF_MEDIATYPE_FLAG_VOICE_DATA = 17, //����+����
	CONF_MEDIATYPE_FLAG_VIDEO_DATA = 19, //��Ƶ+����
	CONF_MEDIATYPE_FLAG_HDVIDEO_DATA = 21, //����+����
} CONF_MEDIATYPE;

/**!
* \brief
*   �ӿڷ���ֵ�ṹ��
*/
struct plugin_call_back_result
{
	int code;                         /// ����ֵ
	char msg[COMMON_MAX_CHAR_LEN];    /// ����ֵ����
};

/**!
* \brief
*   �첽����API��Ϣ�ص�
*
* @param
*   ret     ���ؽ��
*   data    ���ر���
*
* @return
*   void
*/
typedef void(*plugin_call_back)(plugin_call_back_result* ret, void* data);

/**!
* \brief
*   notify֪ͨ�ص�
*
* @param
*   notify     ֪ͨID
*   data       ֪ͨ����
*
* @return
*   void
*/
typedef void(*plugin_notify_func)(int notify, void* data);

/**!
* \brief
*   ��ʼ���ӿڲ����ṹ��
*/
struct plugin_init_param
{
	plugin_call_back callbackFunc;    /// �첽���ûص���������ѡ��

	char* path;                       /// CloudLink�ļ���·������ѡ��
	char* appId;                      /// Ӧ��ID����ѡ��
	plugin_notify_func notifyFunc;    /// ֪ͨ��������ѡ��
	char* config;                     /// ���ƻ����ã���ѡ��
};

/**!
* \brief
*   ��¼�ӿڲ����ṹ��
*/
struct plugin_login_param
{
	plugin_call_back callbackFunc;    /// �첽���ûص���������ѡ��

	char* account;         /// ��¼�������˺ţ���ѡ��
	char* password;        /// ��¼���������루��ѡ��
};

/**!
* \brief
*   ������ʱ��������ṹ��
*/
struct plugin_create_meeting_param
{
	plugin_call_back callbackFunc;              /// �첽���ûص���������ѡ��

	char* meetingSubject;                       /// �������⣨��ѡ��
	UINT32 meetingType;                         /// �������ͣ���ѡ��
	UINT32 needPassword;                        /// �����Ƿ���Ҫ���루��ѡ��
};

/**!
* \brief
*   ����ID�������ṹ��
*/
struct plugin_join_meeting_by_id_param
{
	plugin_call_back callbackFunc;           /// �첽���ûص���������ѡ��

	char* meetingID;                         /// ����ID����ѡ��
	char* accessCode;                        /// ��������루��ѡ��
	char* nickName;                          /// �����ǳƣ���ѡ���������ʱ��ѡ��
};

/**!
* \brief
*   ͨ�ýӿڲ����ṹ��
*/
struct plugin_common_param
{
	plugin_call_back callbackFunc;  /// �첽���ûص���������ѡ��
};

/**!
* \brief
*   �����Ա��Ϣ�����
*/
struct meeting_participants
{
	char* name;        /// �����Ա���ƣ���ѡ��
	char* number;      /// �����Ա���루��ѡ��
};

/**!
* \brief
*   �����Ա��Ϣ�����
*/
struct meeting_participants_param
{
	meeting_participants* member; /// �����Ա��Ϣ����ѡ��
	UINT32 count;                 /// member�ṹ��ָ���Ա������������memberƥ�䣨��ѡ��
};

/**!
* \brief
*   ��������Ա�ļ�ʱ��������ṹ��
*/
struct plugin_create_meeting_with_participants_param
{
	plugin_call_back callbackFunc;              /// �첽���ûص���������ѡ��

	char* meetingSubject;                       /// �������⣨��ѡ��
	UINT32 meetingType;                         /// �������ͣ���ѡ��
	UINT32 needPassword;                        /// �����Ƿ���Ҫ���루��ѡ��
	meeting_participants_param memberInfo;      /// �����Ա��Ϣ����ѡ��
};

/**!
* \brief
*   sso��¼�ӿڲ����ṹ��
*/
struct plugin_sso_login_param
{
	plugin_call_back callbackFunc;    /// �첽���ûص���������ѡ��

	char* domain;          /// ��¼��������ѡ��
	char* code;          /// ��¼ƾ֤����ѡ��
};

#endif /* _PLUGIN_MSG_H_ */
