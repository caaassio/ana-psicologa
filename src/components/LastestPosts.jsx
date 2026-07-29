import './LastestPosts.css'
import React, { useEffect, useState } from 'react'
import { sanityClient } from '../sanityClient'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules' 
import 'swiper/css'
import 'swiper/css/navigation'
import useFadeIn from '../hooks/useFadeIn'

export default function LastestPosts() {
	const [posts, setPosts] = useState([]);
	const fadeTitleRef = useFadeIn();
	const fadeItemsRef = useFadeIn();

	useEffect(() => {
		sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
			title, 
			excerpt, 
			"slug": slug.current, 
			"mainImageUrl": mainImage.asset->url
		}`)
		.then((data) => setPosts(data))
		.catch(console.error)
	}, []);

	if (!posts.length) return null;

	return (
		<div className="wrapper-lp">

			<div className="spacer2"></div>
		
			<div className="container-lp" style={{display: 'block'}}>
				<h2 className="title fade-up" ref={fadeTitleRef}>Últimos Posts</h2>
				<Swiper
					id="swiper-ultimos-posts"
					className="swiperPostsCustom"
					key={posts.length}
					slidesPerView={1}
					spaceBetween={10}
					autoplay={{
						delay: 7000,
						disableOnInteraction: false, 
						pauseOnMouseEnter: true,     
					}}
					loop={true}
					navigation={true}
					observer={true}
					observeParents={true}
					modules={[Navigation, Autoplay]} 
					breakpoints={{
						700: { slidesPerView: 2, spaceBetween: 20 },
						1100: { slidesPerView: 3, spaceBetween: 30 },
					}}
				>
				{posts.map((post, index) => (
					<SwiperSlide key={post.slug}>
						<Link
							ref={fadeItemsRef}
							to={`/post/${post.slug}`}
							className="post-card fade-up"
							style={{
								transitionDelay: `${index * 0.1}s`
							}}
						>
							{post.mainImageUrl && (
								<img 
									className="mascara" 
									src={post.mainImageUrl} 
									alt={post.title} 
								/>
							)}

							<div className="post-content">
								<h2>{post.title}</h2>
								<p>{post.excerpt}</p>
								<span>
									Leia mais <i className="fa-solid fa-arrow-right"></i>
								</span>
							</div>
						</Link>
					</SwiperSlide>
				))}
				</Swiper>
			</div>
		</div>
	);
}