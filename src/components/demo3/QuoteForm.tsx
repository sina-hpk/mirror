'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

const projectTypes = [
  { value: 'residential', label: 'مسکونی' },
  { value: 'commercial', label: 'تجاری و اداری' },
  { value: 'healthcare', label: 'درمانی' },
  { value: 'retail', label: 'ریتیل و شوروم' },
  { value: 'automotive', label: 'خودرو' },
  { value: 'other', label: 'سایر' },
]

const inputStyle = { width: '100%' } as const

export default function QuoteForm() {
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
      area: String(data.get('area') || ''),
      message: String(data.get('message') || ''),
      consent: data.get('consent') === 'on',
      sampleKit: data.get('sampleKit') === 'on',
    }

    const nextErrors: Record<string, string> = {}
    if (payload.name.trim().length < 2) nextErrors.name = 'نام را وارد کنید'
    if (!/^(\+98|0)?9\d{9}$/.test(payload.phone)) nextErrors.phone = 'شماره موبایل معتبر وارد کنید'
    if (payload.message.trim().length < 20) nextErrors.message = 'توضیح پروژه حداقل ۲۰ کاراکتر باشد'
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

  if (status === 'success') {
    return (
      <div className="k-form k-form-success">
        <CheckCircle2 size={42} aria-hidden="true" />
        <h3>درخواست شما ثبت شد</h3>
        <p>کارشناسان فلمبیس حداکثر ظرف ۴۸ ساعت برای هماهنگی دموی حضوری با شما تماس می‌گیرند.</p>
      </div>
    )
  }

  return (
    <form className="k-form" onSubmit={handleSubmit} noValidate>
      <h3>درباره پروژه‌تان بگویید</h3>
      <div className="k-form-grid">
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
        <label className="k-form-full">
          <span>ابعاد تقریبی شیشه‌ها / متراژ (اختیاری)</span>
          <input name="area" type="text" placeholder="مثلاً: ۴ عدد پارتیشن ۲×۲.۵ متر" style={inputStyle} />
        </label>
        <label className="k-form-full">
          <span>توضیح پروژه *</span>
          <textarea name="message" rows={4} required placeholder="کمی از فضا و هدفتان بنویسید…" style={inputStyle} />
          {errors.message && <em>{errors.message}</em>}
        </label>
      </div>
      <label className="k-check">
        <input name="consent" type="checkbox" required />
        <span>با <a href="/terms">شرایط استفاده</a> و <a href="/privacy">حریم خصوصی</a> موافقم و اجازه می‌دهم فلمبیس برای پیگیری درخواست با من تماس بگیرد. *</span>
      </label>
      {errors.consent && <em className="k-check-error">{errors.consent}</em>}
      <label className="k-check">
        <input name="sampleKit" type="checkbox" />
        <span>در دموی حضوری، نمونه واقعی محصولات هم بیاورید</span>
      </label>
      {status === 'error' && <p className="k-form-error">ارسال انجام نشد. دوباره تلاش کنید یا با <bdi>۰۲۱-۱۲۳۴۵۶۷۸</bdi> تماس بگیرید.</p>}
      <button type="submit" className="k-btn k-btn-gold k-btn-submit" disabled={status === 'sending'}>
        {status === 'sending' ? <Loader2 size={17} className="k-spin" aria-hidden="true" /> : null}
        {status === 'sending' ? 'در حال ارسال…' : 'درخواست دمو و پیش‌فاکتور'}
      </button>
    </form>
  )
}
