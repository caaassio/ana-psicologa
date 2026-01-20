import React, { useEffect, useRef, useState } from 'react'
import './About.css'

import imageHome from '../assets/image-home.jpg'
import imageAbout1 from '../assets/image-about-1.jpg'
import imageAbout2 from '../assets/image-about-2.jpg'
import imageAbout3 from '../assets/image-about-3.jpg'

const imagens = [imageAbout1, imageAbout2, imageAbout3]

export default function About() {
  const [indiceAtual, setIndiceAtual] = useState(0)
  const intervaloRef = useRef(null)

  useEffect(() => {
    intervaloRef.current = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % imagens.length)
    }, 8000)

    return () => clearInterval(intervaloRef.current) 
  }, [])

  return (
    <section id="sobre">
      <div className="header-about">
        <h2>Conheça a Ana</h2>
      </div>

      <div className="grid">
        <div className="content-sobre">
          <p>
            Meu nome é Ana Carolline, mas pode me chamar de Ana ou de Carol. Sou psicóloga (CRP 06/154233) formada pela Universidade Paulista (2018), com início da graduação na Universidade Federal do Amazonas em 2012. Atuo na clínica desde 2019, em atendimentos on-line com adolescentes e adultos. Já acompanhei mais de 600 pessoas, residentes no Brasil e também no exterior.
            <br /><br />
            Minha base é a psicanálise freudiana, mas com um olhar adaptado ao tempo em que vivemos. Acredito que, para cuidar de alguém hoje, é preciso entender os desafios da atualidade, não dá pra manter tudo como era há cem anos. Trago essa escuta para o meu trabalho: profunda, mas também contemporânea, acolhendo o que pulsa no agora.
            <br /><br />
            Gosto de pensar que assim como árvores, temos raízes que nos sustentam (nossas vivências, aprendizados, cicatrizes e feridas) e a psicanálise me ajuda a olhar para essas raízes, mas também para o que floresce no presente: nossos relacionamentos, angústias, escolhas, desejos e repetições. O que dói hoje tem história, mas também tem urgência.
            <br /><br />
            Sou mãe, e a maternidade me atravessa como um rio: às vezes manso, às vezes agitado, mas sempre presente.
            Ela transformou minha forma de estar no mundo, de ouvir o outro, de cuidar com mais presença e verdade.
            Essa experiência me fez mais atenta ao que não é dito, mais sensível ao cansaço, ao invisível e às perguntas que não têm resposta fácil.
          </p>
        </div>

        <div className="foto-sobre">
          <img src={imageHome} alt="Foto da Psicóloga Ana Carolline sorrindo" loading="lazy" />
        </div>

        <div className="content-sobre-inferior">
          <p>
            Vivo com meu marido, minha filha pequena e nossos gatos no interior de São Paulo. Já mudei de cidade algumas vezes e conheço o caminho, nem sempre fácil, de recomeçar e se readaptar.
            <br /><br />
            Tenho formações complementares nas áreas de ansiedade, adultez emergente, compulsão alimentar, comunicação não violenta, atitude autocompassiva e psicanálise.
            Atendo principalmente mulheres jovens que estão lidando com ansiedade, conflitos familiares e amorosos, TOC, depressão, burnout, maternidade e outras questões.
            <br /><br />
            Meu trabalho é feito de encontros reais.
            De uma escuta que não apressa, não julga, não cobra. Só acolhe.
            Com presença, afeto e a paciência de quem sabe que viver, às vezes, é por si só um bonito esforço.
          </p>
        </div>

       <div className="foto-sobre-inferior">
          {imagens.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`foto-slide ${i === indiceAtual ? 'ativo' : ''}`}
              alt="Foto da Psicóloga Ana Carolline"
              loading="lazy"
            />
          ))}
        </div>

      </div>
      
    </section>
  )
}
