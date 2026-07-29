import React, { useEffect, useState } from 'react'
import './Blog.css'
import DefaultLayout from '../layouts/DefaultLayout'
import { sanityClient } from '../sanityClient'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import useFadeIn from '../hooks/useFadeIn'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const fadeTitleRef = useFadeIn()
  const fadePostRef = useFadeIn()

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
        title,
        excerpt,
        "slug": slug.current,
        "mainImageUrl": mainImage.asset->url
      }`)
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((error) =>{
        console.error(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <DefaultLayout>
        <div className="loading-container">
          <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
          <p>Carregando posts...</p>
        </div>
      </DefaultLayout>
    )
  }

  return (

    <>
      <Helmet>
        <title>Blog de Psicologia | Psicóloga Ana Carolline</title>
        <link
          rel="canonical"
          href="https://www.psicologaanacarolline.com.br/blog"
        />
        <meta
          name="description"
          content="Artigos sobre saúde mental, autoconhecimento, ansiedade e psicoterapia."
        />
      </Helmet>

      <h1 className="visually-hidden">
        Blog de Psicologia – Ana Carolline
      </h1>

		<DefaultLayout>

		<div className="posts-container">

			<div className="header-blog fade-up" ref={fadeTitleRef}>
				<h2>Artigos e reflexões</h2>
			</div>

			{posts.map(({ title, excerpt, slug, mainImageUrl }, index) => (
			<div 
				className="post fade-up" 
				key={slug}
				ref={fadePostRef}
				style={{ transitionDelay: `${index * 0.08}s` }}
			>
				<Link to={`/post/${slug}`}>
				{mainImageUrl && (
					<img
					className="mascara"
					src={mainImageUrl}
					alt={title}
					/>
				)}
				<h2>{title}</h2>
				<p>{excerpt}</p>
				<span>
					Leia mais <i className="fa-solid fa-arrow-right"></i>
				</span>
				</Link>
			</div>
			))}
		</div>
		</DefaultLayout>
    </>
  )
}
