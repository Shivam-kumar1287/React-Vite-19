import { useState } from "react";

function DerivedState() {
    const [inputValue, setInputValue] = useState('');
    const [users, setUsers] = useState([]);
    
    const handleAddUser = () => {
        if (inputValue.trim()) {  // Only add non-empty values
            setUsers([...users, inputValue]);
            setInputValue('');  // Clear input after adding
        }
    }
    
    // Derived state - calculated from other state
    const totalUsers = users.length;
    
    return (
        <div>
            <h1>Derived State</h1>
            <h2>Total Users: {totalUsers}</h2>
            <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
                type="text" 
            />
            <button onClick={handleAddUser}>ADD</button> 
            
            <div>
                {users.map((user, index) => (
                    <h4 key={index}>{user}</h4>
                ))}
            </div>
        </div>
    );
}

export default DerivedState;