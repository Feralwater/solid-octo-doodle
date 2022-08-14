import React from 'react';
import { StyledLayout } from 'components/Layout/Layout.styles';

interface IAuthLayout {
  children: React.ReactNode;
}

export const Layout = ({ children }:IAuthLayout) => (
  <StyledLayout>
    {children}
  </StyledLayout>
);
