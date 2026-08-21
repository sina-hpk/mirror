import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Shield, Award, Truck, Headphones } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'درباره ما', href: '/about' },
    { label: 'تاریخچه فلمبیس', href: '/about#history' },
    { label: 'تیم مدیریت', href: '/about#team' },
    { label: 'گواهینامه‌ها', href: '/certificates' },
    { label: 'خبرها و رویدادها', href: '/news' },
    { label: 'فرصت‌های شغلی', href: '/careers' },
  ],
  products: [
    { label: 'کاتالوگ کامل', href: '/products' },
    { label: 'فیلم PDLC استاندارد', href: '/products#pdlc-standard' },
    { label: 'فیلم PDLC پرضوح', href: '/products#pdlc-high-clarity' },
    { label: 'تکنولوژی PNLC', href: '/products#pnlc' },
    { label: 'فیلم‌های رنگی', href: '/products#colored' },
    { label: 'VIP Sample Kit', href: '/products#vip-kit' },
  ],
  services: [
    { label: 'مشاوره و طراحی', href: '/services#consulting' },
    { label: 'نصب و مونتاژ', href: '/services#installation' },
    { label: 'سرویس پس از فروش', href: '/services#support' },
    { label: 'ضمانت و گارانتی', href: '/services#warranty' },
    { label: 'آموزش و انتقال دانش', href: '/services#training' },
    { label: 'پروژه‌های مرجع', href: '/projects' },
  ],
  support: [
    { label: 'تماس با ما', href: '/contact' },
    { label: 'سوالات متداول', href: '/faq' },
    { label: 'راهنمای خرید', href: '/buying-guide' },
    { label: 'شرایط استفاده', href: '/terms' },
    { label: 'حریم خصوصی', href: '/privacy' },
    { label: 'سیاست بازگرداند', href: '/returns' },
  ],
}

const trustBadges = [
  { icon: Shield, title: 'گواهینامه CE', desc: 'مطابق دستورالعمل 2014/53/EU' },
  { icon: Award, title: 'مطابقت RoHS', desc: 'بدون مواد خطرناک' },
  { icon: Truck, title: 'ارسال سراسر ایران', desc: 'پست پیشتاز و پیمانکاری' },
  { icon: Headphones, title: 'پشتیبانی ۲۴/۷', desc: 'فنی و فروش' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const persianYear = new Intl.DateTimeFormat('fa-IR-u-nu-latn', { year: 'numeric' }).format(new Date())

  return (
    <footer className="relative bg-surface-950 text-surface-300" role="contentinfo">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-primary-500/60 to-transparent" aria-hidden="true" />
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label="فلمبیس - صفحه اصلی">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 via-primary-500 to-cyan-600 shadow-lg shadow-primary-500/30">
                <div className="absolute inset-x-1.5 top-1.5 h-2 rounded-full bg-white/30" aria-hidden="true" />
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">فلمبیس</span>
            </Link>
            <p className="text-surface-400 leading-relaxed mb-6 text-sm">
              مرجع تخصصی تولید، فروش، نصب و مونتاژ شیشه‌های هوشمند PDLC و PNLC در ایران با گواهینامه‌های بین‌المللی CE و RoHS.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+982112345678" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </a>
              <a href="mailto:info@filmbase.ir" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <Mail className="h-5 w-5" aria-hidden="true" />
                <span>info@filmbase.ir</span>
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span>تهران، خیابان ولی‌عصر، کوچه ۱۲، پلاک ۴۵</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {[
                { icon: Instagram, href: 'https://instagram.com/filmbase.ir', label: 'اینستاگرام' },
                { icon: Linkedin, href: 'https://linkedin.com/company/filmbase', label: 'لینکدین' },
                { icon: Twitter, href: 'https://twitter.com/filmbase_ir', label: 'توییتر' },
                { icon: Youtube, href: 'https://youtube.com/@filmbase', label: 'یوتیوب' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-800 text-surface-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <nav aria-label="منوی شرکت">
            <h3 className="text-white font-semibold mb-4">شرکت</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products Links */}
          <nav aria-label="منوی محصولات">
            <h3 className="text-white font-semibold mb-4">محصولات</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Links */}
          <nav aria-label="منوی خدمات">
            <h3 className="text-white font-semibold mb-4">خدمات</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support Links */}
          <nav aria-label="منوی پشتیبانی">
            <h3 className="text-white font-semibold mb-4">پشتیبانی</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-surface-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-surface-900/50 border border-surface-800">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/20 text-primary-400">
                  <badge.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{badge.title}</p>
                  <p className="text-surface-500 text-xs">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-surface-800 bg-surface-900/50">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-surface-500">
              © {persianYear} فلمبیس. تمام حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-6 text-sm text-surface-500">
              <Link href="/terms" className="hover:text-primary-400 transition-colors">شرایط استفاده</Link>
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">حریم خصوصی</Link>
              <Link href="/cookies" className="hover:text-primary-400 transition-colors">کوکی‌ها</Link>
              <Link href="/accessibility" className="hover:text-primary-400 transition-colors">دسترسی‌پذیری</Link>
            </div>
            <p className="text-xs text-surface-600">
              طراحی و توسعه با ❤️ توسط تیم فلمبیس
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}