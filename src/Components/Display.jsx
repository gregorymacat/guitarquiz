import React from 'react';
import Strings from './Strings.jsx';
import Frets from './Frets.jsx';
import FretMarkers from './FretMarkers.jsx';
import Note from './Note.jsx';

import displayUnits from '../Helpers/displayUnits.js';

const STANDARD_STRING_COUNT = 6;
const FRETBOARD_STYLE = {fill: 'rgb(150, 75, 0)', stroke: 'rgb(0, 0, 0)'};

function Display({stringCount, fretCount}) {
  const {
    UNITS: {
      fretboard: {
        height,
        width,
        xOffset,
        yOffset
      },
      strings: {
        stringGap,
      },
    },
  } = displayUnits;
  const fretboardHeight = height + ((stringCount - STANDARD_STRING_COUNT) * stringGap);
  const totalFretboardHeight = yOffset + fretboardHeight;
  const fretboard = <rect style={FRETBOARD_STYLE} x={xOffset} y={yOffset} width={width} height={fretboardHeight}></rect>;

  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      {fretboard}
      <Note />
      <Strings stringCount={stringCount} />
      <Frets fretCount={fretCount} totalHeight={totalFretboardHeight} />
      <FretMarkers fretCount={fretCount} stringCount={stringCount} totalHeight={totalFretboardHeight} />
    </svg>
  )
}

export default Display;