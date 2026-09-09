import type { Metadata } from 'next'
import Header from '@/components/demo2/Header'
import Hero from '@/components/demo2/Hero'
import ContentSections from '@/components/demo2/ContentSections'
import LeadSection from '@/components/demo2/LeadSection'
import Footer from '@/components/demo2/Footer'

export const metadata: Metadata = {
  title: 'دمو ۲ | طراحی مینیمال فلمبیس',
  description: 'نسخه مینیمال و اعتمادمحور وب‌سایت شیشه هوشمند فلمبیس.',
}

export default function Demo2Page() {
  return (
    <>
      <Header />
      <main className="flex-1" id="main-content">
        <Hero />
        <ContentSections />
        <LeadSection />
      </main>
      <Footer />
    </>
  )
}
