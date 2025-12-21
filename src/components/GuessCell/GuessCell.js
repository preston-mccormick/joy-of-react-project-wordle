import React from 'react';

/**
 * Single cell in the guess grid.
 * @param {Object} props
 * @param {string} props.letter - The letter to display
 * @param {('correct'|'incorrect'|'misplaced'|'empty'|'absent')=} props.status - The evaluation status
 */
function GuessCell({ letter, status }) {
  const statusClass = status ? ` ${status}` : '';
  return <span className={`cell${statusClass}`}>{letter}</span>;
}

export default GuessCell;
