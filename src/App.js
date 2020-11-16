import React from 'react';

import './App.css';
import { HorseList } from './components/HorseList';
import { HorseProvider } from './components/HorseProvider';

function App() {
  return (
    <HorseProvider>{horses => (
      <HorseList horses={horses} />
    )}</HorseProvider>
  );
}

export default App;
