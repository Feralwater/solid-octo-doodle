import React from 'react';
import { Paragraph } from 'components';
import { Headline3 } from 'topography';
import { PATH } from 'routes/constants';
import { Layout } from 'components/Layout/Layout';
import { GreetingImage, GreetingLayout, StyledLink } from 'pages/Authentification/Greeting/styles';
import { ReactComponent as StartImage } from 'assets/svg/startImage.svg';

const Greeting = () => (
  <Layout>
    <GreetingLayout>
      <GreetingImage>
        <StartImage />
      </GreetingImage>
      <Headline3>Welcome to Doodle!</Headline3>
      <Paragraph>
        This is a simple app to help you learn English.
        There is nothing impossible. Let`s get started!
      </Paragraph>
      <StyledLink to={PATH.SIGN_IN}>Start now</StyledLink>
    </GreetingLayout>
  </Layout>
);

export default Greeting;
