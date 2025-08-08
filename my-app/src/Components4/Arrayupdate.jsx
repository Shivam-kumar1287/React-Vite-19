import { useState } from 'react';

function ArrayUpdate() {
    const [data, setData] = useState([
        'anil', 'shiva'
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleUpdate = () => {
        if (inputValue.trim()) {
            // Create a copy of the array and update the last element
            const newData = [...data];
            newData[newData.length - 1] = inputValue;
            setData(newData);
            setInputValue(''); // Clear input after update
        }
    }

    return (
        <div>
            <h1>Array Update</h1>
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={handleUpdate}>Update</button>
            <div>
                {data.map((item, index) => (
                    <h2 key={index}>{item}</h2>
                ))}
            </div>
        </div>
    );
}

export default ArrayUpdate;