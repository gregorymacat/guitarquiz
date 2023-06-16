import React, {useEffect, useState} from 'react';
import Display from './Components/Display.jsx';
import UserInput from './Components/UserInput.jsx';
import Navbar from './Components/Navbar.jsx';

const DEFAULT_SETTINGS = {
  numOfStrings: 6,
  numOfFrets: 12,
  delayBetweenNotes: 2000,
}

function App() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [currentNote, setCurrentNote] = useState('');
  const [guess, setGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);

  useEffect(() => {
    if (guess !== '') {
      if (currentNote.includes('/')) {
        const [sharp, flat] = currentNote.split('/');

        if (guess === sharp || guess === flat) {
          // setCorrectCount(correctCount + 1);
          // setTotalGuesses(totalGuesses + 1);
          // setGuess('');
          // setIsIncorrect(false);
          setIsCorrect(true);
          setIsIncorrect(false);

          setTimeout(() => {
            setGuess('');
            setCorrectCount(correctCount + 1);
            setTotalGuesses(totalGuesses + 1);
            setIsCorrect(false);
          }, settings.delayBetweenNotes);
        } else {
          setIsIncorrect(true);
          setTotalGuesses(totalGuesses + 1);
        }
      } else {
        if (guess === currentNote) {
          // setCorrectCount(correctCount + 1);
          // setTotalGuesses(totalGuesses + 1);
          // setGuess('');
          // setIsIncorrect(false);
          setIsCorrect(true);
          setIsIncorrect(false);

          setTimeout(() => {
            setGuess('');
            setCorrectCount(correctCount + 1);
            setTotalGuesses(totalGuesses + 1);
            setIsCorrect(false);
          }, 3000);
        } else {
          setIsIncorrect(true);
          setTotalGuesses(totalGuesses + 1);
        }
      }
    }
  }, [guess]);

  return (
    <div>
      {console.log('These are the settings: ', settings)}
      <section id="navbar">
        <Navbar settings={settings} changeSettings={setSettings}></Navbar>
      </section>
      
      <section id="main">
        <UserInput setGuess={setGuess}/>
        <div className="guesses-results-container">
          {isIncorrect ? <b>Incorrect, please try again</b> : null}
          {isCorrect ? <b>Correct!</b> : null}
          <span>Last Guess: {guess}</span>
          <span>Correct/Total Guesses: {correctCount}/{totalGuesses}</span>
        </div>
        <Display settings={settings} stringCount={settings.numOfStrings} fretCount={settings.numOfFrets} setNote={setCurrentNote} correctCount={correctCount} isCorrect={isCorrect}/>
      </section>
    </div>
  )
}

export default App;