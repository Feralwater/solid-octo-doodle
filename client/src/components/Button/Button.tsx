import React from 'react';
import { ButtonProps } from './Button.interface';
import { StyledButton } from './Button.styles';

export const Button = (props:ButtonProps) => (
  <StyledButton {...props} />
);
