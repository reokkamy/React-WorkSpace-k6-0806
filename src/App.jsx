import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewsPage from './pages/NewsPage.jsx';

export default function App() {
    return (
        <div>
            <h1 style={{padding:'12px 16px'}}>부산 정보창</h1>
            <Routes>
                <Route path="/" element={<Navigate to="/busanFood" replace />} />
                <Route path="/:category" element={<NewsPage />} />
            </Routes>
        </div>
    );
}
