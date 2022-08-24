import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  
  &:visited {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
