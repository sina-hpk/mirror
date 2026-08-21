'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const navItems = [
  { href: '#features', label: 'مزایا' },
  { href: '#applications', label: 'کاربردها' },
  { href: '#certificates', label: 'گواهینامه‌ها' },
  { href: '#products', label: 'محصولات' },
  { href: '#contact', label: 'تماس' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = isScrolled || isMenuOpen

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid
            ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(23,23,23,0.06),0_8px_24px_-16px_rgba(23,23,23,0.2)] border-b border-surface-200/70'
            : 'bg-gradient-to-b from-surface-950/60 to-transparent backdrop-blur-[2px]'
        }`}
      >
        <nav className="container-custom" aria-label="منوی اصلی">
          <div className="flex h-16 md:h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label="فلمبیس - صفحه اصلی"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 via-primary-500 to-accent-600 shadow-lg shadow-primary-500/30">
                <div className="absolute inset-x-1.5 top-1.5 h-2 rounded-full bg-white/30" aria-hidden="true" />
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className={`text-xl font-bold transition-colors ${solid ? 'text-surface-900' : 'text-white'}`}>
                فلمبیس
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    solid
                      ? 'text-surface-600 hover:bg-primary-50 hover:text-primary-600'
                      : 'text-surface-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex md:items-center md:gap-2">
              <ThemeSwitcher solid={solid} />
              <Link href="#contact" className="btn-primary">
                درخواست مشاوره
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-1 md:hidden">
              <ThemeSwitcher solid={solid} />
              <button
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                  solid ? 'text-surface-700 hover:bg-surface-100' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(true)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="باز کردن منو"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-surface-950/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel (slides from the right for RTL) */}
      <aside
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 z-[70] h-full w-72 max-w-[80%] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="منوی موبایل"
      >
        <div className="flex h-16 items-center justify-between border-b border-surface-200 px-4">
          <span className="text-lg font-bold text-surface-900">فلمبیس</span>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-surface-700 hover:bg-surface-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="بستن منو"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4" aria-label="منوی موبایل">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-3 text-base font-medium text-surface-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="btn-primary mt-3 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            درخواست مشاوره و پیش‌فاکتور
          </Link>
        </nav>
      </aside>
    </>
  )
}
