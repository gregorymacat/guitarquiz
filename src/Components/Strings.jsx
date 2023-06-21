import React from 'react';

const STRING_STYLE = {fill: 'rgb(135, 135, 135)', stroke: 'rgb(135, 135, 135)', strokeWidth: '0.5%'};

function Strings({guitarMeasurements, settings}) {
  const allStrings = [];
  const highestString = <line key={'string-1'} style={STRING_STYLE} x1={0} y1={`${guitarMeasurements.getFirstStringGap()}%`}
    x2={`${guitarMeasurements.getFretboardWidth()}%`} y2={`${guitarMeasurements.getFirstStringGap()}%`}></line>;

  for (let i = 0; i < settings.numOfStrings; i++) {
    if (i === 0) {
      allStrings.push(highestString);
    } else {
      console.log('i: ', i, ' || guitarMeasurements.getStringGap() * i: ', guitarMeasurements.getStringGap() * i);
      const nextStringYCoord = guitarMeasurements.getFirstStringGap() + guitarMeasurements.getStringGap() * i;

      const nextString = <line key={`string-${i + 1}`} style={STRING_STYLE} x1={0} y1={`${nextStringYCoord}%`}
        x2={`${guitarMeasurements.getFretboardWidth()}%`} y2={`${nextStringYCoord}%`}></line>;

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