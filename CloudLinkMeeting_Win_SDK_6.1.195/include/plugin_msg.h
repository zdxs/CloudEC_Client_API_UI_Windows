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

//Ĭ�Ͽͻ�������·����󳤶�
#define MAX_APP_PATH      255

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
*   �첽����API��Ϣ�ص�
*
* @param
*   ret     ���ؽ��
*   data    ���ر���
*
* @return
*   void
*/
typedef void(*plugin_call_back)(int	ret, void* data);

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
	plugin_call_back callbackFunc;    /// �첽���ûص�����

	char* path;                       /// CloudLink�ļ���·��
	char* appId;                      /// Ӧ��ID
	plugin_notify_func notifyFunc;    /// ֪ͨ����
	char* config;                     /// ���ƻ�����
};

/**!
* \brief
*   ��¼�ӿڲ����ṹ��
*/
struct plugin_login_param
{
	plugin_call_back callbackFunc;    /// �첽���ûص�����

	UINT32 serverPort;     /// ��¼�������˿�
	char* serverAddress;   /// ��¼��������ַ
	char* account;         /// ��¼�������˺�
	char* password;        /// ��¼����������
};

/**!
* \brief
*   ������ʱ��������ṹ��
*/
struct plugin_create_meeting_param
{
	plugin_call_back callbackFunc;              /// �첽���ûص�����

	char* meetingSubject;                       /// ��������
	UINT32 meetingType;                         /// ��������
	UINT32 needPassword;                        /// �����Ƿ���Ҫ����
};

/**!
* \brief
*   ����ID�������ṹ��
*/
struct plugin_join_meeting_by_id_param
{
	plugin_call_back callbackFunc;           /// �첽���ûص�����

	char* meetingID;
	char* password;
};

/**!
* \brief
*   ͨ�ýӿڲ����ṹ��
*/
struct plugin_common_param
{
	plugin_call_back callbackFunc;  /// �첽���ûص�����
};

/**!
* \brief
*   �����Ա��Ϣ�����
*/
struct meeting_participants
{
	char* name;
	char* number;
};

/**!
* \brief
*   �����Ա��Ϣ�����
*/
struct meeting_participants_param
{
	meeting_participants* member;
	UINT32 count;                 ///member�ṹ��ָ���Ա����������ƥ��
};

/**!
* \brief
*   ��������Ա�ļ�ʱ��������ṹ��
*/
struct plugin_create_meeting_with_participants_param
{
	plugin_call_back callbackFunc;              /// �첽���ûص�����

	char* meetingSubject;                       /// ��������
	UINT32 meetingType;                         /// ��������
	UINT32 needPassword;                        /// �����Ƿ���Ҫ����
	meeting_participants_param memberInfo;      /// �����Ա��Ϣ
};

/**!
* \brief
*   sso��¼�ӿڲ����ṹ��
*/
struct plugin_sso_login_param
{
	plugin_call_back callbackFunc;    /// �첽���ûص�����

	UINT32 serverPort;     /// ��¼�������˿�
	char* serverAddress;   /// ��¼��������ַ
	char* domain;          /// ��¼����
	char* code;          /// ��¼ƾ֤
};

/**!
* \brief
*   �������ӿڲ����ṹ��
*/
struct plugin_join_meeting_anonymous_param
{
	plugin_call_back callbackFunc;    /// �첽���ûص�����

	char* serverAddress;   /// ��������ַ
	char* confId;          /// ����ID
	char* accessCode;      /// ������
	char* nickName;        /// �ǳ�
	UINT32 serverPort;     /// �������˿�
};
#endif /* _PLUGIN_MSG_H_ */
