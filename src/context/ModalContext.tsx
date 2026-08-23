import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react'; // <-- Cambiado aquí
import type { CabinBase } from '../types';

interface ModalContextType {
  activeCabin: CabinBase | null;
  openModal: (cabin: CabinBase) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeCabin, setActiveCabin] = useState<CabinBase | null>(null);

  const openModal = (cabin: CabinBase) => setActiveCabin(cabin);
  const closeModal = () => setActiveCabin(null);

  return (
    <ModalContext.Provider value={{ activeCabin, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal debe usarse dentro de un ModalProvider');
  return context;
}