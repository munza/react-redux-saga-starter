import { combineReducers } from 'redux';

import { default as counter } from '../Counter/reducers';
import { default as github } from '../Github/reducers';

const reducers = combineReducers({
  counter,
  github
});

export default reducers;
