import DefaultLayout from '../layouts/DefaultLayout'
import Hero from '../components/Hero'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Scheduling from '../components/Scheduling'
import Services from '../components/Services'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
export default function Home() {
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