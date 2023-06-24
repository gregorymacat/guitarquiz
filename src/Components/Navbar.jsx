import React, {useState} from 'react';
import Slider from '@mui/material/Slider';
import Options from './Options.jsx';

const stringMarkerLabels = [
  {
    value: 6,
    label: '6',
  },
  {
    value: 9,
    label: '9',
  }
]
const fretMarkerLabels = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 12,
    label: '12',
  }
]
const delayMarkerLabels = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 3,
    label: '3',
  }
]

function Navbar({settings, changeSettings}) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [currStringCount, setCurrStringCount] = useState(settings.numOfStrings);
  const [currFretRange, setCurrFretRange] = useState(settings.fretRange);
  const [delay, setDelay] = useState(settings.delayBetweenNotes / 1000);
  const [showSaved, setShowSaved] = useState(false);

  const handleClick = (event) => {
    if (event.target.id === 'open-settings-icon') {
      setSettingsOpen(true);
    } else if (event.target.id === 'close-settings-icon') {
      setSettingsOpen(false);
    } else if (event.target.id === 'options-modal-background') {
      setSettingsOpen(false);
    }
  }
  const handleStringChange = (event, newValue) => {
    setCurrStringCount(newValue);
  }

  const handleFretChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const minDistance = 0;
    const [minFret, maxFret] = newValue;

    if (maxFret - minFret < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(minFret, settings.numOfFrets - minDistance);
        setCurrFretRange([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(maxFret, minDistance);
        setCurrFretRange([clamped - minDistance, clamped]);
      }
    } else {
      setCurrFretRange([minFret, maxFret]);
    }
  }

  const handleDelayChange = (event, newValue) => {
    setDelay(newValue);
  }

  const handleSaveChanges = async () => {
    setShowSaved(true);
    
    changeSettings(prevState => ({
      ...prevState,
      numOfStrings: currStringCount,
      fretRange: currFretRange,
      delayBetweenNotes: delay * 1000,
    }));

    //!IF THE TIME HERE IS CHANGED UPDATE THE LENGTH OF THE TRANSITION IN CSS
    await setTimeout(() => {
      setShowSaved(false);
    }, 2000);
  }

  return (
    <div className="navbar-container">
      <h1 id="app-title">Guitar Notes Quiz</h1>
      <img id="open-settings-icon" onClick={handleClick} src="setting.png"></img>
      {
        settingsOpen ?
        <div id="options-modal-background">
          <div className="options-select-container">
            <span id="close-settings-icon" onClick={handleClick}>Close</span>
            <form id="all-settings-container">
              <div className="slider-container">
                <label for="string-count">Number of Strings</label>
                <Slider id="string-count" className="settings-slider" ariaLabel="Number of Strings"
                  value={currStringCount} onChange={handleStringChange}
                  valueLabelDisplay="auto" min={6} max={9}
                  defaultValue={currStringCount} marks={stringMarkerLabels} 
                />
              </div>
              <div className="slider-container">
                <label for="fret-range">Range of Frets for Notes</label>
                <Slider id="fret-range" className="settings-slider" ariaLabel="Starting Fret"
                  value={currFretRange} onChange={handleFretChange} valueLabelDisplay="auto"
                  disableSwap min={0} max={12} marks={fretMarkerLabels}
                />  
              </div>     
              <div className="slider-container">
                <label for="delay-range">Congratulations Length (in seconds)</label>
                <Slider id="delay-range" className="settings-slider" ariaLabel="Amount of Delay" 
                  value={delay} onChange={handleDelayChange} valueLabelDisplay="auto"
                  min={1} max={3} defaultValue={delay} marks={delayMarkerLabels}
                />
              </div>
            </form>
            <div className="save-container">
              {
                showSaved
                  ? <span id="save-confirmation-text">Changes saved!</span>
                  : null
              }
              <button id="save-changes" onClick={handleSaveChanges}>Save Changes</button> 
            </div>
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