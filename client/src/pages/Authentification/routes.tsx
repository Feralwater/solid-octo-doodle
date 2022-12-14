import React from 'react';
import { Route } from 'react-router-dom';
import { authRoutes } from 'pages/Authentification/constants';
import { PrivateRoute } from 'routes/PrivateRoute';
import { ROLES } from 'routes/constants';

export const getAuthRoutes = () => authRoutes.map(({ path, element: Element }) => (
  <Route
    key={path}
    path={path}
    element={(
      <PrivateRoute roleName={ROLES.PUBLIC}>
        <Element />
      </PrivateRoute>
    )}
  />
));
