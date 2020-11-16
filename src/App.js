import React from 'react';

import './App.css';
import { HorseList } from './components/HorseList';
import { HorseProvider } from './components/HorseContext';

function App() {
  return (
    <HorseProvider>
      <HorseList />
    </HorseProvider>
  );
}

export default App;
