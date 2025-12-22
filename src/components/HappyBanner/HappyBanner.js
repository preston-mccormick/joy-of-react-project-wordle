import React from 'react';

function HappyBanner({ turns, playAgain }) {
  const guesses = turns === 1 ? 'guess' : 'guesses';
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    buttonRef.current?.focus();

    function handleWindowFocus() {
      buttonRef.current?.focus();
    }

    window.addEventListener('focus', handleWindowFocus);
    return () => {
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, []);

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> You got it in <strong>{turns}</strong>{' '}
        {guesses}.
      </p>
      <button ref={buttonRef} onClick={playAgain} className="play-again-button">
        <span className="key correct">P</span>
        <span className="key correct">L</span>
        <span className="key correct">A</span>
        <span className="key correct">Y</span>
        <span className="key-spacer"></span>
        <span className="key correct">A</span>
        <span className="key correct">G</span>
        <span className="key correct">A</span>
        <span className="key correct">I</span>
        <span className="key correct">N</span>
      </button>
    </div>
  );
}

export default HappyBanner;
