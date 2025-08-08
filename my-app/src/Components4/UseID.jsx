import { useId } from 'react';

function UserForm() {
    // Generate unique IDs
    const nameId = useId();
    const passwordId = useId();
    
    return (
        <div>
            <form action="">
                <label htmlFor={nameId}>Enter User Name</label>
                <input 
                    id={nameId} 
                    type="text" 
                    placeholder="Enter name" 
                />
                <br /><br />
                <label htmlFor={passwordId}>Enter Password</label>
                <input 
                    id={passwordId} 
                    type="password"  // Changed to password type
                    placeholder="Enter password" 
                />
            </form>
        </div>
    );
}

export default UserForm;