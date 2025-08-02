import React from 'react';

function JSX1() {
    const name = "JSX Component";
    
    // Return fruits as an array
    function frui() {
      return ["Apple", "Banana", "Orange", "Grapes", "Mango"];
    };
    
    // Return vegetables as an array
    function veg() {
      return ["Tomato", "Cucumber", "Potato", "Onion", "Carrot"];
    };

    // Create a ref (though it's not being used in this example)
    const ref = React.createRef();

    return (
        <div className="jsx-container">
            <h1>Welcome to {name}</h1>
            <p>This is a simple JSX component in a React application.</p>
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <p>Ref created: {ref ? "Yes" : "No"}</p>
            <button onClick={() => alert('Button clicked!')}>Click Me</button>
            
            <h2>Fruits</h2>
            <ul>
                {frui().map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
            <h2>Vegetables</h2>
            <ul>
                {veg().map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default JSX1;