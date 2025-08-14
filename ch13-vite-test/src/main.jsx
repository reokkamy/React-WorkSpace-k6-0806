import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// 순서1, 가져오기
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  // 순서2, 적용하기.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
