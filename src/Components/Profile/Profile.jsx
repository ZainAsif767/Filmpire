/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../../features/auth';

export default function Profile() {
  const { user } = useSelector(userSelector);
  console.log(user);

  return (
    <div>
      Profile - {user.username}
      <h1>1</h1>
    </div>
  );
}
