import React from 'react';
// 전역 저장소
import ColorContext, { ColorConsumer } from '../contexts/color.jsx';

const ColorBox = () => {
  return (
    // 전역 저장소에서 불러와 사용하기. <ColorContext.Consumer>
    <div>
      {/*방법1*/}
      {/*<ColorContext.Consumer>*/}
      {/*방법2*/}
      <ColorConsumer>
        {/*전역 저장소에서, 색깔 상태를 꺼내서 사용했고*/}
        {(value) => (
          <>
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: value.state.color,
              }}
            />
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: value.state.subColor,
              }}
            />
          </>
        )}
      </ColorConsumer>
      {/*방법2*/}
      {/*방법1*/}
      {/*</ColorContext.Consumer>*/}
    </div>
  );
};

export default ColorBox;
