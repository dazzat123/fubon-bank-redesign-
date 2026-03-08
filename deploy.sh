#!/bin/bash

# 富邦銀行網站部署腳本
# Fubon Bank Website Deployment Script

set -e

echo "🚀 開始部署到 Cloudflare Pages..."

# 檢查 Wrangler 是否已安裝
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler 未安裝，正在安裝..."
    npm install -g wrangler
fi

# 檢查是否已登入
echo "🔐 檢查 Cloudflare 登入狀態..."
if ! wrangler whoami &> /dev/null; then
    echo "⚠️  未登入 Cloudflare"
    echo "請執行以下命令登入："
    echo "   wrangler login"
    echo ""
    echo "或使用 API Token："
    echo "   export CLOUDFLARE_API_TOKEN='your-token'"
    exit 1
fi

# 獲取用戶信息
wrangler whoami

# 部署
echo ""
echo "📦 開始部署..."
cd /root/.openclaw/workspace/fubon-bank-site

wrangler pages deploy . --project-name=fubon-bank-redesign

echo ""
echo "✅ 部署完成！"
echo "請查看上面的輸出獲取 Cloudflare Pages URL"
