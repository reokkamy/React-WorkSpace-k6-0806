import { Fragment } from 'react';
import './App.css';

function App() {
  // 리액트에서는 컴포넌트에서, 요소 여러 개를 왜 하나의 요소로 꼭
  // 감싸 주어야하나?
  // Virtrual DOM에서 컴포넌트 변화를 감지할 때, 효율적으로 비교하기 위해서.
  const name = '이상용';
  return (
    // jsx 기본 문법(기존 HTML 형식으로 사용 가능 -> 변환을 자동으로 해준다. ),
    // vs jsx 기본 문법 사용 안하면, 모양? 실제 동작은,
    // 예)return React.createElement("div", null, "Hello ", React.createElement ("b", null, "react"));
    // <div>
    //방법2
    // <Fragment>
    // 방법3
    <>
      <h1>리액트 jsx 문법 처음 해보기</h1>
      <h2>1 기본 jsx 문법 규칙, 감싸는 부모 태그가 필요함. 현재 오류가 남. </h2>
      <h3>2 자바스크립트 표현식을 이용해서, 변수 불러오기 이름 : {name}</h3>
    </>
    // </Fragment>
    // </div>
  );
}

export default App;
