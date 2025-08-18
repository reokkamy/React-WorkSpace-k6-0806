import React from 'react';
import { Navigate } from 'react-router-dom';

// 리다이렉트 기능 사용하기, Navigate
const MyPage = () => {
  const isLogined = false;
  if (!isLogined) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <div>
      <h1>마이 페이지입니다.</h1>
    </div>
  );
};

export default MyPage;
