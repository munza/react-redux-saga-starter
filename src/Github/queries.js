import { put } from 'redux-saga/effects';

const BASE_URL = 'https://api.github.com';

function* fetchRepos() {
  const repos = yield fetch(
    BASE_URL + '/search/repositories?q=topic:react'
  ).then(response => response.json());

  yield put({ type: 'REPOS/FETCH_SUCCESS', payload: { repos: repos.items } });
}

export { fetchRepos };
