import React from 'react';

const WORD_LENGTH = 5;

/**
 * @param {Object} props
 * @param {Function} props.onSubmit - Callback when user submits a guess
 */
function GuessInput({ onSubmit }) {
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
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          const raw = e.target.value;
          const sanitized = raw.toUpperCase().replace(/[^A-Z]/g, '');
          setGuess(sanitized);
        }}
        maxLength={WORD_LENGTH}
        pattern={`[A-Z]{${WORD_LENGTH}}`}
        title={`${WORD_LENGTH} capital letters (A–Z)`}
        autoComplete="off"
      />
    </form>
  );
}

export default GuessInput;
