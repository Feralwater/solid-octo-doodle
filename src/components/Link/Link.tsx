import React, { ReactNode } from 'react';
import { StyledLink } from 'components/Link/Link.styles';

interface ILink {
  to: string;
  children: ReactNode;
}

const Link = ({ to, ...props }:ILink) => (
  <StyledLink href={to} {...props} />
);

export default Link;
