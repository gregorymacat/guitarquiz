import React, {useState} from 'react';
import Options from './Options.jsx';

function Navbar({settings, updateSettings, resetScore}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSettings, setShowSettings] = useState(null);

  const toggleTooltip = () => { setShowTooltip(!showTooltip); }

  function handleClick() {
    setShowSettings(true);
  }

  return (
    <div className="navbar-container">
      <h1 id="app-title">Guitar Notes Quiz</h1>
      <img id="open-information-icon" onClick={toggleTooltip} src="info.png"></img>
      <img id="open-settings-icon" onClick={handleClick} src="setting.png"></img>
      <Options showSettings={showSettings} changeShowSettings={setShowSettings} settings={settings} updateSettings={updateSettings} resetScore={resetScore}/>
      {showTooltip 
        ? <div className="tooltip-container">
              <text>Each open string represents a note, starting from the bottom of the screen to the top:</text>
              <text>E A D G B E</text>
              <text>Going up a fret from left to right goes up a note chromatically from the open string:</text>
              <text>E F F#/Gb G G#/Ab A A#/Bb B C...</text>
              <text>The "open" string's note will be marked with the red circle on the nut (the black bar).</text>
              <text>Open strings mean nothing is fretted when the string is strummed.</text>
              <text>Only two sets of notes don't have a sharp or flat (# or b) between them:</text>
              <text>B C and E F</text>

          </div>
        : null}
    </div>
  )
}

export default Navbar;
