import {useRef} from 'react'

function ForwordRef(props) {
    const inputRef= useRef();
    const updateRef=()=>{
        inputRef.current.value=100;
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="blue";
    }
   const udateto=()=>{
    inputRef.current.value= "";
    inputRef.current.focus();
        inputRef.current.style.backgroundColor="red";
  
   }
  return (
    
    <diV>

        <input type="text" ref={inputRef} />
        <button onClick={updateRef}> update Input Value</button>
        <button onClick={udateto}>unUpdate</button>

    </diV>
  )
}
export default ForwordRef;

/*
afer react 19 this way 

const UserInput(props)=>{
    return (
    <input type="text" ref={props.inputRef} />
    )
    }
*/