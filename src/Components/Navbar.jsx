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
      <span id="open-information-icon" onClick={toggleTooltip}>I</span>
      <img id="open-settings-icon" onClick={handleClick} src="setting.png"></img>
      <Options showSettings={showSettings} changeShowSettings={setShowSettings} settings={settings} updateSettings={updateSettings} resetScore={resetScore}/>
      {showTooltip ? <div><span style={{zIndex: 1}}>Information Bubble Goes Here</span></div> : null}
    </div>
  )
}

export default Navbar;
