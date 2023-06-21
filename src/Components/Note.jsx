import React, {useState, useEffect} from 'react';

const GUITAR_NOTES = [
  ['E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E'],
  ['B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'],
  ['G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'],
  ['D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'],
  ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'],
  ['E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E'],
  ['B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'],
  ['F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb'],
  ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db'],
];
const NOTE_STYLE = {fill: 'rgb(256, 0, 0)', stroke: 'rgb(256, 0, 0)'};
const CORRECT_NOTE_STYLE = {fill: 'rgb(0, 256, 0)', stroke: 'rgb(0, 256, 0)'};

function Note({guitarMeasurements, settings, setNote, correctCount, isCorrect}) {
  const [currString, setCurrString] = useState();
  const [newNoteX, setNewNoteX] = useState();
  const [newNoteY, setNewNoteY] = useState();

  const radius = guitarMeasurements.calculateNoteRadius();

  useEffect(() => {
    chooseRandomNote();
  }, []);

  useEffect(() => {
    if (correctCount !== 0) chooseRandomNote();
  }, [correctCount])

  useEffect(() => {
    if (currString + 1 > settings.numOfStrings) {
      chooseRandomNote();
    }
  }, [settings.numOfStrings]);

  function chooseRandomNote() {
    const randomString = (Math.floor(Math.random() * settings.numOfStrings));
    //Adding 1 to include open strings as well as 12th fret (11th index)
    const randomFret = (Math.floor(Math.random() * (settings.numOfFrets + 1)));

    const yCoord = guitarMeasurements.calculateAnyStringYCoord(randomString);
    const xCoord = guitarMeasurements.calculateMiddleOfFretsX(randomFret);

    setCurrString(randomString);
    setNewNoteX(xCoord);
    setNewNoteY(yCoord);
    setNote(GUITAR_NOTES[randomString][randomFret]);
  }

  return (
    <circle cx={`${newNoteX}%`} cy={`${newNoteY}%`} r={`${radius}`} style={isCorrect ? CORRECT_NOTE_STYLE : NOTE_STYLE}/>
  )
}

export default Note;