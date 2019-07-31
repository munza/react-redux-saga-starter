import React from 'react';
import { Provider } from 'react-redux';

import Counter from '../Counter';
import store from './store';

const App = props => (
  <Provider store={store}>
    <h1>App</h1>
    <Counter />
  </Provider>
);

export default App;
