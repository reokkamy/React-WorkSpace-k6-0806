import "./App.css";
import LifeCycleSample from "./component/LifeCycleSample";

function App() {
  return (
    <>
      <h1 className="react">
        ch7 클래스 컴포넌트 생명주기(마운트, 업데이트, 언마운트)
      </h1>
      <LifeCycleSample />
    </>
  );
}

export default App;
