import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  // 이벤트 핸들러 추가,
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    // 여기서부터 작업하기.
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
  };

  // 특정 DOM 에 접근 하기 위해서, 어쩔수 없이,
  // ref 라는 속성을 사용하는 데, 1) 포커스 2) 스크롤 부분에 접근.
  // 포커스 용, 이벤트 핸들러 추가

  // 방법2,
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <>
        <div>
          <h2>리액트에서, ref 테스트 1</h2>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            className={
              this.state.clicked
                ? this.state.validated
                  ? "success"
                  : "failure"
                : ""
            }
            //방법1, 콜백 함수 사용, 태그에 접근하기.
            // ref={(ref) => {
            //   this.input = ref;
            // }}
            ref={this.input}
          />
          <button onClick={this.handleButtonClick}>체크</button>
          <button onClick={this.handleFocus}>포커스</button>
        </div>
      </>
    );
  }
}

export default ValidationSample;
