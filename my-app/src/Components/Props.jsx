import React, { useState } from 'react';

function Props({ user: initialUser }) {  // Rename prop to avoid shadowing
  const [user, setUser] = useState(initialUser);  // Local state for editable user

  const handleNameChange = () => {
    setUser({ ...user, name: "Shivam" });  // Update only the name
  };

  return (
    <div>
      <h1>Props Component</h1>
      <p>This component demonstrates the use of props in React.</p>
      
      <h1 onClick={handleNameChange}>Name: {user.name}</h1>
      <button onClick={handleNameChange}>Change Name to "Shivam"</button>
      
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Props;

// app.js function code 


//  import Props from './Components/Props'
// function App() {
 
//   let userObject = {
//     name: "Shiva",
//     age: 23,
//     email: "shivam@gmail.com"
//   };
//   return (
//     <> 

//     <h1>Welcome to My App</h1>
//     {/* <Props  name ="Shivam" age = {23} email="esda"  /> */}
//     <Props user={userObject} />   
//     </>);
// }

// export default App
