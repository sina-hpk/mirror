import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Applications from '@/components/Applications'
import Certificates from '@/components/Certificates'
import Products from '@/components/Products'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'دمو ۱ | طراحی اصلی فلمبیس',
  description: 'نسخه اصلی وب‌سایت شیشه هوشمند فلمبیس با معرفی محصولات، کاربردها و فرم مشاوره.',
}

export default function Demo1Page() {
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
