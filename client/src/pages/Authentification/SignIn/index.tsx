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
import { Layout, SocialMediaButton } from 'pages/Authentification/components';
import SignInForm from 'pages/Authentification/components/SignInForm/SignInForm';
import { useGoogleLogin } from '@react-oauth/google';

const SignIn = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  const onGoogleLoginClick = () => googleLogin();

  return (
    <Layout>
      <LeftBackgroundBubble />
      <RightBackgroundBubble />
      <SignInContent>
        <Header>
          <Headline3>Welcome back</Headline3>
          <Paragraph>You don`t have an account?</Paragraph>
          <Link to={PATH.SIGN_UP}>Create new account</Link>
        </Header>
        <div>
          <SocialMediaButton onClick={onGoogleLoginClick} icon={<Google />}>
            Sign in with Google
          </SocialMediaButton>
          <SocialMediaButton icon={<Facebook />} onClick={() => {}}>
            Sign in with Facebook
          </SocialMediaButton>
        </div>
      </SignInContent>
      <SignInFormContainer>
        <SignInForm />
      </SignInFormContainer>
    </Layout>
  );
};

export default SignIn;
