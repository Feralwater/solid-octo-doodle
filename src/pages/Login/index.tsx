import React from 'react';
import { LoginForm } from 'pages/Login/components/LoginForm/LoginForm';
import { ReactComponent as Google } from 'assets/svg/google.svg';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import { SignIn } from 'pages/Login/styles';
import SocialMediaButton from './components/SocialMediaButton/SocialMediaButton';

const Login = () => (
  <SignIn>
    <SocialMediaButton icon={<Google />} text="Sign up with Google" />
    <SocialMediaButton icon={<Facebook />} text="Sign up with Facebook" />
    <LoginForm />
  </SignIn>
);

export default Login;
