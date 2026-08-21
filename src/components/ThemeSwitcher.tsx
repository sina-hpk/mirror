'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Palette } from 'lucide-react'

export type ThemeId = 'ocean' | 'crimson' | 'emerald' | 'violet'

export const THEMES: { id: ThemeId; label: string; swatch: [string, string] }[] = [
  { id: 'ocean', label: 'اقیانوس', swatch: ['#0ea5e9', '#06b6d4'] },
  { id: 'crimson', label: 'قرمز شیری', swatch: ['#dc2626', '#faf8f4'] },
  { id: 'emerald', label: 'زمرد', swatch: ['#10b981', '#14b8a6'] },
  { id: 'violet', label: 'بنفش', swatch: ['#8b5cf6', '#d946ef'] },
]

const STORAGE_KEY = 'filmbase_theme'

function applyTheme(id: ThemeId) {
  const root = document.documentElement
  if (id === 'ocean') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', id)
  }
}

export default function ThemeSwitcher({ solid = true }: { solid?: boolean }) {
  const [theme, setTheme] = useState<ThemeId>('ocean')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null
      if (saved && THEMES.some((t) => t.id === saved)) {
        setTheme(saved)
        applyTheme(saved)
      }
    } catch {}
  }, [])

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const choose = (id: ThemeId) => {
    setTheme(id)
    applyTheme(id)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {}
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="انتخاب تم رنگی"
        title="تم رنگی"
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
          solid
            ? 'text-surface-600 hover:bg-primary-50 hover:text-primary-600'
            : 'text-surface-100 hover:bg-white/10 hover:text-white'
        }`}
      >
        <Palette className="h-5 w-5" aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="تم رنگی"
          className="absolute left-0 mt-2 w-52 rounded-2xl border border-surface-200 bg-white p-2 shadow-xl shadow-surface-900/10 z-[80]"
        >
          <p className="px-3 pb-1.5 pt-1 text-xs font-medium text-surface-500">تم رنگی سایت</p>
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === t.id}
              onClick={() => choose(t.id)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-surface-700 hover:bg-surface-100 transition-colors"
            >
              <span
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-surface-200"
                aria-hidden="true"
              >
                <span className="h-full w-1/2" style={{ background: t.swatch[0] }} />
                <span className="h-full w-1/2" style={{ background: t.swatch[1] }} />
              </span>
              <span className="flex-1 text-right">{t.label}</span>
              {theme === t.id && <Check className="h-4 w-4 text-primary-600" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
