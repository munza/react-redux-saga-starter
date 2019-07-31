import React from 'react';
import { connect } from 'react-redux';

import Counter from './components/Counter';

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
