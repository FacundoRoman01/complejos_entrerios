import { Link } from 'react-router-dom';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 70,
        background: 'rgba(15,17,10,0.97)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 26,
        padding: 48,
      }}
    >
      <button onClick={onClose} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: '#f2eee2', fontSize: 26, cursor: 'pointer' }}>
        ×
      </button>
      <Link to="/" onClick={onClose} style={linkStyle}>Inicio</Link>
      <Link to="/la-loma" onClick={onClose} style={linkStyle}>La Loma</Link>
      <Link to="/cande" onClick={onClose} style={linkStyle}>Bungalows Cande</Link>
      <Link to="/arandu" onClick={onClose} style={linkStyle}>Arandú</Link>
    </div>
  );
}

const linkStyle = {
  cursor: 'pointer',
  fontFamily: "'Raleway',sans-serif",
  fontSize: 30,
  color: '#f2eee2',
  textDecoration: 'none',
} as const;
