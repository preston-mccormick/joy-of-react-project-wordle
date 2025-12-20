import React from 'react';

function GuessList({ guesses = [] }) {
  return (
    <div className="guess-results">
      {[...guesses].reverse().map((g, i) => (
        <p key={i}>{g}</p>
      ))}
    </div>
  );
}

export default GuessList;
