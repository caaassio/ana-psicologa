import React from 'react'
import './Services.css'

const services = [
  {
    icon: 'fa-face-anxious-sweat',
    title: 'Ansiedade',
    text: 'A ansiedade pode se manifestar como preocupação excessiva, medo constante, agitação, tensão corporal ou dificuldade para relaxar. Muitas vezes, ela aparece quando algo interno ou externo parece fora de controle. Na psicoterapia, trabalhamos para compreender as origens dessa ansiedade, reconhecer padrões de pensamento e desenvolver formas mais saudáveis de lidar com as emoções. O objetivo é construir mais segurança interna e qualidade de vida no dia a dia.'
  },
  {
    icon: 'fa-face-expressionless',
    title: 'Depressão',
    text: 'Sentir-se ansioso o tempo todo pode ser exaustivo. A terapia oferece um espaço seguro para compreender esses sentimentos e aprender a controlá-los no dia a dia.'
  },
  {
    icon: 'fa-thumbs-up',
    title: 'Autoestima',
    text: 'Sentir-se ansioso o tempo todo pode ser exaustivo. A terapia oferece um espaço seguro para compreender esses sentimentos e aprender a controlá-los no dia a dia.'
  },
  {
    icon: 'fa-handshake',
    title: 'Relacionamentos',
    text: 'Sentir-se ansioso o tempo todo pode ser exaustivo. A terapia oferece um espaço seguro para compreender esses sentimentos e aprender a controlá-los no dia a dia.'
  },
  {
    icon: 'fa-face-head-bandage',
    title: 'Traumas',
    text: 'Sentir-se ansioso o tempo todo pode ser exaustivo. A terapia oferece um espaço seguro para compreender esses sentimentos e aprender a controlá-los no dia a dia.'
  },
  {
    icon: 'fa-briefcase',
    title: 'Carreira',
    text: 'Sentir-se ansioso o tempo todo pode ser exaustivo. A terapia oferece um espaço seguro para compreender esses sentimentos e aprender a controlá-los no dia a dia.'
  }
]

export default function Servicos() {
  return (
    <section id="servicos">
      <h2>Como eu posso te ajudar</h2>
      <div className="content-servicos">
        {services.map(({ icon, title, text }, index) => (
          <div className="service-card" key={index}>
            <div className="service-header">
              <i className={`fa-regular ${icon}`}></i>
              <h3>{title}</h3>
            </div>
            <div className="service-content">{text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}