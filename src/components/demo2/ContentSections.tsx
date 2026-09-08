import Image from 'next/image'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  Check,
  ChevronDown,
  CirclePower,
  Cpu,
  FileCheck2,
  Headphones,
  Layers3,
  Lightbulb,
  Ruler,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Wrench,
  Zap,
} from 'lucide-react'
import {
  applications,
  evidenceItems,
  faqs,
  features,
  outcomes,
  processSteps,
  productRows,
  solutionItems,
  type IconName,
} from './data'

const iconMap: Record<IconName, LucideIcon> = {
  film: Layers3,
  controller: Cpu,
  install: Wrench,
  support: Headphones,
  privacy: ShieldCheck,
  sun: SunMedium,
  shield: BadgeCheck,
  sparkles: Sparkles,
  layers: Layers3,
  zap: Zap,
}

const sectionTitle = 'text-3xl font-extrabold tracking-tight text-surface-950 md:text-4xl lg:text-5xl'
const sectionText = 'text-base leading-8 text-surface-600 md:text-lg'

export function CompleteSolution() {
  return (
    <section id="solutions" className="scroll-mt-24 overflow-hidden bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div>
            <span className="badge-light mb-5">یک راهکار، از انتخاب تا اجرا</span>
            <h2 className={sectionTitle}>همه‌چیز برای هوشمندکردن شیشه</h2>
            <p className={`${sectionText} mt-5 max-w-xl`}>
              فلمبیس فیلم، کنترلر، نصب و پشتیبانی را در یک مسیر هماهنگ کنار هم می‌گذارد تا جزئیات فنی از طراحی پروژه جدا نماند.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {solutionItems.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <article key={item.title} className="group relative overflow-hidden rounded-3xl border border-surface-200 bg-surface-50 p-6 transition hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-xl hover:shadow-primary-950/5">
                  <span className="absolute left-5 top-3 text-5xl font-black text-surface-200/70" aria-hidden="true">{item.number}</span>
                  <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-950 text-primary-300 transition group-hover:bg-primary-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold text-surface-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-surface-600">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhatIsSmartGlass() {
  return (
    <section className="relative overflow-hidden bg-surface-950 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" aria-hidden="true" />
      <div className="container-custom relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
            <Image src="/images/product-glass-wall.webp" alt="دیوار شیشه‌ای هوشمند در فضای داخلی" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-y-0 right-0 w-1/2 border-l border-white/50 bg-white/60 backdrop-blur-md" aria-hidden="true" />
            <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-surface-900">بدون برق · مات</span>
            <span className="absolute left-4 top-4 rounded-full bg-surface-950/75 px-4 py-2 text-xs font-bold text-white backdrop-blur">با برق · شفاف</span>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-surface-950/80 px-4 py-2 text-xs backdrop-blur">
              <CirclePower className="h-4 w-4 text-primary-300" aria-hidden="true" />
              تغییر وضعیت در یک لحظه
            </div>
          </div>
        </div>
        <div>
          <span className="badge-dark mb-5">شیشه هوشمند چیست؟</span>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">نور عبور می‌کند؛ دید، انتخابی می‌شود.</h2>
          <p className="mt-6 text-lg leading-9 text-surface-300">
            فیلم هوشمند لایه‌ای الکتریکی است که روی شیشه موجود نصب یا میان لایه‌های شیشه لمینیت می‌شود. در حالت خاموش، نور را پخش و دید را محدود می‌کند؛ با فعال‌شدن، سطح شفاف می‌شود.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Lightbulb className="h-6 w-6 text-primary-300" aria-hidden="true" />
              <h3 className="mt-4 font-bold">فناوری PDLC / PNLC</h3>
              <p className="mt-2 text-sm leading-7 text-surface-400">آرایش ذرات درون فیلم با جریان برق تغییر می‌کند.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <CirclePower className="h-6 w-6 text-primary-300" aria-hidden="true" />
              <h3 className="mt-4 font-bold">فرمان مطابق پروژه</h3>
              <p className="mt-2 text-sm leading-7 text-surface-400">از کلید ساده تا ریموت و سیستم هوشمند ساختمان.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhyFilmbase() {
  return (
    <section id="features" className="scroll-mt-24 bg-surface-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-light mb-5">چرا فلمبیس؟</span>
          <h2 className={sectionTitle}>فناوری، وقتی ارزش دارد که درست اجرا شود</h2>
          <p className={`${sectionText} mt-5`}>از ظاهر نهایی تا مسیر برق و نوع فرمان، انتخاب‌ها باید برای فضای واقعی شما انجام شوند.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-surface-200 bg-surface-200 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <article key={feature.title} className="group bg-white p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-surface-950">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-surface-600">{feature.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Applications() {
  return (
    <section id="applications" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-3xl">
          <span className="badge-light mb-5">برای فضاهای گوناگون</span>
          <h2 className={sectionTitle}>یک سطح شیشه‌ای، چند رفتار متفاوت</h2>
          <p className={`${sectionText} mt-5`}>از خانه تا محیط درمانی، شیشه هوشمند به فضا اجازه می‌دهد میان ارتباط و حریم جابه‌جا شود.</p>
        </div>
        <div className="mt-14 space-y-8 md:space-y-12">
          {applications.map((application, index) => (
            <article key={application.title} className="grid overflow-hidden rounded-[2rem] border border-surface-200 bg-surface-50 shadow-sm lg:grid-cols-2">
              <div className={`relative min-h-72 lg:min-h-[27rem] ${index % 2 ? 'lg:order-2' : ''}`}>
                <Image src={application.image} alt={application.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/45 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-surface-950/70 px-4 py-2 text-sm font-bold text-white backdrop-blur">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${index % 2 ? 'lg:order-1' : ''}`}>
                <p className="text-sm font-bold text-primary-600">{application.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-extrabold leading-10 text-surface-950 md:text-3xl">{application.title}</h3>
                <p className="mt-5 leading-8 text-surface-600">{application.description}</p>
                <ul className="mt-7 grid gap-3" role="list">
                  {application.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-surface-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="mt-8 inline-flex w-fit items-center gap-2 font-bold text-primary-700 transition hover:text-primary-500">
                  بررسی برای پروژه من <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ArchitectsCta() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-surface-950 px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
        <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
        <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-primary-500/25 blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <span className="badge-dark mb-5"><Ruler className="h-4 w-4" aria-hidden="true" /> ویژه معماران و مجریان</span>
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">جزئیات شیشه هوشمند را از فاز طراحی حل کنید</h2>
            <p className="mt-5 max-w-2xl leading-8 text-surface-300">برای انتخاب محصول، جانمایی کنترلر و هماهنگی با برق و شیشه پروژه، کاتالوگ فنی را ببینید یا مشخصات طرح را برای بررسی ارسال کنید.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href="/certificates/%28small%292026-Filmbase%20Smart%20Film%20catalogue.pdf" target="_blank" rel="noopener noreferrer" className="btn bg-white text-surface-950 hover:bg-primary-50">
              <BookOpen className="h-5 w-5" aria-hidden="true" /> دریافت کاتالوگ
            </a>
            <Link href="#contact" className="btn border border-white/20 bg-white/10 text-white hover:bg-white/15">گفت‌وگو با کارشناس</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Evidence() {
  return (
    <section id="evidence" className="scroll-mt-24 bg-surface-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="badge-light mb-5">اعتماد بر پایه سند</span>
            <h2 className={sectionTitle}>ادعاها را با مدارک موجود بررسی کنید</h2>
            <p className={`${sectionText} mt-5`}>به‌جای نظر ساختگی یا عددهای بی‌منبع، اسناد فنی موجود پروژه در دسترس شماست.</p>
            <Link href="/certificates" className="btn-primary mt-8">
              مشاهده گواهینامه‌ها <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4">
            {evidenceItems.map((item, index) => (
              <article key={item.title} className="flex gap-5 rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface-950 text-primary-300">
                  {index === 2 ? <FileCheck2 className="h-6 w-6" aria-hidden="true" /> : <ShieldCheck className="h-6 w-6" aria-hidden="true" />}
                </span>
                <div><h3 className="text-lg font-extrabold text-surface-950" dir="ltr">{item.title}</h3><p className="mt-2 text-sm leading-7 text-surface-600">{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Outcomes() {
  return (
    <section className="overflow-hidden bg-primary-600 py-20 text-white md:py-24">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold">قبل و بعد از هوشمندسازی</span>
            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">تغییر فقط در شیشه نیست؛ در تجربه فضاست.</h2>
          </div>
          <div className="grid gap-3">
            {outcomes.map((outcome) => (
              <div key={outcome.before} className="grid gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <span className="text-sm text-primary-100">{outcome.before}</span>
                <ArrowLeft className="hidden h-5 w-5 text-white/60 sm:block" aria-hidden="true" />
                <span className="flex items-center gap-2 font-bold"><Check className="h-5 w-5" aria-hidden="true" />{outcome.after}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-light mb-5">مسیر اجرا</span>
          <h2 className={sectionTitle}>از اندازه‌گیری تا شیشه‌ای که آماده استفاده است</h2>
        </div>
        <ol className="relative mt-14 grid gap-8 lg:grid-cols-3" aria-label="مراحل اجرای شیشه هوشمند">
          <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-surface-200 lg:block" aria-hidden="true" />
          {processSteps.map((step) => (
            <li key={step.number} className="relative text-center">
              <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-surface-950 text-xl font-black text-primary-300 shadow-lg">{step.number}</span>
              <h3 className="mt-6 text-xl font-extrabold text-surface-950">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-surface-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function ProductComparison() {
  return (
    <section id="products" className="scroll-mt-24 bg-surface-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="badge-light mb-5">انتخاب محصول</span>
            <h2 className={sectionTitle}>مقایسه سریع راهکارها</h2>
            <p className={`${sectionText} mt-5`}>انتخاب نهایی پس از بررسی شیشه، ابعاد و نیاز کنترلی پروژه انجام می‌شود.</p>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 font-bold text-primary-700 hover:text-primary-500">مشاهده همه محصولات <ArrowLeft className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-surface-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-right text-sm">
              <caption className="sr-only">مقایسه فیلم PDLC، فیلم PNLC و شیشه لمینیت هوشمند</caption>
              <thead className="bg-surface-950 text-white">
                <tr><th scope="col" className="p-5">راهکار</th><th scope="col" className="p-5">کاربری پیشنهادی</th><th scope="col" className="p-5">نوع اجرا</th><th scope="col" className="p-5">شیوه کنترل</th></tr>
              </thead>
              <tbody className="divide-y divide-surface-200">
                {productRows.map((row) => (
                  <tr key={row.label} className="transition hover:bg-primary-50/50"><th scope="row" className="p-5 text-base font-bold text-surface-950">{row.label}</th><td className="p-5 text-surface-600">{row.use}</td><td className="p-5 text-surface-600">{row.install}</td><td className="p-5 text-surface-600">{row.control}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 border-t border-surface-200 bg-surface-50 p-5 sm:flex-row sm:items-center">
            <p className="text-sm text-surface-600">برای تطبیق محصول با نقشه و بودجه پروژه، مشخصات را با کارشناس مرور کنید.</p>
            <Link href="#contact" className="btn-primary shrink-0">درخواست پیشنهاد فنی</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container-custom grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <span className="badge-light mb-5">پرسش‌های پرتکرار</span>
          <h2 className={sectionTitle}>پیش از تصمیم، پاسخ‌های روشن</h2>
          <p className={`${sectionText} mt-5`}>اگر سؤال شما اینجا نیست، جزئیات پروژه را برای بررسی ارسال کنید.</p>
          <Link href="#contact" className="btn-outline mt-8">پرسیدن از کارشناس</Link>
        </div>
        <div className="divide-y divide-surface-200 border-y border-surface-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-bold text-surface-950 marker:content-none">
                <span>{faq.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-100 text-surface-600 transition group-open:rotate-180 group-open:bg-primary-100 group-open:text-primary-700"><ChevronDown className="h-5 w-5" aria-hidden="true" /></span>
              </summary>
              <p className="max-w-3xl pb-6 pl-12 text-sm leading-8 text-surface-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ContentSections() {
  return (
    <>
      <CompleteSolution />
      <WhatIsSmartGlass />
      <WhyFilmbase />
      <Applications />
      <ArchitectsCta />
      <Evidence />
      <Outcomes />
      <HowItWorks />
      <ProductComparison />
      <FAQ />
    </>
  )
}

