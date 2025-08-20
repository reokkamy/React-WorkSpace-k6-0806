import React from 'react';
import styled from 'styled-components';

const DustItemBlock = styled.div`
  display: block;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  background: #f8f9fa;

  .contents {
    h2 {
      margin: 0;
      color: #f39c12;
      font-size: 1.25rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;

      .status-card {
        background: white;
        padding: 1rem;
        border-radius: 6px;
        border-left: 4px solid #3498db;

        &.warning {
          border-left-color: #f39c12;
        }

        &.danger {
          border-left-color: #e74c3c;
        }

        .status-title {
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .status-value {
          font-size: 1.1rem;
          color: #666;
        }
      }
    }

    .info {
      margin-top: 1rem;
      p {
        margin: 0.3rem 0;
        line-height: 1.5;
        color: #666;

        &.update-time {
          color: #95a5a6;
          font-size: 0.9rem;
          text-align: right;
        }
      }
    }
  }

  & + & {
    margin-top: 1.5rem;
  }
`;

const PdItemDust = ({ article }) => {
  // 미세먼지 데이터 필드 (실제 API 응답에 따라 조정 필요)
  const {
    AREA_NAME = '지역명 정보 없음',
    PM10 = '정보 없음',
    PM25 = '정보 없음',
    PM10_GRADE = '정보 없음',
    PM25_GRADE = '정보 없음',
    MEASURE_DATE = '측정시간 정보 없음',
    SO2 = '정보 없음',
    CO = '정보 없음',
    O3 = '정보 없음',
    NO2 = '정보 없음',
  } = article;

  // 등급에 따른 상태 클래스 결정
  const getStatusClass = (grade) => {
    if (grade === '나쁨' || grade === '매우나쁨') return 'danger';
    if (grade === '보통') return 'warning';
    return '';
  };

  return (
    <DustItemBlock>
      <div className="contents">
        <h2>🌫️ {AREA_NAME} 미세먼지 현황</h2>

        <div className="status-grid">
          <div className={`status-card ${getStatusClass(PM10_GRADE)}`}>
            <div className="status-title">미세먼지 (PM10)</div>
            <div className="status-value">
              {PM10} ㎍/㎥ ({PM10_GRADE})
            </div>
          </div>

          <div className={`status-card ${getStatusClass(PM25_GRADE)}`}>
            <div className="status-title">초미세먼지 (PM2.5)</div>
            <div className="status-value">
              {PM25} ㎍/㎥ ({PM25_GRADE})
            </div>
          </div>

          <div className="status-card">
            <div className="status-title">이산화황 (SO2)</div>
            <div className="status-value">{SO2} ppm</div>
          </div>

          <div className="status-card">
            <div className="status-title">일산화탄소 (CO)</div>
            <div className="status-value">{CO} ppm</div>
          </div>

          <div className="status-card">
            <div className="status-title">오존 (O3)</div>
            <div className="status-value">{O3} ppm</div>
          </div>

          <div className="status-card">
            <div className="status-title">이산화질소 (NO2)</div>
            <div className="status-value">{NO2} ppm</div>
          </div>
        </div>

        <div className="info">
          <p className="update-time">📅 측정시간: {MEASURE_DATE}</p>
        </div>
      </div>
    </DustItemBlock>
  );
};

export default PdItemDust;
