import React, { forwardRef } from 'react';
import { InputProps } from './Input.interface';
import { InputContainer, StyledInput, StyledLabel } from './Input.styles';

export const Input = forwardRef<HTMLInputElement, InputProps >(
  (
    { label, id, ...restProps },
    ref,
  ) => (
    <InputContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput ref={ref} id={id} {...restProps} />
    </InputContainer>
  ),
);
