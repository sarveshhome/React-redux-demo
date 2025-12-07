import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { useState } from 'react'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0);



  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <input type="number" placeholder='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Add Amount</button>
      </div>
    </div>
  )
}