import { Button, Dialog, TextField as MuiTextField } from '@material-ui/core';
import React, { useState } from 'react';

import { useHorses } from './HorseContext';

export function HorseDialog() {
  const { activeHorse, setActiveHorse } = useHorses();

  const open = Boolean(activeHorse);

  function handleClose() {
    setActiveHorse(null);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      {activeHorse ? <Form horse={activeHorse} /> : null}
    </Dialog>
  );
}

function Form({ horse }) {
  const [formState, setFormState] = useState(getInitialState(horse));

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
  }

  const disabled = formState.name === '';

  return (
    <form style={{ display: 'flex', flexDirection: 'column', margin: '64px' }} onSubmit={handleSubmit}>
      <TextField name="name" value={formState['name']} label="Name" onChange={handleChange} />
      <TextField name="favouriteFood" value={formState['favouriteFood']} label="Favourite food" onChange={handleChange} />
      <TextField name="height" value={formState['height']} label="Height" onChange={handleChange} />
      <TextField name="weight" value={formState['weight']} label="Weight" onChange={handleChange} />
      <Button type="submit" variant="contained" disabled={disabled}>Save</Button>
    </form>
  );
}

function getInitialState({ name, profile }) {
  return {
    name,
    favouriteFood: profile.favouriteFood,
    height: profile.physical.height,
    weight: profile.physical.weight
  };
}

function TextField({ name, ...props }) {
  return (
    <MuiTextField name={name} id={name} InputLabelProps={{ htmlFor: name }} {...props} />
  );
}
