import React from 'react';
import { InputProps } from './Input.interface';
import { InputContainer, StyledInput, StyledLabel } from './Input.styles';

export const Input = ({ label, id, ...restProps } :InputProps) => (
  <InputContainer>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput id={id} {...restProps} />
  </InputContainer>
);
