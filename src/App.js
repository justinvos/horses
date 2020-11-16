import React from 'react';

import './App.css';
import { HorseDialog } from './components/HorseDialog';
import { HorseList } from './components/HorseList';
import { HorseProvider } from './components/HorseContext';

function App() {
  return (
    <HorseProvider>
      <HorseList />
      <HorseDialog />
    </HorseProvider>
  );
}

export default App;
