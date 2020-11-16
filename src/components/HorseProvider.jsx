import { useEffect, useState } from 'react';

import { getHorses } from '../api';

export function HorseProvider({ children }) {
  const [horses, setHorses] = useState([]);
  useEffect(() => {
    getHorses()
      .then(setHorses);
  }, []);

  return children(horses);
}
