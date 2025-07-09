import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.subtitle}</p>
      <Link to={`/post/${post.slug}`}>Ler mais</Link>
    </article>
  )
}