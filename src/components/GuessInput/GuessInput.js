import React from 'react';

const WORD_LENGTH = 5;

/**
 * @param {Object} props
 * @param {Function} props.onSubmit - Callback when user submits a guess
 * @param {boolean=} props.disabled - Whether input is disabled
 */
function GuessInput({ onSubmit, disabled = false }) {
  const [guess, setGuess] = React.useState('');
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  function handleSubmit(event) {
    event.preventDefault();
    if (disabled) return;
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
        ref={inputRef}
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
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
