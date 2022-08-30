import React, { useContext } from 'react';
import { Button } from 'components';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';

const Profile = () => {
  const { store } = useContext(Context);
  const handleClick = async () => store.signOut();

  return (
    <div>
      profile page goes here
      <Button
        color="primary"
        size="large"
        onClick={handleClick}
        type="submit"
      >
        Sign Out
      </Button>
    </div>
  );
};

export default observer(Profile);
