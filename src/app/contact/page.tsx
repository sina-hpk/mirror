import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata = {
  title: 'تماس با ما | فلمبیس',
  description: 'تماس با فلمبیس — آدرس دفتر، شماره تلفن، ایمیل و فرم درخواست مشاوره رایگان. پاسخگویی ۲۴/۷.',
}

const contactInfo = [
  { icon: MapPin, title: 'دفتر مرکزی', value: 'تهران، خیابان ولی‌عصر، کوچه ۱۲، پلاک ۴۵، واحد ۳', href: 'https://maps.google.com' },
  { icon: Phone, title: 'تلفن', value: '۰۲۱-۱۲۳۴۵۶۷۸ | ۰۹۱۲-۳۴۵۶۷۸۹', href: 'tel:+982112345678' },
  { icon: Mail, title: 'ایمیل', value: 'info@filmbase.ir | sales@filmbase.ir', href: 'mailto:info@filmbase.ir' },
]

const hours = [
  { label: 'شنبه - چهارشنبه', value: '۸:۳۰ - ۱۷:۳۰', highlight: false },
  { label: 'پنج‌شنبه', value: '۸:۳۰ - ۱۴:۰۰', highlight: false },
  { label: 'جمعه', value: 'تعطیل', highlight: true },
  { label: 'پشتیبانی فنی', value: '۲۴/۷', highlight: false },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface-950 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-32 right-[10%] h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
          <div className="container-custom relative text-center">
            <span className="badge-dark mb-6">در ارتباط باشید</span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              تماس با <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">فلمبیس</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300 leading-relaxed">
              کارشناسان ما آماده پاسخگویی به سؤالات شما و ارائه مشاوره رایگان هستند.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="section bg-surface-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Info */}
              <div>
                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="card p-6 flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-cyan-100 text-primary-600 shadow-sm">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-surface-900 mb-1">{item.title}</p>
                        <p className="text-sm text-surface-600">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Working Hours */}
                <div className="card p-6 bg-white">
                  <h2 className="font-bold text-surface-900 mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary-600" aria-hidden="true" />
                    ساعات کاری
                  </h2>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {hours.map((h) => (
                      <div key={h.label} className="flex justify-between p-3 rounded-xl bg-surface-50 border border-surface-100">
                        <span className="text-surface-600">{h.label}</span>
                        <span className={`font-medium ${h.highlight ? 'text-red-500' : 'text-surface-900'}`}>{h.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 card overflow-hidden">
                  <div className="aspect-[16/9] bg-surface-100 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-10 w-10 text-primary-400 mx-auto mb-3" aria-hidden="true" />
                      <p className="text-sm text-surface-500">نقشه دفتر مرکزی فلمبیس</p>
                      <p className="text-xs text-surface-400 mt-1">تهران، خیابان ولی‌عصر</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
