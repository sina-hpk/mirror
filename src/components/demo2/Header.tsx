'use client'

import Link from 'next/link'
import { ArrowLeft, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const navItems = [
  { href: '/#features', label: 'چرا فلمبیس' },
  { href: '/#applications', label: 'کاربردها' },
  { href: '/#products', label: 'محصولات' },
  { href: '/#evidence', label: 'استانداردها' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
      if (event.key === 'Tab') {
        const focusable = drawerRef.current?.querySelectorAll<HTMLElement>('button, a[href]')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="announcement-bar">
        <p>
          <span className="announcement-dot" aria-hidden="true" />
          مشاوره تخصصی انتخاب شیشه هوشمند برای پروژه شما
        </p>
        <Link href="/#contact">
          دریافت راهنمایی رایگان
          <ArrowLeft size={15} aria-hidden="true" />
        </Link>
      </div>

      <nav className="header-nav container-custom" aria-label="منوی اصلی">
        <Link href="/" className="brand-mark" aria-label="فلمبیس، صفحه اصلی">
          <span className="brand-symbol" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="brand-copy">
            <strong>فلمبیس</strong>
            <small>شیشه هوشمند</small>
          </span>
        </Link>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>

        <Link href="/#contact" className="header-cta">
          برآورد پروژه
          <ArrowLeft size={17} aria-hidden="true" />
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen(true)}
          aria-expanded={isMenuOpen}
          aria-controls="demo2-mobile-menu"
          aria-label="باز کردن منو"
        >
          <Menu aria-hidden="true" />
        </button>
      </nav>

      <div
        className={`drawer-backdrop ${isMenuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside
        ref={drawerRef}
        id="demo2-mobile-menu"
        className={`mobile-drawer ${isMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="منوی موبایل"
        aria-hidden={!isMenuOpen}
      >
        <div className="drawer-head">
          <span className="drawer-title">فلمبیس</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMenu}
            aria-label="بستن منو"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="منوی موبایل">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
              <span>۰{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="drawer-cta" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
            درخواست مشاوره
            <ArrowLeft size={18} aria-hidden="true" />
          </Link>
        </nav>
        <p>طراحی، تأمین و اجرای راهکارهای شیشه هوشمند</p>
      </aside>
    </header>
  )
}
