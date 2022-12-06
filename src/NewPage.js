import React from 'react';
import { useParams } from 'react-router';
import Categories from './Categories';
import NewsList from './NewsList';

const NewPage = ({ match }) => {
    const { category } = useParams('all');
    console.log(category);
    return (
        <div>
            <Categories />
            <NewsList category={category} />
        </div>
    );
};

export default NewPage;
