import React from 'react';
import { ButtonProps } from 'components/Button/Button.interface';
import { StyledButton } from './Button.styles';

export const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton {...props} />
);
