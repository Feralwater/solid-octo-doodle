import styled from 'styled-components';

export const SignIn = styled.div`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.ghost};
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const SignInContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const SignInForm = styled.div`
  flex: 0 0 auto;
`;

export const BackgroundBubble = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.2;
  width: 100%;
  height: 200px;
  box-sizing: border-box;
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
