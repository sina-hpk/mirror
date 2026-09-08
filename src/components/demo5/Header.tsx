'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const navItems = [
  { href: '#features', label: 'قابلیت‌ها' },
  { href: '#how', label: 'مراحل کار' },
  { href: '#testimonials', label: 'نظر مشتریان' },
  { href: '#faq', label: 'سؤالات متداول' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="n-header">
      <div className="n-container n-header-inner">
        <a href="/demo5" className="n-logo" aria-label="فلمبیس — صفحه اصلی">
          <span className="n-logo-mark" aria-hidden="true" />
          <span className="n-logo-text">
            <strong>فلمبیس</strong>
            <small>شیشه هوشمند</small>
          </span>
        </a>
        <nav className="n-nav" aria-label="منوی اصلی">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="n-header-actions">
          <a href="tel:02112345678" className="n-login"><Phone size={15} aria-hidden="true" /><span>تماس</span></a>
          <a href="#quote" className="n-signup">استعلام قیمت</a>
        </div>
        <button type="button" className="n-burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'بستن منو' : 'باز کردن منو'}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="n-mobile-nav" aria-label="منوی موبایل">
          {[...navItems, { href: '#quote', label: 'استعلام قیمت' }].map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
