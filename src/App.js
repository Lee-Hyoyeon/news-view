import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
    const [data, setdata] = useState(null);
    const onClick = async () => {
        const response = await axios.get(
            'https://newsapi.org/v2/top-headlines?country=kr&apiKey=20d572f0030748489213032ca15023b1',
        );

        setdata(response.data);
    };

    return (
        <div>
            <button onClick={onClick}>불러오기</button>
            <p>
                {data && (
                    <textarea
                        rows={7}
                        value={JSON.stringify(data, null, 2)}
                        readOnly={true}
                    />
                )}
            </p>
        </div>
    );
}

export default App;
