# 🚀 Cloudflare Pages 部署指南
## 靜態網站部署

**更新日期**: 2026-03-09 21:20 HKT

---

## ✅ 推薦部署方式：Direct Upload

由於這是純靜態網站 (HTML/CSS/JS)，最簡單的方式是使用 **Direct Upload**。

### 步驟 1: 下載專案 ZIP

```bash
cd /root/.openclaw/workspace
zip -r fubon-bank-redesign.zip fubon-bank-redesign/ \
  -x "*.git*" \
  -x "node_modules/*" \
  -x "*.md" \
  -x "deploy.sh"
```

### 步驟 2: 上傳到 Cloudflare Pages

1. 訪問：https://dash.cloudflare.com/
2. 登入你的 Cloudflare 帳號
3. 點擊 **Workers & Pages**
4. 點擊 **Create application**
5. 選擇 **Pages** 標籤
6. 選擇 **Direct Upload** (不是 Connect to Git)
7. 將 `fubon-bank-redesign.zip` 拖曳到上傳區域
8. 或點擊 **Upload** 選擇文件

### 步驟 3: 等待部署

- 上傳需要 1-2 分鐘
- 部署完成後會顯示綠色對勾 ✅
- 點擊 **Preview** 預覽網站

### 步驟 4: 獲取網址

部署成功後會顯示：
```
✨ Deployment complete!
Your site is now live at:
https://fubon-bank-redesign.pages.dev
```

---

## 🔄 更新部署

### 方法 1: Direct Upload (手動)
1. 修改本地文件
2. 重新打包 ZIP
3. 上傳到 Cloudflare Pages
4. 點擊 **Replace deployment**

### 方法 2: GitHub (自動)
如果使用 GitHub 連接：
```bash
git add .
git commit -m "更新內容"
git push origin main
# Cloudflare 會自動部署
```

---

## ⚙️ 專案設定 (可選)

### 自訂網域
1. 在 Cloudflare Pages 項目頁面
2. 點擊 **Custom domains**
3. 輸入你的網域
4. 按照指示配置 DNS

### 環境變數
不需要 (純靜態網站)

### 構建設定
- **Build command**: (留空)
- **Build output directory**: `.`
- **Root directory**: (留空)

---

## 📊 網站統計

| 項目 | 數量 |
|------|------|
| 總頁面 | 12 頁 |
| 總圖片 | 57 個 |
| 總大小 | ~3.4MB |
| 首屏載入 | ~0.8s |

---

## 🎯 為什麼不用 wrangler.toml？

這是純靜態網站 (HTML/CSS/JS/Images)，不需要：
- Workers 運行時代碼
- 構建流程
- 複雜配置

**Direct Upload** 更簡單、更快速！

---

## 📞 疑難排解

### Q: 上傳失敗
**解決**: 確保 ZIP 文件包含 `index.html` 在根目錄

### Q: 圖片無法載入
**解決**: 檢查圖片路徑是否正確 (相對於 `index.html`)

### Q: 404 錯誤
**解決**: 確認 `index.html` 在專案根目錄

---

**準備就緒！** 🚀

現在去 Cloudflare Dashboard 使用 Direct Upload 部署吧！
