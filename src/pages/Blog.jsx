import React, { useEffect, useState } from 'react'
import './Blog.css'
import DefaultLayout from '../layouts/DefaultLayout'
import { sanityClient } from '../sanityClient'
import { Link } from 'react-router-dom'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc){
        title,
        excerpt,
        "slug": slug.current,
        "mainImageUrl": mainImage.asset->url
      }`)
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <DefaultLayout>
      <div className="posts-container">
        {posts.map(({ title, excerpt, slug, mainImageUrl }) => (
          <div className="post" key={slug}>
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
  )
}
