import { PATH } from 'routes/constants';
import Login from 'pages/Login';
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
