import React, { Component } from "react";

class EventPractice extends Component {
  // 초깃값
  state = {
    message: "",
  };

  // 태그에 직접 정의한 이벤트 핸들링 작업, 따로 분리 작업.
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // 이벤트 핸들링 따로 정의,
  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <h2>1 onChange 연습 해보기. </h2>
        <h3>{this.state.message}</h3>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message} // getter, state 객체 안의 message 조회
          // 방법1, 직접 설정
          //   onChange={(e) => {
          //     // setter, state 의 객체의 message 값을 변경.
          //     this.setState({ message: e.target.value });
          //   }}
          // 방법2, 따로 분리 설정.
          onChange={this.handleChange}
        />

        <h2>2 onClick 연습 해보기. </h2>
        <button
          // 방법1, 직접 설정
          //   onClick={() => {
          //     alert(this.state.message);
          //     this.setState({
          //       message: "",
          //     });
          //   }}
          // 방법2, 따로 분리 설정.
          onClick={this.handleClick}
        >
          확인
        </button>
      </>
    );
  }
}

export default EventPractice;
