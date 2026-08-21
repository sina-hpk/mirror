import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Building2, Home, Hospital, Plane, Store, Landmark } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'پروژه‌های مرجع | فلمبیس',
  description: 'نمونه پروژه‌های اجرا شده شیشه هوشمند PDLC و PNLC توسط فلمبیس در سراسر ایران.',
}

const projects = [
  { icon: Plane, title: 'فرودگاه بین‌المللی امام خمینی(ره)', location: 'تهران', area: '۵۰۰+ متر مربع', desc: 'نصب پارتیشن‌های شیشه هوشمند PNLC در ترمینال جدید و اتاق‌های کنترل.', year: '۱۴۰۴', image: '/images/project-conference.webp' },
  { icon: Hospital, title: 'بیمارستان مهر تهران', location: 'تهران', area: '۳۰۰ متر مربع', desc: 'شیشه هوشمند اتاق‌های عمل و ICU با کنترل پدالی و ضدباکتری.', year: '۱۴۰۳', image: '/images/healthcare.webp' },
  { icon: Building2, title: 'مجتمع تجاری الماس', location: 'اصفهان', area: '۸۰۰ متر مربع', desc: 'ویترین‌ها و پارتیشن‌های اداری مغازه‌ها با کنترل متمرکز.', year: '۱۴۰۳', image: '/images/project-office-tower.webp' },
  { icon: Home, title: 'مجتمع مسکونی لوکس آرمان', location: 'لواسان', area: '۲۰۰ متر مربع', desc: 'پنجره‌های سقفی و حمام‌ها با کنترل از اپلیکیشن خانه هوشمند.', year: '۱۴۰۲', image: '/images/project-villa.webp' },
  { icon: Landmark, title: 'هتل پنج‌ستاره دریا', location: 'کیش', area: '۶۰۰ متر مربع', desc: 'سوییت‌ها و رستوران گردان با شیشه هوشمند ضد نم.', year: '۱۴۰۲', image: '/images/project-hotel.webp' },
  { icon: Store, title: 'شوروم خودرو پارس', location: 'کرج', area: '۱۵۰ متر مربع', desc: 'اتاق‌های تحویل VIP و دفتر مدیریت با کنترل حریم خصوصی.', year: '۱۴۰۱', image: '/images/automotive.webp' },
]

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-surface-950 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-32 left-[10%] h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
          <div className="container-custom relative text-center">
            <span className="badge-dark mb-6">نمونه کارها</span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              پروژه‌های <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">مرجع</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300 leading-relaxed">
              نمونه‌هایی از بیش از ۵۰۰ پروژه اجرا شده فلمبیس در سراسر ایران.
            </p>
          </div>
        </section>

        <section className="section bg-surface-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <article key={project.title} className="card group overflow-hidden p-0">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 to-transparent" aria-hidden="true" />
                    <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20">
                      <project.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="absolute bottom-3 right-4 inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary-700">{project.area}</span>
                  </div>
                  <div className="p-6 md:p-7">
                    <span className="text-xs text-surface-400">{project.year} • {project.location}</span>
                    <h2 className="text-lg font-bold text-surface-900 mt-1 mb-2 group-hover:text-primary-600 transition-colors">{project.title}</h2>
                    <p className="text-sm text-surface-600 leading-relaxed">{project.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-custom">
            <div className="card relative overflow-hidden p-8 md:p-12 border-0 bg-gradient-to-l from-primary-800 via-primary-600 to-accent-700 text-white">
              <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">پروژه شما می‌تواند بعدی باشد</h2>
                <Link href="/#contact" className="btn bg-white text-primary-700 hover:bg-primary-50">شروع مشاوره رایگان</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
