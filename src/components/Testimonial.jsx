import React from 'react'
import './Testimonial.css'
import useFadeIn from '../hooks/useFadeIn'

export default function Testimonial({ text, author }) {
	const quoteRef = useFadeIn();
	const authorRef = useFadeIn();

	return (
        <>
            <blockquote ref={quoteRef} className="quote fade-right">
                {text.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}

                <span ref={authorRef} className="autorDepoimento fade-up">
                    {author}
                </span>
            </blockquote>
        </>
    );
}