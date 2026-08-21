import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'خبرها و رویدادها | فلمبیس',
  description: 'آخرین اخبار، رویدادها و مقالات تخصصی فلمبیس در حوزه شیشه هوشمند PDLC و PNLC.',
}

const news = [
  { date: '۱۴۰۴/۰۵/۱۵', title: 'حضور فلمبیس در نمایشگاه بین‌المللی ساختمان تهران', summary: 'فلمبیس در بیست‌وهشتمین نمایشگاه بین‌المللی ساختمان، صنعت ساختمان و شهرسازی تهران با غرفه اختصاصی محصولات جدید خود را معرفی می‌کند.', category: 'نمایشگاه' },
  { date: '۱۴۰۴/۰۴/۰۱', title: 'معرفی نسل سوم PNLC با وضوح ۹۹.۵٪', summary: 'فلمبیس نسل سوم تکنولوژی PNLC را با بهبود وضوح به ۹۹.۵٪ و کاهش ۵۰٪ مصرف انرژی معرفی کرد.', category: 'محصول' },
  { date: '۱۴۰۴/۰۲/۲۰', title: 'پروژه شیشه هوشمند فرودگاه امام خمینی(ره)', summary: 'فلمبیس پروژه نصب بیش از ۵۰۰ متر مربع شیشه هوشمند در ترمینال جدید فرودگاه بین‌المللی امام خمینی را با موفقیت به پایان رساند.', category: 'پروژه' },
  { date: '۱۴۰۳/۱۲/۱۰', title: 'مقرر شدن فلمبیس در فهرست تأمین‌کنندگان رسمی وزارت راه', summary: 'فلمبیس به فهرست تأمین‌کنندگان تأییدصلاحیت‌شده وزارت راه و شهرسازی برای پروژه‌های دولتی اضافه شد.', category: 'اخبار شرکت' },
  { date: '۱۴۰۳/۱۰/۰۵', title: 'افتتاح دفتر جدید دبی', summary: 'فلمبیس دفتر منطقه‌ای خود را در دبی، امارات متحده عربی افتتاح کرد تا خدمات خود را به بازار خلیج فارس گسترش دهد.', category: 'اخبار شرکت' },
  { date: '۱۴۰۳/۰۸/۲۰', title: 'برنده جایزه نوآوری در صنعت ساختمان', summary: 'فلمبیس جایزه نوآوری سال در صنعت ساختمان ایران را در مراسم سالانه انجمن مهندسان ساختمان دریافت کرد.', category: 'افتخارات' },
]

export default function NewsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-surface-950 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-32 right-[10%] h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
          <div className="container-custom relative text-center">
            <span className="badge-dark mb-6">آخرین اخبار</span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              خبرها و <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">رویدادها</span>
            </h1>
          </div>
        </section>

        <section className="section bg-surface-50">
          <div className="container-custom max-w-4xl space-y-6">
            {news.map((item) => (
              <article key={item.title} className="card p-6 md:p-8 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700">{item.category}</span>
                  <span className="text-xs text-surface-400">{item.date}</span>
                </div>
                <h2 className="text-lg font-bold text-surface-900 mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h2>
                <p className="text-surface-600 leading-relaxed text-sm">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
