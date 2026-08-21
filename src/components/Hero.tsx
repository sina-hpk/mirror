'use client'

import { Shield, Zap, ExternalLink, Headphones, BadgeCheck, Power } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const highlights = [
  { icon: BadgeCheck, label: 'گارانتی و ضمانت اصالت' },
  { icon: Zap, label: 'نصب و مونتاژ تخصصی' },
  { icon: Headphones, label: 'مشاوره رایگان پیش از خرید' },
]

const trust = [
  { icon: Shield, label: 'گواهینامه CE' },
  { icon: Shield, label: 'مطابقت RoHS' },
  { icon: Zap, label: 'تکنولوژی PDLC/PNLC' },
]

const stats = [
  { value: '+۱۵', label: 'سال ضمانت محصول' },
  { value: '۹۹٪', label: 'وضوح در حالت روشن' },
  { value: '۳۰ms', label: 'سرعت تغییر وضعیت' },
  { value: '۹۹٪', label: 'مسدودسازی UV' },
]

export default function Hero() {
  const [powered, setPowered] = useState(true)

  return (
    <section className="relative overflow-hidden bg-surface-950 pt-28 pb-20 md:pt-36 md:pb-24">
      {/* Background: mesh gradient + grid + glows */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" />
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
        <div className="absolute -top-40 right-[10%] h-[28rem] w-[28rem] rounded-full bg-primary-600/25 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 left-[5%] h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center lg:text-right"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="badge-dark mb-6"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-400" />
              </span>
              نسل جدید تکنولوژی شیشه هوشمند در ایران
            </motion.span>

            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl">
              شیشه‌های هوشمند
              <br />
              <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
                مدرن، امن، هوشمند
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-surface-300 lg:mx-0">
              فلمبیس مرجع تخصصی تولید، فروش، نصب و مونتاژ شیشه‌های هوشمند PDLC و PNLC در ایران؛
              کنترل نور، حریم خصوصی و عایق‌بندی تنها با یک لمس.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link href="#contact" className="btn-primary group w-full sm:w-auto">
                <Zap className="h-5 w-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                درخواست مشاوره و پیش‌فاکتور
              </Link>
              <Link
                href="#products"
                className="btn glass w-full text-white hover:bg-white/15 hover:border-white/25 sm:w-auto"
              >
                مشاهده کاتالوگ محصولات
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-surface-400 lg:justify-start">
              {trust.map((item) => (
                <span key={item.label} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-primary-400" aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual column - interactive glass demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="animate-float">
              <div className="gradient-border relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-primary-950/50">
                {/* Scene behind the glass */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-700 to-surface-900" />
                <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white/90">
                    <div className="text-5xl font-extrabold md:text-6xl drop-shadow-lg">فلمبیس</div>
                    <div className="mt-2 text-sm text-white/70">نمای پشت شیشه</div>
                  </div>
                </div>

                {/* The switchable glass overlay */}
                <motion.div
                  className="absolute inset-0 bg-surface-100/80 backdrop-blur-2xl"
                  animate={{ opacity: powered ? 0 : 1 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  aria-hidden="true"
                />

                {/* State label */}
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-surface-950/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  <span className={`h-2 w-2 rounded-full ${powered ? 'bg-primary-400' : 'bg-surface-400'}`} />
                  {powered ? 'حالت شفاف' : 'حالت مات'}
                </div>

                {/* Interactive switch */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <button
                    type="button"
                    onClick={() => setPowered((v) => !v)}
                    aria-pressed={powered}
                    className="glass group flex items-center gap-3 rounded-full py-2 pl-2 pr-4 text-sm font-medium text-white shadow-xl transition-all hover:bg-white/20"
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                        powered
                          ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                          : 'bg-surface-600 text-surface-300'
                      }`}
                    >
                      <Power className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {powered ? 'خاموش کردن شیشه' : 'روشن کردن شیشه'}
                  </button>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass absolute -bottom-6 -right-4 hidden rounded-2xl px-5 py-4 shadow-xl md:block"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/20 text-primary-300">
                  <Zap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">مصرف انرژی فوق‌کم</p>
                  <p className="text-xs text-surface-400">فقط ۵ وات به ازای هر متر مربع</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface-950/80 px-6 py-6 text-center backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-white md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-surface-400 md:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 sm:justify-start"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-surface-200">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
