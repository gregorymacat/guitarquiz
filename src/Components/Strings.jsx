import React from 'react';

import displayUnits from '../Helpers/displayUnits.js';

const STRING_STYLE = {fill: 'rgb(135, 135, 135)', stroke: 'rgb(135, 135, 135)'};

function Strings({stringCount}) {
  const allStrings = [];
  const {
    UNITS: {
      fretboard: {
        xOffset,
        width,
      },
      strings: {
        horizontalShrink,
        stringGap,
      },
    },
    getFirstStringYCoord,
  } = displayUnits;
  const stringX1 = xOffset + horizontalShrink;
  const stringX2 = (xOffset + width) - horizontalShrink;
  const firstStringYCoord = getFirstStringYCoord();
  const highestString = <line key={'string-1'} style={STRING_STYLE} x1={stringX1} y1={firstStringYCoord} x2={stringX2} y2={firstStringYCoord}></line>;

  for (let i = 0; i < stringCount; i++) {
    if (i === 0) {
      allStrings.push(highestString);
    } else {
      const nextStringYCoord = firstStringYCoord + (stringGap * i);
      const nextString = <line key={`string-${i+1}`} style={STRING_STYLE} x1={stringX1} y1={nextStringYCoord} x2={stringX2} y2={nextStringYCoord}></line>;

      allStrings.push(nextString);
    }
  }

  return (
    <g id="strings">
      {allStrings.map(string => string)}
    </g>
  )
}

export default Strings;