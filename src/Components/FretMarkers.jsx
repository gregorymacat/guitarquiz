import React from 'react';

//Shared style with Frets, doesn't have to be consistent but looks nice for now
const FRET_STYLE = {fill: 'rgb(205, 205, 205)', stroke: 'rgb(205, 205, 205)', strokeWidth: '0.5%'};

function FretMarkers({guitarMeasurements, settings}) {
  const fretMarkers = [];
  const boardMiddleYCoord = guitarMeasurements.getFretboardHeight() / 2;
  const firstStringYCoord = guitarMeasurements.getFirstStringGap();

  for (let i = 1; i <= settings.numOfFrets; i++) {
    if (i % 2 !== 0 && (i !== 1 && i !== 11)) {
      const currMarkerXCoord = guitarMeasurements.calculateMiddleOfFretsX(i);
      const currFretMarker =  <circle key={`fret-marker-${i}`} cx={`${currMarkerXCoord}%`} cy={`${boardMiddleYCoord}%`} 
        r={`${guitarMeasurements.getFretMarkerRadius()}%`} style={FRET_STYLE}/>;

      fretMarkers.push(currFretMarker);
    } else if (i === 12) {
      //add two vertically stacked dots instead of just one for the 12th fret
      const currMarkerXCoord = guitarMeasurements.calculateMiddleOfFretsX(i);
      const topMarkerYCoord = firstStringYCoord + guitarMeasurements.getStringGap();
      const bottomMarkerYCoord = firstStringYCoord + (guitarMeasurements.getStringGap() * (settings.numOfStrings - 2));

      const topFretMarker = <circle key={`fret-marker-${i}-top`} cx={`${currMarkerXCoord}%`} cy={`${topMarkerYCoord}%`} 
        r={`${guitarMeasurements.getFretMarkerRadius()}%`} style={FRET_STYLE}/>;
      const bottomFretMarker = <circle key={`fret-marker-${i}-bottom`} cx={`${currMarkerXCoord}%`} cy={`${bottomMarkerYCoord}%`} 
        r={`${guitarMeasurements.getFretMarkerRadius()}%`} style={FRET_STYLE}/>;

      fretMarkers.push(topFretMarker);
      fretMarkers.push(bottomFretMarker);
    }
  }

  return (
    <g id="fret-markers">
      {fretMarkers.map(fretMarker => fretMarker)}
    </g>
  )
}

export default FretMarkers;