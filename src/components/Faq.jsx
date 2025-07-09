import React, { useState, useRef, useEffect } from 'react'
import './Faq.css'

const faqData = [
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
    question: 'Schwarzenegger',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem esse eligendi voluptatibus necessitatibus inventore saepe optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci in quas minus sapiente quia alias, quos fugit voluptatibus sed laborum possimus architecto atque hic optio. Voluptates deserunt quasi maiores!'
  },
  {
    question: 'Stallone',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem esse eligendi voluptatibus necessitatibus inventore saepe optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci in quas minus sapiente quia alias, quos fugit voluptatibus sed laborum possimus architecto atque hic optio. Voluptates deserunt quasi maiores!'
  }
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)
  const contentRefs = useRef([]) // array para refs das respostas

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq">
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
  )
}
