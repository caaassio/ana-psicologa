import React from 'react';
import './Author-box.css';
import PhotoAuthor from '../assets/photo-author.jpg'

function AutorBox() {
  return (
    <div className="autorBox">
      <div className="autorPostBox">
        <img src={PhotoAuthor} />

        <div className="autorPerfil">
          <h2>Ana Carolline Coelho</h2>
          <p>
            Sou psicóloga (CRP 06/154233) com atuação clínica desde 2019, em atendimentos online para adolescentes e adultos. Trabalho com base na psicanálise, adaptada aos desafios do presente.
            <br />
            Acredito em uma escuta profunda, sensível e acolhedora. Tenho formações complementares em temas como ansiedade, TOC, compulsão, burnout e comunicação não violenta. Atendo principalmente mulheres jovens, com presença e afeto — respeitando o tempo de cada processo..
          </p>
        </div>
      </div>

      <div className="sociais-redes">
        <ul>
          <li>
            <a href="https://www.instagram.com/anacpsicologa" target="_blank" rel="noopener noreferrer" aria-label="Link para o instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/anacpsicologa" target="_blank" rel="noopener noreferrer" aria-label="Link para o facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/5511949186999" target="_blank" rel="noopener noreferrer" aria-label="Agendar consulta pelo WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="mailto:anacpsicologa@icloud.com" target="_blank" rel="noopener noreferrer" aria-label="Marcar consulta por email">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AutorBox;
