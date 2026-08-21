'use client'

import { Building2, Home, Car, Projector, Building, Warehouse, Hospital, Store } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const applications = [
  {
    icon: Building2,
    title: 'پارتیشن‌های اداری',
    description: 'مات/شفاف کردن لحظه‌ای اتاق‌های ملاقات، کابین‌های مدیریت و سالن‌های کنفرانس. افزایش تمرکز و حفظ حریم خصوصی در محیط کار.',
    benefits: ['کنترل با ریموت/اپلیکیشن', 'برنامه‌ریزی زمانی', 'یکپارچگی با سیستم هوشمند ساختمان'],
    image: '/applications/office-partition.jpg',
  },
  {
    icon: Home,
    title: 'شیشه‌های مسکونی',
    description: 'پنجره‌ها، درب‌های بالکن، حمام‌ها و قاب‌های دوخت. کنترل نور طبیعی، حفظ حریم خصوصی از همسایه‌ها و زیبایی معماری.',
    benefits: ['کنترل از موبایل', 'تنظیم زمان‌بندی صبح/شام', 'سازگار با خانه هوشمند'],
    image: '/applications/residential.jpg',
  },
  {
    icon: Car,
    title: 'خودرو و حمل‌ونقل',
    description: 'شیشه‌های عقب، شیشه‌های جانبی و سقف پانوراما. کاهش نور خیره‌کننده، حریم خصوصی مسافران و کاهش مصرف سوخت با کم‌کردن نیاز به کولر.',
    benefits: ['مطابق استانداردهای ایمنی', 'کنترل جدا برای هر شیشه', 'مقاوم در برابر لرزش'],
    image: '/applications/automotive.jpg',
  },
  {
    icon: Projector,
    title: 'پروژکتورهای هوشمند',
    description: 'تبدیل شیشه هوشمند به پرده پروژکشن با کیفیت ۴K. حل دوچندان: حریم خصوصی در روز، سینمای خانگی در شب.',
    benefits: ['ضریب کنتراست بالا', 'زاویه دید وسیع', 'بدون نیاز به پرده جداگانه'],
    image: '/applications/smart-projector.jpg',
  },
  {
    icon: Hospital,
    title: 'بیمارستان و کلینیک',
    description: 'اتاق‌های عمل، ICU، اتاق‌های معاینه و سالن‌های انتظار. جایگزین بهداشتی و نوین برای پرده‌های پارچه‌ای.',
    benefits: ['قابل شستشو و ضدباکتری', 'کنترل پدالی/دست‌فری', 'مطابق استانداردهای بهداشتی'],
    image: '/applications/healthcare.jpg',
  },
  {
    icon: Store,
    title: 'مغازه و ریتیل',
    description: 'ویترین‌های نمایش، اتاق‌های فیتینگ و دفترهای مدیریت. جلب توجه مشتری با افکت تعاملی و امنیت بالا.',
    benefits: ['نمایش تعاملی برند', 'قفل الکترونیکی یکپارچه', 'مدیریت از راه دور'],
    image: '/applications/retail.jpg',
  },
]

export default function Applications() {
  return (
    <section id="applications" className="section relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-primary-300/50 to-transparent" aria-hidden="true" />
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-light mb-5">
            کاربردهای متنوع
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-surface-900 tracking-tight mb-4">
            کاربرد شیشه هوشمند در
            <br />
            <span className="gradient-text">معماری و صنعت</span>
          </h2>
          <p className="text-lg text-surface-600 leading-relaxed">
            از خانه‌های لوکس تا مجتمع‌های تجاری و خودرو، تکنولوژی PDLC/PNLC فلمبیس پاسخگوی نیازهای متنوع معماری مدرن است.
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <motion.article
              key={app.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 md:p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="relative flex gap-6">
                {/* Icon */}
                <div className="relative flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-cyan-100 group-hover:from-primary-500 group-hover:to-cyan-600 shadow-sm group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
                  <app.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-surface-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-surface-600 leading-relaxed mb-4">
                    {app.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6" role="list">
                    {app.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-surface-700">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors group"
                  >
                    مشاوره تخصصی برای این کاربرد
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="card relative overflow-hidden p-8 md:p-12 border-0 bg-gradient-to-l from-primary-800 via-primary-600 to-cyan-700 text-white">
            <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
            <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                پروژه‌ای در ذهن دارید؟
              </h3>
              <p className="text-primary-100 mb-6 leading-relaxed">
                تیم مهندسی فلمبیس از فاز طراحی تا اجرا و سرویس پس از فروش، هم‌راهتان است. برای مشاوره رایگان و پیش‌فاکتور به ما مراجعه کنید.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="btn bg-white text-primary-700 hover:bg-primary-50"
                >
                  درخواست مشاوره و پیش‌فاکتور
                </Link>
                <a
                  href="tel:+982112345678"
                  className="btn border-2 border-white text-white hover:bg-white/10"
                >
                  تماس مستقیم: ۰۲۱-۱۲۳۴۵۶۷۸
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}