'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Building2, Home, Car, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const formSchema = z.object({
  name: z.string().min(2, 'نام باید حداقل ۲ کاراکتر باشد'),
  phone: z.string().min(10, 'شماره تماس معتبر وارد کنید').regex(/^(\+98|0)?9\d{9}$/, 'فرمت شماره موبایل ایران صحیح نیست'),
  email: z.string().email('ایمیل معتبر وارد کنید').optional().or(z.literal('')),
  projectType: z.enum(['residential', 'commercial', 'automotive', 'healthcare', 'retail', 'other'], {
    required_error: 'نوع پروژه را انتخاب کنید',
  }),
  area: z.string().optional(),
  message: z.string().min(20, 'توضیحات باید حداقل ۲۰ کاراکتر باشد').max(1000, 'توضیحات نباید بیشتر از ۱۰۰۰ کاراکتر باشد'),
  consent: z.boolean().refine(val => val === true, 'باید با شرایط موافقت کنید'),
  sampleKit: z.boolean().default(false),
})

type FormData = z.infer<typeof formSchema>

const projectTypes = [
  { value: 'residential', label: 'مسکونی (ویلا، آپارتمان، خانه)' },
  { value: 'commercial', label: 'تجاری/اداری (دفتر، مجتمع، هتل)' },
  { value: 'automotive', label: 'خودرو و حمل‌ونقل' },
  { value: 'healthcare', label: 'بیمارستان و کلینیک' },
  { value: 'retail', label: 'مغازه و ریتیل' },
  { value: 'other', label: 'سایر' },
]

export default function ContactForm({ initialProduct }: { initialProduct?: string }) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: 'residential',
      sampleKit: initialProduct === 'vip-sample-kit',
      consent: false,
    },
  })

  useEffect(() => {
    try {
      if (localStorage.getItem('filmbase_kit') === '1') {
        setValue('sampleKit', true)
        localStorage.removeItem('filmbase_kit')
      }
    } catch {}
  }, [setValue])

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error(`lead_failed_${res.status}`)
      }

      setSubmitStatus('success')
      reset()
    } catch (err) {
      setSubmitStatus('error')
      setErrorMessage('خطا در ارسال فرم. لطفاً مجدد تلاش کنید یا با ما تماس بگیرید: ۰۲۱-۱۲۳۴۵۶۷۸')
    }
  }

  return (
    <section id="contact" className="section relative overflow-hidden bg-surface-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-primary-300/50 to-transparent" aria-hidden="true" />
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-light mb-5">
              در ارتباط باشید
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-surface-900 tracking-tight mb-6">
              درخواست
              <br />
              <span className="gradient-text">مشاوره و پیش‌فاکتور</span>
            </h2>
            <p className="text-lg text-surface-600 leading-relaxed mb-8">
              فرم را پر کنید تا کارشناسان فلمبیس در کمترین زمان با شما تماس بگیرند، نیازهای پروژه را بررسی کنند و پیش‌فاکتور اختصاصی ارسال نمایند.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {[
                { icon: MapPin, title: 'دفتر مرکزی', desc: 'تهران، خیابان ولی‌عصر، کوچه ۱۲، پلاک ۴۵، واحد ۳' },
                { icon: Phone, title: 'تلفن', desc: '۰۲۱-۱۲۳۴۵۶۷۸ | ۰۹۱۲-۳۴۵۶۷۸۹' },
                { icon: Mail, title: 'ایمیل', desc: 'info@filmbase.ir | sales@filmbase.ir' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 shadow-sm">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-surface-900">{item.title}</p>
                    <p className="text-sm text-surface-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="card p-6 bg-white">
              <h3 className="font-bold text-surface-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary-600" aria-hidden="true" />
                ساعات کاری
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-surface-600">شنبه - چهارشنبه</span>
                  <span className="font-medium text-surface-900">۸:۳۰ - ۱۷:۳۰</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-surface-600">پنج‌شنبه</span>
                  <span className="font-medium text-surface-900">۸:۳۰ - ۱۴:۰۰</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-surface-600">جمعه</span>
                  <span className="font-medium text-red-500">متعطل</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-surface-600">پشتیبانی فنی</span>
                  <span className="font-medium text-green-600">۲۴/۷</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card p-6 md:p-8 bg-white sticky top-24">
              <h3 className="text-xl font-bold text-surface-900 mb-6">فرم درخواست پیش‌فاکتور</h3>

              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                      <CheckCircle className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <h4 className="text-xl font-bold text-surface-900 mb-2">پیام شما با موفقیت ارسال شد</h4>
                    <p className="text-surface-600 mb-6">
                      کارشناسان ما در کمتر از ۳۰ دقیقه با شما تماس خواهند گرفت.
                      پیش‌فاکتور اختصاصی بر اساس نیازهای شما تهیه و ارسال می‌شود.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitStatus('idle')}
                      className="btn-outline"
                    >
                      ارسال درخواست جدید
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="label">
                        نام و نام خانوادگی <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="مثال: علی محمدی"
                        className="input"
                        {...register('name')}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="label">
                        شماره موبایل <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                        className="input"
                        {...register('phone')}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="label">
                        ایمیل (اختیاری)
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="مثال: ali@example.com"
                        className="input"
                        {...register('email')}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="label">
                        نوع پروژه <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="projectType"
                        className="input appearance-none bg-no-repeat bg-right select-arrow"
                        {...register('projectType')}
                        aria-invalid={!!errors.projectType}
                        aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                      >
                        <option value="">نوع پروژه را انتخاب کنید</option>
                        {projectTypes.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p id="projectType-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.projectType.message}
                        </p>
                      )}
                    </div>

                    {/* Area */}
                    <div>
                      <label htmlFor="area" className="label">
                        مساحت تقریبی (متر مربع) - اختیاری
                      </label>
                      <input
                        id="area"
                        type="text"
                        placeholder="مثال: ۱۵۰"
                        className="input"
                        {...register('area')}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="label">
                        توضیحات پروژه، نیازها و سؤالات <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="توضیح دهید: ابعاد شیشه‌ها، تعداد، مکان نصب، نوع کنترل مورد نظر (ریموت، اپ، کلید دیواری)، زمان‌بندی پروژه و..."
                        className="input resize-none"
                        {...register('message')}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      />
                      <p id="message-hint" className="mt-1.5 text-xs text-surface-400">
                        حداقل ۲۰ کاراکتر - هرچه جزئیات بیشتر، پیش‌فاکتور دقیق‌تر
                      </p>
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Sample Kit Checkbox */}
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-primary-50 border border-primary-100">
                      <input
                        type="checkbox"
                        id="sampleKit"
                        className="mt-1 h-4 w-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500"
                        {...register('sampleKit')}
                      />
                      <label htmlFor="sampleKit" className="text-sm text-surface-700 leading-relaxed cursor-pointer">
                        <span className="font-medium text-primary-700">افزودن VIP Sample Kit به سفارش</span> (۲,۵۰۰,۰۰۰ تومان)
                        <br />
                        شامل ۴ نوع فیلم، کنترلر هوشمند، ترانسفورماتور و کاتالوگ کامل. ارسال رایگان.
                      </label>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1 h-4 w-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500"
                        {...register('consent')}
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-surface-600 leading-relaxed cursor-pointer">
                        با
                        <a href="/privacy" className="text-primary-600 hover:underline ml-1">شرایط استفاده</a>
                        و
                        <a href="/privacy" className="text-primary-600 hover:underline ml-1">حریم خصوصی</a>
                        موافقم و اجازه می‌دهم فلمبیس برای پیگیری درخواست با من تماس بگیرد.
                        <span className="text-red-500">*</span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.consent.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="btn-primary w-full py-4 text-lg"
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                          در حال ارسال...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" aria-hidden="true" />
                          ارسال درخواست و دریافت پیش‌فاکتور
                        </>
                      )}
                    </button>

                    {errorMessage && (
                      <p className="text-center text-sm text-red-500 flex items-center justify-center gap-1" role="alert">
                        <AlertCircle className="h-4 w-4" aria-hidden="true" />
                        {errorMessage}
                      </p>
                    )}

                    <p className="text-center text-xs text-surface-400">
                      با ارسال فرم، شما موافق دریافت پیامک و ایمیل اطلاع‌رسانی از طرف فلمبیس هستید.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Clock icon component (inline since not in lucide)
function Clock({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

