import React from 'react';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

/**
 * Displays a visual keyboard showing the status of each letter.
 * Letters are color-coded based on whether they've been guessed and their correctness.
 *
 * @param {Object} props
 * @param {Object} props.letterStatus - Map of letters to their status ('correct', 'misplaced', 'incorrect')
 *                                      Letters not in the map are treated as 'unused'
 */
function LetterStatus({ letterStatus, disabled }) {
  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter) => {
            const status = letterStatus[letter] || 'unused';
            return (
              <div key={letter} className={`key ${status}`}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default LetterStatus;
