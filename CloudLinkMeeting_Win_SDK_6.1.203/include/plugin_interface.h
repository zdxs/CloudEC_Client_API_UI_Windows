/**********************************************************************
*
* plugin_interface.h
*
* ����ƽ̨ API.
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
*   ��ʼ���ӿ�
*   ���ӿ������첽�ӿ�
*
* @param
*	data ���ṹ�嶨��
*
* @return
*   �ɹ�����0������ʧ��
*/
CLKSDK_API int clm_init(plugin_init_param *data);

/**!
* \brief
*   �˳��ӿ�
*   ���ӿ�����ͬ���ӿ�
*
* @return
*   �ɹ�����0������ʧ��
*/
CLKSDK_API int clm_exit_sync();

/**!
* \brief
*   ��¼�ͻ���
*   ���ӿ������첽�ӿ�
*
* @param
*	data ���ṹ�嶨��
*
* @return
*   �ɹ�����0������ʧ��
*/
CLKSDK_API int clm_login(plugin_login_param *data);

/**!
* \brief
*   ������ʱ����
*   ���ӿ������첽�ӿ�
*
* @param
*	data ���ṹ�嶨��
*
* @return
*   �ɹ�����0������ʧ��
*/
CLKSDK_API int clm_createMeeting(plugin_create_meeting_param *data);

/**!
* \brief
*   ͨ������ID������������
*   ���ӿ������첽�ӿ�
*
* @param
*	data ���ṹ�嶨��
*
* @return
*   �ɹ�����0������ʧ��
*/
CLKSDK_API int clm_joinMeetingById(plugin_join_meeting_by_id_param *data);

/**!
* \brief
*   ������ʱ���飨������ߣ�
*   ���ӿ������첽�ӿ�
*
* @param
*	data ���ṹ�嶨��
*
* @return
*   �ɹ�����0������ʧ��
*/
CLKSDK_API int clm_createMeetingWithParticipants(plugin_create_meeting_with_participants_param *data);

/**!
* \brief
*   sso��¼
*   ���ӿ������첽�ӿ�
*
* @param
*	data ���ṹ�嶨��
*
* @return
*   �ɹ�����0������ʧ��
*/
CLKSDK_API int clm_SSOLogin(plugin_sso_login_param *data);

/**!
* \brief
*   �˳���¼�ӿ�
*   ���ӿ������첽�ӿ�
*
* @param
*	data ���ṹ�嶨��
*
* @return
*   �ɹ�����0������ʧ��
*/
CLKSDK_API int clm_logout(plugin_common_param *data);

#ifdef __cplusplus
}
#endif

#endif /* _PLUGIN_INTERFACE_H_ */

