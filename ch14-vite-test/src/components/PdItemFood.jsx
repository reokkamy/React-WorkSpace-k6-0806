import React from 'react';
import styled from 'styled-components';

const FoodItemBlock = styled.div`
  display: flex;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 2rem;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 160px;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .contents {
    flex: 1;
    h2 {
      margin: 0;
      color: #e74c3c;
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      p {
        margin: 0;
        line-height: 1.5;
        color: #666;

        &.description {
          color: #333;
          margin-top: 0.5rem;
        }

        &.category {
          background: #f8f9fa;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          display: inline-block;
          font-size: 0.9rem;
        }
      }
    }
  }

  & + & {
    margin-top: 2rem;
  }
`;

const PdItemFood = ({ article }) => {
  // 맛집 데이터 필드 (실제 API 응답에 따라 조정 필요)
  const {
    MAIN_TITLE = '맛집명 정보 없음',
    ADDR1 = '주소 정보 없음',
    ITEMCNTNTS = '설명 정보 없음',
    MAIN_IMG_THUMB = '',
    HOMEPAGE_URL = '#',
    CNTCT_TEL = '연락처 정보 없음',
    USAGE_DAY_WEEK_AND_TIME = '영업시간 정보 없음',
    RPRSNTV_MENU = '대표메뉴 정보 없음',
  } = article;

  return (
    <FoodItemBlock>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_THUMB} alt="맛집 이미지" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>🍽️ {MAIN_TITLE}</h2>
        <div className="info">
          <p className="category">맛집 정보</p>
          <p>
            <strong>📍 주소:</strong> {ADDR1}
          </p>
          <p>
            <strong>📞 연락처:</strong> {CNTCT_TEL}
          </p>
          <p>
            <strong>🕐 영업시간:</strong> {USAGE_DAY_WEEK_AND_TIME}
          </p>
          <p>
            <strong>🍴 대표메뉴:</strong> {RPRSNTV_MENU}
          </p>
          <p className="description">
            <strong>ℹ️ 소개:</strong> {ITEMCNTNTS}
          </p>
        </div>
      </div>
    </FoodItemBlock>
  );
};

export default PdItemFood;
