import React from 'react';

const Counter = props => (
  <div>
    <h2>Counter</h2>
    <p>{props.count}</p>
    <button onClick={() => props.handleDecrement()}>-</button>
    <button onClick={() => props.handleIncrement()}>+</button>
  </div>
);

export default Counter;
