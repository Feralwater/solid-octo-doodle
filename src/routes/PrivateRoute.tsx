import React from 'react';
import { PATH, ROLES } from 'routes/constants';

function getDefaultPath(role: ROLES): string {
  switch (role) {
    case ROLES.USER: return PATH.MY_PROFILE;
    case ROLES.PUBLIC: return PATH.SIGN_IN;
    default:
      throw new Error('');
  }
}

export const PrivateRoute = ({ children }: { children: JSX.Element }) => children;
