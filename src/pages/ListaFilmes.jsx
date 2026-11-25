import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import FilmeCard from '../components/FilmeCard';
import './ListaFilmes.css';
import filmes from '../components/filmes';
import headerLista from '../assets/header-lista.jpg';
import headerMobile from '../assets/header-mobile.jpg';

export default function ListaFilmes() {
  return (
    <DefaultLayout>
		<div className="content-wrapper">
			<article className="container">
				<div className="post-container">
					<div className="post-box">
						<div className="box-externo">
							<h2>Histórias que ficam com a gente</h2>
							<h3>Filmes e séries que nos marcaram</h3>
							<div className="author-post">
								<div className="author"><span>Por Ana Carolline</span></div>
								<div className="data-post">23 nov 2026</div>
								</div>
								<picture>
									<source media="(max-width: 765px)" srcSet={headerMobile} />
									<img src={headerLista} alt="" />
								</picture>
								<div className="post-content">
								<p>
									Alguns filmes e séries vão muito além do entretenimento. Eles despertam lembranças, provocam reflexões, nos fazem rir, chorar e, muitas vezes, nos ajudam a enxergar um pouco mais de nós mesmos.
									<br /><br />
									Cada pessoa se conecta com uma história de um jeito particular. Às vezes, é um personagem que parece nos compreender; outras vezes, é uma experiência que nos lembra alguém, uma fase da vida ou até sentimentos que nem sempre conseguimos colocar em palavras.
									<br /><br />
									Nesta coleção, reunimos filmes e séries escolhidos por pacientes, acompanhados de suas próprias impressões e dos motivos pelos quais essas histórias conquistaram um lugar especial em suas vidas.
									<br /><br />
									Porque, no fim das contas, não é apenas sobre o que assistimos, mas também sobre aquilo que sentimos e levamos conosco depois que a tela se apaga.
								</p>
								<div className="lista-filmes">
									{filmes.map((filme, index) => <FilmeCard key={`${filme.titulo}-${index}`} filme={filme} />)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
    </DefaultLayout>
  );
}