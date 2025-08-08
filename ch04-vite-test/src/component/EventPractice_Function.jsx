import React from "react";
import { useState } from "react";

const EventPractice_Function = () => {
  const [username, setUsername] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);

  const onClick = () => {
    alert(username + ":");
    setUsername("");
  };

  return (
    <>
      <h1>이벤트 연습, 함수형 컴포넌트 </h1>
      <h2>1 onClick, onChange 연습 해보기. </h2>
      <h3>username : {username}</h3>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={username} // getter, state 객체 안의 message 조회
        // onClick={onClick}
        onChange={onChangeUsername}
        // 추가 키 이벤트 리스너, 엔터 키를 입력시, 클릭 하는 효과 주기.
        //onKeyPress={this.handleKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};

export default EventPractice_Function;
