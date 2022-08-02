import React from 'react'
import useCounter from './useCounter'

export const Counter = () => {
    const {value, increment, decrement, reset} = useCounter(3)
    return (
    <div>
        {value}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
