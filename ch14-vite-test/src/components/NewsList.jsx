import { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise.jsx';

//css 작업
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  //실제 데이터 연동,
  // 커스텀 훅스 사용하기전, -> 리팩토링 하기전,
  // NewsList_backup2.jsx , 파일 참고,

  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`,
    );
  }, [category]);

  // 대기 중
  if (loading) {
    return <NewsListBlock>대기중입니다.</NewsListBlock>;
  }
  // response 값이 설정이 안됐을 경우,
  if (!response) {
    return null;
  }

  // 에러가 발생할수도 있음.
  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }
  // 정상 값을 받을 때.
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
