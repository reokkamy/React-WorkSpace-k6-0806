import './App.css';
import Counter from './component/Counter.jsx';
import Info from './component/Info.jsx';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>
        <h1 className="react"> ch08 함수형 컴포넌트 hooks</h1>
      </div>
      <div>
        <h2>
          1 useState , Counter 자식 컴포넌트 호출 또는 그리기 또는 렌더링{' '}
        </h2>
        <Counter />

        <button onClick={() => setVisible(!visible)}>
          {visible ? '숨기기' : '보이기'}
        </button>
        <h2>1-2 useState , Info자식 컴포넌트 호출 또는 그리기 또는 렌더링 </h2>
        {visible && <Info />}
      </div>
    </>
  );
}

export default App;
