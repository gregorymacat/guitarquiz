import React, {useEffect, useState} from 'react';
import Display from './Components/Display.jsx';
import UserInput from './Components/UserInput.jsx';
import Options from './Components/Options.jsx';

function App() {
  const [numOfStrings, setNumOfStrings] = useState(6);
  const [numOfFrets, setNumOfFrets] = useState(12);
  const [currentNote, setCurrentNote] = useState('');
  const [guess, setGuess] = useState('');
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);

  useEffect(() => {
    if (guess !== '') {
      if (currentNote.includes('/')) {
        const [sharp, flat] = currentNote.split('/');

        if (guess === sharp || guess === flat) {
          setCorrectCount(correctCount + 1);
          setTotalGuesses(totalGuesses + 1);
          setGuess('');
          setIsIncorrect(false);
        } else {
          setIsIncorrect(true);
          setTotalGuesses(totalGuesses + 1);
        }
      } else {
        if (guess === currentNote) {
          setCorrectCount(correctCount + 1);
          setTotalGuesses(totalGuesses + 1);
          setGuess('');
          setIsIncorrect(false);
        } else {
          setIsIncorrect(true);
          setTotalGuesses(totalGuesses + 1);
        }
      }
    }
  }, [guess]);

  return (
    <div>
      <Options setStringCount={setNumOfStrings}/> 
      <UserInput setGuess={setGuess}/>
      {isIncorrect ? <b>Incorrect, please try again</b> : null}
      <br/>
      <span>Current Note: {currentNote}</span>
      <br/>
      <span>Current Guess: {guess}</span>
      <br/>
      <span>{correctCount}/{totalGuesses}</span>
      <Display stringCount={numOfStrings} fretCount={numOfFrets} setNote={setCurrentNote} correctCount={correctCount}/>
    </div>
  )
}

export default App;