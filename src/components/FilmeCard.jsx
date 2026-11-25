import { useEffect, useRef } from 'react';

export default function FilmeCard({ filme }) {

	const filmeRef = useRef(null);

useEffect(() => {
    const elemento = filmeRef.current;

    if (!elemento) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                elemento.classList.add('visivel');
                observer.unobserve(elemento);
            }
        },
        {
            threshold: 0.15
        }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
}, []);

	return (
		<section className="filme" ref={filmeRef}>
			<div className="filme-conteudo">
				{filme.poster && (
				<div className="filme-poster">
					<img src={filme.poster} alt={`Pôster de ${filme.titulo}`} loading="lazy" />
				</div>
				)}
				<div className="filme-info">
					<h2>{filme.titulo}</h2>
					<div className="filme-detalhes">
						<span><i className="fa-regular fa-calendar-days" aria-hidden="true" /> {filme.ano}</span>
						<span><i className="fa-solid fa-star" aria-hidden="true" /> {filme.genero}</span>
						{filme.plataforma && (
						<span><i className="fa-solid fa-tv" aria-hidden="true" /> {filme.plataforma}</span>
						)}
					</div>
						<div className="filme-depoimentos">
							{filme.depoimentos.map((depoimento, index) => (
								<p key={index} className="depoimento">
									{depoimento}
								</p>
							))}
						</div>
				</div>
			</div>
			{filme.divisor !== false && <div className="filme-divisor" />}
		</section>
	);
}
