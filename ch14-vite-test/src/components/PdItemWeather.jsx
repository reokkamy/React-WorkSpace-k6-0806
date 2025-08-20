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
            margin: 0 0 1rem 0;
            color: white;
            font-size: 1.25rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .weather-main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            .temperature { font-size: 2.5rem; font-weight: bold; }
            .weather-icon { font-size: 3rem; }
        }
        .weather-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            .weather-card {
                background: rgba(255,255,255,0.2);
                padding: 1rem;
                border-radius: 6px;
                backdrop-filter: blur(10px);
                .weather-title { font-weight: bold; margin-bottom: .5rem; font-size: .9rem; }
                .weather-value { font-size: 1.1rem; }
            }
        }
        .info {
            margin-top: 1rem;
            p { margin: .3rem 0; line-height: 1.5; }
            .update-time { opacity: .8; font-size: .9rem; text-align: right; }
        }
    }
    & + & { margin-top: 1.5rem; }
`;

const PdItemWeather = ({ article = {} }) => {
    // OpenWeather 매핑
    const name = article.name ?? '부산';
    const temp = article.main?.temp ?? '-';
    const tempMax = article.main?.temp_max ?? '-';
    const tempMin = article.main?.temp_min ?? '-';
    const humidity = article.main?.humidity ?? '-';
    const windSpeed = article.wind?.speed ?? '-';
    const windDeg = article.wind?.deg ?? null;
    const description = article.weather?.[0]?.description ?? '날씨 정보 없음';
    const rainfall = article.rain?.['1h'] ?? article.rain?.['3h'] ?? 0;
    const updatedTs = article.dt ? new Date(article.dt * 1000) : null;

    const degToDir = (deg) => {
        if (deg == null) return '-';
        const dirs = ['N','NNE','NE','ENE','E','ESE','SE','SSE',
            'S','SSW','SW','WSW','W','WNW','NW','NNW'];
        return dirs[Math.round(deg / 22.5) % 16];
    };

    const getIcon = (text) => {
        if (!text) return '🌤️';
        if (text.includes('맑')) return '☀️';
        if (text.includes('구름')) return '☁️';
        if (text.includes('비')) return '🌧️';
        if (text.includes('눈')) return '🌨️';
        return '🌤️';
    };

    return (
        <WeatherItemBlock>
            <div className="contents">
                <h2>🌍 {name} 현재 날씨</h2>

                <div className="weather-main">
                    <div>
                        <div className="temperature">{temp}°C</div>
                        <div>{description}</div>
                    </div>
                    <div className="weather-icon">{getIcon(description)}</div>
                </div>

                <div className="weather-grid">
                    <div className="weather-card">
                        <div className="weather-title">🌡️ 최고/최저</div>
                        <div className="weather-value">{tempMax}° / {tempMin}°</div>
                    </div>
                    <div className="weather-card">
                        <div className="weather-title">💧 습도</div>
                        <div className="weather-value">{humidity}%</div>
                    </div>
                    <div className="weather-card">
                        <div className="weather-title">💨 풍속</div>
                        <div className="weather-value">{windSpeed} m/s</div>
                    </div>
                    <div className="weather-card">
                        <div className="weather-title">🧭 풍향</div>
                        <div className="weather-value">
                            {windDeg != null ? `${degToDir(windDeg)} (${windDeg}°)` : '-'}
                        </div>
                    </div>
                    <div className="weather-card">
                        <div className="weather-title">🌧️ 강수(최근)</div>
                        <div className="weather-value">{rainfall} mm</div>
                    </div>
                </div>

                <div className="info">
                    <p className="update-time">
                        {updatedTs ? `업데이트: ${updatedTs.toLocaleString('ko-KR')}` : ''}
                    </p>
                </div>
            </div>
        </WeatherItemBlock>
    );
};

export default PdItemWeather;
