import './App.css';
import DaysCompleted from './Components/DaysCompleted';
import ProgressBar from './Components/ProgressBar';
import Tile from './Components/Tile';

function App() {

  return (
  <div>
    <Tile>
      <DaysCompleted days={15} />
      <ProgressBar progress={40} />
    </Tile>
  </div>
  );
 }


export default App;
