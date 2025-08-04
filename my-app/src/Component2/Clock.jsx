import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [color, setColor] = useState('black');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div>
            <select onChange={(event) => setColor(event.target.value)}>
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="white">white</option>
                <option value="green">green</option>
                <option value="black">solid-black</option>
            </select>
            <h1 style={{ color: color, height: "2em" , backgroundColor:'black'}}>{time}</h1>
        </div>
    );
}

export default Clock;