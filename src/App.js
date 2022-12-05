import axios from 'axios';
import { useCallback, useState } from 'react';
import { Route, Router, Routes } from 'react-router';
import './App.css';
import Categories from './Categories';
import NewPage from './NewPage';
import NewsList from './NewsList';

function App() {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback((category) => setCategory(category), []);

    return (
        <div>
            <Categories category={category} onSelect={onSelect} />
            <NewsList ct={category} />
        </div>
    );
}

// function App() {
//     return (
//         <Routes>
//             <Route path="/:category?" element={NewPage} exact={true} />;
//         </Routes>
//     );
// }

export default App;
