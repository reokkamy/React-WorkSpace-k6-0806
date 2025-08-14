import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  lsy: {
    name: '이상용',
    description: '오늘 점심 뭐 먹지?',
  },
  lsy2: {
    name: '이상용2',
    description: '오늘 점심 뭐 먹지2?',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다. </p>
      )}
    </div>
  );
};

export default Profile;
