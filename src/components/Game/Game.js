import React from 'react';

import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessGrid from '../GuessGrid';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';
import LetterStatus from '../LetterStatus';
import { checkGuess } from '../../game-helpers';

/**
 * Main game component managing game state and logic
 */
function Game() {
  // State
  const [guesses, setGuesses] = React.useState([]);
  const [guessResults, setGuessResults] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [letterStatus, setLetterStatus] = React.useState({});

  console.info(`The answer is: ${answer}`);

  // Derive game state
  const lastGuess = guesses[guesses.length - 1];
  const isWinner = lastGuess === answer;
  const gameOver = isWinner || guesses.length >= NUM_OF_GUESSES_ALLOWED;

  function guess(guess) {
    console.info({ guess });

    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    const result = checkGuess(guess, answer);
    setGuessResults((prev) => [...prev, result]);

    const nextLetterStatus = updateLetterStatus(letterStatus, result);
    setLetterStatus(nextLetterStatus);
  }

  function updateLetterStatus(letterStatus, result) {
    const statusPriority = { correct: 3, misplaced: 2, incorrect: 1 };
    const nextLetterStatus = { ...letterStatus };

    result.forEach(({ letter, status }) => {
      const currentStatus = nextLetterStatus[letter];
      const currentPriority = statusPriority[currentStatus] || 0;
      const newPriority = statusPriority[status];

      // Only update if new status has higher priority
      if (newPriority > currentPriority) {
        nextLetterStatus[letter] = status;
      }
    });

    return nextLetterStatus;
  }

  function playAgain() {
    setGuesses([]);
    setGuessResults([]);
    setAnswer(sample(WORDS));
    setLetterStatus({});
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
      <LetterStatus letterStatus={letterStatus} disabled={gameOver} />
      <GuessInput onSubmit={guess} disabled={gameOver} />
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
