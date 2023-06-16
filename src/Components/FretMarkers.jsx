import React from 'react';
import displayUnits from '../Helpers/displayUnits';

//Shared style with Frets, doesn't have to be consistent but looks nice for now
const FRET_STYLE = {fill: 'rgb(239, 239, 239)', stroke: 'rgb(239, 239, 239)'};



function FretMarkers({settings, totalHeight}) {
  //FRETBOARD MARKERS
  const fretMarkers = [];
  const {
    UNITS: {
      fretboard: {
        yOffset,
      },
      strings: {
        stringGap,
      },
    },
    getFirstStringYCoord,
    getFretMarkerRadius,
    calculateMiddleOfFretsX,
  } = displayUnits;
  const boardMiddleYCoord = (totalHeight + yOffset) / 2;
  const firstStringYCoord = getFirstStringYCoord();
  const radius = getFretMarkerRadius();

  for (let i = 1; i <= settings.numOfFrets; i++) {
    if (i % 2 !== 0 && (i !== 1 && i !== 11)) {
      const currMarkerXCoord = calculateMiddleOfFretsX(i);
      const currFretMarker =  <circle key={`fret-marker-${i}`} cx={currMarkerXCoord} cy={boardMiddleYCoord} r={radius} style={FRET_STYLE}/>;

      fretMarkers.push(currFretMarker);
    } else if (i === 12) {
      //add two vertically stacked dots instead of just one for the 12th fret
      const currMarkerXCoord = calculateMiddleOfFretsX(i);
      const topMarkerYCoord = firstStringYCoord + stringGap;
      const bottomMarkerYCoord = firstStringYCoord + (stringGap * (settings.numOfStrings - 2));

      const topFretMarker = <circle key={`fret-marker-${i}-top`} cx={currMarkerXCoord} cy={topMarkerYCoord} r={radius} style={FRET_STYLE}/>;
      const bottomFretMarker = <circle key={`fret-marker-${i}-bottom`} cx={currMarkerXCoord} cy={bottomMarkerYCoord} r={radius} style={FRET_STYLE}/>;

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