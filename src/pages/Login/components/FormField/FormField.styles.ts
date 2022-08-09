import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
`;

export const ErrorBubble = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.pink};
  font-size: 1.2rem;
  bottom: -17px;
`;
