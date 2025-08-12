import './App.css';
import SassComponent from './components/SassComponent.jsx';
import CSSModule from './components/CSSModule.jsx';

function App() {
  return (
    <>
      <h1 className="react">ch09 리액트의 스타일링 </h1>
      <h2>sass 문법을 통한 확장된 css 문법 1 </h2>
      <SassComponent />

      <h2>CSSMoudle 문법을 이용한 중복되지않는 클래스명 사용하기. </h2>
      <CSSModule />
    </>
  );
}

export default App;
