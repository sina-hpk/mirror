import type { Metadata } from 'next'
import './isg.css'
import ContactPage from '@/components/demo4/ContactPage'

export const metadata: Metadata = {
  title: 'فلمبیس | شیشه هوشمند و فیلم PDLC — محصولات، سؤالات متداول و تماس',
  description: 'شیشه‌های هوشمند شفاف یا خصوصی، هر زمان که بخواهید — محصولات، مزایا، سؤالات متداول و فرم استعلام قیمت فلمبیس.',
}

export default function Demo4Page() {
  return <ContactPage />
}
