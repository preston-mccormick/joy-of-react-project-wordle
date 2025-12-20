import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import GuessList from '../GuessList';
import GuessGrid from '../GuessGrid';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(value) {
    const guess = {
      id: crypto.randomUUID(),
      value
    };
    setGuesses((prev) => [...prev, guess]);
  }

  return <>  
    <GuessGrid guesses={guesses} />
    <Guess onSubmit={handleGuess} />
    <GuessList guesses={guesses} />
  </>;
}

export default Game;
