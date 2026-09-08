'use client'

import { useState } from 'react'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'

const leadSchema = z.object({
  name: z.string().min(2, 'نام باید حداقل ۲ کاراکتر باشد').max(100, 'نام نباید بیشتر از ۱۰۰ کاراکتر باشد'),
  phone: z.string().min(10, 'شماره تماس معتبر وارد کنید').regex(/^(\+98|0)?9\d{9}$/, 'فرمت شماره موبایل ایران صحیح نیست'),
  email: z.string().email('ایمیل معتبر وارد کنید').optional().or(z.literal('')),
  projectType: z.enum(['residential', 'commercial', 'automotive', 'healthcare', 'retail', 'other'], {
    required_error: 'نوع پروژه را انتخاب کنید',
  }),
  area: z.string().max(50, 'مساحت نباید بیشتر از ۵۰ کاراکتر باشد').optional(),
  message: z.string().min(20, 'توضیحات باید حداقل ۲۰ کاراکتر باشد').max(1000, 'توضیحات نباید بیشتر از ۱۰۰۰ کاراکتر باشد'),
  sampleKit: z.boolean().default(false),
  consent: z.boolean().refine(Boolean, 'باید با شرایط موافقت کنید'),
})

type LeadData = z.infer<typeof leadSchema>

const projectTypes = [
  { value: 'residential', label: 'مسکونی (ویلا، آپارتمان، خانه)' },
  { value: 'commercial', label: 'تجاری و اداری (دفتر، مجتمع، هتل)' },
  { value: 'automotive', label: 'خودرو و حمل‌ونقل' },
  { value: 'healthcare', label: 'بیمارستان و کلینیک' },
  { value: 'retail', label: 'مغازه و خرده‌فروشی' },
  { value: 'other', label: 'سایر' },
] as const

const fieldClass = 'mt-2 w-full rounded-xl border border-[#c7ded8] bg-white px-4 py-3 text-sm text-[#071d2b] outline-none transition placeholder:text-slate-400 focus:border-[#0b8f70] focus:ring-4 focus:ring-[#0b8f70]/10 disabled:cursor-not-allowed disabled:opacity-60'
const labelClass = 'block text-sm font-semibold text-[#102b36]'

export default function LeadSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadData>({
    resolver: zodResolver(leadSchema),
    defaultValues: { projectType: 'residential', email: '', area: '', sampleKit: false, consent: false },
  })

  const onSubmit = async (data: LeadData) => {
    setStatus('submitting')
    setServerError('')
    try {
      const response = await fetch('/lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error(`lead_failed_${response.status}`)
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
      setServerError('ارسال فرم انجام نشد. دوباره تلاش کنید یا با شماره ۰۲۱-۱۲۳۴۵۶۷۸ تماس بگیرید.')
    }
  }

  const errorFor = (name: keyof LeadData) => errors[name] ? `${name}-error` : undefined

  return (
    <section id="contact" dir="rtl" className="relative overflow-hidden bg-[#eaf7f3] py-16 text-right sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-[#4fc9aa]/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#0b8f70]/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:px-12">
        <div className="self-start lg:sticky lg:top-24">
          <span className="inline-flex rounded-full border border-[#0b8f70]/20 bg-white/70 px-4 py-2 text-xs font-bold text-[#08745c]">شروع یک همکاری</span>
          <h2 className="mt-5 text-3xl font-black leading-tight text-[#061d2b] sm:text-4xl lg:text-5xl">
            برای پروژه‌تان یک مسیر روشن بسازیم.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#48636a]">
            جزئیات پروژه را برای تیم فلمبیس بفرستید تا برای مشاوره و پیش‌فاکتور با شما در ارتباط باشیم.
          </p>
          <address className="mt-8 space-y-3 not-italic">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-2xl border border-[#bddbd3] bg-white/65 p-4 text-sm text-[#284750] transition hover:border-[#0b8f70]/45">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0b8f70]" aria-hidden="true" />
              <span><strong className="block text-[#0a2936]">دفتر مرکزی</strong>تهران، خیابان ولی‌عصر، کوچه ۱۲، پلاک ۴۵، واحد ۳</span>
            </a>
            <a href="tel:+982112345678" className="flex items-start gap-3 rounded-2xl border border-[#bddbd3] bg-white/65 p-4 text-sm text-[#284750] transition hover:border-[#0b8f70]/45">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#0b8f70]" aria-hidden="true" />
              <span><strong className="block text-[#0a2936]">تلفن</strong><bdi>۰۲۱-۱۲۳۴۵۶۷۸ | ۰۹۱۲-۳۴۵۶۷۸۹</bdi></span>
            </a>
            <a href="mailto:info@filmbase.ir" className="flex items-start gap-3 rounded-2xl border border-[#bddbd3] bg-white/65 p-4 text-sm text-[#284750] transition hover:border-[#0b8f70]/45">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#0b8f70]" aria-hidden="true" />
              <span><strong className="block text-[#0a2936]">ایمیل</strong><bdi>info@filmbase.ir | sales@filmbase.ir</bdi></span>
            </a>
          </address>
        </div>

        <div className="rounded-[2rem] border border-white/80 bg-white p-5 shadow-[0_24px_70px_rgba(5,42,52,0.12)] sm:p-8">
          <div className="mb-7">
            <h3 className="text-2xl font-black text-[#071d2b]">فرم درخواست مشاوره و پیش‌فاکتور</h3>
            <p className="mt-2 text-sm leading-7 text-[#5a7479]">فیلدهای ستاره‌دار الزامی هستند.</p>
          </div>

          {status === 'success' ? (
            <div className="flex min-h-96 flex-col items-center justify-center text-center" role="status" aria-live="polite">
              <CheckCircle2 className="h-14 w-14 text-[#0b8f70]" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-[#071d2b]">درخواست شما با موفقیت ارسال شد.</h3>
              <p className="mt-2 text-sm text-[#5a7479]">اطلاعات شما برای پیگیری ثبت شد.</p>
              <button type="button" onClick={() => setStatus('idle')} className="mt-6 rounded-xl border border-[#0b8f70] px-5 py-2.5 text-sm font-bold text-[#08745c] transition hover:bg-[#eaf7f3]">ثبت درخواست جدید</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-describedby={serverError ? 'lead-status' : undefined}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="نام و نام خانوادگی" required error={errors.name?.message} id="name">
                  <input id="name" autoComplete="name" className={fieldClass} {...register('name')} aria-invalid={!!errors.name} aria-describedby={errorFor('name')} />
                </Field>
                <Field label="شماره موبایل" required error={errors.phone?.message} id="phone">
                  <input id="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" className={`${fieldClass} text-left`} placeholder="09123456789" {...register('phone')} aria-invalid={!!errors.phone} aria-describedby={errorFor('phone')} />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="ایمیل (اختیاری)" error={errors.email?.message} id="email">
                  <input id="email" type="email" autoComplete="email" dir="ltr" className={`${fieldClass} text-left`} placeholder="name@example.com" {...register('email')} aria-invalid={!!errors.email} aria-describedby={errorFor('email')} />
                </Field>
                <Field label="مساحت تقریبی، متر مربع (اختیاری)" error={errors.area?.message} id="area">
                  <input id="area" inputMode="decimal" className={fieldClass} placeholder="مثلاً ۱۵۰" {...register('area')} aria-invalid={!!errors.area} aria-describedby={errorFor('area')} />
                </Field>
              </div>
              <Field label="نوع پروژه" required error={errors.projectType?.message} id="projectType">
                <select id="projectType" className={fieldClass} {...register('projectType')} aria-invalid={!!errors.projectType} aria-describedby={errorFor('projectType')}>
                  {projectTypes.map((type) => <option key={type.value} value={type.value}>{type.label}</option>)}
                </select>
              </Field>
              <Field label="توضیحات پروژه" required error={errors.message?.message} id="message">
                <textarea id="message" rows={5} maxLength={1000} className={`${fieldClass} resize-y`} placeholder="درباره ابعاد، تعداد، محل نصب و نیاز پروژه بنویسید..." {...register('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : 'message-hint'} />
                {!errors.message && <p id="message-hint" className="mt-2 text-xs text-[#6b8387]">حداقل ۲۰ و حداکثر ۱۰۰۰ کاراکتر</p>}
              </Field>
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#c7ded8] bg-[#f3faf8] p-4 text-sm leading-7 text-[#284750]">
                <input type="checkbox" className="mt-1.5 h-4 w-4 shrink-0 accent-[#0b8f70]" {...register('sampleKit')} />
                <span><strong className="text-[#08745c]">به VIP Sample Kit علاقه‌مندم.</strong><br />در زمان پیگیری، اطلاعات این محصول را هم دریافت می‌کنم.</span>
              </label>
              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-7 text-[#48636a]">
                  <input type="checkbox" className="mt-1.5 h-4 w-4 shrink-0 accent-[#0b8f70]" {...register('consent')} aria-invalid={!!errors.consent} aria-describedby={errorFor('consent')} />
                  <span>با <Link href="/terms" className="font-semibold text-[#08745c] underline-offset-4 hover:underline">شرایط استفاده</Link> و <Link href="/privacy" className="font-semibold text-[#08745c] underline-offset-4 hover:underline">حریم خصوصی</Link> موافقم و اجازه می‌دهم فلمبیس برای پیگیری درخواست با من تماس بگیرد. <span className="text-red-600" aria-hidden="true">*</span></span>
                </label>
                {errors.consent && <ErrorText id="consent-error">{errors.consent.message}</ErrorText>}
              </div>
              <button type="submit" disabled={status === 'submitting'} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08745c] px-6 py-4 font-bold text-white shadow-lg shadow-[#08745c]/20 transition hover:bg-[#065d4b] focus:outline-none focus:ring-4 focus:ring-[#0b8f70]/25 disabled:cursor-wait disabled:opacity-70">
                {status === 'submitting' ? <><Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />در حال ارسال...</> : <><Send className="h-5 w-5" aria-hidden="true" />ارسال درخواست</>}
              </button>
              <div id="lead-status" className="min-h-6" role="status" aria-live="polite" aria-atomic="true">
                {serverError && <p className="flex items-start gap-2 text-sm text-red-700"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{serverError}</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, required, error, children }: { label: string; id: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return <div><label htmlFor={id} className={labelClass}>{label} {required && <span className="text-red-600" aria-hidden="true">*</span>}</label>{children}{error && <ErrorText id={`${id}-error`}>{error}</ErrorText>}</div>
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return <p id={id} className="mt-2 flex items-start gap-1.5 text-xs font-medium text-red-700" role="alert"><AlertCircle className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />{children}</p>
}
