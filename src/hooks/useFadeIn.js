import { useEffect, useRef, useState } from 'react'

export default function useFadeIn(threshold = 0.2) {
	const ref = useRef([])
	const [elementsReady, setElementsReady] = useState(false)

	const setRef = (element) => {
		if (element && !ref.current.includes(element)) {
			ref.current.push(element)
			setElementsReady(true)
		}
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible')
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold }
		)

		ref.current.forEach((element) => {
			observer.observe(element)
		})

		return () => observer.disconnect()

	}, [threshold, elementsReady])

	return setRef
}