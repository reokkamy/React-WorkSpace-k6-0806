export default function PanelVillage({ article }) {
    const { category, fcstDate, fcstTime, fcstValue } = article ?? {};
    return (
        <div style={{padding:'8px 0', borderBottom:'1px solid #eee'}}>
            <strong>{category}</strong> {fcstDate} {fcstTime} → {fcstValue}
        </div>
    );
}
