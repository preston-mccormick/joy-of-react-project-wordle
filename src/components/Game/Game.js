import React from 'react';

import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessGrid from '../GuessGrid';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';
import { checkGuess } from '../../game-helpers';

/**
 * Main game component managing game state and logic
 */
function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guessResults, setGuessResults] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));

  console.info(`The answer is: ${answer}`);

  // Derive game state
  const lastGuess = guesses[guesses.length - 1];
  const isWinner = lastGuess === answer;
  const gameOver = isWinner || guesses.length >= NUM_OF_GUESSES_ALLOWED;

  function handleGuess(guess) {
    console.info({ guess });

    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    const result = checkGuess(guess, answer);
    setGuessResults((prev) => [...prev, result]);
  }

  function playAgain() {
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
      <GuessInput onSubmit={handleGuess} disabled={gameOver} />
      {gameOver && isWinner && (
        <HappyBanner turns={guesses.length} playAgain={playAgain} />
      )}
      {gameOver && !isWinner && (
        <SadBanner answer={answer} playAgain={playAgain} />
      )}
    </>
  );
}

export default Game;
