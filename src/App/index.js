import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Link } from 'react-router-dom';

import store, { history } from './store';

import Counter from '../Counter';
import Github from '../Github';

const App = props => (
  <Provider store={store}>
    <h1>App</h1>
    <Router history={history}>
      <ul>
        <li>
          <Link to="/">Counter</Link>
        </li>
        <li>
          <Link to="/github/repos">Github</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Counter} />
        <Route path="/github/repos" exact component={Github} />
        <Route path="*" render={() => <h1>404! Not Found</h1>} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
