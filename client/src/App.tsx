import React, { useEffect } from 'react';
import { AppRouter } from 'routes/AppRouter';
import store from 'store/store';
import { observer } from 'mobx-react-lite';
import { Loader } from 'components';

function App() {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkIsAuth();
    }
  }, []);

  return store.isLoading ? <Loader /> : <AppRouter />;
}

export default observer(App);
