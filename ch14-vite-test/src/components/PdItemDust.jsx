import React from 'react';
import styled from 'styled-components';

const ToiletCard = styled.div`
    border: 1px solid #e9ecef;
    border-radius: 10px;
    background: #fff;
    padding: 1rem 1.25rem;
    line-height: 1.6;

    h2 {
        margin: 0 0 .5rem 0;
        font-size: 1.1rem;
        color: #2c3e50;
        display:flex; gap:.5rem; align-items:center;
    }

    .row {
        display: grid;
        grid-template-columns: 70px 1fr;
        gap: .75rem;
        padding: .5rem 0;
        border-top: 1px dashed #e9ecef;
    }
    .row:first-of-type { border-top: 0; }

    .label { color:#6c757d; }
    .val { color:#34495e; word-break: break-all; }
`;

const PdItemDust = ({ article = {} }) => {
    // 해운대 화장실 API 기본 키: toiletName, address, tel
    const name  = article.toiletName ?? article.NM ?? article.name ?? '';
    const addr  = article.address    ?? article.ADDR ?? article.addr ?? '';
    const phone = article.tel        ?? article.TEL  ?? '';

    return (
        <ToiletCard>
            <h2>🚻 {name || '이름 정보 없음'}</h2>

            {addr && (
                <div className="row">
                    <div className="label">주소</div>
                    <div className="val">{addr}</div>
                </div>
            )}

            {phone && (
                <div className="row">
                    <div className="label">연락처</div>
                    <div className="val">{phone}</div>
                </div>
            )}
        </ToiletCard>
    );
};

export default PdItemDust;
