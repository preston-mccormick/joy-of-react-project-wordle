import React from 'react';
import GuessRow from '../GuessRow';

/**
 * @param {Object} props
 * @param {Array<{letter: string, status: string}>[]} props.rows - Fully computed per-row cell data
 */
function GuessGrid({ rows }) {
  return (
    <div className="guess-results">
      {rows.map((cells, index) => (
        <GuessRow key={index} cells={cells} />
      ))}
    </div>
  );
}

export default GuessGrid;
