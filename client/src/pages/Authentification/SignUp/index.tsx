import React from 'react';
import { Headline3 } from 'topography';
import { Link, Paragraph } from 'components';
import { ReactComponent as Google } from 'assets/svg/google.svg';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import {
  Header,
  LeftBackgroundBubble,
  RightBackgroundBubble,
  SignUpContent,
  SignUpFormContainer,
  SocialMediaButtonGroup,
} from 'pages/Authentification/SignUp/styles';
import { PATH } from 'routes/constants';
import { SocialMediaButton, Layout } from 'pages/Authentification/components';
import SignUpForm from '../components/SignUpForm/SignUpForm';

const SignUp = () => (
  <Layout>
    <LeftBackgroundBubble />
    <RightBackgroundBubble />
    <SignUpContent>
      <Header>
        <Headline3>Create your free account</Headline3>
        <Paragraph>Do you already have an account?</Paragraph>
        <Link to={PATH.SIGN_IN}>Sign In</Link>
      </Header>
      <SocialMediaButtonGroup>
        <SocialMediaButton icon={<Google />} text="Continue with Google" />
        <SocialMediaButton icon={<Facebook />} text="Continue with Facebook" />
      </SocialMediaButtonGroup>
    </SignUpContent>
    <SignUpFormContainer>
      <SignUpForm />
    </SignUpFormContainer>
  </Layout>
);

export default SignUp;
