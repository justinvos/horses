import { createContext, useContext, useEffect, useState } from 'react';

import { getHorses, putHorse } from '../api';

export function HorseProvider({ children }) {
  const [horses, setHorses] = useState([]);
  const [activeHorse, setActiveHorse] = useState(null);

  useEffect(() => {
    getHorses()
      .then(setHorses);
  }, []);

  function updateHorse(updatedHorse) {
    const indexOfHorse = horses.findIndex(horseItem => horseItem.id === updatedHorse.id);

    setHorses(replaceAt(horses, indexOfHorse, updatedHorse));
    putHorse(updatedHorse);
  }

  const value = {
    activeHorse,
    horses,
    setActiveHorse,
    updateHorse
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

function replaceAt(array, replaceIndex, replaceItem) {
  return array.map((item, index) => {
    if (index === replaceIndex) {
      return replaceItem;
    }
    return item;
  })
}
