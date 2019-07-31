import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const initialStore = {
  counter: {
    count: 0
  }
};

const store = createStore(
  reducers,
  initialStore,
  composeWithDevTools(applyMiddleware())
);

export default store;
