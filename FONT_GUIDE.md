# 📝 Font Management Guide

## 📁 **Struktur File Font**

```
project/
├── public/
│   └── fonts/                    👈 TARUH FONT FILES DI SINI
│       ├── your-font.woff2
│       ├── your-font.woff
│       ├── your-font.ttf
│       └── existing-fonts/...
├── src/
│   └── styles/
│       ├── tailwind.scss         👈 MAIN STYLESHEET (AUTO-IMPORT FONTS)
│       └── fonts/                👈 TARUH CSS/SCSS FONT DI SINI
│           ├── fonts.scss        (font-face definitions)
│           └── font-utilities.scss (utility classes)
```

## 🎯 **Cara Menambahkan Font Custom**

### 1. **Taruh Font Files** → `public/fonts/`
```bash
# Copy font files ke public/fonts/
public/fonts/
├── my-custom-font.woff2
├── my-custom-font.woff
├── my-custom-font.ttf
└── my-custom-font-bold.woff2
```

### 2. **Tambahkan @font-face** → `src/styles/fonts/fonts.scss`
```scss
@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/my-custom-font.woff2') format('woff2'),
       url('/fonts/my-custom-font.woff') format('woff'),
       url('/fonts/my-custom-font.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/my-custom-font-bold.woff2') format('woff2'),
       url('/fonts/my-custom-font-bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

### 3. **Buat Utility Classes** → `src/styles/fonts/font-utilities.scss`
```scss
.font-custom {
  font-family: 'MyCustomFont', system-ui, -apple-system, sans-serif;
}

.font-custom-bold {
  font-family: 'MyCustomFont', system-ui, -apple-system, sans-serif;
  font-weight: bold;
}
```

### 4. **Font Auto-Import** → `src/styles/tailwind.scss`
Font definitions sudah otomatis ter-import ke main stylesheet:
```scss
/* Template Name: Minia - Admin & Dashboard Template */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap');
@import "tailwindcss";

/* Import Custom Fonts */
@import "fonts/fonts";           👈 AUTO-IMPORTED
@import "fonts/font-utilities";  👈 AUTO-IMPORTED

/* Custom Css */
@import "custom/general";
// ... other imports
```

### 5. **Update Tailwind Config** → `tailwind.config.ts`
```typescript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'custom': ['MyCustomFont', 'system-ui', 'sans-serif'],
        'sans': ['MyCustomFont', 'system-ui', 'sans-serif'], // Replace default
      }
    }
  }
}
```

## 🔧 **Penggunaan di Components**

### 1. **Tailwind Classes**
```tsx
<h1 className="font-custom text-2xl">Custom Font Title</h1>
<p className="font-custom-bold">Bold text with custom font</p>
```

### 2. **CSS Classes**
```tsx
<div className="font-custom">
  This uses custom font
</div>
```

### 3. **Inline Styles**
```tsx
<span style={{ fontFamily: 'MyCustomFont, sans-serif' }}>
  Direct font family
</span>
```

## 📦 **Format Font yang Disarankan**

### **Priority Order (terbaik ke backup):**
1. **WOFF2** - Modern, best compression
2. **WOFF** - Good browser support
3. **TTF** - Fallback for older browsers
4. **EOT** - IE support (optional)

### **Example @font-face:**
```scss
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/font.woff2') format('woff2'),    /* Modern browsers */
       url('/fonts/font.woff') format('woff'),      /* Good support */
       url('/fonts/font.ttf') format('truetype');   /* Fallback */
  font-display: swap; /* Performance optimization */
}
```

## 🎨 **Icon Fonts yang Sudah Tersedia**

Anda sudah memiliki icon fonts ini di `/public/fonts/`:

### 1. **Font Awesome**
```html
<i class="fas fa-home"></i>      <!-- Solid -->
<i class="far fa-heart"></i>     <!-- Regular -->
<i class="fab fa-github"></i>    <!-- Brands -->
```

### 2. **BoxIcons**
```html
<i class="bx bx-home"></i>
<i class="bx bx-user"></i>
```

### 3. **Material Design Icons**
```html
<i class="mdi mdi-home"></i>
<i class="mdi mdi-account"></i>
```

### 4. **Dripicons**
```html
<i class="dripicons dripicons-home"></i>
```

### 5. **Tabler Icons**
```html
<i class="tabler tabler-home"></i>
```

## ⚡ **Performance Tips**

### 1. **Font Loading Optimization**
```scss
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/font.woff2') format('woff2');
  font-display: swap; /* Prevents invisible text during font load */
}
```

### 2. **Preload Critical Fonts**
```html
<!-- Tambahkan di head untuk font penting -->
<link rel="preload" href="/fonts/primary-font.woff2" as="font" type="font/woff2" crossorigin>
```

### 3. **Font Subsetting**
- Gunakan tools seperti `fonttools` untuk reduce file size
- Hanya include characters yang dibutuhkan

## 🛠 **Tools untuk Font Management**

### 1. **Font Conversion**
- [FontSquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Google Fonts Helper](https://gwfh.mranftl.com/fonts)

### 2. **Font Optimization**
- [fonttools](https://github.com/fonttools/fonttools) - Python tool
- [glyphhanger](https://github.com/filamentgroup/glyphhanger) - Node.js tool

## 📋 **Checklist untuk Font Baru**

- [ ] Font files copied ke `public/fonts/`
- [ ] @font-face definition added ke `fonts.scss`
- [ ] Utility classes created di `font-utilities.scss`
- [ ] Tailwind config updated (jika perlu)
- [ ] Test di berbagai browsers
- [ ] Check file sizes (WOFF2 < 100KB recommended)
- [ ] Verify font-display: swap untuk performance

## 🔍 **Debugging Font Issues**

### 1. **Check Network Tab**
- Pastikan font files ter-load dengan status 200
- Check CORS issues untuk external fonts

### 2. **Check CSS**
- Verify @font-face syntax
- Check font-family names match exactly

### 3. **Fallback Fonts**
```scss
font-family: 'YourCustomFont', 'Helvetica', 'Arial', sans-serif;
```

Dengan struktur ini, Anda bisa dengan mudah menambahkan font custom dan mengelola semua font di project Next.js!
