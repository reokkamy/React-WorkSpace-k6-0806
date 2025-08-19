import './App.css';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList.jsx';
import Categories from './components/Categories.jsx';

function App() {
  //카테고리 , 상태 작업1
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <h1 className="react">ch14 REST API 연결 연습</h1>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
