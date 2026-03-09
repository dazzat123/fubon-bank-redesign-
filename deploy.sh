#!/bin/bash

# Fubon Bank Redesign - 部署腳本
# 使用說明：./deploy.sh

set -e

PROJECT_NAME="fubon-bank-redesign"
BUILD_DIR="."

echo "🚀 Fubon Bank Redesign - 部署腳本"
echo "=================================="
echo ""

# 檢查 Wrangler 是否已安裝
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler 未安裝"
    echo "請執行：npm install -g wrangler"
    exit 1
fi

echo "✅ Wrangler 已安裝：$(wrangler --version)"
echo ""

# 檢查 API Token
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "⚠️  未檢測到 CLOUDFLARE_API_TOKEN 環境變數"
    echo ""
    echo "請選擇部署方式："
    echo "1. 設置 API Token 並部署 (推薦)"
    echo "2. 使用 Cloudflare Dashboard 部署"
    echo "3. 使用 GitHub + Cloudflare Pages 部署"
    echo ""
    read -p "請選擇 (1-3): " choice
    
    case $choice in
        1)
            read -p "請輸入 CLOUDFLARE_API_TOKEN: " -s token
            export CLOUDFLARE_API_TOKEN=$token
            echo ""
            echo "✅ API Token 已設置"
            ;;
        2)
            echo ""
            echo "📋 Dashboard 部署步驟："
            echo "1. 訪問：https://dash.cloudflare.com/"
            echo "2. Workers & Pages > Create application"
            echo "3. 選擇 Pages > Direct Upload"
            echo "4. 上傳整個資料夾"
            echo "5. 點擊 Deploy"
            echo ""
            exit 0
            ;;
        3)
            echo ""
            echo "📋 GitHub 部署步驟："
            echo "1. git init && git add . && git commit -m 'Initial commit'"
            echo "2. git remote add origin https://github.com/username/repo.git"
            echo "3. git push -u origin main"
            echo "4. Cloudflare Dashboard > Connect to Git"
            echo ""
            exit 0
            ;;
        *)
            echo "❌ 無效選擇"
            exit 1
            ;;
    esac
fi

# 部署選項
echo ""
echo "請選擇部署環境："
echo "1. 生產環境 (Production)"
echo "2. 開發環境 (Development)"
echo ""
read -p "請選擇 (1-2): " env_choice

case $env_choice in
    1)
        echo ""
        echo "🚀 部署到生產環境..."
        wrangler pages deploy $BUILD_DIR --project-name=$PROJECT_NAME
        ;;
    2)
        echo ""
        echo "🧪 部署到開發環境..."
        wrangler pages deploy $BUILD_DIR --project-name=$PROJECT_NAME-dev
        ;;
    *)
        echo "❌ 無效選擇"
        exit 1
        ;;
esac

echo ""
echo "✅ 部署完成！"
echo ""
echo "🌐 網站網址："
echo "   https://$PROJECT_NAME.pages.dev"
echo ""
echo "📊 查看部署狀態："
echo "   https://dash.cloudflare.com/?to=/:account/workers-and-pages/view/$PROJECT_NAME/overview"
echo ""
