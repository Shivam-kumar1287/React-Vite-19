import React, { useState } from "react";
import "./Inputpractice.css";

function App() {
  return <Inputpractice />;
}

function Inputpractice() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleCancel = () => {
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\nUsername: ${username}\nEmail: ${email}`);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Registration Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>ENTER YOUR EMAIL ID</label>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            className="form-input"
            required
          />
          <div className="form-feedback">Your email is: {email}</div>
        </div>

        <div className="form-group">
          <label>ENTER YOUR PASSWORD</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            className="form-input"
            required
            minLength="6"
          />
          <div className="form-feedback">Password: {password.replace(/./g, "*")}</div>
        </div>

        <div className="form-group">
          <label>ENTER YOUR USERNAME</label>
          <input
            type="text"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            className="form-input"
            required
          />
          <div className="form-feedback">Your username is: {username}</div>
        </div>

        <div className="button-group">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;