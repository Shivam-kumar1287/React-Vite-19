import { useState } from "react"
import ArrayUpdate from "./Components4/Arrayupdate";

function App() {
  const [user,setUser]=useState('')
  return (
    <div>
    <ArrayUpdate />
    </div>

  );
  }
export default App;