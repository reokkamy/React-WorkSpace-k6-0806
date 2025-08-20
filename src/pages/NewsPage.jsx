import { useParams, Navigate } from 'react-router-dom';
import Categories from '../components/Categories.jsx';
import NewsList from '../components/NewsList.jsx';

const VALID = new Set(['busanFood','festival','air','weather']);

export default function NewsPage() {
    const { category } = useParams();
    const cat = category ?? 'busanFood';
    if (!VALID.has(cat)) return <Navigate to="/busanFood" replace />;
    return (
        <>
            <Categories />
            <NewsList category={cat} />
        </>
    );
}
