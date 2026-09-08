'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, Check, Layers3, Power, ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'

const metrics = [
  { value: 'کمتر از ۱ ثانیه', label: 'تغییر وضعیت' },
  { value: 'تا ۹۹٪', label: 'کاهش پرتو فرابنفش' },
  { value: '۱۵ سال', label: 'گارانتی منتخب' },
]

const assurances = ['بازدید و اندازه‌گیری', 'اجرای تخصصی', 'پشتیبانی پس از نصب']

export default function Hero() {
  const [isTransparent, setIsTransparent] = useState(true)
  const reduceMotion = useReducedMotion()
  const enter = reduceMotion ? {} : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 } }

  return (
    <section className="demo2-hero" aria-labelledby="demo2-hero-title">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container-custom hero-shell">
        <motion.div
          {...enter}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="hero-copy"
        >
          <div className="hero-kicker">
            <Sparkles size={16} aria-hidden="true" />
            <span>مرز میان دیدن و دیده نشدن</span>
          </div>
          <h1 id="demo2-hero-title">
            فضا را روشن نگه دارید؛
            <span>حریم را با یک لمس بسازید.</span>
          </h1>
          <p className="hero-lead">
            راهکارهای شیشه هوشمند فلمبیس، معماری شفاف را در یک لحظه به فضایی آرام و خصوصی تبدیل می‌کنند؛ دقیق، یکپارچه و متناسب با پروژه شما.
          </p>

          <div className="hero-actions">
            <Link href="/#contact" className="hero-primary-action">
              مشاوره و برآورد پروژه
              <ArrowLeft size={19} aria-hidden="true" />
            </Link>
            <Link href="/#products" className="hero-secondary-action">
              مشاهده راهکارها
            </Link>
          </div>

          <ul className="hero-assurance" aria-label="خدمات همراه پروژه">
            {assurances.map((item) => (
              <li key={item}>
                <span><Check size={13} aria-hidden="true" /></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          {...(reduceMotion ? {} : { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } })}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="glass-showcase"
        >
          <div className="showcase-caption">
            <span>تجربه زنده</span>
            <p>وضعیت شیشه را تغییر دهید</p>
          </div>

          <div className="glass-frame">
            <Image
              src="/images/hero-interior.webp"
              alt="فضای داخلی مدرن با شیشه هوشمند فلمبیس"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 48vw"
              className="glass-image"
            />
            <div className="glass-image-shade" aria-hidden="true" />
            <Image
              src="/images/hero-interior-frost.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 92vw, 48vw"
              className={`glass-image-frost ${isTransparent ? '' : 'is-on'}`}
              aria-hidden="true"
            />
            <div className="glass-status" aria-live="polite">
              <span className={isTransparent ? 'is-on' : ''} />
              {isTransparent ? 'شفاف' : 'مات'}
            </div>
            <button
              type="button"
              className="glass-toggle"
              onClick={() => setIsTransparent((current) => !current)}
              aria-pressed={!isTransparent}
              aria-label={`تغییر شیشه به حالت ${isTransparent ? 'مات' : 'شفاف'}`}
            >
              <span className={`toggle-track ${isTransparent ? 'is-on' : ''}`} aria-hidden="true">
                <span><Power size={15} /></span>
              </span>
              <span>
                <small>کنترل شیشه</small>
                {isTransparent ? 'فعال کردن حریم' : 'بازگرداندن شفافیت'}
              </span>
            </button>
          </div>

          <div className="showcase-note showcase-note-top">
            <Layers3 size={18} aria-hidden="true" />
            <span><strong>PDLC / PNLC</strong>دو فناوری برای هر نیاز</span>
          </div>
          <div className="showcase-note showcase-note-bottom">
            <ShieldCheck size={18} aria-hidden="true" />
            <span><strong>اجرای مطمئن</strong>از طراحی تا نصب</span>
          </div>
        </motion.div>

        <motion.div
          {...(reduceMotion ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } })}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="trust-rail"
          aria-label="شاخص‌های اعتماد"
        >
          <div className="trust-intro">
            <span aria-hidden="true" />
            <p>انتخاب حرفه‌ای برای فضاهای امروز</p>
          </div>
          <div className="trust-metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
