import React, {useState} from 'react';
import Display from './Components/Display.jsx';
import Options from './Components/Options.jsx';

function App() {
  const [numOfStrings, setNumOfStrings] = useState(6);
  const [numOfFrets, setNumOfFrets] = useState(12);

  return (
    <div>
      <Options setStringCount={setNumOfStrings}/>      
      <Display stringCount={numOfStrings} fretCount={numOfFrets}/>
    </div>
  )
}

export default App;