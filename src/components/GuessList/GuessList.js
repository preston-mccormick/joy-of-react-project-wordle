import React from 'react';

/**
 * @param {Object} props
 * @param {Array} props.guesses - Array of guess strings
 */
function GuessList({ guesses = [] }) {
  return (
    <div className="guess-list">
      {guesses.map((guess, index) => (
        <p key={index}>{guess}</p>
      ))}
    </div>
  );
}

export default GuessList;
