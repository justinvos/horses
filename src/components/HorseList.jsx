import { List } from '@material-ui/core';
import React from 'react';

import { useHorses } from './HorseContext';
import { HorseItem } from './HorseItem';

const MAXIMUM_HORSES = 10;

export function HorseList() {
  const { horses } = useHorses();
  const limitedHorses = horses.slice(0, MAXIMUM_HORSES);

  return (
    <List data-testid="horse-list">
      {limitedHorses.map(horse => <HorseItem key={horse.id} horse={horse} />)}
    </List>
  );
}
