import React, { useEffect } from 'react';
import Strings from './Strings.jsx';
import Frets from './Frets.jsx';
import FretMarkers from './FretMarkers.jsx';
import Note from './Note.jsx';
import Guitar from '../Helpers/Guitar.js';

const FRETBOARD_STYLE = {fill: 'rgb(150, 75, 0)', stroke: 'rgb(0, 0, 0)'};
const NUT_STYLE = {fill: 'rgb(0, 0, 0)', stroke: 'rgb(0, 0, 0)'};

function Display({settings, setNote, correctCount, isCorrect}) {

  const guitarMeasurements = new Guitar(settings.numOfFrets, settings.numOfStrings);
  const fretboardWidth =  guitarMeasurements.getFretboardWidth();
  const fretboardHeight =  guitarMeasurements.getFretboardHeight();
  const nutWidth = guitarMeasurements.getNutWidth();

  //TODO: Also need to add css to position the fretboard in the center of the screen
  return (
    <svg width="75%" height="30%">
      <rect style={FRETBOARD_STYLE} x={0} y={0} width={`${fretboardWidth}%`} height={`${fretboardHeight}%`}></rect>
      <rect style={NUT_STYLE} x={0} y={0} width={`${nutWidth}%`} height={`${fretboardHeight}%`}></rect>
      <Strings guitarMeasurements={guitarMeasurements} settings={settings} />
      <Frets guitarMeasurements={guitarMeasurements} settings={settings}/>
      <FretMarkers guitarMeasurements={guitarMeasurements} settings={settings}/>
      <Note guitarMeasurements={guitarMeasurements} settings={settings} setNote={setNote} correctCount={correctCount} isCorrect={isCorrect}/>      
    </svg>
  )
}

export default Display;