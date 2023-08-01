import React, {useEffect, useState} from 'react';
import Slider from '@mui/material/Slider';

//Options labels for sliders in settings
const stringMarkerLabels = [{value: 6, label: '6'}, {value: 9, label: '9'}];
const fretMarkerLabels = [{value: 0, label: '0',}, {value: 12, label: '12',}];
const delayMarkerLabels = [{value: 1, label: '1'}, {value: 5, label: '5'}];
const volumeMarkerLabels = [{value: 0, label: '0'}, {value: 100, label: '100'}];

function Options({showSettings, changeShowSettings, settings, updateSettings, resetScore}) {
  const [openSettings, setOpenSettings] = useState(null);
  const [closeSettings, setCloseSettings] = useState(null);
  const [currStringCount, setCurrStringCount] = useState(settings.numOfStrings);
  const [currFretRange, setCurrFretRange] = useState(settings.fretRange);
  const [delay, setDelay] = useState(settings.delayBetweenNotes / 1000);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    setCurrStringCount(settings.numOfStrings);
    setCurrFretRange(settings.fretRange);
    setDelay(settings.delayBetweenNotes / 1000);
  }, [settings]);

  useEffect(() => {
    if (showSettings) {
      setOpenSettings(true);
    } else if (showSettings !== null) {
      changeCloseState();
    }
  }, [showSettings])

  async function changeCloseState() {
    setOpenSettings(false);
    setCloseSettings(true);
    changeShowSettings(false);
    //*IF THE TIME HERE IS CHANGED UPDATE THE LENGTH OF THE TRANSITION IN CSS
    //*#options-select-container-slide-in(out) and #options-modal-background-fade-in(out)
    await setTimeout(() => {
      setCloseSettings(false);
      // 
    }, 750);
  }

  function handleClick(event) {
    if (event.target.id === 'close-settings-icon') {
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
    const newSettings = {
      ...settings,
      numOfStrings: currStringCount,
      fretRange: currFretRange,
      delayBetweenNotes: delay * 1000,
    }

    if (JSON.stringify(settings) !== JSON.stringify(newSettings)) {
      setShowSaved(true);

      updateSettings(currStringCount, currFretRange, delay);

      //*IF THE TIME HERE IS CHANGED UPDATE THE LENGTH OF THE TRANSITION IN CSS
      //*#save-confirmation-text
      await setTimeout(() => {
        setShowSaved(false);
      }, 1000);
    }
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
    <>
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
                <label htmlFor="string-count">Number of Strings</label>
                <Slider id="string-count" className="settings-slider" getAriaLabel={() => "Number of Strings"}
                  onChange={handleStringChange}
                  valueLabelDisplay="auto" min={6} max={9}
                  defaultValue={settings.numOfStrings} marks={stringMarkerLabels} 
                />
              </div>
              <div className="slider-container">
                <label htmlFor="fret-range">Fret Range</label>
                <Slider id="fret-range" className="settings-slider" getAriaLabel={() => "Starting Fret"}
                  onChange={handleFretChange} valueLabelDisplay="auto"
                  defaultValue={settings.fretRange} disableSwap min={0} max={12} marks={fretMarkerLabels}
                />  
              </div>     
              <div className="slider-container">
                <label htmlFor="delay-range">Answer Delay (s)</label>
                <Slider id="delay-range" className="settings-slider" getAriaLabel={() => "Amount of Delay"}
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
    </> 
  )
}

export default Options;