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
import { SocialMediaButton, Layout, SignUpForm } from '../components';

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
      <div>
        <SocialMediaButton icon={<Google />} text="Continue with Google" />
        <SocialMediaButton icon={<Facebook />} text="Continue with Facebook" />
      </div>
    </SignUpContent>
    <SignUpFormContainer>
      <SignUpForm />
    </SignUpFormContainer>
  </Layout>
);

export default SignUp;
