import { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import NewsItem from './NewsItem';

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
// 더미 샘플 데이터 이용.
const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'http://example.com/',
  urlToImage:
    'https://sportshub.cbsistatic.com/i/r/2025/08/16/253debd9-29a2-48cd-8b31-501631451ee8/thumbnail/1200x675/db792d9aa7d3d3d9326347b93bd6439c/dricus-khamzat-weighins.jpg',
};

const NewsList = () => {
  //실제 데이터 연동,
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  //
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=본인꺼',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <NewsListBlock>
      {/*실제 데이터 연동*/}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}

      {/*<NewsItem article={sampleArticle} />*/}
      {/*<NewsItem article={sampleArticle} />*/}
      {/*<NewsItem article={sampleArticle} />*/}
      {/*<NewsItem article={sampleArticle} />*/}
      {/*<NewsItem article={sampleArticle} />*/}
    </NewsListBlock>
  );
};

export default NewsList;
