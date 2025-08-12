import React, { useRef } from 'react';

// useRef 를 이용해서, 렌더링에 영향을 주지 않는 값을 설정.

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log('id의 현재 값 : ', id.current);
  };
  return <div>refSample</div>;
};

export default RefSample;
