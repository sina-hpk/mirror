'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Bolt, Handshake, Ruler, ShieldCheck } from 'lucide-react'
import OfficeDragSwitcher from './OfficeDragSwitcher'

const badges = [
  { icon: Bolt, title: 'حریم آنی', text: 'شفاف تا مات در کمتر از ۱ ثانیه' },
  { icon: ShieldCheck, title: 'گارانتی ۱۰ ساله', text: 'معتبرترین گارانتی بازار ایران' },
  { icon: Ruler, title: 'اندازه سفارشی', text: 'برش دقیق به ابعاد شیشه شما' },
  { icon: Handshake, title: 'تأمین و نصب یکجا', text: 'از سفارش تا راه‌اندازی، یک تیم' },
]

export default function Hero() {
  const [isTransparent, setIsTransparent] = useState(true)

  return (
    <section className="k-hero" aria-labelledby="k-hero-title">
      <div className="k-container">
        <p className="k-kicker">فیلم هوشمند سوییچ‌شو · ایران</p>
        <h1 id="k-hero-title">فیلم حریم هوشمند که با لمس یک دکمه سوییچ می‌کند</h1>
        <p className="k-hero-sub">شیشه هوشمند. حریم آنی. طراحی بی‌مرز.</p>
        <p className="k-hero-desc">
          فلمبیس تأمین‌کننده و مجری فیلم شیشه هوشمند سوییچ‌شو (PDLC)، شیشه هوشمند و فیلم نمایشگر شفاف LED است — برای دفاتر، هتل‌ها، مراکز درمانی و پروژه‌های مسکونی در سراسر ایران؛ با نصب اندازه‌گیری‌شده و گارانتی ۱۰ ساله.
        </p>

        <div className="k-switcher">
          <div className="k-switcher-frame">
            <Image
              src="/images/hero-interior.webp"
              alt="اتاق شیشه‌ای شفاف"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 760px"
              className="k-switcher-img"
            />
            <Image
              src="/images/hero-interior-frost.jpg"
              alt="اتاق شیشه‌ای مات"
              fill
              sizes="(max-width: 1024px) 92vw, 760px"
              className={`k-switcher-img k-switcher-frost ${isTransparent ? '' : 'is-on'}`}
              aria-hidden="true"
            />
            <button
              type="button"
              className="k-switcher-toggle"
              onClick={() => setIsTransparent((current) => !current)}
              aria-pressed={!isTransparent}
            >
              <span className={isTransparent ? 'is-active' : ''}>شفاف</span>
              <span className="k-switcher-arrows" aria-hidden="true">⇌</span>
              <span className={!isTransparent ? 'is-active' : ''}>مات</span>
            </button>
          </div>
          <p className="k-switcher-caption" dir="rtl">از شفاف تا مات در کمتر از یک ثانیه — روی دکمه بزنید</p>
        </div>

        {/* سوییچر کشیدنی اتاق جلسه — مات شدن تا نقطه کشش */}
        <div className="k-office">
          <h2 className="k-office-title">خودتان امتحان کنید: پارتیشن شیشه‌ای دفتر</h2>
          <OfficeDragSwitcher />
        </div>

        <ul className="k-badges" aria-label="مزایای کلیدی">
          {badges.map((badge) => (
            <li key={badge.title}>
              <span className="k-badge-icon"><badge.icon size={20} aria-hidden="true" /></span>
              <strong>{badge.title}</strong>
              <span>{badge.text}</span>
            </li>
          ))}
        </ul>

        <div className="k-hero-actions">
          <a href="#quote" className="k-btn k-btn-gold">درخواست استعلام قیمت</a>
          <Link href="/#products" className="k-btn k-btn-ghost">مشاهده کاتالوگ محصولات</Link>
        </div>
      </div>
    </section>
  )
}
