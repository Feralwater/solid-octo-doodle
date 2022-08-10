import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from 'routes';
import { authRoutes } from 'pages/Authentification/constants';

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
