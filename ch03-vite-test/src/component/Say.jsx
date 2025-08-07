import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  // useState의 정의
  // useState("") -> 초깃값을 빈 문자열로 할당.
  // 2개를 반환함, 1) 변수,message 2) 함수(세터) setMessage
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요");
  return (
    <>
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1>{message}</h1>
      </div>
    </>
  );
};

export default Say;
