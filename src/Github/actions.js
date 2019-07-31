import { createActions } from 'redux-actions';

const types = {
  REPOS_FETCH: 'REPOS/FETCH_REQUEST',
  REPOS_RECEIVED: 'REPOS/FETCH_SUCCESS',
  REPOS_FETCH_FAIL: 'REPOS/FETCH_FAIL'
};

const actionCreators = createActions({
  [types.REPOS_FETCH]: () => ({}),
  [types.REPOS_RECEIVED]: repos => ({ repos }),
  [types.REPOS_FETCH_FAIL]: error => ({ error })
});

const actions = {
  fetchRepos: actionCreators.repos.fetchRequest,
  receivedRepos: actionCreators.repos.fetchSuccess
};

export default actions;

export { types };
