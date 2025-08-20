export default function PanelAirAlert({ article }) {
    const { districtName, issueDate, issueVal, issueGubun, moveName, alertStep } = article ?? {};
    return (
        <div style={{padding:'8px 0', borderBottom:'1px solid #eee'}}>
            <strong>{districtName ?? moveName ?? '지역'}</strong>
            <div>발령: {issueDate ?? '-'}</div>
            <div>단계: {alertStep ?? issueGubun ?? '-'}</div>
            <div>지수/농도: {issueVal ?? '-'}</div>
        </div>
    );
}
