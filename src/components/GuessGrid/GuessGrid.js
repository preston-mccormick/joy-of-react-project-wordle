import React from 'react';
import GuessRow from '../GuessRow';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

/**
 * @param {Object} props
 * @param {string[]} props.guesses - Array of guess strings
 */
function GuessGrid({ guesses = [] }) {
  // get a list of 6 guesses, filling in blanks
  console.log({ guesses });

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <GuessRow key={rowIndex} guess={guesses?.[rowIndex]} />
      ))}
    </div>
  );
}

export default GuessGrid;
