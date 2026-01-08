import React from 'react'
import './Services.css'

const services = [
  {
    icon: 'fa-face-anxious-sweat',
    title: 'Ansiedade',
    text: 'A ansiedade pode se manifestar como preocupação excessiva, medo constante e tensão emocional. Na psicoterapia, trabalhamos a compreensão desses sintomas e o desenvolvimento de recursos para lidar melhor com as emoções, promovendo mais equilíbrio e qualidade de vida.'
  },
  {
    icon: 'fa-face-expressionless',
    title: 'Depressão',
    text: ' A depressão pode envolver tristeza persistente, desânimo e sensação de vazio. O processo terapêutico oferece um espaço de escuta e acolhimento para compreender esse sofrimento e resgatar sentidos, respeitando o tempo e a história de cada pessoa.'
  },
  {
    icon: 'fa-thumbs-up',
    title: 'Autoestima',
    text: 'Dificuldades na autoestima podem gerar insegurança, autocrítica e dificuldade em se posicionar. Na terapia, trabalhamos a construção de uma relação mais gentil consigo, fortalecendo identidade, limites e autonomia emocional.'
  },
  {
    icon: 'fa-handshake',
    title: 'Relacionamentos',
    text: 'Conflitos nos relacionamentos familiares, amorosos ou sociais podem gerar sofrimento e repetição de padrões. A psicoterapia ajuda a compreender essas dinâmicas e a construir vínculos mais conscientes, saudáveis e autênticos.'
  },
  {
    icon: 'fa-regular fa-rotate-exclamation',
    title: 'Compulsões',
    text: 'As compulsões costumam funcionar como tentativas de aliviar angústias internas. Na terapia, buscamos compreender o sentido desses comportamentos e desenvolver formas mais conscientes e saudáveis de lidar com as emoções.'
  },
  {
    icon: 'fa-briefcase',
    title: 'Carreira',
    text: 'Questões de carreira podem envolver insegurança, esgotamento ou dificuldade de escolhas. A psicoterapia oferece um espaço para refletir sobre trajetórias, desejos e limites, favorecendo decisões mais alinhadas ao bem-estar emocional.'
  }
]

export default function Servicos() {
  return (
    <section id="servicos">
      <h2>Como eu posso te ajudar</h2>
      <div className="content-servicos">
        {services.map(({ icon, title, text }, index) => (
          <a
            href="https://wa.me/5511949186999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            aria-label="Agendar consulta pelo WhatsApp"
            rel="noopener noreferrer"
            className="service-card-link"
          >
        
            <div className="service-card" key={index}>
              <div className="service-header">
                <i className={`fa-regular ${icon}`}></i>
                <h3>{title}</h3>
              </div>
              <div className="service-content">{text}</div>
            </div>
            
          </a>
        ))}
      </div>
    </section>
  )
}