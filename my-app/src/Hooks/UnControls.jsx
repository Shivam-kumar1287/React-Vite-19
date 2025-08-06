import { useRef } from "react";

function UnControls() {
  // Refs for uncontrolled form
  const userRef = useRef();
  const passRef = useRef();

  // Handler using querySelector (not recommended in React)
  const handleFrom = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log("Without useRef:", user, password);
  };

  // Handler using useRef (React way)
  const handleFromRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passRef.current.value;
    console.log("With useRef:", user, password);
  };

  return (
    <div>
      <h1>Uncontrolled (using querySelector)</h1>
      <form onSubmit={handleFrom}>
        <input
          type="text"
          name="username"
          id="user"
          placeholder="Enter username"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <h1>Uncontrolled (using useRef)</h1>
      <form onSubmit={handleFromRef}>
        <input
          type="text"
          ref={userRef}
          placeholder="Enter username"
        />
        <br />
        <br />
        <input
          type="password"
          ref={passRef}
          placeholder="Enter password"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UnControls;
