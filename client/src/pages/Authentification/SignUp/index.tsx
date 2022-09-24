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
} from 'pages/Authentification/SignUp/styles';
import { PATH } from 'routes/constants';
import { SocialMediaButton, Layout } from 'pages/Authentification/components';
import { useGoogleLogin } from '@react-oauth/google';
import { createOrGetUser } from 'utils';
import SignUpForm from '../components/SignUpForm/SignUpForm';

const SignUp = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => createOrGetUser(tokenResponse),
    onError: (error) => console.log(error),
  });
  const onGoogleLoginClick = () => googleLogin();

  return (
    <Layout>
      <LeftBackgroundBubble />
      <RightBackgroundBubble />
      <SignUpContent>
        <Header>
          <Headline3>Create your free account</Headline3>
          <Paragraph>Do you already have an account?</Paragraph>
          <Link to={PATH.SIGN_IN}>Sign In</Link>
        </Header>
        <div>
          <SocialMediaButton onClick={onGoogleLoginClick} icon={<Google />}>
            Sign in with Google
          </SocialMediaButton>
          <SocialMediaButton
            icon={<Facebook />}
            onClick={() => {
            }}
          >
            Sign in with Facebook
          </SocialMediaButton>
        </div>
      </SignUpContent>
      <SignUpFormContainer>
        <SignUpForm />
      </SignUpFormContainer>
    </Layout>
  );
};

export default SignUp;
