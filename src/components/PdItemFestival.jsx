import styled from 'styled-components';
const Card = styled.div`&+&{margin-top:12px} padding:12px; border:1px solid #eee; border-radius:8px;`;
export default function PdItemFestival({ article }) {
    const { MAIN_TITLE, ADDR1, EVENT_PERIOD, HOMEPAGE_URL, MAIN_IMG_THUMB, ITEMCNTNTS } = article ?? {};
    return (
        <Card>
            <h3 style={{margin:0}}>{MAIN_TITLE ?? '축제명 미상'}</h3>
            {ADDR1 && <div>{ADDR1}</div>}
            {EVENT_PERIOD && <div>기간: {EVENT_PERIOD}</div>}
            {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">홈페이지</a>}
            {MAIN_IMG_THUMB && <img src={MAIN_IMG_THUMB} alt="" width={220} style={{marginTop:8}} />}
            {ITEMCNTNTS && <p style={{marginTop:8}}>{ITEMCNTNTS}</p>}
        </Card>
    );
}
