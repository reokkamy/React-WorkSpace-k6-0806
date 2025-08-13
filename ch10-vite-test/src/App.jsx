import './App.css';
import TodoTemplate from './component/TodoTemplate.jsx';
import TodoInsert from './component/TodoInsert.jsx';
import TodoList from './component/TodoList.jsx';

function App() {
  return (
    <>
      <h1 className="react">ch10 일정 관리 미니 프로젝트 </h1>
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
