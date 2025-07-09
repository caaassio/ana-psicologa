import React from 'react'
import './Contact.css' // ajuste conforme seu arquivo de estilos

export default function Contato() {
  return (
    <section id="contato">
      <div className="contato-wrapped">
        <h2>Entre em contato</h2>

        <div className="contato-info">
          <a
            href="mailto:anacpsicologa@icloud.com"
            className="contato-item"
            aria-label="Marcar consulta por email"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-envelope"></i> anacpsicologa@icloud.com
          </a>
          <a
            href="tel:+5511949186999"
            className="contato-item"
            aria-label="Agendar consulta pelo telefone"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-phone"></i> +55 11 94918 6999
          </a>
          <a
            href="https://wa.me/5511949186999"
            target="_blank"
            className="contato-item"
            aria-label="Agendar consulta pelo WhatsApp"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>

        <div className="redes-sociais">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/anacpsicologa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link para o facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/anacpsicologa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link para o instagram da psicóloga Ana Carolline"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}