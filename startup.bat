@echo off
setlocal

echo ��ʼִ��: npm run docs:clean-dev

:: ��鵱ǰĿ¼�Ƿ��� package.json �ļ�
if not exist "package.json" (
    echo ����: ��ǰĿ¼��û���ҵ� package.json �ļ� 1>&2
    echo ��ȷ������Ŀ��Ŀ¼�����д˽ű� 1>&2
    exit /b 1
)

:: ִ������
npm run docs:clean-dev

:: �������ִ��״̬
if %errorlevel% neq 0 (
    echo ����ִ��ʧ�� 1>&2
    exit /b 1
)

echo ����ִ�гɹ�
endlocal