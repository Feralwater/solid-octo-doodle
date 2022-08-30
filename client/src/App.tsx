import React, { useContext, useEffect } from 'react';
import { AppRouter } from 'routes/AppRouter';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { Loader } from 'components';

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkIsAuth();
    }
  }, []);

  return store.isLoading ? <Loader /> : <AppRouter />;
}

export default observer(App);
