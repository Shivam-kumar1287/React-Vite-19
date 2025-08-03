import React, { useState } from 'react';
function SelectBox() {
    const [gender, setGender] = useState('female');
    const [city, setCity] = useState('mumbai');
  return (
    <div>
<h1>Select Gender</h1>      
<input type="radio" onChange={(event)=> setGender(event.target.value)}  value={"male"} checked={gender === 'male'} name="Gender" id="male" />
<label htmlfor="male">Male</label>
<br />
<input type="radio" onChange={(event)=> setGender(event.target.value)}  value={"female"} checked={gender === 'female'} name="Gender" id="female" />
<label htmlfor="female">Female</label>
<h2>Select Gender {gender}</h2>
<br />
<br />
<hr />
<h2>Select City</h2>
<select onChange={(event)=> setCity(event.target.value)} defaultValue={"Delhi"}>
    <option value="city" onChange={(event)=> setCity(event.target.value)} >Mumbai</option>
    <option value="city" onChange={(evnet )=>setCity(event.target.value) }>Pune</option>
    <option value="city"  onChange={(event)=> setCity(event.target.value)}>Nagpur</option>
    <option value="city"  onChange={(event)=> setCity(event.target.value)}>Nashik</option>
</select>
<h1>your selected city is {city}</h1>
<br />
<br />

    </div>
  );
}
export default SelectBox;