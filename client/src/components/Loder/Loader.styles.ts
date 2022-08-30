import styled, { keyframes } from 'styled-components';

export const MeshLoader = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary03};
`;

export const CirclesSetOne = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const CirclesSetTwo = styled(CirclesSetOne)`
  transform: rotate(90deg);
`;

const mesh = keyframes`
  0% {
    transform-origin: 50% -100%;
    transform: rotate(0);
  }
  50% {
    transform-origin: 50% -100%;
    transform: rotate(360deg);
  }
  50.1% {
    transform-origin: 50% 200%;
    transform: rotate(0deg);
  }
  100% {
    transform-origin: 50% 200%;
    transform: rotate(360deg);
  }
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  margin: -15px;
  animation: ${mesh} 3s ease-in-out infinite -1.5s;

  &:last-child {
    animation-delay: 0s;
  }
`;
