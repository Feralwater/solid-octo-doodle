import React from 'react';
import { Headline3 } from 'topography';
import { Link, Paragraph } from 'components';
import { ReactComponent as Google } from 'assets/svg/google.svg';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import { SignUpContent, SignUpFormContainer } from 'pages/Authentification/SignUp/styles';
import { SocialMediaButton, AuthLayout, SignUpForm } from '../components';

const SignUp = () => (
  <AuthLayout>
    <SignUpContent>
      <div>
        <Headline3>Create your free account</Headline3>
        <Paragraph>Do you already have an account?</Paragraph>
        <Link to="/sign-in">Sign In</Link>
      </div>
      <div>
        <SocialMediaButton icon={<Google />} text="Continue with Google" />
        <SocialMediaButton icon={<Facebook />} text="Continue with Facebook" />
      </div>
    </SignUpContent>
    <SignUpFormContainer>
      <SignUpForm />
    </SignUpFormContainer>
  </AuthLayout>
);

export default SignUp;
