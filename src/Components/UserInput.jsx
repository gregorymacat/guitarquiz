import React, {useState} from 'react';

//TODO: Need to finish the css for this input, make it look pretty
function UserInput({setGuess}) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    const currentInput = event.target.value;
    
    setInput(currentInput);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //Need to remove whitespace from guesses, general sanitation of input needed
    setInput('')
    setGuess(input);
  }

  return (
    <form className="user-input-container" onSubmit={handleSubmit}>
      <input id="text-input" type="text" onChange={handleChange} value={input}></input>
      <button id="text-submit" onClick={handleSubmit}><span>Submit</span></button>
    </form>
  )
}

export default UserInput;