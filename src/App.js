import axios from 'axios';
import { useCallback, useState } from 'react';
import './App.css';
import Categories from './Categories';
import NewsList from './NewsList';

function App() {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback((category) => setCategory(category), []);
    return (
        <div>
            <Categories category={category} onSelect={onSelect} />
            <NewsList category={category} />
        </div>
    );
}

export default App;
