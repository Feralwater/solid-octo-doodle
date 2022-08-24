import React from 'react';
import { Layout } from 'components/Layout/Layout';
import { Headline3 } from 'topography';
import { Link, Paragraph } from 'components';
import { PATH } from 'routes/constants';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { BackLink, RestoreLinkSentImage } from 'pages/Authentification/RestoreLinkSent/styles';
import emailSent from 'assets/img/sent-email.png';

const RestoreLinkSent = () => (
  <Layout>
    <RestoreLinkSentImage>
      <img src={emailSent} alt="sent email" />
    </RestoreLinkSentImage>
    <Headline3>Link has been sent</Headline3>
    <div>
      <Paragraph>
        We have sent you an email with a link to restore your password.
        Please check your email and click on the link.
      </Paragraph>
      <BackLink>
        <Link to={PATH.RESTORE_PASSWORD}>
          <BiLeftArrowAlt />
          Back
        </Link>
      </BackLink>
    </div>
  </Layout>
);

export default RestoreLinkSent;
