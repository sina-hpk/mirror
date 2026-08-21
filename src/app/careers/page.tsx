import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Clock, Briefcase, Send } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'فرصت‌های شغلی | فلمبیس',
  description: 'فرصت‌های همکاری و اشتغال در فلمبیس. موقعیت‌های شغلی باز در حوزه‌های فنی، فروش و مدیریت پروژه.',
}

const jobs = [
  { title: 'مهندس فروش پروژه‌های صنعتی', location: 'تهران', type: 'تمام‌وقت', department: 'فروش', desc: 'مسئول فروش B2B محصولات شیشه هوشمند به پروژه‌های ساختمانی و صنعتی. حداقل ۳ سال تجربه فروش پروژه‌محور.' },
  { title: 'تکنسین نصب و مونتاژ', location: 'تهران', type: 'تمام‌وقت', department: 'فنی', desc: 'نصب حرفه‌ای فیلم‌های PDLC/PNLC و سیم‌کشی کنترلرها. آشنایی با ابزار برق ساختمان الزامی است.' },
  { title: 'کارشناس پشتیبانی فنی', location: 'تهران / ریموت', type: 'تمام‌وقت', department: 'پشتیبانی', desc: 'پاسخگویی به سؤالات فنی مشتریان، عیب‌یابی و هماهنگی خدمات میدانی. دانش فنی تکنولوژی PDLC/PNLC.' },
  { title: 'طراح گرافیک و محتوا', location: 'تهران / ریموت', type: 'پاره‌وقت', department: 'بازاریابی', desc: 'تولید محتوای بصری، ویدیو و گرافیک برای شبکه‌های اجتماعی و وب‌سایت. تسلط به ابزارهای Adobe.' },
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-surface-950 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-32 right-[15%] h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
          <div className="container-custom relative text-center">
            <span className="badge-dark mb-6">به تیم ما بپیوندید</span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              فرصت‌های <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">شغلی</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300 leading-relaxed">
              فلمبیس هم‌یشه به دنبال افراد مستعد و پرانرژی است.
            </p>
          </div>
        </section>

        <section className="section bg-surface-50">
          <div className="container-custom max-w-4xl space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-surface-900 mb-3">موقعیت‌های باز</h2>
              <p className="text-surface-600">رزومه خود را به careers@filmbase.ir ارسال کنید.</p>
            </div>
            {jobs.map((job) => (
              <div key={job.title} className="card p-6 md:p-8 group">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700">{job.department}</span>
                  <span className="flex items-center gap-1 text-xs text-surface-500"><MapPin className="h-3 w-3" />{job.location}</span>
                  <span className="flex items-center gap-1 text-xs text-surface-500"><Clock className="h-3 w-3" />{job.type}</span>
                </div>
                <h3 className="text-lg font-bold text-surface-900 mb-2">{job.title}</h3>
                <p className="text-surface-600 text-sm leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
