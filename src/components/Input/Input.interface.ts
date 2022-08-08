import { InputHTMLAttributes } from 'react';

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
