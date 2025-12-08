import React from 'react';

export const CounterControls = ({ onIncrement, onDecrement, onReset }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
