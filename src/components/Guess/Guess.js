import React from 'react';

function Guess({ onSubmit }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const value = guess.trim();
    if (!value) return;
    if (onSubmit) {
      // Delegate to parent
      onSubmit(value);
    } else {
      console.info('guess:', value);
    }
    setGuess('');
  }  

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter your guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          const raw = e.target.value;
          const sanitized = raw.toUpperCase().replace(/[^A-Z]/g, '');
          setGuess(sanitized);
        }}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 capital letters (A–Z)"
        autoComplete="off"
      />
    </form>
  );
}

export default Guess;
