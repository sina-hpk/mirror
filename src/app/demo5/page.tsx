import type { Metadata } from 'next'
import './nilyar.css'
import Header from '@/components/demo5/Header'
import Hero from '@/components/demo5/Hero'
import Sections from '@/components/demo5/Sections'

export const metadata: Metadata = {
  title: 'فلمبیس | شیشه‌های هوشمند؛ شفاف یا خصوصی، هر زمان که بخواهید',
  description: 'پلتفرم کامل شیشه هوشمند فلمبیس — سوییچ آنی، حریم لحظه‌ای، صرفه انرژی و گارانتی ۱۰ ساله.',
}

export default function Demo5Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Sections />
      </main>
    </>
  )
}
