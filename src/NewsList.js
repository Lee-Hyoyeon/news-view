import React from 'react';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    //대기중
    if (loading) {
        console.log(loading);
        return <NewsListBlock>대기중...</NewsListBlock>;
    }

    // 아직 articles 값이 설정되지 않았을때
    if (!articles) {
        return null;
    }

    //articles  유효할때
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
