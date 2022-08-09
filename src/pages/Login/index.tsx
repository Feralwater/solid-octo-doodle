import React from 'react';
import { LoginForm } from 'pages/Login/components/LoginForm/LoginForm';
import { ReactComponent as Google } from 'assets/svg/google.svg';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import {
  LeftBackgroundBubble, RightBackgroundBubble,
  SignIn, SignInContent, SignInForm,
} from 'pages/Login/styles';
import { Link, Paragraph } from 'components';
import { Headline3 } from 'topography';
import SocialMediaButton from './components/SocialMediaButton/SocialMediaButton';

const Login = () => (
  <SignIn>
    <LeftBackgroundBubble />
    <RightBackgroundBubble />
    <SignInContent>
      <div>
        <Headline3>Welcome back</Headline3>
        <Paragraph>You don`t have an account?</Paragraph>
        <Link to="/signup">Create new account</Link>
      </div>
      <div>
        <SocialMediaButton icon={<Google />} text="Sign in with Google" />
        <SocialMediaButton icon={<Facebook />} text="Sign in with Facebook" />
      </div>
    </SignInContent>
    <SignInForm>
      <LoginForm />
    </SignInForm>
  </SignIn>
);

export default Login;
