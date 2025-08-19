import { createContext } from 'react';

// 전역 저장소 생성 , 들어 있는 요소 : { color: 'red' }
const ColorContext = createContext({ color: 'red' });

export default ColorContext;
