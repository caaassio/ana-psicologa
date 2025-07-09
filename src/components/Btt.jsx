import { useEffect } from 'react'
import './Btt.css'

export default function Btt() {
  useEffect(() => {
    const btt = document.querySelector('.btt')

    function handleScroll() {
      btt.style.opacity = window.scrollY > 0 ? '0.3' : '1'
    }

    function handleClick(e) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('scroll', handleScroll)
    btt.addEventListener('click', handleClick)

    // Cleanup quando o componente desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll)
      btt.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="btt" role="button" tabIndex={0} aria-label="Voltar ao topo">
      <i className="fa-solid fa-chevron-up"></i>
    </div>
  )
}
