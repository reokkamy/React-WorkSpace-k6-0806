import axios from 'axios';
import styled from 'styled-components';
import usePromise  from '../lib/usePromise.jsx';
import PdItemFood from './PdItemFood.jsx';
import PdItemFestival from './PdItemFestival.jsx';
import PanelAirAlert from './PanelAirAlert.jsx';
import PanelVillage from './PanelVillage.jsx';

const ListBlock = styled.div`padding:16px`;

// 디코딩키(상수)
const SERVICE_KEY = 'WpZMbiL8V/K0fsPY+Lrv3CAmv9bYQZlIaSb2wM4JQ26YOraocdJOCvXhV7m/N/gW6b4u5II/du5rpgm6cjnN7w==';

// 카테고리별 API 설정 (url은 비워둠)
const endpoints = {
    busanFood: {
        url: '/api-busan/6260000/FoodService/getFoodKr',
        params: { serviceKey: SERVICE_KEY, numOfRows: 10, pageNo: 1, resultType: 'json' },
        pick: (res) => res?.data?.getFoodKr?.item ?? [],
        Item: PdItemFood,
    },
    festival: {
        url: '/api-busan/6260000/FestivalService/getFestivalKr',
        params: { serviceKey: SERVICE_KEY, numOfRows: 10, pageNo: 1, resultType: 'json' },
        pick: (res) => res?.data?.getFestivalKr?.item ?? [],
        Item: PdItemFestival,
    },
    air: {
        url:  '/api-busan/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByRegion',
        params: { serviceKey: SERVICE_KEY, resultType: 'json', numOfRows: 10, pageNo: 1 },
        pick: (res) => res?.data?.getAirQualityInfoClassifiedByRegion?.item ?? [],
        Item: PanelAirAlert,
    },
    weather: {
        url: '/api-kma/1360000/VilageFcstInfoService_2.0/getVilageFcst',
        params: { serviceKey: SERVICE_KEY, dataType: 'JSON', base_date: '20250820', base_time: '0500', nx: 98, ny: 76, numOfRows: 50, pageNo: 1 },
        pick: (res) => res?.data?.response?.body?.items?.item ?? [],
        Item: PanelVillage,
    },
};

export default function NewsList({ category = 'busanFood' }) {
    const config = endpoints[category] ?? endpoints.busanFood;

    // axios + async/await
    const fetcher = async () => {
        if (!config.url) {
            let msg = `[${category}] url이 비어있습니다. src/components/NewsList.jsx의 endpoints에서 url을 채워주세요.`; // let 사용
            return Promise.resolve({ data: { __placeholder: true, message: msg } });
        }
        const res = await axios.get(config.url, { params: config.params });
        return res;
    };

    const [loading, response, error] = usePromise(fetcher, [category]);

    if (loading) return <ListBlock>불러오는 중…</ListBlock>;
    if (error)   return <ListBlock>에러 발생: {String(error.message || error)}</ListBlock>;
    if (!response) return null;

    if (response?.data?.__placeholder) {
        return <ListBlock style={{color:'#c00'}}>{response.data.message}</ListBlock>;
    }

    const data = config.pick(response);
    const Item = config.Item;

    return (
        <ListBlock>
            {Array.isArray(data) && data.length > 0
                ? data.map((it, idx) => <Item key={it?.UC_SEQ ?? it?.id ?? idx} article={it} />)
                : <div>데이터가 없습니다.</div>}
        </ListBlock>
    );
}
