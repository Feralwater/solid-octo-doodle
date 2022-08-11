import styled, { css } from 'styled-components';
import { StyledInputProps } from './Input.interface';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledLabel = styled.label`
  ${({ theme }) => theme.colors.thunder}
  font-weight: 500;
  font-size: 1.5rem;
`;

export const StyledInput = styled.input<StyledInputProps>`
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  width: 100%;
  font-size: ${({ inputSize }) => (inputSize === 'large' ? '1.7rem' : '1.5rem')};
  line-height: ${({ inputSize }) => (inputSize === 'large' ? '140%' : '90%')};
  font-weight: 500;
  border: none;
  padding: 15px 10px;
  color:  ${({ theme }) => theme.colors.thunder};
  box-shadow: ${({ theme }) => theme.shadow.inputShadow};
  
  ${({ disabled }) => disabled && css`
    background-color: ${({ theme }) => theme.colors.grey};
  `}
  &:focus {
    border: ${({ theme }) => theme.border.focus};
  }
`;
