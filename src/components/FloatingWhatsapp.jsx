import { useEffect, useState } from 'react'
import './FloatingWhatsapp.css'

export default function FloatingWhatsapp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const homeSection = document.getElementById('home')
    if (!homeSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      {
        threshold: 0.1
      }
    )

    observer.observe(homeSection)

    return () => observer.disconnect()
  }, [])

  return (
    <a
      href="https://wa.me/5511949186999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className={`floating-whatsapp ${visible ? 'show' : ''}`}
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  )
}
