import React from 'react';
import styled, { css } from 'styled-components';

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

const CategoriesBlock = styled.div`
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
    font-size: 1.2rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: purple;
    padding-bottom: 0.24rem;

    &:hover {
        color: aliceblue;
    }

    ${(props) =>
        props.active &&
        css`
            font-weight: 600;
            border-bottom: 5px solid hotpink;
            color: red;
            &:hover {
                color: green;
            }
        `}

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                    key={c.name}
                    active={category === c.name}
                    onClick={() => onSelect(c.name)}
                >
                    {c.text} {/* 카테고리 이름 */}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
