'use client'

import { ShoppingCart, Package, Zap, Wrench, Eye, Sun, Shield, Truck, Star, HelpCircle, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const products = [
  {
    id: 'pdlc-film-085',
    name: 'PDLC Film 085',
    category: 'فیلم هوشمند استاندارد',
    description: 'فیلم PDLC با وضوح ۸۵٪ در حالت روشن، مناسب پارتیشن‌های اداری و مسکونی. بهترین نسبت قیمت/عملکرد.',
    specs: {
      clarity: '۸۵٪',
      haze: '< ۳٪',
      switching: '< ۱۰۰ms',
      voltage: 'AC 60V',
      uv: '۹۹٪',
      ir: '۹۰٪',
      temp: '-۲۰ تا ۶۰℃',
      warranty: '۵ سال',
    },
    price: 'تماس بگیرید',
    badge: 'بیشترین فروش',
    applications: ['پارتیشن اداری', 'شیشه مسکونی', 'پرده هوشمند'],
  },
  {
    id: 'pdlc-film-087',
    name: 'PDLC Film 087',
    category: 'فیلم هوشمند پرکاربرد',
    description: 'ورژن پیشرفته با وضوح ۸۷٪ و مات بودن کامل در حالت خاموش. ایده‌آل برای پروژه‌های معماری لوکس.',
    specs: {
      clarity: '۸۷٪',
      haze: '< ۲.۵٪',
      switching: '< ۸۰ms',
      voltage: 'AC 60V',
      uv: '۹۹٪',
      ir: '۹۲٪',
      temp: '-۲۵ تا ۷۰℃',
      warranty: '۷ سال',
    },
    price: 'تماس بگیرید',
    badge: 'معماری لوکس',
    applications: ['ویلاها', 'مجتمع‌های تجاری', 'هتل‌ها'],
  },
  {
    id: 'pdlc-film-091',
    name: 'PDLC Film 091',
    category: 'فیلم هوشمند پروضوح',
    description: 'بالاترین وضوح در سری PDLC با ۹۱٪ شفافیت. نزدیک به شیشه معمولی در حالت روشن.',
    specs: {
      clarity: '۹۱٪',
      haze: '< ۲٪',
      switching: '< ۶۰ms',
      voltage: 'AC 48V',
      uv: '۹۹.۵٪',
      ir: '۹۵٪',
      temp: '-۳۰ تا ۸۰℃',
      warranty: '۱۰ سال',
    },
    price: 'تماس بگیرید',
    badge: 'پرچمدار',
    applications: ['ویترین لوکس', 'موزه', 'نمایشگاه'],
  },
  {
    id: 'pdlc-film-gray',
    name: 'PDLC Film Gray/Black',
    category: 'فیلم هوشمند رنگی',
    description: 'فیلم‌های هوشمند در طیف خاکستری تا مشکی برای کنترل نور بیشتر و طراحی داخلی منحصر به فرد.',
    specs: {
      clarity: '۴۰-۷۰٪ (متغیر)',
      haze: '< ۵٪',
      switching: '< ۱۰۰ms',
      voltage: 'AC 60V',
      uv: '۹۹٪',
      ir: '۹۵٪',
      temp: '-۲۰ تا ۶۰℃',
      warranty: '۵ سال',
    },
    price: 'تماس بگیرید',
    badge: 'طراحی داخلی',
    applications: ['استودیو عکاسی', 'سینمای خانگی', 'فضاهای خلاقانه'],
  },
  {
    id: 'pdlc-film-warrior',
    name: 'PDLC Film Warrior',
    category: 'فیلم ضدخدشه و پرقدرت',
    description: 'لایه سخت‌افزاری ضدخدشه (Hard Coat) با دوام ۳ برابر. مناسب مکان‌های با ترافیک بالا و محیط‌های سخت.',
    specs: {
      clarity: '۸۶٪',
      haze: '< ۳٪',
      switching: '< ۸۰ms',
      voltage: 'AC 60V',
      uv: '۹۹٪',
      ir: '۹۰٪',
      temp: '-۳۰ تا ۸۵℃',
      warranty: '۱۰ سال',
    },
    price: 'تماس بگیرید',
    badge: 'صنعتی/خارجی',
    applications: ['مغازه‌ها', 'فروشگاه‌ها', 'فضاهای عمومی'],
  },
  {
    id: 'pdlc-film-scratchproof',
    name: 'PNLC Scratchproof',
    category: 'تکنولوژی PNLC نسل جدید',
    description: 'تکنولوژی PNLC پیشرفته: وضوح ۹۹٪، مصرف ۴۰٪ کمتر، زاویه دید ۱۷۰°. بهترین تکنولوژی موجود در بازار.',
    specs: {
      clarity: '۹۹٪',
      haze: '< ۰.۵٪',
      switching: '< ۳۰ms',
      voltage: 'AC 36V',
      uv: '۹۹.۹٪',
      ir: '۹۸٪',
      temp: '-۳۰ تا ۹۵℃',
      warranty: '۱۵ سال',
    },
    price: 'تماس بگیرید',
    badge: 'بهترین تکنولوژی',
    applications: ['پروژه‌های پرچمدار', 'معمار جهانی', 'خانواده‌های لوکس'],
  },
  {
    id: 'vip-sample-kit',
    name: 'VIP Sample Kit',
    category: 'کیت نمونه VIP',
    description: 'کیت کامل نمونه‌گیری برای معماران، طراحان و متقاضیان پروژه. شامل ۴ نوع فیلم، کنترلر، ترانسفورماتور و راهنما.',
    specs: {
      contents: '۴ نمونه فیلم (۰۸۵، ۰۸۷، ۰۹۱، PNLC)',
      controller: 'کنترلر هوشمند WiFi/RF',
      transformer: 'ترانسفورماتور ۶۰V/۴۸V/۳۶V',
      guide: 'راهنما و کاتالوگ فنی کامل',
      size: 'نمونه‌ها ۱۰×۱۰ سانتی‌متر',
      shipping: 'ارسال رایگان سراسر ایران',
    },
    price: '۲,۵۰۰,۰۰۰ تومان',
    badge: 'فروش آنلاین',
    applications: ['معماران', 'مطوران', 'مشاوران نور', 'خردفروشی'],
    isKit: true,
  },
]

const specLabels: Record<string, string> = {
  clarity: 'وضوح (On)',
  haze: 'مات بودن (Off)',
  switching: 'سرعت تغییر',
  voltage: 'ولتاژ کار',
  uv: 'مسدودسازی UV',
  ir: 'مسدودسازی IR',
  temp: 'بازه دما',
  warranty: 'گارانتی',
  contents: 'محتویات',
  controller: 'کنترلر',
  transformer: 'ترانسفورماتور',
  guide: 'راهنما',
  size: 'اندازه نمونه',
  shipping: 'ارسال',
}

export default function Products() {
  return (
    <section id="products" className="section relative overflow-hidden bg-white">
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
            کاتالوگ محصولات
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-surface-900 tracking-tight mb-4">
            محصولات شیشه هوشمند
            <br />
            <span className="gradient-text">فلمبیس</span>
          </h2>
          <p className="text-lg text-surface-600 leading-relaxed">
            طیف کامل از فیلم‌های PDLC و PNLC با تکنولوژی پیشرفته، از مدل‌های استاندارد تا پرچمداران صنعت.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`card p-6 md:p-8 group relative overflow-hidden flex flex-col ${product.isKit ? 'gradient-border bg-gradient-to-br from-primary-50/70 to-white' : ''}`}
            >
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    product.isKit
                      ? 'bg-primary-600 text-white'
                      : 'bg-primary-100 text-primary-700'
                  }`}>
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <p className="text-sm text-primary-600 font-medium mb-1">{product.category}</p>
                <h3 className="text-xl font-bold text-surface-900 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
              </div>

              <p className="text-surface-600 text-sm leading-relaxed mb-6 flex-1">
                {product.description}
              </p>

              {/* Specs */}
              <div className="mb-6 p-4 rounded-xl bg-surface-50 border border-surface-100">
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="text-right">
                      <p className="text-xs text-surface-500">{specLabels[key] || key}</p>
                      <p className="text-sm font-medium text-surface-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <p className="text-xs font-medium text-surface-500 mb-2">کاربردهای پیشنهادی:</p>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded text-xs bg-surface-100 text-surface-700 border border-surface-200"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-surface-100">
                <div className="text-right">
                  <p className="text-sm text-surface-500">قیمت:</p>
                  <p className="text-xl font-extrabold text-primary-600">{product.price}</p>
                </div>
                <Link
                  href="#contact"
                  className={product.isKit ? 'btn-primary' : 'btn-outline'}
                  onClick={(e) => {
                    if (product.isKit) {
                      e.preventDefault()
                      try { localStorage.setItem("filmbase_kit", "1") } catch {}
                      const contactSection = document.getElementById('contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        window.location.href = '/contact'
                      }
                    }
                  }}
                >
                  {product.isKit ? (
                    <>
                      <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                      خرید کیت نمونه
                    </>
                  ) : (
                    <>
                      <HelpCircle className="h-4 w-4" aria-hidden="true" />
                      درخواست پیش‌فاکتور
                    </>
                  )}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Comparison Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-6 md:p-8 bg-surface-50"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 shadow-sm">
              <Star className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-surface-900 mb-2">چرا فلمبیس؟</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-surface-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                  <span>تکنولوژی PNLC نسل جدید در تمام محصولات</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                  <span>گواهینامه CE و RoHS برای تمام مدل‌ها</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                  <span>گارانتی تا ۱۵ سال (بسته به مدل)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                  <span>نصب و مونتاژ توسط تیم تخصصی</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                  <span>پشتیبانی فنی ۲۴/۷ و پشتیبانی از راه دور</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                  <span>امکان سفارشی‌سازی ابعاد و شکل</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* VIP Kit Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <div className="card relative overflow-hidden p-8 md:p-12 border-0 bg-gradient-to-l from-primary-800 via-primary-600 to-accent-700 text-white">
            <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
            <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                  <Package className="h-4 w-4" aria-hidden="true" />
                  <span>فروش آنلاین با ارسال رایگان</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  VIP Sample Kit
                  <br />
                  <span className="text-primary-200">کیت نمونه‌گیری حرفه‌ای</span>
                </h3>
                <p className="text-primary-100 mb-6 leading-relaxed">
                  برای معماران، طراحان داخلی، مشاوران نور و توسعه‌دهندگان پروژه. کیت شامل ۴ نوع فیلم (PDLC 085، 087، 091 و PNLC)، کنترلر هوشمند، ترانسفورماتور و کاتالوگ کامل فنی.
                </p>
                <ul className="space-y-3 mb-8" role="list">
                  {[
                    '۴ نمونه فیلم ۱۰×۱۰ سانتی‌متر با تکنولوژی‌های مختلف',
                    'کنترلر هوشمند با کنترل WiFi، RF و اپلیکیشن',
                    'ترانسفورماتور چند ولتاژه (۳۶V، ۴۸V، ۶۰V)',
                    'کاتالوگ فنی کامل، دیتاشیت و راهنمای نصب',
                    'ارسال رایگان به سراسر ایران با پست پیشتاز',
                    'امکان کسر مبلغ کیت از سفارش اصلی پروژه',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
                        <CheckCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="btn bg-white text-primary-700 hover:bg-primary-50 inline-flex"
                >
                  <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                  سفارش کیت نمونه VIP
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center p-8">
                  <Package className="h-24 w-24 text-white/50" aria-hidden="true" />
                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm">
                  <Truck className="h-4 w-4" aria-hidden="true" />
                  <span>ارسال رایگان سراسر ایران</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}