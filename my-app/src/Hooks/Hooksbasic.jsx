function Hooksbasic() {
  return (
    <div>
      <h1>React Hooks</h1>
    </div>
  );
}
export default Hooksbasic;

/*
type of Hooks 
1> useState
use state is a hook which is used to create a state variable and a function to update the state variable
use state is a function which takes an initial state and returns a state 
and a function to update the 
state variable
use state is a function which takes an initial state and returns a state 
and a function to update 
2> useEffect
 handle props side effect in with  useEffect
 in component
 1> male component
 2> pass component
 3> apply useEfect to handle side effect
 4> how to pass props as dependency in useEffect
 
<syntax 
 useEffect(pass function a parameter ,dependency)
 useEffect(()+>{
 //write your code here
 },[dependency])

   use
   * Remove  side effect inside component
   *Remove side effect inside component
   *use to fetch data from api
   *can use as life cycle Methods
   *use to fetch data from api
   *can use as life cycle 
   *can use as life dom Mainpulation 
   * 
3> useContext
4> useRef
5> useCallback
6> useMemo

useEffect(()=>{
    //call evevry time
    })
  
    
    useEffect(()=>{
    //call once time
    },[])

    useEffect(()=>{
    //call on changing state or dependency
 time
    },[dependency])

    useEffect(()=>{
    },[state1],[state1])

    useEffect(()=>{
        call on changes props
    },[props],)

Lifecycle Flow
Mounting:

constructor() → render() → componentDidMount()

Updating (when props/state change):

render() → componentDidUpdate()

Unmounting:

componentWillUnmount()

Error Handling (when error occurs):

componentDidCatch()


*/
