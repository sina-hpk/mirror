import Link from 'next/link'
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'

const columns = [
  {
    title: 'فلمبیس',
    links: [
      { label: 'درباره ما', href: '/about' },
      { label: 'گواهینامه‌ها', href: '/certificates' },
      { label: 'خبرها و رویدادها', href: '/news' },
      { label: 'فرصت‌های شغلی', href: '/careers' },
    ],
  },
  {
    title: 'محصولات و خدمات',
    links: [
      { label: 'کاتالوگ محصولات', href: '/products' },
      { label: 'VIP Sample Kit', href: '/products#vip-kit' },
      { label: 'خدمات', href: '/services' },
      { label: 'پروژه‌ها', href: '/projects' },
    ],
  },
  {
    title: 'راهنما',
    links: [
      { label: 'تماس با ما', href: '/contact' },
      { label: 'سؤالات متداول', href: '/faq' },
      { label: 'راهنمای خرید', href: '/buying-guide' },
      { label: 'سیاست بازگرداندن', href: '/returns' },
    ],
  },
] as const

const socials = [
  { icon: Instagram, href: 'https://instagram.com/filmbase.ir', label: 'اینستاگرام فلمبیس' },
  { icon: Linkedin, href: 'https://linkedin.com/company/filmbase', label: 'لینکدین فلمبیس' },
  { icon: Twitter, href: 'https://twitter.com/filmbase_ir', label: 'توییتر فلمبیس' },
  { icon: Youtube, href: 'https://youtube.com/@filmbase', label: 'یوتیوب فلمبیس' },
] as const

const legalLinks = [
  { label: 'شرایط استفاده', href: '/terms' },
  { label: 'حریم خصوصی', href: '/privacy' },
  { label: 'کوکی‌ها', href: '/cookies' },
  { label: 'دسترسی‌پذیری', href: '/accessibility' },
] as const

export default function Footer() {
  const persianYear = new Intl.DateTimeFormat('fa-IR', { year: 'numeric' }).format(new Date())

  return (
    <footer dir="rtl" className="border-t border-white/10 bg-[#061923] text-right text-slate-300" role="contentinfo">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,1fr)] lg:gap-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-white" aria-label="فلمبیس، صفحه اصلی">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b8f70] font-black" aria-hidden="true">ف</span>
              <span className="text-xl font-black">فلمبیس</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              تولید، فروش، نصب و مونتاژ شیشه‌های هوشمند PDLC و PNLC در ایران.
            </p>
            <address className="mt-5 space-y-3 text-sm not-italic">
              <a href="tel:+982112345678" className="flex items-center gap-2 transition hover:text-[#55d5b3]">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" /><bdi>۰۲۱-۱۲۳۴۵۶۷۸ | ۰۹۱۲-۳۴۵۶۷۸۹</bdi>
              </a>
              <a href="mailto:info@filmbase.ir" className="flex items-center gap-2 transition hover:text-[#55d5b3]">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /><bdi>info@filmbase.ir | sales@filmbase.ir</bdi>
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start gap-2 transition hover:text-[#55d5b3]">
                <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>تهران، خیابان ولی‌عصر، کوچه ۱۲، پلاک ۴۵، واحد ۳</span>
              </a>
            </address>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="mb-4 text-sm font-bold text-white">{column.title}</h2>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-slate-400 transition hover:text-[#55d5b3]">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-[#0b8f70] hover:bg-[#0b8f70] hover:text-white">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
          <nav aria-label="پیوندهای حقوقی">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
              {legalLinks.map((link) => <li key={link.href}><Link href={link.href} className="transition hover:text-[#55d5b3]">{link.label}</Link></li>)}
            </ul>
          </nav>
          <p className="text-xs text-slate-500">© {persianYear} فلمبیس. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
