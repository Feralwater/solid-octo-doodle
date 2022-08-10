import { PATH } from 'routes/constants';
import Login from 'pages/Authentification/SignIn';
import SignUp from './SignUp';

export const authRoutes = [
  {
    path: PATH.SIGN_UP,
    element: SignUp,
  },
  {
    path: PATH.SIGN_IN,
    element: Login,
  },
];
