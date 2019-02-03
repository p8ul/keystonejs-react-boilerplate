/* eslint import/no-named-as-default: 0 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Todo from '../containers/Todo';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Todo,
    exact: true,
  },
  {
    path: '/list',
    name: 'Home',
    component: Todo,
    exact: true,
  },
];

export const routingComponent = ({ ...props }) => (
  <Switch>
    {routes.map(route => (
      <Route
        exact={route.exact}
        {...props}
        path={route.path}
        component={route.component}
        key={route.path}
      />
    ))}
  </Switch>
);

export default routes;
