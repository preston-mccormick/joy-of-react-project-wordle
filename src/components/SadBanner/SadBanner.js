import React from 'react';

function SadBanner({ answer, playAgain }) {
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
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button ref={buttonRef} onClick={playAgain} className="play-again-button">
        <span className="key incorrect">P</span>
        <span className="key incorrect">L</span>
        <span className="key incorrect">A</span>
        <span className="key incorrect">Y</span>
        <span className="key-spacer"></span>
        <span className="key incorrect">A</span>
        <span className="key incorrect">G</span>
        <span className="key incorrect">A</span>
        <span className="key incorrect">I</span>
        <span className="key incorrect">N</span>
      </button>
    </div>
  );
}

export default SadBanner;
