import styled from 'styled-components';

export const BackgroundBubble = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.2;
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  z-index: 0;
`;

export const LeftBackgroundBubble = styled(BackgroundBubble)`
  top: -22%;
  left: -25%;
  border-radius: 0 65% 75% 60%;
`;

export const RightBackgroundBubble = styled(BackgroundBubble)`
  bottom: -20%;
  right: -30%;
  border-radius: 100%;
`;

export const Header = styled.header`
  margin-bottom: 3rem;
`;
