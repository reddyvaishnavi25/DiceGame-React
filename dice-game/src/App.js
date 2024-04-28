
import './App.css';
import Headpage from './Components/Headpage';
import { useState } from 'react';
import GamePage from './Components/GamePage';


function App() {
  const [isGameStarted, setIsGameStarted]=useState(false);

  const toggleGameStarted=()=>{
    setIsGameStarted((prev)=>!prev)
  };

  return (
    <div className="App">
      {isGameStarted? <GamePage/> : <Headpage toggle={toggleGameStarted}/>}
    </div>
  );
}

export default App;
