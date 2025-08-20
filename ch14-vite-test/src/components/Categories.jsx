import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },

  {
    name: 'busanFood',
    text: '부산맛집',
    icon: '🍽️',
  },
  {
    name: 'busanFestival',
    text: '부산축제',
    icon: '🎪',
  },
  {
    name: 'busanDust',
    text: '미세먼지',
    icon: '🌫️',
  },
  {
    name: 'busanWeather',
    text: '동네예보',
    icon: '🌤️',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  margin-bottom: 1rem;
  overflow-x: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 2px;
    }
  }
`;

const CategoryBlock = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 0.5rem;
  min-width: fit-content;
  background: #f8f9fa;
  border: 1px solid #e9ecef;

  &:hover {
    color: #495057;
    background: #e9ecef;
    transform: translateY(-1px);
  }

  // active 상태 스타일링
  &.active {
    font-weight: 600;
    border: 1px solid #007bff;
    background: #007bff;
    color: white;

    &:hover {
      background: #0056b3;
      color: white;
    }
  }

  // 부산 공공데이터 카테고리들에 대한 특별 스타일
  &[href*='busan'] {
    border-color: #17a2b8;

    &.active {
      background: #17a2b8;
      border-color: #17a2b8;

      &:hover {
        background: #138496;
      }
    }

    &:not(.active):hover {
      border-color: #17a2b8;
      background: rgba(23, 162, 184, 0.1);
    }
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <CategoryBlock
          key={c.name}
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          <span>{c.icon}</span>
          <span>{c.text}</span>
        </CategoryBlock>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
