import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Applications from '@/components/Applications'
import Certificates from '@/components/Certificates'
import Products from '@/components/Products'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1" id="main-content">
        <Hero />
        <Features />
        <Applications />
        <Certificates />
        <Products />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}