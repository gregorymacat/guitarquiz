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
    value: 5,
    label: '5',
  }
]

function Navbar({settings, changeSettings, resetScore}) {
  const [openSettings, setOpenSettings] = useState(false);
  const [closeSettings, setCloseSettings] = useState(false);
  const [currStringCount, setCurrStringCount] = useState(settings.numOfStrings);
  const [currFretRange, setCurrFretRange] = useState(settings.fretRange);
  const [delay, setDelay] = useState(settings.delayBetweenNotes / 1000);
  const [showSaved, setShowSaved] = useState(false);

  async function changeCloseState() {
    setOpenSettings(false);
    setCloseSettings(true);
    //*IF THE TIME HERE IS CHANGED UPDATE THE LENGTH OF THE TRANSITION IN CSS
    //*#options-select-container-slide-in(out) and #options-modal-background-fade-in(out)
    await setTimeout(() => {
      setCloseSettings(false);
    }, 750);
  }

  function handleClick(event) {
    if (event.target.id === 'open-settings-icon') {
      setOpenSettings(true);
    } else if (event.target.id === 'close-settings-icon') {
      changeCloseState();
    } else if (event.target.id === 'options-modal-background-fade-in') {
      changeCloseState();
    }
  }
  function handleStringChange(event, newValue) {
    setCurrStringCount(newValue);
  }

  function handleFretChange(event, newValue, activeThumb) {
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

  function handleDelayChange(event, newValue) {
    setDelay(newValue);
  }

  async function handleSaveChanges () {
    setShowSaved(true);
    
    changeSettings(prevState => ({
      ...prevState,
      numOfStrings: currStringCount,
      fretRange: currFretRange,
      delayBetweenNotes: delay * 1000,
    }));

    //*IF THE TIME HERE IS CHANGED UPDATE THE LENGTH OF THE TRANSITION IN CSS
    await setTimeout(() => {
      setShowSaved(false);
    }, 2000);
  }

  const modalClass = 
    openSettings ? "options-select-container-slide-in" 
    : closeSettings ? "options-select-container-slide-out"
    : null;
  const modalBackgroundClass =
    openSettings ? "options-modal-background-fade-in" 
    : closeSettings ? "options-modal-background-fade-out"
    : null;

  return (
    <div className="navbar-container">
      <h1 id="app-title">Guitar Notes Quiz</h1>
      <img id="open-settings-icon" onClick={handleClick} src="setting.png"></img>
      {
        modalBackgroundClass ?
          <div id={modalBackgroundClass} onClick={handleClick}></div>
          : null
      }
      {
        modalClass ?
          <div id={modalClass}>
            <span id="close-settings-icon" onClick={handleClick}>Close</span>
            <form id="all-settings-container">
              <div className="slider-container">
                <label for="string-count">Number of Strings</label>
                <Slider id="string-count" className="settings-slider" ariaLabel="Number of Strings"
                  onChange={handleStringChange}
                  valueLabelDisplay="auto" min={6} max={9}
                  defaultValue={settings.numOfStrings} marks={stringMarkerLabels} 
                />
              </div>
              <div className="slider-container">
                <label for="fret-range">Fret Range</label>
                <Slider id="fret-range" className="settings-slider" ariaLabel="Starting Fret"
                  onChange={handleFretChange} valueLabelDisplay="auto"
                  defaultValue={settings.fretRange} disableSwap min={0} max={12} marks={fretMarkerLabels}
                />  
              </div>     
              <div className="slider-container">
                <label for="delay-range">Answer Delay (s)</label>
                <Slider id="delay-range" className="settings-slider" ariaLabel="Amount of Delay" 
                  onChange={handleDelayChange} valueLabelDisplay="auto"
                  min={1} max={5} defaultValue={settings.delayBetweenNotes / 1000} marks={delayMarkerLabels}
                />
              </div>
            </form>
            <div className="reset-container">
              <button id="reset-stats" onClick={resetScore}>Reset Stats</button>
            </div>
            <div className="save-container">
              {
                showSaved
                  ? <span id="save-confirmation-text">Changes saved!</span>
                  : null
              }
              <button id="save-changes" onClick={handleSaveChanges}>Save Changes</button> 
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