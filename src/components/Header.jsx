import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo-site.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()

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
        setHidden(true)
      } else if (currentScrollY < lastScrollY.current) {
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

  const renderSectionLink = (id, label) => {
    if (location.pathname === '/') {
      return (
        <a href={`#${id}`} onClick={(e) => handleSmoothScroll(e, `#${id}`)}>
          {label}
        </a>
      )
    } else {

      return (
        <Link to={`/#${id}`} onClick={closeMenu}>
          {label}
        </Link>
      )
    }
  }

  return (
    <header id="header" className={hidden ? 'hidden' : ''}>
      <Link to="/" className="link-logo" onClick={closeMenu}>
        <div id="logo">
          <img src={logo} alt="Logo do site" />
        </div>
      </Link>
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
          <li>{renderSectionLink('home', 'HOME')}</li>
          <li>{renderSectionLink('sobre', 'SOBRE')}</li>
          <li>{renderSectionLink('depoimentos', 'DEPOIMENTOS')}</li>
          <li>{renderSectionLink('servicos', 'SERVIÇOS')}</li>
          <li>{renderSectionLink('faq', 'FAQ')}</li>
          <li>{renderSectionLink('contato', 'CONTATO')}</li>
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
