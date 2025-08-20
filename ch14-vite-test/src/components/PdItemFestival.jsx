import React from 'react';
import styled from 'styled-components';

const FestivalItemBlock = styled.div`
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
      color: #9b59b6;
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

        &.date {
          color: #e74c3c;
          font-weight: bold;
        }
      }
    }
  }

  & + & {
    margin-top: 2rem;
  }
`;

const PdItemFestival = ({ article }) => {
  // 축제 데이터 필드 (실제 API 응답에 따라 조정 필요)
  const {
    MAIN_TITLE = '축제명 정보 없음',
    ADDR1 = '장소 정보 없음',
    ITEMCNTNTS = '설명 정보 없음',
    MAIN_IMG_THUMB = '',
    HOMEPAGE_URL = '#',
    CNTCT_TEL = '연락처 정보 없음',
    USE_FEE = '이용요금 정보 없음',
    PERIOD = '기간 정보 없음',
    PROGRAM = '프로그램 정보 없음',
  } = article;

  return (
    <FestivalItemBlock>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_THUMB} alt="축제 이미지" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>🎪 {MAIN_TITLE}</h2>
        <div className="info">
          <p className="category">축제 정보</p>
          <p className="date">
            <strong>📅 기간:</strong> {PERIOD}
          </p>
          <p>
            <strong>📍 장소:</strong> {ADDR1}
          </p>
          <p>
            <strong>📞 연락처:</strong> {CNTCT_TEL}
          </p>
          <p>
            <strong>💰 이용요금:</strong> {USE_FEE}
          </p>
          <p>
            <strong>🎭 프로그램:</strong> {PROGRAM}
          </p>
          <p className="description">
            <strong>ℹ️ 소개:</strong> {ITEMCNTNTS}
          </p>
        </div>
      </div>
    </FestivalItemBlock>
  );
};

export default PdItemFestival;
