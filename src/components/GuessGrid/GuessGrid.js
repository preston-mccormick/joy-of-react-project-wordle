import React from 'react';

function GuessGrid({ guesses = [] }) {
  // get a list of 6 guesses, filling in blanks
  const sixGuesses = Array(6);
  for (let i = 0; i < sixGuesses.length; i++) {
    if (guesses.length > i) {
      sixGuesses[i] = guesses[i];
    } else {
      sixGuesses[i] = { id: `empty-${i}`, value: ' '.repeat(5) };
    }
  }
  console.log({sixGuesses});

  return (
    <div className="guess-results">
      {sixGuesses.map((guess, i) => (
        <p key={guess.id} className="guess">
            {Array.from(guess.value).map((char) => (
              <span className="cell">{char}</span>
            ))}
          </p>
      ))}
    </div>
  );
}

export default GuessGrid;
