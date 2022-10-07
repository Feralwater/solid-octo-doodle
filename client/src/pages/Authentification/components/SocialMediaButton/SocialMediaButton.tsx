import React, { ReactNode } from 'react';
import { LoginWithSocialMediaButton } from 'pages/Authentification/components/SocialMediaButton/SocialMediaButton.styles';

interface ISocialMediaButton {
  icon: ReactNode;
  text: string;
  onClick: () => void;
}

export const SocialMediaButton = ({ icon, text, onClick }:ISocialMediaButton) => (
  <LoginWithSocialMediaButton type="button" onClick={onClick}>
    <i>{icon}</i>
    <span>{text}</span>
  </LoginWithSocialMediaButton>
);
