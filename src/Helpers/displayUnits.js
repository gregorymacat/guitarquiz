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
 * @param {number} currentFretPos The forward and current fret to find the previous. 
 * 0-based for fret count (starting count from open string).
 * @return {number} x coordinate for the middle of two frets.
 */
const calculateMiddleOfFretsX = (currentFretPos) => {
  const { fretGap } = UNITS.frets;
  const { xOffset } = UNITS.fretboard;

  if (currentFretPos === 0) {
    return xOffset;
  } else if (currentFretPos === 1) {
    return ((UNITS.fretboard.xOffset + getFirstFretXCoord()) / 2);
  }

  const previousFret = getFirstFretXCoord() + (fretGap * (currentFretPos - 2));
  const currFret = getFirstFretXCoord() + (fretGap * (currentFretPos - 1));
  
  return ((previousFret + currFret) / 2);
}
/**
 * @param {number} stringNum 0-based string number with High E string being 0
 * @returns y coordinate of the chosen string number
 */
const calculateAnyStringYCoord = (stringNum) => (getFirstStringYCoord() + (UNITS.strings.stringGap * stringNum));

module.exports = {
  UNITS,
  getFirstFretXCoord,
  getFirstStringYCoord,
  getFretMarkerRadius,
  getNoteRadius,
  calculateMiddleOfFretsX,
  calculateAnyStringYCoord,
}