import ClassComponent from "./ClassComponent";
import { useState } from "react";
import ContextData from "./ContextData";

function Collage() {
  const [selectedSubject, setSelectedSubject] = useState("Math");

  return (
    <div style={{ backgroundColor: "red", padding: 20 }}>
      <h2>Collage component</h2>
      
      <div style={{ marginBottom: 20 }}>
        <label>Select Subject: </label>
        <select 
          value={selectedSubject} 
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="Math">Mathematics</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>
      </div>

      <ContextData.Provider value={selectedSubject}>
        <ClassComponent />
      </ContextData.Provider>
    </div>
  );
}

export default Collage;