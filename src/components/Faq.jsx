import React, { useState, useRef, useEffect } from 'react'
import './Faq.css'

const faqData = [
  {
    question: 'Qual o valor da sessão?',
    answer:
    'De acordo com o Código de Ética Profissional do Psicólogo, a divulgação pública de valores não é permitida. Os honorários são informados de forma individual através do whatsapp. Caso tenha interesse, fico à disposição para esclarecer essas informações de forma privada.'
  },
  {
    question: 'Quanto tempo dura uma sessão?',
    answer: '50 minutos.'
  },
  {
    question: 'Qual a frequência das sessões?',
    answer:
      'O mais comum é uma vez por semana, mas pode variar conforme a necessidade da pessoa e recomendação do terapeuta.'
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer:
      'Isso varia de pessoa para pessoa. Algumas pessoas percebem melhorias em poucas sessões, enquanto outras precisam de meses ou anos de acompanhamento.'
  },
  {
    question: 'Tudo o que eu disser na terapia é sigiloso?',
    answer:
      'Sim, com exceção de casos onde há risco à sua vida ou à vida de terceiros.'
  },
  {
    question: 'A terapia funciona para todos?',
    answer:
      'A terapia pode ser benéfica para qualquer pessoa, mas os resultados dependem do compromisso do paciente e da relação com o terapeuta.'
  },
  {
    question: 'Como funciona a psicoterapia?',
    answer:
    'A psicoterapia é um espaço de escuta, acolhimento e reflexão, onde você pode falar livremente sobre suas emoções, vivências e dificuldades. O processo acontece de forma gradual, respeitando seu tempo, com o objetivo de promover autoconhecimento, elaboração emocional e mudanças mais conscientes.'
  },
  {
    question: 'O atendimento é online ou presencial? Como funciona o atendimento online? ',
    answer:
    'Atendo exclusivamente de forma online. As sessões acontecem por videochamada, em um horário previamente combinado. É importante estar em um local privado, com boa conexão à internet, garantindo conforto, sigilo e qualidade no atendimento.'
  },
  {
    question: 'A terapia online é eficaz?',
    answer:
    'Sim. A terapia online é reconhecida e regulamentada pelo Conselho Federal de Psicologia e apresenta resultados tão eficazes quanto o atendimento presencial, desde que realizada de forma ética e com um bom vínculo terapêutico.'
  },
]

export default function Faq() {
  
  const [activeIndex, setActiveIndex] = useState(null)
  const contentRefs = useRef([]) 
  const [expanded, setExpanded] = useState(false)

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-wrapper">
      <section id="faq" className={expanded ? 'expanded' : ''}>
        <h2>Dúvidas frequentes</h2>
        <div className="accordion">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index
            return (
              <div
                key={index}
                className={`accordion-item ${isActive ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transition = 'filter 0.5s ease-out, transform 0.5s ease-out'
                  setTimeout(() => {
                    e.currentTarget.style.transition = ''
                  }, 500)
                }}
              >
                <div className={`accordion-item-header ${isActive ? 'active' : ''}`}>
                  {item.question}
                </div>
                <div
                  className="accordion-item-body"
                  ref={el => (contentRefs.current[index] = el)}
                  style={{
                    maxHeight: isActive ? `${contentRefs.current[index]?.scrollHeight}px` : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease'
                  }}
                >
                  <div className="accordion-item-body-content">{item.answer}</div>
                </div>
              </div>
            )
          })}
        </div>

      </section>

      <div className="faq-toggle-wrapper">
          <button
            className="faq-toggle-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Ver menos' : 'Ver mais'}
          </button>
        </div>

    </section>

  )
}