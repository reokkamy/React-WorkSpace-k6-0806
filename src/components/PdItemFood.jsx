import styled from 'styled-components';
const Card = styled.div`&+&{margin-top:12px} padding:12px; border:1px solid #eee; border-radius:8px;`;
export default function PdItemFood({ article }) {
    const { MAIN_TITLE, ADDR1, CNTCT_TEL, RPRSNTV_MENU, ITEMCNTNTS, MAIN_IMG_THUMB } = article ?? {};
    return (
        <Card>
            <h3 style={{margin:0}}>{MAIN_TITLE ?? '이름 없음'}</h3>
            {ADDR1 && <div>{ADDR1}</div>}
            {CNTCT_TEL && <div>☎ {CNTCT_TEL}</div>}
            {RPRSNTV_MENU && <div>대표메뉴: {RPRSNTV_MENU}</div>}
            {MAIN_IMG_THUMB && <img src={MAIN_IMG_THUMB} alt="" width={220} style={{marginTop:8}} />}
            {ITEMCNTNTS && <p style={{marginTop:8}}>{ITEMCNTNTS}</p>}
        </Card>
    );
}
