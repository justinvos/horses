import { List, ListItem } from '@material-ui/core';
import React from 'react';

export function HorseList() {
  return (
    <List>
      <ListItem button>Thunderdash</ListItem>
      <ListItem button>Potoo</ListItem>
    </List>
  );
}
