# 富邦銀行設計系統 (Design System)
## Apple 風格設計語言

---

## 色彩系統 (Color System)

### 品牌主色
```css
--fubon-orange: #F47920;        /* 富邦橙色 - 品牌識別 */
--fubon-orange-dark: #D65A0E;   /* 深橙色 - Hover 狀態 */
--fubon-orange-light: #FF954D;  /* 淺橙色 - 強調 */
```

### Apple 風格中性色
```css
--black: #1D1D1F;               /* 主要文字 */
--gray-primary: #6E6E73;        /* 次要文字 */
--gray-secondary: #86868B;      /* 提示文字 */
--gray-tertiary: #D2D2D7;       /* 邊框 */
--gray-quaternary: #F5F5F7;     /* 背景 */
--white: #FFFFFF;               /* 純白背景 */
```

### 語義色
```css
--success: #34C759;             /* 成功/上升 */
--warning: #FF9500;             /* 警告 */
--error: #FF3B30;               /* 錯誤/下跌 */
--info: #007AFF;                /* 資訊連結 */
```

### 漸層色 (Apple 風格)
```css
--gradient-hero: linear-gradient(135deg, #F47920 0%, #FF6B35 100%);
--gradient-card: linear-gradient(180deg, #FFFFFF 0%, #F8F8FA 100%);
--gradient-button: linear-gradient(180deg, #F47920 0%, #E86A17 100%);
```

---

## 字體系統 (Typography)

### 字體家族
```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro TC", "SF Pro Text", 
             "Helvetica Neue", "Helvetica", "Arial", "PingFang TC", 
             "Heiti TC", "Microsoft JhengHei", sans-serif;
```

### 字體大小層級
```css
--font-hero: 56px;              /* 主標題 - 桌面 */
--font-hero-mobile: 40px;       /* 主標題 - 手機 */
--font-title-1: 48px;           /* 一級標題 */
--font-title-2: 32px;           /* 二級標題 */
--font-title-3: 24px;           /* 三級標題 */
--font-headline: 20px;          /* 小標題 */
--font-body: 17px;              /* 內文 */
--font-callout: 16px;           /* 說明文字 */
--font-subhead: 15px;           /* 副標題 */
--font-footnote: 13px;          /* 註腳 */
--font-caption-1: 12px;         /* 標題 1 */
--font-caption-2: 11px;         /* 標題 2 */
```

### 字體粗細
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### 行高
```css
--line-height-tight: 1.1;
--line-height-normal: 1.4;
--line-height-relaxed: 1.6;
```

---

## 間距系統 (Spacing System)

### 基準單位：8px
```css
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-7: 28px;
--spacing-8: 32px;
--spacing-9: 40px;
--spacing-10: 48px;
--spacing-11: 56px;
--spacing-12: 64px;
--spacing-13: 80px;
--spacing-14: 96px;
--spacing-15: 120px;
```

### 容器寬度
```css
--container-max: 1200px;        /* 最大內容寬度 */
--container-narrow: 980px;      /* 窄版內容 */
--container-wide: 1440px;       /* 寬版內容 */
```

---

## 圓角系統 (Border Radius)

```css
--radius-sm: 4px;               /* 小圓角 - 按鈕 */
--radius-md: 8px;               /* 中圓角 - 卡片 */
--radius-lg: 12px;              /* 大圓角 - 模組 */
--radius-xl: 20px;              /* 超大圓角 - 英雄區塊 */
--radius-2xl: 28px;             /* 特大圓角 - 特色卡片 */
--radius-full: 9999px;          /* 完全圓角 - 徽章 */
```

---

## 陰影系統 (Shadow System)

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.08);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 24px 64px rgba(0, 0, 0, 0.12);

/* 浮動效果 */
--shadow-float: 0 12px 40px rgba(244, 121, 32, 0.15);
--shadow-float-hover: 0 20px 60px rgba(244, 121, 32, 0.25);
```

---

## 動畫系統 (Animation System)

### 過渡時間
```css
--transition-fast: 0.15s;
--transition-normal: 0.3s;
--transition-slow: 0.5s;
--transition-slower: 0.8s;
```

### 緩動函數
```css
--ease-out: cubic-bezier(0.33, 1, 0.68, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### 關鍵影格動畫
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.95);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

---

## 組件系統 (Component System)

### 按鈕 (Buttons)

#### 主要按鈕
```css
.btn-primary {
  background: var(--gradient-button);
  color: white;
  border-radius: var(--radius-full);
  padding: 14px 28px;
  font-size: 17px;
  font-weight: 500;
  transition: all var(--transition-normal) var(--ease-out);
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-float);
}
```

#### 次要按鈕
```css
.btn-secondary {
  background: transparent;
  color: var(--info);
  border: none;
  border-radius: var(--radius-full);
  padding: 14px 28px;
  font-size: 17px;
  font-weight: 500;
}
```

#### 連結按鈕
```css
.btn-link {
  background: transparent;
  color: var(--info);
  border: none;
  padding: 8px 0;
  font-size: 17px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.btn-link::after {
  content: "›";
  font-size: 20px;
  transition: transform var(--transition-fast);
}

.btn-link:hover::after {
  transform: translateX(4px);
}
```

### 卡片 (Cards)

#### 產品卡片
```css
.product-card {
  background: var(--white);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-10);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal) var(--ease-out);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
```

#### 特色卡片
```css
.feature-card {
  background: var(--gray-quaternary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  text-align: center;
}

.feature-card-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  background: var(--gradient-hero);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-6);
}
```

### 導航 (Navigation)

#### 主導航欄
```css
.navbar {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--gray-tertiary);
  height: 48px;
}

.nav-link {
  color: var(--black);
  font-size: 12px;
  font-weight: 400;
  opacity: 0.8;
  transition: opacity var(--transition-fast);
}

.nav-link:hover {
  opacity: 1;
}
```

#### 英雄區塊導航
```css
.hero-nav {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-6);
  padding: var(--spacing-12) 0;
}

.hero-nav-item {
  text-align: center;
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  transition: all var(--transition-normal);
}

.hero-nav-item:hover {
  background: var(--gray-quaternary);
}
```

### 表單 (Forms)

#### 輸入欄位
```css
.input-field {
  border: 1px solid var(--gray-tertiary);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  font-size: 17px;
  transition: all var(--transition-fast);
}

.input-field:focus {
  outline: none;
  border-color: var(--fubon-orange);
  box-shadow: 0 0 0 3px rgba(244, 121, 32, 0.15);
}
```

### 徽章 (Badges)

#### 新標籤
```css
.badge-new {
  background: var(--fubon-orange);
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

---

## 響應式斷點 (Responsive Breakpoints)

```css
/* 手機 */
@media (max-width: 734px) { }

/* 平板 */
@media (min-width: 735px) and (max-width: 1023px) { }

/* 桌面 */
@media (min-width: 1024px) { }

/* 大桌面 */
@media (min-width: 1440px) { }
```

---

## 無障礙標準 (Accessibility)

### 對比度要求
- 正常文字：至少 4.5:1
- 大文字：至少 3:1
- UI 組件：至少 3:1

### 鍵盤導航
- 所有互動元素可透過 Tab 鍵訪問
- 焦點狀態清晰可見
- 跳過導航連結

### 螢幕閱讀器
- 語義化 HTML 標籤
- ARIA 標籤適當使用
- 圖片替代文字

---

## 設計原則 (Design Principles)

1. **清晰 (Clarity)** - 文字清晰易讀，功能一目瞭然
2. **順從 (Deference)** - 內容為王，UI 不干擾
3. **深度 (Depth)** - 層次分明，視覺層次清晰
4. **留白 (Whitespace)** - 大量留白，呼吸空間
5. **一致性 (Consistency)** - 全站統一設計語言
6. **流暢 (Fluidity)** - 動畫自然流暢

---

## 參考資源

- Apple Human Interface Guidelines: https://developer.apple.com/design/
- SF Pro 字體：https://developer.apple.com/fonts/
- SF Symbols: https://developer.apple.com/sf-symbols/
