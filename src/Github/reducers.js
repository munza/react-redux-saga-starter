const reducers = (state = { repos: [], loading: false }, action) => {
  switch (action.type) {
    case 'REPOS/FETCH_REQUEST':
      return {
        ...state,
        repos: [],
        loading: true
      };

    case 'REPOS/FETCH_SUCCESS':
      return {
        ...state,
        repos: action.payload.repos,
        loading: false
      };

    case 'REPOS/FETCH_FAIL':
      return {
        ...state,
        repos: [],
        loading: false
      };

    default:
      return state;
  }
};

export default reducers;
