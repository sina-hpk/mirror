import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'سوالات متداول | فلمبیس',
  description: 'پاسخ سوالات رایج درباره شیشه هوشمند PDLC و PNLC فلمبیس. نصب، قیمت، گارانتی و خدمات.',
}

const categories = [
  {
    title: 'سوالات کلی درباره شیشه هوشمند',
    questions: [
      { q: 'شیشه هوشمند چیست و چگونه کار می‌کند؟', a: 'شیشه هوشمند از فناوری PDLC (پلیمرهای کریستال مایع ناهمگن) یا PNLC (پلیمرهای نانو کریستال مایع) استفاده می‌کند. با اعمال ولتاژ الکتریکی، لایه پلیمری از حالت مات (پراکنده نور) به حالت شفاف (انتقال‌دهنده نور) تغییر وضعیت می‌دهد. این تغییر در کسری از ثانیه انجام می‌شود و با کلید، ریموت، اپلیکیشن موبایل یا سیستم هوشمند ساختمان قابل کنترل است.' },
      { q: 'تفاوت PDLC و PNLC چیست؟', a: 'PDLC (نسل کلاسیک) وضوح ۸۵-۹۰٪ و مصرف انرژی متوسط دارد. PNLC (نسل جدید) وضوح ۹۹٪ (مثل شیشه معمولی)، مصرف ۴۰٪ کمتر، زاویه دید ۱۷۰° و سرعت سوئیچینگ زیر ۳۰ میلی‌ثانیه دارد. تمام محصولات فلمبیس با تکنولوژی PNLC تولید می‌شوند.' },
      { q: 'آیا شیشه هوشمند عایق حرارتی هم هست؟', a: 'بله. فیلم‌های PDLC/PNLC فلمبیس تا ۹۹٪ اشعه UV و ۹۰٪ اشعه IR را مسدود می‌کنند. این ویژگی باعث کاهش بار حرارتی، صرفه‌جویی تا ۳۰٪ در انرژی سرمایش و گرمایش، و محافظت از مبلمان و پوست در برابر نور خورشید می‌شود.' },
      { q: 'عمر مفید شیشه هوشمند چقدر است؟', a: 'بسته به نوع محصول، عمر مفید بین ۱۰ تا ۲۰ سال است. مدل‌های PNLC فلمبیس با گارانتی ۱۵ سال عرضه می‌شوند. با نگهداری صحیح، عمر واقعی می‌تواند از گارانتی هم بیشتر باشد.' },
    ],
  },
  {
    title: 'نصب و راه‌اندازی',
    questions: [
      { q: 'آیا می‌توان فیلم هوشمند را روی شیشه‌های موجود نصب کرد؟', a: 'بله. فیلم‌های PDLC/PNLC فلمبیس قابلیت Retrofit دارند و روی شیشه‌های موجود (تک‌لایه یا دو‌لایه) قابل نصب هستند. این به معنای نیاز به تعویض کل قاب یا شیشه نیست. نصب در کمتر از ۱ ساعت به ازای هر متر مربع انجام می‌شود.' },
      { q: 'نصب شیشه هوشمند چقدر زمان می‌برد؟', a: 'نصب فیلم خودچسب روی شیشه موجود حدود ۳۰-۶۰ دقیقه به ازای هر متر مربع است. برای شیشه لمینیت پیش‌ساخته، زمان بیشتری نیاز است اما باز هم در یک روز کاری قابل نصب و راه‌اندازی کامل است.' },
      { q: 'از چه کنترل‌هایی می‌توان استفاده کرد؟', a: 'فلمبیس انواع کنترلرها را ارائه می‌دهد: کلید دیواری، ریموت RF، اپلیکیشن موبایل (WiFi)، کنترل صوتی (سازگار با خانه هوشمند)، و برنامه‌ریزی زمانی خودکار. امکان یکپارچه‌سازی با سیستم BMS ساختمان هم وجود دارد.' },
      { q: 'آیا نصب نیاز به سیم‌کشی خاصی دارد؟', a: 'فقط سیم‌کشی low-voltage (ولتاژ پایین) نیاز است. ترانسفورماتور ولتاژ mains را به ۳۶V، ۴۸V یا ۶۶V (بسته به مدل) تبدیل می‌کند. سیم‌کشی ساده است و توسط تیم فنی فلمبیس انجام می‌شود.' },
    ],
  },
  {
    title: 'قیمت و سفارش',
    questions: [
      { q: 'قیمت شیشه هوشمند چگونه محاسبه می‌شود؟', a: 'قیمت بر اساس متر مربع، نوع محصول (PDLC/PNLC، استاندارد/پرضوح)، ابعاد سفارشی، نوع کنترلر و هزینه نصب محاسبه می‌شود. برای دریافت قیمت دقیق، فرم درخواست پیش‌فاکتور را پر کنید یا با کارشناسان ما تماس بگیرید.' },
      { q: 'VIP Sample Kit چیست و چرا باید آن را تهیه کنم؟', a: 'VIP Sample Kit یک کیت نمونه‌گیری حرفه‌ای شامل ۴ نوع فیلم (PDLC 085، 087، 091 و PNLC)، کنترلر هوشمند، ترانسفورماتور و کاتالوگ فنی است. قیمت آن ۲,۵۰۰,۰۰۰ تومان و ارسال رایگان به سراسر ایران دارد. مبلغ کیت از سفارش اصلی پروژه کسر می‌شود.' },
      { q: 'آیا امکان سفارشی‌سازی وجود دارد؟', a: 'بله. فلمبیس امکان تولید در ابعاد سفارشی، شکل‌های خاص (منحنی، دایره‌ای)، رنگ‌های متنوع و ویژگی‌های خاص را فراهم می‌کند. برای پروژه‌های بزرگ و خاص، با تیم مهندسی ما تماس بگیرید.' },
    ],
  },
  {
    title: 'گارانتی و خدمات پس از فروش',
    questions: [
      { q: 'ضمانت فلمبیس شامل چه مواردی می‌شود؟', a: 'ضمانت فلمبیس پوشش کامل عیوب تولیدی و فنی شامل تغییر وضعیت نامناسب، بلورشدگی، نوارزدگی و نقص الکتریکی است. مدت ضمانت ۵ تا ۱۵ سال بسته به مدل محصول است.' },
      { q: 'در صورت بروز مشکل چه باید کرد؟', a: 'با شماره پشتیبانی ۰۹۱۲-۳۴۵۶۷۸۹ تماس بگیرید یا از طریق فرم تماس تیکت ارسال کنید. تیم فنی ما در کمتر از ۴۸ ساعت در محل حاضر می‌شود. تعمیرات تحت ضمانت رایگان است.' },
      { q: 'آیا خدمات تعمیر و نگهداری دوره‌ای ارائه می‌دهید؟', a: 'بله. فلمبیس خدمات نگهداری پیشگیرانه شامل بررسی دوره‌ای، تمیزکاری، تنظیم مجدد کنترلرها و تست عملکرد را ارائه می‌دهد. این خدمات به ویژه برای پروژه‌های بزرگ و تجاری توصیه می‌شود.' },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface-950 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-32 left-[15%] h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
          <div className="container-custom relative text-center">
            <span className="badge-dark mb-6">سوالات شما</span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              سوالات <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">متداول</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300 leading-relaxed">
              پاسخ رایج‌ترین سؤالات درباره شیشه هوشمند، نصب، قیمت و خدمات فلمبیس.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-surface-50">
          <div className="container-custom max-w-4xl space-y-12">
            {categories.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl font-bold text-surface-900 mb-6 pb-3 border-b-2 border-primary-500 inline-block">
                  {category.title}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, i) => (
                    <details key={i} className="card group">
                      <summary className="flex items-center justify-between gap-4 cursor-pointer p-6 list-none [&::-webkit-details-marker]:hidden">
                        <h3 className="font-medium text-surface-900 text-base">{faq.q}</h3>
                        <ChevronDown className="h-5 w-5 text-surface-400 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-surface-600 leading-relaxed text-sm">{faq.a}</p>
                      </div>
                    </details>
                  ))}
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
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">سؤال دیگری دارید؟</h2>
                <p className="text-primary-100 mb-8 leading-relaxed">
                  کارشناسان فلمبیس آماده پاسخگویی به تمام سؤالات شما هستند.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
                    فرم تماس
                  </Link>
                  <a href="tel:+982112345678" className="btn border-2 border-white text-white hover:bg-white/10">
                    ۰۲۱-۱۲۳۴۵۶۷۸
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
