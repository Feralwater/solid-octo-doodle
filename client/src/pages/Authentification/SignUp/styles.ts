import styled from 'styled-components';

export const SignUpFormContainer = styled.div`
  flex: 0 0 auto;
`;

export const SignUpContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BackgroundBubble = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  width: 100%;
  height: 425px;
  opacity: 0.2;
  z-index: 0;
`;

export const LeftBackgroundBubble = styled(BackgroundBubble)`
  border-radius: 65% 110% 0 170%;
  left: 0;
  bottom: 110px;
  transform: rotate(170deg);
`;

export const RightBackgroundBubble = styled(BackgroundBubble)`
  border-radius: 80% 0 35% 0;
  left: 0;
  top: 110px;
  transform: rotate(190deg);
`;

export const Header = styled.header`
  z-index: 1;
  margin-bottom: 2rem;
`;

export const SocialMediaButtonGroup = styled.div`
  z-index: 1;
`;
