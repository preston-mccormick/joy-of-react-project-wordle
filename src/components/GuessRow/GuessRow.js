import React from 'react';
import GuessCell from '../GuessCell';

/**
 * @param {Object} props
 * @param {{letter: string, status: string}[]} props.cells - Precomputed cell props for this row
 */
function GuessRow({ cells }) {
  return (
    <p className="guess">
      {cells.map((cell, index) => (
        <GuessCell key={index} {...cell} />
      ))}
    </p>
  );
}

export default GuessRow;
