import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(value) {
    const guess = {
      id: crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      value,
    };
    setGuesses((prev) => [...prev, guess]);
  }

  return <>
    <Guess onSubmit={handleGuess} />
    <GuessList guesses={guesses} />
  </>;
}

export default Game;
