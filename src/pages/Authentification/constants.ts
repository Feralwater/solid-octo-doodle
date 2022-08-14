import { PATH } from 'routes/constants';
import Login from 'pages/Authentification/SignIn';
import RestorePassword from 'pages/Authentification/RestorePassword';
import Greeting from 'pages/Greeting';
import SignUp from './SignUp';

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
    element: Login,
  },
  {
    path: PATH.RESTORE_PASSWORD,
    element: RestorePassword,
  },
];
