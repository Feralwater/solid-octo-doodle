import React from 'react';
import { LoginForm } from 'pages/Login/components/LoginForm/LoginForm';
import { ReactComponent as Google } from 'assets/svg/google.svg';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import { SignIn } from 'pages/Login/styles';
import { Link, Paragraph } from 'components';
import SocialMediaButton from './components/SocialMediaButton/SocialMediaButton';

const Login = () => (
  <SignIn>
    <h3>Welcome back</h3>
    <Paragraph>You don`t have an account?</Paragraph>
    <Link to="/signup">Create new account</Link>
    <SocialMediaButton icon={<Google />} text="Sign in with Google" />
    <SocialMediaButton icon={<Facebook />} text="Sign in with Facebook" />
    <LoginForm />
    <Link to="/forgot-password">Forgot password?</Link>
  </SignIn>
);

export default Login;
