import React from 'react';

export const CounterDisplay = ({ count, status }) => {
  return (
    <div style={{ fontSize: '48px', margin: '20px 0', fontWeight: 'bold' }}>
      {count}
      {status === 'loading' && <span style={{ fontSize: '16px', marginLeft: '10px' }}>⏳</span>}
    </div>
  );
};
