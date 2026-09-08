import type { Metadata } from 'next'
import './keloo.css'
import Header from '@/components/demo3/Header'
import Hero from '@/components/demo3/Hero'
import Sections from '@/components/demo3/Sections'
import Footer from '@/components/demo3/Footer'

export const metadata: Metadata = {
  title: 'فلمبیس | فیلم حریم هوشمند سوییچ‌شو — شیشه هوشمند PDLC',
  description:
    'تأمین و نصب فیلم شیشه هوشمند سوییچ‌شو، شیشه هوشمند و نمایشگر شفاف LED در ایران — حریم آنی، گارانتی ۱۰ ساله، اندازه سفارشی.',
}

export default function Demo3Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </>
  )
}
