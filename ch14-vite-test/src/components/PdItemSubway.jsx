import React from 'react';
import styled from 'styled-components';

const SubwayItemBlock = styled.div`
    display: block;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    background: #f8f9fa;

    .header {
        display: flex; justify-content: space-between; align-items: center;
        margin-bottom: 0.5rem;
        h2 {
            margin: 0; font-size: 1.1rem; color: #2c3e50; display:flex; gap:.5rem; align-items:center;
        }
        .line {
            font-size: .95rem; color: #6c757d;
        }
    }
    .row {
        display: grid; grid-template-columns: 110px 1fr 80px; gap: .75rem;
        background: #fff; border-radius: 6px; padding: .75rem 1rem; border-left: 4px solid #17a2b8;
        & + .row { margin-top: .5rem; }
        .label { color:#6c757d; }
        .val { color:#34495e; font-weight:600; }
        .pill {
            justify-self:end; align-self:center; font-size:.85rem; padding:.25rem .5rem; border-radius:999px;
            background:#e9f7fc; color:#0c5460; border:1px solid #bde5f1;
        }
    }
    & + & { margin-top: 1rem; }
`;

const PdItemSubway = ({ article }) => {
    // 유연한 키 매핑: API에 따라 station/line/time/direction명이 다를 수 있음
    const pick = (...cands) => cands.find((v) => v != null && v !== '') ?? '';

    const STATION =
        pick(article.STATION_NM, article.station_nm, article.station, article.staNm, article.sname) || '역 정보 없음';
    const LINE =
        pick(article.LINE_NM, article.line_nm, article.line, article.route, article.route_nm) || '노선 정보 없음';
    const DIRECTION =
        pick(article.DIRECTION, article.direction, article.dir, article.updown, article.upDown) || '방향 정보 없음';

    // 시간 필드(출/도착 둘 다 커버)
    const DEPTIME = pick(article.DEPARTURE_TIME, article.departure_time, article.deptime, article.stime, article.time);
    const ARRTIME = pick(article.ARRIVAL_TIME, article.arrival_time, article.arrtime, article.etime);

    // 열차번호/운행정보 등 부가
    const TRAIN_NO = pick(article.train_no, article.trainNo, article.trno, article.enum);
    const REMARK = pick(article.remark, article.memo, article.note);

    return (
        <SubwayItemBlock>
            <div className="header">
                <h2>🚇 {STATION}</h2>
                <div className="line">{LINE} · {DIRECTION}</div>
            </div>

            <div className="row">
                <div className="label">출발(또는 예정)</div>
                <div className="val">{DEPTIME || '-'}</div>
                {TRAIN_NO && <div className="pill">열차 {TRAIN_NO}</div>}
            </div>

            {ARRTIME && (
                <div className="row" style={{ borderLeftColor: '#6c757d' }}>
                    <div className="label">도착(또는 도착예정)</div>
                    <div className="val">{ARRTIME}</div>
                    {REMARK && <div className="pill">{REMARK}</div>}
                </div>
            )}
        </SubwayItemBlock>
    );
};

export default PdItemSubway;
