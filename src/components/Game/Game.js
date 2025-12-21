import React from 'react';

import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessGrid from '../GuessGrid';
import GameOver from '../GameOver';
import { checkGuess } from '../../game-helpers';

/**
 * Main game component managing game state and logic
 */
function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guessResults, setGuessResults] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));

  console.info({ answer });

  // Derive game state
  const lastGuess = guesses[guesses.length - 1];
  const isWinner = lastGuess === answer;
  const isGameOver = isWinner || guesses.length >= NUM_OF_GUESSES_ALLOWED;

  function handleGuess(guess) {
    console.info({ guess });

    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    const result = checkGuess(guess, answer);
    setGuessResults((prev) => [...prev, result]);
  }

  function handleReset() {
    setGuesses([]);
    setGuessResults([]);
    setAnswer(sample(WORDS));
  }

  // Grid State
  const EMPTY_CELL = { letter: '', status: 'empty' };
  const EMPTY_ROW = Array(WORD_LENGTH).fill(EMPTY_CELL);
  const rows = Array.from(
    { length: NUM_OF_GUESSES_ALLOWED },
    (_, i) => guessResults[i] ?? EMPTY_ROW
  );

  return (
    <>
      <GuessGrid rows={rows} />
      {!isGameOver ? (
        <GuessInput onSubmit={handleGuess} />
      ) : (
        <GameOver isWinner={isWinner} answer={answer} onReset={handleReset} />
      )}
    </>
  );
}

export default Game;
