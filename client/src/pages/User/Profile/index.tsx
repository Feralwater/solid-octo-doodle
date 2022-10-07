import React from 'react';
import { Button } from 'components';
import store from 'store/store';
import { observer } from 'mobx-react-lite';

const Profile = () => {
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
