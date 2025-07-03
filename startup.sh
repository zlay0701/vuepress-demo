#!/bin/bash

# 执行 npm run docs:clean-dev 命令
echo "开始执行: npm run docs:clean-dev"

# 检查当前目录是否有 package.json 文件
if [ ! -f "package.json" ]; then
    echo "错误: 当前目录下没有找到 package.json 文件" >&2
    echo "请确保在项目根目录下运行此脚本" >&2
    exit 1
fi

# 执行命令
npm run docs:clean-dev

# 检查命令执行状态
if [ $? -eq 0 ]; then
    echo "命令执行成功"
else
    echo "命令执行失败" >&2
    exit 1
fi