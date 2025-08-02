function FunctionCall() {
    function exampleFunction() {
        alert("Function called!");
    }
    return (
        <div>
            <button onClick={exampleFunction}>Call Function</button>
            <p>This component demonstrates a simple function call in React.</p>
            <h1>Function Call Component</h1>
            <p>This is a simple function call component in React.</p>
        </div>
    );
}
export default FunctionCall;