import React, { InputHTMLAttributes } from 'react';
import {
  InputContainer,
  StyledInput,
  StyledLabel,
} from 'components/Input/Input.styles';

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface StyledInputProps {
  inputSize: 'small' | 'large'
  disabled?: boolean
}

export type InputProps = DefaultInputProps & StyledInputProps & {
  inputSize: 'small' | 'large'
  label: string
  onEnter?: () => void
  id: string
};

export const Input = ({ label, id, ...restProps } :InputProps) => (
  <InputContainer>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput id={id} {...restProps} />
  </InputContainer>
);
