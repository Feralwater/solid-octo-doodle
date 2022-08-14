import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GreetingLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const GreetingImage = styled.div`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  padding: 2rem 0 0 0;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  min-width: fit-content;
  justify-content: center;
  font-weight: 600;
  border-radius: 32px;
  cursor: pointer;
  text-transform: capitalize;
  overflow: hidden;
  line-height: 120%;
  font-size: 1.7rem;
  padding: 20px;
  background: ${({ theme }) => theme.gradient.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;
