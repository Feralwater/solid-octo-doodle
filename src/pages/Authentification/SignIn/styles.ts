import styled from 'styled-components';

export const SignInContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SignInFormContainer = styled.div`
  flex: 0 0 auto;
`;

export const BackgroundBubble = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.2;
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  z-index: 0;
`;

export const LeftBackgroundBubble = styled(BackgroundBubble)`
  top: -25px;
  left: -50px;
  border-radius: 0 0 100% 0;
`;

export const RightBackgroundBubble = styled(BackgroundBubble)`
  top: -60px;
  right: -25%;
  border-radius: 0 0 0 100%;
`;

export const Header = styled.header`
  z-index: 1;
`;
