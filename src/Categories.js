import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '기술',
    },
];

const CategoriesBlock = styled(NavLink)`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100px;
        overflow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover {
        color: #495057;
    }
    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }
    & + & {
        margin-left: 1rem;
    }
`;

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category>
                    {/* key={c.name} */}
                    {/* className={(isActive) => (isActive ? 'active' : '')} */}
                    {/* to={c.name === 'all' ? '/' : `/${c.name}`} */}
                    {/* <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/about" /> */}

                    {/* className 속성 */}
                    <NavLink
                        key={c.name}
                        to={c.name === 'all' ? '/' : `/${c.name}`}
                        className={({ isActive }) => {}}
                    >
                        {c.text}
                    </NavLink>
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
