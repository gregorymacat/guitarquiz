import React from 'react';

const FRETBOARD_STYLE = {fill: 'rgb(150, 75, 0)', stroke: 'rgb(0, 0, 0)'};
const STRING_STYLE = {fill: 'rgb(135, 135, 135)', stroke: 'rgb(135, 135, 135)'};
const FRET_STYLE = {fill: 'rgb(239, 239, 239)', stroke: 'rgb(239, 239, 239)'};

const NUM_OF_STRINGS = 6;
const NUM_OF_FRETS = 12;
const STRING_GAP = 18;
const STANDARD_STRING_COUNT = 6;
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
]

function App() {
  //FRETBOARD
  const fretboardStartYCoord = 70;
  const fretboardHeight = 120 + ((NUM_OF_STRINGS - STANDARD_STRING_COUNT) * STRING_GAP);
  const totalFretboardHeight = fretboardStartYCoord + fretboardHeight;
  const fretboard = <rect style={FRETBOARD_STYLE} x="50" y={fretboardStartYCoord} width="380" height={fretboardHeight}></rect>;

  //STRINGS
  const allStrings = [];
  const firstStringYCoord = 85;
  const highestString = <line style={STRING_STYLE} x1="52" y1={firstStringYCoord} x2="428" y2={firstStringYCoord}></line>;

  for (let i = 0; i < NUM_OF_STRINGS; i++) {
    if (i === 0) {
      allStrings.push(highestString);
    } else {
      const nextStringYCoord = firstStringYCoord + (STRING_GAP * i);
      const nextString = <line style={STRING_STYLE} x1="52" y1={nextStringYCoord} x2="428" y2={nextStringYCoord}></line>;

      allStrings.push(nextString);
    }
  }

  //FRETS
  const allFrets = [];
  const firstFretXCoord = 80;
  const fretGap = 29.1;
  const firstFret = <line style={FRET_STYLE} x1={firstFretXCoord} y1={fretboardStartYCoord + 2} x2={firstFretXCoord} y2={totalFretboardHeight - 2}></line>;
  for (let i = 0; i < NUM_OF_FRETS; i++) {
    if (i === 0) {
      allFrets.push(firstFret);
    } else {
      const nextFretXCoord = firstFretXCoord + (fretGap * i);
      const nextFret = <line style={FRET_STYLE} x1={nextFretXCoord} y1={fretboardStartYCoord + 2} x2={nextFretXCoord} y2={totalFretboardHeight - 2}></line>;

      allFrets.push(nextFret);
    }
  }

  //FRETBOARD MARKERS
  const boardMiddleYCoord = (totalFretboardHeight + fretboardStartYCoord) / 2;
  const fretMarkers = [];
  for (let i = 1; i <= NUM_OF_FRETS; i++) {
    if (i % 2 !== 0 && (i !== 1 && i !== 11)) {
      const oddFretXCoord = firstFretXCoord + (fretGap * (i - 1));
      const evenFretXCoord = firstFretXCoord + (fretGap * (i - 2));

      const radius = (STRING_GAP - 2) / 6;
      const currMarkerXCoord = (oddFretXCoord + evenFretXCoord) / 2;
      const currFretMarker =  <circle cx={currMarkerXCoord} cy={boardMiddleYCoord} r={radius} style={FRET_STYLE}/>;

      fretMarkers.push(currFretMarker);
    } else if (i === 12) {
      //add two vertically stacked dots instead of just one for the 12th fret
      const oddFretXCoord = firstFretXCoord + (fretGap * (i - 1));
      const evenFretXCoord = firstFretXCoord + (fretGap * (i - 2));

      const radius = (STRING_GAP - 2) / 6;
      const currMarkerXCoord = (oddFretXCoord + evenFretXCoord) / 2;
      const topMarkerYCoord = firstStringYCoord + STRING_GAP;
      const bottomMarkerYCoord = firstStringYCoord + (STRING_GAP * (NUM_OF_STRINGS - 2));

      const topFretMarker = <circle cx={currMarkerXCoord} cy={topMarkerYCoord} r={radius} style={FRET_STYLE}/>;;
      const bottomFretMarker = <circle cx={currMarkerXCoord} cy={bottomMarkerYCoord} r={radius} style={FRET_STYLE}/>;;

      fretMarkers.push(topFretMarker);
      fretMarkers.push(bottomFretMarker);
    }
  }

  return (
    <div>      
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs></defs>
        {fretboard}
        {allStrings.map(string => string)}
        {allFrets.map(fret => fret)}
        {fretMarkers.map(fretMarker => fretMarker)}
      </svg>
    </div>
  )
}

export default App;