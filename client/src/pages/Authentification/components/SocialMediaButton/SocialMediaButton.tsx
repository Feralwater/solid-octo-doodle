import React, { ReactNode } from 'react';
import { LoginWithSocialMediaButton } from 'pages/Authentification/components/SocialMediaButton/SocialMediaButton.styles';

interface ISocialMediaButton {
  icon: ReactNode;
  children: ReactNode;
  onClick: () => void;
}

export const SocialMediaButton = ({ icon, children, onClick }:ISocialMediaButton) => (
  <LoginWithSocialMediaButton type="button" onClick={onClick}>
    <i>{icon}</i>
    <span>{children}</span>
  </LoginWithSocialMediaButton>
);
