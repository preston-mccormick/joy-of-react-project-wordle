import React from 'react';

function HappyBanner({ turns, playAgain }) {
  const guesses = turns === 1 ? 'guess' : 'guesses';
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> You got it in <strong>{turns}</strong>{' '}
        {guesses}.
      </p>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
}

export default HappyBanner;
