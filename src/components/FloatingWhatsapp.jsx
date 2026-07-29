import { useEffect, useState } from "react";
import "./FloatingWhatsapp.css";

export default function FloatingWhatsapp() {
  const [opacity, setOpacity] = useState(1);

useEffect(() => {
  const whatsapp = document.querySelector(".floating-whatsapp");

  function handleScroll() {
    whatsapp.style.opacity = window.scrollY > 0 ? "0.3" : "1";
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <a
      href="https://wa.me/5511949186999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="floating-whatsapp"
      style={{ opacity }}
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}