import React, { useContext } from 'react';
import { PATH, ROLES } from 'routes/constants';
import { Navigate } from 'react-router';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';

function getDefaultPath(role: ROLES) {
  switch (role) {
    case ROLES.USER: return PATH.MY_PROFILE;
    case ROLES.PUBLIC: return PATH.SIGN_IN;
    default:
      throw new Error();
  }
}

interface IPrivateRoute {
  children: JSX.Element;
  roleName: ROLES;
}

export const PrivateRoute = observer(({ children, roleName }: IPrivateRoute) => {
  const { store } = useContext(Context);
  const role = store.isAuth ? ROLES.USER : ROLES.PUBLIC;

  if (roleName !== role) {
    const defaultPath = getDefaultPath(role);
    return <Navigate to={defaultPath} />;
  }
  return children;
});
