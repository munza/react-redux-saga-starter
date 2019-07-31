import { handleActions } from 'redux-actions';

import { types } from './actions';

const intialState = { count: 0 };

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

export default reducers;
