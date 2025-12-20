import React from 'react';

function GuessList({ guesses = [] }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p key={guess.id}>{guess.value}</p>
      ))}
    </div>
  );
}

export default GuessList;
