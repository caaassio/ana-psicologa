import React, { useEffect } from 'react'
import './Hero.css'
import bgHome from '../assets/bg-home.jpg'

export default function Hero() {
  useEffect(() => {
    if (window.jarallax) {
      window.jarallax(document.querySelectorAll('[data-jarallax]'), {
        speed: 0.5,
      })
    }
  }, [])

  return (
    <section id="home" data-jarallax data-speed="0.5">
      <img className="jarallax-img" src={bgHome} alt="Fundo psicologia" />

      <div className="texto-home">
        <h1>Às vezes, a vida vai ficando silenciosamente pesada</h1>

        <p>
          O que antes se resolvia com tempo ou distração, <b>já não parece funcionar</b>.
          Você vem acumulando inquietações no seu dia a dia. Talvez você ainda não saiba exatamente o que quer,
          mas sente que algo precisa <b>mudar</b>.
          <br/>É nesse ponto que muitas pessoas chegam até mim.
        </p>

      <div className="btn-wrapper">
        <a
          href="https://wa.me/5511949186999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
          target="_blank"
          aria-label="Agendar consulta pelo WhatsApp"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          COMECE A SUA MUDANÇA POR AQUI
        </a>

        <button
          className="btn-whatsapp-saiba"
          onClick={() => {
            const section = document.getElementById('servicos')
            if (section) {
              const yOffset = -80 
              const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset

              window.scrollTo({ top: y, behavior: 'smooth' })
            }
          }}
        >
          SAIBA MAIS
        </button>

      </div>
        
      </div>
    </section>
  )
}
