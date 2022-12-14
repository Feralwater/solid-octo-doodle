import React, { ReactNode } from 'react';
import { StyledLink } from './Link.styles';

interface ILink {
  to: string;
  children: ReactNode;
}

export const Link = ({ to, ...props }:ILink) => (
  <StyledLink to={to} {...props} />
);
