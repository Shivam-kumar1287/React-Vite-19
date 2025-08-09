import { useState } from "react";

const useCustom = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    
    const toggleValue = (val) => {
        if (typeof val !== 'boolean') {
            setValue(prevValue => !prevValue);
        } else {
            setValue(val);
        }
    };
    
    return [value, toggleValue];
}

export default useCustom;