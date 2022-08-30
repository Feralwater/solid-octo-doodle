import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from 'routes/PrivateRoute';
import { userRoutes } from 'pages/User/constants';
import { ROLES } from 'routes/constants';

export const getUserRoutes = () => userRoutes.map(({ path, element: Element }) => (
  <Route
    key={path}
    path={path}
    element={(
      <PrivateRoute roleName={ROLES.USER}>
        <Element />
      </PrivateRoute>
    )}
  />
));
