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
const NOTE_STYLE = {fill: 'rgb(181, 26, 26)', stroke: 'rgb(181, 26, 26)'};
const CORRECT_NOTE_STYLE = {fill: 'rgb(26, 148, 26)', stroke: 'rgb(26, 148, 26)'};

function Note({guitarMeasurements, settings, setNote, correctCount, isCorrect}) {
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
    chooseRandomNote();
  }, [settings.numOfStrings, settings.fretRange]);

  function chooseRandomNote() {
    const { fretRange, numOfStrings } = settings;
    const [minFret, maxFret] = fretRange;
    const randomString = (Math.floor(Math.random() * numOfStrings));
    //Adding 1 to include open strings as well as 12th fret (11th index)
    const randomFret = (Math.floor(Math.random() * (maxFret + 1 - minFret) + minFret));

    const yCoord = guitarMeasurements.calculateAnyStringYCoord(randomString);
    const xCoord = guitarMeasurements.calculateMiddleOfFretsX(randomFret);

    setNewNoteX(xCoord);
    setNewNoteY(yCoord);
    setNote(GUITAR_NOTES[randomString][randomFret]);
  }

  return (
    <circle cx={`${newNoteX}%`} cy={`${newNoteY}%`} r={`${radius}%`} style={isCorrect ? CORRECT_NOTE_STYLE : NOTE_STYLE}/>
  )
}

export default Note;