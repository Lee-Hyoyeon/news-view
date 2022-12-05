import React from 'react';
import { useParams } from 'react-router';
import Categories from './Categories';
import NewsList from './NewsList';

const NewPage = () => {
    const { category } = useParams('all');

    return (
        <div>
            <Categories />
            <NewsList category={category} />
        </div>
    );
};

export default NewPage;
