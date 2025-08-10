import { useContext } from "react";
import ContextData from './ContextData';
function Subject(){
    const sub=useContext(ContextData)
    return (
        <div style={{backgroundColor:'blue',padding:20}}>
            <h3>Subject Component {sub}</h3>
        </div>
    )
}
export default Subject;