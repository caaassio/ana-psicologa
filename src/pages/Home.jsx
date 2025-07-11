import DefaultLayout from '../layouts/DefaultLayout'
import Hero from '../components/Hero'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Scheduling from '../components/Scheduling'
import Services from '../components/Services'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function Home() {

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100) // espera o DOM renderizar
      }
    }
  }, [location])

  return (
    
    <DefaultLayout>
      <Hero />
      <About />
      <Testimonials />
      <Scheduling />
      <Services />
      <Faq />
      <Contact />
    </DefaultLayout>

  )
}