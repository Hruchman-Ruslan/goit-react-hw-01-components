import React from 'react';

import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import user from './profile/data/user.json';
import data from './statistics/data/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        name={user.username}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
