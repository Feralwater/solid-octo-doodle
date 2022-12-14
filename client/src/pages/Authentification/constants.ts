import { PATH } from 'routes/constants';
import SignIn from 'pages/Authentification/SignIn';
import RestorePassword from 'pages/Authentification/RestorePassword';
import Greeting from 'pages/Authentification/Greeting';
import RestoreLinkSent from 'pages/Authentification/RestoreLinkSent';
import SignUp from 'pages/Authentification/SignUp';

export const authRoutes = [
  {
    path: PATH.DEFAULT,
    element: Greeting,
  },
  {
    path: PATH.SIGN_UP,
    element: SignUp,
  },
  {
    path: PATH.SIGN_IN,
    element: SignIn,
  },
  {
    path: PATH.RESTORE_PASSWORD,
    element: RestorePassword,
  },
  {
    path: PATH.RESTORE_LINK_SENT,
    element: RestoreLinkSent,
  },
];
