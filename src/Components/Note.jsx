import React, {useState, useEffect, useRef} from 'react';
import MIDISounds from 'midi-sounds-react';

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

const fretsToNextOctave = 12;

const D = 2;
const E = 4
const G = 7;
const A = 9;
const B = 11;

const stringsToMidiCode = {
  1: 5 * fretsToNextOctave + E,
  2: 4 * fretsToNextOctave + B,
  3: 4 * fretsToNextOctave + G,
  4: 4 * fretsToNextOctave + D,
  5: 3 * fretsToNextOctave + A,
  6: 3 * fretsToNextOctave + E,
}

function Note({guitarMeasurements, settings, setNote, isCorrect, needNewNote, setNeedNewNote}) {
  const [newNoteX, setNewNoteX] = useState();
  const [newNoteY, setNewNoteY] = useState();
  
  let midiRef;// = useRef(null);

  const radius = guitarMeasurements.calculateNoteRadius();

  useEffect(() => {
    chooseRandomNote();
  }, []);

  useEffect(() => {
    if (needNewNote) {
      chooseRandomNote();
    }
  }, [needNewNote]);

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
    console.log('This is the random string: ', randomString);
    console.log('This is the random fret: ', randomFret);
    midiRef.playStrumDownNow(288, [stringsToMidiCode[randomString + 1] + randomFret], 1, 1);

    setNeedNewNote(false);
  }

  return (
    <React.Fragment>
      <MIDISounds
          ref={(ref) => (midiRef = ref)}
          appElementName="app"
          instruments={[288]}
      />
      <circle cx={`${newNoteX}%`} cy={`${newNoteY}%`} r={`${radius}%`} style={isCorrect ? CORRECT_NOTE_STYLE : NOTE_STYLE}/>
    </React.Fragment>
  )
}

export default Note;
