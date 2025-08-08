import React from "react";
import { useState } from "react";

const EventPractice_Function = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onClick = () => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };

  return (
    <>
      <h1>이벤트 연습, 함수형 컴포넌트 </h1>
      <h2>1 onClick, onChange 연습 해보기. </h2>
      <h3>username : {username}</h3>
      <h3>message : {message}</h3>
      <input
        type="text"
        name="username"
        placeholder="username 아무거나 입력하세요"
        value={username} // getter, state 객체 안의 message 조회
        onChange={onChangeUsername}
        // 추가 키 이벤트 리스너, 엔터 키를 입력시, 클릭 하는 효과 주기.
        onKeyPress={onKeyPress}
      />

      <input
        type="text"
        name="message"
        placeholder="message 아무거나 입력하세요"
        value={message} // getter, state 객체 안의 message 조회
        // onClick={onClick}
        onChange={onChangeMessage}
        // 추가 키 이벤트 리스너, 엔터 키를 입력시, 클릭 하는 효과 주기.
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};

export default EventPractice_Function;
