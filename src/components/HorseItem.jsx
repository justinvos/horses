import { ListItem } from '@material-ui/core';
import React from 'react';

import { useHorses } from './HorseContext';

export function HorseItem({ horse }) {
  const { setActiveHorse } = useHorses();

  function handleClick() {
    setActiveHorse(horse);
  }

  return (
    <>
      <ListItem button key={horse.name} onClick={handleClick}>{horse.name}</ListItem>
    </>
  )
}
