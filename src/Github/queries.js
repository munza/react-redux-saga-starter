import { put } from 'redux-saga/effects';

import actions from './actions';

const BASE_URL = 'https://api.github.com';

function* fetchRepos() {
  const repos = yield fetch(
    BASE_URL + '/search/repositories?q=topic:react'
  ).then(response => response.json());

  yield put(actions.receivedRepos(repos.items));
}

export { fetchRepos };
