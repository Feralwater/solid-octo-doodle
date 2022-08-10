import React from 'react';
import { Layout } from './AuthLayout.styles';

interface IAuthLayout {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }:IAuthLayout) => (
  <Layout>
    {children}
  </Layout>
);
