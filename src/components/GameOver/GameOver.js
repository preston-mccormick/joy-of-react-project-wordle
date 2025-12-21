import React from 'react';

/**
 * GameOver component displaying the end-game banner and reset button
 * @param {Object} props
 * @param {boolean} props.isWinner - Whether the player won
 * @param {string} props.answer - The correct word
 * @param {Function} props.onReset - Callback when reset button is clicked
 */
function GameOver({ isWinner, answer, onReset }) {
  if (!isWinner && !answer) {
    return null; // Game not over yet
  }

  return (
    <div>
      <div className={`banner ${isWinner ? 'happy' : 'sad'}`}>
        <p>
          {isWinner
            ? 'Congratulations! You guessed it!'
            : `Sorry, the answer was ${answer}.`}
        </p>
        <button onClick={onReset}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOver;
