import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

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

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoding] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoding(true);
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=20d572f0030748489213032ca15023b1',
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoding(false);
        };

        fetchData();
    }, []);

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
            {/* {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))} */}
            {articles.map((arti) => (
                <NewsItem key={articles.url} article={arti} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
