import React from 'react'
import './Btn-voltar.css'

export default function BtnVoltar() {
  return (
    <a href="/blog">
      <div className="btn-voltar">
        <i className="fa-solid fa-circle-chevron-left"></i> Voltar
      </div>
    </a>
  )
}
