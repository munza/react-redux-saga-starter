import { createActions } from 'redux-actions';
import { handleActions } from 'redux-actions';

const intialState = { count: 0 };

const types = {
  INCREASE: 'counter/INCREASE',
  DECREASE: 'counter/DECREASE'
};

const creators = createActions({
  [types.INCREASE]: () => ({}),
  [types.DECREASE]: () => ({})
});

const reducers = handleActions(
  {
    [types.INCREASE]: (state, action) => ({
      ...state,
      count: state.count + 1
    }),

    [types.DECREASE]: (state, action) => ({
      ...state,
      count: state.count > 0 ? state.count - 1 : state.count
    })
  },
  intialState
);

export function handleIncrement() {
  return creators.counter.increase();
}
export function handleDecrement() {
  return creators.counter.decrease();
}

export default reducers;
