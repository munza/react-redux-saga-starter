const reducers = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'COUNTER/COUNT_INCREASE':
      return {
        ...state,
        count: state.count + 1
      };

    case 'COUNTER/COUNT_DECREASE':
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count
      };

    default:
      return state;
  }
};

export default reducers;
