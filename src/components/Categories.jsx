import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
    display:flex; gap:12px; padding:12px 16px; border-bottom:1px solid #eee;
`;
const Item = styled(NavLink)`
    &.active { font-weight:700; text-decoration:underline; }
`;

const categories = [
    { name: 'busanFood', text: '부산맛집' },
    { name: 'festival',  text: '축제정보' },
    { name: 'air',       text: '미세먼지정보' },
    { name: 'weather',   text: '일기예보' },
];

export default function Categories() {
    return (
        <Wrap>
            <span style={{opacity:.6, marginRight:8}}>목록</span>
            {categories.map(c => (
                <Item key={c.name} to={`/${c.name}`} className={({isActive}) => isActive ? 'active' : undefined}>
                    {c.text}
                </Item>
            ))}
        </Wrap>
    );
}
