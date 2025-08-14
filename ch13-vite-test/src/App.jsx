import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';

function App() {
  return (
    <>
      <h1 className="react">ch13 리액트 라우팅 </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*경로에서, :username 이 부분이 파라미터 정보 전달, 어디에 ? <Profile />
          받는 컴포넌트에서 useParams() 훅스를 이용해서, 정보를 가져오기.
          */}
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
