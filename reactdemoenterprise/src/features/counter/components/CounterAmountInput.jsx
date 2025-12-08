import React, { useState } from 'react';

export const CounterAmountInput = ({ onAddAmount, onAddAmountAsync }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        style={{ padding: '5px', width: '100px' }}
      />
      <button onClick={() => onAddAmount(amount)}>Add Amount</button>
      <button onClick={() => onAddAmountAsync(amount)}>Add Async</button>
    </div>
  );
};
