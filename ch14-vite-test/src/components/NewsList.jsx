import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import usePromise from '../lib/usePromise.jsx';
import PdItemFood from './PdItemFood.jsx';
import PdItemFestival from './PdItemFestival.jsx';
import PdItemDust from './PdItemDust.jsx';
import PdItemWeather from './PdItemWeather.jsx';

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
  // 공공데이터 API 연동 함수
  const sendData = () => {
    console.log(`category : ${category}`);

    // 맛집 정보 API
    if (category === 'busanFood') {
      return axios.get(
        `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=WpZMbiL8V%2FK0fsPY%2BLrv3CAmv9bYQZlIaSb2wM4JQ26YOraocdJOCvXhV7m%2FN%2FgW6b4u5II%2Fdu5rpgm6cjnN7w%3D%3D&numOfRows=100&pageNo=1&resultType=json`,
      );
    }
    // 축제 정보 API
    else if (category === 'busanFestival') {
      return axios.get(
        `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=WpZMbiL8V%2FK0fsPY%2BLrv3CAmv9bYQZlIaSb2wM4JQ26YOraocdJOCvXhV7m%2FN%2FgW6b4u5II%2Fdu5rpgm6cjnN7w%3D%3D&numOfRows=100&pageNo=1&resultType=json`,
      );
    }

    else if (category === 'busanDust') {
        return axios.get(
            `https://apis.data.go.kr/3330000/HeaundaePubToiletInfoService/getPubToiletList?serviceKey=WpZMbiL8V%2FK0fsPY%2BLrv3CAmv9bYQZlIaSb2wM4JQ26YOraocdJOCvXhV7m%2FN%2FgW6b4u5II%2Fdu5rpgm6cjnN7w%3D%3D&numOfRows=50&pageNo=1&resultType=json`
        );
    }
    // 동네 예보 API
       else if (category === 'busanWeather') {
             // OpenWeather: 부산 현재 날씨 (섭씨, 한국어)
                 return axios.get('https://api.openweathermap.org/data/2.5/weather', {
                   params: {
                     q: 'Busan,KR',                          // 또는 { lat: 35.1796, lon: 129.0756 }
                        appid: '673fb3be145ed335010b89f6ffe4c89f',
                       units: 'metric',
                         lang: 'kr',
                       },
             });
           }
    // 기본값: 맛집 정보로 설정
    else {
      return axios.get(
        `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=WpZMbiL8V%2FK0fsPY%2BLrv3CAmv9bYQZlIaSb2wM4JQ26YOraocdJOCvXhV7m%2FN%2FgW6b4u5II%2Fdu5rpgm6cjnN7w%3D%3D&numOfRows=100&pageNo=1&resultType=json`,
      );
    }
  };

  const [loading, response, error] = usePromise(sendData, [category]);

  // 대기 중
  if (loading) {
    return <NewsListBlock>대기중입니다.</NewsListBlock>;
  }

  // response 값이 설정이 안됐을 경우
  if (!response) {
    return null;
  }

  // 에러가 발생할수도 있음
  if (error) {
    return <NewsListBlock>에러 발생: {error.message}</NewsListBlock>;
  }

  // 정상 값을 받을 때 - 각 API별 데이터 구조에 맞게 처리
  let data = [];

  if (category === 'busanFood') {
    data = response.data.getFoodKr?.item || [];
  } else if (category === 'busanFestival') {
    data = response.data.getFestivalKr?.item || [];
  }  else if (category === 'busanDust') {
      // 해운대구 공중화장실 파싱
      const d = response.data;
      data = d.getPubToiletList?.item
          ?? d.response?.body?.items?.item
          ?? [];
       } else if (category === 'busanWeather') {
         data = [response.data]; // ← 한 건이라 배열로 감싸기
       } else {
    // 기본값: 맛집 데이터
    data = response.data.getFoodKr?.item || [];
  }

  // 각 카테고리별 컴포넌트 렌더링
  const renderItems = () => {
    if (category === 'busanFood' || !category || category === 'all') {
      return data.map((item, index) => (
        <PdItemFood key={index} article={item} />
      ));
    } else if (category === 'busanFestival') {
      return data.map((item, index) => (
        <PdItemFestival key={index} article={item} />
      ));
    } else if (category === 'busanDust') {
      return data.map((item, index) => (
        <PdItemDust key={index} article={item} />
      ));
    } else if (category === 'busanWeather') {
      return data.map((item, index) => (
        <PdItemWeather key={index} article={item} />
      ));
    } else {
      return data.map((item, index) => (
        <PdItemFood key={index} article={item} />
      ));
    }
  };

  return <NewsListBlock>{renderItems()}</NewsListBlock>;
};

export default NewsList;
