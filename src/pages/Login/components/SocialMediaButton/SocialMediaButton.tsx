import React, { ReactNode } from 'react';
import { LoginWithSocialMediaButton } from './SocialMediaButton.styles';

interface ISocialMediaButton {
  icon: ReactNode;
  text: string;
}

const SocialMediaButton = ({ icon, text }:ISocialMediaButton) => (
  <LoginWithSocialMediaButton type="button">
    <i>{icon}</i>
    <span>{text}</span>
  </LoginWithSocialMediaButton>
);

export default SocialMediaButton;
