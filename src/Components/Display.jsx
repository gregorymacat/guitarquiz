import React from 'react';
import Strings from './Strings.jsx';
import Frets from './Frets.jsx';
import FretMarkers from './FretMarkers.jsx';
import Note from './Note.jsx';
import Guitar from '../Helpers/Guitar.js';

const FRETBOARD_STYLE = {fill: 'rgb(150, 75, 0)', stroke: 'rgb(0, 0, 0)'};
const NUT_STYLE = {fill: 'rgb(0, 0, 0)', stroke: 'rgb(0, 0, 0)'};

function Display({settings, setNote, playNote, isCorrect, needNewNote, setNeedNewNote}) {

  const guitarMeasurements = new Guitar(settings.numOfFrets, settings.numOfStrings);
  const fretboardWidth =  guitarMeasurements.getFretboardWidth();
  const fretboardHeight =  guitarMeasurements.getFretboardHeight();
  const xOffset = guitarMeasurements.getXOffset();
  const nutWidth = guitarMeasurements.getNutWidth();

  return (
    <svg className="guitar-container">
      <rect style={FRETBOARD_STYLE} x={`${xOffset}%`} y={`${0}%`}
        width={`${fretboardWidth}%`} height={`${fretboardHeight}%`}></rect>
      <rect style={NUT_STYLE} x={`${xOffset}%`} y={`${0}%`}
        width={`${nutWidth}%`} height={`${fretboardHeight}%`}></rect>
      <Strings guitarMeasurements={guitarMeasurements} settings={settings} />
      <Frets guitarMeasurements={guitarMeasurements} settings={settings}/>
      <FretMarkers guitarMeasurements={guitarMeasurements} settings={settings}/>
      <Note guitarMeasurements={guitarMeasurements} settings={settings}
        setNote={setNote} playNote={playNote} isCorrect={isCorrect} needNewNote={needNewNote}
        setNeedNewNote={setNeedNewNote}/>      
    </svg>
  )
}

export default Display;
