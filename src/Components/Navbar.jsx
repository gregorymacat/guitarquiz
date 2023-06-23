import React, {useState} from 'react';
import Options from './Options.jsx';

function Navbar({settings, changeSettings}) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [currStringCount, setCurrStringCount] = useState(settings.numOfStrings);
  const [currMinFret, setCurrMinFret] = useState(settings.minFret);
  const [currMaxFret, setCurrMaxFret] = useState(settings.maxFret);

  const handleClick = (event) => {
    if (event.target.id === 'open-settings-icon') {
      setSettingsOpen(true);
    } else if (event.target.id === 'close-settings-icon') {
      setSettingsOpen(false);
    }
  }
  const handleChange = (event) => {
    const value = event.target.value;

    if (event.target.id === 'string-count') {
      setCurrStringCount(value);
    } else if (event.target.id === 'fret-min') {
      setCurrMinFret(value);
    } else if (event.target.id === 'fret-max') {
      setCurrMaxFret(value)
    }

    //TODO: Update this function so slider updates settings with code below, might need to do on submission instead
    // const settingsCopy = settings;
    // settingsCopy.numOfStrings = event.target.value;
    // changeSettings(prevState => ({
    //   ...prevState,
    //   numOfStrings: event.target.value,
    // }));
  }

  return (
    <div className="navbar-container">
      <img id="open-settings-icon" onClick={handleClick} src="setting.png"></img>
      {
        settingsOpen ?
        <div className="options-modal-background">
          <div className="options-select-container">
            <span id="close-settings-icon" onClick={handleClick}>Close</span>
            <form id="string-slider">
              <label for="string-count">Number of Strings</label>
              <input id="string-count" type="range" min="6" max="9" value={currStringCount} onChange={handleChange}></input>
              {currStringCount}
            </form>
            {/* 
            I need to turn this into a dual slider for frets 0-5, 3-7, etc.
            <form id="fret-slider">
              <label for="fret-count">Number of Frets</label>
              <input id="fret-count" type="range" min="0" max="9" value={currFretCount} onChange={handleChange}></input>
              {currStringCount}
            </form> 
            */}
            <form className="fret-slider">
              <div>
                <label for="fret-min">Starting Fret</label>
                <input id="fret-min" type="range" min="0" max="12" value={currMinFret} onChange={handleChange}></input>
              </div>
              <div>
                <label for="fret-max">Final Fret</label>
                <input id="fret-max" type="range" min="0" max="12" value={currMaxFret} onChange={handleChange}></input>
              </div>
            </form>
          </div>
        </div>
        : null
      }
    </div>
  )
}

/*
<label>Number of Strings</label>
<select onChange={handleChange}>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
</select>
*/

export default Navbar;