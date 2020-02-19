import React from 'react';
import { Provider } from 'react-redux';

import store, { history } from './store';

import Router from './components/Router';
import NavBar from './components/NavBar';

import routes, { routePath } from './routes';

const navLinks = [
  { text: 'Counter', href: routePath('counter') },
  { text: 'Github Repos', href: routePath('github.repos') }
];

const App = props => (
  <Provider store={store}>
    <h1>App</h1>
    <Router history={history} routes={routes}>
      <NavBar links={navLinks} />
    </Router>
  </Provider>
);

export default App;
