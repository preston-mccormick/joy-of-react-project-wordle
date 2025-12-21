import React from 'react';

function SadBanner({ answer, playAgain }) {
  return (
    <div>
      <h1>Sorry, you lost!</h1>
      <p>The correct answer was: {answer}</p>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
}

export default SadBanner;
