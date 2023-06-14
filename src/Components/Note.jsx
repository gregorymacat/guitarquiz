import React from 'react';
import displayUnits from '../Helpers/displayUnits.js';

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


function Note() {
  const {
    getNoteRadius,
    calculateMiddleOfFretsX,
  } = displayUnits;

  const radius = getNoteRadius();

  //Pick a random number 1-6 (or 0-5)
  //Pick another random number 1-12 (or 0-11)

  //Find the height for that string number 1-6
  //Calculate middle of the frets for the number 1-12

  //Set currentNote in App for comparison to answer

  return (
    <circle cx={5} cy={5} r={radius} style={NOTE_STYLE}/>
  )
}

export default Note;