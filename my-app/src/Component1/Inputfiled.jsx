  import React, { useState } from "react";
function InputField() {
  const [name, setName] = useState("anil sidhu");  
  return (
    <div>
      <input 
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder="Enter your name" 
      />
      <h1>{name}</h1>
      <label>Enter name</label>
      <button onClick={()=>setName("")}>Clear</button>
    
    </div>
  );
}

export default InputField;