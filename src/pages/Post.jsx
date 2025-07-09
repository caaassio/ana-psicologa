import { useParams } from 'react-router-dom'

const dummyPosts = {
  ansiedade: {
    title: 'Como lidar com a ansiedade',
    subtitle: 'Dicas práticas para o dia a dia',
    content: 'Conteúdo completo sobre ansiedade...'
  },
  autoconhecimento: {
    title: 'Autoconhecimento e terapia',
    subtitle: 'A importância de se conhecer',
    content: 'Conteúdo completo sobre autoconhecimento...'
  }
}

export default function Post() {
  const { slug } = useParams()
  const post = dummyPosts[slug]

  if (!post) return <p>Post não encontrado</p>

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
      <div>{post.content}</div>
    </article>
  )
}