function SelectBox() {
  return (
    <div>
<h1>Select Gender</h1>      
<input type="radio" name="Gender" id="male" />
<label for="male">Male</label>
<br />
<input type="radio" name="Gender" id="female" />
<label for="female">Female</label>
    </div>
  );
}
export default SelectBox;