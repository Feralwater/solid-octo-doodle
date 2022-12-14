import React from 'react';
import { Link, Paragraph } from 'components';
import { Headline3 } from 'topography';
import { PATH } from 'routes/constants';
import { Layout, ResetPasswordForm } from 'pages/Authentification/components';
import { Header, LeftBackgroundBubble, RightBackgroundBubble } from 'pages/Authentification/RestorePassword/styles';

const RestorePassword = () => (
  <Layout>
    <LeftBackgroundBubble />
    <RightBackgroundBubble />
    <Header>
      <Headline3>Restore password</Headline3>
      <Paragraph>
        Enter the email you used when you registered
        and we will send you a link to reset your password
      </Paragraph>
      <Link to={PATH.SIGN_IN}>Sign In</Link>
    </Header>
    <ResetPasswordForm />
  </Layout>
);
export default RestorePassword;
