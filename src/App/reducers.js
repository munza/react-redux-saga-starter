import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { default as counter } from '../Counter/ducks';
import { default as github } from '../Github/reducers';

const createRootReducers = history =>
  combineReducers({
    counter,
    github,
    router: connectRouter(history)
  });

export default createRootReducers;
