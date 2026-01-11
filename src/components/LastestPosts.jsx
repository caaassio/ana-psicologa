import './LastestPosts.css'
import React, { useEffect, useState } from 'react'
import { sanityClient } from '../sanityClient'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default function LatestPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        title,
        excerpt,
        "slug": slug.current,
        "mainImageUrl": mainImage.asset->url
      }
    `)
    .then((data) => setPosts(data))
    .catch(console.error)
  }, [])

  if (!posts.length) return null

  return (
    <section className="latest-posts">
      <h2 className="latest-title">Últimos Posts</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        spaceBetween={12}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {posts.map(({ title, excerpt, slug, mainImageUrl }) => (
          <SwiperSlide key={slug}>
            <Link to={`/post/${slug}`} className="post">
              {mainImageUrl && <img className="mascara" src={mainImageUrl} alt={title} />}
              <h2>{title}</h2>
              <p>{excerpt}</p>
              <span>
                Leia mais <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}