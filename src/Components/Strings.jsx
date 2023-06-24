import React from 'react';

const STRING_STYLE = {fill: 'rgb(105, 105, 105)', stroke: 'rgb(105, 105, 105)', strokeWidth: '0.5%'};

function Strings({guitarMeasurements, settings}) {
  const allStrings = [];
  const fretboardWidth = guitarMeasurements.getFretboardWidth();
  const xOffset = guitarMeasurements.getXOffset();
  const firstStringGap = guitarMeasurements.getFirstStringGap();
  const highestString = <line key={'string-1'} style={STRING_STYLE} x1={`${xOffset}%`} y1={`${firstStringGap}%`}
    x2={`${fretboardWidth + xOffset}%`} y2={`${firstStringGap}%`}></line>;

  for (let i = 0; i < settings.numOfStrings; i++) {
    if (i === 0) {
      allStrings.push(highestString);
    } else {
      const nextStringYCoord = guitarMeasurements.getFirstStringGap() + guitarMeasurements.getStringGap() * i;

      const nextString = <line key={`string-${i + 1}`} style={STRING_STYLE} x1={`${xOffset}%`} y1={`${nextStringYCoord}%`}
        x2={`${guitarMeasurements.getFretboardWidth() + xOffset}%`} y2={`${nextStringYCoord}%`}></line>;

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