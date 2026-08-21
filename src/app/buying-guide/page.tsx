import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, ShoppingCart, Ruler, Zap, Home, Building2, Car, Stethoscope } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'راهنمای خرید | فلمبیس',
  description: 'راهنمای کامل خرید شیشه هوشمند PDLC و PNLC. انتخاب تکنولوژی، محاسبه ابعاد و سفارش.',
}

const steps = [
  {
    icon: Ruler,
    title: '۱. اندازه‌گیری ابعاد',
    description: 'ابعاد دقیق هر پنل شیشه را به سانتی‌متر اندازه‌گیری کنید. برای شیشه‌های موجود، فقط عرض و ارتفاع کافی است. برای شیشه‌های جدید، مشخصات را از پیمانکار یا مهندس architect دریافت کنید.',
  },
  {
    icon: Building2,
    title: '۲. تعیین نوع پروژه',
    description: 'نوع محیط (مسکونی، اداری، بیمارستانی، خودرو و...) را مشخص کنید. هر محیط نیازهای خاصی از نظر وضوح، عایق‌بندی و دوام دارد.',
  },
  {
    icon: Zap,
    title: '۳. انتخاب تکنولوژی',
    description: 'PNLC برای پروژه‌های لوکس و حرفه‌ای (وضوح ۹۹٪)، PDLC برای پروژه‌های استاندارد (وضوح ۸۵-۹۱٪). برای فضاهای پرترافیک، مدل ضدخدشه (Warrior/Scratchproof) توصیه می‌شود.',
  },
  {
    icon: Stethoscope,
    title: '۴. انتخاب کنترلر',
    description: 'کنترلر WiFi برای کنترل از راه دور، کنترلر RF با ریموت، یا کلید دیواری. امکان یکپارچه‌سازی با سیستم هوشمند ساختمان (BMS) نیز وجود دارد.',
  },
  {
    icon: ShoppingCart,
    title: '۵. درخواست پیش‌فاکتور',
    description: 'فرم درخواست پیش‌فاکتور را پر کنید. کارشناسان فلمبیس در کمتر از ۳۰ دقیقه با شما تماس می‌گیرند و پیش‌فاکتور اختصاصی ارسال می‌کنند.',
  },
]

export default function BuyingGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-surface-950 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-32 right-[15%] h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
          <div className="container-custom relative text-center">
            <span className="badge-dark mb-6">قبل از خرید</span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              راهنمای <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">خرید</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300 leading-relaxed">
              پنج مرحله ساده از اندازه‌گیری تا دریافت محصول.
            </p>
          </div>
        </section>

        <section className="section bg-surface-50">
          <div className="container-custom max-w-4xl space-y-8">
            {steps.map((step) => (
              <div key={step.title} className="card p-8 md:p-10">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-cyan-100 text-primary-600 shadow-sm">
                    <step.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-surface-900 mb-3">{step.title}</h2>
                    <p className="text-surface-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="card relative overflow-hidden p-8 md:p-12 border-0 bg-gradient-to-l from-primary-800 via-primary-600 to-cyan-700 text-white">
              <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">آماده خرید هستید؟</h2>
                <p className="text-primary-100 mb-8 leading-relaxed">فرم درخواست پیش‌فاکتور را پر کنید یا از VIP Sample Kit برای بررسی نمونه استفاده کنید.</p>
                <Link href="/#contact" className="btn bg-white text-primary-700 hover:bg-primary-50">درخواست پیش‌فاکتور</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
