import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  
  &:visited {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
