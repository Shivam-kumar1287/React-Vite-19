import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(`Hello ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name</label>
        <input 
          type="text" 
          name="name" 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      <p id="output">{output}</p>
    </div>
  );
}

export default NameForm;