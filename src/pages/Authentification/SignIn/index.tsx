import React from 'react';
import { ReactComponent as Google } from 'assets/svg/google.svg';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import {
  Header,
  LeftBackgroundBubble,
  RightBackgroundBubble,
  SignInContent,
  SignInFormContainer,
} from 'pages/Authentification/SignIn/styles';
import { Link, Paragraph } from 'components';
import { Headline3 } from 'topography';
import { PATH } from 'routes/constants';
import { AuthLayout, SignInForm, SocialMediaButton } from '../components';

const SignIn = () => (
  <AuthLayout>
    <LeftBackgroundBubble />
    <RightBackgroundBubble />
    <SignInContent>
      <Header>
        <Headline3>Welcome back</Headline3>
        <Paragraph>You don`t have an account?</Paragraph>
        <Link to={PATH.SIGN_UP}>Create new account</Link>
      </Header>
      <div>
        <SocialMediaButton icon={<Google />} text="Sign in with Google" />
        <SocialMediaButton icon={<Facebook />} text="Sign in with Facebook" />
      </div>
    </SignInContent>
    <SignInFormContainer>
      <SignInForm />
    </SignInFormContainer>
  </AuthLayout>
);

export default SignIn;
