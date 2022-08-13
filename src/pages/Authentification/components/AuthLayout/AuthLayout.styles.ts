import styled from 'styled-components';

export const Layout = styled.div`
  padding: 1rem 2rem 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.ghost};
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;
`;
