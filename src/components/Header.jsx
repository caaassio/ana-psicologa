import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo-site.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scroll para baixo e passou de 100px: esconde header
        setHidden(true)
      } else if (currentScrollY < lastScrollY.current) {
        // Scroll para cima: mostra header
        setHidden(false)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (event, id) => {
    event.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <header id="header" className={hidden ? 'hidden' : ''}>
      <a href="/" className="link-logo" onClick={closeMenu}>
        <div id="logo">
          <img src={logo} alt="Logo do site" />
        </div>
      </a>
      <nav>
        <button
          id="menu-btn"
          aria-label="Abrir menu de navegação"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul id="menu" className={menuOpen ? 'show' : ''}>
          <li>
            <a href="/#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
              HOME
            </a>
          </li>
          <li>
            <a href="/#sobre" onClick={(e) => handleSmoothScroll(e, '#sobre')}>
              SOBRE
            </a>
          </li>
          <li>
            <a
              href="/#depoimentos"
              onClick={(e) => handleSmoothScroll(e, '#depoimentos')}
            >
              DEPOIMENTOS
            </a>
          </li>
          <li>
            <a
              href="/#servicos"
              onClick={(e) => handleSmoothScroll(e, '#servicos')}
            >
              SERVIÇOS
            </a>
          </li>
          <li>
            <a href="/#faq" onClick={(e) => handleSmoothScroll(e, '#faq')}>
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/#contato"
              onClick={(e) => handleSmoothScroll(e, '#contato')}
            >
              CONTATO
            </a>
          </li>
          <li>
            <Link to="/blog" onClick={closeMenu}>
              BLOG
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}