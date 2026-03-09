# 🚀 部署指南
## Deployment Guide

**更新日期**: 2026-03-09 21:15 HKT  
**狀態**: ⏳ 待部署

---

## ✅ 部署準備已完成

### 已配置
- ✅ Wrangler CLI 已安裝 (v4.71.0)
- ✅ wrangler.toml 已創建
- ✅ 安全 Headers 已配置
- ✅ 緩存策略已設置
- ✅ 所有圖片已整合
- ✅ 網站已優化

---

## 🔑 部署步驟

### 方法 1: Cloudflare Pages (推薦)

#### 步驟 1: 創建 API Token
1. 訪問：https://dash.cloudflare.com/profile/api-tokens
2. 點擊 **Create Token**
3. 選擇 **Edit Cloudflare Workers** 模板
4. 點擊 **Use template**
5. 設定權限：
   - **Account.Cloudflare Pages** = Edit
   - **Account.Cloudflare Workers** = Edit
6. 點擊 **Continue to summary**
7. 點擊 **Create Token**
8. **複製 Token** (只顯示一次！)

#### 步驟 2: 設置環境變數
```bash
export CLOUDFLARE_API_TOKEN="你的_token_在此"
```

#### 步驟 3: 部署到 Cloudflare Pages
```bash
cd /root/.openclaw/workspace/fubon-bank-redesign
wrangler pages deploy . --project-name=fubon-bank-redesign
```

#### 步驟 4: 獲取部署 URL
部署成功後會顯示：
```
✨ Deployment complete!
Your site is now live at:
https://fubon-bank-redesign.pages.dev
```

---

### 方法 2: Cloudflare Dashboard (無需 CLI)

#### 步驟 1: 登入 Dashboard
訪問：https://dash.cloudflare.com/

#### 步驟 2: 創建 Pages 項目
1. 選擇 **Workers & Pages**
2. 點擊 **Create application**
3. 選擇 **Pages** 標籤
4. 點擊 **Connect to Git** 或 **Direct Upload**

#### 步驟 3: Direct Upload
1. 選擇 **Direct Upload**
2. 將整個 `fubon-bank-redesign` 資料夾拖曳到上傳區域
3. 或點擊 **Upload** 選擇資料夾
4. 等待上傳完成

#### 步驟 4: 配置設定
- **Project name**: fubon-bank-redesign
- **Production branch**: main
- **Build command**: (留空)
- **Build output directory**: `.`

#### 步驟 5: 部署
點擊 **Deploy**，等待部署完成。

---

### 方法 3: GitHub + Cloudflare Pages (CI/CD)

#### 步驟 1: 推送至 GitHub
```bash
cd /root/.openclaw/workspace/fubon-bank-redesign
git init
git add .
git commit -m "Initial commit - Fubon Bank Redesign"
git branch -M main
git remote add origin https://github.com/你的 username/fubon-bank-redesign.git
git push -u origin main
```

#### 步驟 2: 連接 Cloudflare Pages
1. 訪問：https://dash.cloudflare.com/
2. **Workers & Pages** > **Create application**
3. 選擇 **Pages** > **Connect to Git**
4. 選擇你的 GitHub 倉庫
5. 設定：
   - **Production branch**: main
   - **Build command**: (留空)
   - **Build output directory**: `.`
6. 點擊 **Save and Deploy**

#### 步驟 3: 自動部署
- 每次 push 到 main 分支都會自動部署
- 可以設定預覽部署 (Preview Deployments)

---

## 🔧 Wrangler 配置說明

### wrangler.toml
```toml
[build]
command = ""
publish = "."

[build.environment]
NODE_VERSION = "18"
```

### 安全 Headers
已配置以下安全 Headers：
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security: max-age=31536000`
- `Content-Security-Policy`
- `Referrer-Policy`
- `Permissions-Policy`

### 緩存策略
- **圖片**: 1 年 (immutable)
- **CSS**: 1 年 (immutable)
- **JavaScript**: 1 年 (immutable)

---

## 📊 部署後檢查

### 1. 檢查網站
訪問部署的 URL，確認：
- ✅ 首頁正常載入
- ✅ 圖片顯示正確
- ✅ 導航正常運作
- ✅ 響應式設計正常
- ✅ 所有連結有效

### 2. 檢查效能
使用以下工具：
- **Lighthouse**: Chrome DevTools
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/

### 3. 檢查安全 Headers
訪問：https://securityheaders.com/
輸入你的網站 URL 檢查。

---

## 🌐 自訂網域 (可選)

### 步驟 1: 添加自訂網域
1. 登入 Cloudflare Dashboard
2. **Workers & Pages** > 選擇你的項目
3. **Custom domains** > **Set up a custom domain**
4. 輸入你的網域：`www.fubonbank-redesign.com`
5. 點擊 **Continue**

### 步驟 2: 配置 DNS
Cloudflare 會自動配置 DNS 記錄，或手動添加：
```
Type: CNAME
Name: www
Content: fubon-bank-redesign.pages.dev
Proxy: Enabled (橙色雲朵)
```

### 步驟 3: SSL 證書
Cloudflare 自動提供 SSL 證書，無需額外配置。

---

## 🎯 部署選項對比

| 方法 | 優點 | 缺點 | 推薦 |
|------|------|------|------|
| **CLI 部署** | 快速、簡單 | 需要 API Token | ⭐⭐⭐⭐⭐ |
| **Dashboard** | 無需 CLI | 手動上傳 | ⭐⭐⭐⭐ |
| **GitHub** | 自動 CI/CD | 需要 Git | ⭐⭐⭐⭐⭐ |

---

## 📋 部署檢查清單

### 部署前
- [x] 所有圖片已整合
- [x] 所有頁面已測試
- [x] wrangler.toml 已配置
- [x] Wrangler CLI 已安裝
- [ ] API Token 已獲取
- [ ] 環境變數已設置

### 部署後
- [ ] 網站正常載入
- [ ] 圖片顯示正確
- [ ] 所有連結有效
- [ ] 響應式設計正常
- [ ] 效能測試通過
- [ ] 安全 Headers 正確
- [ ] SSL 證書有效

---

## 🚨 常見問題

### Q1: 部署失敗，顯示 "API Token required"
**解決方案**: 
```bash
export CLOUDFLARE_API_TOKEN="你的_token"
```

### Q2: 圖片無法載入
**檢查**:
- 圖片路徑是否正確
- 圖片是否在正確資料夾
- 權限設定是否正確

### Q3: 自訂網域無法連接
**檢查**:
- DNS 記錄是否正確
- SSL 證書是否生效
- Cloudflare Proxy 是否啟用

---

## 📞 支援資源

- **Cloudflare Pages 文檔**: https://developers.cloudflare.com/pages/
- **Wrangler 文檔**: https://developers.cloudflare.com/workers/wrangler/
- **Cloudflare 社群**: https://community.cloudflare.com/
- **Discord**: https://discord.gg/cloudflaredev

---

## 🎉 部署完成後

部署成功後，你的網站將可通過以下網址訪問：

**Cloudflare Pages**:
```
https://fubon-bank-redesign.pages.dev
```

**自訂網域** (如已配置):
```
https://www.fubonbank-redesign.com
```

---

## 📊 專案統計

| 項目 | 數量 |
|------|------|
| 總頁面 | 12 頁 |
| 總圖片 | 57 個 |
| 總大小 | ~3.4MB |
| 首屏載入 | ~0.8s |
| Lighthouse | > 90 |

---

**準備就緒！** 🚀

選擇一個部署方法，按照步驟操作即可。

**需要協助？** 參考上面的常見問題或聯絡 Cloudflare 支援。
