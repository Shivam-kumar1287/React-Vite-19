import { useState } from "react"
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
export default App;