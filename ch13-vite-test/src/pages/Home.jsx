import { Link, Route } from 'react-router-dom';
import Profile from './Profile.jsx';

const Home = () => {
  return (
    <div>
      <h1>홈 화면</h1>
      <ul>
        <li>
          {/*a 태그를 이용하지 않는다 !!*/}
          <Link to="/about">소개</Link>
        </li>
        <li>
          {/*<Route path="/profile/:username" element={<Profile />} />*/}
          <Link to="/profile/lsy">lsy 의 프로필 </Link>
        </li>
        <li>
          <Link to="/profile/lsy2">lsy2 의 프로필 </Link>
        </li>
        <li>
          <Link to="/profile/lsy3">lsy3 없는 프로필 </Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
