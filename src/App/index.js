import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Counter from '../Counter';
import Github from '../Github';

const App = props => (
  <Provider store={store}>
    <h1>App</h1>
    <Counter />
    <Github />
  </Provider>
);

export default App;
