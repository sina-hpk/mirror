import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Award, CheckCircle, FileText, Globe, Lock, Download } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'گواهینامه‌ها | فلمبیس',
  description: 'گواهینامه‌های بین‌المللی فلمبیس: CE، RoHS، EMC، ایمنی LVD و ISO 9001 برای شیشه‌های هوشمند PDLC/PNLC.',
}

const certificates = [
  {
    name: 'CE Marking',
    standard: 'Radio Equipment Directive 2014/53/EU',
    description: 'انطباق با الزامات ایمنی، سازگاری الکترومغناطیسی و طیف باند رادیویی در اتحادیه اروپا',
    scope: 'Article 3.1a (Health & Safety), 3.1b (EMC), 3.2 (Radio Spectrum)',
    labs: ['EN 62479:2010', 'EN 50663:2017', 'EN IEC 62368-1:2024+A11:2024'],
    icon: Shield,
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'RoHS Compliance',
    standard: 'Directive 2011/65/EU + (EU) 2015/863',
    description: 'محدودیت مواد خطرناک در تجهیزات الکتریکی و الکترونیکی (سرب، جیوه، کادمیوم، کروم شش‌ظرفیتی، PBB، PBDE و فتالات‌ها)',
    scope: 'تمام ۱۰ ماده محدودشده زیر آستانه مجاز',
    labs: ['EN IEC 63000:2018'],
    icon: Award,
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'EMC Compliance',
    standard: 'ETSI EN 301 489-1 V2.2.3 / ETSI EN 301 489-3 V2.3.2',
    description: 'سازگاری الکترومغناطیسی برای تجهیزات رادیویی — عدم تداخل با سایر تجهیزات',
    scope: 'Emission (EN 55032) & Immunity (EN 55035, EN 61000-3-3)',
    labs: ['WTH25H11296966W002', 'WTH25H11296965E'],
    icon: Globe,
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'Radio Spectrum',
    standard: 'ETSI EN 300 220-1 V3.1.1 / ETSI EN 300 220-2 V3.2.1',
    description: 'استفاده مؤثر از طیف باند رادیویی — فرکانس ۴۳۳.۹۲ MHz، قدرت ۰.۸ dBm ERP',
    scope: 'Short Range Devices (SRD)',
    labs: ['WTH25H11296966W001'],
    icon: FileText,
    color: 'from-orange-500 to-orange-700',
  },
  {
    name: 'Safety (LVD)',
    standard: 'EN IEC 62368-1:2024 + A11:2024',
    description: 'ایمنی تجهیزات صوتی/تصویری، فناوری اطلاعات و ارتباطات',
    scope: 'جریان نشتی، عایق‌بندی، دما، استحکام مکانیکی، آتش‌سوزی',
    labs: ['WTH25H11296967Y'],
    icon: Lock,
    color: 'from-red-500 to-red-700',
  },
  {
    name: 'ISO 9001:2015',
    standard: 'Quality Management System',
    description: 'سیستم مدیریت کیفیت — تضمین کنترل فرآیندهای تولید، تست و خدمات نصب',
    scope: 'طراحی، تولید، نصب و سرویس پس از فروش فیلم‌های هوشمند PDLC/PNLC',
    labs: ['مبتنی بر اصول مدیریت ریسک و تفکر فرآیندمحور'],
    icon: CheckCircle,
    color: 'from-indigo-500 to-indigo-700',
  },
]

const documents = [
  {
    title: 'گواهی CE شیشه هوشمند PDLC',
    desc: 'CE Certificate — Radio Equipment Directive 2014/53/EU',
    href: '/certificates/PDLCSmart Film Smart Galss CE Certificate.pdf',
  },
  {
    title: 'گزارش تست CE',
    desc: 'CE Test Report — نتایج آزمایشگاه Waltek/HCT',
    href: '/certificates/PDLCSmart Film Smart Galss CE Test Report.pdf',
  },
  {
    title: 'گواهی RoHS',
    desc: 'RoHS Certificate — محدودیت مواد خطرناک',
    href: '/certificates/御光50w-300w Smartfilm ROSH  Certificate.pdf',
  },
  {
    title: 'کاتالوگ محصولات ۲۰۲۶',
    desc: 'Filmbase Smart Film Catalogue 2026',
    href: '/certificates/（small）2026-Filmbase Smart Film catalogue.pdf',
  },
  {
    title: 'راهنمای کیت نمونه VIP',
    desc: 'Filmbase 4 VIP Smart Film Sample Kit',
    href: '/certificates/Filmbase 4 VIP Smart Film Sample Kit.pdf',
  },
  {
    title: 'لیست قیمت ۲۰۲۶',
    desc: 'Pricelist — Smart Film 202601',
    href: '/certificates/FILMBASE Pricelist-Smart FILM-202601.pdf',
  },
]

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-surface-950 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-32 right-[10%] h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
          <div className="container-custom relative text-center">
            <span className="badge-dark mb-6">اعتماد و اعتبار بین‌المللی</span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              گواهینامه‌ها و <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">استانداردها</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300 leading-relaxed">
              تمام محصولات فلمبیس در آزمایشگاه‌های معتبر بین‌المللی (Waltek/HCT) تست شده‌اند.
            </p>
          </div>
        </section>

        <section className="section bg-surface-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <article key={cert.name} className="card p-6 md:p-8 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-transparent via-primary-500/10 to-primary-500/20 rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                  <div className="relative flex items-center gap-4 mb-6">
                    <div className={`flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-surface-900">{cert.name}</h2>
                      <p className="text-sm text-surface-500">{cert.standard}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium mb-4">
                    <CheckCircle className="h-4 w-4" aria-hidden="true" />
                    <span>تأیید شده و معتبر</span>
                  </div>
                  <p className="text-sm text-surface-600 mb-4 leading-relaxed">{cert.description}</p>
                  <div className="mb-4 p-3 rounded-xl bg-surface-50 border border-surface-100">
                    <p className="text-xs font-medium text-surface-700 mb-1">محدوده اعتبارسنجی:</p>
                    <p className="text-xs text-surface-600">{cert.scope}</p>
                  </div>
                  <div className="pt-4 border-t border-surface-100">
                    <p className="text-xs font-medium text-surface-700 mb-2">استانداردهای تست:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.labs.map((lab) => (
                        <span key={lab} className="px-2 py-0.5 rounded text-xs bg-primary-50 text-primary-700 border border-primary-100 font-mono">
                          {lab}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="badge-light mb-4">اسناد قابل دانلود</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-surface-900 tracking-tight">
                گواهینامه‌ها، کاتالوگ و لیست قیمت
              </h2>
              <p className="mt-4 text-surface-600 leading-relaxed">
                فایل‌های رسمی PDF را مستقیماً مشاهده یا دانلود کنید.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <FileText className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-surface-900 group-hover:text-primary-600 transition-colors">{doc.title}</h3>
                    <p className="text-xs text-surface-500 truncate">{doc.desc}</p>
                  </div>
                  <Download className="h-5 w-5 flex-shrink-0 text-surface-400 group-hover:text-primary-600 transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-surface-50">
          <div className="container-custom">
            <div className="relative card p-6 md:p-8 border-0 bg-surface-950 text-white overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />
              <div className="absolute -top-20 right-1/4 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-medium mb-4">
                    <Shield className="h-4 w-4" aria-hidden="true" />
                    <span>احتمال انطباق (Presumption of Conformity)</span>
                  </div>
                  <p className="text-surface-300 leading-relaxed text-sm">
                    استفاده از استانداردهای هارمونیزه اتحادیه اروپا باعث پیش‌فرض انطباق با الزامات اساسی دستورالعمل‌های EU می‌شود.
                  </p>
                </div>
                <div className="text-center border-y md:border-y-0 md:border-x border-surface-700 py-6 md:py-0">
                  <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-l from-primary-300 to-accent-400 bg-clip-text text-transparent mb-2">۱۰+</div>
                  <div className="text-surface-400 text-sm">استاندارد بین‌المللی</div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-surface-300 leading-relaxed mb-4 text-sm">
                    تمام گواهینامه‌ها از آزمایشگاه معتبر Waltek Testing Group (HCT) صادر شده و از طریق شماره ردیابی قابل تأیید هستند.
                  </p>
                  <a href="/certificates/PDLCSmart Film Smart Galss CE Certificate.pdf" target="_blank" rel="noopener noreferrer" className="btn border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 inline-flex text-sm">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    مشاهده سندهای کامل
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
