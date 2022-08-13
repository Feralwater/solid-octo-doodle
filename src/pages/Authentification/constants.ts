import { PATH } from 'routes/constants';
import Login from 'pages/Authentification/SignIn';
import RestorePassword from 'pages/Authentification/RestorePassword';
import SignUp from './SignUp';

export const authRoutes = [
  {
    path: PATH.DEFAULT,
    element: SignUp,
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
