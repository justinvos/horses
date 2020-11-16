import { createContext, useContext, useEffect, useState } from 'react';

import { getHorses } from '../api';

export function HorseProvider({ children }) {
  const [horses, setHorses] = useState([]);
  const [activeHorse, setActiveHorse] = useState(null);

  useEffect(() => {
    getHorses()
      .then(setHorses);
  }, []);

  const value = {
    activeHorse,
    horses,
    setActiveHorse
  };

  return (
    <HorseContext.Provider value={value}>
      {children}
    </HorseContext.Provider>
  );
}

const HorseContext = createContext([]);

export function useHorses() {
  return useContext(HorseContext);
}
