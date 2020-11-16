import './App.css';
import { HorseList } from './components/HorseList';

function App() {
  return (
    <HorseList horses={horses} />
  );
}

const horses = [{
  name: 'Thunderdash'
}, {
  name: 'Potoo'
}];

export default App;
