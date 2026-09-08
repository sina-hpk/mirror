'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

/* سوییچر کشیدنی اتاق جلسه — با کشیدن از چپ یا راست، دیوار شیشه‌ای تا نقطه دست مات می‌شود */
export default function OfficeDragSwitcher() {
  const frameRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  /* درصد مرز مات شدن — از راست (۰ = کاملاً شفاف) */
  const [frostPct, setFrostPct] = useState(0)

  const updateFromPointer = useCallback((clientX: number) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    /* در RTL مات شدن از سمت راست شروع می‌شود */
    const pct = ((rect.right - clientX) / rect.width) * 100
    setFrostPct(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    updateFromPointer(event.clientX)
    try {
      event.currentTarget.setPointerCapture(event.pointerId)
      setDragging(true)
    } catch {
      /* pointerId نامعتبر — بدون capture ادامه می‌دهیم */
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
      /* pointerId نامعتبر — نادیده می‌گیریم */
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') setFrostPct((p) => Math.min(100, p + 5))
    if (event.key === 'ArrowRight') setFrostPct((p) => Math.max(0, p - 5))
  }

  return (
    <div className="isg-drag-switcher">
      <div
        ref={frameRef}
        className={`isg-drag-frame ${dragging ? 'is-dragging' : ''}`}
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
          sizes="(max-width: 1024px) 92vw, 760px"
          className="isg-drag-img"
        />
        <div className="isg-drag-frost" style={{ clipPath: `inset(0 0 0 ${100 - frostPct}%)` }} aria-hidden="true">
          <Image
            src="/images/office-frost.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 92vw, 760px"
            className="isg-drag-img"
          />
        </div>
        {/* خط و دستگیره مرز */}
        <div className="isg-drag-handle" style={{ right: `${frostPct}%` }} aria-hidden="true">
          <span className="isg-drag-grip"><MoveHorizontal size={16} /></span>
        </div>
      </div>
      <p className="isg-drag-caption">
        انگشت یا موس را روی تصویر از چپ یا راست بکشید — دیوار شیشه‌ای تا نقطه دست شما مات می‌شود
      </p>
    </div>
  )
}
