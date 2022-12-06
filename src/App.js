import axios from 'axios';
import { useCallback, useState } from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
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
//     const [category, setCategory] = useState('all');
//     const onSelect = useCallback((category) => setCategory(category), []);
//     return (
//         <div>
//             <Categories category={category} onSelect={onSelect} />
//             <NewsList ct={category} />
//             <Routes>
//                 <Route path="/:category?" element={NewPage} exact={true} />;
//             </Routes>
//         </div>
//     );
// }

export default App;
