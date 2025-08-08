let count=0;
function  Pure() {
    console.log('Pure component is called');
    return (<div>
        <h1>Pure component</h1>
         <h1>Keep this component pure</h1>    
         <Cup />
         <Cup />
        <Cup />
        <Cup />
    </div>);
}
const Cup = () => {
     count=count+1;
    console.log('Cup component is called');
    return (<div>
        <h1>Cup {count}</h1>
    </div>);
}
export default Pure;