import React from 'react'
import './Footer.css'

export default function Footer() {
	return (
		<footer>
			<span id="nome">© {new Date().getFullYear()} Psicóloga Ana Carolline. Todos os direitos reservados.</span><span id="crp"> CRP 06/154233</span>
		</footer>
	)
}