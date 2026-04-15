import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="MMP Creative Marketing" className="logo-img" />
        </a>
        
        <nav className="desktop-nav">
          <a href="#inicio" className="nav-link">Início</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#clientes" className="nav-link">Nossos Clientes</a>
          <a href="#stats" className="nav-link">Nossos Números</a>
        </nav>

        <a href="#contato" className="btn btn-primary sm-hidden">Falar com o time</a>
      </div>
    </header>
  );
}
