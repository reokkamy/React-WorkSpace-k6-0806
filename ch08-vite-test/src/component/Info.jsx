import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //화면에 input 태그에서 값이 변경 할 때 마다, state 의 값을 변경 해주는
  // onChangeXXX , 이벤트 핸들러 추가하기.
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} type="text" />
        <input value={email} onChange={onChangeEmail} type="text" />
      </div>
      <div>
        <b>이름 : </b> {name}
        <b>이메일 : </b> {email}
      </div>
    </div>
  );
};

export default Info;
