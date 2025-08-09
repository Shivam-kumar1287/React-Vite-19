import useCustom from "./Custom";

function Custom1() {
    const [value, toggleValue] = useCustom(true);
    
    return (
        <div>
            <button onClick={() => toggleValue(false)}>custom</button>
            <button onClick={() => toggleValue(false)}>hide</button>
            <button onClick={() => toggleValue(true)}>show</button>
            
            {value && <h1>Custom Hooks in react js</h1>}
        </div>
    );
}

export default Custom1;