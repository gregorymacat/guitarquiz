import React, {useEffect, useState} from 'react';
import { StyledEngineProvider } from '@mui/material';
import Cookies from 'universal-cookie';

import Display from './Components/Display.jsx';
import UserInput from './Components/UserInput.jsx';
import Navbar from './Components/Navbar.jsx';

const DEFAULT_SETTINGS = {
  numOfStrings: 6,
  numOfFrets: 12,
  fretRange: [0, 12],
  delayBetweenNotes: 2000,
}

function App() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [currentNote, setCurrentNote] = useState('');
  const [needNewNote, setNeedNewNote] = useState(false);
  const [guess, setGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);

  useEffect(() => {
    const cookies = new Cookies();

    const savedSettings = cookies.get('settings');
    const savedScores = cookies.get('scores');

    if (savedSettings) {
      setSettings(savedSettings);
    }
    if (savedScores) {
      const { correct = 0, total = 0 } = savedScores;
      setCorrectCount(correct);
      setTotalGuesses(total);
    }
  }, [])

  useEffect(() => {
    const cookies = new Cookies();
    cookies.set('settings', settings);
  }, [settings]);

  useEffect(() => {
    const cookies = new Cookies();
    cookies.set('scores', {correct: correctCount, total: totalGuesses});
  }, [totalGuesses]);

  useEffect(() => {
    async function updateStatsFromGuess(isUserCorrect) {
      if (isUserCorrect) {
        setIsCorrect(true);
        setIsIncorrect(false);
        setCorrectCount(correctCount + 1);
        setTotalGuesses(totalGuesses + 1);
    
        await setTimeout(() => {
          setGuess('');
          setNeedNewNote(true);
          setIsCorrect(false);
        }, settings.delayBetweenNotes);
      } else {
        setIsIncorrect(true);
        setTotalGuesses(totalGuesses + 1);
      }
    }

    if (guess !== '') {
      const correctAnswers = [currentNote];

      if (currentNote.includes('/')) {
        const [sharp, flat] = currentNote.split('/');
        correctAnswers.push(sharp);
        correctAnswers.push(flat);
      }

      const isAnswerCorrect = correctAnswers.includes(guess);

      updateStatsFromGuess(isAnswerCorrect);
    }
  }, [guess]);

  const resetScore = () => {
    setCorrectCount(0);
    setTotalGuesses(0);
    setIsIncorrect(false);
    setIsCorrect(false);
    setGuess('');
    setNeedNewNote(true);
  }

  const updateSettings = (newStringCount, newFretRange, newDelay) => {
    setSettings(prevState => ({
      ...prevState,
      numOfStrings: newStringCount,
      fretRange: newFretRange,
      delayBetweenNotes: newDelay * 1000,
    }));
    setIsIncorrect(false);
    setIsCorrect(false);
    setGuess('')
    setNeedNewNote(true);
  }

  return (
    <StyledEngineProvider injectFirst>
      <section id="navbar">
        <Navbar settings={settings} updateSettings={updateSettings} resetScore={resetScore}></Navbar>
      </section>
      
      <section id="main">
        <div className="game-container">
          <UserInput needNewNote={needNewNote} setGuess={setGuess}/>
          <div className="guesses-results-container">
            {isIncorrect ? <b id="incorrect-message">Incorrect, please try again</b> : null}
            {isCorrect ? <b id="correct-message">Correct!</b> : null}
            <span>Last Guess: {guess}</span>
            <span>Correct/Total Guesses: {correctCount}/{totalGuesses}</span>
          </div>
          <Display settings={settings} setNote={setCurrentNote} isCorrect={isCorrect} 
            needNewNote={needNewNote} setNeedNewNote={setNeedNewNote}/>
        </div>
      </section>
    </StyledEngineProvider>
  )
}

export default App;
