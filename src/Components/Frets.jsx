import React from 'react';
import displayUnits from '../Helpers/displayUnits.js';

//Shared style with Fret Markers, doesn't have to be consistent but looks nice for now
const FRET_STYLE = {fill: 'rgb(239, 239, 239)', stroke: 'rgb(239, 239, 239)'};

function Frets({fretCount, totalHeight}) {
  //FRETS
  const allFrets = [];
  const {
    UNITS: {
      fretboard: {
        yOffset,
        height,
      },
      frets: {
        verticalShrink,
        fretGap,
      },
    },
    getFirstFretXCoord,
  } = displayUnits;
  const fretY1 = yOffset + verticalShrink;
  const fretY2 = (height + yOffset) - verticalShrink;
  const firstFretXCoord = getFirstFretXCoord();
  //TODO: DRY this up with line below for nextFret
  const firstFret = <line key={'fret-1'} style={FRET_STYLE} x1={firstFretXCoord} y1={fretY1}
    x2={firstFretXCoord} y2={fretY2}></line>;

  for (let i = 0; i < fretCount; i++) {
    if (i === 0) {
      allFrets.push(firstFret);
    } else {
      const nextFretXCoord = firstFretXCoord + (fretGap * i);
      const nextFret = <line key={`fret-${i+1}`} style={FRET_STYLE} x1={nextFretXCoord} y1={fretY1} x2={nextFretXCoord} y2={fretY2}></line>;

      allFrets.push(nextFret);
    }
  }

  return (
    <g id="frets">
      {allFrets.map(fret => fret)}
    </g>
  )
}

export default Frets;