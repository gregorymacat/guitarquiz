//TODO: Add these values in as private variables to the class Guitar
//TODO: Only take the stringCount and fretCount in the constructor
//TODO: Might need to change getters around and maybe add setters for stringCount and fretCount
//fretboardWidth, fretboardHeight, nutWidth, fretWidth, stringWidth, stringLength, 
class Guitar {
  constructor(fretCount, stringCount) {
    this.fretCount = fretCount;
    this.stringCount = stringCount;
    this.fretboardWidth = 95;
    this.fretboardHeight = 100;
    this.xOffset = 2;
    this.nutWidth = 1;
    this.fretWidth = 3;
    this.stringWidth = 2;
    this.stringLength = 100;
    this.firstStringGap = 10;
    this.firstFretGap = 12;
    this.fretMarkerRadius = 0.5;
    this.stringGapToNoteRadiusModifier = 1;
  }

  getFretboardWidth = () => this.fretboardWidth;
  getFretboardHeight = () => this.fretboardHeight;
  getXOffset = () => this.xOffset;
  getNutWidth = () => this.nutWidth;
  getFretWidth = () => this.fretWidth;
  getStringWidth = () => this.stringWidth;
  getStringLength = () => this.stringLength;
  getFirstStringGap = () => this.firstStringGap;
  getFretMarkerRadius = () => this.fretMarkerRadius
  getFretGap = () => this.calculateFretGap();
  getStringGap = () => this.calculateStringGap();
  calculateFretGap() {
    return Math.floor((this.fretboardWidth / (this.fretCount + 1)) * 100) / 100;
  }
  calculateStringGap() {
    return Math.floor((((this.fretboardHeight - this.firstStringGap * 2) / (this.stringCount - 1)) * 100)) / 100;
  }
  calculateNoteRadius = () => this.calculateStringGap() / this.stringGapToNoteRadiusModifier;
  /**
   * @name calculateMiddleOfFretsX
   * @description Calculates x-coordinate that is the middle of two frets. Looks backwards for comparison.
   * @param {number} currentFretPos The forward and current fret to find the previous. 
   * 0-based for fret count (starting count from open string).
   * @return {number} x coordinate for the middle of two frets.
   */
  calculateMiddleOfFretsX(currentFretPos) {
    const fretGap = this.calculateFretGap();
    const previousFret = fretGap * (currentFretPos - 1) + this.xOffset;
    const currFret = fretGap * currentFretPos + this.xOffset;

    if (currentFretPos === 0) {
      return this.xOffset;
    } else if (currentFretPos === 1) {
      return fretGap / 2 + this.xOffset;
    }
  
    return ((previousFret + currFret) / 2);
  }
  /**
   * @name calculateAnyStringYCoord
   * @param {number} stringNum 0-based string number with High E string being 0
   * @returns y coordinate of the chosen string number
   */
  calculateAnyStringYCoord(stringNum) {
    return (this.firstStringGap + (this.calculateStringGap() * stringNum));
  }
}

module.exports = Guitar;