import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useIsNavMobile } from '../hooks/useViewportWidth';

interface NavProps {
  onToggleMenu: () => void;
  showBackButton?: boolean;
}

export function Nav({ onToggleMenu, showBackButton = false }: NavProps) {
  const isMobile = useIsNavMobile();
  const [scrolled, setScrolled] = useState(false);

  // Detectar el scroll de la página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '22px clamp(20px,4vw,64px)',
        background: scrolled 
          ? 'rgba(12, 14, 8, 0.82)' 
          : 'linear-gradient(180deg, rgba(12,14,8,0.55), rgba(12,14,8,0))',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
        fontFamily: "'Raleway', sans-serif",
      }}
    >
      <div>
        <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer', lineHeight: 1 }}>
          <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#c3b184', opacity: 0.85 }}>
            Complejos
          </div>
          <div style={{ fontFamily: 'Raleway', fontSize: 23, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f4f1e6', marginTop: 3, whiteSpace: 'nowrap' }}>
            Entre Ríos
          </div>
        </Link>
        {showBackButton && (
          <Link
            to="/"
            style={{
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginTop: 9,
              fontSize: 10,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#c3b184',
              textDecoration: 'none',
            }}
          >
            ← Volver al inicio
          </Link>
        )}
      </div>

      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(18px,2.4vw,38px)', height: 38 }}>
          <Link to="/" style={navLinkStyle}>Inicio</Link>
          <Link to="/la-loma" style={navLinkStyle}>La Loma</Link>
          <Link to="/cande" style={navLinkStyle}>Bungalows Cande</Link>
          <Link to="/arandu" style={navLinkStyle}>Arandú</Link>
        </div>
      )}

      {isMobile && (
        <button
          onClick={onToggleMenu}
          style={{
            cursor: 'pointer',
            background: 'none',
            border: '1px solid rgba(242,238,226,0.4)',
            borderRadius: 30,
            color: '#f2eee2',
            padding: '11px 16px',
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Menú
        </button>
      )}
    </nav>
  );
}

const navLinkStyle: CSSProperties = {
  cursor: 'pointer',
  fontSize: 12,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#e9e4d5',
  textDecoration: 'none',
  opacity: 0.9,
};