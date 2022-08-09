import React from 'react';
import { LoginForm } from 'pages/Login/components/LoginForm/LoginForm';
import { ReactComponent as Google } from 'assets/svg/google.svg';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import { SignIn } from 'pages/Login/styles';
import SocialMediaButton from './components/SocialMediaButton/SocialMediaButton';

const Login = () => (
  <SignIn>
    Welcome back
    you don`t have an account?
    Create new account
    <SocialMediaButton icon={<Google />} text="Sign in with Google" />
    <SocialMediaButton icon={<Facebook />} text="Sign in with Facebook" />
    <LoginForm />
    forgot password?
  </SignIn>
);

export default Login;
