import React, { useEffect } from 'react';
import Strings from './Strings.jsx';
import Frets from './Frets.jsx';
import FretMarkers from './FretMarkers.jsx';
import Note from './Note.jsx';

import displayUnits from '../Helpers/displayUnits.js';

const STANDARD_STRING_COUNT = 6;
const FRETBOARD_STYLE = {fill: 'rgb(150, 75, 0)', stroke: 'rgb(0, 0, 0)'};
const NUT_STYLE = {fill: 'rgb(0, 0, 0)', stroke: 'rgb(0, 0, 0)'};

function Display({settings, stringCount, setNote, correctCount, isCorrect}) {
  const {
    UNITS: {
      fretboard: {
        height,
        fretboardWidth,
        xOffset,
        yOffset
      },
      strings: {
        stringGap,
      },
      nut: {
        nutDistanceFromBoardX,
        nutWidth,
      },
    },
  } = displayUnits;
  const fretboardHeight = height + ((settings.numOfStrings - STANDARD_STRING_COUNT) * stringGap);
  const totalFretboardHeight = yOffset + fretboardHeight;

  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <rect style={NUT_STYLE} x={xOffset - nutDistanceFromBoardX} y={yOffset} width={nutWidth} height={fretboardHeight}></rect>
      <rect style={FRETBOARD_STYLE} x={xOffset} y={yOffset} width={fretboardWidth} height={fretboardHeight}></rect>
      <Strings settings={settings} />
      <Frets settings={settings} totalHeight={totalFretboardHeight} />
      <FretMarkers settings={settings} totalHeight={totalFretboardHeight} />
      <Note settings={settings} setNote={setNote} correctCount={correctCount} isCorrect={isCorrect}/>
    </svg>
  )
}

export default Display;