const UNITS = {
  fretboard: {
    xOffset: 50,
    yOffset: 70,
    height: 120,
    width: 380,
  },
  frets: {
    verticalShrink: 2,
    fretGap: 29.1,
    firstFretGap: 30,
  },
  strings: {
    horizontalShrink: 2,
    stringGap: 18,
    firstStringGap: 15,
    standardCount: 6,
  },
  fretMarker: {
    fretRadiusGapModifier: 2,
    fretOverallRadiusModifier: 6,
  },
  note: {
    noteOverallRadiusModifier: 4, 
  }
}

const getFirstFretXCoord = () => UNITS.fretboard.xOffset + UNITS.frets.firstFretGap;
const getFirstStringYCoord = () => UNITS.fretboard.yOffset + UNITS.strings.firstStringGap;
const getFretMarkerRadius = () => { 
  return (
    (UNITS.strings.stringGap - UNITS.fretMarker.fretRadiusGapModifier) / UNITS.fretMarker.fretOverallRadiusModifier
  ) 
};
const getNoteRadius = () => UNITS.strings.stringGap / UNITS.note.noteOverallRadiusModifier;
/**
 * Calculates x-coordinate that is the middle of two frets. Looks backwards for comparison.
 *
 * @param {number} firstFretXCoord X coordinate of the first fret (x1 or x2, both are the same)
 * @param {number} currentFretPos The forward and current fret to find the previous. 1-based not 0-based for count.
 * @return {number} x coordinate for the middle of two frets.
 */
const calculateMiddleOfFretsX = (firstFretXCoord, currentFretPos) => {
  const { fretGap } = UNITS.frets;
  const previousFret = firstFretXCoord + (fretGap * (currentFretPos - 2));
  const currFret = firstFretXCoord + (fretGap * (currentFretPos - 1));
  
  return ((previousFret + currFret) / 2);
}

module.exports = {
  UNITS,
  getFirstFretXCoord,
  getFirstStringYCoord,
  getFretMarkerRadius,
  getNoteRadius,
  calculateMiddleOfFretsX,
}