import React, {useEffect, useState} from 'react';

const formatValidationObject = (bool, msg) => ({ isValid: bool, error: msg });

function inputValidation(input) {
  const numbersRegex = /\d/;
  const specialCharRegex = /[^a-zA-Z0-9#]+/;

  if (input.length > 2 || input.length < 1) {
    return formatValidationObject(false, 'Please enter 1 or 2 characters only');
  } else if (numbersRegex.test(input)) {
    return formatValidationObject(false, 'No numbers');
  } else if (specialCharRegex.test(input)) {
    return formatValidationObject(false, 'No special characters besides \"#\" for sharps');
  } else if (input === input.toLowerCase()) {
    return formatValidationObject(false, 'Only accidentals are lowercase');
  } else if (input === 'B#' || input === 'Cb') {
    return formatValidationObject(false, 'B and C do not have accidentals between them');
  } else if (input === 'E#' || input === 'Fb') {
    return formatValidationObject(false, 'E and F do not have accidentals between them');
  } else if (input.length === 2) {
    if (input === input.toUpperCase() && input[1] !== '#') {
      return formatValidationObject(false, 'Only natural notes are uppercase');
    } else if ((input.charCodeAt(1) > 96 && input.charCodeAt(1) < 123) && input[1] !== 'b') {
      return formatValidationObject(false, 'Flats are represented by lowercase \"b\"');
    } else if (input[0] === input[0].toLowerCase()) {
      return formatValidationObject(false, 'Accidentals (b/#) go second');
    }
  }
  return {isValid: true, error: ''};
}

function UserInput({needNewNote, setGuess}) {
  const [input, setInput] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (needNewNote) {
      setIsInvalid(false);
      setErrorMessage('');
    }
  }, [needNewNote]);

  const handleChange = (event) => {
    const currentInput = event.target.value;
    
    setInput(currentInput);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedInput = input.trim();

    const {isValid, error} = inputValidation(formattedInput);
    if (!isValid) {
      setIsInvalid(true);
      setErrorMessage(error);
    } else {
      setIsInvalid(false);
      setErrorMessage(error);
    }
    setInput('')
    setGuess(formattedInput);
  }

  return (
    <form className="user-input-container" onSubmit={handleSubmit}>
      <input id="text-input" type="text" onChange={handleChange} value={input}></input>
      { isInvalid ? <span id="invalid-input-warning">{errorMessage}</span> : null }
      { isInvalid ? <span id="invalid-input-warning">Please refer to the top right information button for more details</span> : null }
      <button id="text-submit" onClick={handleSubmit}><span>Submit</span></button>
    </form>
  )
}

export default UserInput;
