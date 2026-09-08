import Header from '@/components/demo2/Header'
import Hero from '@/components/demo2/Hero'
import ContentSections from '@/components/demo2/ContentSections'
import LeadSection from '@/components/demo2/LeadSection'
import Footer from '@/components/demo2/Footer'

export default function HomePage() {
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
