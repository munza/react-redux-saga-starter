import { all } from 'redux-saga/effects';

import { default as repos } from '../Github/sagas';

function* rootSaga() {
  yield all([repos()]);
}

export default rootSaga;
