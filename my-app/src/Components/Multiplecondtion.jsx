
import { useState } from 'react';
function  Multiplecondtion() {
  const [count, setCount] = useState(0);
  return (
    <>
   <div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>
    <h1>{count>10 ? 'number grether than 10' : 'noting'} num</h1>{
      
    }
   </div>
    </>
  )
}

export default Multiplecondtion
