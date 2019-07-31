import { all, takeLatest } from 'redux-saga/effects';

import { fetchRepos } from './queries';

function* saga() {
  yield all([takeLatest('REPOS/FETCH_REQUEST', fetchRepos)]);
}

export default saga;
