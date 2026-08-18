import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LightboxProvider } from './hooks/useLightbox';
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

  const showBackButton = location.pathname !== '/';

  return (
    <LightboxProvider>
      <div style={{ fontFamily: "'Raleway',sans-serif", background: '#17140f', color: '#f2eee2', overflowX: 'hidden' }}>
        <Nav onToggleMenu={() => setMenuOpen((v) => !v)} showBackButton={showBackButton} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <WhatsAppFloat />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/la-loma" element={<LaLoma />} />
            <Route path="/arandu" element={<Arandu />} />
            <Route path="/cande" element={<BungalowsCande />} />
            {/* Las páginas 'UnitDetail' y 'Promotions' no estaban en la refactorización anterior,
                así que las dejo comentadas. Deberías agregarlas si las necesitas.
            <Route path="/promociones" element={<Promotions />} />
            <Route path="/alojamiento/:id" element={<UnitDetail />} />
            */}
          </Routes>
        </AnimatePresence>

        <Footer />
        <WhatsAppMobileBar />
        <Lightbox />
      </div>
    </LightboxProvider>
  );
}

export default function App() {
  // AppContent está ahora dentro del BrowserRouter en main.tsx
  // por lo que puede usar hooks como useLocation.
  return <AppContent />;
}
