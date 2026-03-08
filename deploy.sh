#!/bin/bash

# ============================================
# 富邦銀行 Apple 風格重新設計 - 部署腳本
# Fubon Bank Redesign - Deployment Script
# ============================================

set -e

# 顏色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 專案目錄
PROJECT_DIR="/root/.openclaw/workspace/fubon-bank-redesign"
PROJECT_NAME="fubon-bank-redesign"

echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   富邦銀行 Apple 風格重新設計 - 部署工具              ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
echo ""

# 檢查 Wrangler 是否安裝
check_wrangler() {
  if ! command -v wrangler &> /dev/null; then
    echo -e "${YELLOW}⚠️  Wrangler 未安裝，正在安裝...${NC}"
    npm install -g wrangler
  else
    echo -e "${GREEN}✓ Wrangler 已安裝${NC}"
  fi
}

# 檢查 Cloudflare 登入
check_login() {
  echo -e "${YELLOW}📝 檢查 Cloudflare 登入狀態...${NC}"
  if ! wrangler whoami &> /dev/null; then
    echo -e "${YELLOW}⚠️  未登入 Cloudflare，正在啟動登入流程...${NC}"
    wrangler login
  else
    echo -e "${GREEN}✓ 已登入 Cloudflare${NC}"
  fi
}

# 驗證專案結構
validate_project() {
  echo -e "${YELLOW}📋 驗證專案結構...${NC}"
  
  required_files=(
    "index.html"
    "css/main.css"
    "js/main.js"
    "wrangler.toml"
  )
  
  for file in "${required_files[@]}"; do
    if [ -f "${PROJECT_DIR}/${file}" ]; then
      echo -e "${GREEN}  ✓ ${file}${NC}"
    else
      echo -e "${RED}  ✗ ${file} (遺失)${NC}"
      exit 1
    fi
  done
}

# 部署到 Cloudflare Pages
deploy_pages() {
  local env=${1:-production}
  
  echo ""
  echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
  echo -e "${BLUE}║   部署到 Cloudflare Pages                              ║${NC}"
  echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
  echo ""
  
  cd "${PROJECT_DIR}"
  
  if [ "$env" == "dev" ]; then
    echo -e "${YELLOW}🚀 部署到開發環境...${NC}"
    wrangler pages deploy . --project-name=${PROJECT_NAME}-dev
  else
    echo -e "${YELLOW}🚀 部署到生產環境...${NC}"
    wrangler pages deploy . --project-name=${PROJECT_NAME}
  fi
  
  echo ""
  echo -e "${GREEN}✓ 部署完成！${NC}"
  echo ""
}

# 本機預覽
preview_local() {
  echo ""
  echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
  echo -e "${BLUE}║   本機預覽                                             ║${NC}"
  echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
  echo ""
  
  cd "${PROJECT_DIR}"
  
  if command -v python3 &> /dev/null; then
    echo -e "${YELLOW}🌐 啟動 Python 伺服器...${NC}"
    echo -e "${GREEN}訪問：http://localhost:8000${NC}"
    echo -e "${YELLOW}按 Ctrl+C 停止伺服器${NC}"
    echo ""
    python3 -m http.server 8000
  elif command -v npx &> /dev/null; then
    echo -e "${YELLOW}🌐 啟動 npx serve...${NC}"
    echo -e "${GREEN}訪問：http://localhost:3000${NC}"
    echo -e "${YELLOW}按 Ctrl+C 停止伺服器${NC}"
    echo ""
    npx serve .
  else
    echo -e "${RED}✗ 未找到 Python 或 npx，請安裝其中一個${NC}"
    exit 1
  fi
}

# 顯示選單
show_menu() {
  echo -e "${BLUE}請選擇操作：${NC}"
  echo ""
  echo "  1) 部署到生產環境 (Production)"
  echo "  2) 部署到開發環境 (Development)"
  echo "  3) 本機預覽 (Local Preview)"
  echo "  4) 退出"
  echo ""
  read -p "輸入選項 [1-4]: " choice
  
  case $choice in
    1)
      check_wrangler
      check_login
      validate_project
      deploy_pages production
      ;;
    2)
      check_wrangler
      check_login
      validate_project
      deploy_pages dev
      ;;
    3)
      preview_local
      ;;
    4)
      echo -e "${GREEN}再見！${NC}"
      exit 0
      ;;
    *)
      echo -e "${RED}無效選項${NC}"
      exit 1
      ;;
  esac
}

# 檢查參數
if [ "$#" -gt 0 ]; then
  case $1 in
    --deploy|-d)
      check_wrangler
      check_login
      validate_project
      deploy_pages production
      ;;
    --dev)
      check_wrangler
      check_login
      validate_project
      deploy_pages dev
      ;;
    --preview|-p)
      preview_local
      ;;
    --help|-h)
      echo "用法：$0 [選項]"
      echo ""
      echo "選項:"
      echo "  --deploy, -d    部署到生產環境"
      echo "  --dev           部署到開發環境"
      echo "  --preview, -p   本機預覽"
      echo "  --help, -h      顯示此說明"
      echo "  (無參數)        顯示互動選單"
      ;;
    *)
      echo -e "${RED}未知選項：$1${NC}"
      echo "使用 --help 查看說明"
      exit 1
      ;;
  esac
else
  show_menu
fi
