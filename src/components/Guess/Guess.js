import React from 'react';

function Guess() {
  return <div className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter your guess:</label>
    <input id="guess-input" type="text" maxLength="5" />
  </div>;
}

export default Guess;
