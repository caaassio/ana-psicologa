import React from 'react'
import './Testimonial.css'

export default function Testimonial({ text, author }) {
  return (
    <div className="swiper-slide">
      <blockquote className="quote">
        {text.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <span className="autor">{author}</span>
      </blockquote>
    </div>
  )
}