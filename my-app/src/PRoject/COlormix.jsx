import { useState } from "react";

function ColorMix() {
    const [r, setr] = useState(0);
    const [g, setg] = useState(0);
    const [b, setb] = useState(0);

    const save = () => {
        console.log("saved");
        localStorage.setItem("color", JSON.stringify({ r, g, b }));
    }

    return (
        <div>
            <h1>Color Mix</h1>
            <div style={{
                background: `rgb(${r}, ${g}, ${b})`,
                height: "200px",
                width: "300px"
            }}></div>

            <label htmlFor="red">Red</label>
            <input
                type="range"
                id="red"
                value={r}
                onChange={(e) => setr(Number(e.target.value))}
                min={0}
                max={255}
            />

            <label htmlFor="green">Green</label>
            <input
                type="range"
                id="green"
                value={g}
                onChange={(e) => setg(Number(e.target.value))}
                min={0}
                max={255}
            />

            <label htmlFor="blue">Blue</label>
            <input
                type="range"
                id="blue"
                value={b}
                onChange={(e) => setb(Number(e.target.value))}
                min={0}
                max={255}
            />

            <button onClick={save}>Save Color Combination</button>
        </div>
    );
}

export default ColorMix;