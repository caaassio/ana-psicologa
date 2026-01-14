import './LastestPosts.css'
import React, { useEffect, useState } from 'react'
import { sanityClient } from '../sanityClient'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
// IMPORTANTE: Pagination deve estar aqui embaixo
import { Navigation, Autoplay } from 'swiper/modules' 

// CSS obrigatório do Swiper
import 'swiper/css'
import 'swiper/css/navigation'

export default function LastestPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
        title, excerpt, "slug": slug.current, "mainImageUrl": mainImage.asset->url
      }`)
      .then((data) => setPosts(data))
      .catch(console.error)
  }, []);

  if (!posts.length) return null;

  return (
    <div className="container-lp" style={{display: 'block'}}>
      <h2 className="title">Últimos Posts</h2>
      <Swiper
        id="swiper-ultimos-posts"
        className="swiperPostsCustom"

        key={posts.length}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Mantém rodando mesmo se o usuário clicar
          pauseOnMouseEnter: true,      // Pausa quando o usuário passa o mouse por cima
        }}
        loop={true}
        navigation={true}
        observer={true}
        observeParents={true}
        modules={[Navigation, Autoplay]} // Agora Pagination está definido!
        breakpoints={{
          700: { slidesPerView: 2, spaceBetween: 20 },
          1100: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {posts.map((post) => (
          // A KEY deve ir no SwiperSlide, que é o primeiro filho do map
          <SwiperSlide key={post.slug}>
            <Link href={`/post/${post.slug}`} className="post-card">
              {post.mainImageUrl && <img className="mascara" src={post.mainImageUrl} alt={post.title} />}
              <div className="post-content">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}