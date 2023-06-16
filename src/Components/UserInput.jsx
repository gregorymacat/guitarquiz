import React, {useState} from 'react';

function UserInput({setGuess}) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    const currentInput = event.target.value;
    
    setInput(currentInput);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //Need to remove whitespace from guesses, general sanitation of input needed
    setGuess(input);
  }

  return (
    <form className="user-input-container" onSubmit={handleSubmit}>
      <input id="text-input" type="text" onChange={handleChange}></input>
      <input id="text-submit" type="submit" onSubmit={handleSubmit}></input>
    </form>
  )
}

export default UserInput;