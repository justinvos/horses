import { List, ListItem } from '@material-ui/core';
import React from 'react';

const MAXIMUM_HORSES = 10;

export function HorseList({ horses }) {
  const limitedHorses = horses.slice(0, MAXIMUM_HORSES);

  return (
    <List data-testid="horse-list">
      {limitedHorses.map(horse => (
        <ListItem button key={horse.name}>{horse.name}</ListItem>
      ))}
    </List>
  );
}
