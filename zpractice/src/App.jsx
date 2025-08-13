import React, { useState } from 'react';

// 'Greeting'이라는 이름의 컴포넌트
function Greeting(props) {
  return <h1>안녕하세요, {props.name}!</h1>; // props로 전달받은 데이터 사용
}

// App 컴포넌트
function App() {
  // 'count'라는 상태 변수와, 그 값을 변경할 'setCount' 함수를 선언
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1); // setCount 함수를 사용해 상태 변경
  };

  return (
    <div>
      <Greeting name="리액트" />
      <p>현재 카운트: {count}</p>
      <button onClick={handleIncrement}>증가</button>
    </div>
  );
}

export default App; // 다른 파일에서 사용할 수 있도록 내보내기
