import React from 'react';
import { connect } from 'react-redux';

const Counter = props => (
  <div>
    <h2>Counter</h2>
    <p>{props.count}</p>
    <button onClick={() => props.handleDecrement()}>-</button>
    <button onClick={() => props.handleIncrement()}>+</button>
  </div>
);

const mapStateToProps = store => ({
  count: store.counter.count
});

const mapDispatchToProps = dispatch => ({
  handleIncrement: () => dispatch({ type: 'COUNTER/COUNT_INCREASE' }),
  handleDecrement: () => dispatch({ type: 'COUNTER/COUNT_DECREASE' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
