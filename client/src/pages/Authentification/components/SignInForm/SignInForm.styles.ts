import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ForgotLink = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const ErrorBubble = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.pink};
  font-size: 1.2rem;
  bottom: -2rem;
`;
