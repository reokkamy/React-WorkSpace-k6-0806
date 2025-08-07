// 방법1. 단축키 사용안하고,(코드 스니펫)사용안하고, 수동 작성.
// const MyComponent = () => {
//   return (
//     <>
//       <div>나의 첫 함수형 컴포넌트</div>
//     </>
//   );
// };
// export default MyComponent; // 내보내기, 다른 곳에서 이용 가능.

// 방법2. 코드 스니펫을 이용해서, 작업.
// 함수형 컴포넌트 : rsc
// 클래스형 컴포넌트 : rcc
import React from "react";

const MyComponent = (props) => {
  return (
    <>
      <div>나의 첫 함수형 컴포넌트 불러오기</div>
      <h2>매개변수로 정의한 props(속성들) 를 사용하기, </h2>
      <h3>props 객체이 있는 이름을 사용해보기 : {props.name}</h3>
    </>
  );
};

//기본 props 설정. 디폴트 props 설정.
MyComponent.defaultProps = {
  nmae: "기본값 이름입니다.",
};

export default MyComponent;
