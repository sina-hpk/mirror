'use client'

import { Shield, Sun, Volume2, Hammer, CheckCheck, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Shield,
    title: 'حفظ حریم خصوصی',
    description: 'تغییر لحظه‌ای از حالت شفاف به مات با یک کلید، ریموت، اپلیکیشن یا دستور صوتی. ایده‌آل برای اتاق‌های ملاقات، حمام‌ها و اتاق‌خواب.',
    highlight: 'کنترل کامل نور و دید',
  },
  {
    icon: Sun,
    title: 'عایق حرارتی (UV/IR)',
    description: 'مسدودکردن تا ۹۹٪ اشعه UV و ۹۰٪ اشعه IR. کاهش بار حرارتی، صرفه‌جویی در انرژی و حفاظت از مبلمان و پوست.',
    highlight: 'صرفه‌جویی تا ۳۰٪ انرژی',
  },
  {
    icon: Volume2,
    title: 'عایق صدا',
    description: 'لایه PDLC/PNLC به عنوان عایق صوتی عمل می‌کند و تا ۳۵ دسی بل کاهش صدای محیطی را فراهم می‌کند.',
    highlight: 'کاهش ۳۵ دسی بل صدا',
  },
  {
    icon: Hammer,
    title: 'دوام و امنیت بالا',
    description: 'شیشه لایه‌بندی شده ایمنی (Laminated) که در صورت شکستن تکه‌تکه نمی‌شود. مقاومت در برابر ضربه و شرایط جوی سخت.',
    highlight: 'استاندارد ایمنی EN 12600',
  },
  {
    icon: CheckCheck,
    title: 'نصب آسان و بدون زحمت',
    description: 'امکان نصب روی شیشه‌های موجود (Retrofit) بدون نیاز به تعویض کل قاب. فیلم خودچسب با دوام بالا.',
    highlight: 'نصب در کمتر از ۱ ساعت',
  },
  {
    icon: Layers,
    title: 'تکنولوژی PNLC پیشرفته',
    description: 'ورژن پیشرفته PNLC با وضوح بالا در حالت روشن، مصرف انرژی پایین‌تر و زاویه دید وسیع‌تر نسبت به PDLC سنتی.',
    highlight: 'وضوح ۹۹٪ در حالت روشن',
  },
]

export default function Features() {
  return (
    <section id="features" className="section relative overflow-hidden bg-surface-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-primary-300/60 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary-200/30 blur-3xl" aria-hidden="true" />
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
            مزایا و ویژگی‌های منحصر به فرد
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-surface-900 tracking-tight mb-4">
            چرا شیشه هوشمند
            <br />
            <span className="gradient-text">فلمبیس</span>
            ؟
          </h2>
          <p className="text-lg text-surface-600 leading-relaxed">
            ترکیب تکنولوژی پیشرفته PDLC/PNLC با کیفیت برتر و خدمات نصب تخصصی، تجربه‌ای بی‌نظیر از راحتی، امنیت و زیبایی می‌سازد.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 md:p-8 group"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 group-hover:from-primary-500 group-hover:to-accent-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary-500/30 group-hover:-translate-y-0.5 transition-all duration-300">
                  <feature.icon className="h-7 w-7" aria-hidden="true" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-surface-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-surface-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-primary-600 pt-4 border-t border-surface-100">
                <CheckCheck className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>{feature.highlight}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Tech Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="card p-6 md:p-8 overflow-hidden">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-surface-900 mb-2">
                مقایسه تکنولوژی‌های
                <span className="gradient-text"> PDLC vs PNLC</span>
              </h3>
              <p className="text-surface-600 max-w-2xl mx-auto">
                درک تفاوت‌ها برای انتخاب بهترین گزینه برای پروژه‌تان ضروری است
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right" role="table">
                <thead>
                  <tr className="border-b border-surface-200">
                    <th className="pb-4 text-left font-semibold text-surface-900">ویژگی</th>
                    <th className="pb-4 px-4 text-center font-semibold text-surface-900">PDLC کلاسیک</th>
                    <th className="pb-4 px-4 text-center font-semibold text-surface-900">PNLC پیشرفته (فلمبیس)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  <tr className="hover:bg-surface-50">
                    <td className="py-4 font-medium text-surface-900">وضوح در حالت روشن</td>
                    <td className="py-4 px-4 text-center text-surface-600">حدود ۸۵-۹۰٪</td>
                    <td className="py-4 px-4 text-center text-primary-600 font-semibold">۹۹٪ (شیشه معمولی)</td>
                  </tr>
                  <tr className="hover:bg-surface-50">
                    <td className="py-4 font-medium text-surface-900">مات بودن در حالت خاموش</td>
                    <td className="py-4 px-4 text-center text-surface-600">کاملاً مات</td>
                    <td className="py-4 px-4 text-center text-primary-600 font-semibold">کاملاً مات</td>
                  </tr>
                  <tr className="hover:bg-surface-50">
                    <td className="py-4 font-medium text-surface-900">مصرف انرژی</td>
                    <td className="py-4 px-4 text-center text-surface-600">متوسط</td>
                    <td className="py-4 px-4 text-center text-primary-600 font-semibold">کمتر تا ۴۰٪</td>
                  </tr>
                  <tr className="hover:bg-surface-50">
                    <td className="py-4 font-medium text-surface-900">زاویه دید</td>
                    <td className="py-4 px-4 text-center text-surface-600">محدود</td>
                    <td className="py-4 px-4 text-center text-primary-600 font-semibold">وسیع (۱۷۰ درجه)</td>
                  </tr>
                  <tr className="hover:bg-surface-50">
                    <td className="py-4 font-medium text-surface-900">سرعت سوئیچینگ</td>
                    <td className="py-4 px-4 text-center text-surface-600">۵۰-۱۰۰ میلی‌ثانیه</td>
                    <td className="py-4 px-4 text-center text-primary-600 font-semibold">&lt; ۳۰ میلی‌ثانیه</td>
                  </tr>
                  <tr className="hover:bg-surface-50">
                    <td className="py-4 font-medium text-surface-900">دما عملیاتی</td>
                    <td className="py-4 px-4 text-center text-surface-600">-۲۰ تا ۶۰℃</td>
                    <td className="py-4 px-4 text-center text-primary-600 font-semibold">-۳۰ تا ۹۵℃</td>
                  </tr>
                  <tr className="hover:bg-surface-50">
                    <td className="py-4 font-medium text-surface-900">عمر مفید</td>
                    <td className="py-4 px-4 text-center text-surface-600">۱۰-۱۵ سال</td>
                    <td className="py-4 px-4 text-center text-primary-600 font-semibold">۱۵-۲۰ سال</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-surface-500 mb-4">
                * تمام محصولات فلمبیس با تکنولوژی PNLC نسل جدید تولید می‌شوند
              </p>
              <a
                href="#contact"
                className="btn-outline inline-flex"
              >
                مشاوره برای انتخاب بهترین تکنولوژی
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}