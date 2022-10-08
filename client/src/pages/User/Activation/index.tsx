import React from 'react';
import { ReactComponent as ActivationImage } from 'assets/svg/postman.svg';
import { Paragraph } from 'components';
import { Layout } from 'components/Layout/Layout';
import { ActivationImageContainer, ActivationLayout } from './styles';

const Activation = () => (
  <Layout>
    <ActivationLayout>
      <ActivationImageContainer>
        <ActivationImage />
      </ActivationImageContainer>
      <Paragraph>
        We have sent you an email with a link to activate your account.
        Please check your inbox and click on the link to activate your account.
      </Paragraph>
    </ActivationLayout>
  </Layout>
);

export default Activation;
