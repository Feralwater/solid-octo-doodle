import { PATH } from 'routes/constants';
import Activation from 'pages/User/Activation';
import Profile from './Profile';

export const userRoutes = [
  {
    path: PATH.MY_PROFILE,
    element: Profile,
  },
  {
    path: PATH.ACTIVATION,
    element: Activation,
  },
];
