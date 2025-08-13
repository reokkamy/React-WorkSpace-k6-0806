import './App.css';
import TodoTemplate from './component/TodoTemplate.jsx';
import TodoInsert from './component/TodoInsert.jsx';
import TodoList from './component/TodoList.jsx';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '오늘 점심 뭐 먹지1', checked: true },
    { id: 2, text: '오늘 점심 뭐 먹지2', checked: false },
    { id: 3, text: '오늘 점심 뭐 먹지3', checked: true },
  ]);
  return (
    <>
      <h1 className="react">ch10 일정 관리 미니 프로젝트 </h1>
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
}

export default App;
