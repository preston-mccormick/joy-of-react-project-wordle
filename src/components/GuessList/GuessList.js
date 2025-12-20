import React from 'react';

function GuessList({ guesses = [] }) {
  var reversed = [...guesses].reverse();
  reversed = reversed.slice(0, 5);


  return (
    <div className="guess-results">
      {reversed.map((g, i) => (
        <p key={i}>{g}</p>
      ))}
    </div>
  );
}

export default GuessList;
