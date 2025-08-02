import  '../styles/Ss.css'; 
import React from 'react';
function JSX(){     
    return (
        <div>           
            <h1>Welcome to JSX Component</h1>
            <p>This is a simple JSX component in a React application.</p>
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <button onClick={() => alert('Button clicked!')}>Click Me</button>
            <p>Feel free to modify this component as needed.</p>
            <form>
                <input type="text" placeholder="Type something..." />
                <button type="submit">Submit</button>
                <p>This is a form component.</p>
                <p>Feel free to add more form elements as needed.</p>
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <input type="checkbox" id="subscribe" />
                <label htmlFor="subscribe">Subscribe to newsletter</label>
                <textarea placeholder="Your message here..."></textarea>
                <select>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <input type="radio" name="choice" value="yes" id="yes" />
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="choice" value="no" id="no" />
                <label htmlFor="no">No</label>
                <input type="range" min="1" max="100" />
                <input type="color" />
                <input type="date" />
                <input type="time" />
                <input type="file" />
                <input type="number" placeholder="Enter a number" />
                <input type="search" placeholder="Search..." />
                <input type="tel" placeholder="Enter your phone number" />
                <input type="url" placeholder="Enter a URL" />
                <input type="hidden" value="hiddenValue" />
                <input type="submit" value="Submit Form" />
                <input type="reset" value="Reset Form" />
                <label htmlFor="textInput">Text Input:</label>
                <input type="text" id="textInput" placeholder="Enter text here" />
                <label htmlFor="emailInput">Email Input:</label>
            </form>
        </div>
    );
}
export default JSX;
