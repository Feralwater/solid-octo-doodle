import React from 'react';
import { Routes } from 'react-router-dom';
import { getAuthRoutes } from 'pages/Authentification/routes';
import { getUserRoutes } from 'pages/User/routes';

export const AppRouter = () => (
  <Routes>
    {getAuthRoutes()}
    {getUserRoutes()}
  </Routes>
);
