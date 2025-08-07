import React, { Component } from "react";

class EventPractice extends Component {
  // 초깃값
  state = {
    message: "",
  };

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <h2>onChange 연습 해보기. </h2>
        <h3>{this.state.message}</h3>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message} // getter, state 객체 안의 message 조회
          onChange={(e) => {
            // setter, state 의 객체의 message 값을 변경.
            this.setState({ message: e.target.value });
          }}
        />
      </>
    );
  }
}

export default EventPractice;
