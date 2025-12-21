import React from 'react';

/**
 * @param {Object} props
 * @param {string[]} props.guessLetters - Array of guessed letters
 * @param {string[]} props.answerLetters - Array of answer letters
 * @param {number} props.index - The index of the letter in the word
 */
function GuessCell({ guess, answer, index }) {
  const guessLetters = guess ? Array.from(guess) : null;
  const letter = guessLetters?.[index] ?? '';
  const answerLetters = answer ? Array.from(answer) : null;
  const isMatch = letter && answerLetters?.[index] === letter;
  const isPresent = letter && answerLetters?.includes(letter);

  return <span className="cell">{letter}</span>;
}

export default GuessCell;
