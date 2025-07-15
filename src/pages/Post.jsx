import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { sanityClient } from '../sanityClient'
import { PortableText } from '@portabletext/react'
import DefaultLayout from '../layouts/DefaultLayout'
import './Post.css'
import AutorBox from '../components/Author-box'
import BtnVoltar from '../components/Btn-voltar'

export default function Post() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          subtitle,
          publishedAt,
          excerpt,
          body,
          "mainImage": mainImage.asset->url,
          "author": author->name
        }`,
        { slug }
      )
      .then((data) => {
        setPost(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [slug])

  const components = {
    block: {
      normal: ({ children }) => <p>{children}</p>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    },
    list: {
      bullet: ({ children }) => <ul>{children}</ul>,
      number: ({ children }) => <ol>{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
    marks: {
      link: ({ children, value }) => (
        <a href={value.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  }

  if (loading) {
    return (
      <div className="loading-container">
        <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
        <p>Carregando post...</p>
      </div>
    )
  }

  if (!post) return <div>Post não encontrado.</div>

  const dataFormatada = new Date(post.publishedAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  function readingTime(text) {
    const wordsPerMinute = 200
    const words = text.split(/\s+/).length
    const time = Math.ceil(words / wordsPerMinute)
    return time
  }

  // Extrair todo texto do corpo para estimar leitura
  const bodyText = post.body
    .map(block => block.children.map(child => child.text).join(' '))
    .join(' ')

  const timeToRead = readingTime(bodyText)

  return (
    <DefaultLayout>

      <div className="post-container">
      <BtnVoltar/>

          <div className="post-box">
            {/* Imagem */}
            <div className="post-img">
              {post.mainImage && (
                <img src={post.mainImage} alt={post.title} />
              )}
            </div>

            {/* Texto */}
            <article className="post-text">
              <div className="post-meta">
                <h2>{post.title}</h2>
                <h3>{post.subtitle}</h3>

                <div className="author-post">
                  <div className="author">
                    <span>Por {post.author || 'Ana Carolline'}</span>
                  </div>

                  <div className="data-post">
                    {dataFormatada} <i className="fa-solid fa-clock"></i>  {timeToRead} min
                  </div>
                </div>

                <div className="post-content">
                  {post.excerpt && <p><strong>{post.excerpt}</strong></p>}
                  <PortableText value={post.body} components={components} />
                </div>
              </div>
            </article>
            <AutorBox/>
          </div>
      </div>
    
    </DefaultLayout>
  )
}