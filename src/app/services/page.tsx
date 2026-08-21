import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Wrench, Phone, Shield, Award, BookOpen, Building2, CheckCircle, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'خدمات | فلمبیس',
  description: 'خدمات مشاوره، طراحی، نصب و مونتاژ شیشه‌های هوشمند PDLC و PNLC فلمبیس. سرویس پس از فروش، گارانتی و آموزش.',
}

const services = [
  {
    id: 'consulting',
    icon: MessageCircle,
    title: 'مشاوره و طراحی',
    description: 'تیم مهندسی فلمبیس از فاز اولیه پروژه در کنار شماست. مشاوره رایگان تخصصی برای انتخاب بهترین تکنولوژی PDLC یا PNLC متناسب با نیاز و بودجه شما.',
    details: [
      'بررسی نیازهای پروژه و انتخاب تکنولوژی مناسب',
      'طراحی فنی و مشخص‌کردن ابعاد، نوع کنترل و ولتاژ',
      'محاسبه هزینه و ارائه پیش‌فاکتور اختصاصی',
      'مشاوره یکپارچه‌سازی با سیستم هوشمند ساختمان (BMS)',
      'پشتیبانی معماران و طراحان در فاز طراحی',
    ],
  },
  {
    id: 'installation',
    icon: Wrench,
    title: 'نصب و مونتاژ',
    description: 'نصب حرفه‌ای شیشه‌های هوشمند توسط تیم متخصص فلمبیس با رعایت تمام استانداردهای ایمنی و فنی. امکان نصب روی شیشه‌های موجود (Retrofit) بدون نیاز به تعویض قاب.',
    details: [
      'نصب فیلم خودچسب روی شیشه‌های موجود بدون تخریب',
      'مونتاژ شیشه لمینیت هوشمند پیش‌ساخته',
      'سیم‌کشی، نصب ترانسفورماتور و کنترلر',
      'تنظیم و تست نهایی تمام پنل‌ها',
      'نصب کنترلرهای WiFi، RF و اپلیکیشن',
      'آموزش استفاده به مشتری',
    ],
  },
  {
    id: 'support',
    icon: Phone,
    title: 'سرویس پس از فروش',
    description: 'پشتیبانی فنی ۲۴ ساعته و ۷ روز هفته. تیم خدمات فلمبیس آماده پاسخگویی به سؤالات و رفع مشکلات فنی در سریع‌ترین زمان ممکن است.',
    details: [
      'پشتیبانی تلفنی و آنلاین ۲۴/۷',
      'خدمات تعمیر و تعویض در محل',
      'تنظیمات مجدد و عیب‌یابی کنترلرها',
      'بررسی دوره‌ای و نگهداری پیشگیرانه',
      'ارسال قطعات یدکی در کمتر از ۴۸ ساعت',
    ],
  },
  {
    id: 'warranty',
    icon: Shield,
    title: 'ضمانت و گارانتی',
    description: 'تمام محصولات فلمبیس با گارانتی اصالت و کیفیت عرضه می‌شوند. مدت ضمانت بسته به نوع محصول از ۵ تا ۱۵ سال متغیر است.',
    details: [
      'گارانتی ۵ تا ۱۵ سال بسته به مدل محصول',
      'پوشش کامل عیوب تولیدی و فنی',
      'تعویض رایگان در صورت نقص فناوری PDLC/PNLC',
      'گواهینامه‌های بین‌المللی CE و RoHS',
      'بیمه‌نامه حوادث برای پروژه‌های بزرگ',
    ],
  },
  {
    id: 'training',
    icon: BookOpen,
    title: 'آموزش و انتقال دانش',
    description: 'فلمبیس با اشتراک‌گذاری دانش فنی با پیمانکاران، معماران و مهندسان، آموزش تخصصی برای تیم‌های اجرایی و فروش ارائه می‌دهد.',
    details: [
      'کارگاه‌های آموزشی حضوری و آنلاین',
      'راهنمای نصب و نگهداری به‌روز',
      'دسترسی به کاتالوگ فنی و دیتاشیت محصولات',
      'پشتیبانی فنی ویژه برای پیمانکاران همکار',
      'دوره‌های آشنایی با تکنولوژی PDLC/PNLC',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface-950 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-32 right-[15%] h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
          <div className="container-custom relative text-center">
            <span className="badge-dark mb-6">خدمات حرفه‌ای</span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              خدمات <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">فلمبیس</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300 leading-relaxed">
              از مشاوره اولیه تا نصب، آموزش و سرویس پس از فروش — تیم فلمبیس در تمام مراحل پروژه همراه شماست.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="section bg-surface-50">
          <div className="container-custom space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="card p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-cyan-100 text-primary-600 shadow-sm">
                      <service.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-surface-900">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-lg text-surface-600 leading-relaxed mb-8 max-w-3xl">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-surface-50 border border-surface-100">
                        <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-surface-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="card relative overflow-hidden p-8 md:p-12 border-0 bg-gradient-to-l from-primary-800 via-primary-600 to-cyan-700 text-white">
              <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
              <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">نیاز به مشاوره تخصصی دارید؟</h2>
                <p className="text-primary-100 mb-8 leading-relaxed">
                  کارشناسان فلمبیس آماده ارائه مشاوره رایگان و پیش‌فاکتور اختصاصی برای پروژه شما هستند.
                </p>
                <Link href="/#contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
                  درخواست مشاوره رایگان
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
