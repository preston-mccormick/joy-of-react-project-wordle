import React from 'react';

function SadBanner({ answer, playAgain }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
}

export default SadBanner;
