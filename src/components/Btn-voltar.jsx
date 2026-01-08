import React from 'react'
import { Link } from 'react-router-dom'
import './Btn-voltar.css'

export default function BtnVoltar() {
  return (

    <Link to="/blog" className="voltar-btn">
      <div className="btn-voltar">
        <i className="fa-solid fa-circle-chevron-left"></i> Voltar
      </div>
    </Link>
  )
}
