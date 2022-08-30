import React, { useContext, useEffect } from 'react';
import { AppRouter } from 'routes/AppRouter';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkIsAuth();
    }
  }, []);

  return <AppRouter />;
}

export default observer(App);
