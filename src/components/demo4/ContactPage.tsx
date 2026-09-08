'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowLeft, CheckCircle2, Handshake, Loader2, Mail, MapPin,
  MessageCircle, Phone, Ruler, ShieldCheck, Sparkles,
} from 'lucide-react'
import Faq from './Faq'
import OfficeDragSwitcher from './OfficeDragSwitcher'

const badges = [
  { icon: Sparkles, title: 'حریم آنی', text: 'شفاف تا مات در کمتر از ۱ ثانیه' },
  { icon: ShieldCheck, title: 'گارانتی ۱۰ ساله', text: 'معتبرترین گارانتی بازار ایران' },
  { icon: Ruler, title: 'اندازه سفارشی', text: 'برش دقیق به ابعاد شیشه شما' },
  { icon: Handshake, title: 'تأمین و نصب یکجا', text: 'از سفارش تا راه‌اندازی، یک تیم' },
]

const products = [
  { title: 'فیلم هوشمند پشت‌چسب‌دار', text: 'رتروفیت روی شیشه موجود — بدون تعویض شیشه.' },
  { title: 'شیشه هوشمند لمینت', text: 'فیلم داخل شیشه؛ بیشترین شفافیت و دوام.' },
  { title: 'شیشه مات‌شونده هوشمند', text: 'سوییچ آنی شفاف به مات با کلید یا ریموت.' },
  { title: 'شیشه هوشمند دوجداره', text: 'عایق صدا و حرارت به‌همراه حریم هوشمند.' },
  { title: 'پارتیشن هوشمند', text: 'فضاهای اداری انعطاف‌پذیر با حریم لحظه‌ای.' },
  { title: 'نمایشگر شفاف LED', text: 'تبدیل ویترین و پنجره به نمایشگر دیجیتال.' },
]

const benefits = [
  { title: 'حریم به‌موقع', text: 'از شفاف تا مات در کمتر از یک ثانیه — بدون پرده و کرکره.' },
  { title: 'مهار ۹۹٪ اشعه UV', text: 'محافظت از مبلمان و دکوراسیون در برابر آفتاب.' },
  { title: 'کاهش گرمای خورشید', text: 'بخش قابل توجهی از مادون قرمز را مهار می‌کند.' },
  { title: 'آکوستیک بهتر', text: 'تا ۲۰٪ کاهش صدا نسبت به شیشه ساده.' },
  { title: 'کنترل کامل', text: 'کلید، ریموت، اپلیکیشن، دستیار صوتی و دیمر تنظیم سطح.' },
  { title: 'دارای گواهینامه CE و RoHS', text: 'مناسب فضاهای تجاری و درمانی.' },
]

const contactItems = [
  {
    icon: MapPin,
    title: 'آدرس دفتر مرکزی',
    lines: ['تهران، خیابان ولی‌عصر، کوچه ۱۲، پلاک ۴۵، واحد ۳'],
  },
  {
    icon: Phone,
    title: 'تلفن تماس',
    lines: ['۰۲۱-۱۲۳۴۵۶۷۸ (دفتر مرکزی)', '۰۲۱-۸۷۶۵۴۳۲۱ (بخش فروش)'],
  },
  {
    icon: MessageCircle,
    title: 'واتس‌اپ و موبایل',
    lines: ['۰۹۱۲-۳۴۵۶۷۸۹'],
  },
  {
    icon: Mail,
    title: 'ایمیل',
    lines: ['info@filmbase.ir', 'sales@filmbase.ir'],
  },
]

const projectTypes = [
  { value: 'residential', label: 'مسکونی' },
  { value: 'commercial', label: 'تجاری و اداری' },
  { value: 'healthcare', label: 'بهداشت و درمان' },
  { value: 'hotel', label: 'هتل و پذیرایی' },
  { value: 'automotive', label: 'خودرو' },
  { value: 'other', label: 'سایر' },
]

const quoteProducts = [
  ...products.map((p) => p.title),
  'مشاوره پروژه (اطمینان ندارم)',
]

const inputStyle = { width: '100%' } as const

const navItems = [
  { href: '#products', label: 'محصولات' },
  { href: '#why', label: 'چرا فلمبیس' },
  { href: '#faq', label: 'سؤالات متداول' },
  { href: '#contact', label: 'تماس با ما' },
]

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(true)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || ''),
      phone: String(data.get('phone') || '').replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))),
      email: String(data.get('email') || ''),
      projectType: String(data.get('projectType') || 'other'),
      product: String(data.get('product') || ''),
      area: String(data.get('area') || ''),
      message: String(data.get('message') || ''),
      consent: data.get('consent') === 'on',
      sampleKit: false,
    }

    const nextErrors: Record<string, string> = {}
    if (payload.name.trim().length < 2) nextErrors.name = 'نام را وارد کنید'
    if (!/^(\+98|0)?9\d{9}$/.test(payload.phone)) nextErrors.phone = 'شماره موبایل معتبر وارد کنید'
    if (payload.message.trim().length < 15) nextErrors.message = 'توضیح پروژه حداقل ۱۵ کاراکتر باشد'
    if (!payload.consent) nextErrors.consent = 'با شرایط موافقت کنید'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* نوار بالای تیره — مثل سایت مرجع */}
      <div className="isg-topbar">
        <a href="tel:09123456789" className="isg-topbar-item"><Phone size={12} aria-hidden="true" /><bdi>۰۹۱۲-۳۴۵۶۷۸۹</bdi></a>
        <a href="mailto:info@filmbase.ir" className="isg-topbar-item" dir="ltr">info@filmbase.ir</a>
      </div>

      {/* هدر سفید چسبان */}
      <header className="isg-header">
        <div className="isg-container isg-header-inner">
          <a href="/demo4" className="isg-logo" aria-label="فلمبیس — صفحه اصلی">
            <span className="isg-logo-mark" aria-hidden="true" />
            <span className="isg-logo-text"><strong>فلمبیس</strong><small>شیشه هوشمند</small></span>
          </a>
          <nav className="isg-nav" aria-label="منوی اصلی">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a href="tel:02112345678" className="isg-header-phone">
            <Phone size={15} aria-hidden="true" />
            <bdi>۰۲۱-۱۲۳۴۵۶۷۸</bdi>
          </a>
          <button
            type="button"
            className="isg-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
          >
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && (
          <nav className="isg-mobile-nav" aria-label="منوی موبایل">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
          </nav>
        )}
      </header>

      {/* مسیر صفحه */}
      <div className="isg-breadcrumb" aria-label="مسیر صفحه">
        <div className="isg-container">
          <a href="/">خانه</a>
          <span aria-hidden="true">‹</span>
          <span aria-current="page">تماس با ما</span>
        </div>
      </div>

      <main id="main-content" className="isg-main">
        <div className="isg-container">
          {/* هیرو با سوییچر شفاف/مات — مثل دموی اول */}
          <section className="isg-hero" aria-labelledby="isg-hero-title">
            <div className="isg-hero-copy">
              <h1 id="isg-hero-title" className="isg-title">شیشه‌های هوشمند؛ شفاف یا خصوصی، هر زمان که بخواهید</h1>
              <p className="isg-hero-sub">
                فلمبیس مرجع تخصصی تولید، فروش، نصب و مونتاژ شیشه‌های هوشمند و فیلم‌های PDLC در ایران؛
                کنترل نور، حریم خصوصی و عایق‌بندی تنها با یک لمس.
              </p>
            </div>
            <div className="isg-switcher">
              <div className="isg-switcher-frame">
                <Image
                  src="/images/hero-interior.webp"
                  alt="خانه‌ای با شیشه‌های هوشمند در حالت شفاف"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 760px"
                  className="isg-switcher-img"
                />
                <Image
                  src="/images/hero-interior-frost.jpg"
                  alt="همان خانه با شیشه‌های مات‌شده — حالت حریم خصوصی"
                  fill
                  sizes="(max-width: 1024px) 92vw, 760px"
                  className={`isg-switcher-img isg-switcher-frost ${isTransparent ? '' : 'is-on'}`}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="isg-switcher-toggle"
                  onClick={() => setIsTransparent((current) => !current)}
                  aria-pressed={!isTransparent}
                >
                  <span className={isTransparent ? 'is-active' : ''}>شفاف</span>
                  <span className="isg-switcher-arrows" aria-hidden="true">⇌</span>
                  <span className={!isTransparent ? 'is-active' : ''}>مات</span>
                </button>
              </div>
              <p className="isg-switcher-caption">روی دکمه بزنید — شیشه‌های خانه در کمتر از یک ثانیه مات می‌شوند</p>
            </div>
          </section>

          {/* سوییچر کشیدنی اتاق جلسه — مات شدن تا نقطه کشش */}
          <section className="isg-office" aria-label="دموی کشیدنی پارتیشن شیشه‌ای دفتر">
            <h2 className="isg-office-title">خودتان امتحان کنید: پارتیشن شیشه‌ای دفتر</h2>
            <OfficeDragSwitcher />
          </section>

          {/* نشان‌های اعتماد */}
          <ul className="isg-badges" aria-label="مزایای کلیدی فلمبیس">
            {badges.map((badge) => (
              <li key={badge.title}>
                <span className="isg-badge-icon"><badge.icon size={20} aria-hidden="true" /></span>
                <strong>{badge.title}</strong>
                <span>{badge.text}</span>
              </li>
            ))}
          </ul>

          {/* مزایا — مثل دموی اول، قبل از محصولات */}
          <section id="why" className="isg-section isg-section-gray">
            <h2 className="isg-subtitle">چرا فلمبیس؟</h2>
            <p className="isg-section-lead">عملکرد، درون هر پنل — از حریم آنی تا صرفه انرژی.</p>
            <ul className="isg-benefits">
              {benefits.map((benefit) => (
                <li key={benefit.title}>
                  <strong>{benefit.title}</strong>
                  <p>{benefit.text}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* محصولات */}
          <section id="products" className="isg-section">
            <h2 className="isg-subtitle">محصولات فلمبیس</h2>
            <p className="isg-section-lead">هر آنچه برای هوشمندسازی شیشه‌های پروژه‌تان نیاز دارید — با گارانتی ۱۰ ساله و نصب تخصصی.</p>
            <ul className="isg-products">
              {products.map((product) => (
                <li key={product.title}>
                  <strong>{product.title}</strong>
                  <p>{product.text}</p>
                  <a href="/#products" className="isg-more">جزئیات <ArrowLeft size={14} aria-hidden="true" /></a>
                </li>
              ))}
            </ul>
          </section>

          {/* سوالات متداول */}
          <section id="faq" className="isg-section">
            <h2 className="isg-subtitle">سؤالات متداول</h2>
            <p className="isg-section-lead">پاسخ پرتکرارترین پرسش‌های مشتریان فلمبیس.</p>
            <Faq />
          </section>

          {/* تماس و فرم — انتهای صفحه */}
          <section id="contact" className="isg-section isg-section-gray">
            <h2 className="isg-subtitle">تماس با ما</h2>
            <p className="isg-section-lead">راه‌های ارتباط با ما — کارشناسان فلمبیس پاسخگوی شما هستند.</p>
            <div className="isg-layout">
              {/* کارت‌های اطلاعات تماس */}
              <div className="isg-info" aria-label="اطلاعات تماس">
                {contactItems.map((item) => (
                  <article key={item.title} className="isg-info-card">
                    <span className="isg-info-icon"><item.icon size={20} aria-hidden="true" /></span>
                    <div>
                      <h3>{item.title}</h3>
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </article>
                ))}

                <article className="isg-info-card isg-hours">
                  <span className="isg-info-icon"><Phone size={20} aria-hidden="true" /></span>
                  <div>
                    <h3>ساعات کاری</h3>
                    <p>شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر</p>
                    <p>پنجشنبه: ۹ صبح تا ۱۳</p>
                  </div>
                </article>

                {/* نقشه — نمایش نمادین */}
                <div className="isg-map" role="img" aria-label="لوکیشن دفتر فلمبیس روی نقشه">
                  <div className="isg-map-pin" aria-hidden="true">
                    <MapPin size={26} />
                    <span>فلمبیس — ولی‌عصر، تهران</span>
                  </div>
                </div>
              </div>

              {/* فرم استعلام قیمت */}
              <div className="isg-form-wrap" aria-labelledby="isg-form-title">
                <h3 id="isg-form-title" className="isg-form-heading">ارتباط با شرکت</h3>
                <p className="isg-form-lead">
                  در صورت تمایل جهت استعلام قیمت محصولات فلمبیس و یا بررسی پروژه، لطفاً از طریق فرم زیر اقدام فرمایید؛ کارشناسان ما حداکثر ظرف یک روز کاری پاسخ می‌دهند.
                </p>

                {status === 'success' ? (
                  <div className="isg-form isg-form-success">
                    <CheckCircle2 size={44} aria-hidden="true" />
                    <h4>پیام شما ثبت شد</h4>
                    <p>کارشناسان فلمبیس حداکثر ظرف یک روز کاری با شما تماس می‌گیرند.</p>
                  </div>
                ) : (
                  <form className="isg-form" onSubmit={handleSubmit} noValidate>
                    <div className="isg-form-grid">
                      <label>
                        <span>نام و نام خانوادگی *</span>
                        <input name="name" type="text" required style={inputStyle} />
                        {errors.name && <em>{errors.name}</em>}
                      </label>
                      <label>
                        <span>شماره موبایل *</span>
                        <input name="phone" type="tel" dir="ltr" required placeholder="09xxxxxxxxx" style={inputStyle} />
                        {errors.phone && <em>{errors.phone}</em>}
                      </label>
                      <label>
                        <span>ایمیل (اختیاری)</span>
                        <input name="email" type="email" dir="ltr" style={inputStyle} />
                      </label>
                      <label>
                        <span>نوع پروژه</span>
                        <select name="projectType" defaultValue="residential" style={inputStyle}>
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        <span>محصول موردنظر</span>
                        <select name="product" defaultValue="" style={inputStyle}>
                          <option value="">انتخاب کنید…</option>
                          {quoteProducts.map((product) => (
                            <option key={product} value={product}>{product}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        <span>ابعاد تقریبی / متراژ (اختیاری)</span>
                        <input name="area" type="text" placeholder="مثلاً: ۶ متر مربع پارتیشن" style={inputStyle} />
                      </label>
                      <label className="isg-form-full">
                        <span>توضیح پروژه *</span>
                        <textarea name="message" rows={5} required placeholder="کمی از فضا و هدفتان بنویسید…" style={inputStyle} />
                        {errors.message && <em>{errors.message}</em>}
                      </label>
                    </div>
                    <label className="isg-check">
                      <input name="consent" type="checkbox" required />
                      <span>با <a href="/terms">شرایط استفاده</a> و <a href="/privacy">حریم خصوصی</a> موافقم و اجازه می‌دهم فلمبیس برای پیگیری درخواست با من تماس بگیرد. *</span>
                    </label>
                    {errors.consent && <em className="isg-check-error">{errors.consent}</em>}
                    {status === 'error' && <p className="isg-form-error">ارسال انجام نشد. دوباره تلاش کنید یا با <bdi>۰۲۱-۱۲۳۴۵۶۷۸</bdi> تماس بگیرید.</p>}
                    <button type="submit" className="isg-submit" disabled={status === 'sending'}>
                      {status === 'sending' ? <Loader2 size={17} className="isg-spin" aria-hidden="true" /> : null}
                      {status === 'sending' ? 'در حال ارسال…' : 'ارسال درخواست استعلام قیمت'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* فوتر */}
      <footer className="isg-footer">
        <div className="isg-container isg-footer-grid">
          <div>
            <h3>دسترسی سریع</h3>
            <ul>
              <li><a href="/demo4#products">محصولات</a></li>
              <li><a href="/demo4#why">چرا فلمبیس</a></li>
              <li><a href="/demo4#faq">سؤالات متداول</a></li>
              <li><a href="/demo4#contact">تماس با ما</a></li>
              <li><a href="/">صفحه اصلی</a></li>
            </ul>
          </div>
          <div>
            <h3>ارتباط با ما</h3>
            <ul className="isg-footer-contact">
              <li><Phone size={14} aria-hidden="true" /><bdi>۰۲۱-۱۲۳۴۵۶۷۸ | ۰۹۱۲-۳۴۵۶۷۸۹</bdi></li>
              <li><Mail size={14} aria-hidden="true" /><bdi dir="ltr">info@filmbase.ir</bdi></li>
              <li><MapPin size={14} aria-hidden="true" /><span>تهران، خیابان ولی‌عصر، کوچه ۱۲، پلاک ۴۵، واحد ۳</span></li>
            </ul>
          </div>
        </div>
        <div className="isg-footer-bottom">
          <span>© ۱۴۰۴ فلمبیس — تمامی حقوق محفوظ است.</span>
          <span><a href="/privacy">حریم خصوصی</a> · <a href="/terms">شرایط استفاده</a></span>
        </div>
      </footer>
    </>
  )
}
