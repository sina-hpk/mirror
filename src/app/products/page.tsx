import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, ShoppingCart, Package, Star, HelpCircle, Zap, Truck } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'محصولات | فلمبیس',
  description: 'کاتالوگ کامل محصولات شیشه هوشمند PDLC و PNLC فلمبیس. فیلم‌های استاندارد، پروضوح، رنگی و کیت نمونه.',
}

const allProducts = [
  {
    id: 'pdlc-standard',
    title: 'فیلم PDLC استاندارد',
    subtitle: 'PDLC Film 085',
    description: 'فیلم PDLC با وضوح ۸۵٪ در حالت روشن. بهترین نسبت قیمت به عملکرد برای پارتیشن‌های اداری و شیشه‌های مسکونی.',
    specs: [
      ['وضوح (On)', '۸۵٪'], ['مات بودن (Off)', '< ۳٪'], ['سرعت تغییر', '< ۱۰۰ms'],
      ['ولتاژ', 'AC 60V'], ['مسدودسازی UV', '۹۹٪'], ['مسدودسازی IR', '۹۰٪'],
      ['بازه دما', '-۲۰ تا ۶۰℃'], ['گارانتی', '۵ سال'],
    ],
    applications: ['پارتیشن اداری', 'شیشه مسکونی', 'پرده هوشمند'],
    badge: 'بیشترین فروش',
  },
  {
    id: 'pdlc-high-clarity',
    title: 'فیلم PDLC پرضوح',
    subtitle: 'PDLC Film 087 / 091',
    description: 'ورژن‌های پیشرفته با وضوح ۸۷٪ و ۹۱٪. نزدیک‌ترین体験 به شیشه معمولی در حالت روشن. ایده‌آل برای پروژه‌های معماری لوکس و ویترین.',
    specs: [
      ['وضوح (On)', '۸۷٪ / ۹۱٪'], ['مات بودن (Off)', '< ۲٪'], ['سرعت تغییر', '< ۸۰ms'],
      ['ولتاژ', 'AC 48-60V'], ['مسدودسازی UV', '۹۹.۵٪'], ['مسدودسازی IR', '۹۵٪'],
      ['بازه دما', '-۳۰ تا ۸۰℃'], ['گارانتی', '۷-۱۰ سال'],
    ],
    applications: ['ویلاها', 'مجتمع تجاری', 'ویترین لوکس', 'موزه و نمایشگاه'],
    badge: 'معماری لوکس',
  },
  {
    id: 'pnlc',
    title: 'تکنولوژی PNLC نسل جدید',
    subtitle: 'PNLC Scratchproof',
    description: 'بهترین تکنولوژی موجود: وضوح ۹۹٪، مصرف ۴۰٪ کمتر، زاویه دید ۱۷۰°، سرعت سوئیچینگ زیر ۳۰ میلی‌ثانیه و دوام ضدخدشه.',
    specs: [
      ['وضوح (On)', '۹۹٪'], ['مات بودن (Off)', '< ۰.۵٪'], ['سرعت تغییر', '< ۳۰ms'],
      ['ولتاژ', 'AC 36V'], ['مسدودسازی UV', '۹۹.۹٪'], ['مسدودسازی IR', '۹۸٪'],
      ['بازه دما', '-۳۰ تا ۹۵℃'], ['گارانتی', '۱۵ سال'],
    ],
    applications: ['پروژه‌های پرچمدار', 'معماری جهانی', 'خانواده‌های لوکس'],
    badge: 'بهترین تکنولوژی',
  },
  {
    id: 'colored',
    title: 'فیلم‌های رنگی',
    subtitle: 'PDLC Film Gray / Black',
    description: 'فیلم‌های هوشمند در طیف خاکستری تا مشکی. کنترل نور بیشتر و طراحی داخلی منحصر به فرد. لایه سخت‌افزاری ضدخدشه برای محیط‌های پرترافیک.',
    specs: [
      ['وضوح (On)', '۴۰-۷۰٪'], ['مات بودن (Off)', '< ۵٪'], ['سرعت تغییر', '< ۱۰۰ms'],
      ['ولتاژ', 'AC 60V'], ['مسدودسازی UV', '۹۹٪'], ['مسدودسازی IR', '۹۵٪'],
      ['بازه دما', '-۲۰ تا ۸۵℃'], ['گارانتی', '۱۰ سال'],
    ],
    applications: ['استودیو عکاسی', 'سینمای خانگی', 'فضاهای خلاقانه', 'مغازه‌ها'],
    badge: 'طراحی داخلی',
  },
  {
    id: 'vip-kit',
    title: 'VIP Sample Kit',
    subtitle: 'کیت نمونه‌گیری حرفه‌ای',
    description: 'کیت کامل شامل ۴ نمونه فیلم، کنترلر هوشمند WiFi/RF، ترانسفورماتور چند ولتاژه و کاتالوگ فنی. ارسال رایگان به سراسر ایران.',
    specs: [
      ['محتویات', '۴ نمونه (PDLC 085، 087، 091، PNLC)'],
      ['کنترلر', 'WiFi + RF + اپلیکیشن'],
      ['ترانسفورماتور', '۳۶V / ۴۸V / ۶۰V'],
      ['اندازه نمونه‌ها', '۱۰×۱۰ سانتی‌متر'],
    ],
    applications: ['معماران', 'طراحان داخلی', 'مطوران پروژه', 'مشاوران نور'],
    badge: 'فروش آنلاین',
    price: '۲,۵۰۰,۰۰۰ تومان',
    isKit: true,
  },
]

export default function ProductsPage() {
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
            <span className="badge-dark mb-6">کاتالوگ محصولات</span>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
              محصولات <span className="bg-gradient-to-l from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">شیشه هوشمند</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300 leading-relaxed">
              طیف کامل فیلم‌های PDLC و PNLC با تکنولوژی پیشرفته، از استاندارد تا پرچمدار.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="section bg-surface-50">
          <div className="container-custom space-y-20">
            {allProducts.map((product) => (
              <div key={product.id} id={product.id} className="scroll-mt-24">
                <div className={`card p-8 md:p-12 overflow-hidden ${product.isKit ? 'gradient-border' : ''}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="badge-light">{product.subtitle}</span>
                    {product.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm ${product.isKit ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-700'}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-surface-900 mb-4">{product.title}</h2>
                  <p className="text-lg text-surface-600 leading-relaxed mb-8 max-w-3xl">{product.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {product.specs.map(([key, value]) => (
                      <div key={key} className="p-4 rounded-xl bg-surface-50 border border-surface-100 text-right">
                        <p className="text-xs text-surface-500 mb-1">{key}</p>
                        <p className="text-sm font-semibold text-surface-900">{value}</p>
                      </div>
                    ))}
                  </div>

                  {product.applications && (
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="text-sm text-surface-500 ml-1">کاربردها:</span>
                      {product.applications.map((app) => (
                        <span key={app} className="px-2 py-1 rounded text-xs bg-surface-100 text-surface-700 border border-surface-200">{app}</span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 pt-4 border-t border-surface-100">
                    {product.price && (
                      <div>
                        <p className="text-sm text-surface-500">قیمت:</p>
                        <p className="text-xl font-extrabold text-primary-600">{product.price}</p>
                      </div>
                    )}
                    <Link
                      href="/#contact"
                      className={product.isKit ? 'btn-primary' : 'btn-outline'}
                    >
                      {product.isKit ? (
                        <><ShoppingCart className="h-4 w-4" aria-hidden="true" /> خرید کیت نمونه</>
                      ) : (
                        <><HelpCircle className="h-4 w-4" aria-hidden="true" /> درخواست پیش‌فاکتور</>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Filmbase */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="card p-8 md:p-12 bg-surface-50">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 shadow-sm">
                  <Star className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-2">چرا فلمبیس؟</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'تکنولوژی PNLC نسل جدید در تمام محصولات',
                  'گواهینامه CE و RoHS برای تمام مدل‌ها',
                  'گارانتی تا ۱۵ سال بسته به مدل',
                  'نصب و مونتاژ توسط تیم تخصصی',
                  'پشتیبانی فنی ۲۴/۷',
                  'امکان سفارشی‌سازی ابعاد و شکل',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-surface-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VIP Kit CTA */}
        <section className="section bg-surface-50">
          <div className="container-custom">
            <div className="card relative overflow-hidden p-8 md:p-12 border-0 bg-gradient-to-l from-primary-800 via-primary-600 to-accent-700 text-white">
              <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
              <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                    <Package className="h-4 w-4" aria-hidden="true" />
                    <span>فروش آنلاین با ارسال رایگان</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">VIP Sample Kit</h2>
                  <p className="text-primary-100 mb-6 leading-relaxed">
                    کیت نمونه‌گیری حرفه‌ای شامل ۴ نوع فیلم، کنترلر هوشمند، ترانسفورماتور و کاتالوگ کامل فنی. برای معماران و طراحان.
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <Link href="/#contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
                      <ShoppingCart className="h-4 w-4" aria-hidden="true" /> سفارش کیت نمونه
                    </Link>
                    <span className="flex items-center gap-2 text-sm text-primary-200">
                      <Truck className="h-4 w-4" aria-hidden="true" />
                      ارسال رایگان سراسر ایران
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="aspect-square max-w-[280px] w-full rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Package className="h-20 w-20 text-white/40" aria-hidden="true" />
                  </div>
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
