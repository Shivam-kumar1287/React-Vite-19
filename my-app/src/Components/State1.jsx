function State1() {
  const [fruit, setValue] = useState('initial value');
  const [valu, setVal] = useState('initial value');

  const handleChange = () => {
    setValue('Apple');
    setVal('Banana');
  };

  return (
    <div>
      <h1>State Management Example</h1>
      <h1>{fruit}</h1>
      <h1>{valu}</h1>
      <button onClick={handleChange}>change value</button>
    </div>
  );
}

export default State1;
// /*
// State 
// State is a containet to store the data like variabel.
// this is mutatable and dynamic.
// State is used to create dynamic and interactive components in React applications. It allows components to manage their own data and respond to user interactions, server responses, or other events by re-rendering when the state changes.
// State is used to store the data in the component.
// we have to import it when we use it.
// it renders the component when the state changes.
// so that automatically re-render the component.
// State in React is a built-in object that allows you to create and manage dynamic data in your components. It enables components to respond to user input, server responses, and other events by re-rendering when the state changes. State is mutable, meaning it can be changed over time, unlike props which are immutable and passed down from parent to child components.
// State is typically initialized in the constructor of a class component or using the useState hook in functional components. When the state changes, React re-renders the component to reflect the new state, allowing for dynamic and interactive user interfaces.


// */ 