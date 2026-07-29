import React, { useEffect } from 'react'
import './Scheduling.css'
import agendeImg from '../assets/agende.jpeg'
import useFadeIn from '../hooks/useFadeIn'

export default function Agende() {
	const sectionRef = useFadeIn();
	const fadeRef = useFadeIn();

	useEffect(() => {
		if (window.jarallax) {
			window.jarallax(document.querySelectorAll('[data-jarallax]'), {
				speed: 0.5,
			})
		}
	}, 
	[])

	return (
		<section className="agende" data-jarallax data-speed="0.5">
			<img className="jarallax-img" src={agendeImg} alt="consultório psicológico" />

			<p ref={fadeRef} className="fade-up">AGENDE SUA CONSULTA</p>

				<a
					href="https://wa.me/5511949186999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
					target="_blank"
					aria-label="Agendar consulta pelo WhatsApp"
					rel="noopener noreferrer"
					className="btn-whatsapp fade-up"
					ref={sectionRef} 
					>
					<i className="fa-brands fa-whatsapp"></i>
					FAZER AGENDAMENTO
				</a>
		</section>
	)
}
