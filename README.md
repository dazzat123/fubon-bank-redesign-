# 富邦銀行 Apple 風格網站重塑

Fubon Bank Apple-Style Website Redesign

## 專案概述

這是一個基於 Apple 設計風格的富邦銀行網站重塑專案，採用純靜態 HTML/CSS/JavaScript 構建。

## 技術棧

- **HTML5** - 語義化標記
- **CSS3** - 設計系統 token 化，響應式設計
- **Vanilla JavaScript** - ES6+，無依賴
- **Cloudflare Pages** - 全球 CDN 部署

## 專案結構

```
fubon-bank-site/
├── index.html              # 首頁
├── personal/               # 個人銀行
│   └── index.html
├── corporate/              # 企業銀行
│   └── index.html
├── wealth/                 # 財富管理
│   └── index.html
├── login/                  # 登入頁面
│   └── index.html
├── terms.html              # 使用條款
├── privacy.html            # 隱私權政策
├── disclaimer.html         # 免責聲明
├── sitemap.xml             # 網站地圖
├── robots.txt              # 爬蟲規則
├── css/
│   └── main.css           # 主樣式文件
├── js/
│   └── main.js            # 主 JavaScript
└── wrangler.toml          # Cloudflare 配置
```

## 頁面清單

### 已建成頁面

1. **首頁 (index.html)**
   - Apple 風格 Hero Section
   - 快速登入區塊
   - 核心服務網格（6 個服務）
   - 精選推廣輪播
   - 數字銀行體驗
   - 企業銀行簡介
   - 完整頁尾

2. **個人銀行 (personal/index.html)**
   - 服務分類網格（2×3）
   - 熱門產品輪播
   - 理財工具
   - FAQ 手風琴

3. **財富與投資 (wealth/index.html)**
   - 投資產品展示
   - 私人銀行服務
   - 風險警告

4. **中小企及企業金融 (corporate/index.html)**
   - SME 專區
   - 企業金融服務
   - 為什麼選擇我們

5. **登入頁 (login/index.html)**
   - 個人/企業登入切換
   - 表單驗證
   - 安全提示

6. **法律頁面**
   - 使用條款 (terms.html)
   - 隱私權政策 (privacy.html)
   - 免責聲明 (disclaimer.html)

## 部署到 Cloudflare Pages

### 方法 A：Wrangler CLI（推薦）

```bash
# 1. 安裝 Wrangler（如未安裝）
npm install -g wrangler

# 2. 登入 Cloudflare
wrangler login

# 3. 部署
cd /root/.openclaw/workspace/fubon-bank-site
wrangler pages deploy . --project-name=fubon-bank-redesign
```

### 方法 B：Cloudflare Dashboard

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 進入 **Workers & Pages** → **Create application** → **Pages**
3. 選擇 **Direct Upload**
4. 將 `fubon-bank-site/` 目錄內容拖放上傳
5. 等待部署完成

### 方法 C：Git 集成（持續部署）⭐ 推薦

#### 步驟 1：推送程式碼到 GitHub

```bash
cd /root/.openclaw/workspace/fubon-bank-site
git remote add origin https://github.com/YOUR_USERNAME/fubon-bank-apple-redesign.git
git branch -M main
git push -u origin main
```

#### 步驟 2：連接 Cloudflare Pages

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 進入 **Workers & Pages** → **Create application** → **Pages**
3. 選擇 **Connect to Git**
4. 授權 GitHub 並選擇 `fubon-bank-apple-redesign` 倉庫
5. 配置構建設定：
   - **Production branch**: `main`
   - **Build command**: （留空）
   - **Build output directory**: `/`
   - **Root directory**: `/`
6. 點擊 **Save and Deploy**

#### 步驟 3：自動部署

完成後，每次推送到 `main` 分支都會自動觸發部署。

## 自定義域名

部署後，在 Cloudflare Pages 專案設定中添加自定義域名：

1. 進入專案 → **Custom domains**
2. 點擊 **Add a custom domain**
3. 輸入域名（如 `www.fubonbank-redesign.com`）
4. 按指示配置 DNS CNAME 記錄

## 性能優化

- ✅ 純靜態網站，無需服務器端渲染
- ✅ CSS/JS 最小化
- ✅ 系統字體，零加載時間
- ✅ SVG 圖標內嵌
- ✅ 響應式設計（移動優先）
- ✅ 無障礙合規（WCAG 2.1 AA）

## SEO 優化

- ✅ 語義化 HTML5
- ✅ Meta 標籤完整
- ✅ Open Graph 支援
- ✅ 網站地圖 (sitemap.xml)
- ✅ Robots.txt 配置
- ✅ 結構化數據（可擴展）

## 設計系統

### 色彩 Token

- 背景色：`#FFFFFF`, `#F5F5F7`
- 文字色：`#1D1D1F`, `#86868B`
- 品牌色：`#F37021` (橙), `#00A651` (綠)
- 連結色：`#0066CC`

### 排版

- 字體：System UI (Apple 風格)
- 基數字號：17px
- 字重：400/500/600/700

### 間距

- 基準：4px
- 容器：最大 1536px
- 區塊間距：64px - 160px

## 瀏覽器支援

- Chrome (最新版)
- Safari (最新版)
- Firefox (最新版)
- Edge (最新版)
- Safari iOS (最新版)
- Chrome Android (最新版)

## 開發命令

```bash
# 本地預覽（使用任何靜態服務器）
npx serve .

# 或使用 Python
python3 -m http.server 8000

# 然後訪問 http://localhost:8000
```

## 待辦事項

- [ ] 添加實際圖片資源
- [ ] 完成所有子頁面
- [ ] 整合表單處理服務（Formspree/Netlify Forms）
- [ ] 添加 Cloudflare Web Analytics
- [ ] 優化圖片為 WebP 格式
- [ ] 添加 404 頁面
- [ ] 添加搜尋功能

## 授權

© 2026 富邦銀行（香港）有限公司 版權所有

## 聯絡

如有疑問，請聯絡開發團隊。
