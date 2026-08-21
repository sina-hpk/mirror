# فلمبیس (SmartFilm) — سایت شیشه هوشمند

وب‌سایت معرفی و فروش **شیشه هوشمند (PDLC/PNLC)** با قابلیت تغییر وضعیت از شفاف به مات. این پروژه یک لندینگ‌پیج فارسی و راست‌به‌چپ (RTL) است که با Next.js ساخته شده است.

## امکانات

- طراحی کاملاً راست‌به‌چپ (RTL) و فارسی
- بخش‌های معرفی محصول، ویژگی‌ها، کاربردها، گواهینامه‌ها و فرم تماس
- انیمیشن‌های نرم با framer-motion
- فرم تماس با اعتبارسنجی (react-hook-form + zod)
- فونت محلی **ایران یکان** با هفت وزن مختلف
- واکنش‌گرا (Responsive) برای موبایل و دسکتاپ

## تکنولوژی‌ها

| دسته | فناوری |
|------|--------|
| فریم‌ورک | Next.js 14.2.5 (App Router) |
| زبان | TypeScript 5 |
| کتابخانه UI | React 18 |
| استایل | Tailwind CSS 3.4 |
| انیمیشن | framer-motion |
| فرم و اعتبارسنجی | react-hook-form + zod + @hookform/resolvers |
| آیکون | lucide-react |

## پیش‌نیازها

- Node.js نسخه 18 یا بالاتر
- npm (یا yarn/pnpm)

## نصب و اجرا

```bash
# نصب وابستگی‌ها
npm install

# اجرای محیط توسعه (پیش‌فرض روی http://localhost:3000)
npm run dev

# ساخت نسخه‌ی تولید
npm run build

# اجرای نسخه‌ی تولید
npm run start

# بررسی کد با ESLint
npm run lint
```

## اسکریپت‌ها

| دستور | توضیح |
|-------|-------|
| `npm run dev` | اجرای سرور توسعه با Hot Reload |
| `npm run build` | ساخت خروجی بهینه‌سازی‌شده برای تولید |
| `npm run start` | اجرای نسخه‌ی ساخته‌شده |
| `npm run lint` | بررسی کیفیت کد |

## ساختار پروژه

```
mirror/
├── public/
│   └── fonts/                 # فایل‌های فونت ایران یکان (TTF)
│       ├── IRANYekanThin.ttf
│       ├── IRANYekanLight.ttf
│       ├── IRANYekanRegular.ttf
│       ├── IRANYekanMedium.ttf
│       ├── IRANYekanBold.ttf
│       ├── IRANYekanExtraBold.ttf
│       └── IRANYekanBlack.ttf
├── src/
│   ├── app/
│   │   ├── globals.css        # استایل سراسری و تعریف @font-face
│   │   ├── layout.tsx         # چیدمان ریشه (html/body با dir="rtl")
│   │   └── page.tsx           # صفحه‌ی اصلی
│   └── components/
│       ├── Header.tsx         # هدر و ناوبری
│       ├── Hero.tsx           # بخش معرفی اصلی
│       ├── Features.tsx       # ویژگی‌ها
│       ├── Applications.tsx   # کاربردها
│       ├── Certificates.tsx   # گواهینامه‌ها
│       ├── Products.tsx       # محصولات
│       ├── ContactForm.tsx    # فرم تماس
│       └── Footer.tsx         # فوتر
├── tailwind.config.ts
├── package.json
└── README.md
```

## فونت ایران یکان

پروژه از فونت محلی **ایران یکان** استفاده می‌کند. فایل‌های فونت در مسیر `public/fonts/` قرار دارند و از طریق `@font-face` در [globals.css](src/app/globals.css) با هفت وزن تعریف شده‌اند:

| وزن | نام فایل | مقدار `font-weight` |
|-----|----------|---------------------|
| Thin | IRANYekanThin.ttf | 100 |
| Light | IRANYekanLight.ttf | 300 |
| Regular | IRANYekanRegular.ttf | 400 |
| Medium | IRANYekanMedium.ttf | 500 |
| Bold | IRANYekanBold.ttf | 700 |
| ExtraBold | IRANYekanExtraBold.ttf | 800 |
| Black | IRANYekanBlack.ttf | 900 |

فونت از طریق متغیر CSS `--font-vazirmatn` و کلاس `font-vazir` در Tailwind در دسترس است.

## لایسنس

استفاده‌ی داخلی. حقوق فونت ایران یکان متعلق به سازندگان آن است.
