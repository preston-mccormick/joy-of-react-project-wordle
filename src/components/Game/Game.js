import React from 'react';

import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import GuessGrid from '../GuessGrid';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

/**
 * Main game component managing game state and logic
 */
function Game() {
  // Initialize guesses to empty
  const [guesses, setGuesses] = React.useState([]);

  // Derive game state
  const lastGuess = guesses[guesses.length - 1];
  const isWinner = lastGuess === answer;
  const isGameOver = isWinner || guesses.length >= NUM_OF_GUESSES_ALLOWED;

  function handleGuess(guess) {
    const next = [...guesses, guess];
    setGuesses(next);
  }

  return (
    <>
      <GuessGrid guesses={guesses} />
      {isWinner && (
        <div className="banner happy">Congratulations! You guessed it!</div>
      )}

      {isGameOver && !isWinner && (
        <div className="banner sad">Sorry, the answer was {answer}.</div>
      )}

      {!isGameOver && <GuessInput onSubmit={handleGuess} />}
      <GuessList guesses={guesses} />
    </>
  );
}

export default Game;
