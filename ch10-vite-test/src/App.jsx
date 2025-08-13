import './App.css';
import TodoTemplate from './component/TodoTemplate.jsx';
import TodoInsert from './component/TodoInsert.jsx';
import TodoList from './component/TodoList.jsx';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '오늘 점심 뭐 먹지1', checked: true },
    { id: 2, text: '오늘 점심 뭐 먹지2', checked: false },
    { id: 3, text: '오늘 점심 뭐 먹지3', checked: true },
  ]);

  // useRef 이용해서, 렌더링에 영향을 받지 않는 값을 사용.
  const nextId = useRef(4);
  // 글쓰기 함수 기능
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // 기존 배열에 todos에 새로운 요소를 추가 후 새배열을 생성.
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  // 지우기 기능,
  const onRemove = useCallback(
    (id) => {
      // 예시 : todos = [
      //   { id: 1, text: '오늘 점심 뭐 먹지1', checked: true },
      //   { id: 2, text: '오늘 점심 뭐 먹지2', checked: false },
      //   { id: 3, text: '오늘 점심 뭐 먹지3', checked: true },
      // ]
      // 삭제 할 아이디 : id =3 번 삭제
      // 순회 : todo.id 1 !== 3 (참)
      // 순회 : todo.id 2 !== 3 (참)
      // 순회 : todo.id 3 !== 3 (거짓)
      // 결과 : todos.filter(todo => todo.id !== id)
      // 새로운 배열 생성
      // [
      //   { id: 1, text: '오늘 점심 뭐 먹지1', checked: true },
      //     { id: 2, text: '오늘 점심 뭐 먹지2', checked: false },
      //   ]
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <>
      <h1 className="react">ch10 일정 관리 미니 프로젝트 </h1>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} />
      </TodoTemplate>
    </>
  );
}

export default App;
