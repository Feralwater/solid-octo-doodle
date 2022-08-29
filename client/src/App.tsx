import React, { useContext, useEffect } from 'react';
import { AppRouter } from 'routes/AppRouter';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { PATH } from 'routes/constants';
import { useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkIsAuth();
      console.log('1', store.isAuth);
    }
  }, [localStorage.getItem('token')]);

  if (!store.isAuth) {
    console.log('2', store.isAuth);
    navigate(PATH.SIGN_IN);
  }

  return (
    <AppRouter />
  );
}

export default observer(App);
