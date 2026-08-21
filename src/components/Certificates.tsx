'use client'

import { Shield, Award, CheckCircle, FileText, Globe, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const certificates = [
  {
    name: 'CE Marking',
    standard: 'Radio Equipment Directive 2014/53/EU',
    description: 'انطباق با الزامات ایمنی، سازگاری الکترومغناطیسی و طیف باند رادیویی در اتحادیه اروپا',
    scope: 'Article 3.1a (Health & Safety), 3.1b (EMC), 3.2 (Radio Spectrum)',
    labs: ['EN 62479:2010', 'EN 50663:2017', 'EN IEC 62368-1:2024+A11:2024'],
    icon: Shield,
    color: 'from-blue-500 to-blue-700',
    verified: true,
  },
  {
    name: 'RoHS Compliance',
    standard: 'Directive 2011/65/EU + (EU) 2015/863',
    description: 'محدودیت مواد خطرناک در تجهیزات الکتریکی و الکترونیکی (سرب، جیوه، کادمیوم، کروم شش‌ظرفیتی، PBB، PBDE و فتالات‌ها)',
    scope: 'تمام مواد ۱۰ ماده محدود شده زیر آستانه مجاز',
    labs: ['EN IEC 63000:2018'],
    icon: Award,
    color: 'from-green-500 to-green-700',
    verified: true,
  },
  {
    name: 'EMC Compliance',
    standard: 'ETSI EN 301 489-1 V2.2.3 / ETSI EN 301 489-3 V2.3.2',
    description: 'سازگاری الکترومغناطیسی برای تجهیزات رادیویی - عدم تداخل با سایر تجهیزات',
    scope: 'Emission (EN 55032) & Immunity (EN 55035, EN 61000-3-3)',
    labs: ['WTH25H11296966W002', 'WTH25H11296965E'],
    icon: Globe,
    color: 'from-purple-500 to-purple-700',
    verified: true,
  },
  {
    name: 'Radio Spectrum',
    standard: 'ETSI EN 300 220-1 V3.1.1 / ETSI EN 300 220-2 V3.2.1',
    description: 'استفاده موثر از طیف باند رادیویی - فرکانس ۴۳۳.۹۲ MHz، قدرت ۰.۸ dBm ERP',
    scope: 'Short Range Devices (SRD) - درب‌های گاراژ، کنترل از راه دور',
    labs: ['WTH25H11296966W001'],
    icon: FileText,
    color: 'from-orange-500 to-orange-700',
    verified: true,
  },
  {
    name: 'Safety (LVD)',
    standard: 'EN IEC 62368-1:2024 + A11:2024',
    description: 'ایمنی تجهیزات صوتی/تصویری، فناوری اطلاعات و ارتباطات - کلاس خطر پایه',
    scope: 'جریان نشتی، عایق‌بندی، دما، استحکام مکانیکی، آتش‌سوزی',
    labs: ['WTH25H11296967Y'],
    icon: Lock,
    color: 'from-red-500 to-red-700',
    verified: true,
  },
  {
    name: 'ISO 9001:2015',
    standard: 'Quality Management System',
    description: 'سیستم مدیریت کیفیت - تضمین کنترل فرآیندهای تولید، تست و خدمات نصب',
    scope: 'طراحی، تولید، نصب و سرویس پس از فروش فیلم‌های هوشمند PDLC/PNLC',
    labs: ['پایه شده بر اصول مدیریت ریسک و تفکر فرآیندمحور'],
    icon: CheckCircle,
    color: 'from-indigo-500 to-indigo-700',
    verified: true,
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="section relative overflow-hidden bg-surface-50">
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
            اعتماد و اعتبار بین‌المللی
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-surface-900 tracking-tight mb-4">
            گواهینامه‌ها و استانداردهای
            <br />
            <span className="gradient-text">فلمبیس</span>
          </h2>
          <p className="text-lg text-surface-600 leading-relaxed">
            تمام محصولات فلمبیس در آزمایشگاه‌های معتبر بین‌المللی (Waltek/HCT) تست شده و مجوزهای CE، RoHS و استانداردهای ایمنی را دارا هستند.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card p-6 md:p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-transparent via-primary-500/10 to-primary-500/20 rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              <div className="relative flex items-center gap-4 mb-6">
                <div className={`flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-surface-900 group-hover:text-primary-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-surface-500">{cert.standard}</p>
                </div>
              </div>

              {cert.verified && (
                <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium mb-4">
                  <CheckCircle className="h-4 w-4" aria-hidden="true" />
                  <span>تایید شده و معتبر</span>
                </div>
              )}

              <p className="text-sm text-surface-600 mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="mb-4 p-3 rounded-xl bg-surface-50 border border-surface-100">
                <p className="text-xs font-medium text-surface-700 mb-1">محدوده اعتبارسنجی:</p>
                <p className="text-xs text-surface-600">{cert.scope}</p>
              </div>

              <div className="pt-4 border-t border-surface-100">
                <p className="text-xs font-medium text-surface-700 mb-2">استانداردهای تست:</p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.labs.map((lab, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-xs bg-primary-50 text-primary-700 border border-primary-100 font-mono"
                    >
                      {lab}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Verification Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="card p-6 md:p-8 border-0 bg-surface-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />
            <div className="absolute -top-20 right-1/4 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-medium mb-4">
                  <Shield className="h-4 w-4" aria-hidden="true" />
                  <span>احتمالی‌سازی انطباق (Presumption of Conformity)</span>
                </div>
                <p className="text-surface-300 leading-relaxed">
                  استفاده از استانداردهای هارمونیزه اتحادیه اروپا باعث پیش‌فرض انطباق با الزامات اساسی دستورالعمل‌های UE می‌شود.
                </p>
              </div>
              <div className="text-center border-y md:border-y-0 md:border-x border-surface-700 py-6 md:py-0">
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">۱۰+</div>
                <div className="text-surface-400">استاندارد بین‌المللی</div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-surface-300 leading-relaxed mb-4">
                  تمام گواهینامه‌ها از آزمایشگاه معتبر Waltek Testing Group (HCT) صادر شده و قابل تأیید از طریق شماره ردیابی هستند.
                </p>
                <a
                  href="/certificates"
                  className="btn border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 inline-flex"
                >
                  مشاهده سندهای کامل
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}