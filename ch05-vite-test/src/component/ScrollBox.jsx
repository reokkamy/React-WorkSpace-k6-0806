import React, { Component } from "react";

class ScrollBox extends Component {
  // 맨밑으로 이동하는 이벤트 핸들러 ,
  // 준비물 )
  // 1) scrollHeight, : 안쪽 박스 높이 : 650px
  // 2) clientHeight, : 바깥쪽 박스 높이 : 300px
  // 3) scrollTop : 실제 스크롤의 위치, 상단, :0, 맨 하단: 350
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

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
