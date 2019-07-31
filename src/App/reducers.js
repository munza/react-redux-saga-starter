const reducers = (state, action) => {
  switch (action.type) {
    case 'COUNTER/COUNT_INCREASE':
      return {
        ...state,
        counter: {
          ...state.counter,
          count: state.counter.count + 1
        }
      };

    case 'COUNTER/COUNT_DECREASE':
      return {
        ...state,
        counter: {
          ...state.counter,
          count:
            state.counter.count > 0
              ? state.counter.count - 1
              : state.counter.count
        }
      };

    default:
      return state;
  }
};

export default reducers;
