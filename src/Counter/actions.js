import { createActions } from 'redux-actions';

const types = {
  INCREASE: 'counter/INCREASE',
  DECREASE: 'counter/DECREASE'
};

const creators = createActions({
  [types.INCREASE]: () => ({}),
  [types.DECREASE]: () => ({})
});

const actions = {
  handleIncrement: creators.counter.increase,
  handleDecrement: creators.counter.decrease
};

export default actions;

export { types };
