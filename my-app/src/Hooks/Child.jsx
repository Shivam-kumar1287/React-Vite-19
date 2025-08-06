function Child({ display ,name}) {
  return (
    <div>
      <h2>Child Component</h2>
      <h3>Hello from Parent!</h3>
      <button onClick={()=>display(name)}>Display Name</button>
    </div>
  );
}

export default Child;
