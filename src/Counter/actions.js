import { createActions } from 'redux-actions';

const types = {
  COUNT_INCREASE: 'COUNTER/COUNT_INCREASE',
  COUNT_DECREASE: 'COUNTER/COUNT_DECREASE'
};

const actionCreators = createActions({
  [types.COUNT_INCREASE]: () => ({}),
  [types.COUNT_DECREASE]: () => ({})
});

const actions = {
  handleIncrement: actionCreators.counter.countIncrease,
  handleDecrement: actionCreators.counter.countDecrease
};

export default actions;

export { types };
