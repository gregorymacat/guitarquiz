import React from 'react';

function Options({settings, changeSettings}) {
  const handleChange = (event) => {
    const settingsCopy = settings;
    settingsCopy.numOfStrings = event.target.value;
    console.log('Changing: ', settingsCopy)
    changeSettings(prevState => ({
      ...prevState,
      numOfStrings: event.target.value,
    }));
  }
  return (
    <div className="options-select-container">
      <label>Number of Strings</label>
      <select onChange={handleChange}>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </div>
  )
}

export default Options;