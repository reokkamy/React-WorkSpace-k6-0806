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
//     </>
//   );
// }

//2. 클래스형 컴포넌트
class App extends Component {
  render() {
    const name = "오늘 점심 뭐 먹지?";
    return (
      <>
        <h1>ch3 컴포넌트 개념</h1>
        <div className="react">{name}</div>
        <h2>MyComponent 불러오기!</h2>
        <MyComponent />
      </>
    );
  }
}

export default App;
