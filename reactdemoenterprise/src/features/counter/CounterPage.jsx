import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset, incrementAsync } from './counterSlice';
import { CounterDisplay } from './components/CounterDisplay';
import { CounterControls } from './components/CounterControls';
import { CounterAmountInput } from './components/CounterAmountInput';

export const CounterPage = () => {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Counter Application</h1>
      
      <CounterDisplay count={count} status={status} />
      
      <CounterControls
        onIncrement={() => dispatch(increment())}
        onDecrement={() => dispatch(decrement())}
        onReset={() => dispatch(reset())}
      />
      
      <CounterAmountInput
        onAddAmount={(amount) => dispatch(incrementByAmount(amount))}
        onAddAmountAsync={(amount) => dispatch(incrementAsync(amount))}
      />
    </div>
  );
};
