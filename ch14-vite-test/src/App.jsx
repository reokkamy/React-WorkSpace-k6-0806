import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  // 샘플 데이터 받는 ,  onClick 설정 하기.
  const onClick = () => {
    axios.get('http://jsonplaceholder.typicode.com/todos/1').then((res) => {
      setData(res.data);
    });
  };
  return (
    <>
      <h1 className="react">ch14 REST API 연결 연습</h1>
      <div>
        <button onClick={onClick}>샘플 데이터 불러오기 테스트</button>
      </div>
      <div>
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div>
    </>
  );
}

export default App;
