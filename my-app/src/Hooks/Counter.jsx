import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    
    const handleCounterClick = () => {
        setCount(prevCount => prevCount + 1);
        setData(prevData => prevData + 1);
    }
    
    const handleDataClick = () => {
        setData(prevData => prevData + 1);
    }
    
    return (
        <div>
            <h1>Counter</h1>
            <h3>Count: {count}</h3>
            <h3>Data: {data}</h3>
            <button onClick={handleCounterClick}>Increment Both</button>
            <button onClick={handleDataClick}>Increment Data Only</button>
        </div>
    );
}

export default Counter;