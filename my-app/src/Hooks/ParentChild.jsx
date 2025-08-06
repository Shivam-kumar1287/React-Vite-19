import Child from "./Child";

function ParentChild() {
  const displayname = (name) => {
    alert(name);
  };

  return (
    <div>
      <h1>ParentChild Component</h1>
      <Child display={displayname}  name="ss"/>
       <Child display={displayname} name="asfds" />
      <Child display={displayname} name="Sdf" />
      <Child display={displayname} name="ads" />
      <Child display={displayname} name="sdfsdffs" />

    </div>
  );
}

export default ParentChild;
