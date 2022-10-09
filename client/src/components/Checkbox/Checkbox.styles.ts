import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  gap: 10px;
  ${({ theme }) => theme.colors.thunder}
  font-weight: 500;
  font-size: 1.5rem;
  align-items: center;
  cursor: pointer;
`;

export const StyledCheckbox = styled.input`
  display: none;
`;

export const CheckmarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow.inputShadow};
  height: 14px;
  width: 14px;
  border-radius: 4px;
  border: ${({ theme }) => theme.border.primary};
  padding: 2px;
`;

interface ICheckmark {
  checked?: boolean;
}

export const Checkmark = styled.div<ICheckmark>`
  height: 12px;
  width: 12px;
  border-radius: 2px;
  filter: blur(1px);
  background-color: ${({ checked, theme }) => (checked ? theme.colors.primary : theme.colors.transparent)};
`;
