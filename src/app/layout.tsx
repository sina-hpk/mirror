import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://filmbase.ir'),
  title: {
    default: 'فلمبیس | شیشه هوشمند PDLC، PNLC - فروش، نصب و مونتاژ',
    template: '%s | فلمبیس',
  },
  description: 'فلمبیس مرجع تخصصی شیشه‌های هوشمند PDLC و PNLC در ایران. فروش، نصب و مونتاژ شیشه‌های هوشمند برای منازل، ادارات و خودرو. گواهینامه CE و RoHS. درخواست پیش‌فاکتور و مشاوره رایگان.',
  keywords: ['شیشه هوشمند', 'PDLC', 'PNLC', 'فلمبیس', 'پارتیشن هوشمند', 'پرده هوشمند', 'خانه هوشمند', 'شیشه ماتکننده'],
  authors: [{ name: 'Filmbase' }],
  creator: 'Filmbase',
  publisher: 'Filmbase',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://filmbase.ir',
    siteName: 'فلمبیس',
    title: 'فلمبیس | شیشه هوشمند PDLC، PNLC',
    description: 'مرجع تخصصی شیشه‌های هوشمند در ایران',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'فلمبیس - شیشه هوشمند',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فلمبیس | شیشه هوشمند',
    description: 'مرجع تخصصی شیشه‌های هوشمند PDLC و PNLC در ایران',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#0ea5e9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('filmbase_theme');if(t&&t!=='ocean'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          پرش به محتوای اصلی
        </a>
        {children}
      </body>
    </html>
  )
}