import React from 'react';
import { Routes } from 'react-router-dom';
import { getAuthRoutes } from 'pages/Authentification/routes';

export const AppRouter = () => (
  <Routes>
    {getAuthRoutes()}
  </Routes>
);
