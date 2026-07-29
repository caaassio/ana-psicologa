import React, { useEffect, useState, useRef } from "react";
import "./Hero.css";

import bgHome1 from "../assets/bg1.jpg";
import bgHome2 from "../assets/bg2.jpg";

const slides = [
	{
		image: bgHome1,
		title: "Às vezes, a vida vai ficando silenciosamente pesada",
		text: (
		<>
			O que antes se resolvia com tempo ou distração, <b>já não parece funcionar</b>.
			Você vem acumulando inquietações no seu dia a dia. Talvez você ainda não saiba exatamente o que quer,
			mas sente que algo precisa <b>mudar</b>.
			<br />
			É nesse ponto que muitas pessoas chegam até mim buscando psicoterapia.
		</>
		),
		button: "COMECE A SUA MUDANÇA POR AQUI",
	},
	{
		image: bgHome2,
		title: "É aqui que a psicoterapia pode fazer sentido",
		text: (
		<>
			Um espaço de escuta para adolescentes e adultos, fundamentado na abordagem psicanalítica, onde cada história é acolhida com ética, respeito à individualidade e uma escuta atenta, empática e sem julgamentos.
		</>
		),
		button: "AGENDE SUA CONSULTA",
	},
];

export default function Hero() {
	const [slide, setSlide] = useState(0);
	const [fade, setFade] = useState(false);
	const timerRef = useRef(null);

	const restartTimer = () => {
	clearTimeout(timerRef.current);

		timerRef.current = setTimeout(() => {
			nextSlide(false); 
		}, 13000);
	};

	useEffect(() => {
		if (window.jarallax) {
		window.jarallax(document.querySelectorAll("[data-jarallax]"), {
			speed: 0.5,
		});
		}
	}, []);

	const nextSlide = (restart = true) => {
		if (restart) restartTimer();

		setFade(true);

		setTimeout(() => {
			setSlide((prev) => (prev + 1) % slides.length);
			setFade(false);
		}, 500);
	};

	const prevSlide = () => {
		restartTimer();

		setFade(true);

		setTimeout(() => {
			setSlide((prev) => (prev - 1 + slides.length) % slides.length);
			setFade(false);
		}, 500);
	};

	useEffect(() => {
		restartTimer();

		return () => clearTimeout(timerRef.current);
	}, []);

  	return (
    	<section id="home" data-jarallax data-speed="0.5">

			{/* BACKGROUND */}
			<div className="hero-bg">
				{slides.map((item, index) => (
				<img
					key={index}
					src={item.image}
					alt=""
					className={`jarallax-img ${slide === index ? "active" : ""}`}
				/>
				))}
			</div>

			{/* TEXTO */}
			<div className={`texto-home ${fade ? "fade" : ""}`}>

				<h1 className="visually-hidden">
				Atendimento Psicológico Online para Adolescentes e Adultos
				</h1>

				<h2>{slides[slide].title}</h2>

				<p>{slides[slide].text}</p>

				<div className="btn-wrapper">

				<a
					href="https://wa.me/5511949186999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Agendar consulta pelo WhatsApp"
					className="btn-whatsapp"
				>
					{slides[slide].button}
				</a>

				<button
					className="btn-whatsapp-saiba"
					onClick={() => {
					const section = document.getElementById("servicos");

					if (section) {
						const yOffset = -80;

						const y =
						section.getBoundingClientRect().top +
						window.pageYOffset +
						yOffset;

						window.scrollTo({
						top: y,
						behavior: "smooth",
						});
					}
					}}
				>
					SAIBA MAIS
				</button>

				</div>
			</div>

			{/* BOTÕES DE NAVEGAÇÃO */}
			<button
				className="hero-nav hero-prev"
				onClick={prevSlide}
				aria-label="Slide anterior"
				>
				<svg width="110" height="110" viewBox="0 0 24 24" fill="none">
					<path
					d="M15 18L9 12L15 6"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					/>
				</svg>
				</button>

				<button
				className="hero-nav hero-next"
				onClick={nextSlide}
				aria-label="Próximo slide"
				>
				<svg width="110" height="110" viewBox="0 0 24 24" fill="none">
					<path
					d="M9 18L15 12L9 6"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					/>
				</svg>
			</button>

			<div className="custom-shape-divider-bottom-1769036612">
				<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				>
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						opacity=".25"
						className="shape-fill"
					/>

					<path
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
						className="shape-fill"
					/>

					<path
						d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
						className="shape-fill"
					/>
				</svg>
			</div>

    	</section>
	);
}