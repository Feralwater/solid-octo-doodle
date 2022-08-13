import React from 'react';
import { Route } from 'react-router-dom';
import { authRoutes } from 'pages/Authentification/constants';
import { PrivateRoute } from 'routes/PrivateRoute';

export const getAuthRoutes = () => authRoutes.map(({ path, element: Element }) => (
  <Route
    key={path}
    path={path}
    element={(
      <PrivateRoute>
        <Element />
      </PrivateRoute>
    )}
  />
));
