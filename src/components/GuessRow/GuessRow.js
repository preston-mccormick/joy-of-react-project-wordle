import React from 'react';
import GuessCell from '../GuessCell';
import { WORD_LENGTH } from '../../constants';
import { range } from '../../utils';

/**
 * @param {Object} props
 * @param {string|null} props.guess - The 5-letter guess (can be null or empty)
 * @param {string|null} props.answer - The correct answer (can be null)
 */
function GuessRow({ guess, answer }) {
  const guessLetters = guess ? Array.from(guess) : null;
  const answerLetters = answer ? Array.from(answer) : null;

  return (
    <p className="guess">
      {range(WORD_LENGTH).map((letterIndex) => (
        <GuessCell
          key={letterIndex}
          guess={guess}
          answer={answer}
          index={letterIndex}
        />
      ))}
    </p>
  );
}

export default GuessRow;
