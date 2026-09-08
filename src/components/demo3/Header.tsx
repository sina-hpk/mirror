'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const navItems = [
  { href: '#technologies', label: 'فناوری‌ها' },
  { href: '#why', label: 'چرا فلمبیس' },
  { href: '#applications', label: 'کاربردها' },
  { href: '#faq', label: 'سؤالات متداول' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="k-topbar">
        <a href="tel:02112345678" className="k-topbar-item"><Phone size={12} aria-hidden="true" /><bdi>۰۲۱-۱۲۳۴۵۶۷۸</bdi></a>
        <a href="mailto:info@filmbase.ir" className="k-topbar-item" dir="ltr">info@filmbase.ir</a>
      </div>
      <header className="k-header">
        <div className="k-header-inner">
          <a href="/demo3" className="k-logo" aria-label="فلمبیس — صفحه اصلی">
            <span className="k-logo-mark" aria-hidden="true" />
            <span className="k-logo-text">
              <strong>فلمبیس</strong>
              <small>شیشه هوشمند</small>
            </span>
          </a>
          <nav className="k-nav" aria-label="منوی اصلی">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a href="#quote" className="k-header-cta">درخواست دمو رایگان</a>
          <button type="button" className="k-burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'بستن منو' : 'باز کردن منو'}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <nav className="k-mobile-nav" aria-label="منوی موبایل">
            {[...navItems, { href: '#quote', label: 'درخواست دمو رایگان' }].map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}
