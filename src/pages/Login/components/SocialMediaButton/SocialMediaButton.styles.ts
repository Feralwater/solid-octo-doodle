import styled from 'styled-components';

export const LoginWithSocialMediaButton = styled.button`
  display: flex;
  width: 100%;
  min-width: fit-content;
  gap: 1rem;
  align-items: center;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  text-transform: capitalize;
  overflow: hidden;
  line-height: 120%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.buttonShadow};
  margin-bottom: 1rem;
  border: ${({ theme }) => theme.border.button};
  
  & span {
    width: calc(100% - 100px);
    align-items: center;
  }
`;
