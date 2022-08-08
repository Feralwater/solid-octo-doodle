import styled, { css } from 'styled-components';
import { StyledInputProps } from 'components/Input/Input';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledLabel = styled.label`
  color: violet;
  font-weight: 500;
  font-size: 1.5rem;
`;

export const StyledInput = styled.input<StyledInputProps>`
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  width: 100%;
  font-size: ${({ inputSize }) => (inputSize === 'large' ? '1.7rem' : '1.5rem')};
  line-height: ${({ inputSize }) => (inputSize === 'large' ? '140%' : '90%')};
  font-weight: 500;
  border: 1px solid red;
  padding: 15px 10px;
  color: blue;
  
  ${(props) => props.disabled && css`
    background-color: gray;
  `}
  &:focus {
    border: 1px solid green;
  }

  &::placeholder {
    color: goldenrod;
  }
`;
