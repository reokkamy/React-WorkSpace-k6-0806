import "./App.css";
import React, { Component } from "react";
import MyComponent from "./component/MyComponent";

// 1. 함수형 컴포넌트
// function App() {
//   const name = "오늘 점심 뭐 먹지?";
//   return (
//     <>
//       <h1>ch3 컴포넌트 개념</h1>
//       <div className="react">{name}</div>
//       <h2>
//         현재: App.jsx , 1 부모 컴포넌트에서, 자식 컴포넌트 MyComponent
//         사용하기(불러오기)!
//       </h2>
//       <MyComponent />
//       {/* <h2>
//         현재: App.jsx , 2 부모 컴포넌트에서, 자식 컴포넌트 MyComponent props
//         전달해보기.{" "}
//       </h2>
//       <MyComponent name="이상용" /> */}
//     </>
//   );
// }

//2. 클래스형 컴포넌트
class App extends Component {
  render() {
    const name2 = "오늘 점심 뭐 먹지?";
    return (
      <>
        <h1>ch3 컴포넌트 개념</h1>
        <div className="react">{name2}</div>
        <h2>
          현재: App.jsx , 1 부모 컴포넌트에서, 자식 컴포넌트 MyComponent
          사용하기(불러오기)!
        </h2>
        <MyComponent />
        <h2>
          현재: App.jsx , 2 부모 컴포넌트에서, 자식 컴포넌트 MyComponent props
          전달해보기.{" "}
        </h2>
        <MyComponent name="이상용" />
      </>
    );
  }
}

export default App;
