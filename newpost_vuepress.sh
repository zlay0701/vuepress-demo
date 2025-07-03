#!/bin/bash

# 调试模式 - 设置 DEBUG=1 启用详细输出
# DEBUG=1 ./newpost.sh 测试
# ./newpost.sh post1/测试
if [ -n "$DEBUG" ]; then
  set -x  # 启用命令跟踪
  echo "==> 调试模式已启用"
fi

# 检查是否提供了参数
if [ -z "$1" ]; then
  echo "错误: 请提供文章标题！" >&2
  exit 1
fi

# 生成日期前缀
DATE=$(date +%Y-%m-%d)

# 将所有参数合并为一个字符串（处理带空格的输入）
INPUT="$*"

# 移除路径分隔符 / 前后的空格
INPUT=$(echo "$INPUT" | sed 's/ *\/* *\//\//g' | sed 's/ *\/$/\//')

# 提取目录和标题
if [[ "$INPUT" == *"/"* ]]; then
  INPUT_DIR=$(dirname "$INPUT")
  TITLE=$(basename "$INPUT")
  
  # 移除标题开头的空格，再将多个连续空格替换为单个空格，最后替换为连字符
  TITLE=$(echo "$TITLE" | sed 's/^ *//' | tr -s ' ' | tr ' ' '-')
  
  # 前面加上 src 前缀
  BASE_DIR="src/$INPUT_DIR"
  
  mkdir -p "$BASE_DIR"
  FILENAME="${BASE_DIR}/${DATE}-${TITLE}.md"  # 包含日期前缀
  
  if [ -n "$DEBUG" ]; then
    echo "==> 解析结果:"
    echo "  日期: $DATE"
    echo "  原始输入: $*"
    echo "  处理后输入: $INPUT"
    echo "  输入目录: $INPUT_DIR"
    echo "  原始标题: $(basename "$INPUT")"
    echo "  处理后标题: $TITLE"
    echo "  基础目录: $BASE_DIR"
    echo "  创建目录: $BASE_DIR"
    echo "  完整路径: $FILENAME"
  fi
else
  # 移除标题开头的空格，再将多个连续空格替换为单个空格，最后替换为连字符
  TITLE=$(echo "$INPUT" | sed 's/^ *//' | tr -s ' ' | tr ' ' '-')
  
  FILENAME="src/post/${DATE}-${TITLE}.md"  # 默认输出到 src/post/ 目录
  
  if [ -n "$DEBUG" ]; then
    echo "==> 解析结果:"
    echo "  日期: $DATE"
    echo "  原始输入: $*"
    echo "  处理后输入: $INPUT"
    echo "  原始标题: $INPUT"
    echo "  处理后标题: $TITLE"
    echo "  完整路径: $FILENAME"
  fi
fi

# 校验文件是否已存在
if [ -f "$FILENAME" ]; then
    echo "✗ 文章 $FILENAME 已存在，不会重新创建。"
    exit 1
fi

# 创建文章，使用 src/.vuepress/archetypes/post.md 模板
echo "==> 创建文章: $FILENAME"
cp src/.vuepress/archetypes/post.md "$FILENAME"

# 显示创建结果
if [ $? -eq 0 ]; then
  echo "✓ 文章创建成功"
  
  # 获取当前时间，格式为 %Y-%m-%d %H:%M:%S
  CURRENT_TIME=$(date +"%Y-%m-%d %H:%M:%S")
  
  # 替换文件中的字符串
  sed -i "s/{{ title }}/$TITLE/g" "$FILENAME"
  sed -i "s/{{ date }}/$CURRENT_TIME/g" "$FILENAME"
  
  echo "✓ 字符串替换成功"
else
  echo "✗ 文章创建失败" >&2
  exit 1
fi