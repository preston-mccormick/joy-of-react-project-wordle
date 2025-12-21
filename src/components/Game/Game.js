import React from 'react';

import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessGrid from '../GuessGrid';
import GameOver from '../GameOver';

/**
 * Main game component managing game state and logic
 */
function Game() {
  // Initialize guesses to empty
  const [guesses, setGuesses] = React.useState([]);
  // Pick a random word - use state so it updates on reset
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });

  // Derive game state
  const lastGuess = guesses[guesses.length - 1];
  const isWinner = lastGuess === answer;
  const isGameOver = isWinner || guesses.length >= NUM_OF_GUESSES_ALLOWED;

  function handleGuess(guess) {
    const next = [...guesses, guess];
    setGuesses(next);
  }

  function handleReset() {
    setGuesses([]);
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessGrid guesses={guesses} />

      {isGameOver ? (
        <GameOver isWinner={isWinner} answer={answer} onReset={handleReset} />
      ) : (
        <GuessInput onSubmit={handleGuess} />
      )}
    </>
  );
}

export default Game;
