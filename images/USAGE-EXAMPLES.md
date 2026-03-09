# 圖片使用示例
## Image Usage Examples

**更新**: 2026-03-09 20:40 HKT

---

## 🖼️ Hero 大圖使用

### 首頁 Hero
```html
<section class="hero hero-product">
  <div class="hero-background">
    <img src="images/hero/hero-bank-building.jpg" alt="富邦銀行大樓" class="hero-image">
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">全新銀行體驗</h1>
    <p class="hero-subtitle">Apple 風格設計，為您帶來卓越的銀行服務</p>
    <a href="/pages/personal/" class="btn btn-primary">探索服務</a>
  </div>
</section>
```

### CSS 樣式
```css
.hero-product {
  position: relative;
  height: 600px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 200px;
  text-align: center;
  color: white;
}
```

---

## 🏦 產品卡片使用

### 背景圖片方式
```html
<div class="product-card" style="background-image: linear-gradient(135deg, rgba(244,121,32,0.1) 0%, rgba(244,121,32,0.05) 100%), url('images/products/product-savings.jpg')">
  <div class="product-card-content">
    <svg class="product-icon">
      <use href="images/icons/service-icons.svg#savings"/>
    </svg>
    <h3 class="product-title">儲蓄帳戶</h3>
    <p class="product-desc">靈活存款，賺取最高利息</p>
    <a href="/pages/personal/deposits/" class="product-link">了解更多</a>
  </div>
</div>
```

### 圖片標籤方式
```html
<div class="product-card">
  <img src="images/products/product-mortgage.jpg" alt="房屋貸款" class="product-image">
  <div class="product-card-content">
    <svg class="product-icon">
      <use href="images/icons/service-icons.svg#mortgage"/>
    </svg>
    <h3 class="product-title">房屋貸款</h3>
    <p class="product-desc">優惠利率，助您置業安居</p>
    <a href="/pages/personal/loans/" class="product-link">了解更多</a>
  </div>
</div>
```

### CSS 樣式
```css
.product-card {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  min-height: 400px;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.02);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-card-content {
  padding: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
}

.product-icon {
  width: 48px;
  height: 48px;
  color: #F47920;
  margin-bottom: 16px;
}
```

---

## 🎁 推廣橫幅使用

```html
<section class="promo-banner">
  <img src="images/banners/banner-mobile-app.jpg" alt="手機銀行" class="banner-image">
  <div class="banner-content">
    <h2 class="banner-title">手機銀行 APP</h2>
    <p class="banner-text">隨時隨地，理財無界限</p>
    <div class="banner-buttons">
      <a href="#" class="btn btn-primary">App Store 下載</a>
      <a href="#" class="btn btn-secondary">Google Play 下載</a>
    </div>
  </div>
</section>
```

### CSS 樣式
```css
.promo-banner {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  margin: 40px 0;
}

.banner-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.banner-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
}

.banner-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}

.banner-text {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 24px;
}
```

---

## 📱 設備 Mockup 使用

```html
<div class="device-showcase">
  <div class="device-frame">
    <img src="images/devices/mockup-smartphone.png" alt="手機銀行" class="device-image">
    <div class="device-screen">
      <!-- 在這裡疊加你的 APP 截圖 -->
      <img src="images/screenshots/app-home.png" alt="APP 截圖" class="app-screenshot">
    </div>
  </div>
  <div class="device-info">
    <h3>手機銀行</h3>
    <p>隨時隨地理財</p>
  </div>
</div>
```

### CSS 樣式
```css
.device-showcase {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 60px;
}

.device-frame {
  position: relative;
  width: 300px;
}

.device-image {
  width: 100%;
  height: auto;
}

.device-screen {
  position: absolute;
  top: 50px;
  left: 20px;
  right: 20px;
  bottom: 50px;
  overflow: hidden;
  border-radius: 20px;
}

.app-screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 🎨 SVG 圖標使用

### 內嵌方式
```html
<svg class="icon icon-deposit" width="64" height="64">
  <use href="images/icons/banking-icons.svg#deposit"/>
</svg>
```

### CSS 背景方式
```css
.icon-savings {
  width: 64px;
  height: 64px;
  background-image: url('images/icons/service-icons.svg#savings');
  background-size: contain;
  background-repeat: no-repeat;
  color: #F47920;
}
```

### 內聯 SVG (推薦用於關鍵圖標)
```html
<svg class="icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="32" cy="32" r="28" stroke="#F47920" fill="none"/>
  <path d="M32 18v14l10 4" stroke="#F47920"/>
</svg>
```

---

## 🎯 響應式圖片

```html
<picture>
  <source media="(min-width: 1440px)" srcset="images/hero/hero-bank-building.jpg">
  <source media="(min-width: 1024px)" srcset="images/hero/hero-bank-building-tablet.jpg">
  <source media="(min-width: 735px)" srcset="images/hero/hero-bank-building-mobile.jpg">
  <img src="images/hero/hero-bank-building.jpg" alt="富邦銀行大樓" class="responsive-image">
</picture>
```

### CSS
```css
.responsive-image {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 735px) {
  .hero-image {
    height: 300px;
  }
}
```

---

## ⚡ 效能優化

### 懶加載
```html
<img src="images/hero/hero-bank-building.jpg" 
     alt="富邦銀行大樓" 
     loading="lazy"
     class="lazy-image">
```

### WebP 格式 (可選)
```html
<picture>
  <source type="image/webp" srcset="images/hero/hero-bank-building.webp">
  <source type="image/jpeg" srcset="images/hero/hero-bank-building.jpg">
  <img src="images/hero/hero-bank-building.jpg" alt="富邦銀行大樓">
</picture>
```

### 預加載關鍵圖片
```html
<link rel="preload" as="image" href="images/hero/hero-bank-building.jpg">
```

---

## 📋 完整頁面示例

```html
<!DOCTYPE html>
<html lang="zh-HK">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>富邦銀行 | 個人銀行</title>
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <!-- Hero 區塊 -->
  <section class="hero">
    <img src="images/hero/hero-happy-family.jpg" alt="幸福家庭" class="hero-image">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>個人銀行服務</h1>
      <p>為您和家人的財富保駕護航</p>
    </div>
  </section>

  <!-- 產品網格 -->
  <section class="products-section">
    <div class="product-grid">
      <div class="product-card" style="background-image: url('images/products/product-savings.jpg')">
        <div class="product-card-content">
          <svg class="product-icon"><use href="images/icons/service-icons.svg#savings"/></svg>
          <h3>儲蓄帳戶</h3>
          <p>靈活存款，賺取最高利息</p>
        </div>
      </div>
      <div class="product-card" style="background-image: url('images/products/product-mortgage.jpg')">
        <div class="product-card-content">
          <svg class="product-icon"><use href="images/icons/service-icons.svg#mortgage"/></svg>
          <h3>房屋貸款</h3>
          <p>優惠利率，助您置業安居</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 推廣橫幅 -->
  <section class="promo-section">
    <div class="promo-banner">
      <img src="images/banners/banner-mobile-app.jpg" alt="手機銀行" class="banner-image">
      <div class="banner-content">
        <h2>手機銀行 APP</h2>
        <p>隨時隨地，理財無界限</p>
      </div>
    </div>
  </section>

  <script src="js/main.js"></script>
</body>
</html>
```

---

## 🎨 設計提示

1. **圖片重疊**: 使用漸層遮罩確保文字可讀性
2. **響應式**: 為不同斷點提供不同尺寸的圖片
3. **效能**: 使用 WebP 格式 + 懶加載
4. **無障礙**:  always 添加適當的 alt 文字
5. **品牌色**: 可在圖片上疊加富邦橙 (#F47920) 漸層

---

**參考文件**:
- `STATUS.md` - 圖片資源狀態
- `IMAGE-GUIDE.md` - 風格指南
- `IMAGES-TO-DOWNLOAD.md` - 下載清單

**最後更新**: 2026-03-09 20:40 HKT
