import React from 'react';
import { CookieConsent } from 'react-cookie-consent';

const CookieBanner = () => (
  <CookieConsent
    debug
    overlay
    style={{
      background: 'RGB(86, 128, 249, 0.4)',
      height: '80px',
      borderRadius: '4px',
      fontSize: '14px',
      flexWrap: 'nowrap',
      color: '#000000',
      fontWeight: '600',
      alignItems: 'center',
    }}
    buttonStyle={{
      background: 'linear-gradient(to right, #78B5FA, #9586FD)',
      borderRadius: '32px',
      color: 'white',
      fontSize: '14px',
      padding: '10px 20px',
    }}
    contentStyle={{
      flexBasis: '150px',
    }}
  >
    This site use cookies!
  </CookieConsent>
);

export default CookieBanner;
