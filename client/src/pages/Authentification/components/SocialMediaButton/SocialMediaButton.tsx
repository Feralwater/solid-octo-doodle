import React, { ReactNode } from 'react';
import { LoginWithSocialMediaButton } from 'pages/Authentification/components/SocialMediaButton/SocialMediaButton.styles';

interface ISocialMediaButton {
  icon: ReactNode;
  text: string;
}

export const SocialMediaButton = ({ icon, text }:ISocialMediaButton) => (
  <LoginWithSocialMediaButton type="button">
    <i>{icon}</i>
    <span>{text}</span>
  </LoginWithSocialMediaButton>
);
