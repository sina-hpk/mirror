'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

const stats = [
  { value: '+۵۰۰', label: 'پروژه اجراشده' },
  { value: '۱۰ سال', label: 'گارانتی محصولات' },
  { value: '۳۰٪', label: 'صرفه‌جویی انرژی' },
  { value: '<۱s', label: 'سرعت سوییچ' },
]

/* سوییچر کشیدنی اتاق جلسه */
function OfficeDragSwitcher() {
  const frameRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const [frostPct, setFrostPct] = useState(0)

  const updateFromPointer = useCallback((clientX: number) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    const pct = ((rect.right - clientX) / rect.width) * 100
    setFrostPct(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    updateFromPointer(event.clientX)
    try {
      event.currentTarget.setPointerCapture(event.pointerId)
      setDragging(true)
    } catch {
      /* pointerId نامعتبر */
    }
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    updateFromPointer(event.clientX)
  }

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false)
    try {
      event.currentTarget.releasePointerCapture(event.pointerId)
    } catch {
      /* pointerId نامعتبر */
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') setFrostPct((p) => Math.min(100, p + 5))
    if (event.key === 'ArrowRight') setFrostPct((p) => Math.max(0, p - 5))
  }

  return (
    <div className="n-drag-wrap">
      <p className="n-switch-label"><span className="n-chip-dot n-dot-purple" />پارتیشن دفتر — با دست بکشید:</p>
      <div
        ref={frameRef}
        className={`n-drag-frame ${dragging ? 'is-dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
        role="slider"
        tabIndex={0}
        aria-label="میزان مات شدن دیوار شیشه‌ای — بکشید"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(frostPct)}
        aria-valuetext={frostPct === 0 ? 'کاملاً شفاف' : frostPct === 100 ? 'کاملاً مات' : `${Math.round(frostPct)}٪ مات`}
      >
        <Image
          src="/images/office-clear.jpg"
          alt="اتاق جلسه با دیوار شیشه‌ای شفاف"
          fill
          sizes="(max-width: 1024px) 92vw, 560px"
          className="n-switch-img"
        />
        <div className="n-drag-frost" style={{ clipPath: `inset(0 0 0 ${100 - frostPct}%)` }} aria-hidden="true">
          <Image
            src="/images/office-frost.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 92vw, 560px"
            className="n-switch-img"
          />
        </div>
        <div className="n-drag-handle" style={{ right: `${frostPct}%` }} aria-hidden="true">
          <span className="n-drag-grip"><MoveHorizontal size={15} /></span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [isTransparent, setIsTransparent] = useState(true)

  return (
    <section className="n-hero" aria-labelledby="n-hero-title">
      <div className="n-container">
        <div className="n-hero-grid">
          <div className="n-hero-copy">
            <p className="n-hero-kicker">شیشه هوشمند PDLC / PNLC</p>
            <h1 id="n-hero-title">
              فلمبیس، <span className="n-grad-text">شیشه‌های هوشمند؛</span>
              <br />
              شفاف یا خصوصی، هر زمان که بخواهید
            </h1>
            <p className="n-hero-sub">
              مرجع تخصصی تولید، فروش، نصب و مونتاژ شیشه‌های هوشمند در ایران؛
              کنترل نور، حریم خصوصی و عایق‌بندی تنها با یک لمس.
            </p>
            <div className="n-hero-actions">
              <a href="#quote" className="n-btn n-btn-primary">استعلام قیمت رایگان</a>
              <Link href="/#products" className="n-btn n-btn-soft">مشاهده محصولات</Link>
            </div>
            <ul className="n-stats" aria-label="آمار فلمبیس">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* هر دو دمو: سوییچر خانه + کشیدنی دفتر */}
          <div className="n-hero-demos">
            <div className="n-toggle-wrap">
              <p className="n-switch-label"><span className="n-chip-dot n-dot-blue" />خانه ویلایی — با دکمه سوییچ کنید:</p>
              <div className="n-toggle-frame">
                <Image
                  src="/images/hero-interior.webp"
                  alt="خانه‌ای با شیشه‌های هوشمند در حالت شفاف"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="n-switch-img"
                />
                <Image
                  src="/images/hero-interior-frost.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className={`n-switch-img n-toggle-frost ${isTransparent ? '' : 'is-on'}`}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="n-toggle-btn"
                  onClick={() => setIsTransparent((current) => !current)}
                  aria-pressed={!isTransparent}
                >
                  <span className={isTransparent ? 'is-active' : ''}>شفاف</span>
                  <span className="n-toggle-arrows" aria-hidden="true">⇌</span>
                  <span className={!isTransparent ? 'is-active' : ''}>مات</span>
                </button>
              </div>
            </div>
            <OfficeDragSwitcher />
          </div>
        </div>
      </div>
    </section>
  )
}
