@echo off
setlocal

echo 开始执行: npm run docs:clean-dev

:: 检查当前目录是否有 package.json 文件
if not exist "package.json" (
    echo 错误: 当前目录下没有找到 package.json 文件 1>&2
    echo 请确保在项目根目录下运行此脚本 1>&2
    exit /b 1
)

:: 执行命令
npm run docs:clean-dev

:: 检查命令执行状态
if %errorlevel% neq 0 (
    echo 命令执行失败 1>&2
    exit /b 1
)

echo 命令执行成功
endlocal