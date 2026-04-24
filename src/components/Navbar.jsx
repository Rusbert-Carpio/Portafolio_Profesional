import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { profile } from '../data/profile';

const links = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Ir al inicio">
        <span className="brand-mark">A</span>
        <span>Ameda<span>Dev</span></span>
      </a>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menú">
        {open ? <FiX /> : <FiMenu />}
      </button>

      <nav className={open ? 'nav-links active' : 'nav-links'}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="nav-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>
      </nav>
    </header>
  );
}
