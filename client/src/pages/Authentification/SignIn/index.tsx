import React, { useContext } from 'react';
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
import { Layout, SocialMediaButton, SignInForm } from 'pages/Authentification/components';
import { useGoogleLogin } from '@react-oauth/google';
import { Context } from 'index';

const SignIn = () => {
  const { store } = useContext(Context);

  const signInWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      await store.signIn(null, null, tokenResponse.access_token);
    },
  });

  const googleSignIn = () => signInWithGoogle();

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
          <SocialMediaButton
            onClick={googleSignIn}
            icon={<Google />}
            text="Sign in with Google"
          />
          <SocialMediaButton
            onClick={() => {
            }}
            icon={<Facebook />}
            text="Sign in with Facebook"
          />
        </div>
      </SignInContent>
      <SignInFormContainer>
        <SignInForm />
      </SignInFormContainer>
    </Layout>
  );
};

export default SignIn;
