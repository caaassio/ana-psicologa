import React from 'react'
import './Blog.css'
import DefaultLayout from '../layouts/DefaultLayout'
import photoPost3 from '../assets/photo-post-3.jpg'
import photoPost4 from '../assets/photo-post-4.jpg'
import photoPost2 from '../assets/photo-post-2.jpg'
import photoPost1 from '../assets/photo-post-1.jpg'
import photoPost5 from '../assets/photo-post-5.jpg'


const posts = [
  {
    title: 'Como começar a se priorizar sem se sentir culpado(a)',
    excerpt: 'Começar a se priorizar pode despertar culpa, especialmente se você foi ensinado(a) que o certo é sempre ceder...',
    image: photoPost3,
    link: './posts/priorizar-sem-sentir-culpa.html'
  },
  {
    title: 'Se priorizar no mundo digital: entre limites, redes sociais e FOMO',
    excerpt: 'Na era da hiperconexão, se priorizar também passa por colocar limites no digital. A comparação constante, a pressão por responde...',
    image: photoPost4,
    link: './posts/entre-limites-redes-sociais-e-fomo.html'
  },
  {
    title: 'Afinal, me priorizar é egoísmo?',
    excerpt: 'Só o fato de você estar se fazendo essa pergunta já mostra que você se importa — e que, definitivamente, não pensa só em si mesma...',
    image: photoPost1,
    link: './posts/me-priorizar-e-egoismo.html'
  },
  {
    title: 'Por que sentimos culpa ao nos priorizar?',
    excerpt: 'Desde cedo, muitas pessoas, especialmente mulheres, são ensinadas que o valor está em cuidar do outro, agradar, ser...',
    image: photoPost2,
    link: './posts/culpa-ao-nos-priorizar.html'
  },
  {
    title: 'O perigo de se anular o tempo todo',
    excerpt: 'Talvez você já tenha se acostumado a dizer “sim” mesmo querendo dizer “não”. A estar disponível o tempo todo. A abrir mão dos seus planos...',
    image: photoPost5,
    link: './posts/o-perigo-de-se-anular.html'
  }
]

export default function Posts() {
  return (
    <DefaultLayout>
      <div className="post-container">
        {posts.map(({ title, excerpt, image, link }, index) => (
          <div className="post" key={index}>
            <a href={link}>
              <img className="mascara" src={image} alt="" />
              <h2>{title}</h2>
              <p>{excerpt}</p>
              <span>
                Leia mais <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
        ))}
      </div>
    </DefaultLayout>
  )
}
