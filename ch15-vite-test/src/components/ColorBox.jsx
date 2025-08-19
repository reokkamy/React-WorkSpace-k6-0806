import React from 'react';
// 전역 저장소
import ColorContext from '../contexts/color.jsx';

const ColorBox = () => {
  return (
    // 전역 저장소에서 불러와 사용하기. <ColorContext.Consumer>
    <div>
      <ColorContext.Consumer>
        {(value) => (
          <div
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: value.color,
            }}
          />
        )}
      </ColorContext.Consumer>
    </div>
  );
};

export default ColorBox;
