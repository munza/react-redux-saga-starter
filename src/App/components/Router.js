import React from 'react';
import { Router as ReactRouter, Switch, Route } from 'react-router-dom';

const Router = ({ history, routes, children }) => (
  <ReactRouter history={history}>
    {children}
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Route path="*" render={() => <h1>404! Not Found</h1>} />
    </Switch>
  </ReactRouter>
);

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

export default Router;
