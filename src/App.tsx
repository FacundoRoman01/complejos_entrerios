import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LightboxProvider } from './hooks/useLightbox';
import { ModalProvider, useModal } from './context/ModalContext'; // <-- Importa el contexto
import { Nav } from './components/Nav';
import { MobileMenu } from './components/MobileMenu';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { WhatsAppMobileBar } from './components/WhatsAppMobileBar';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { Home } from './pages/Home';
import { LaLoma } from './pages/LaLoma';
import { Arandu } from './pages/Arandu';
import { BungalowsCande } from './pages/BungalowsCande';

function AppContent() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeCabin } = useModal(); // <-- Obtenemos si hay una cabaña abierta

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const showBackButton = location.pathname !== '/';

  return (
    <div style={{ fontFamily: "'Raleway',sans-serif", background: '#17140f', color: '#f2eee2', overflowX: 'hidden' }}>
      {/* El Nav se oculta automáticamente si activeCabin existe (modal abierto) */}
      {!activeCabin && (
        <Nav onToggleMenu={() => setMenuOpen((v) => !v)} showBackButton={showBackButton} />
      )}
      
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppFloat />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/la-loma" element={<LaLoma />} />
          <Route path="/arandu" element={<Arandu />} />
          <Route path="/cande" element={<BungalowsCande />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <WhatsAppMobileBar />
      <Lightbox />
    </div>
  );
}

export default function App() {
  return (
    <LightboxProvider>
      <ModalProvider> {/* <-- Envolvemos la app con el provider */}
        <AppContent />
      </ModalProvider>
    </LightboxProvider>
  );
}