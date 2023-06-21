import React from 'react';

//Shared style with Fret Markers, doesn't have to be consistent but looks nice for now
const FRET_STYLE = {fill: 'rgba(205, 205, 205, 0.64)', stroke: 'rgba(205, 205, 205, 0.64)', strokeWidth: '0.5%'};

function Frets({guitarMeasurements, settings}) {
  const allFrets = [];
  const fretY2 = guitarMeasurements.getFretboardHeight();
  const firstFretXPercent = guitarMeasurements.getFretGap();
  //TODO: DRY this up with line below for nextFret
  const firstFret = <line key={'fret-1'} style={FRET_STYLE} x1={`${firstFretXPercent}%`} y1={0}
    x2={`${firstFretXPercent}%`} y2={`${fretY2}%`}></line>;

  for (let i = 0; i < settings.numOfFrets; i++) {
    if (i === 0) {
      allFrets.push(firstFret);
    } else {
      const nextFretXCoord = guitarMeasurements.getFretGap() * (i + 1);
      const nextFret = <line key={`fret-${i+1}`} style={FRET_STYLE} x1={`${nextFretXCoord}%`} y1={0} x2={`${nextFretXCoord}%`} y2={`${fretY2}%`}></line>;

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