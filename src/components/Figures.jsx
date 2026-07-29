import React, { useEffect, useRef, useState } from "react";
import './Figures.css'
import figuresImg from '../assets/figures.jpg'
import NumberCounter from "number-counter"
import useFadeIn from "../hooks/useFadeIn";

export default function Figures() {
	const sectionRef = useRef(null);
	const fadeRef = useFadeIn();

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="figures-wrapper"
			data-jarallax
			data-speed="0.5"
		>
			<img
				className="jarallax-img"
				src={figuresImg}
				alt="números de atendimentos psicológicos"
			/>

			<div
				ref={fadeRef}
				className="figures fade-up"
			>

				<div>
					<span>
						{visible && (
							<NumberCounter
								end={6}
								start={0}
								delay="2"
								preFix="+"
							/>
						)}
					</span>
					<span>
						Anos de <br /> Experiência
					</span>
				</div>

				<div>
					<span>
						{visible && (
							<NumberCounter
								end={400}
								start={30}
								delay="2"
								preFix="+"
							/>
						)}
					</span>
					<span>Pacientes</span>
				</div>

				<div>
					<span>
						{visible && (
							<NumberCounter
								end={7000}
								start={100}
								delay="3"
								preFix="+"
							/>
						)}
					</span>
					<span>Atendimentos</span>
				</div>

			</div>
		</section>
	);
}