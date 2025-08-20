import React from 'react';
import styled from 'styled-components';

const WeatherItemBlock = styled.div`
  display: block;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;

  .contents {
    h2 {
      margin: 0;
      color: white;
      font-size: 1.25rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .weather-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;

      .temperature {
        font-size: 2.5rem;
        font-weight: bold;
      }

      .weather-icon {
        font-size: 3rem;
      }
    }

    .weather-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;

      .weather-card {
        background: rgba(255, 255, 255, 0.2);
        padding: 1rem;
        border-radius: 6px;
        backdrop-filter: blur(10px);

        .weather-title {
          font-weight: bold;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .weather-value {
          font-size: 1.1rem;
        }
      }
    }

    .info {
      margin-top: 1rem;
      p {
        margin: 0.3rem 0;
        line-height: 1.5;

        &.update-time {
          opacity: 0.8;
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

const PdItemWeather = ({ article }) => {
  // 동네예보 데이터 필드 (실제 API 응답에 따라 조정 필요)
  const {
    AREA_NAME = '지역명 정보 없음',
    TEMP = '온도 정보 없음',
    HUMIDITY = '습도 정보 없음',
    WIND_SPEED = '풍속 정보 없음',
    WIND_DIRECTION = '풍향 정보 없음',
    WEATHER_STATUS = '날씨 정보 없음',
    RAINFALL = '강수량 정보 없음',
    FORECAST_DATE = '예보시간 정보 없음',
    MAX_TEMP = '최고온도 정보 없음',
    MIN_TEMP = '최저온도 정보 없음',
  } = article;

  // 날씨에 따른 이모지 결정
  const getWeatherIcon = (status) => {
    if (status.includes('맑음')) return '☀️';
    if (status.includes('흐림')) return '☁️';
    if (status.includes('비')) return '🌧️';
    if (status.includes('눈')) return '🌨️';
    return '🌤️';
  };

  return (
    <WeatherItemBlock>
      <div className="contents">
        <h2>🌍 {AREA_NAME} 날씨예보</h2>

        <div className="weather-main">
          <div>
            <div className="temperature">{TEMP}°C</div>
            <div>{WEATHER_STATUS}</div>
          </div>
          <div className="weather-icon">{getWeatherIcon(WEATHER_STATUS)}</div>
        </div>

        <div className="weather-grid">
          <div className="weather-card">
            <div className="weather-title">🌡️ 최고/최저</div>
            <div className="weather-value">
              {MAX_TEMP}° / {MIN_TEMP}°
            </div>
          </div>

          <div className="weather-card">
            <div className="weather-title">💧 습도</div>
            <div className="weather-value">{HUMIDITY}%</div>
          </div>

          <div className="weather-card">
            <div className="weather-title">💨 풍속</div>
            <div className="weather-value">{WIND_SPEED} m/s</div>
          </div>

          <div className="weather-card">
            <div className="weather-title">🧭 풍향</div>
            <div className="weather-value">{WIND_DIRECTION}</div>
          </div>

          <div className="weather-card">
            <div className="weather-title">🌧️ 강수량</div>
            <div className="weather-value">{RAINFALL} mm</div>
          </div>
        </div>

        <div className="info">
          <p className="update-time">📅 예보시간: {FORECAST_DATE}</p>
        </div>
      </div>
    </WeatherItemBlock>
  );
};

export default PdItemWeather;
