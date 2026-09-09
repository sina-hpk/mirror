import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Eye, Layers3, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'انتخاب دموی طراحی | فلمبیس',
  description: 'پنج نسخه طراحی وب‌سایت شیشه هوشمند فلمبیس را مشاهده و مقایسه کنید.',
}

const demos = [
  {
    id: '01',
    href: '/demo1/',
    title: 'طراحی اصلی فلمبیس',
    style: 'فناورانه و محصول‌محور',
    description: 'نسخه کامل برند با دموی تعاملی شیشه، معرفی کاربردها، گواهی‌ها، محصولات و فرم مشاوره.',
    image: '/images/hero-interior.webp',
    accent: 'from-sky-500 to-cyan-300',
    tag: 'نسخه اصلی',
  },
  {
    id: '02',
    href: '/demo2/',
    title: 'مینیمال اعتمادمحور',
    style: 'تمیز، روشن و مستقیم',
    description: 'طراحی ساده و خوانا با تمرکز بر پیام برند، مزیت‌های کلیدی و تبدیل بازدیدکننده به مشتری.',
    image: '/images/office-clear.jpg',
    accent: 'from-blue-600 to-indigo-400',
    tag: 'مینیمال',
  },
  {
    id: '03',
    href: '/demo3/',
    title: 'معماری معاصر',
    style: 'تیره، لوکس و حرفه‌ای',
    description: 'زبان بصری معمارانه با کنتراست بالا، مقایسه تعاملی شفاف و مات، و ساختار فروش حرفه‌ای.',
    image: '/images/office-frost.jpg',
    accent: 'from-emerald-500 to-lime-300',
    tag: 'معمارانه',
  },
  {
    id: '04',
    href: '/demo4/',
    title: 'کاتالوگ تخصصی',
    style: 'فنی، جامع و شرکتی',
    description: 'صفحه‌ای جامع برای معرفی محصول، پاسخ به پرسش‌ها و دریافت استعلام؛ مناسب مخاطبان B2B.',
    image: '/images/product-glass-wall.webp',
    accent: 'from-cyan-500 to-blue-400',
    tag: 'شرکتی',
  },
  {
    id: '05',
    href: '/demo5/',
    title: 'پلتفرم آینده‌نگر',
    style: 'جسور، مدرن و پرانرژی',
    description: 'روایتی مدرن از محصول با تایپوگرافی قدرتمند، رنگ‌بندی خاص و تجربه‌ای مناسب برندهای نوآور.',
    image: '/images/hero-interior-frost.jpg',
    accent: 'from-violet-500 to-fuchsia-400',
    tag: 'آینده‌نگر',
  },
]

export default function DemoHubPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-hidden bg-[#070b14] text-white">
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-sky-600/15 blur-[120px]" />
        <div className="absolute -bottom-48 -left-40 h-[36rem] w-[36rem] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-28 lg:pt-14">
        <header className="mb-14 flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" className="flex items-center gap-3" aria-label="فلمبیس">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-sky-600/20">
              <Layers3 className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <span className="block text-lg font-black tracking-tight">FILMBASE</span>
              <span className="block text-[10px] tracking-[.22em] text-slate-500">SMART GLASS</span>
            </div>
          </Link>
          <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-slate-300 sm:flex">
            <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
            گالری طراحی وب‌سایت
          </span>
        </header>

        <div className="mb-14 max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-400">
            <span className="h-px w-8 bg-sky-400" />
            پنج مسیر، یک برند
          </span>
          <h1 className="text-4xl font-black leading-[1.25] tracking-tight sm:text-5xl lg:text-7xl">
            دموی موردنظر را
            <span className="block bg-gradient-to-l from-white via-sky-200 to-sky-500 bg-clip-text text-transparent">
              انتخاب و مشاهده کنید
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            هر نسخه، برداشت متفاوتی از هویت فلمبیس و تجربه خرید شیشه هوشمند ارائه می‌کند. برای مشاهده کامل، روی هر کارت کلیک کنید.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {demos.map((demo, index) => (
            <Link
              key={demo.href}
              href={demo.href}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[.045] shadow-2xl shadow-black/20 transition duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[.07] ${index < 2 ? 'xl:col-span-3' : 'xl:col-span-2'}`}
            >
              <div className={`relative overflow-hidden ${index < 2 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <Image
                  src={demo.image}
                  alt={`پیش‌نمایش ${demo.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 34vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e19] via-[#090e19]/20 to-transparent" />
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-l ${demo.accent}`} />
                <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  {demo.tag}
                </span>
                <span className="absolute bottom-4 left-5 text-5xl font-black text-white/15 transition group-hover:text-white/25">
                  {demo.id}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <p className={`mb-2 bg-gradient-to-l ${demo.accent} bg-clip-text text-xs font-bold text-transparent`}>
                  {demo.style}
                </p>
                <h2 className="text-xl font-extrabold text-white sm:text-2xl">{demo.title}</h2>
                <p className="mt-3 min-h-[4.75rem] text-sm leading-7 text-slate-400">{demo.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="flex items-center gap-2 text-sm font-bold text-white">
                    <Eye className="h-4 w-4 text-sky-400" aria-hidden="true" />
                    مشاهده دمو
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[.06] transition group-hover:border-sky-400/40 group-hover:bg-sky-500 group-hover:text-white">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} فلمبیس — تمامی حقوق محفوظ است.</span>
          <span>شیشه‌های هوشمند؛ شفاف یا خصوصی، هر زمان که بخواهید</span>
        </footer>
      </section>
    </main>
  )
}
