import React from 'react';

function HappyBanner({ turns, playAgain }) {
  return (
    <div>
      <h1>Congratulations!</h1>
      <p>You won in {turns} turns!</p>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
}

export default HappyBanner;
