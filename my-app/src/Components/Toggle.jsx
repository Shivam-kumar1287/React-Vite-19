import { useState } from "react";
function Toggle() {

    const [display, setdisplay] = useState(true);
    return (
    
        <div>
      <h1>Toggle Component</h1>
      {display ? <h1>shivam</h1> : null} 
      <button onClick={() => setDisplay(!display)}>
        {display ? 'Hide' : 'Show'}
      </button>
    </div>
    );
 }    
 
export default Toggle;