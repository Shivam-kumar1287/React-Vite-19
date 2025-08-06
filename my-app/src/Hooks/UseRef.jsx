import { useRef, useState } from 'react';

function UseRefExample() {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const inputHandler = () => {
        // Focus the input field
        inputRef.current.focus();
        
   inputRef.current.blur();
   inputRef.current.style.color='red';
   input.current.placeholder="enter a passowrd"
        
    };

    return (
        <div>
            <h1>useRef Example</h1>
            <input 
                ref={inputRef} 
                type='text' 
                placeholder='enter a name' 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={inputHandler}>Focus on Input Field</button>
        </div>
    );
}

export default UseRefExample;