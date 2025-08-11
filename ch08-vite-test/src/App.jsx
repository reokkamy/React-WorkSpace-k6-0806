import './App.css';
import Counter from './component/Counter.jsx';
import Info from './component/Info.jsx';

function App() {
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
        <h2>1-2 useState , Info자식 컴포넌트 호출 또는 그리기 또는 렌더링 </h2>
        <Info />
      </div>
    </>
  );
}

export default App;
