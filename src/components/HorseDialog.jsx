import { Dialog } from '@material-ui/core';
import React from 'react';

import { useHorses } from './HorseContext';

export function HorseDialog() {
  const { activeHorse, setActiveHorse } = useHorses();

  const open = Boolean(activeHorse);

  function handleClose() {
    setActiveHorse(null);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      {activeHorse ? <Content horse={activeHorse} /> : null}
    </Dialog>
  );
}

function Content({ horse }) {
  const { id, name, profile } = horse;

  return (
    <div style={{ margin: '64px' }}>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Favourite food: {profile.favouriteFood}</p>
      <p>Height: {profile.physical.height}</p>
      <p>Weight: {profile.physical.weight}</p>
    </div>
  );
}
