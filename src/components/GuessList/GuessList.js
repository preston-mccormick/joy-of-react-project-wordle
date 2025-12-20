import React from 'react';

function GuessList({ guesses = [] }) {
  return (
    <div className="guess-list">
      {guesses.map((g) => (
        <p key={g.id}>{g.value}</p>
      ))}
    </div>
  );
}

export default GuessList;
