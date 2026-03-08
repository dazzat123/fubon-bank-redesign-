# 富邦銀行 Apple 風格重新設計
## Fubon Bank Apple-Style Redesign

基於 Apple.com 設計語言重新設計的富邦銀行 (香港) 官方網站。

---

## 📋 專案概述

### 設計理念
- **極簡主義** - 精簡導航，突出重點內容
- **視覺優先** - 大圖標、清晰排版、大量留白
- **流暢體驗** - 平滑動畫、無縫過渡
- **行動優先** - 完全響應式設計
- **無障礙** - 符合 WCAG 2.1 AA 標準

### 技術棧
- **HTML5** - 語義化標記
- **CSS3** - 自訂設計系統、CSS 變數
- **JavaScript (ES6+)** - 原生 JS，無需框架
- **Cloudflare Pages** - 靜態網站託管

---

## 📁 專案結構

```
fubon-bank-redesign/
├── index.html                 # 首頁
├── SITEMAP.md                # 網站結構圖
├── DESIGN-SYSTEM.md          # 設計系統文件
├── README.md                 # 本文件
├── wrangler.toml             # Cloudflare Pages 配置
├── css/
│   └── main.css              # 主樣式表
├── js/
│   └── main.js               # 主 JavaScript
├── images/                   # 圖片資源
│   └── favicon.svg
└── pages/
    ├── personal/             # 個人銀行
    │   ├── index.html
    │   ├── deposits/
    │   ├── loans/
    │   ├── cards/
    │   ├── investments/
    │   └── insurance/
    ├── commercial/           # 商業銀行
    ├── wealth/               # 財富管理
    ├── ebanking/             # 電子銀行
    └── about/                # 關於我們
```

---

## 🎨 設計系統

### 品牌色彩
- **富邦橙**: `#F47920` - 品牌主色
- **黑色**: `#1D1D1F` - 主要文字
- **白色**: `#FFFFFF` - 背景
- **灰色系**: Apple 風格中性色階

### 字體
- 優先使用系統字體 (SF Pro, PingFang TC)
- 備用字體：Helvetica Neue, Arial, Noto Sans TC

### 組件
- 按鈕 (主要、次要、連結)
- 卡片 (產品、特色)
- 導航欄 (固定、響應式)
- 表單 (輸入欄位、驗證)
- 徽章 (新、熱門、成功)

詳細設計規範請參閱 `DESIGN-SYSTEM.md`

---

## 🚀 部署指南

### 方法一：Cloudflare Pages (推薦)

#### 1. 安裝 Wrangler CLI
```bash
npm install -g wrangler
```

#### 2. 登入 Cloudflare
```bash
wrangler login
```

#### 3. 部署到生產環境
```bash
cd /root/.openclaw/workspace/fubon-bank-redesign
wrangler pages deploy . --project-name=fubon-bank-redesign
```

#### 4. 部署到開發環境
```bash
wrangler pages deploy . --project-name=fubon-bank-redesign-dev
```

### 方法二：Cloudflare Dashboard

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 選擇 **Workers & Pages** > **Create application**
3. 選擇 **Pages** > **Connect to Git** 或 **Direct Upload**
4. 上傳整個 `fubon-bank-redesign` 資料夾
5. 設定建構設定：
   - **Build command**: (留空)
   - **Build output directory**: `.`
6. 點擊 **Deploy**

### 方法三：本機預覽

```bash
# 使用 Python 簡單伺服器
python3 -m http.server 8000

# 或使用 Node.js
npx serve .
```

然後訪問 `http://localhost:8000`

---

## 📱 響應式斷點

| 設備 | 寬度 | 斷點 |
|------|------|------|
| 手機 | < 735px | Mobile |
| 平板 | 735px - 1023px | Tablet |
| 桌面 | ≥ 1024px | Desktop |
| 大桌面 | ≥ 1440px | Large Desktop |

---

## ♿ 無障礙功能

- ✅ 語義化 HTML 標籤
- ✅ ARIA 標籤適當使用
- ✅ 鍵盤導航支援
- ✅ 焦點狀態清晰可見
- ✅ 色彩對比度符合 WCAG AA
- ✅ 圖片替代文字
- ✅ 減少動畫選項支援

---

## 🔒 安全Headers

已配置以下安全Headers (見 `wrangler.toml`):

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security`
- `Content-Security-Policy`
- `Referrer-Policy`
- `Permissions-Policy`

---

## 📊 網站分析

### 建議整合
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

---

## 🧪 測試清單

### 瀏覽器相容性
- [ ] Chrome (最新)
- [ ] Safari (最新)
- [ ] Firefox (最新)
- [ ] Edge (最新)
- [ ] Safari iOS (最新)
- [ ] Chrome Android (最新)

### 功能測試
- [ ] 導航欄滾動效果
- [ ] 手機版選單切換
- [ ] 平滑滾動到錨點
- [ ] 表單驗證
- [ ] 卡片懸停動畫
- [ ] 數字計數器動畫
- [ ] 輪播/幻燈片
- [ ] 標籤頁切換
- [ ] 手風琴面板

### 效能測試
- [ ] Lighthouse 分數 > 90
- [ ] 首次內容繪製 < 1.5s
- [ ] 最大內容繪製 < 2.5s
- [ ] 累積佈局偏移 < 0.1

---

## 📝 待完成頁面

以下頁面需要進一步開發：

### 個人銀行
- [ ] `/pages/personal/deposits/` - 存款服務
- [ ] `/pages/personal/loans/` - 貸款服務
- [ ] `/pages/personal/loans/tax-loan.html` - 稅務貸款
- [ ] `/pages/personal/cards/` - 信用卡
- [ ] `/pages/personal/investments/` - 投資服務
- [ ] `/pages/personal/insurance/` - 保險服務

### 商業銀行
- [ ] `/pages/commercial/index.html` - 首頁
- [ ] `/pages/commercial/loans/` - 商業貸款
- [ ] `/pages/commercial/trade/` - 貿易服務

### 財富管理
- [ ] `/pages/wealth/index.html` - 首頁
- [ ] `/pages/wealth/products/` - 投資產品

### 電子銀行
- [ ] `/pages/ebanking/index.html` - 首頁
- [ ] `/pages/ebanking/mobile/` - 手機銀行

### 關於我們
- [ ] `/pages/about/index.html` - 首頁
- [ ] `/pages/about/branches/` - 分支行網絡
- [ ] `/pages/about/contact/` - 聯絡我們

---

## 🎯 下一步

1. **完成剩餘頁面** - 根據 SITEMAP.md 完成所有頁面
2. **內容填充** - 與市場部確認最終文案
3. **圖片資源** - 替換佔位圖片為正式素材
4. **SEO 優化** - 完善 meta 標籤、結構化數據
5. **效能優化** - 圖片壓縮、代碼精簡
6. **使用者測試** - 可用性測試、A/B 測試
7. **正式上線** - 切換 DNS、監控上線

---

## 📞 聯絡資訊

**富邦銀行 (香港) 有限公司**
- 網站：https://www.fubonbank.com.hk/
- 客戶服務熱線：2511 3111
- 電郵：info@fubonbank.com.hk

---

## 📄 授權

© 2026 Fubon Bank (Hong Kong) Limited. All rights reserved.

本設計僅供內部參考，未經授權不得用於商業用途。

---

**最後更新**: 2026-03-08
**版本**: 1.0.0
