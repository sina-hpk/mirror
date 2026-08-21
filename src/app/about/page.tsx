import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Target, Eye, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'درباره ما | فلمبیس',
  description: 'آشنایی با فلمبیس — مرجع تخصصی شیشه‌های هوشمند PDLC و PNLC در ایران. تاریخچه، تیم مدیریت و چشم‌انداز.',
}

const team = [
  { name: 'مهدی رضایی', role: 'مدیرعامل و بنیان‌گذار', color: 'from-primary-500 to-primary-700', initial: 'م', bio: 'بیش از ۱۵ سال تجربه در صنعت شیشه و ساختمان. فارغ‌التحصیل مهندسی مکانیک از دانشگاه تهران.' },
  { name: 'سارا احمدی', role: 'مدیر فنی و تحقیقات', color: 'from-accent-500 to-blue-600', initial: 'س', bio: 'متخصص تکنولوژی PDLC/PNLC با تجربه در پروژه‌های بین‌المللی. دکترای فیزیک کاربردی.' },
  { name: 'علی موسوی', role: 'مدیر فروش و بازاریابی', color: 'from-violet-500 to-purple-700', initial: 'ع', bio: '۱۰ سال سابقه در فروش B2B محصولات صنعتی. متخصص توسعه بازار خاورمیانه.' },
  { name: 'نازنین کریمی', role: 'مدیر پروژه‌ها', color: 'from-emerald-500 to-teal-600', initial: 'ن', bio: 'مدیر پروژه ارشد با تجربه اجرای بیش از ۲۰۰ پروژه شیشه هوشمند در سراسر ایران.' },
]

const milestones = [
  { year: '۱۳۹۵', title: 'تأسیس فلمبیس', desc: 'آغاز فعالیت با واردات و فروش فیلم‌های PDLC در ایران.' },
  { year: '۱۳۹۷', title: 'راه‌اندازی خط تولید', desc: 'راه‌اندازی خط تولید و لمیناسیون شیشه هوشمند در کارخانه تهران.' },
  { year: '۱۳۹۹', title: 'دریافت گواهی CE', desc: 'دریافت گواهینامه CE اروپا و مطابقت RoHS.' },
  { year: '۱۴۰۰', title: 'تکنولوژی PNLC', desc: 'معرفی تکنولوژی PNLC نسل جدید با وضوح ۹۹٪ به بازار ایران.' },
  { year: '۱۴۰۲', title: 'گسترش منطقه‌ای', desc: 'صادرات به کشورهای عراق، عمان و امارات و راه‌اندازی دفتر دبی.' },
  { year: '۱۴۰۴', title: 'پروژه‌های کلان', desc: 'اجرای پروژه‌های شیشه هوشمند در فرودگاه، بیمارستان‌ها و مجتمع‌های تجاری.' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface-950 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-32 left-[10%] h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
          <div className="container-custom relative text-center">
            <span className="badge-dark mb-6">درباره ما</span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              داستان <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">فلمبیس</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300 leading-relaxed">
              پیشگام تکنولوژی شیشه هوشمند در ایران — از مشاوره تا اجرا، با تعهد به کیفیت و نوآوری.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 shadow-sm">
                    <Target className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-surface-900">مأموریت ما</h2>
                </div>
                <p className="text-surface-600 leading-relaxed">
                  ارائه بهترین تکنولوژی شیشه هوشمند PDLC و PNLC با قیمت مناسب و خدمات پس از فروش بی‌نظیر، به منظور ارتقای سطح زندگی و بهره‌وری انرژی در ساختمان‌های ایران.
                </p>
              </div>
              <div className="card p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 shadow-sm">
                    <Eye className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-surface-900">چشم‌انداز ما</h2>
                </div>
                <p className="text-surface-600 leading-relaxed">
                  تبدیل شدن به مرجع اول و معتبرترین برند شیشه هوشمند در خاورمیانه. توسعه مستمر فناوری، آموزش مهندسان و معماران، و گسترش حضور در بازارهای منطقه‌ای.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section id="history" className="scroll-mt-24 section bg-surface-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge-light mb-5">مسیر پیشرفت</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900 tracking-tight mb-4">
                تاریخچه <span className="gradient-text">فلمبیس</span>
              </h2>
              <p className="text-lg text-surface-600 leading-relaxed">
                از یک ایده کوچک تا بزرگ‌ترین واردکننده و تولیدکننده شیشه هوشمند در ایران.
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-0 bottom-0 right-6 w-0.5 bg-gradient-to-b from-primary-500 via-primary-300 to-surface-200 md:right-1/2 md:-translate-x-px" aria-hidden="true" />
              <div className="space-y-12">
                {milestones.map((item, i) => (
                  <div key={i} className={`relative flex items-start gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute right-4 w-5 h-5 rounded-full bg-primary-500 border-4 border-white shadow-md md:right-1/2 md:-translate-x-2.5 top-1" aria-hidden="true" />
                    <div className={`mr-14 md:mr-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                      <div className="card p-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium mb-3">{item.year}</span>
                        <h3 className="text-lg font-bold text-surface-900 mb-2">{item.title}</h3>
                        <p className="text-surface-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="scroll-mt-24 section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge-light mb-5">انسانی پشت تکنولوژی</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900 tracking-tight mb-4">
                تیم <span className="gradient-text">مدیریت</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="card p-6 text-center group">
                  <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.color} text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {member.initial}
                  </div>
                  <h3 className="text-lg font-bold text-surface-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-surface-600 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section bg-surface-50">
          <div className="container-custom">
            <div className="relative card p-8 md:p-12 border-0 bg-surface-950 text-white overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '+۵۰۰', label: 'پروژه اجرا شده' },
                  { value: '+۲۰۰', label: 'مشتری فعال' },
                  { value: '۹', label: 'سال تجربه' },
                  { value: '۵', label: 'کشور هدف صادراتی' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</div>
                    <div className="mt-1 text-surface-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="card relative overflow-hidden p-8 md:p-12 border-0 bg-gradient-to-l from-primary-800 via-primary-600 to-accent-700 text-white">
              <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
              <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">می‌خواهید با ما همکاری کنید؟</h2>
                <p className="text-primary-100 mb-8 leading-relaxed">
                  ما هم‌یشه به دنبال افراد مستعد و شرکت‌های پیشرو برای همکاری هستیم.
                </p>
                <Link href="/#contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
                  تماس با ما
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
