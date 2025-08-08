import React, { Component } from "react";

class ScrollBox extends Component {
  render() {
    // out 영역
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    // inside 영역
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };
    return (
      <>
        <h2>2 스크롤을 이용한 ref로 접근하기 </h2>
        <div
          style={style}
          ref={(ref) => {
            this.box = ref;
          }}
        >
          <div style={innerStyle}></div>
        </div>
      </>
    );
  }
}

export default ScrollBox;
