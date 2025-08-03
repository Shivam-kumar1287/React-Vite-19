import { useState } from "react";

function CheckBox() {
    const [skills, setSkills] = useState([]); // Initialize as empty array
    
    const handleSkillChange = (event) => {
        const { value, checked } = event.target;
        
        if (checked) {
            setSkills(prevSkills => [...prevSkills, value]);
        } else {
            setSkills(prevSkills => prevSkills.filter(skill => skill !== value));
        }
    }

    return (
        <div>
            <h1>CheckBox</h1>
            
            <input 
                type="checkbox" 
                value="Php" 
                id="php"
                checked={skills.includes("Php")}
                onChange={handleSkillChange}
            />
            <label htmlFor="php">Php</label>
            <br/>
            
            <input 
                type="checkbox" 
                value="C++" 
                id="cpp"
                checked={skills.includes("C++")}
                onChange={handleSkillChange}
            />
            <label htmlFor="cpp">C++</label>
            <br/>
            
            <input 
                type="checkbox" 
                value="C" 
                id="c"
                checked={skills.includes("C")}
                onChange={handleSkillChange}
            />
            <label htmlFor="c">C</label>
            <br/>
            
            <input 
                type="checkbox" 
                value="JAVA" 
                id="java"
                checked={skills.includes("JAVA")}
                onChange={handleSkillChange}
            />
            <label htmlFor="java">JAVA</label>

            <h2>Selected Skills: {skills.join(", ")}</h2>
        </div>
    );
}

export default CheckBox;