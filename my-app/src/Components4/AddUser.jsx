
function AddUser({setUser}){
   
    return(
        <div>
            <h1>Add User </h1>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter User name" />
            <hr />
        </div>
    )
}

export default AddUser

/* App Function import { useState } from "react"
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function App() {
  const [user,setUser]=useState('')
  return (
    <div>
     <AddUser setUser={setUser} />
     <DisplayUser  user={user}/>
    </div>

  );
}
export default App; */