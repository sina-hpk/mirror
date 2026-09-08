'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, CheckCircle2, ClipboardList, Loader2, Mail, MapPin, MessageSquareQuote,
  PencilRuler, Phone, Sparkles, Sun, ThermometerSun, Timer, Wand2, Waves, Wrench,
} from 'lucide-react'

const features = [
  { icon: Timer, color: 'blue', title: 'سوییچ آنی', text: 'از شفاف تا مات در کمتر از یک ثانیه با کلید، ریموت یا اپلیکیشن.' },
  { icon: Wand2, color: 'purple', title: 'حریم لحظه‌ای', text: 'بدون پرده و کرکره؛ حریم خصوصی را با یک لمس بسازید یا بردارید.' },
  { icon: Sun, color: 'amber', title: 'مهار اشعه UV', text: 'تا ۹۹٪ اشعه فرابنفش مهار می‌شود — حفظ مبلمان و دکوراسیون.' },
  { icon: ThermometerSun, color: 'red', title: 'صرفه انرژی', text: 'کاهش گرمای تابشی و هزینه سرمایش تا ۳۰ درصد.' },
  { icon: Waves, color: 'green', title: 'آکوستیک بهتر', text: 'تا ۲۰٪ کاهش عبور صدا نسبت به شیشه ساده.' },
  { icon: Sparkles, color: 'indigo', title: 'پروجکشن و نمایش', text: 'در حالت مات، سطح ایده‌آل ویدئوپروژکتور و نمایشگر LED شفاف.' },
]

const steps = [
  { icon: ClipboardList, color: 'blue', title: 'مشاوره و اندازه‌گیری', text: 'رایگان؛ در محل شما. ابعاد دقیق و بهترین راهکار را برآورد می‌کنیم.' },
  { icon: PencilRuler, color: 'purple', title: 'ساخت سفارشی', text: 'فیلم دقیقاً به ابعاد شیشه شما برش می‌خورد؛ تا عرض ۲.۳ متر.' },
  { icon: Wrench, color: 'green', title: 'نصب و تحویل', text: 'نصب تخصصی معمولاً در یک روز، همراه با آموزش و گارانتی ۱۰ ساله.' },
]

const testimonials = [
  {
    name: 'مهندس رضایی', role: 'مدیر دفتر معماری',
    text: 'برای اتاق جلسات‌مان پارتیشن هوشمند نصب کرد؛ کیفیت فیلم و دقت نصب فوق‌العاده بود. حالا حریم جلسات با یک دکمه.',
    color: 'blue',
  },
  {
    name: 'خانم موسوی', role: 'مالک ویلا لوکس',
    text: 'شیشه‌های سالن با ریموت مات می‌شوند؛ نه پرده می‌خواهد نه سرویس. مهمان‌ها همیشه تعجب می‌کنند!',
    color: 'purple',
  },
  {
    name: 'دکتر کاظمی', role: 'مدیر کلینیک',
    text: 'برای اتاق معاینه‌ها انتخاب درستی بود؛ هم بهداشتی هم حریم بیمار کامل حفظ می‌شود. پیش‌فاکتور هم ظرف یک روز آمد.',
    color: 'green',
  },
]

const faqs = [
  { q: 'فیلم هوشمند چطور کار می‌کند؟', a: 'بدون برق، بلورهای مایع نور را پراکنده می‌کنند و فیلم مات می‌شود؛ با ولتاژ پایین شفاف می‌شود. تغییر آنی است.' },
  { q: 'روی شیشه موجود هم نصب می‌شود؟', a: 'بله؛ فیلم چسبی ما رتروفیت روی شیشه فعلی است و نیازی به تعویض شیشه نیست.' },
  { q: 'گارانتی چقدر است؟', a: 'همه محصولات با گارانتی ۱۰ ساله فلمبیس و پشتیبانی تیم خودمان عرضه می‌شوند.' },
  { q: 'قیمت را چطور بگیرم؟', a: 'از طریق فرم پایین صفحه ابعاد را بفرستید؛ حداکثر ظرف ۴۸ ساعت پیش‌فاکتور کامل می‌دهیم.' },
]

const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

const inputStyle = { width: '100%' } as const

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <div className="n-faq">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div key={faq.q} className={`n-faq-item ${isOpen ? 'is-open' : ''}`}>
            <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen}>
              <span>{faq.q}</span>
              <span className="n-faq-sign" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p>{faq.a}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default function Sections() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || ''),
      phone: String(data.get('phone') || '').replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))),
      email: '',
      projectType: 'other',
      product: '',
      area: String(data.get('area') || ''),
      message: String(data.get('message') || ''),
      consent: true,
      sampleKit: false,
    }
    if (payload.name.trim().length < 2 || !/^(\+98|0)?9\d{9}$/.test(payload.phone)) {
      setStatus('error')
      return
    }
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
      {/* قابلیت‌ها */}
      <section id="features" className="n-section">
        <div className="n-container">
          <p className="n-kicker">قابلیت‌های انحصاری</p>
          <h2 className="n-title">هر چیزی که برای <span className="n-grad-text">هوشمندسازی فضا</span> نیاز دارید</h2>
          <p className="n-lead">از حریم لحظه‌ای تا صرفه انرژی — همه در یک راهکار یکپارچه.</p>
          <ul className="n-features">
            {features.map((feature) => (
              <li key={feature.title} className={`n-feature n-c-${feature.color}`}>
                <span className="n-feature-icon"><feature.icon size={22} aria-hidden="true" /></span>
                <strong>{feature.title}</strong>
                <p>{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* مراحل کار */}
      <section id="how" className="n-section n-section-tint">
        <div className="n-container">
          <p className="n-kicker">چطور کار می‌کند؟</p>
          <h2 className="n-title">در سه قدم ساده، فضای خود را هوشمند کنید</h2>
          <ol className="n-steps">
            {steps.map((step, index) => (
              <li key={step.title} className={`n-step n-c-${step.color}`}>
                <span className="n-step-num">{persianDigits[index + 1]}</span>
                <span className="n-feature-icon"><step.icon size={22} aria-hidden="true" /></span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* نظر مشتریان */}
      <section id="testimonials" className="n-section">
        <div className="n-container">
          <p className="n-kicker">نظر مشتریان</p>
          <h2 className="n-title">مشتریان فلمبیس چه می‌گویند</h2>
          <ul className="n-testimonials">
            {testimonials.map((item) => (
              <li key={item.name} className={`n-testimonial n-c-${item.color}`}>
                <MessageSquareQuote size={22} aria-hidden="true" />
                <p>{item.text}</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* سوالات متداول */}
      <section id="faq" className="n-section n-section-tint">
        <div className="n-container n-container-narrow">
          <p className="n-kicker">سؤالات متداول</p>
          <h2 className="n-title">پاسخ پرتکرارترین پرسش‌ها</h2>
          <Faq />
        </div>
      </section>

      {/* CTA + فرم */}
      <section id="quote" className="n-section">
        <div className="n-container">
          <div className="n-cta-card">
            <div className="n-cta-copy">
              <p className="n-kicker n-kicker-light">آماده شروعید؟</p>
              <h2>امروز یک تحول بزرگ برای فضای شما</h2>
              <p>
                شماره و ابعاد تقریبی را بفرستید؛ کارشناسان فلمبیس حداکثر ظرف ۴۸ ساعت پیش‌فاکتور کامل ارائه می‌کنند.
                مشاوره و اندازه‌گیری اولیه رایگان است.
              </p>
              <ul className="n-cta-points">
                <li><CheckCircle2 size={16} aria-hidden="true" />مشاوره و بازدید رایگان</li>
                <li><CheckCircle2 size={16} aria-hidden="true" />پیش‌فاکتور ظرف ۴۸ ساعت</li>
                <li><CheckCircle2 size={16} aria-hidden="true" />گارانتی ۱۰ ساله و نصب تخصصی</li>
              </ul>
              <a href="tel:02112345678" className="n-btn n-btn-white"><Phone size={16} aria-hidden="true" /><bdi>۰۲۱-۱۲۳۴۵۶۷۸</bdi></a>
            </div>
            <div className="n-cta-form-wrap">
              {status === 'success' ? (
                <div className="n-form-success">
                  <CheckCircle2 size={44} aria-hidden="true" />
                  <h3>درخواست شما ثبت شد</h3>
                  <p>کارشناسان فلمبیس حداکثر ظرف ۴۸ ساعت با شما تماس می‌گیرند.</p>
                </div>
              ) : (
                <form className="n-form" onSubmit={handleSubmit} noValidate>
                  <h3>درخواست استعلام قیمت</h3>
                  <label>
                    <span>نام و نام خانوادگی *</span>
                    <input name="name" type="text" required style={inputStyle} />
                  </label>
                  <label>
                    <span>شماره موبایل *</span>
                    <input name="phone" type="tel" dir="ltr" required placeholder="09xxxxxxxxx" style={inputStyle} />
                  </label>
                  <label>
                    <span>ابعاد تقریبی / متراژ (اختیاری)</span>
                    <input name="area" type="text" placeholder="مثلاً: ۴ پنجره ۲×۱.۵ متر" style={inputStyle} />
                  </label>
                  <label>
                    <span>توضیح پروژه</span>
                    <textarea name="message" rows={3} placeholder="کمی از فضا و هدفتان بنویسید…" style={inputStyle} />
                  </label>
                  {status === 'error' && <p className="n-form-error">نام و شماره موبایل معتبر را وارد کنید.</p>}
                  <button type="submit" className="n-btn n-btn-primary n-btn-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? <Loader2 size={16} className="n-spin" aria-hidden="true" /> : <ArrowLeft size={16} aria-hidden="true" />}
                    {status === 'sending' ? 'در حال ارسال…' : 'ارسال درخواست'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="n-footer">
        <div className="n-container n-footer-grid">
          <div>
            <div className="n-logo n-logo-footer">
              <span className="n-logo-mark" aria-hidden="true" />
              <span className="n-logo-text"><strong>فلمبیس</strong><small>شیشه هوشمند</small></span>
            </div>
            <p>تأمین‌کننده و مجری شیشه هوشمند و فیلم PDLC در ایران — از اندازه‌گیری تا نصب و پشتیبانی.</p>
          </div>
          <div>
            <h4>دسترسی سریع</h4>
            <ul>
              <li><a href="/demo5#features">قابلیت‌ها</a></li>
              <li><a href="/demo5#how">مراحل کار</a></li>
              <li><a href="/demo5#faq">سؤالات متداول</a></li>
              <li><Link href="/">صفحه اصلی</Link></li>
            </ul>
          </div>
          <div>
            <h4>تماس</h4>
            <ul className="n-footer-contact">
              <li><Phone size={14} aria-hidden="true" /><bdi>۰۲۱-۱۲۳۴۵۶۷۸ | ۰۹۱۲-۳۴۵۶۷۸۹</bdi></li>
              <li><Mail size={14} aria-hidden="true" /><bdi dir="ltr">info@filmbase.ir</bdi></li>
              <li><MapPin size={14} aria-hidden="true" /><span>تهران، ولی‌عصر، کوچه ۱۲، پلاک ۴۵، واحد ۳</span></li>
            </ul>
          </div>
        </div>
        <div className="n-footer-bottom">
          <span>© ۱۴۰۴ فلمبیس — تمامی حقوق محفوظ است.</span>
          <span><Link href="/privacy">حریم خصوصی</Link> · <Link href="/terms">شرایط استفاده</Link></span>
        </div>
      </footer>
    </>
  )
}
