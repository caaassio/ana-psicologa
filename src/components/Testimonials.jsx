import React from 'react'
import Testimonial from './Testimonial'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import useFadeIn from '../hooks/useFadeIn'

const testimonials = [

    {
        "author": "Daniela Ito",
        "text": [
            "Há alguns anos, a Ana faz parte da minha história, e desde o começo ela transformou nossas conversas em um verdadeiro espaço de compreensão e acolhimento.",
            "Ela me proporcionou um ambiente seguro onde pude explorar meus sentimentos e enfrentar meus desafios com mais confiança.",
            "Quando precisei, ela foi uma ouvinte atenta, e também uma guia, oferecendo orientações valiosas. Ela busca comigo a minha melhor versão.",
            "Obrigada, Ana. Você torna essa jornada da vida muito mais leve"
        ]
    },
    {
        "author": "Elysnay Oliveira",
        "text": [
            "No meu aniversário, resolvi me dar um presente diferente: uma sessão de terapia. Foi assim que encontrei a Ana, e desde 2020 essa tem sido uma das melhores decisões da minha vida.",
            "Cada sessão é um espaço seguro, cheio de acolhimento, onde me redescubro um pouco mais.",
            "Ana consegue, com maestria, abordar situações e emoções de forma tão profissional e humanizada que, muitas vezes, nem percebo.",
            "Seu carinho e cuidado são impressionantes e inspiradores."
        ]
    },
    {
        "author": "Amanda Dias",
        "text": [
            "Me consulto com a Ana desde 2021. E certamente ela contribuiu muito para minha evolução pessoal, mesmo diante a cenários críticos!",
            "Indico a Ana de olhos fechados, profissional competente, qualificada, e o principal, trata os pacientes com humanidade!",
            "Sempre me atendeu com toda paciência do mundo, e, sou imensamente grata pelo seu trabalho! Como sempre falamos, 'minha evolução depende dela e de mim', mas sem ela, eu não seria metade de quem sou hoje!"
        ]
    },
    {
        "author": "Sofia Rocha",
        "text": [
            "Contar com a Ana Carolline no meu processo de desenvolvimento pessoal tem sido essencial!",
            "Nossa jornada ainda está em andamento, mas, com sua ajuda, já conquistei uma maior compreensão sobre minhas inseguranças e aprendi a respeitar meu próprio tempo.",
            "Além disso, ela sempre traz uma perspectiva clara e prática para as questões levantadas, tornando a reflexão mais leve e direcionada."
        ]
    },
    {
        "author": "Barbara Pasqualini",
        "text": [
            "Sou paciente da Ana há quatro anos e posso dizer que ela transformou a minha vida.",
            "A escuta empática dela e todo o processo terapêutico que construímos ao longo das sessões têm me proporcionado um nível profundo de autoconhecimento. Compreender melhor a minha história e o meu funcionamento tem me trazido paz por ser quem sou e me ajudado a me relacionar com mais leveza com as outras pessoas e suas singularidades.",
            "Admiro a capacidade que a Ana tem de me acolher e de criar um espaço seguro, onde me sinto à vontade para trazer até os temas mais difíceis. Ao final de cada sessão, saio com mais confiança para enfrentá-los — ou com mais disposição para refletir sobre eles com carinho.",
            "Hoje, sei que tenho ferramentas para lidar com os desafios da vida com muito mais segurança e coragem. Obrigada, de coração!"
        ]
    },
    {
        "author": "Flora Silva",
        "text": [
            "Desde a nossa primeira sessão no início de 2022, sinto que iniciei uma incrível jornada de autoconhecimento, superação de desafios e uma grande melhora na forma como enxergo e reajo às situações ao meu redor.",
            "Acredito que tive muita sorte em encontrá-la, pois sempre me senti muito confortável durante nossas conversas. Sua dinâmica, profissionalismo e carisma me motivam a continuar o processo terapêutico. Sem dúvidas, consigo indicar seu trabalho sem receio algum!"
        ]
    },
    {
        "author": "Rafaely Cruz",
        "text": [
            "Ana Carolline é uma profissional excelente!! O processo terapêutico com ela tem sido enriquecedor porque ela oferece uma escuta atenta e humana durante as sessões, o que nos deixa confortável para abordar nossas vulnerabilidades.",
            "Além de sempre nos conduzir para reflexões importantes."
        ]
    },
    {
        "author": "Louise Andrade",
        "text": [
            "Comecei a fazer terapia com Ana após uma indicação em 2023, onde me encontrei em um momento complicado.",
            "A Ana é atenciosa e gentil, uma profissional competente e humana. Só posso agradecê-la por tornar possível continuar seguindo."
        ]
    },
    {
        "author": "Camila Honório",
        "text": [
            "A Ana realmente é uma profissional fora da curva — empática, atenciosa, sempre me fazendo refletir profundamente sobre como quero viver minha vida. Faço terapia com ela há, acredito, mais de três anos, e posso dizer que ela foi uma salvação para mim.",
            "Passei por um psicólogo pela primeira vez aos 14 anos e tive uma experiência tão ruim que nunca mais quis saber de terapia. Lembro que, quando resolvi dar uma segunda chance, fiquei pesquisando uma psicóloga em um app e simpatizei com ela — mas acabei nem marcando uma sessão, e nem lembro o motivo. Chame de Deus, sorte ou destino, mas foi ela quem acabou me chamando, e aí marcamos uma sessão!",
            "Desde então, minha vida tem melhorado a cada encontro. Minha relação comigo mesma, com as outras pessoas, meus problemas com a raiva, o luto pela perda da minha avó... Todas as mudanças que aconteceram de lá pra cá continuam sendo intensas, mas, por causa da Ana, consigo enfrentar as adversidades da vida de uma forma menos destrutiva para comigo mesma.",
            "Ela sempre diz o que eu preciso ouvir, sem me julgar ou me olhar torto. Fico muito feliz por ter a Ana como psicóloga na minha vida e, como já falei para ela, espero que ela nunca me dê alta — porque a maluca aqui vai precisar dela pro resto da vida rs.",
            "Obrigada por ser a melhor psicóloga que eu poderia ter! E, para quem ainda está em dúvida sobre fazer ou não uma sessão, minha dica é: vá de olhos fechados e coração aberto. Não vão se arrepender!"
        ]
    },
    {
        "author": "Amanda Molon",
        "text": [
            "Já estou fazendo terapia com a Ana por cerca de 3 anos, e eu acredito muito que pra ter um bom resultado nas sessões é importante um psicólogo que a gente se identifique com a abordagem usada, a Ana é uma excelente profissional, muito dedicada aos pacientes, sempre me ouviu com atenção, me deixou confortável e me orientou muito bem, graças a ajuda dela que hoje estou livre das crises de ansiedade e sigo buscando cuidar da minha saúde mental 🙌❤"
        ]
    },
    {
        "author": "Iara Quintans",
        "text": [
            "Eu e a Ana demos match na primeira sessão e isso é muito bom para o processo terapêutico, pois precisamos nos sentir à vontade e acolhidos para tratar acerca das nossas questões diárias e da vida.",
            "Também posso afirmar que, além de ser uma ótima psicóloga, ela também é extremamente responsável, pontual e comprometida dentro do seu papel.",
            "Recomendo de olhos fechados tê-la como psicóloga e que a enxergue como um investimento no seu autoconhecimento e desenvolvimento ❤️"
        ]
    }
]

export default function Testimonials() {

    const fadeRef = useFadeIn();

  return (
    <section id="depoimentos">
        <h2 ref={fadeRef} className="fade-up">
            Depoimentos
        </h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ 
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true 
                }}   
                loop
                className="swiper"
                >
                {testimonials.map(({ author, text }, index) => (
                        <SwiperSlide key={index}>
                        <Testimonial text={text} author={author} />
                        </SwiperSlide>
                ))}
            </Swiper>
    </section>
  )
}