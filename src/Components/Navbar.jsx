import React, {useState} from 'react';
import Options from './Options.jsx';

function Navbar({settings, changeSettings}) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <Options settings={settings} changeSettings={changeSettings}/> 
    </div>
  )
}

export default Navbar;